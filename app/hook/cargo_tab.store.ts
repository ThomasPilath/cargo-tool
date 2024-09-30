import { create } from "zustand";

//* Store status of checkbox
type updateCheckType = {
  checkStatus: boolean;
  updateCheckStatus: (newCheckStatus: boolean) => void
}

export const storeUpdateCheck = create<updateCheckType>((set) => ({
  checkStatus: false,

  updateCheckStatus(newCheckStatus) {
    set({checkStatus: newCheckStatus})
  }
}))

//* Store selected planet ID
type SelectedIdType = {
  selectedId: number;
  updateSelectedId: (newId: number) => void
}

export const storeSelectedId = create<SelectedIdType>((set) => ({
  selectedId: 0,

  updateSelectedId(newId) {
    set({selectedId: newId})
  }
}))

//* Store list of planets
type PlanetListType = {
  planetList: CelestialObjectFiltered[];
  updatePlanetList: (newPlanetList: CelestialObjectFiltered[]) => void
}

export const storePlanetList = create<PlanetListType>((set) => ({
  planetList: [],

  updatePlanetList(newPlanetList) {
    set({planetList: newPlanetList})
  }
}))

//* Store list of moons
type MoonListType = {
  moonList: CelestialObjectFiltered[];
  updateMoonList: (newMoonList: CelestialObjectFiltered[]) => void
}

export const storeMoonList = create<MoonListType>((set) => ({
  moonList: [],

  updateMoonList(newMoonList) {
    set({moonList: newMoonList})
  }
}))