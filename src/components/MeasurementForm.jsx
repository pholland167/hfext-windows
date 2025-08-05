import { useState } from 'react';

export default function MeasurementForm({ onAdd }) {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!width || !height) return;
    onAdd({ width, height });
    setWidth('');
    setHeight('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        placeholder="Width"
      />
      <input
        type="text"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Height"
      />
      <button type="submit">Add Measurement</button>
    </form>
  );
}
