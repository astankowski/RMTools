"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { calculateRm, round } from "@/utils/calculations"
import { WeightSelector } from "@/components/weight-selector"
import { RepetitionSelector } from "@/components/repetition-selector"
import { UnitToggle } from "@/components/unit-toggle"
import { FormulaSelector } from "@/components/formula-selector"
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [weight, setWeight] = useState<number>(60)
  const [repetitions, setRepetitions] = useState<number>(1)
  const [formula, setFormula] = useState<string>("epley")
  const [unit, setUnit] = useState<string>("kg")
  const [results, setResults] = useState<number[]>([])
  
  useEffect(() => {setResults(calculateRm(weight, repetitions, formula))})

  function toggleUnit(newUnit: string) {
    if (newUnit === unit) return; // Prevent unnecessary updates

    setUnit(newUnit);
    setWeight(newUnit === "lbs" ? round(weight * 2.20462, 2) : round(weight / 2.20462, 2));
    setResults(results.map(r => (newUnit === "lbs" ? round(r * 2.20462, 2) : round(r / 2.20462, 2))));
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <Analytics/>
      <div className="min-h-screen w-full bg-white relative">
        {/* White Sphere Grid Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "white",
            backgroundImage: `
              linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
            `,
            backgroundSize: "32px 32px, 32px 32px, 100% 100%",
          }}
        />
        <div className=" mx-auto flex gap-4 p-4 flex-col text-center justify-self-center sm:w-1/2 w-full">
          <Card>
            <CardHeader>
              <CardTitle>1 Rep Max Calculator</CardTitle>
              <CardDescription>
                Enter your weight and repetitions to calculate your 1RM and percentage-based weights.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardTitle>Enter Your Weight</CardTitle>
                <CardDescription>
                  Select the weight you lifted
                </CardDescription>
              <WeightSelector 
                weight={weight}
                unit={unit}
                setWeight={setWeight}
                />
            </CardContent>
            <CardContent>
            <CardTitle>Enter Repetitions</CardTitle>
          <CardDescription>
            Select the number of repetitions you performed.
          </CardDescription>
              <RepetitionSelector 
                repetitions={repetitions} 
                setRepetitions={setRepetitions} 
                />
            </CardContent>
          </Card>
          {/*
          <div className="grid grid-flow-col place-items-center z-0">
            <FormulaSelector setFormula={setFormula} />
            <UnitToggle unit={unit} toggleUnit={toggleUnit} />
            <ModeToggle/>
          </div>
          */}
          <Card>
          <CardHeader>
            <CardTitle>1 Rep Max (XRM) Results</CardTitle>
            <CardDescription>
              Your estimated 1RM and corresponding weights for different rep ranges.
            </CardDescription>
          </CardHeader>
          <div className="grid grid-cols-2">
            {results.map((number, index) => 
                <CardHeader key={index + 1} className="">
                  <CardTitle> {index + 1}RM</CardTitle>
                  <CardDescription>{number} {unit}</CardDescription>
                </CardHeader>
            )}

          </div>
          <CardFooter>
            <span className="text-sm text-muted-foreground">
              Results are estimates. Always prioritize safety and proper form.
            </span>
          </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Percentage-Based Weights</CardTitle>
              <CardDescription>
                Suggested weights based on percentages of your 1RM.
              </CardDescription>
            </CardHeader>
            <div className="grid grid-cols-2">
            {[105, 102.5, 95, 90, 85, 80, 75, 70].map((percent) => (
              <CardHeader key={percent}>
                <CardTitle> {round(weight * percent / 100, 2)} {unit}</CardTitle>
                <CardDescription>{percent}%</CardDescription>
              </CardHeader>
            ))}
            </div>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
