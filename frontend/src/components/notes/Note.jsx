import React from "react";
import "./note.css";
// import note from "./snote.png";

const Note = () => {
  return (
    <div
      className='notebg'
      onClick={() => {
        <div className='sh-con'></div>;
      }}
    >
      <h1 className='ntitle'>Bank Details</h1>
      <p className="date">22/12/22</p>
    </div>
  );
};

export default Note;
