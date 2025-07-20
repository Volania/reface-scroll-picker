export function createYearsArr(center, length) {
  return Array.from({ length: length + 1 }, (_, i) => center - length / 2 + i);
}
