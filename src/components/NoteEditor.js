import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NoteEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSave = async () => {
    const newNote = { title, content };
    await axios.post('http://localhost:5000/notes', newNote);
    navigate('/'); // Redirect to notes list after saving
  };

  return (
    <div>
      <h1>Create Note</h1>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title" 
      />
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="Content" 
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default NoteEditor;
