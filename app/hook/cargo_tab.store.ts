import { create } from "zustand";

//* Store row of Table
type RowType = {
  reward: number | string,
  loading: number | string,
  unloading: number[]
}

type StoreRowListType = {
  rowList: RowType[];
  updateRowList: (newRowList: RowType[]) => void
}

export const storeRowList = create<StoreRowListType>((set) => ({
  rowList: [
    {
      reward: "Revenus",
      loading: "Chargement",
      unloading: [0,0]
    },
    {
    reward: 0,
    loading: 0,
    unloading: [0,0]
    }
  ],

  updateRowList(newRowList) {
    set({rowList: newRowList})
  }
}))

//* Store list of planets
type CelestialObjectFiltered = {
  id: number;
  name: string;
  parent_id: number;
  type: string;
}

type CelestialListType = {
  celestialList: CelestialObjectFiltered[];
  updateCelestialList: (newCelestialList: CelestialObjectFiltered[]) => void
}

export const storeCelestialList = create<CelestialListType>((set) => ({
  celestialList: [],

  updateCelestialList(newCelestialList) {
    set({celestialList: newCelestialList})
  }
}))