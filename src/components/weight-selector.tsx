import { 
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader, DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface WeightSelectorProps {
  weight: number;
  unit: string;
  setWeight: (weight: number) => void;
  onSubmit: () => void;
}

export function WeightSelector({ weight, unit, setWeight, onSubmit }: WeightSelectorProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" className="text-3xl">{weight} {unit}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Change weight</DrawerTitle>
            <DrawerDescription>Increase or decrease the amount of lifted weight.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 flex flex-col gap-4">
            <div className="flex items-center justify-center space-x-2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={() => setWeight(weight - (unit === "lbs" ? 5 : 2.5))} disabled={weight <= 0}>
                <Minus />
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold">{weight}</div>
                <div className="text-[0.70rem] uppercase">{unit === "lbs" ? "pounds" : "kilograms"}</div>
              </div>
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={() => setWeight(weight + (unit === "lbs" ? 5 : 2.5))}>
                <Plus />
              </Button>
              </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {[25, 50, 75, 100].map((w) => (
                <Button key={w} variant="outline" onClick={() => setWeight(w)}>{w} {unit}</Button>
              ))}
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button onClick={onSubmit}>Submit</Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
