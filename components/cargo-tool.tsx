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
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { useEffect, useState } from "react";
import { useCelestialStore, useRowStore } from "@/hook/store/cargoTool.store";
import { getCelestials } from "@/hook/getStarmap";

export default function CargoTool() {
  const celestial = useCelestialStore((state) => state.list)
  const updateCelestial = useCelestialStore((state) => state.updateList)
  const rowList = useRowStore((state) => state.list)
  const updateRowList = useRowStore((state) => state.updateList)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCelestials()
      return updateCelestial(data)
    }
    fetchData()
  },[])

  const renderContent = () => {
    //! TEMPORAIRE => a inclure dans l'objet row
    const [trigger, setTrigger] = useState("Choisir")
    //!

    return (
      <div>
        <MenubarTrigger>{trigger}</MenubarTrigger>
          <MenubarContent>
          {celestial.map((planet) => {
            if (planet.type === "PLANET") {
              return (
                <MenubarSub key={planet.id}>
                  <MenubarSubTrigger>{planet.name}</MenubarSubTrigger>
                  <MenubarSubContent>
                    {celestial.map((moon) => {
                      if (moon.parent_id === planet.id) {
                        return (
                          <MenubarItem key={moon.id} onClick={() => setTrigger(moon.name)}>{moon.name}</MenubarItem>
                        )
                      }
                    })}
                  </MenubarSubContent>
                </MenubarSub>
              )
            }
          })}
        </MenubarContent>
      </div>
    )
  }


  //?TEST
  // useEffect(() => {
  //   console.log(celestialList)
  // },[celestialList])

  // useEffect(() => {
  //   console.log(stationCheck)
  // },[stationCheck])

  return (
    <section className="flex flex-col items-center gap-4 border-4 rounded-2xl p-1">
      <h3 className="text-2xl">
        Cargo Tab & Calc
      </h3>
      <Table>
        <TableCaption>Liste des cargo pour les missions prises.</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Revenu</TableHead>
            <TableHead>Chargement</TableHead>
            <TableHead>
              <Menubar>
                <MenubarMenu>
                  {renderContent()}
                </MenubarMenu>
              </Menubar>
            </TableHead>
            <TableHead>
              <Menubar>
                <MenubarMenu>
                  {renderContent()}
                </MenubarMenu>
              </Menubar>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
            <TableRow key={Math.random()}>
              <TableCell className="font-medium w-[150px]">
                <Input type="number" placeholder="revenu"  />
              </TableCell>
              <TableCell>
                <Menubar>
                  <MenubarMenu>
                    {renderContent()}
                  </MenubarMenu>
                </Menubar>
              </TableCell>
              <TableCell>
                <Input type="number" placeholder="volume" />
              </TableCell>
              <TableCell className="text-right">
                <Input type="number" placeholder="volume" />
              </TableCell>
            </TableRow>
          <TableRow>
            <TableCell colSpan={4}>
              <Button>+</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  )
}