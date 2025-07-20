import { useAtomValue } from 'jotai';
import {
  selectedYearAtom,
  selectedMonthAtom,
  selectedDayAtom,
  selectedHourAtom,
  selectedMinuteAtom,
  selectedAmPmAtom,
} from '@/store/atoms';

import { getMonthNumber } from '@/utils/months';
import { hour12to24 } from '@/utils/ampm';

export default function SubmitBtn() {
  const selectedYear = useAtomValue(selectedYearAtom);
  const selectedMonth = useAtomValue(selectedMonthAtom);
  const selectedDay = useAtomValue(selectedDayAtom);
  const selectedHour = useAtomValue(selectedHourAtom);
  const selectedMinute = useAtomValue(selectedMinuteAtom);
  const selectedAmPm = useAtomValue(selectedAmPmAtom);

  const monthIndex = getMonthNumber(selectedMonth);
  let hour = hour12to24(parseInt(selectedHour), selectedAmPm);

  function handleClick() {
    const date = new Date(
      Date.UTC(selectedYear, monthIndex, selectedDay, hour, parseInt(selectedMinute))
    );

    console.log(date.toUTCString());
  }

  return (
    <button
      className="mt-8 bg-blue-500 text-white hover:bg-blue-400 focus:bg-blue-400 px-4 py-2 rounded font-bold cursor-pointer"
      onClick={handleClick}
    >
      Submit
    </button>
  );
}
