import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import useCreateDate from '../hooks/createdate';

const CreateNote = ({ setNotes }) => {
  const date = useCreateDate();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {
      const note = { id: uuid(), title, details, date };

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
          onChange={(e) => setDetails(e.target.value)}
          value={details}
          placeholder='Notes here...'
          rows='37'
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
