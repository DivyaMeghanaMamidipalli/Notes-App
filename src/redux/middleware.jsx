const middleware = store => next => action => {
    const result = next(action);
    
    // Update local storage whenever the state changes
    const notes = store.getState().notes;
    localStorage.setItem('notes', JSON.stringify(notes));
    
    return result;
  };
  
  export default middleware;
  