import { faBook, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../../redux/redux';
import { LibraryStyled } from './LibraryStyled';

export default function MyLibrary() {
  const dispatch = useDispatch();

  const isDarkMode = useSelector((state) => state.isDarkMode);
  const searchTerm = useSelector((state) => state.searchTerm);

  const [bookData, setBookData] = useState(() => {
    // Initialize state with data from local storage
    return JSON.parse(localStorage.getItem('bookData')) || [];
  });

  // search book
  const filteredData = bookData.filter((item) =>
    (item.book?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
    (item.author?.toLowerCase() || '').includes(searchTerm.toLowerCase())
  );

  // handle delete function
  const handleDelete = (item) => {
    const updatedBooks = bookData.filter(book => {
        return book.book !== item.book || book.author !== item.author; 
    });
    
    setBookData(updatedBooks); // Update local state
    localStorage.setItem('bookData', JSON.stringify(updatedBooks)); // Update local storage
  };

  // Effect to sync local storage with state on mount
  useEffect(() => {
    localStorage.setItem('bookData', JSON.stringify(bookData));
  }, [bookData]);
    

  return (
    <LibraryStyled isDarkMode={isDarkMode}>
        <div data-aos="fade-up" className='libraryFadeDiv'>
            {/* title */}
            <div className='titleDiv'>
                <h1>My Library</h1>
                <FontAwesomeIcon icon={faBook} className='bookIcon'/>
            </div>
            
            {/* search div */}
            <div className="searchDiv">
                <input type="text" placeholder='Search book...' value={searchTerm} onChange={(e) => dispatch(setSearchTerm(e.target.value))}/>
                <button className="btn searchBtn"><FontAwesomeIcon icon={faSearch}/></button>
            </div>
            
            {/* books lists */}
            <div className="tableDiv">
                <table>
                    <thead>
                        <th>No</th>
                        <th>Book name</th>
                        <th>Author name</th>
                        <th>Date of issual</th>
                        <th></th>
                    </thead>

                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((item, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.book}</td>
                                    <td>{item.author}</td>
                                    <td>{item.date}</td>
                                    <td><FontAwesomeIcon icon={faTrash} className='deleteBtn' onClick={() => handleDelete(item)}/></td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No books added</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </LibraryStyled>
  );
};
