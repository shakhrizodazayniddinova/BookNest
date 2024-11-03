import { faCircleHalfStroke, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyled = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#222831' : '#374151')};
  padding: 0 20px;
  transition: all 0.3s ease;

  a {
    text-decoration: none;
  }

  .logoBrand {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    
    @media (max-width: 490px){
      gap: 8px;
    }
    
    .logo {
      max-width: 50px;
      
      @media (max-width: 490px){
        width: 40px;
      }
    }

  }

  .headerRight {
    display: flex;
    gap: 20px;
    align-items: center;

    ul {
      display: flex;
      gap: 20px;
      list-style: none;
      color: white;
      margin: 0;
      font-size: 17px;

      @media (max-width: 540px) {
        display: none; // Hide the list on small screens
      }

      a {
        color: white;
      }
    }

    .icons{
      display: flex;
      align-items: center;
      gap: 20px;

      .darkMode {
        font-size: 20px;
        cursor: pointer;
        color: white;
      }
      
      .userIcon {
        color: white;
        font-size: 20px;
      }
      .dropdown {
        display: none;
        color: white;
        cursor: pointer;
        border: none;
        background-color: transparent;
    
        @media (max-width: 540px) {
          display: block;
        }

        .dropMenu{
          border: none;
          background-color: ${({isDarkMode}) => (isDarkMode ? '#31363F' : 'rgb(248, 249, 250)')};

          :hover{
            background-color: transparent;
          }

          a{
            color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#333')} !important;
          }
        }
      }
    }
  }
  
`;

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
