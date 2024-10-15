import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NotesList from './components/NotesList';
import NoteEditor from './components/NoteEditor';
// import NotesList from './components/UserProfile';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<NotesList />} />
        <Route path="/note/:id" element={<NoteEditor />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/aboutUs" element={<AboutUs />} />

      </Routes>
    </Router>
  );
}

export default App;
