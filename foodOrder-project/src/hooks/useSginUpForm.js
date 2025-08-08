import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import { userService } from '../api/user';
import { useNavigate } from 'react-router-dom';
import { emailService } from '../api/email';

const signupSchema = yup.object().shape({
  email: yup.string().required('이메일을 입력해주세요').email('유효한 이메일 형식으로 작성해주세요'),
  userName: yup
    .string()
    .required('이름을 입력하세요.')
    .matches(/^[가-힣a-zA-Z]+$/, '이름은 영어 또는 한글만 입력 가능합니다.')
    .max(10, '이름은 최대 10자까지만 입력 가능합니다.'),

  userPwd: yup
    .string()
    .required('비밀번호를 입력하세요.')
    .matches(/^(?=.*[a-zA-Z]).{5,}$/, '비밀번호는 영문자를 포함해 5자 이상이어야 합니다.'),
});

export const useSignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: 'onChange',
  });

  const navigator = useNavigate();

  // 이메일 인증키 메일로 보내준여부
  const [emailAuthStarted, setEmailAuthStarted] = useState(false);
  // 이메일 인증여부(인증키가 일치여부)
  const [emailVerified, setEmailVerified] = useState(false);

  const onSubmit = async (data) => {
    if (!emailVerified) {
      alert('이메일 인증 필요');
      return navigator('/signUp');
    }

    try {
      await userService.signUp(data);
      alert('회원가입이 완료되었습니다.');
      navigator('/login');
    } catch ({ response }) {
      alert(response.data.message);
    }
  };

  // 인증코드 보내기
  const handleEmailAuth = async () => {


    try {

      const emaildata = watch('email');

      if (!emaildata) {
        setError('email', {
          type: 'manual',
          message: '이메일을 입력해주세요',
        });
        return;
      }

      const checkEmail = await userService.checkEmail(emaildata);

      if(checkEmail){
        alert("이미 가입한 이메일입니다.")
        return;
      }

      await emailService.sendEmailCode(emaildata);
      alert('인증코드가 발송되었습니다.');
      setEmailAuthStarted(true);
    } catch ({ response }) {
      alert(response.data.message);
    }
  };

  const handleVerifyCode = async (authCode) => {
   const res = await emailService.verifyEmailCode(watch('email'), authCode);

   if(res){
    setEmailVerified(true);
    alert('이메일 인증 완료');
   }else{
    setEmailVerified(res);
    alert('이메일 인증번호를 확인해주세요');
   }
    
  };

  // 컴포넌트에서 사용할 것을 반환
  return {
    register,
    errors,
    onSubmit,
    watch,
    emailVerified,
    setEmailVerified,
    emailAuthStarted,
    setEmailAuthStarted,
    handleSubmit,
    handleEmailAuth,
    handleVerifyCode
  };
};
