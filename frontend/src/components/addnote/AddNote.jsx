import React from "react";
// import AddNotePage from "../../pages/addnotepage/AddNotePage";
import "./addnote.css";

const AddNote = (props) => {
  return (
    <div
      className='adddiv'
      onClick={() => {
        props.propp(true);
      }}
    >
      <h1>+ Add Note</h1>
    </div>
  );
};

export default AddNote;
