import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { registeredContext } from '../../App';
import WarningModal from '../Template/WarningModal';


// login component styles
const LoginStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    background-color: ${({isDarkMode}) => (isDarkMode ? '#31363F' : 'rgb(248, 249, 250)')};
    
    .fadeLoginDiv{
      position: relative;
      width: 100%;
    }
    
    .loginDiv{
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      color: ${({isDarkMode}) => (isDarkMode ? '#fff' : '#374151')};

      @media (max-width: 420px) {
        gap: 10px;
      }

      .form{
        height: 325px;
        display: flex;
        gap: 50px;
        text-align: start;
        background-color: ${({isDarkMode}) => (isDarkMode ? '#222831' : '#fff')};
        padding: 0 80px;
        border-radius: 8px;
        justify-content: center;
        align-items: center;

        @media (max-width: 720px) {
          width: 600px;
          height: 325px;
        }
        @media (max-width: 420px) {
          width: 300px;
          height: 400px;
          flex-direction: column;
          gap: 20px;
        }

        .formDiv{
          display: flex;
          flex-direction: column;
          gap: 30px;

          @media (max-width: 720px) {
            gap: 20px;
          }

          div{
            display: flex;
            flex-direction: column;
            gap: 6px;
          }
        }
        
        input{
          width: 300px;
          padding: 6px 10px;
          border: 1px solid lightgrey;
          border-radius: 8px;
          color: ${({isDarkMode}) => (isDarkMode ? '#fff' : '#374151')};
          background-color: ${({isDarkMode}) => (isDarkMode ? '#222831' : '#fff')};

          @media (max-width: 720px) {
            width: 220px;
          }
        }
      }
      
      .loginBtn{
          background-color: ${({isDarkMode}) => (isDarkMode ? '#405D72' : '#374151')};
          color: white;
          font-size: 18px;
          width: 200px;

          @media (max-width: 420px) {
            width: 100px;
            margin-top: 10px;
          }
      }
    }

    .circle{
        position: absolute !important;
        background-color: ${({isDarkMode}) => (isDarkMode ? '#222831' : '#374151')};
        border-radius: 100%;
    }
    .circle1{
        width: 300px;
        height: 300px;
        top: 400px;
        left: -100px;

        @media (max-width: 720px) {
          width: 200px;
          height: 200px;
          top: 580px;
        }
        @media (max-width: 420px) {
          width: 150px;
          height: 150px;
          top: 620px;
        }
    }
    .circle2{
        width: 100px;
        height: 100px;
        top: 100px;
        right: 50px;

        @media (max-width: 720px) {
          width: 80px;
          height: 80px;
          right: 10px;
        }
        @media (max-width: 420px) {
          width: 60px;
          height: 60px;
          top: 60px;
          right: 5px;
        }
    }

`;

export default function Login() {
  const isDarkMode = useSelector((state) => state.isDarkMode);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // login context
  const {setLogin} = useContext(registeredContext);

  // inputs state
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');


  // Check if user is already logged in on component mount
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');

    if (loggedInStatus === 'true') {
      setLogin(true);
      navigate('/dashboard');
    }
  }, [navigate, setLogin]);


  // login function
  const handleLogin = () => {
    if (!name || !surname || !phone || !password) {
      dispatch({type: 'OPEN_MODAL', payload: 'Please fill in all fields'}); // show modal if any field is empty
      return;
    }
    
    // Set login status and save to localStorage
    setLogin(true);
    localStorage.setItem('isLoggedIn', 'true'); // Save login status

    const userData = {name, surname, phone, password};
    localStorage.setItem('userData', JSON.stringify(userData));  // Save user data
    
    navigate('/dashboard');
  };

  return (
    <LoginStyled isDarkMode={isDarkMode}>
      <div data-aos="fade-up" className='fadeLoginDiv'>
        {/* circle design */}
        <div className="circle circle1"></div>

        {/* login div */}
        <div className='loginDiv'>
          {/* title */}
          <h1>Registration!</h1>

          <div className="form shadow">
            <div className='formDiv'>
              <div>
                <label>Name:</label>
                <input type="text" className="Name" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div>
                <label>Surname:</label>
                <input type="text" className="surname" placeholder='Enter surname' value={surname} onChange={(e) => setSurname(e.target.value)}/>
              </div>
            </div>

            <div className='formDiv'>
              <div>
                <label>Phone number:</label>
                <input type="number" className="phone" placeholder='Enter phone number' value={phone} onChange={(e) => setPhone(e.target.value)}/>
              </div>

              <div>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
            </div>
          </div>

          {/* sign in button */}
          <button className='btn loginBtn' onClick={handleLogin}>Sign in</button>
        </div>

        {/* circle design */}
        <div className="circle circle2"></div>

        <WarningModal/>
      </div>
    </LoginStyled>
  )
}
