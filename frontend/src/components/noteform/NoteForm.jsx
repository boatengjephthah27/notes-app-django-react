import React from "react";
import "./noteform.css";

const NoteForm = (props) => {
  return (
    <div className={props.show ? "nf" : "hidden"}>
      <div className='form'>
        <div className='top'>
          <h1 className='cn'>Create New Note</h1>
          <p
            className='close'
            onClick={() => {
              props.setshow(false);
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
              value={props.title}
              onChange={(e) => props.settitle(e.target.value)}
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
              value={props.content}
              onChange={(e) => props.setcontent(e.target.value)}
              placeholder='Type your note here...'
            />
          </div>

          <div className='fg'>
            <input
              type='submit'
              value='SAVE'
              className='save'
              onClick={props.createnote}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteForm;
