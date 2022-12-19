import React, { useState } from "react";
import "./NoteContent.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NoteContent = (props) => {
  const location = useLocation();
  const note = location.state.note;
  const [data, setdata] = useState([]);

  const navigate = useNavigate();

  const [ntitle, setntitle] = useState(`${note.title}`);
  const [ncontent, setncontent] = useState(`${note.content}`);

  const updateitem = async () => {
    props.getAllPost();

    axios
      .put(`${props.getapi}/post/${note.id}/`, {
        title: ntitle,
        content: ncontent,
      })
      .then((response) => {
        // console.log(response);
        setdata(response.data);
        // props.getAllPost();
        // alert(`Note Updated!`);
      });

    if (!data) return null;

    navigate("/");
    props.getAllPost();
  };

  return (
    <div className='note-show-con ' key={note.id}>
      <div
        key={note.id}
        className=' w-full h-[95%] mx-4 sm:mx-[10%] my-6 flex flex-col items-center bg-white py-6 rounded-2xl'
      >
        <div className='w-full px-3 '>
          <Link to='/'>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className='text-left text-xl md:text-3xl hover:scale-[1.09] transition-all duration-300'
            />
          </Link>
        </div>
        <div className='w-full h-[10%] flex items-center justify-center '>
          <input
            type='text'
            className='w-[90%] py-3 font-bold text-[22px] outline-none'
            value={ntitle}
            // defaultValue={note.title}
            onChange={(e) => {
              setntitle(e.target.value);
              console.log(ntitle);
            }}
          ></input>
        </div>
        <div className='w-full flex items-center h-[90%] justify-center mt-4 '>
          <textarea
            className='w-[90%] h-full py-3 outline-none resize-none'
            value={ncontent}
            // defaultValue={note.content}
            onChange={(e) => {
              setncontent(e.target.value);
              console.log(ncontent);
            }}
          ></textarea>
        </div>
        <button
          className='px-6 py-4 bg-gradient-to-r from-blue-900 to-cyan-900 hover:from-cyan-900  hover:to-blue-900 hover:shadow-xl font-bold text-white transition-all duration-300 hover:px-20'
          onClick={updateitem}
        >
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default NoteContent;
