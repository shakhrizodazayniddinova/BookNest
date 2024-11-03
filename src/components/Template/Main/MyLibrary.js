import { faBook, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { removeBook, setSearchTerm } from '../../redux/redux';

const LibraryStyled = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 100px;
    background-color: ${({isDarkMode}) => (isDarkMode ? '#31363F' : 'rgb(248, 249, 250)')};
    color: ${({isDarkMode}) => (isDarkMode ? '#fff' : '#374151')};
    transition: all 0.3s ease;

    @media (max-width: 1020px){
        padding: 100px 50px;
    }
    @media (max-width: 720px){
        padding: 100px 20px;
    }
    @media (max-width: 360px){
        padding: 100px 10px;
    }

    .libraryFadeDiv{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .titleDiv{
            display: flex;
            align-items: center;
            gap: 30px;
    
            .bookIcon{
              font-size: 25px;
            }
        }
    
        .searchDiv{
            display: flex;
            align-items: center;
            margin-top: 30px;
            
            @media (max-width: 350px){
                width: 250px;
            }

            input{
                width: 300px;
                background-color: ${({isDarkMode}) => (isDarkMode ? '#31363F' : 'rgb(248, 249, 250)')};
                color: ${({isDarkMode}) => (isDarkMode ? '#fff' : '#374151')};
                border: 1px solid lightgrey;
                border-radius: 8px 0 0 8px;
                padding: 6px 14px;
            }
            .searchBtn{
                background-color: ${({isDarkMode}) => (isDarkMode ? '#405D72' : '#333A56')};
                padding: 6px 12px;
                border-radius: 0px 8px 8px 0px;
                color: white;
            }
        }
    
        .tableDiv{
            height: 400px;
            overflow-y: scroll;
            margin-top: 30px;
    
            table{
                margin-top: 80px;
                width: 800px;

                @media (max-width: 920px){
                    width: 700px;
                }
                @media (max-width: 820px){
                    width: 600px;
                }
                @media (max-width: 660px){
                    width: 570px;
                }
                @media (max-width: 630px){
                    width: 530px;
                }
                @media (max-width: 360px){
                    width: 280px;
                    margin-top: 50px;
                }
        
                thead{
                    border-bottom: 1px solid ${({isDarkMode}) => (isDarkMode ? '#fff' : '#374151')};
        
                    th{
                        padding: 6px 5px;

                        @media (max-width: 350px){
                            font-size: 16px;
                        }
                    }
                }
    
                tbody{
                    tr{
                        border-bottom: 1px solid ${({isDarkMode}) => (isDarkMode ? '#fff' : '#374151')};
                        
                        td{
                            padding: 10px 5px;
                            font-size: 20px;

                            @media (max-width: 660px){
                                font-size: 16px;
                            }
                        }
        
                        .deleteBtn{
                            color: darkred;
                            cursor: pointer;
                        }
                    }
                }
        
            }
        }
    }

    
`;

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
    item.book.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.author.toLowerCase().includes(searchTerm.toLowerCase())
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
