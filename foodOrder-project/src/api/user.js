import api from './axios';
import { API_ENDPOINTS } from './config';

export const userService = {
  //회원가입
  signUp: async (userData) => {
    try {
      await api.post(API_ENDPOINTS.MEMBER.SIGNUP, userData);
    } catch (error) {
      if (error) {
        console.log('에러 응답객체 :', error.response.data);
        throw error;
      }
    }
  },
  //sns login(kakao)
  snsLogin: async (code) => {
    try {
      const response = await api.post(API_ENDPOINTS.MEMBER.SNSLOGIN, { code });

      //토큰저장
      const token = response.data.token;
      sessionStorage.setItem('token', token);
    } catch (error) {
      console.log('에러 응답객체 :', error.response.data);
      throw error;
    }
  },
  //이메일 로그인
  login: async (userData) => {
  
    try {
      //백엔드 서버용
      const { data } = await api.post(API_ENDPOINTS.MEMBER.Login, userData);


      // 토큰 저장
      if (data.token) {
        sessionStorage.setItem('token', data.token);
      }

     
    } catch (error) {
      console.log('에러 응답객체 :', error.response.data);
      throw error
    }
  },

  //  내 정보 조회 (JWT 토큰 사용)
  getMyInfo: async () => {

    try {
      const { data } = await api.get(API_ENDPOINTS.MEMBER.ME);

      console.log(data);

      return data;
    } catch (error) {
      console.error('내 정보 조회 실패 : ', error.response.data);
      throw error;
    }
  },

 checkEmail : async (email) => {
  try{
    const { data } = await api.post(API_ENDPOINTS.MEMBER.CHECKEMAIL, {email} )
  return data;
  }catch(error){
    console.error("email 가입여부 조회 실패 :", error);
    throw error;
  }
  
 },



  // user 정보 수정 (마이페이지 수정)
  updateUserProfile: async (userNo, updatedData) => {
    try {
      const { data } = await api.patch(API_ENDPOINTS.USERS.PROFILE_UPDATE(userNo), camelToSnake(updatedData), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return data;
    } catch (error) {
      console.error('회원정보 수정 실패:', error.response?.data?.message || error.message);
      throw new Error('서버 통신 불량');
    }
  },

  //회원탈퇴 기능
  deleteUser: async (userNo) => {
    try {
      const { data } = await api.patch(API_ENDPOINTS.USERS.DELETE(userNo));
      return data;
    } catch (error) {
      console.error('회원탈퇴 실패:', error.response?.data?.message || error.message);
      throw error;
    }
  },

  // 비밀번호 찾기 - 비밀번호 재설정
  // 이메일이 아이디이기때문에 파라미터 userId로 받음
  resetPassword: async (userId, userPwd, code) => {
    try {
      const response = await api.post(API_ENDPOINTS.USERS.RESET_PASSWORD, camelToSnake({ userId, userPwd, code }));
      return response;
    } catch (error) {
      console.error('비밀번호 변경 실패 :', error.response?.data?.message || error.message);
      throw error;
    }
  },

  changePassword: async ({ userNo, currentPassword, newPassword }) => {
    try {
      const payload = {
        user_no: userNo,
        current_password: currentPassword,
        new_password: newPassword,
      };

      const { data } = await api.patch(API_ENDPOINTS.USERS.CHANGE_PASS(userNo), payload);
      return data;
    } catch (error) {
      if (error.response) {
        const message = error.response?.data?.message || '비밀번호 변경에 실패했습니다1.';
        throw new Error(message);
      }
    }
  },
};
