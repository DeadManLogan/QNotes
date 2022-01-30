import Note from './Note';

// arrow function that contains note components. we have them under a div so it's easier to
// modify them using css
const NotesList = ({notes}) => {
    return (
        <div className='notes-list'>
            {notes.map((note => 
                <Note text={note.text} date={note.date} id={note.id}/>
            ))}
        </div>
    );
};

export default NotesList;