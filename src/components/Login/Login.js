import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { LoginStyled } from './LoginStyled';
import { RegisteredContext } from '../../RegisterContext/RegContext';
import { useForm } from 'react-hook-form';

export default function Login() {
  const isDarkMode = useSelector((state) => state.isDarkMode);

  const navigate = useNavigate();

  // login context
  const {setLogin} = useContext(RegisteredContext);


  // Check if user is already logged in on component mount
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');

    if (loggedInStatus === 'true') {
      setLogin(true);
      navigate('/dashboard');
    }
  }, [navigate, setLogin]);


  const {register, handleSubmit, formState: {errors}} = useForm();

  // login function
  const handleLogin = (data) => {
    const {name, surname, phone, password} = data;
    
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

          <form className="form shadow" onSubmit={handleSubmit(handleLogin)}>
            <div className='formDiv'>
              <div>
                <label>Name:</label>
                <input type="text" className="Name" placeholder='Enter name' {...register('name', {required: 'Name is required'})} />
                {errors.name && <p className='errorText'>{errors.name.message}</p>}
              </div>

              <div>
                <label>Surname:</label>
                <input type="text" className="surname" placeholder='Enter surname' {...register('surname', {required: 'Surname is required'})} />
                {errors.surname && <p className='errorText'>{errors.surname.message}</p>}
              </div>

              <div>
                <label>Phone number:</label>
                <input type="number" className="phone" placeholder='Enter phone number' {...register("phone", {required: 'Phone number is required'})} />
                {errors.phone && <p className='errorText'>{errors.phone.message}</p>}
              </div>

              <div>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter password" {...register("password", {required: 'Password is required'})} />
                {errors.password && <p className='errorText'>{errors.password.message}</p>}
              </div>
            </div>

            {/* sign in button */}
            <button className='btn loginBtn' type='submit'>Sign in</button>
          </form>
        </div>

        {/* circle design */}
        <div className="circle circle2"></div>
      </div>
    </LoginStyled>
  )
}
