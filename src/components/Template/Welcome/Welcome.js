import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { WelcomeStyled } from './WelcomeStyled';
import { RegisteredContext } from '../../../RegisterContext/RegContext';

export default function Welcome() {
  const isDarkMode = useSelector((state) => state.isDarkMode);

  const {isLogin} = useContext(RegisteredContext);

  return (
    <WelcomeStyled isDarkMode={isDarkMode}>
        <div className="circle circle1"></div>

        <div data-aos="fade-up" className='welcomeTexts'>
            <h1>Welcome to <span className='brandName'>BookNest</span></h1>
            <p>
                Add your favorite books and enter information such as their authors, genres, and year of publication. 
                Easily find a specific book through search and filter functions and add new books or delete books you want. 
                Make it a part of your library and keep it organized by entering complete information about each book. 
                Create a comfortable and organized book list with our library and don't forget your favorite works!
            </p>

            <Link to={'/login'}>
                <button className='btn loginBtn'>{isLogin ? 'Login' : 'Sign up'}</button>
            </Link>
        </div>

        <div className="circle circle2"></div>
    </WelcomeStyled>
  )
}
