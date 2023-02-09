import { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useCreateDate from '../hooks/createdate';

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id == id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();

    if (title && details) {
      const newNote = { ...note, title, details, date };
      const newNotes = notes.map((item) => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      });

      setNotes(newNotes);
    }

    navigate('/');
  };

  const handleDelete = () => {
    const newNotes = notes.filter((item) => item.id !== id);

    setNotes(newNotes);
    navigate('/');
  };
  return (
    <section>
      <header className='create-note__header'>
        <Link to='/'>
          <AiOutlineArrowLeft />
        </Link>
        <button className='btn lg primary ' onChange={handleEdit}>
          Save
        </button>
        <button className='btn danger' onClick={handleDelete}>
          <RiDeleteBin5Line />
        </button>
      </header>
      <form className='create-note__form' onSubmit={handleEdit}>
        <input
          type='text'
          placeholder='The Title'
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows='37'
          placeholder='Notes here...'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
