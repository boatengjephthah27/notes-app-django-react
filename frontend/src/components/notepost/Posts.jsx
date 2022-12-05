import React from "react";
import Note from "../notes/Note";
import "./post.css";

const Posts = (props) => {
  return (
    <div className='post'>
      {props.data_.length > 0 ? (
        <div>
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
