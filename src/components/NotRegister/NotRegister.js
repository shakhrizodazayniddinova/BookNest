import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NotRegisterStyled } from './NotRegisterStyled';

export default function NotRegister() {
  const isDarkMode = useSelector((state) => state.isDarkMode);

  return (
    <NotRegisterStyled isDarkMode={isDarkMode}>
        <div data-aos="fade-up">
            <h1>You are not registered!</h1>

            <Link to={'/'}>
                <button className='btn loginBtn'>Sign up</button>
            </Link>
        </div>
    </NotRegisterStyled>
  )
}
