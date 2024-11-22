import styled from 'styled-components';

// login component styles
export const LoginStyled = styled.div`
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
        width: 830px;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 30px;
        text-align: start;
        background-color: ${({isDarkMode}) => (isDarkMode ? '#222831' : '#fff')};
        border-radius: 8px;

        @media (max-width: 720px) {
          width: 600px;
          height: 325px;
        }
        @media (max-width: 440px) {
          width: 300px;
          height: 500px;
          flex-direction: column;
          gap: 20px;
        }

        .formDiv {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;

          @media (max-width: 720px) {
            grid-template-columns: 1fr; 
            gap: 20px;
          }

          div {
            display: flex;
            flex-direction: column;
            gap: 6px;
            height: 80px;
          }

          .errorText{
            color: darkred;
            font-size: 12px;
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