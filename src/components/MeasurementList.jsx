export default function MeasurementList({ items }) {
  if (items.length === 0) {
    return <p>No measurements added yet.</p>;
  }
  return (
    <ul>
      {items.map(({ id, width, height }) => (
        <li key={id}>
          Width: {width}, Height: {height}
        </li>
      ))}
    </ul>
  );
}
