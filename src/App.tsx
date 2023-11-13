import "./App.css";
import React, { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "testy test",
      content: "bla bla note1",
    },
    {
      id: 2, 
      title: "test note 2 ",
      content: "bla bla note2",
    },
    {
      id: 3,
      title: "test note 3",
      content: "bla bla note3",
    },
    {
      id: 4,
      title: "test note 4",
      content: "bla bla note4"
    },
  ]);

  const handleAddNote = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("title: ", title);
    console.log("content: ", content);

    const newNote = {
      id: notes.length + 1,
      title: title,
      content: content,
    };

    setNotes([newNote, ...notes]);

    setTitle("");
    setContent("");
  };



  return (
    <div className="app-container">
      <form className="note-form" onSubmit={handleAddNote}>
        <input 
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title" 
          required
        ></input>
        <textarea 
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Content" 
          rows={10} 
          required 
        ></textarea>
      

        <button type="submit">Add Note</button>
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
        <div key={note.id} className="note-item">
          <div className="notes-header">
            <button>x</button>
          </div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
        ))}
      </div>
    </div>
  );
};




export default App;
