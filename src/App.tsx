"use client"

import { Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import React from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./components/ui/select"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function round(number: number, decimalPlaces: number) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(number * factor) / factor;
}

function commafy(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculateRm(weight: number, repetitions: number, formula: string, rm: number) {
  var result: number = 0;
  if (formula === 'epley') {
    result = weight * (1 + (repetitions / 30)) / (1 + (rm / 30));
  } else {
    result = weight / (1.0278 - .0278 * repetitions) * (1.0278 - .0278 * rm);
  }
  return result;
}

function App() {
  const [weight, setWeight] = React.useState(60)
  const [repetitions, setRepetitions] = React.useState(1)
  const [formula, setFormula] = React.useState("brzycki")
  const [unit, setUnit] = React.useState("kg")

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex gap-4 m-4 flex-col ">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="ghost" className="text-6xl">{weight} kg</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Change weight</DrawerTitle>
                <DrawerDescription>Increase or decrease the amount of lifted weight.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <div className="flex items-center justify-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full"
                    onClick={() => setWeight(weight - 2.5)}
                    disabled={weight <= 0}
                  >
                    <Minus />
                  </Button>
                  <div className="flex-1 text-center">
                    <div className="text-7xl font-bold tracking-tighter">
                      {weight}
                    </div>
                    <div className="text-[0.70rem] uppercase text-muted-foreground">
                      kilograms
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full"
                    onClick={() => setWeight(weight + 2.5)}
                  >
                    <Plus />
                  </Button>
                </div>
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="ghost" className="text-6xl">{repetitions} reps</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Change repetitions</DrawerTitle>
                <DrawerDescription>Increase or decrease the amount of repetitions.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <div className="flex items-center justify-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full"
                    onClick={() => setRepetitions(repetitions - 1)}
                    disabled={repetitions <= 1}
                  >
                    <Minus />
                  </Button>
                  <div className="flex-1 text-center">
                    <div className="text-7xl font-bold tracking-tighter">
                      {repetitions}
                    </div>
                    <div className="text-[0.70rem] uppercase text-muted-foreground">
                      Repetitions
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full"
                    onClick={() => setRepetitions(repetitions + 1)}
                    disabled={repetitions >= 12}
                  >
                    <Plus />
                  </Button>
                </div>
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a formula" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Formulas</SelectLabel>
              <SelectItem value="apple">Brzycki</SelectItem>
              <SelectItem value="banana">Epley</SelectItem>

            </SelectGroup>
          </SelectContent>
        </Select>
        <Card>
          <CardHeader>
            <CardTitle>Estimated one rep max</CardTitle>
            <CardDescription>{weight * 2} kg</CardDescription>
          </CardHeader>
        </Card>
      <Tabs defaultValue="kg">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="kg" onClick={() => setUnit("kg")}>KG</TabsTrigger>
          <TabsTrigger value="lbs" onClick={() => setUnit("lbs")}>LBS</TabsTrigger>
        </TabsList>
      </Tabs>
      <ModeToggle />
      </div>
    </ThemeProvider>
  )
}

export default App
