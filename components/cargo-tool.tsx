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

import { useEffect } from "react";
import { Row, useCelestialStore, useHeaderRowStore, useRowStore } from "@/app/multi-tool/cargoTool.store";
import { getCelestials } from "@/hook/getStarmap";

type SelectedTarget = {
  rowIndex?: number,
  unloadIndex?: number
}

export default function CargoTool() {
  const { celestialList, updateCelestialList } = useCelestialStore()
  const { rowList, updateRowList, updateLoading, updateUnloading, updateReward } = useRowStore();
  const { headerRow, updateHeaderRow } = useHeaderRowStore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCelestials()
      return updateCelestialList(data)
    }
    fetchData()
  },[])

  
  const renderSelect = (target: SelectedTarget) => {
    const selectOne = (target: SelectedTarget, newValue: string) => {
      if(target.rowIndex != null) {
        updateLoading(target.rowIndex, newValue)
      }
      if(target.unloadIndex != null) {
        const newUnloading = [...headerRow.unloading]
        newUnloading[target.unloadIndex] = newValue
        return updateHeaderRow({...headerRow, unloading: newUnloading})
      }
    }

    return (
      <div>
          <MenubarContent>
          {celestialList.map((planet) => {
            if (planet.type === "PLANET") {
              return (
                <MenubarSub key={planet.id}>
                  <MenubarSubTrigger>{planet.name}</MenubarSubTrigger>
                  <MenubarSubContent>
                    {celestialList.map((moon) => {
                      if (moon.parent_id === planet.id) {
                        return (
                          <MenubarItem key={moon.id} onClick={() => selectOne(target, moon.name)}>{moon.name}</MenubarItem>
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

  return (
    <section className="flex flex-col items-center gap-4 border-4 rounded-2xl p-1">
      <h3 className="text-2xl">
        Cargo Tab & Calc
      </h3>
      <Table>
        <TableCaption>Liste des cargo pour les missions prises.</TableCaption>

        <TableHeader>
          <TableRow key={Math.random()*1000}>
            <TableHead>{headerRow.reward}</TableHead>
            <TableHead>{headerRow.loading}</TableHead>
                {headerRow.unloading.map((once, id) => {
                  return (
                    <TableHead>
                      <Menubar>
                        <MenubarMenu>
                          <MenubarTrigger>{once}</MenubarTrigger>
                          {renderSelect({unloadIndex: id})}
                        </MenubarMenu>
                      </Menubar>
                    </TableHead>
                  )
                })}
          </TableRow>
        </TableHeader>

        <TableBody>
        {rowList.map((row, index) => (
          <TableRow key={index}>
            <TableCell>
              <Input type="number" value={row.reward} onChange={(event) => {
                const newReward = parseInt(event.target.value)
                updateReward(index, newReward)
              }} />
            </TableCell>
            <TableCell>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>{row.loading}</MenubarTrigger>
                  {renderSelect({rowIndex: index})}
                </MenubarMenu>
              </Menubar>
            </TableCell>
            {rowList[index].unloading.map((once, onceIndex) => (
              <TableCell>
                <Input type="number" value={once} onChange={(event) => {
                  const newUnloading = [...rowList[index].unloading]
                  newUnloading[onceIndex] = parseFloat(event.target.value)
                  updateUnloading(index, newUnloading)
                }} />
              </TableCell>
            ))}
          </TableRow>
        ))}
          <TableRow key={Math.random()*10000}>
            <TableCell colSpan={4}>
              <Button
                onClick={() => {
                  const newRow: Row = {
                    reward: 0,
                    loading: "Choisir",
                    unloading: [0,0],
                  };
                  updateRowList([...rowList, newRow]);
                }}
              >
                +
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  )
}