import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const getNotes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createNote = async (note) => {
  const response = await axios.post(API_URL, note);
  return response.data;
};

const deleteNote = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

const updateNote = async (id, updatedNote) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedNote);
  return response.data;
};

export default { getNotes, createNote, deleteNote, updateNote };
