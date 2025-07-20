import { atom } from 'jotai';
import { getSearchParams } from '@/utils/getSearchParams';
import { getDateParts } from '@/utils/getDateParts';
import { createDaysArr } from '@/utils/createDaysArr';

const defaultDateISO = getSearchParams()?.date || new Date().toISOString();
const defaultDateParts = getDateParts(new Date(defaultDateISO));

export const selectedYearAtom = atom(defaultDateParts.year);
export const selectedMonthAtom = atom(defaultDateParts.month);
export const selectedDayAtom = atom(defaultDateParts.day);
export const selectedHourAtom = atom(defaultDateParts.hour12);
export const selectedMinuteAtom = atom(defaultDateParts.minute);
export const selectedAmPmAtom = atom(defaultDateParts.ampm);

export const daysListAtom = atom(createDaysArr(defaultDateParts.month, defaultDateParts.year));
