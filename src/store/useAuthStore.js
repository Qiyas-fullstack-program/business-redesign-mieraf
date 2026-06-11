import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  isLoggedIn: false,
  user: null,

  login: (username) => set({
    isLoggedIn: true,
    user: { username, role: "owner" }
  }),

  logout: () => set({
    isLoggedIn: false,
    user: null
  }),
}));