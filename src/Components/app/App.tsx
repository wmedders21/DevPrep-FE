import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../login/Login';
import FlashcardPage from '../flashcardPage /FlashcardPage';
import Dashboard from '../dashboard/Dashboard';
import ErrorHandling from '../errorHandling/ErrorHandling';

const App = () => {
  //add global state that shows if user is present and user is logged in
  
  return (
    <main className="App">
      <Routes>
        < Route path='/' element={ < Login /> } />
        < Route path='/dashboard' element={ < Dashboard /> }/>
        < Route path='/flashcards' element= { < FlashcardPage/> } />
        < Route path='/error' element= { < ErrorHandling /> } />
        < Route path='*' element={ < Navigate to="/error" replace /> } />
      </Routes>
    </main>
  );
}


export default App;