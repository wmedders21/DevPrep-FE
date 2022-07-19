import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../login/Login';
import FlashcardPage from '../flashcardPage /FlashcardPage';
import Dashboard from '../dashboard/Dashboard';
import ErrorHandling from '../errorHandling/ErrorHandling';
import React, { useState } from 'react';
import UserContext from '../../UserContext';
import { CurrentUser } from '../../interface'

const App: React.FC = () => {

  const [user, setUser ] = useState<CurrentUser>()

  return (
    < UserContext.Provider value={{user, setUser}} >
      <main className="App">
        <Routes>
          < Route path='/' element={ !user? < Navigate to="/login" replace /> : <Navigate to="/dashboard" replace />} />
          < Route path='/login' element={< Login user={user} setUser={setUser} /> } />
          < Route path='/dashboard' element={ !user? < Navigate to="/login" replace /> :  < Dashboard /> }/>
          {/* < Route path='/flashcards/:id' element= {  !user? < Navigate to="/login" replace /> : < FlashcardPage/> } /> */}
          < Route path='/flashcards/:id' element= { < FlashcardPage/> } />
          < Route path='/error' element= { < ErrorHandling /> } />
          < Route path='*' element={ < Navigate to="/error" replace /> } />
        </Routes>
      </main>
    </ UserContext.Provider >
  );
}


export default App;
