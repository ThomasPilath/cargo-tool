import { create } from "zustand";

type UpdateCountType = {
  count: number;
  changeCount: (newCount: number) => void
}

export const useUpdateCountStore = create<UpdateCountType>((set) => ({
  count: 0,
  changeCount(newCount) {
    set({count: newCount})
  }
}))

type SaveCountType = {
  countTable: Set<number>;
  addCount: (newCount: number) => void
}

export const useSaveCountStore = create<SaveCountType>((set) => ({
  countTable: new Set(),

  addCount(newCount) {
    set((current) => {
      const newTable = new Set([...current.countTable, newCount])
      return { countTable: newTable }
    })
  }
}))