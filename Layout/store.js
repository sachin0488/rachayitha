import { create } from 'zustand'

export const useLayoutStore = create(set => ({
  sidebar: {
    isOpen: false,
    toggle: () => set(state => ({ ...state, sidebar: { ...state.sidebar, isOpen: !state.sidebar.isOpen } })),
    open: () => set(state => ({ ...state, sidebar: { ...state.sidebar, isOpen: true } })),
    close: () => set(state => ({ ...state, sidebar: { ...state.sidebar, isOpen: false } })),
  },
}))
