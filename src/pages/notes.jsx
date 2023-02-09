import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import NoteItem from '../component/noteitem';

const Notes = ({ notes }) => {
  return (
    <section>
      <header className='notes__header'>
        <h2>My Notes</h2>
        <input type='text' autoFocus placeholder='Keyword...' />
        <button className='btn'>
          <BsSearch />
        </button>
      </header>

      <div className='notes__container'>
        {notes.map((note) => (
          <NoteItem note={note} />
        ))}
      </div>
      <Link className='btn add__btn' to='/create-note'>
        <GoPlus />
      </Link>
    </section>
  );
};

export default Notes;
