export const ampm = ['AM', 'PM'];

export function hour12to24(hour, partOfDay) {
  if (partOfDay === 'PM' && hour < 12) {
    hour += 12;
  }
  if (partOfDay === 'AM' && hour === 12) {
    hour = 0;
  }
  return hour;
}

export function hour24to12(hour24) {
  const hour12 = hour24 % 12 || 12;
  const ampm = hour24 >= 12 ? 'PM' : 'AM';

  return [hour12, ampm];
}
