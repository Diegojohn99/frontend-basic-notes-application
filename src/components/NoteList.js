import React from 'react';

const NoteList = ({ notes, deleteNote, editNote }) => {
  return (
    <ul>
      {notes.map(note => (
        <li key={note._id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button className="note-button" onClick={() => editNote(note)}>Editar</button>
          <button className="note-button" onClick={() => deleteNote(note._id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
