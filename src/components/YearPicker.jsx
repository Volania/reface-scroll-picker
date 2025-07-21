import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { selectedYearAtom } from '@/store/atoms';

import { ScrollPicker } from '@/components/ScrollPicker.jsx';
import { createYearsArr } from '@/utils/createYearsArr';

export default function YearPicker({ defaultDateParts }) {
  const yearsExceptSelected = 10;
  const [yearsList, setYearsList] = useState(
    createYearsArr(defaultDateParts.year, yearsExceptSelected)
  );
  const [selectedYear, setSelectedYear] = useAtom(selectedYearAtom);

  // Add items when near the start or the end of the list
  useEffect(() => {
    if (+selectedYear > yearsList[yearsList.length - 3] || +selectedYear < yearsList[2]) {
      setYearsList(createYearsArr(+selectedYear, yearsExceptSelected));
    }
  }, [selectedYear, yearsList]);

  return (
    <ScrollPicker
      items={yearsList}
      defaultOptionIndex={yearsExceptSelected / 2}
      setNewValue={setSelectedYear}
    />
  );
}
