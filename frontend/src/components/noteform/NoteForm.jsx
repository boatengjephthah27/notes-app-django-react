import React from "react";
import "./noteform.css";

const NoteForm = () => {
  return (
    <div className='form'>
      <div className='top'>
        <h1 className='cn'>Create New Note</h1>
        <p className='close'>X</p>
      </div>
      <form action='' className='formm'>
        <div className='fg'>
          <label htmlFor='title' className='tit'>
            Title
          </label>{" "}
          <br />
          <input type='text' name='title' id='title' className='fin' />
        </div>

        <div className='fg'>
          <label htmlFor='text' className='tit'>
            Note
          </label>
          <br />
          <textarea name='text' id='text' className='fin' rows='5' />
        </div>

        <div className='fg'>
          <input type='submit' value='SAVE' className='save' />
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
