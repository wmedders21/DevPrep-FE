import React from 'react';
import "./Nav.scss"
import { NavLink, Link, Navigate } from 'react-router-dom'
import Select, { StylesConfig } from 'react-select';
const Decks = [
    { label: <NavLink className='dd-menu dd-menu-be' to='/flashcards/BEtechnicalCards'>Technical Back End</NavLink>},
    { label: <NavLink className='dd-menu dd-menu-fe' to='/flashcards/FEtechnicalCards'>Technical Front End</NavLink> },
    { label: <NavLink className='dd-menu dd-menu-behavioral' to='/flashcards/behavioralCards'>Behavioral</NavLink> }
]

const dropdownMenuStyles = {
    container: (provided)=>({
        ...provided,
        width: '15vw'
}),
    option: (styles, state) => ({
        ...styles,
        height: '4vh',
        'font-size': '2vh'
    }),
    menu: (styles, state) => ({
        ...styles,
        width: '35vw'
    })
}


 const Nav = () => {

    return (
        <div className='nav'>
            
            <NavLink className='appName' to='/dashboard'>
                <h2>DEVPREP</h2>
            </NavLink>
            
            <div className='navlink-container'>
                <NavLink 
                        className='home-button nav-button' 
                        to='/dashboard'>
                    <button className='nav-button'>Home</button>
                </NavLink>
                <NavLink 
                        className='signout-button nav-button' 
                        to='/'>
                    <button className='nav-button'>Logout</button>
                </NavLink>
                <Select 
                        className='deck-select'
                        styles={dropdownMenuStyles} 
                        placeholder={<p>Decks</p>} 
                        options={Decks} />
            </div>
        </div>

    );
}

export default Nav;
