import { useEffect, useState } from 'react';

import { ScrollPicker } from '@/components/ScrollPicker.jsx';
import { getSearchParams } from '@/utils/getSearchParams';
import { getDateParts } from '@/utils/getDateParts';
import { createYearsArr } from '@/utils/createYearsArr';

function App() {
  const defaultDateISO = getSearchParams()?.date || new Date().toISOString();
  const dateParts = getDateParts(new Date(defaultDateISO));

  // Year picker data
  const yearsExceptSelected = 20;
  const [yearsList, setYearsList] = useState(createYearsArr(dateParts.year, yearsExceptSelected));
  const [selectedYear, setSelectedYear] = useState(dateParts.year);

  // Add items when near the start or the end of the list
  useEffect(() => {
    if (+selectedYear > yearsList[yearsList.length - 3] || +selectedYear < yearsList[2]) {
      setYearsList(createYearsArr(+selectedYear, yearsExceptSelected));
    }
  }, [selectedYear, yearsList]);

  // Month, Day, Year, Hour, Minute, AM/PM

  return (
    <div className="m-8">
      <h1 className="text-2xl mb-8">Scroll Picker</h1>
      <div className="flex justify-center">
        <ScrollPicker
          items={yearsList}
          defaultOptionIndex={yearsExceptSelected / 2}
          setNewValue={setSelectedYear}
        />
      </div>
    </div>
  );
}

export default App;
