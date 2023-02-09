import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import NoteItem from '../component/noteitem';
import { useState } from 'react';

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <section>
      <header className='notes__header'>
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && <input type='text' autoFocus placeholder='Keyword...' />}
        <button className='btn' onClick={() => setShowSearch(!showSearch)}>
          <BsSearch />
        </button>
      </header>

      <div className='notes__container'>
        {notes.map((note) => (
          <NoteItem note={note} key={note.id} />
        ))}
      </div>
      <Link className='btn add__btn' to='/create-note'>
        <GoPlus />
      </Link>
    </section>
  );
};

export default Notes;
