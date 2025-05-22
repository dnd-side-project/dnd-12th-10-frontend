import { create } from 'zustand'

interface MemoListModalStore {
  isOpen: boolean
  closeModal: VoidFunction
  openModal: VoidFunction
}

export const useMemoListModalStore = create<MemoListModalStore>((set) => ({
  isOpen: false,
  closeModal: () => set({ isOpen: false }),
  openModal: () => set({ isOpen: true }),
}))
