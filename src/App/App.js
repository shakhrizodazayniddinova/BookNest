import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

import Welcome from "../components/Template/Welcome/Welcome";
import Template from "../components/Template/Template";
import Login from "../components/Login/Login";
import NotRegister from "../components/NotRegister/NotRegister";
import User from "../components/Template/Main/User/User";
import MyLibrary from "../components/Template/Main/MyLibrary/MyLibrary";
import AddBook from "../components/Template/Main/AddBook/AddBook";
import { AppStyled } from "./AppStyled";
import { RegisteredContext } from "../RegisterContext/RegContext";

function App() {
  const [isLogin, setLogin] = useState(() => {
    const storedLoginStatus = localStorage.getItem("isLogin");
    return storedLoginStatus ? JSON.parse(storedLoginStatus) : false;
  });

  // Scroll animation
  useEffect(() => {
    Aos.init({ duration: 1000 });

    const loggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (loggedIn) setLogin(true);

  }, []);

  // Update localStorage whenever isLogin changes
  useEffect(() => {
    localStorage.setItem("isLogin", JSON.stringify(isLogin));
  }, [isLogin]);

  // Logout function
  const handleLogout = () => {
    setLogin(false);
    localStorage.removeItem('isLoggedIn'); // remove login status from localStorage
    localStorage.removeItem('bookData'); // remove login status from localStorage
  };

  return (
    <AppStyled className="bg-light">
      <BrowserRouter>
        <RegisteredContext.Provider value={{ isLogin, setLogin, handleLogout }}>
          <Routes>
            <Route path="/" element={<Welcome />} data-aos="fade-up" />
            <Route path="/login" element={<Login />} data-aos="fade-up" />

            {isLogin ? (
              <Route path="/dashboard" element={<Template />} data-aos="fade-up">
                {/* add book component */}
                <Route path="add-book" element={<AddBook />} />

                {/* my library components */}
                <Route path="my-library" element={<MyLibrary />} />

                {/* user components */}
                <Route path="user" element={<User />} />
                <Route index element={<User />} />
              </Route>
            ) : (
              <Route path="*" element={<NotRegister />} />
            )}
          </Routes>
        </RegisteredContext.Provider>
      </BrowserRouter>
    </AppStyled>
  );
}

export default App;
