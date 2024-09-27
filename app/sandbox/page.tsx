'use client'

import { Button } from "@/components/ui/button";
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
  const [selectedLocation, setselectedLocation] = useState<string[]>([])

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
          return planet.location.map((loc) => {
            return locations.push(loc)
          });
        });
      }
      return setselectedLocation(locations)
    }
    fetchLocations()
  }, [selectedZone])

  useEffect(() => {
    console.table(selectedLocation)
  },[selectedLocation])

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


  return (
    <div>
      <section className="flex flex-col gap-5 items-center mt-10 mx-10">
        <h1 className="text-4xl">
          SandBox
        </h1>
      </section>
      <section className="flex flex-col gap-5 mt-10 mx-10">
        <div className="flex gap-2">
          <h2 className="text-2xl">
            Zone de Cargo : 
          </h2>
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
        </div>
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
            <TableRow>
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
          </TableBody>
        </Table>
      </section>
    </div>
  )
}