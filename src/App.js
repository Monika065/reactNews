import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { router } from "./config/config";
import Search from "./components/Search/Search";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ReadMore from "./components/ReadMore";
// import "../styles.css";
// import DisplayAllPosts from "./DisplayAllPosts";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signupHandler = () => {
    setIsLoggedIn(true);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <NavBar onLogout={logoutHandler} />
          <Routes>
            {router.map((path) => (
              <Route
                exact
                key={uuidv4()}
                path={path.path}
                element={
                  <News
                    key={path.key}
                    newscategory={path.category}
                    country={path.country}
                  />
                }
              />
            ))}
            <Route exact path="/readmore" element={<ReadMore />} />
            <Route path="/search/:query" element={<Search />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login onLogin={loginHandler} />} />
          <Route path="/signup" element={<SignUp onSignup={signupHandler} />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
