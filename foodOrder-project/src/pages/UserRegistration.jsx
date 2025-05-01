import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import useUserStore from '../store/UserStore';
import axios from 'axios';



const schema = yup.object().shape({
  name: yup.string().required('이름을 입력하세요'),
  age: yup.number().min(13,'13세 이하는 가입할 수 없습니다.'),
  email: yup.string().email('유효한 이메일 형식이 아닙니다.').required('이메일을 입력하세요'),
  id: yup.string().required('아이디를 입력하세요'),
  pwd: yup
    .string()
    .matches(/^(?=.*[a-zA-Z]).{5,}$/, '비밀번호는 영문자를 포함해 5자 이상이어야 합니다.')
    .required('비밀번호를 입력해주세요'),
});

const UserRegistration = () => {
  const { addUser } = useUserStore();
  // 아이디 중복검사 -> false 사용 불가 /  true  사용가능
  const [idValidation, setIdValidation] = useState(false);

  const {
    // 폼 객체에는 get과 set이 존재함 value={id} 이렇게 넣지말고 form 데이터에 있는 걸로 활용하자
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const idCheck = async () => {
    const inputId = getValues('id')


    try {
      const res = await axios.get(`http://localhost:3001/usersDB?id=${inputId}`);
      if (res.data.length > 0) {
        alert("❌ 이미 존재하는 아이디입니다.");
        setValue('id', '')
        setIdValidation(false);
       
      } else {
        alert("✅ 사용 가능한 아이디입니다.");
        setIdValidation(true);
      }
    } catch (error) {
      console.error("ID 중복 검사 중 오류:", error);
      setIdValidation(false);
    }
  };

  useEffect(() => {
    console.log("중복검사 상태:", idValidation);
  }, [idValidation]);


  const onSumbit = (data) => {
    console.log(data)
    addUser(data)
    alert(`입력성공! 이름 : ${data.name}  이메일 : ${data.email}`);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSumbit)}>
      <label>ID</label>
      <input type="text" {...register('id')} />
      <button type="button" onClick={idCheck}>중복확인</button>
      
      {errors.id && <ErrorText>{errors.id.message}</ErrorText>}
      
      <label>password</label>
      <input type="text" {...register('pwd')} />
      {errors.pwd && <ErrorText>{errors.pwd.message}</ErrorText>}

      <label>이름</label>
      <input type="text" {...register('name')} />
      {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

      <label>나이</label>
      <input type="text" {...register('age')} />
      {errors.age && <ErrorText>{errors.age.message}</ErrorText>}

      <label>이메일</label>
      <input type="email" {...register('email')} />
      {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

       { idValidation? <button type="button"> 회원가입</button> : ''}


    </FormWrapper>
  );
};

export default UserRegistration;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 18px;
  max-width: 600px;
  margin: 0 auto;

  input {
    padding: 8px;
    border: 1px solid #cccccc;
    border-radius: 4px;
  }

  button {
    padding: 10px;
    background:  #ff5100;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`;

const ErrorText = styled.p`
  font-size: 12px;
  color: red;
  margin: -8px 0 8px 0;
`;
