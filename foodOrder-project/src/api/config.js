const { VITE_SPRING_URL } = import.meta.env;

export const API_CONFIG = {
  BASE_URL: `${VITE_SPRING_URL}`,
  HEADERS: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export const API_ENDPOINTS = {

  MEMBER : {
    BASE :'/v2/member',
    //session 로그인 test
    // LOGIN : '/v2/member/login',
    // LOGOUT : '/v2/member/logout'
    //jWT 로그인
    Login :'/v2/member/jwtLogin',
    SNSLOGIN :'/v2/member/kakao/login',
    SIGNUP :'/v2/member/signup',
    ME:'/v2/member/me',
    CHECKEMAIL:'/v2/member/checkEmail',
  },

  EMAIL :{
    BASE :'/email',
    SEND : '/email/send',
    VERIFY: '/email/verify'

  },
  ORDER : {

  },

  MENU : {

  },


  
}
