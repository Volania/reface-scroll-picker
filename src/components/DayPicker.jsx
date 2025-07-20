import { useEffect } from 'react';

import { useAtomValue, useAtom } from 'jotai';
import { selectedYearAtom, selectedMonthAtom, daysListAtom, selectedDayAtom } from '@/store/atoms';

import { ScrollPicker } from '@/components/ScrollPicker.jsx';
import { getMonthNumber } from '@/utils/months';
import { createDaysArr } from '@/utils/createDaysArr';

export default function DayPicker() {
  const [daysList, setDaysList] = useAtom(daysListAtom);
  const [selectedDay, setSelectedDay] = useAtom(selectedDayAtom);
  const selectedMonth = useAtomValue(selectedMonthAtom);
  const selectedYear = useAtomValue(selectedYearAtom);

  // Update number of days when month or year changes
  useEffect(() => {
    const newDaysArr = createDaysArr(getMonthNumber(selectedMonth), +selectedYear);

    if (newDaysArr.length !== daysList.length) {
      setDaysList(newDaysArr);
    }
  }, [selectedMonth, selectedYear, daysList.length, setDaysList]);

  return (
    <ScrollPicker items={daysList} defaultOptionIndex={selectedDay} setNewValue={setSelectedDay} />
  );
}
