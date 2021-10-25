import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [bio, setBio] = useState("");
  const [people, setPeople] = useState([]);

  return (
    <div>
      <input value={firstName} onChange={e => setFirstName(e.target.value)} />
      <input value={bio} onChange={e => setBio(e.target.value)} />
      <button
        onClick={() => {
          setPeople([...people, { firstName: firstName, bio: bio }]);
          setBio("");
          setFirstName("");
        }}
      >
        Add person to people array
      </button>

      {people.map((person, i) => (
        <p>
          {person.firstName}, {person.bio}
        </p>
      ))}
    </div>
  );
}

export default App;
