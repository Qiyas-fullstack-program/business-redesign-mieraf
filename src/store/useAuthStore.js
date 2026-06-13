import { create } from 'zustand';
import { jwtDecode } from 'jwt-decode';

export const useAuthStore = create((set, get) => ({
  isLoggedIn: false,
  user: null,
  token: null,

  login: (username) => {
    const payload = {
      username,
      role: "admin",
      business: "Ethio Shine Wash",
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 7200, // 2 hours
    };

    const encodeBase64Url = (obj) => {
      return btoa(JSON.stringify(obj))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    };

    const header = { alg: "HS256", typ: "JWT" };
    const token = `${encodeBase64Url(header)}.${encodeBase64Url(payload)}.fakesignaturefordemo`;

    localStorage.setItem('token', token);

    set({
      isLoggedIn: true,
      user: payload,
      token
    });

    return token;
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ isLoggedIn: false, user: null, token: null });
  },

  checkAuth: () => {
    const token = localStorage.getItem('token');
    if (!token) {
      set({ isLoggedIn: false, user: null, token: null });
      return false;
    }

    try {
      const decoded = jwtDecode(token);
      const isExpired = decoded.exp * 1000 < Date.now();

      if (isExpired) {
        get().logout();
        return false;
      }

      set({
        isLoggedIn: true,
        user: decoded,
        token
      });
      return true;
    } catch (error) {
      console.error("Token validation failed:", error);
      get().logout();
      return false;
    }
  }
}));