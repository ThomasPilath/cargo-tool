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
import { storeCelestialList, storeRowList } from "../hook/cargo_tab.store";
import { getCelestials } from "../api/getStarmap";

export default function SandBox() {
  const celestialList = storeCelestialList((state) => state.celestialList)
  const updateCelestialList = storeCelestialList((state) => state.updateCelestialList)
  const rowList = storeRowList((state) => state.rowList)
  const updateRowList = storeRowList((state) => state.updateRowList)

  useEffect(() => {
    const fetchData = async () => {
      const celestials = await getCelestials()
      return updateCelestialList(celestials)
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
          {celestialList.map((planet) => {
            if (planet.type === "PLANET") {
              return (
                <MenubarSub>
                  <MenubarSubTrigger>{planet.name}</MenubarSubTrigger>
                  <MenubarSubContent>
                    {celestialList.map((moon) => {
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
    <section>
      <header className="flex flex-col gap-5 items-center mt-10 mx-10">
        <h2 className="text-2xl">
          Cargo Tab & Calc
        </h2>
      </header>
      <main className="flex flex-col gap-5 mt-10 mx-10">
        <Table>
          <TableCaption>Liste des cargo pour les missions prises.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Revenu</TableHead>
              <TableHead>Chargement</TableHead>
              <TableHead>
                <Menubar className="w-fit">
                  <MenubarMenu>
                    {renderContent()}
                  </MenubarMenu>
                </Menubar>
              </TableHead>
              <TableHead>
                <Menubar className="w-fit">
                  <MenubarMenu>
                    {renderContent()}
                  </MenubarMenu>
                </Menubar>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
              <TableRow key={Math.random()}>
                <TableCell className="font-medium w-[180px]">
                  <Input type="number" placeholder="revenu"  />
                </TableCell>
                <TableCell>
                  <Menubar className="w-fit">
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
      </main>
    </section>
  )
}