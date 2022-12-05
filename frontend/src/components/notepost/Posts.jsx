import React, { useEffect } from "react";
import Note from "../notes/Note";
import "./post.css";

const getapi = "http://127.0.0.1:8000";

const Posts = () => {
  const getAllPost = async () => {
    const response = await fetch(`${getapi}/post/`);

    const data = await response.json();

    if (response.ok) {
      console.log(data);
    } else {
      console.log("Failed");
    }
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <div className='post'>
      {/* <h1 className='post'>No Posts!</h1> */}
      {/* {data.map((note) => {})} */}
      <div className='notcon'>
        <Note />
      </div>
    </div>
  );
};

export default Posts;
