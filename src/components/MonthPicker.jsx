import { useSetAtom } from 'jotai';
import { selectedMonthAtom } from '@/store/atoms';

import { ScrollPicker } from '@/components/ScrollPicker.jsx';
import { months } from '@/utils/months';

export default function MonthPicker({ defaultDateParts }) {
  const setSelectedMonth = useSetAtom(selectedMonthAtom);

  return (
    <ScrollPicker
      items={months}
      defaultOptionIndex={defaultDateParts.month}
      setNewValue={setSelectedMonth}
    />
  );
}
