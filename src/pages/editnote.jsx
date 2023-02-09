import { AiOutlineArrowLeft } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const EditNote = () => {
  return (
    <section>
      <header className='create-note__header'>
        <Link to='/'>
          <AiOutlineArrowLeft />
        </Link>
        <button className='btn lg primary '>Save</button>
        <button className='btn danger'>
          <RiDeleteBin5Line />
        </button>
      </header>
      <form className='create-note__form'>
        <input type='text' placeholder='The Title' autoFocus />
        <textarea rows='37' placeholder='Notes here...'></textarea>
      </form>
    </section>
  );
};

export default EditNote;
