interface RandomNumberGeneratorProps {
  min?: number
  max: number
}

export function randomNumberGenerator({
  min = 1,
  max,
}: RandomNumberGeneratorProps) {
  return Math.random() * (max - min) + min
}
