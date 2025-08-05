import { useState } from 'react';
import MeasurementForm from './components/MeasurementForm';
import MeasurementList from './components/MeasurementList';

function App() {
  const [measurements, setMeasurements] = useState([]);

  const addMeasurement = (measurement) => {
    setMeasurements((prev) => [...prev, { id: Date.now(), ...measurement }]);
  };

  return (
    <div className="container">
      <h1>Window Measurements</h1>
      <MeasurementForm onAdd={addMeasurement} />
      <MeasurementList items={measurements} />
    </div>
  );
}

export default App;
