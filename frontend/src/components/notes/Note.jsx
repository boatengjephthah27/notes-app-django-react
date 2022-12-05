import React from "react";
import "./note.css";
import {
  faNoteSticky,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import note from "./snote.png";

const Note = ({ ntitle, ndate, delitem, edititem, nid }) => {
  return (
    <div className='notebg' onClick={() => {}} key={nid}>
      <h1 className='ntitle'>{ntitle}</h1>
      <p className='date'>{ndate}</p>

      <div>
        <FontAwesomeIcon icon={faNoteSticky} className='icon' />
        Notes
        <div className='del'>
          <FontAwesomeIcon
            icon={faTrashCan}
            className='delbtn'
            onClick={delitem}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className='editbtn'
            onClick={edititem}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
