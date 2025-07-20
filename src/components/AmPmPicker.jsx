import { useSetAtom } from 'jotai';
import { selectedAmPmAtom } from '@/store/atoms';

import { ScrollPicker } from '@/components/ScrollPicker.jsx';
import { ampm } from '@/utils/ampm';

export default function AmPmPicker({ defaultDateParts }) {
  const setSelectedAmPm = useSetAtom(selectedAmPmAtom);

  return (
    <ScrollPicker
      items={ampm}
      defaultOptionIndex={ampm.indexOf(defaultDateParts.ampm)}
      setNewValue={setSelectedAmPm}
    />
  );
}
