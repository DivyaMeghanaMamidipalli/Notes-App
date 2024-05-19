import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../redux/noteSlice";
import Note from "./Note";
import TimeAgo from "./TimeAgo";

function NoteList() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  const handleDelete = (id) => {
    dispatch(deleteNote({ id: id }));
  };

  return (
    <>
    
      <div className="notes-list my-3 ">
        {notes.map((note, index) => (
        
          
            <div className="note py-3 px-3 mx-3 my-3 " key={note.id} >
              
              <Note noteObj = {note} isEditable = {false} />
              <div className="header">
                <div className="edit-delete">
                  <div className="row footer">
                    <div className="col-3">
                
                      <button onClick={() => handleDelete(note.id)}>
                        <i class="fa-regular fa-trash-can"></i>
                      </button>
                    </div>
                    <div className="col-9">
                      <TimeAgo timeStamp={note.date} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
   
        ))}
      </div>
    </>
  );
}

export default NoteList;