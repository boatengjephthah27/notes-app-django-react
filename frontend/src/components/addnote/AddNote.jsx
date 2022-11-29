import React from "react";
import AddNotePage from "../../pages/addnotepage/AddNotePage";
import "./addnote.css";

const AddNote = () => {
  const open = () => {
    <AddNotePage />;
  };

  return (
    <div className='adddiv' onClick={open}>
      <h1>+ Add Note</h1>
    </div>
  );
};

export default AddNote;
