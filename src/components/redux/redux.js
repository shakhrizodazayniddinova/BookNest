import { createStore } from "redux";

// Initial state
const initialState = {
    isVisibleModal: false,
    modalMessage: '',
    isDarkMode: JSON.parse(localStorage.getItem('darkMode')) || false,
    searchTerm: '',
};

export const setSearchTerm = (searchTerm) => ({
    type: 'SET_SEARCH_TERM',
    payload: searchTerm,
});


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL': 
            return{
                ...state,
                isVisibleModal: true,
                modalMessage: action.payload,
            }
        case 'CLOSE_MODAL':
            return{
                ...state,
                isVisibleModal: false,
                modalMessage: '',
            }
        case 'TOGGLE_THEME':
            const newMode = !state.isDarkMode;
            localStorage.setItem('darkMode', JSON.stringify(newMode)); // Save to localStorage
            return {
                ...state,
                isDarkMode: newMode, // Update the state with the new mode
            };
        case 'SET_SEARCH_TERM':
            return{
                ...state,
                searchTerm: action.payload,
            };

        default:
            return state;
    }
};

// redux store
const store = createStore(authReducer);

export default store;
