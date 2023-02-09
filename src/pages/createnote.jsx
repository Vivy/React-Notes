import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
const CreateNote = () => {
  return (
    <section>
      <header className='create-note__header'>
        <Link to='/' className='btn'>
          <AiOutlineArrowLeft />
        </Link>
        <button className='btn lg primary'>Save</button>
      </header>
      <form className='create-note__form'>
        <input type='text' placeholder='The Title' autoFocus />
        <textarea placeholder='Notes here...' rows='37'></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
