import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../store/UserStore';
import { CommonBtn2 } from '../../styled/common/common';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import CheckPwModal from '../../components/Modal/CheckPwModal';

// yup 스키마
const schema = yup.object().shape({
  name: yup.string().required('이름을 입력하세요'),
  age: yup.number().typeError('숫자를 입력하세요').min(13, '13세 이하는 가입할 수 없습니다.'),
  email: yup.string().email('유효한 이메일 형식이 아닙니다.').required('이메일을 입력하세요'),
  userPwd: yup
    .string()
    .matches(/^(?=.*[a-zA-Z]).{5,}$/, '비밀번호는 영문자를 포함해 5자 이상이어야 합니다.')
    .required('비밀번호를 입력해주세요'),
});

const UserEdit = () => {
  const navigate = useNavigate();
  const { currentUser, updateUser } = useUserStore();
  const [isEditing, setIsEditing] = useState(false); // 수정 상태 추가
  const [isOnpen, setIsOpen] = useState(false);
  const [isCheckOpen, setIsCheckOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // 로그인 여부 확인
  useEffect(() => {
    if (!currentUser) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/');
    } else {
      // 기본값 세팅
      setValue('name', currentUser.name || '');
      setValue('age', currentUser.age || '');
      setValue('email', currentUser.email || '');
      setValue('userPwd', currentUser.userPwd || '');
    }
  }, [currentUser, setValue, updateUser]);

  const onSubmit = async (data) => {
    try {
      await updateUser({ ...currentUser, ...data });
      alert('정보가 수정되었습니다.');
      setIsEditing(!isEditing);
    } catch (error) {
      alert('정보 수정 중 오류가 발생했습니다.');
      console.error('업데이트 실패:', error);
    }
  };

  const cancelEdit = () => {
    setValue('name', currentUser.name || '');
    setValue('age', currentUser.age || '');
    setValue('email', currentUser.email || '');
    setValue('userPwd', currentUser.userPwd || '');
    // reset({
    //   name: currentUser.name ||'',
    //   age :currentUser.age||'',
    //   email : currentUser.email||'',
    //   userPwd : currentUser.userPwd||''
    // })
    // restet 이 맨처음 값으로 가져와서 사용  x
    setIsEditing(false);
  };

  return (
    <>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <h2>개인정보 수정</h2>

        <label>이름</label>
        <input type="text" {...register('name')} readOnly={!isEditing} />
        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

        <label>나이</label>
        <input type="number" {...register('age')} readOnly={!isEditing} />
        {errors.age && <ErrorText>{errors.age.message}</ErrorText>}

        <label>이메일</label>
        <input type="email" {...register('email')} readOnly={!isEditing} />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

        <label>비밀번호</label>
        <input type="password" {...register('userPwd')} readOnly />
        {errors.userPwd && <ErrorText>{errors.userPwd.message}</ErrorText>}

        <button type="button" onClick={() => setIsCheckOpen(true)}>
          비밀번호 수정하기
        </button>

        <div>
          {isEditing ? (
            <>
              <button type="submit">수정 완료</button>
              <button type="button" onClick={cancelEdit}>
                수정 취소
              </button>
            </>
          ) : (
            <button type="button" onClick={() => setIsEditing(!isEditing)}>
              수정하기
            </button>
          )}
          <CommonBtn2 type="button" onClick={() => setIsOpen(true)}>
            회원탈퇴
          </CommonBtn2>
        </div>
      </FormWrapper>
      {isOnpen && <Modal setIsOpen={setIsOpen}></Modal>}
      {isCheckOpen && <CheckPwModal setIsCheckOpen={setIsCheckOpen}></CheckPwModal>}
    </>
  );
};

export default UserEdit;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 18px;
  max-width: 600px;
  margin: 0 auto;

  input {
    padding: 8px;
    border: 1px solid #e9e9e9;
    border-radius: 4px;
  }

  input:read-only {
    background-color: #e9e9e9;
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
