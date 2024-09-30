'use client'

import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox"
import { Input } from "@/app/components/ui/input"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select"

import { useEffect } from "react";
import { storeMoonList, storePlanetList, storeSelectedId, storeUpdateCheck } from "../hook/cargo_tab.store";
import { getMoons, getPlanets } from "../api/getStarmap";
import { ThemeToggle } from "../components/theme-toggle";

export default function SandBox() {
  const planetList = storePlanetList((state) => state.planetList)
  const updatePlanetList = storePlanetList((state) => state.updatePlanetList)
  const moonList = storeMoonList((state) => state.moonList)
  const updateMoonList = storeMoonList((state) => state.updateMoonList)
  const selectedId = storeSelectedId((state) => state.selectedId)
  const updateSelectedId = storeSelectedId((state) => state.updateSelectedId)
  const checkStatus = storeUpdateCheck((state) => state.checkStatus)
  const updateCheckStatus = storeUpdateCheck((state) => state.updateCheckStatus)

  useEffect(() => {
    const fetchData = async () => {
      const planets = await getPlanets()
      updatePlanetList([...planets])
    }
    fetchData()
  },[])

  useEffect(() => {
    const fetchData = async () => {
      const moons = await getMoons()
      updateMoonList([...moons])
    }
    fetchData()
  },[selectedId])

  const renderSelect = (name: string) => {
    return (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sélectionner" />
        </SelectTrigger>
        <SelectContent>
          {
            (selectedId != 0) ?
            moonList.map((item: CelestialObjectFiltered) => {
              return (
                <SelectItem key={item.id} value={item.id.toString()}>{item.name}</SelectItem>
              )
            })
            :
            "Sélectionnez une zone"
          }
        </SelectContent>
      </Select>
    )
  }

  const handleCheck = () => {
    return updateCheckStatus(!checkStatus)
  }


  //?TEST
  // useEffect(() => {
  //   console.table(selectedLocation)
  // },[selectedLocation])

  // useEffect(() => {
  //   console.log(stationCheck)
  // },[stationCheck])

  return (
    <div>
      <section className="flex flex-col gap-5 items-center mt-10 mx-10">
        <h1 className="text-4xl">
          Cargo Tab & Calc
        </h1>
        <p>{selectedId} | {(checkStatus === true) ? "true" : "false" }</p>
      </section>
      <section className="flex flex-col gap-5 mt-10 mx-10">
        <header className="flex gap-2">
          <section>
            <h2 className="text-2xl">
              Zone de Cargo : 
            </h2>
            <div className="flex items-center space-x-2">
              <Checkbox id="OnlyStation" onCheckedChange={() => handleCheck()} />
              <label
                htmlFor="OnlyStation"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Seulement les Stations
              </label>
            </div>
          </section>
          <Select onValueChange={(value) =>  updateSelectedId(Number(value))}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="choisir" />
            </SelectTrigger>
            <SelectContent>
              {planetList.map((item: CelestialObjectFiltered) => {
                return (
                  <SelectItem key={item.id} value={item.id.toString()}>{item.name}</SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </header>
        <Table>
          <TableCaption>Liste des cargo pour les missions prises.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Revenu</TableHead>
              <TableHead>Chargement</TableHead>
              <TableHead>
                {renderSelect("Depot1")}
              </TableHead>
              <TableHead>
                {renderSelect("Depot2")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
              <TableRow key={Math.random()}>
                <TableCell className="font-medium w-[180px]">
                  <Input type="number" placeholder="revenu"  />
                </TableCell>
                <TableCell>
                  {renderSelect("Chargement")}
                </TableCell>
                <TableCell>
                  <Input type="number" placeholder="volume" />
                </TableCell>
                <TableCell className="text-right">
                  <Input type="number" placeholder="volume" />
                </TableCell>
              </TableRow>
            <TableRow>
              {/* <TableCell colSpan={4}>
                <Button onClick={() => setTableRows([...tableRows, 1])}>+</Button>
              </TableCell> */}
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  )
}