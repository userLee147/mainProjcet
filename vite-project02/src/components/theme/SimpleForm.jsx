import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const schema = yup.object().shape({
  name: yup.string().required('이름을 입력하세요'),
  email: yup.string().email('유효한 이메일 형식이 아닙니다.').required('이메일을 입력하세요'),
});

const SimpleForm = () => {
  //register : 태그의 속성을 반환해주는 함수
  // handleSubmit : 유효성검사를 실행하는 함수 끝나면 onSumbit을 실행하는 함수를 반환
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSumbit = (data) => {
    alert(`입력성공! 이름 : ${data.name}  이메일 : ${data.email}`);
  };
  return (
    <FormWrapper onSubmit={handleSubmit(onSumbit)}>
      <label>이름</label>
      <input type="text" {...register('name')} />
      {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

      <label>이메일</label>
      <input type="email" {...register('email')} />
      {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

      <button type="submit">제출</button>
    </FormWrapper>
  );
};

export default SimpleForm;

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
    background: blueviolet;
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
