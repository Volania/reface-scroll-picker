export function createDaysArr(month, year) {
  const numberOfDays = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: numberOfDays }, (_, i) => i + 1);
}
