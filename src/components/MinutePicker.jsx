import { useSetAtom } from 'jotai';
import { selectedMinuteAtom } from '@/store/atoms';

import { ScrollPicker } from '@/components/ScrollPicker.jsx';

export default function MinutePicker({ defaultDateParts }) {
  const setSelectedMinute = useSetAtom(selectedMinuteAtom);

  return (
    <ScrollPicker
      items={Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'))}
      defaultOptionIndex={defaultDateParts.minute}
      setNewValue={setSelectedMinute}
    />
  );
}
