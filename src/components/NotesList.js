import Note from './Note';
import AddNote from './AddNote';

// arrow function that contains note components. we have them under a div so it's easier to
// modify them using css
const NotesList = ({notes, handleAddNote}) => {
    return (
        <div className='notes-list'>
            {notes.map((note => 
                <Note text={note.text} date={note.date} id={note.id}/>
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    );
};

export default NotesList;