import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: { name: "John", _id: 1234, age: 30 },
  isLoading: false,
  isLoggedIn: false,
  login: () => {
    console.log("We logged in");
    set({ isLoggedIn: true, isLoading: true });
  },
  logout: () => {
    console.log("We logged out");
    set({ isLoggedIn: false, isLoading: false });
  },
}));
