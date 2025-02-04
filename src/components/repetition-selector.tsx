import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface RepetitionSelectorProps {
  repetitions: number;
  setRepetitions: (reps: number) => void;
}

export function RepetitionSelector({ repetitions, setRepetitions}: RepetitionSelectorProps) {
  return (
    <>
      <div className="mx-auto w-full max-w-sm">
          Increase or decrease the amount of repetitions
        <div className="p-4 pb-0 flex flex-col gap-4">
          <div className="flex items-center justify-center space-x-2">
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full" onClick={() => setRepetitions(repetitions - 1)} disabled={repetitions <= 1}>
              <Minus />
            </Button>
            <div className="flex-1 text-center">
              <div className="text-5xl font-bold">{repetitions}</div>
            </div>
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full" onClick={() => setRepetitions(repetitions + 1)} disabled={repetitions >= 12}>
              <Plus />
            </Button>
          </div>
          <Slider value={[repetitions]} max={12} step={1} min={1} onValueChange={(value) => setRepetitions(value[0])} />
        </div>
      </div>
    </>
  );
}
