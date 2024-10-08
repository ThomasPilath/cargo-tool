import { create } from "zustand";

//* Store header row of Table
export type HeaderRow = {
  reward: string,
  loading: string,
  unloading: string[]
}

type HeaderRowStore = {
  headerRow: HeaderRow
  updateHeaderRow: (newRow: HeaderRow) => void
}

export const useHeaderRowStore = create<HeaderRowStore>((set) => ({
  headerRow: {
    reward: "Revenus",
    loading: "Chargement",
    unloading: ["Choisir","Choisir"]
  },

  updateHeaderRow(newRow) {
    set({headerRow: newRow})
  }
}))

//* Store row of Table
export type Row = {
  reward: number,
  loading: string,
  unloading: number[]
}

type RowStore = {
  rowList: Row[]
  updateRowList: (newList: Row[]) => void
  updateReward: (rowIndex: number, newReward: number) => void
  updateLoading: (rowIndex: number, newLoading: string) => void
  updateUnloading: (rowIndex: number, newUnloading: number[]) => void
}

export const useRowStore = create<RowStore>((set) => ({
  rowList: [
    {
    reward: 0,
    loading: "Choisir",
    unloading: [0,0]
    },
    {
      reward: 0,
      loading: "Choisir",
      unloading: [0,0]
    }
  ],

  updateRowList(newList: Row[]) {
    set({rowList: newList})
  },

  updateReward(rowIndex: number, newReward: number) {
    set((state) => ({
      rowList: state.rowList.map((row, index) => {
        if (index === rowIndex) {
          return { ...row, reward: newReward }
        }
        return row
      })
    }))
  },

  updateLoading(rowIndex: number, newLoading: string) {
    set((state) => ({
      rowList: state.rowList.map((row, index) => {
        if (index === rowIndex) {
          return { ...row, loading: newLoading }
        }
        return row
      })
    }))
  },

  updateUnloading(rowIndex: number, newUnloading: number[]) {
    set((state) => ({
      rowList: state.rowList.map((row, index) => {
        if (index === rowIndex) {
          return { ...row, unloading: newUnloading }
        }
        return row
      })
    }))
  }
}))

//* Store list of planets
type CelestialObjectFiltered = {
  id: number;
  name: string;
  parent_id: number;
  type: string;
}

type CelestialStore = {
  celestialList: CelestialObjectFiltered[];
  updateCelestialList: (newList: CelestialObjectFiltered[]) => void
}

export const useCelestialStore = create<CelestialStore>((set) => ({
  celestialList: [],

  updateCelestialList(newList) {
    set({celestialList: newList})
  }
}))