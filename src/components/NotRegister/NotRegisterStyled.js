import styled from 'styled-components';

export const NotRegisterStyled = styled.div`
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