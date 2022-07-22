import { useContext } from 'react';
import "./Nav.scss"
import { NavLink } from 'react-router-dom'
import Select from 'react-select';
import {UserContext} from '../../Context';
import { CurrentUser } from '../../interface';

const Decks = [
  {
    label: (
      <NavLink className="dd-menu dd-menu-be" to="/flashcards/BEtechnicalCards">
        Technical Back End
      </NavLink>
    ),
  },
  {
    label: (
      <NavLink className="dd-menu dd-menu-fe" to="/flashcards/FEtechnicalCards">
        Technical Front End
      </NavLink>
    ),
  },
  {
    label: (
      <NavLink
        className="dd-menu dd-menu-behavioral"
        to="/flashcards/behavioralCards"
      >
        Behavioral
      </NavLink>
    ),
  },
];

const dropdownMenuStyles = {
  container: (provided) => ({
    ...provided,
    width: "15vw",
  }),
  option: (styles, state) => ({
    ...styles,
    height: "4vh",
    fontSize: "2vh",
  }),
  menu: (styles, state) => ({
    ...styles,
    width: "35vw",
    placement: "top",
  }),
};

const Nav: React.FC = () => {
  const { setUser }: CurrentUser = useContext(UserContext);
  const logout = () => {
    setUser(undefined);
  };

  return (
    <div className="nav">
      <NavLink className="appName" to="/dashboard">
        <h2>DevPrep</h2>
      </NavLink>
      <div className="navlink-container">
        <NavLink className="home-button nav-button" to="/dashboard">
          <button className="nav-button">Home</button>
        </NavLink>
        <NavLink className="signout-button nav-button" to="/">
          <button className="nav-button" onClick={logout}>
            Logout
          </button>
        </NavLink>
        <Select
          className="deck-select"
          styles={dropdownMenuStyles}
          placeholder={<p>Decks</p>}
          options={Decks}
        />
      </div>
    </div>
  );
};

export default Nav;
