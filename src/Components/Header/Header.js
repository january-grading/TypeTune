import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { logout } from '../../services/users';
import './Header.css';

export default function Header() {
  const { currentUser, setCurrentUser } = useUserContext();
  const handleLogOut = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="header">
      <div className='left'>
        <img className='logo' src='TypeTuneLogo.png' />
        <h1>TypeTune</h1>

      </div>
      <ul className="nav">
        <li>
          <NavLink className="homebutton" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="profile" exact to="/profile">
            Profile
          </NavLink>
        </li>
        {currentUser ? (
          <li className="logOutButton" onClick={handleLogOut}>
            <NavLink exact to="/">
              Log Out
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink exact to="/auth">
              Sign In / Sign Up
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}
