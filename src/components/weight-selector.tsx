import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface WeightSelectorProps {
  weight: number;
  unit: string;
  setWeight: (weight: number) => void;
}

export function WeightSelector({ weight, unit, setWeight}: WeightSelectorProps) {
  return (
    <>
      <div className="mx-auto w-full max-w-sm">
          Increase or decrease the amount of lifted weight
        <div className="p-4 pb-0 flex flex-col gap-4">
          <div className="flex items-center justify-center space-x-2">
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full" onClick={() => setWeight(weight - (unit === "lbs" ? 5 : 2.5))} disabled={weight <= 0}>
              <Minus />
            </Button>
            <div className="flex-1 text-center">
              <div className="text-7xl font-bold">{weight}</div>
              <div className="text-[0.70rem] uppercase">{unit === "lbs" ? "pounds" : "kilograms"}</div>
            </div>
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full" onClick={() => setWeight(weight + (unit === "lbs" ? 5 : 2.5))}>
              <Plus />
            </Button>
            </div>
        </div>
      </div>
    </>
  );
}
