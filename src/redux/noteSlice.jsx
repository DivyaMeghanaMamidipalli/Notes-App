import { createSlice } from "@reduxjs/toolkit";
// LOCAL STORAGE

const notes=JSON.parse(localStorage.getItem('notes')) || [];

const noteSlice=createSlice({
    name:"notes",
    initialState: notes,
   
    reducers:{
        addNote:(state,action)=>{
            state.push(action.payload);
            localStorage.setItem('notes',JSON.stringify(state));
        },

        editNote:(state,action)=>{
            const {id,title,content,date, location}=action.payload;
            const enote=state.find(note=>note.id===id);
            if(enote){
                enote.title=title;
                enote.content=content;
                enote.date=date;
                enote.location=location;    
            }
            localStorage.setItem('notes',JSON.stringify(state));
        },

        deleteNote:(state,action)=>{
            const {id}=action.payload;
            const enote=state.find(note=>note.id===id);
            var updatedNotes;
            if(enote){
                updatedNotes=state.filter(note=>note.id!==id);
                return updatedNotes;                
            }
            localStorage.setItem('notes',JSON.stringify(updatedNotes));
            // return updatedNotes;
        }
    }
});

export const{addNote,editNote,deleteNote}=noteSlice.actions;
export default noteSlice.reducer;