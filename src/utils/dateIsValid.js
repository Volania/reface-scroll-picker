export function dateIsValid(date) {
  return date instanceof Date && !isNaN(date.getTime());
}
