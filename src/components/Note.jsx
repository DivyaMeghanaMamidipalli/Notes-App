import React, { useState } from "react";
import { editNote } from "../redux/noteSlice";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";

const Note = (noteObject, isEditable) => {
  const { id,  content, date, location } = noteObject.noteObj;
  console.log(id);
  const [econtent, setContent] = useState(content);

  const dispatch = useDispatch();
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(
      editNote({
        id: id,
        content: econtent,
        date: date,
        location: location,
      })
    );
  };

  return (
    <>
    
      <Form>
        <Form.Group>
          <Form.Control
            as="textarea"
            required
            type="text"
            rows="6"
            cols="10"
            placeholder={content}
            className="note-area"
            value={econtent}
            onChange={(e) => setContent(e.target.value)}
            onDragCapture={(e) => { e.preventDefault(); }}
            onBlur={handleEdit}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default Note;
