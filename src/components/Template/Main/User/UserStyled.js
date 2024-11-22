import styled from 'styled-components';

export const UserStyled = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #374151;
  background-color: ${({isDarkMode}) => (isDarkMode ? '#31363F' : 'rgb(248, 249, 250)')};


  .user-card{
    width: 600px;
    height: 380px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: ${({isDarkMode}) => (isDarkMode ? '#222831' : '#fff')};
    color: ${({isDarkMode}) => (isDarkMode ? '#fff' : '#374151')};
    padding: 40px;
    border-radius: 8px;

    @media (max-width: 650px){
      width: 550px;
    }
    @media (max-width: 580px){
      width: 500px;
    }
    @media (max-width: 520px){
      width: 450px;
      height: 350px;
      padding: 30px 40px;
    }
    @media (max-width: 420px){
      width: 350px;
      height: 450px;
      padding: 40px 30px;
    }
    @media (max-width: 360px){
      width: 300px;
    }

    .card-title{
      display: flex;
      align-items: center;
      justify-content: space-between;

      .idCard{
        font-size: 30px;
      }
    }

    .form{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 30px;

      @media (max-width: 420px){
        flex-direction: column;
        gap: 20px;
        margin-top: 10px;
        h5{
          font-size: 18px;
        }
      }
      @media (max-width: 360px){
        margin-top: 20px;
        h5{
          font-size: 17px;
        }
      }

      .registerImg{
        width: 200px;
        height: auto;

        @media (max-width: 520px){
          width: 150px;
        }
      }
    }

    .logout{
      background-color: ${({isDarkMode}) => (isDarkMode ? '#405D72' : '#374151')};
      color: white;
      width: 100px;
      align-self: center;
      margin-top: 20px;

      @media (max-width: 520px){
        width: 90px;
      }
      @media (max-width: 420px){
        /* margin-top: 0; */
      }
    }

  }

  .notRegister{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .btn{
      background-color: #374151;
      color: white;
    }
  }
`;