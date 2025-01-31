import { Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface RepetitionSelectorProps {
  repetitions: number;
  setRepetitions: (reps: number) => void;
  onSubmit: () => void;
}

export function RepetitionSelector({ repetitions, setRepetitions, onSubmit }: RepetitionSelectorProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" className="text-3xl">{repetitions} reps</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Change repetitions</DrawerTitle>
            <DrawerDescription>Increase or decrease the amount of repetitions.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 flex flex-col gap-4">
            <div className="flex items-center justify-center space-x-2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={() => setRepetitions(repetitions - 1)} disabled={repetitions <= 1}>
                <Minus />
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold">{repetitions}</div>
                <div className="text-[0.70rem] uppercase">Repetitions</div>
              </div>
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={() => setRepetitions(repetitions + 1)} disabled={repetitions >= 12}>
                <Plus />
              </Button>
            </div>
            <Slider value={[repetitions]} max={12} step={1} min={1} onValueChange={(value) => setRepetitions(value[0])} />
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
