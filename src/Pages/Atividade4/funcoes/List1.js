import { useState } from 'react';

let nextId = 0;

export default function List1() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  function handleAddClick() {
    setArtists([
      ...artists,
      { id: nextId++, name: name },
    ]);
    setName("");  // Clear the input after adding
  }
  return (
    <>
      <h1>Inspiring Sculptors:</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter artist's name"
      />
      <button onClick={handleAddClick}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
