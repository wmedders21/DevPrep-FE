import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from '../login/Login';
import FlashcardPage from '../flashcardPage /FlashcardPage';
import Nav from '../nav/Nav';

const App = () => {
  return (
    <main className="App">
      < Nav />
      <Routes>
        < Route path='/login' element={< Login />}/>
        < Route path='/'>
         < Route path= '/flashcards' element= { < FlashcardPage/> } />

        </Route>
      </Routes>
    </main>
  );
}


export default App;