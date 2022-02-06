import { useState } from "react";

const AddNote = ({handleAddNote}) => {
    // we want to store what the user types. We start with empty input.
    const [noteText, setNoteText] = useState("");

    // stores the input of the user
    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    // we save the text to the new note
    const handleSaveClick = () => {
        // we check if the input is blank space. .trim() deletes the blank space before and after input
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            // sets the note text of the new note to blank. Unfortunately doesn't work
            setNoteText('');
        }
    };

    return (
        // this div funcions like a note container but it will be different than the others.
        <div className = "note new">
            <textarea 
                rows="8" 
                columns="10" 
                placeholder="Add a note..."
                onChange={handleChange}
            ></textarea>
            {/* footer div that show remaining words and save button */}
            <div className="note-footer">
                <small>200 Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;