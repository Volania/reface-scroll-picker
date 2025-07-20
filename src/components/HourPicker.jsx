import { useSetAtom } from 'jotai';
import { selectedHourAtom } from '@/store/atoms';

import { ScrollPicker } from '@/components/ScrollPicker.jsx';

export default function HourPicker({ defaultDateParts }) {
  const setSelectedHour = useSetAtom(selectedHourAtom);

  return (
    <ScrollPicker
      items={Array.from({ length: 12 }, (_, i) => i + 1)}
      defaultOptionIndex={defaultDateParts.hour12 - 1}
      setNewValue={setSelectedHour}
    />
  );
}
