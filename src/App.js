import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import noteService from './services/noteService';
import './App.css'; 

const App = () => {
  const [notes, setNotes] = useState([]);
  const [noteToEdit, setNoteToEdit] = useState(null); // Estado para manejar la nota a editar

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

  const editNote = (note) => {
    setNoteToEdit(note); // Cargar la nota seleccionada en el formulario para editar
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => (note._id === updatedNote._id ? updatedNote : note)));
    setNoteToEdit(null); // Limpiar la nota a editar después de actualizar
  };

  return (
    <div className="App">
      <h1>Aplicación de Notas Basicas(MERN)</h1>
      <NoteForm addNote={addNote} updateNote={updateNote} noteToEdit={noteToEdit} />
      <NoteList notes={notes} deleteNote={deleteNote} editNote={editNote} />
    </div>
  );
};

export default App;

