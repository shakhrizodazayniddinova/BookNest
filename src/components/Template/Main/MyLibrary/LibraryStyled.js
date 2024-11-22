import styled from 'styled-components';

export const LibraryStyled = styled.div`
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
            margin-top: 30px;
            
            overflow-y: scroll;

            ::-webkit-scrollbar{
                display: none;
            }
            -ms-overflow-style: none;
            scrollbar-width: none;

    
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