import React, { useState } from 'react';
import noteService from '../services/noteService';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNote = await noteService.createNote({ title, content });
    addNote(newNote);
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
      <button type="submit">Añadir Nota</button>
    </form>
  );
};

export default NoteForm;
