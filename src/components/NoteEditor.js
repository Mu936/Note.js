import React, { useState } from 'react';
 
const NoteEditor = ({ match, history }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
 
  const handleSave = () => {
    const newNote = { id: Date.now(), title, content };
    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
    localStorage.setItem('notes', JSON.stringify([...existingNotes, newNote]));
    history.push('/'); // Redirect to notes list
  };
 
  return (
    <div>
      <h2>Edit Note</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note Content"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};
 
export default NoteEditor;
 

