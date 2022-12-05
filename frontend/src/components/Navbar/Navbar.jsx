import React, { useState } from "react";
import AddNote from "../addnote/AddNote";
import Logo from "../logo/Logo";
import "./navbar.css";

const Navbar = (props) => {
  const [show, setshow] = useState(false);
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  const createNote = (event) => {
    event.preventDefault();
    console.log(title);
    console.log(content);
    setcontent("");
    settitle("");
    setshow(false);
  };

  return (
    <div className='navbar'>
      <Logo />
      <div>
        <AddNote propp={setshow} />
        <div className={show ? "nf" : "hidden"}>
          <div className='form'>
            <div className='top'>
              <h1 className='cn'>Create New Note</h1>
              <p
                className='close'
                onClick={() => {
                  setshow(false);
                }}
              >
                X
              </p>
            </div>
            <form action='' className='formm'>
              <div className='fg'>
                <label htmlFor='title' className='tit'>
                  Title
                </label>
                <br />
                <input
                  type='text'
                  name='title'
                  id='title'
                  className='fin'
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                  placeholder='Title...'
                />
              </div>

              <div className='fg'>
                <label htmlFor='text' className='tit'>
                  Note
                </label>
                <br />
                <textarea
                  name='text'
                  id='text'
                  className='fin'
                  rows='5'
                  value={content}
                  onChange={(e) => setcontent(e.target.value)}
                  placeholder='Type your note here...'
                />
              </div>

              <div className='fg'>
                <input
                  type='submit'
                  value='SAVE'
                  className='save'
                  onClick={createNote}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
