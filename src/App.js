import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NotesList from './components/NotesList';
import NoteEditor from './components/NoteEditor';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<NotesList />} />
        <Route path="/note/:id" element={<NoteEditor />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
