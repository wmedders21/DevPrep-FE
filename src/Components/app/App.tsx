import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../login/Login';
import FlashcardPage from '../flashcardPage /FlashcardPage';
import Dashboard from '../dashboard/Dashboard';
import ErrorHandling from '../errorHandling/ErrorHandling';
import React, { useState } from 'react';
import UserContext from '../../UserContext';

const App = () => {

  const [user, setUser] = useState('')

  return (
    < UserContext.Provider value={user} >
      <main className="App">
        <Routes>
          < Route path='/' element={ < Login user={user} setUser={setUser} /> } />
          < Route path='/dashboard' element={ < Dashboard /> }/>
          < Route path='/flashcards' element= { < FlashcardPage/> } />
          < Route path='/error' element= { < ErrorHandling /> } />
          < Route path='*' element={ < Navigate to="/error" replace /> } />
        </Routes>
      </main>
    </ UserContext.Provider >
  );
}


export default App;
