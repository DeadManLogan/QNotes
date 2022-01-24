import Note from './Note';

// arrow function that contains note components. we have them under a div so it's easier to
// modify them using css
const NotesList = () => {
    return (
        <div className='notes-list'>
            <Note />
            <Note />
            <Note />
            <Note />
        </div>
    );
};

export default NotesList;