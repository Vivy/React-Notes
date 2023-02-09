import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useState } from 'react';

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [detailes, setDetailes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && detailes) {
      const note = {};
    }
    console.log(title, detailes);
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
