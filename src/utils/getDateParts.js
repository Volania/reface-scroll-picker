import { hour24to12 } from '@/utils/ampm';

export function getDateParts(date) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();
  const hour24 = date.getUTCHours();
  const minute = date.getUTCMinutes();

  const [hour12, ampm] = hour24to12(hour24);

  return {
    year,
    month,
    day,
    hour12,
    minute,
    ampm,
  };
}
