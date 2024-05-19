import React,{useState,useRef, useCallback} from 'react'
import {Form,Button} from 'react-bootstrap'
import { addNote } from '../redux/noteSlice';
import { useDispatch,useSelector} from 'react-redux';
import { set, sub } from "date-fns";
import {Rnd} from 'react-rnd';
import { useEffect } from 'react';
// Create component must have a property visible true or false so that only if visible is true the component will be displayed
// Create component must have 2 property functions visible and location

function Create({visible,location, setVisible, setLocation, setNoteLocation, noteLocation, dragContent, isDragged, setIsDragged, setDragContent}) {
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");

    useEffect(() => {
        if(isDragged){
            setContent(dragContent);
            
        }
        else{
            setContent("");
            setDragContent("");
        }
    }, [dragContent])
    
    
    
    const notes=useSelector((state)=>state.notes);
    const dispatch=useDispatch();

    const ftitle=useRef("");
    
    const fcontent=useRef("");

    const handleDrag = useCallback((e, d) => {
        // setNoteLocation({ x: d.x, y: d.y });
        
    }, []);

    
    const handleSave=(e)=>{
        e.preventDefault();
        setVisible(false)
        dispatch(addNote({id:notes.length + 1,title,content,date: sub(new Date(), { minutes: 0 }).toISOString(),location:noteLocation}))

            ftitle.current.value=""
            fcontent.current.value=""
            setContent("");
        setIsDragged(false);
        
  

    }
  
  if(!visible){
    return null;
  }

  if(isDragged){
    return (
      <Rnd
     
      bounds={'parent'}
      default={{
        x: location.x,
        y: location.y,
        width: 250,
        height: 300,
      }}
      onDragStop={(e, data) => setNoteLocation({ x: data.x, y: data.y })}
      className='notes-rnd-editor'
      >

      <div 
          className='notes-editor p-4' style={
          {
            height: '350px',
            width:'700px'
        }}>
    
        <h2 className='head'>Add a Note</h2>
            <Form onSubmit={handleSave}>
              {/* <Form.Group>
                  <Form.Control type="text" ref={ftitle} placeholder="Title" className='title' onChange={(e)=>setTitle(e.target.value)}/>
              </Form.Group> */}
              <br/>
              <Form.Group>
                  {/* initialize the text area with the dragged coontnet */}
                  <Form.Control as="textarea" required autoFocus  type="text" ref={fcontent} rows="6" cols="10" value={content} placeholder='Take a note...' 
            className='note-area' onChange={(e)=>setContent(e.target.value)} />
              </Form.Group>
              <div className="note-footer my-1">
                
                <Button type="submit" className="save" onClick={handleSave}>Save</Button>
              </div>  
            </Form>      
        </div>
      </Rnd>
    )
  }
  return (
    <Rnd
    dragHandleClassName='notes-editor'
    bounds={'parent'}
    default={{
      x: location.x,
      y: location.y,
      width: 350,
      height: 350,
    }}
    className='notes-rnd-editor'
    onDragStop={(e, data) => setNoteLocation({ x: data.x, y: data.y })}
    >

    <div  
        className='notes-editor p-4' style={
        {
          height: '350px',
          width:'700px'
      }}>
  
      <h2 className='head'>Add a Note</h2>
          <Form onSubmit={handleSave}>
            {/* <Form.Group>
                <Form.Control type="text" ref={ftitle} placeholder="Title" className='title' onChange={(e)=>setTitle(e.target.value)}/>
            </Form.Group> */}
            <br/>
            <Form.Group>
                <Form.Control as="textarea" required autoFocus  type="text" ref={fcontent} rows="6" cols="10" placeholder="Take a note..."
          className='note-area' onChange={(e)=>setContent(e.target.value)} />
            </Form.Group>
            <div className="note-footer my-1">
              
              <Button type="submit" className="save" onClick={handleSave}>Save</Button>
            </div>  
          </Form>      
      </div>
    </Rnd>
  )
}

export default Create