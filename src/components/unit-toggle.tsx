import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface UnitToggleProps {
  unit: string;
  toggleUnit: (newUnit: string) => void;
}

export function UnitToggle({ unit, toggleUnit }: UnitToggleProps) {
  return (
    <Tabs defaultValue={unit} onValueChange={toggleUnit}>
      <TabsList>
        <TabsTrigger value="kg">KG</TabsTrigger>
        <TabsTrigger value="lbs">LBS</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
