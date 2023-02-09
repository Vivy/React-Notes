import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';

const Notes = () => {
  return (
    <section>
      <header className='notes__header'>
        <h2>My Notes</h2>
        <input type='text' autoFocus placeholder='Keyword...' />
        <button className='btn'>
          <BsSearch></BsSearch>
        </button>
      </header>

      <div className='notes__container'></div>
      <Link className='btn add__btn'>
        {' '}
        <GoPlus />
      </Link>
    </section>
  );
};

export default Notes;
