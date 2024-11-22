import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';

import register from './register.PNG';
import { useSelector } from 'react-redux';
import { UserStyled } from './UserStyled';
import { RegisteredContext } from '../../../../RegisterContext/RegContext';

export default function User() {
  const isDarkMode = useSelector((state) => state.isDarkMode);

  const {isLogin, handleLogout} = useContext(RegisteredContext);

  const userData = JSON.parse(localStorage.getItem('userData'));

  return (
    <UserStyled isDarkMode={isDarkMode}>
      {isLogin ? (
        <div className="user-card shadow" data-aos="fade-up">
          <div className="card-title">
            <h1 className='m-0'>User Card</h1>
            <FontAwesomeIcon icon={faIdCard} className='idCard'/>
          </div>

          <div className="form">
            <div>
              <h5>Name: <span className='ms-3'>{userData.name}</span></h5>
              <h5>Surname: <span className='ms-3'>{userData.surname}</span></h5>
              <h5>Phone number: <span className='ms-3'>{userData.phone}</span></h5>
              <h5>Password: <span className='ms-3'>{userData.password}</span></h5>
            </div>

            <img src={register} className='registerImg'/>
          </div>

          <button className="btn logout" onClick={handleLogout}>Log out</button>
        </div>
        
      ) : (
        <div data-aos="fade-up" className='notRegister'>
            <h1>You are not registered</h1>
            
            <Link to={'/login'}>
                <button className="btn">Register</button>
            </Link>
        </div>
      )} 
    </UserStyled>
  );
}
