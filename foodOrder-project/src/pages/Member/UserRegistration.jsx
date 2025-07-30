import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import useUserStore from '../../store/UserStore';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ContentTitle } from '../../styled/common/common';

const schema = yup.object().shape({
  name: yup.string().required('이름을 입력하세요'),
  email: yup.string().email('유효한 이메일 형식이 아닙니다.').required('이메일을 입력하세요'),
  userId: yup.string().required('아이디를 입력하세요'),
  userPwd: yup
    .string()
    .matches(/^(?=.*[a-zA-Z]).{5,}$/, '비밀번호는 영문자를 포함해 5자 이상이어야 합니다.')
    .required('비밀번호를 입력해주세요'),
  checkPwd: yup
    .string()
    // yup.ref('userPw')는 다른 필드(userPw) 값을 참조
    // 즉, userPwCheck가 userPw와 같은지 검사
    // null은 비어있을 수도 있음을 대비한 처리
    // oneOf([허용할 값 ~~~ ], '에러 메세지')
    .oneOf([yup.ref('userPwd'), null], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호 확인을 입력하세요.'),
});

const UserRegistration = () => {
  const { addUser } = useUserStore();
  // 아이디 중복검사 -> false 사용 불가 /  true  사용가능

  const {
    // 폼 객체에는 get과 set이 존재함 value={id} 이렇게 넣지말고 form 데이터에 있는 걸로 활용하자
    register,
    handleSubmit,
    getValues,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigator = useNavigate();

  const checkPwd = (newPwd) => {
    if (getValues('checkPwd') === newPwd) {
      clearErrors('checkPwd');
    } else {
      setError('checkPwd', { type: 'manual', message: '비밀번호가 일치하지 않습니다.' });
    }
  };

  const idCheck = async (newid) => {
    try {
      const res = await axios.get(`http://localhost:8888/api/members?userId=${newid}`);
      if (res.data > 0) {
        setError('userId', { type: 'manual', message: '이미 사용중인 아이디입니다.' });
      } else {
        clearErrors('userId');
      }
    } catch (error) {
      console.log('중복확인 에러 : ', error);
    }
  };

  // useEffect(() => {
  //   console.log("id 상태:", idValidation);
  // }, [idValidation]);

  const onSumbit = (data) => {
    // errors 객체를 찾기위해서는 아래와 같이 찾고 // errors.message가 아니라 key 값의 존재여부로 찾을 수 있음
    if (Object.keys(errors).length > 0) return; // 중복 체크 실패했으면 제출 차단
    addUser({ ...data, log: false });
    alert('회원가입성공 로그인해주세요!');
    navigator('/');
  };

  return (
    <div>
      <ContentTitle>회원가입</ContentTitle>
      <FormWrapper onSubmit={handleSubmit(onSumbit)}>
        <div>
          <label>아이디</label>
          <input type="text" {...register('userId')} onBlur={(e) => idCheck(e.target.value)} />
          {errors.userId && <ErrorText>{errors.userId.message}</ErrorText>}
        </div>

        <div>
          <label>비밀번호</label>
          <input type="password" {...register('userPwd')} />
          {errors.userPwd && <ErrorText>{errors.userPwd.message}</ErrorText>}
        </div>

        <label htmlFor="">비밀번호확인</label>
        <input type="password" {...register('checkPwd')} onBlur={(e) => checkPwd(e.target.value)} />
        {errors.checkPwd && <ErrorText>{errors.checkPwd.message}</ErrorText>}

        <label>이름</label>
        <input type="text" {...register('name')} />
        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

        <label>나이</label>
        <input type="text" {...register('age')} />
        {errors.age && <ErrorText>{errors.age.message}</ErrorText>}

        <label>이메일</label>
        <input type="email" {...register('email')} />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

        <button type="submit"> 회원가입</button>
      </FormWrapper>
    </div>
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
    background: #ff5100;
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
