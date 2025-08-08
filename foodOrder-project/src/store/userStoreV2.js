import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const UserStoreV2 = create(
  persist((set) => ({
    currentUser: null,
    isAuthenticated: false,

    JWTLogin: (member) => {
      set({
        currentUser: member,
        isAuthenticated: true,
      });

      if (member.socialType) {
        localStorage.setItem('socialType', member.socialType);
      }
    },

    JWTLogout: () => {
      set({
        currentUser: null,
        isAuthenticated: false,
      });
    },
  }))
);
