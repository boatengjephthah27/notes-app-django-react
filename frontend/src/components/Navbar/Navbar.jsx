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

  const createNote = async (event) => {
    event.preventDefault();

    const new_request = new Request(`${getapi}/post/`, {
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        "Content-Type": "Application/Json",
      },
      method: "POST",
    });

    const response = await fetch(new_request);
    const output = await response.json();

    if (response.ok) {
      console.log(output);
    } else {
      console.log("Failed");
    }

    console.log(title);
    console.log(content);
    setcontent("");
    settitle("");
    setshow(false);

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
