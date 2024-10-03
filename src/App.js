import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import noteService from './services/noteService';
import './App.css'; 

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Obtener todas las notas al cargar la app
    noteService.getNotes().then(setNotes);
  }, []);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    noteService.deleteNote(id);
    setNotes(notes.filter(note => note._id !== id));
  };

  return (
    <div className="App">
      <h1>Aplicación de Notas Basicas(MERN)</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
