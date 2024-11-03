import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import WarningModal from '../WarningModal';

const AddBookStyled = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background-color: ${({isDarkMode}) => (isDarkMode ? '#31363F' : 'rgb(248, 249, 250)')};
  transition: all 0.3s ease;

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
    color: #333A56;
    
    .form{
      width: 460px;
      display: flex;
      flex-direction: column;
      text-align: start;
      justify-content: center;
      gap: 40px;
      background-color: ${({isDarkMode}) => (isDarkMode ? '#222831' : '#fff')};
      color: ${({isDarkMode}) => (isDarkMode ? '#fff' : '#374151')};
      border-radius: 8px;
      padding: 40px;

      @media (max-width: 700px){
        width: 420px;
      }

      @media (max-width: 580px){
        width: 380px;
        gap: 20px;
      }

      @media (max-width: 490px){
        width: 330px;
      }

      @media (max-width: 350px){
          width: 280px;
          margin-top: 50px;
      }
      
      .titleDiv{
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        .bookIcon{
          font-size: 25px;
        }
      }

      .formDiv{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;

        @media (max-width: 580px){
          gap: 20px;
        }
        
        div{
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
      }
      
      h1{
        align-self: center;
      }
      
      input{
        width: 300px;
        padding: 6px 10px;
        border: 1px solid lightgrey;
        border-radius: 8px;
        background-color: ${({isDarkMode}) => (isDarkMode ? '#222831' : '#fff')};
        color: ${({isDarkMode}) => (isDarkMode ? '#fff' : '#374151')};

        @media (max-width: 490px){
          width: 250px;
        }
        @media (max-width: 350px){
            width: 230px;
        }

        ::placeholder{
          color: ${({isDarkMode}) => (isDarkMode ? '#fff' : '#374151')};
        }
      }
    }
    
    .addBtn{
      width: 170px;
      background-color: ${({isDarkMode}) => (isDarkMode ? '#405D72' : '#374151')};
      color: white;
      font-size: 16px;
      align-self: center;
      margin-top: 30px;

      @media (max-width: 580px){
        margin-top: 20px;
        width: 150px;
      }

      @media (max-width: 490px){
        width: 130px;
      }
    }
  }

  .circle{
      position: absolute !important;
      background-color: ${({isDarkMode}) => (isDarkMode ? '#222831' : '#374151')};
      border-radius: 100%;
  }
  .circle1{
      width: 100px;
      height: 100px;
      top: 100px;
      left: -20px;

      @media (max-width: 635px){
        width: 70px;
        height: 70px;
      }

      @media (max-width: 490px){
        top: 50px;
      }
  }
  .circle2{
      width: 200px;
      height: 200px;
      top: 500px;
      right: -50px;

      @media (max-width: 800px){
        width: 170px;
        height: 170px;
      }

      @media (max-width: 720px){
        top: 600px;
      }

      @media (max-width: 635px){
        right: -80px;
      }

      @media (max-width: 490px){
        top: 650px;
      }
  }
`;

export default function AddBook() {
  const isDarkMode = useSelector((state) => state.isDarkMode);

  const dispatch = useDispatch();

  const [author, setAuthor] = useState('');
  const [book, setBook] = useState('');
  const [date, setDate] = useState('');

  // book add function
  const handleAdd = () => {
    if(!author || !book || !date){
      dispatch({type: 'OPEN_MODAL', payload: 'Please fill in all fields!'}); // show modal if any field is empty
      return;
    };
    
    const newBookData = {author, book, date};
    const existingBooks = JSON.parse(localStorage.getItem('bookData'));

    const booksArray = Array.isArray(existingBooks) ? existingBooks : [];

    // add new book
    booksArray.push(newBookData);
    
    // save new lists
    localStorage.setItem('bookData', JSON.stringify(booksArray));
    
    // clear inputs
    setAuthor('');
    setBook('');
    setDate('');

    dispatch({type: 'OPEN_MODAL', payload: 'Successfully add!'}); // show modal if any field is empty
  }

  return (
    <AddBookStyled isDarkMode={isDarkMode}>
      <div data-aos="fade-up" className='fadeLoginDiv'>
        {/* book img design */}
        <div className="circle circle1"/>

        {/* login div */}
        <div className='loginDiv'>
            <div className="form shadow">
              {/* title */}
              <div className='titleDiv'>
                <h1 className='m-0'>Add Book</h1>
                <FontAwesomeIcon icon={faBookOpen} className='bookIcon'/>
              </div>

              <div className='formDiv'>
                <div>
                  <label>Author name:</label>
                  <input type="text" className="Name" placeholder='Enter author name' value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>

                <div>
                  <label>Book name:</label>
                  <input type="text" className="surname" placeholder='Enter book name' value={book} onChange={(e) => setBook(e.target.value)}/>
                </div>

                <div>
                  <label>Date of issue:</label>
                  <input type="number" className="phone" placeholder='Enter date' value={date} onChange={(e) => setDate(e.target.value)}/>
                </div>

                <button className="btn addBtn" onClick={handleAdd}>Add book</button>
              </div>
            </div>
        </div>

        {/* book img design */}
        <div className="circle circle2"></div>

        {/* modal */}
        <WarningModal/>
      </div>
    </AddBookStyled>
  )
}
