import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateNotes from './pages/createnote';
import EditNote from './pages/editnote';
import Notes from './pages/notes';
const App = () => {
  return (
    <main id='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Notes />} />
          <Route path='/create-note' element={<CreateNotes />} />
          <Route path='/edit-note' element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
