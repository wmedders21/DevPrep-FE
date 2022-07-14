import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../login/Login';
import FlashcardPage from '../flashcardPage /FlashcardPage';
import Dashboard from '../dashboard/Dashboard';
import ErrorHandling from '../errorHandling/ErrorHandling';
import React, { useState } from 'react';
import UserContext from '../../UserContext';

const App = () => {

  const [user, setUser] = useState('Ross')

  return (
    < UserContext.Provider value={user} >
      <main className="App">
        <Routes>
          < Route path='/' element={ !user? < Navigate to="/login" replace /> : <Navigate to="/dashboard" replace />} />
          < Route path='/login' element={ < Login user={user} setUser={setUser} /> } />
          < Route path='/dashboard' element={ !user? < Navigate to="/login" replace /> :  < Dashboard /> }/>
          < Route path='/flashcards' element= {  !user? < Navigate to="/login" replace /> : < FlashcardPage/> } />
          < Route path='/error' element= { < ErrorHandling /> } />
          < Route path='*' element={ < Navigate to="/error" replace /> } />
        </Routes>
      </main>
    </ UserContext.Provider >
  );
}


export default App;
