import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import styled from "styled-components";
import Aos from "aos";
import 'aos/dist/aos.css';
import Welcome from "./components/Template/Welcome";
import Template from "./components/Template/Template";
import Login from "./components/Login/Login";
import NotRegister from "./components/NotRegister";
import User from "./components/Template/Main/User/User";
import AddBook from "./components/Template/Main/AddBook";
import MyLibrary from "./components/Template/Main/MyLibrary";

// login context
const registeredContext = createContext({ isLogin: false, setLogin: () => {} });

// app div style
const AppStyled = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  ::selection {
    background-color: #333A56;
    color: white;
  }
`;

function App() {
  const [isLogin, setLogin] = useState(() => {
    const storedLoginStatus = localStorage.getItem("isLogin");
    return storedLoginStatus ? JSON.parse(storedLoginStatus) : false;
  });

  // Update localStorage whenever isLogin changes
  useEffect(() => {
    localStorage.setItem("isLogin", JSON.stringify(isLogin));
  }, [isLogin]);

  // scroll animation
  useEffect(() => {
    Aos.init({ duration: 1000 });

    const loggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (loggedIn) setLogin(true);

  }, []);

  // Logout function
  const handleLogout = () => {
    setLogin(false);
    localStorage.removeItem('isLoggedIn'); // remove login status from localStorage
    localStorage.removeItem('bookData'); // remove login status from localStorage
  };

  return (
    <AppStyled className="bg-light">
      <BrowserRouter>
        <registeredContext.Provider value={{ isLogin, setLogin, handleLogout }}>
          <Routes>
            <Route path="/" element={<Welcome />} data-aos="fade-up" />
            <Route path="/login" element={<Login />} data-aos="fade-up" />

            {isLogin ? (
              <Route path="/dashboard" element={<Template />} data-aos="fade-up">
                {/* add book component */}
                <Route path="add-book" element={<AddBook />} />
                <Route index element={<AddBook />} />

                {/* my library components */}
                <Route path="my-library" element={<MyLibrary />} />

                {/* user components */}
                <Route path="user" element={<User />} />
              </Route>
            ) : (
              <Route path="*" element={<NotRegister />} />
            )}
          </Routes>
        </registeredContext.Provider>
      </BrowserRouter>
    </AppStyled>
  );
}

export { registeredContext };
export default App;
