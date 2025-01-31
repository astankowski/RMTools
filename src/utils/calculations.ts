export function round(number: number, decimalPlaces: number): number {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(number * factor) / factor;
}

export function calculateRm(weight: number, repetitions: number, formula: string): number[] {
  const numberOfResults = 13;
  const newResults = [];
  for (let i = 1; i < numberOfResults; i++) {
    if (formula === "epley") {
      newResults.push(round(weight * (1 + repetitions / 30) / (1 + i / 30), 2));
    } else {
      newResults.push(round(weight / (1.0278 - 0.0278 * repetitions) * (1.0278 - 0.0278 * i), 2));
    }
  }
  return newResults;
}
