import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Page404Styled = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: ${({isDarkMode}) => (isDarkMode ? '#31363F' : 'rgb(248, 249, 250)')};
    color: ${({isDarkMode}) => (isDarkMode ? '#fff' : '#374151')};


    .loginBtn{
        background-color: ${({isDarkMode}) => (isDarkMode ? '#405D72' : '#374151')};
        color: white;
    }
`;

export default function NotRegister() {
  const isDarkMode = useSelector((state) => state.isDarkMode);

  return (
    <Page404Styled isDarkMode={isDarkMode}>
        <div data-aos="fade-up">
            <h1>You are not registered!</h1>

            <Link to={'/login'}>
                <button className='btn loginBtn'>Sign up</button>
            </Link>
        </div>
    </Page404Styled>
  )
}
