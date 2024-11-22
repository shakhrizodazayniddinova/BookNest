import { faCircleHalfStroke, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HeaderStyled } from './HeaderStyled';

export default function Header() {
  const isDarkMode = useSelector((state) => state.isDarkMode);

  const dispatch = useDispatch();

  // dark mode function
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <HeaderStyled isDarkMode={isDarkMode}>
      <Link to={'/'}>
        <div className="logoBrand">
          <img src="./logo.PNG" alt="logo" className='logo' />
          <h5 className='m-0'>BookNest</h5>
        </div>
      </Link>

      <div className='headerRight'>
        <ul>
          <Link to={'/'}><li>Home</li></Link>
          <Link to={'add-book'}><li>Add book</li></Link>
          <Link to={'my-library'}><li>My library</li></Link>
        </ul>

        <div className='icons'>
          {/* Dropdown for small screens */}
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className='dropdown'>
              Menu
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropMenu shadow-sm'>
              <Dropdown.Item as={Link} to={'/'}>Home</Dropdown.Item>
              <Dropdown.Item as={Link} to={'add-book'}>Add book</Dropdown.Item>
              <Dropdown.Item as={Link} to={'my-library'}>My library</Dropdown.Item>
              <Dropdown.Item as={Link} to={'user'}>User</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
          <FontAwesomeIcon icon={faCircleHalfStroke} className='darkMode' onClick={toggleTheme} />
          
          <div className='accountHeader'>
            <Link to={'user'}>
              <FontAwesomeIcon icon={faUser} className='userIcon' />
            </Link>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}
