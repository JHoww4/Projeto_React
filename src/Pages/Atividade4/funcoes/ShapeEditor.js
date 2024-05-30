import { useState } from 'react';

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 }
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        // No change
        return shape;
      } else {
        // Return a new circle 50px below
        return { ...shape, y: shape.y + 50 };
      }
    });
    // Re-render with the new array
    setShapes(nextShapes);
  }

  return (
    <div>
      <button onClick={handleClick}>Move circles down</button>
      <svg width="400" height="400">
        {shapes.map(shape => (
          <Shape key={shape.id} shape={shape} />
        ))}
      </svg>
    </div>
  );
}

function Shape({ shape }) {
  if (shape.type === 'circle') {
    return <circle cx={shape.x} cy={shape.y} r="20" fill="blue" />;
  } else if (shape.type === 'square') {
    return <rect x={shape.x - 20} y={shape.y - 20} width="40" height="40" fill="red" />;
  }
  return null;
}
