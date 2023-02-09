import { Link } from 'react-router-dom';

const NoteItem = ({ note }) => {
  return (
    <Link to={`/edit-note/${note.id}`} className='note'>
      <h4>
        {note.title.length > 37
          ? note.title.substr(0, 37) + ' ... '
          : note.title}
      </h4>
      <p>{note.date}</p>
    </Link>
  );
};

export default NoteItem;
