import { create } from "zustand";

//* Store row of Table
type Row = {
  reward: number | string,
  loading: string,
  unloading: string[]
}

type RowStore = {
  list: Row[]
  updateList: (newRow: Row[]) => void
}

export const useRowStore = create<RowStore>((set) => ({
  list: [
    {
      reward: "Revenus",
      loading: "Chargement",
      unloading: ["",""]
    },
    {
    reward: 0,
    loading: "Choisir",
    unloading: ["",""]
    }
  ],

  updateList(newRow) {
    set({list: newRow})
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
  list: CelestialObjectFiltered[];
  updateList: (newList: CelestialObjectFiltered[]) => void
}

export const useCelestialStore = create<CelestialStore>((set) => ({
  list: [],

  updateList(newList) {
    set({list: newList})
  }
}))