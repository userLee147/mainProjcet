import axios from 'axios';
import { API_CONFIG } from './config';

// 예시입니다. 저희 프로젝트에 맞게 변경해야 합니다.
const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: API_CONFIG.HEADERS,
});

// 토큰형식임으로 요청을 보낼때마다 토큰을 담아서 준다.
// 요청 인터셉터 - 토큰 자동 추가
api.interceptors.request.use(
  (config) => {
  
    const token = sessionStorage.getItem('token');

   
    if (token) {

      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// axios에 대한 오류를 빠르게 잡을 수 있음
// .use() 함수는 모든 Axios 요청에 대해 공통 응답 처리나 에러 처리를 하고 싶을 때 사용하는 것

// 헤더에 토큰을 반환할꺼라서 header에 인증토큰을 담아서 보내야 되기 때문에 response로 보내자! 
api.interceptors.response.use(
  // 응답성공
  (response) => response,
  
  // 응답 실패
  (error) => {
    if (error.response) {
      //서버거 응답을 함
      const { status, data } = error.response;
      switch (status) {
        case 401:
          //인증에러
          window.location.href = '/login';
          break;
        case 403:
          console.error('접근권한이 없습니다.');
          break;
        case 404:
          console.error('요청한 리소스를 찾을 수 없습니다.');
          break;
        case 500:
          console.error('서버 에러 발생');
          break;
        default:
          console.error('API 에러 : ', data);
      }
    } else if (error.request) {
      //요청은 했지만 응답을 받지 못함
      console.error('네트워크 에러 : ', error.request);
    } else {
      console.error('에러 : ', error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
