const AddNote = () => {
    return (
        // this div funcions like a note container but it will be different than the others.
        <div className = "note 2">
            <textarea 
                rows="8" 
                columns="10" 
                placeholder="Add a note..."
            ></textarea>
            {/* footer div that show remaining words and save button */}
            <div className="note-footer">
                <small>200 Remaining</small>
                <button className="save">Save</button>
            </div>
        </div>
    );
};

export default AddNote;