import axios from "axios";
import React, { useState } from "react";
import AddNote from "../addnote/AddNote";
import Logo from "../logo/Logo";
import NoteForm from "../noteform/NoteForm";
import "./navbar.css";

const getapi = "http://127.0.0.1:8000";

const Navbar = (props) => {
  const [show, setshow] = useState(false);
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [data, setdata] = useState([]);

  const createNote = async (event) => {
    event.preventDefault();

    props.showall();

    axios
      .post(`${getapi}/post/`, {
        title: title,
        content: content,
      })
      .then((response) => {
        setdata(response.data);
      });

    setcontent("");
    settitle("");
    setshow(false);

    if (!data) return null;

    props.showall();
  };

  return (
    <div className='navbar'>
      <Logo />
      <AddNote propp={setshow} />
      <NoteForm
        setshow={setshow}
        show={show}
        settitle={settitle}
        title={title}
        setcontent={setcontent}
        content={content}
        createnote={createNote}
      />
    </div>
  );
};

export default Navbar;
