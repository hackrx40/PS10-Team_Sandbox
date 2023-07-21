import React, { useState, useEffect } from 'react';
import './Notes.css';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(-1); // Track the selected note index

  // Load notes from local storage on component mount
  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  // Save notes to local storage whenever notes state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    if (title.trim() !== '' && content.trim() !== '') {
      setNotes(prevNotes => [...prevNotes, { title, content }]);
      setTitle('');
      setContent('');
    }
  };

  const handleDeleteNote = index => {
    setNotes(prevNotes => prevNotes.filter((note, i) => i !== index));
  };

  const handleAddToDocGen = index => {
    if (index >= 0 && index < notes.length) {
      // Check if the index is valid
      setSelectedNoteIndex(index);
    }
  };

  return (
    <div className="notes-container">
      <h2>Notes App</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button onClick={handleAddNote}>+</button>
      </div>
      <div className="notes-list">
        {notes.map((note, index) => (
          <div key={index} className="note-item">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <div className="note-item-buttons">
              <button onClick={() => handleDeleteNote(index)}>Delete</button>
              <button onClick={() => handleAddToDocGen(index)}>Add to Doc Gen</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
