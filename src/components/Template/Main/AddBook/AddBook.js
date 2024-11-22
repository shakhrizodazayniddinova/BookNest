import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WarningModal from '../../WarningModal/WarningModal';
import { AddBookStyled } from './AddBookStyled';
import { useForm } from 'react-hook-form';

export default function AddBook() {
  const isDarkMode = useSelector((state) => state.isDarkMode);

  const dispatch = useDispatch();

  const {register, handleSubmit, reset, formState: {errors}} = useForm();

  // book add function
  const handleAdd = (data) => {
    const { author, book, date } = data;
    
    const newBookData = {author, book, date};
    const existingBooks = JSON.parse(localStorage.getItem('bookData'));

    const booksArray = Array.isArray(existingBooks) ? existingBooks : [];

    // add new book
    booksArray.push(newBookData);
    
    // save new lists
    localStorage.setItem('bookData', JSON.stringify(booksArray));
    
    // clear form fields
    reset();

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

              <form className='formDiv' onSubmit={handleSubmit(handleAdd)}>
                <div>
                  <label>Author name:</label>
                  <input type="text" placeholder='Enter author name'  {...register('author', { required: 'Author name is required' })} />
                  {errors.author && <p className="errorText">{errors.author.message}</p>}
                </div>

                <div>
                  <label>Book name:</label>
                  <input type="text" placeholder='Enter book name'  {...register('book', { required: 'Book name is required' })} />
                  {errors.book && <p className="errorText">{errors.book.message}</p>}
                </div>

                <div>
                  <label>Date of issue:</label>
                  <input type="number" placeholder='Enter date'  {...register('date', { required: 'Date of issue is required' })} />
                  {errors.date && <p className="errorText">{errors.date.message}</p>}
                </div>

                <button className="btn addBtn" type='submit'>Add book</button>
              </form>
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
