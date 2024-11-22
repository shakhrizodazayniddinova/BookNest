import styled from "styled-components";

// modal function styles
export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  .modalContent {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    text-align: center;
    background-color: ${({isDarkMode}) => (isDarkMode ? '#31363F' : 'rgb(248, 249, 250)')};
    color: ${({isDarkMode}) => (isDarkMode ? '#fff' : '#374151')};

    p {
      color: #333A56;
    }

    button {
      padding: 8px 16px;
      background-color: ${({isDarkMode}) => (isDarkMode ? '#405D72' : '#333A56')};
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;