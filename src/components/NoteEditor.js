import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NoteEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();

  const handleSave = async () => {
    const newNote = { title, content };
    await axios.post('http://localhost:5000/notes', newNote);
    history.push('/'); // Redirect to notes list
  };

  return (
    <div>
      <h2>Create Note</h2>
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


