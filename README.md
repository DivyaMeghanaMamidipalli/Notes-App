# Notes
# Note Taking App
This is a simple note taking app built with React and Redux. It allows users to add, edit, and delete notes.

## Installation
1. Unzip the repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the development server

## Features Implemented
- Created a Designated Note Area that covers 3/4 of the window's
width and 3/4 of the window's height.

- Enabled a double-click action within the Notes Area. When a user
double-clicks, a blue box-like structure appears. It functions as an
editable text box where users can input their text.

- Text Box Behavior: After creating the blue box-like structure, users should be able to input
text directly into this text box.

- Drag and Drop Functionality: Users should be able to drag and drop text from the Notes

- Creating New Box: If a user drops text onto an empty space within the Notes Area, a new
blue box-like structure should be generated. This new structure will contain the dropped
text

- Appending to Existing Box: If a user drops text onto an existing blue box-like structure, the
dragged text should be appended to the existing text within that structure

- Exporting Notes to .xlsx File

- Used Redux to manage the state of the application.
- Saved the notes to the local storage so that the notes persist even after the page is refreshed.