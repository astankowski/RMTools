import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export function RepetitionSlider({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[1]}
      min={1}
      max={12}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
  )
}
