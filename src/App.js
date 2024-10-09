import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NotesList from './components/NotesList';
import NoteEditor from './components/NoteEditor';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={NotesList} />
        <Route path="/note/:id" component={NoteEditor} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
