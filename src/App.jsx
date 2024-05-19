import React from "react";
import NoteList from "./components/NoteList";
import Create from "./components/Create";
import Header from "./components/Header";
import "./App.css";
import { useState } from "react";
import * as XLSX from "xlsx";


function App() {
  const [visible, setVisible] = useState(false);
  const [notelocation, setNoteLocation] = useState({ x: 0, y: 0 });
  const [location, setLocation] = useState({ x: 0, y: 0 });
  const [content, setContent] = useState("");
  const [isDragged, setIsDragged] = useState(false);

  const handleDoubleClick = (e) => {
    e.preventDefault();
    setVisible(true);
    let x = e.clientX;
    let y = e.clientY;
    setNoteLocation({ x, y });
  };

  const handleDrop = (event) => {
    const droppedText = event.dataTransfer.getData('text/plain');
    const x = event.clientX;
    const y = event.clientY;
    setNoteLocation({ x, y });
    setVisible(true);
    setContent(droppedText);
    setIsDragged(true);
    }
  

  const handleExport = (e) => {
    e.preventDefault();
    const notes = JSON.parse(localStorage.getItem("notes"));
    const dataSet = notes.map((note) => {
      return { title: note.id, content: note.content, date: note.date, location: note.location};
    });

    const ws = XLSX.utils.json_to_sheet(dataSet);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "export.xlsx");
  };

  const handleClick = (e) => {
    e.preventDefault();
    let x = e.clientX;
    let y = e.clientY;
    setLocation({ x, y });
    if (
      x > notelocation.x + 700 ||
      x < notelocation.x ||
      y > notelocation.y + 350 ||
      y < notelocation.y
    ) {
      setVisible(false);
    }
    setContent("");
  };

  return (
    <>
      <div className=" container">
       
                <div className="row justify-content-center">
                  <Header />
                  <div
                    className=" row justify-content-center main mx-3 my-3 py-5 px-5 notes-area"
                    onDoubleClick={handleDoubleClick}
                    onClick={handleClick}
                    onDrop={handleDrop}
                    onDragOver={(event) => event.preventDefault()}
                  >
                    <NoteList/>
                    <Create
                      visible={visible}
                      location={location}
                      setVisible={setVisible}
                      setLocation={setLocation}
                      setNoteLocation={setNoteLocation}
                      noteLocation={notelocation}
                      dragContent = {content}
                      isDragged = {isDragged}
                      setIsDragged = {setIsDragged}
                      setDragContent = {setContent}
                    />
                  </div>
                  <div className="row export">
                    <button onClick={handleExport} className="export-button">
                      Export Data
                    </button>
                  </div>
                </div>
   
      </div>
    </>
  );
}

export default App;
