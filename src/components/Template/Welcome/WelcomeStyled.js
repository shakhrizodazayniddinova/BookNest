import styled from 'styled-components';

export const WelcomeStyled = styled.div`
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 120px;
    text-align: center;
    gap: 10px;
    color: ${({isDarkMode}) => (isDarkMode ? '#fff' : '#374151')};
    background-color: ${({isDarkMode}) => (isDarkMode ? '#31363F' : 'rgb(248, 249, 250)')};

    @media (max-width: 560px){
        padding: 0 50px;
    }

    @media (max-width: 395px){
        padding: 0 20px;
    }

    .welcomeTexts{
        position: absolute;
        z-index: 100;
    }

    .circle{
        position: absolute !important;
        background-color: ${({isDarkMode}) => (isDarkMode ? '#222831' : '#374151')};
        border-radius: 100%;
        z-index: 1;
    }

    .circle1{
        width: 600px;
        height: 600px;
        top: -260px;
        left: -190px;

        @media (max-width: 935px){
            width: 400px;
            height: 400px;
            top: -150px;
            left: -150px;
        }

        @media (max-width: 560px){
            width: 350px;
            height: 350px;
            top: -150px;
            left: -150px;
        }

        @media (max-width: 460px){
            width: 250px;
            height: 250px;
            top: -80px;
            left: -100px;
        }
    }
    .circle2{
        width: 350px;
        height: 350px;
        top: 500px;
        right: -100px;

        @media (max-width: 935px){
            width: 200px;
            height: 200px;
            top: 650px;
            right: -50px;
        }

        @media (max-width: 460px){
            top: 680px;
        }

        @media (max-width: 380px){
            top: 600px;
        }
    }

    h1, p{
        z-index: 10;
    }

    .brandName{
        color: ${({isDarkMode}) => (isDarkMode ? '#405D72' : '#374151')};
    }
    .loginBtn{
        background-color: ${({isDarkMode}) => (isDarkMode ? '#405D72' : '#374151')};
        color: white;
    }
`;