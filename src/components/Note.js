import {MdDeleteForever} from 'react-icons/md';

// arrow function that has the parent div of each individual note.
const Note = ({text, date, id}) => {
    return (
        // this div contains the main text and the footer: date and delete icon
        <div className='note'>
            {/* inside the span tags there is the main text */}
            <span>{text}</span>

            <div className='note-footer'>
                <small>{date}</small>
                <MdDeleteForever className='delete-icon' size='1.3em'/>
            </div>
        </div>
    );
};

export default Note;