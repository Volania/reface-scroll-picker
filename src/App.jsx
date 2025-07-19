import { ScrollPicker } from '@/components/ScrollPicker.jsx';

function App() {
  return (
    <div className="m-8">
      <h1 className="text-2xl mb-8">Scroll Picker</h1>
      <div className="flex justify-center">
        <ScrollPicker items={Array.from({ length: 31 }, (_, i) => i + 1)} />
        <ScrollPicker items={['AM']} />
        <ScrollPicker items={['AM', 'PM']} />
        <ScrollPicker items={['AM', 'PM', 'CM']} />
        <ScrollPicker items={['AM', 'PM', 'CM', 'JM']} />
        <ScrollPicker items={['AM', 'PM', 'CM', 'JM', 'TM']} />
        <ScrollPicker />
      </div>
    </div>
  );
}

export default App;
