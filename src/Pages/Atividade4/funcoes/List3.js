import React, { useState } from 'react';

const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' }
];

export default function List3() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(initialArtists);

  function handleClick() {
    const nextId = artists.length; // Generate new id based on current length
    const insertAt = 1; // Could be any index
    const nextArtists = [
      ...artists.slice(0, insertAt),
      { id: nextId, name: name },
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('');
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}
