export function getDateParts(date) {
  const year = date.getUTCFullYear();
  const month = date.toLocaleString('en-US', { month: 'long', timeZone: 'UTC' });
  const day = date.getUTCDate();
  const hour24 = date.getUTCHours();
  const hour12 = hour24 % 12 || 12;
  const minute = date.getUTCMinutes();
  const ampm = hour24 >= 12 ? 'PM' : 'AM';

  return {
    year,
    month,
    day,
    hour12,
    minute,
    ampm,
  };
}
