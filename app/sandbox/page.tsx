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
import { getMoons, getPlanets } from "@/api/getStarmap";

export default function SandBox() {



  useEffect(() => {
    const fetchData = async ()  => {

    }
    fetchData();
  }, [])

  //?TEST
  // useEffect(() => {
  //   console.log()
  // },[])

  return (
    <div>
      <section className="flex flex-col gap-5 items-center mt-10 mx-10">
        <h1 className="text-4xl">
          SandBox
        </h1>
      </section>
      <section className="flex flex-col gap-5 mt-10 mx-10">

      </section>
    </div>
  )
}