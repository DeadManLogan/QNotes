import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

const App = () => {
  // hook object for notes. each note will have several properties.
  // id will help us later on when we will delete notes.
  const [notes, setNotes] = useState([{
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
  return (
    <div className="container">
      {/* we pass the notes variable to our NotesList so it can be rendered */}
      <NotesList notes={notes}/>
    </div>
  );
}

export default App;