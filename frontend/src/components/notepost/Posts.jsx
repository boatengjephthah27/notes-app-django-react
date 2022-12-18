import React from "react";
import Note from "../notes/Note";
import "./post.css";
// import { useNavigate } from "react-router-dom";

const Posts = (props) => {
  // const navigate = useNavigate();

  return (
    <div className='post'>
      {props.data_.length > 0 ? (
        <div className='ccon'>
          <div className='notcon'>
            {props.data_.map((note) => {
              const { title, date_created, id } = note;
              return (
                <div className='nc'>
                  <Note
                    key={id}
                    nid={id}
                    ntitle={title}
                    ndate={date_created}
                    delitem={() => props.delitem(id)}
                    note={note}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className='no-p'>No Posts Here!</div>
      )}
    </div>
  );
};

export default Posts;
