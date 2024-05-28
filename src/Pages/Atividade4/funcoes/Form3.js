import { useState } from 'react';

export default function Form3() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  function handleFirstNameChange(e) {
    setPerson({ ...person, firstName: e.target.value });
  }

  function handleLastNameChange(e) {
    setPerson({ ...person, lastName: e.target.value });
  }

  function handleEmailChange(e) {
    setPerson({ ...person, email: e.target.value });
  }

  return (
    <>
      <label>
        First Name:
        <input
          type="text"
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
    </>
  );
}
