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