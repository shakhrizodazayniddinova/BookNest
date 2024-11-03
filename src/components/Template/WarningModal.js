import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

// modal function styles
const ModalStyled = styled.div`
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

// warning modal
function WarningModal(){
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const dispatch = useDispatch();
  
  // Extracting values from Redux state
  const isVisibleModal = useSelector((state) => state.isVisibleModal);
  const modalMessage = useSelector((state) => state.modalMessage);

  if (!isVisibleModal) return null;

  return(
    <ModalStyled isDarkMode={isDarkMode}>
      <div className="modalContent">
        <h5>{modalMessage}</h5>
        <button onClick={() => dispatch({type: 'CLOSE_MODAL'})}>OK</button>
      </div>
    </ModalStyled>
  )
};

export default WarningModal;