'use client'

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useEffect, useState } from "react";
import zone from "@/data/zone.json"

export default function SandBox() {
  const [zoneList, setZoneList] = useState<string[]>([""])
  const [selectedZone, setSelectedZone] = useState("")
  const [stationCheck, setStationCheck] = useState<boolean>(false)
  const [selectedLocation, setselectedLocation] = useState<string[]>([])
  const [tableRows, setTableRows] = useState<number[]>([1]);

  useEffect(() => {
    const zoneFetch = () => {
      // récupérer les noms des zones depuis le JSON
      const list: any = []
      zone.map((once) => {
        return list.push(once.name)
      })
      return setZoneList(list)
    }
    zoneFetch()
  },[zone])

  useEffect(() => {
    const fetchLocations = () => {
      const selectedZoneObject = zone.find((zone) => zone.name === selectedZone)
      const locations: string[] = []
      if (selectedZoneObject) {
        selectedZoneObject.planetList.map((planet) => {
          if (planet.station != null) {
            planet.station.map((sta) => {
              return locations.push(planet.planetName + " - " + sta)
            });
          }
          if (stationCheck == false) {
            planet.location.map((loc) => {
              return locations.push(planet.planetName + " - " + loc)
            });
          }
        });
      }
      return setselectedLocation(locations)
    }
    fetchLocations()
  }, [selectedZone, stationCheck])

  const renderSelect = (name: string) => {
    return (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sélectionner" />
        </SelectTrigger>
        <SelectContent>
          {selectedLocation.map((location) => {
            return (
              <SelectItem key={Math.random()} value={name + " - " + location}>{location}</SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    )
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
          SandBox
        </h1>
      </section>
      <section className="flex flex-col gap-5 mt-10 mx-10">
        <header className="flex gap-2">
          <section>
            <h2 className="text-2xl">
              Zone de Cargo : 
            </h2>
            <div className="flex items-center space-x-2">
              <Checkbox id="OnlyStation" onCheckedChange={() => setStationCheck(!stationCheck)} />
              <label
                htmlFor="OnlyStation"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Seulement les Stations
              </label>
            </div>
          </section>
          <Select onValueChange={(value) =>  setSelectedZone(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="choisir" />
            </SelectTrigger>
            <SelectContent>
              {zoneList.map((item: string) => {
                return (
                  <SelectItem key={zoneList.indexOf(item)} value={item}>{item}</SelectItem>
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
            {tableRows.map((row) => (
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
            ))}
            <TableRow>
              <TableCell colSpan={4}>
                <Button onClick={() => setTableRows([...tableRows, 1])}>+</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  )
}