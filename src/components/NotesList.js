import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 
const NotesList = () => {
  const [notes, setNotes] = useState([]);
 
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);
 
  return (
    <div>
      <h2>Your Notes</h2>
      
      <Link to="/note/new">Create New Note</Link>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
 
export default NotesList;
 
 
 