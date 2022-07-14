import React from 'react';
import "./Nav.scss"
import { NavLink, Link, Navigate } from 'react-router-dom'
import Select from 'react-select';
const Decks = [
    { label: <NavLink className='appName' to='/technicalBE'><p>FE</p></NavLink>},
    { label: <NavLink className='appName' to='/technicalBE'>BE</NavLink> },
    { label: <NavLink className='appName' to='/behavioral'><p>Behavioral</p></NavLink> }
]



 const Nav = () => {
    return (
        <div className='nav'>
            <NavLink className='appName' to='/dashboard'>
                <h2>DEVPREP</h2>
            </NavLink>
            <NavLink className='flashcards-button nav-button' to='/flashcards'>
            <Select placeholder={<button>Decks</button>} options={Decks} />
            </NavLink>
            <NavLink className='home-button nav-button' to='/dashboard'>
                <button>Home</button>
            </NavLink>
            <NavLink className='signout-button nav-button' to='/login'>
                <button>Signout</button>
            </NavLink>

        </div>

    );
}

export default Nav;
