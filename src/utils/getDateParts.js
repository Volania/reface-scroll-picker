import { hour24to12 } from '@/utils/ampm';
import { getSearchParams } from '@/utils/getSearchParams';
import { dateIsValid } from '@/utils/dateIsValid';

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

export function getDatePartsFromSearchParams() {
  let defaultDateISO = new Date(getSearchParams()?.date);

  if (!dateIsValid(defaultDateISO)) {
    defaultDateISO = new Date();
  }

  return getDateParts(defaultDateISO);
}
