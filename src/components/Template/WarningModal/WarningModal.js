import { useDispatch, useSelector } from "react-redux";
import { ModalStyled } from "./ModalStyled";

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