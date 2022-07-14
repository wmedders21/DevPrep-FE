import React from 'react';
import "./Nav.scss"
import { NavLink, Link, Navigate } from 'react-router-dom'
import Select from 'react-select';
const Decks = [
    { label: <Link className='nav-link dd-menu-be' to='/flashcards/technicalBE'>FE</Link>},
    { label: <NavLink className='nav-link dd-menu-fe' to='/flashcards/technicalFE'>BE</NavLink> },
    { label: <NavLink className='nav-link dd-menu-behavioral' to='/flashcards/behavioral'>Behavioral</NavLink> }
]



 const Nav = () => {

    return (
        <div className='nav'>
            <NavLink className='nav-link appName' to='/dashboard'>
                <h2>DEVPREP</h2>
            </NavLink>
            <NavLink className='flashcards-button nav-button' to='/flashcards'>
            <Select placeholder={<p className='deck-select'>Decks</p>} options={Decks} />
            </NavLink>
            <NavLink className='home-button nav-button' to='/dashboard'>
                <button>Home</button>
            </NavLink>
            <NavLink className='signout-button nav-button' to='/login'>
                <button>Logout</button>
                {/* {user ? 'Signout' : 'Login'} */}
            </NavLink>

        </div>

    );
}

export default Nav;
