import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

const App = () => {
  // hook object for notes. each note will have several properties.
  // id will help us later on when we will delete notes.
  const [notes, setNotes] = useState([
    {
    test: "This is the text note.",
    date: "30/1/2022",
    id: nanoid()
    },
    {
      test: "This is the text note.",
      date: "30/1/2022",
      id: nanoid()
    },
    {
      test: "This is the text note.",
      date: "30/1/2022",
      id: nanoid()
    }
  ]);

  // function that will update the state of AddNote.js.
  const addNote = (text) => {
    const date = new Date();
    // note object that has text, date and id.
    const newNote = {
      text: text,
      date: date.toLocaleDateString(),
      id: nanoid  
    }
    // array that has existing notes and new note
    const newNotes = [...notes, newNote];
    // we pass the new array of notes
    setNotes(newNotes);
  };

  return (
    <div className="container">
      {/* we pass the notes variable to our NotesList so it can be rendered */}
      <NotesList notes={notes} handleAddNote={addNote}/>
    </div>
  );
}

export default App;