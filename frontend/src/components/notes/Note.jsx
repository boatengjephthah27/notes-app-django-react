import React from "react";
import "./note.css";
import {
  faNoteSticky,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

// import note from "./snote.png";

const Note = ({ ntitle, ndate, delitem, nid, note }) => {
  const navigate = useNavigate();

  return (
    <div className='notebg' key={nid}>
      <h1
        className='ntitle'
        onClick={() =>
          navigate(`/note/${nid}`, {
            state: { note },
          })
        }
      >
        {ntitle}
      </h1>
      <p
        className='date'
        onClick={() =>
          navigate(`/note/${nid}`, {
            state: { note },
          })
        }
      >
        {ndate}
      </p>

      <div>
        <FontAwesomeIcon icon={faNoteSticky} className='icon cursor-pointer' />

        <span
          onClick={() =>
            navigate(`/note/${nid}`, {
              state: { note },
            })
          }
          className='icon cursor-pointer'
        >
          Notes
        </span>
        <div className='del'>
          <FontAwesomeIcon
            icon={faTrashCan}
            className='delbtn'
            onClick={delitem}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className='editbtn'
            onClick={() =>
              navigate(`/note/${nid}`, {
                state: { note },
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
