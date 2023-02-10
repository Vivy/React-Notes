import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateNotes from './pages/createnote';
import EditNote from './pages/editnote';
import Notes from './pages/notes';
import { useEffect, useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  );

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <main id='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Notes notes={notes} />} />
          <Route
            path='/create-note'
            element={<CreateNotes setNotes={setNotes} />}
          />
          <Route
            path='/edit-note/:id'
            element={<EditNote notes={notes} setNotes={setNotes} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
