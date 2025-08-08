import api from './axios';
import { API_ENDPOINTS } from './config';

export const emailService = {

  sendEmailCode: async (email) => {

    const { data } = await api.post(API_ENDPOINTS.EMAIL.SEND, { email });
    return data;
  },

  verifyEmailCode: async (email, code) => {
    const { data } = await api.post(API_ENDPOINTS.EMAIL.VERIFY, { email, code });
    return data
  },
}