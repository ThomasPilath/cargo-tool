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

import { useEffect } from "react";
import { useUpdateCountStore, useSaveCountStore } from "@/hook/count.store";

export default function SandBox() {
  const count =  useUpdateCountStore((state) => state.count)
  const changeCount =  useUpdateCountStore((state) => state.changeCount)
  const countTable =  useSaveCountStore((state) => state.countTable)
  const changeCountTable =  useSaveCountStore((state) => state.addCount)

  useEffect(() => {
      changeCount(Math.floor(Math.random()*100))
  },[])

    useEffect(() => {
      changeCountTable(count)
    },[count])

  //?TEST
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
        <p>{count}</p>
        <Button
        onClick={() => changeCount(Math.floor(Math.random()*100))}
        >
          Click to change number
        </Button>
        <p>Saved count : {Array.from(countTable).join(', ')}</p>
      </section>
    </div>
  )
}