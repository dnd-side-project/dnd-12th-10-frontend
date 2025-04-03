import { getAccessToken } from '@/utils/auth'
import { create } from 'zustand'

interface AuthStore {
  isLoggedIn: boolean
  setIsLogin: (state: boolean) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: !!getAccessToken(),
  setIsLogin: (state: boolean) => set({ isLoggedIn: state }),
}))
