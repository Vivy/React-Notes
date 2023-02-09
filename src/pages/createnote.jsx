import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import useCreateDate from '../hooks/createdate';

const CreateNote = ({ setNotes }) => {
  const date = useCreateDate();
  const [title, setTitle] = useState('');
  const [detailes, setDetailes] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && detailes) {
      const note = { id: uuid(), title, detailes, date };

      console.log(note);

      setNotes((prevNotes) => [note, ...prevNotes]);
      navigate('/');
    }
  };

  return (
    <section>
      <header className='create-note__header'>
        <Link to='/' className='btn'>
          <AiOutlineArrowLeft />
        </Link>
        <button className='btn lg primary' onClick={handleSubmit}>
          Save
        </button>
      </header>
      <form className='create-note__form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='The Title'
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          onChange={(e) => setDetailes(e.target.value)}
          value={detailes}
          placeholder='Notes here...'
          rows='37'
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
