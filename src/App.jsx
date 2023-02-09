import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateNotes from './pages/createnote';
import EditNote from './pages/editnote';
import Notes from './pages/notes';
import thenote from './notes.js';
import { useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState(thenote);

  return (
    <main id='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Notes notes={notes} />} />
          <Route path='/create-note' element={<CreateNotes />} />
          <Route path='/edit-note' element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
