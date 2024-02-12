import { create } from 'zustand'

export const useBearStore = create((set) => ({
  loaded: false,
  setLoaded: (value = true) =>
    set((state) => ({ loaded: (state.loaded = value) })),
  keyIndex: 0,
  setKeyIndex: (value = 0) =>
    set((state) => ({ keyIndex: (state.loaded = value) })),
  activeLoopChosen: true,
  deOrActivateLoopChosen: (value = true) =>
    set((state) => ({ activeLoopChosen: (state.activeLoopChosen = value) })),
  chosenContent: 0,
  setChosenContent: (value) =>
    set((state) => ({ chosenContent: (state.chosenContent = value) })),
  lang: 'en',
  setLang: (value) => set((state) => ({ lang: (state.lang = value) })),
  headerHeight: 146,
  setHeaderHeight: (value) =>
    set((state) => ({ headerHeight: (state.headerHeight = value) })),
}))
