import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FormulaSelectorProps {
  setFormula: (formula: string) => void;
}

export function FormulaSelector({ setFormula }: FormulaSelectorProps) {
  return (
    <Select onValueChange={setFormula}>
      <SelectTrigger className="max-w-36">
        <SelectValue placeholder="Select a formula" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Formulas</SelectLabel>
          <SelectItem value="brzycki">Brzycki</SelectItem>
          <SelectItem value="epley">Epley</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
