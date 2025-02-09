import { create } from 'zustand'

interface AuthStore {
  isLogin: boolean
  setIsLogin: (state: boolean) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLogin: false,
  setIsLogin: (state: boolean) => set({ isLogin: state }),
}))
