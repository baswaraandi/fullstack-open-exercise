import React, { useState } from "react";

const Note = ({ note }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <li>
      {note.name.common}
      <button onClick={toggleInfo}>{showInfo ? "Hide" : "Show"} Info</button>
      {showInfo && (
        <div>
          <h2>{note.name.common}</h2>
          <p>capital : {note.capital}</p>
          <p>area: {note.area}</p>
          <h3>language:</h3>
          <ul>
            {Object.entries(note.languages).map(([code, lang]) => (
              <li key={code}>{lang}</li>
            ))}
          </ul>
          <img src={note.flags.png} alt="" />
        </div>
      )}
    </li>
  );
};

export default Note;
