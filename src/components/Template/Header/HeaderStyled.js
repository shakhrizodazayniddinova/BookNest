import styled from "styled-components";

export const HeaderStyled = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#222831' : '#374151')};
  padding: 0 20px;
  transition: all 0.3s ease;

  a {
    text-decoration: none;
  }

  .logoBrand {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    
    @media (max-width: 490px){
      gap: 8px;
    }
    
    .logo {
      max-width: 50px;
      
      @media (max-width: 490px){
        width: 40px;
      }
    }

  }

  .headerRight {
    display: flex;
    gap: 20px;
    align-items: center;

    ul {
      display: flex;
      gap: 20px;
      list-style: none;
      color: white;
      margin: 0;
      font-size: 17px;

      @media (max-width: 540px) {
        display: none; // Hide the list on small screens
      }

      a {
        color: white;
      }
    }

    .icons{
      display: flex;
      align-items: center;
      gap: 20px;

      .darkMode {
        font-size: 20px;
        cursor: pointer;
        color: white;
      }
      
      .userIcon {
        color: white;
        font-size: 20px;
      }
      .dropdown {
        display: none;
        color: white;
        cursor: pointer;
        border: none;
        background-color: transparent;
    
        @media (max-width: 540px) {
          display: block;
        }

        .dropMenu{
          border: none;
          background-color: ${({isDarkMode}) => (isDarkMode ? '#31363F' : 'rgb(248, 249, 250)')};

          :hover{
            background-color: transparent;
          }

          a{
            color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#333')} !important;
          }
        }
      }
    }
  }
  
`;