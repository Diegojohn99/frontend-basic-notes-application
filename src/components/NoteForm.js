import React, { useState, useEffect } from 'react';
import noteService from '../services/noteService';

const NoteForm = ({ addNote, updateNote, noteToEdit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Efecto para cargar la nota a editar cuando el componente recibe una nota
  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
    }
  }, [noteToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (noteToEdit) {
      // Si hay una nota para editar, actualizamos la nota
      const updatedNote = await noteService.updateNote(noteToEdit._id, { title, content });
      updateNote(updatedNote); // Actualizamos la nota en la lista
    } else {
      // De lo contrario, creamos una nueva nota
      const newNote = await noteService.createNote({ title, content });
      addNote(newNote);
    }

    // Limpiar los campos del formulario
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Contenido"
      />
      <button type="submit">
        {noteToEdit ? 'Actualizar Nota' : 'Añadir Nota'}
      </button>
    </form>
  );
};

export default NoteForm;
