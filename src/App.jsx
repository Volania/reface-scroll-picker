import { getSearchParams } from '@/utils/getSearchParams';
import { getDateParts } from '@/utils/getDateParts';
import YearPicker from '@/components/YearPicker';
import MonthPicker from '@/components/MonthPicker';
import DayPicker from '@/components/DayPicker';
import HourPicker from '@/components/HourPicker';
import MinutePicker from '@/components/MinutePicker';
import AmPmPicker from '@/components/AmPmPicker';
import SubmitBtn from './components/SubmitBtn';

function App() {
  const defaultDateISO = getSearchParams()?.date || new Date().toISOString();
  const defaultDateParts = getDateParts(new Date(defaultDateISO));

  return (
    <div className="m-8 flex flex-col w-max max-w-[95%] mx-auto">
      <h1 className="text-3xl mb-8 font-bold">Scroll Picker</h1>
      <div className="flex justify-center overflow-x-auto">
        <MonthPicker defaultDateParts={defaultDateParts} />
        <DayPicker defaultDateParts={defaultDateParts} />
        <YearPicker defaultDateParts={defaultDateParts} />
        <HourPicker defaultDateParts={defaultDateParts} />
        <MinutePicker defaultDateParts={defaultDateParts} />
        <AmPmPicker defaultDateParts={defaultDateParts} />
      </div>

      <SubmitBtn />
    </div>
  );
}

export default App;
