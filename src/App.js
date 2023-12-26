import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { router } from "./config/config";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ReadMore from "./components/ReadMore";
import Footer from "./components/footer/Footer";
import AllPosts from "./components/userpost/AllPosts";
import AddPost from "./components/userpost/AddPost";
import EditPost from "./components/userpost/EditPost";
// import HomePageArticles from "./components/userpost/HomePageArticlesjs";
import Home from "./components/userpost/Home";
function App() {
 

  
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const signupHandler = () => {
    setIsLoggedIn(true);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const handleCategoryChange = (selectedCategory) => {
    setSearchTerm("");
    console.log(selectedCategory);
    setSelectedCategory(selectedCategory);
  };

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <NavBar
            onLogout={logoutHandler}
            getDataHandler={setSearchTerm}
            onCategoryChange={handleCategoryChange}
          />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News newscategory={selectedCategory} searchTerm={searchTerm} />
              }
            />
 <Route path="/" element={<Home/>} />

            <Route exact path="/articles/:id" element={<ReadMore />} />

            <Route path="/myblog" element={<AllPosts />} />
            <Route path="/addblog" element={<AddPost />} />

            {/* <Route path="/editpost/:id" component={<EditPost/>}  /> */}
            {/* <Route path="/editpost/:id" element={<EditPost/> } />  */}
            <Route path="/editpost/:postId" element={<EditPost />} />
          </Routes>
       
          <Footer />
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

// import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import NavBar from "./components/NavBar/NavBar";
// import News from "./components/News/News";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { router } from "./config/config";
// import Search from "./components/Search/Search";
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
// import ReadMore from "./components/ReadMore";
// import DisplayAllPosts from "./components/userpost/DisplayAllPosts";
// import Footer from "./components/footer/Footer"
// // import styles.css";

// function App() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const signupHandler = () => {
//     setIsLoggedIn(true);
//   };

//   const loginHandler = () => {
//     setIsLoggedIn(true);
//   };

//   const logoutHandler = () => {
//     setIsLoggedIn(false);
//   };

//   const handleCategoryChange = (selectedCategory) => {
//     setSearchTerm(''); // Reset search term when category changes (if desired)
//     // Logic to handle the selected category (you can update state, perform actions, etc.)
//     console.log("Selected Category:", selectedCategory);
//   };

//   return (
//     <Router>
//       {isLoggedIn ? (
//         <>
//           <NavBar onLogout={logoutHandler} getDataHandler={setSearchTerm} onCategoryChange={handleCategoryChange} />
//           <Routes>
//             {router.map((path) => (
//               <Route
//                 exact
//                 key={uuidv4()}
//                 path={path.path}
//                 element={
//                   <News
//                     key={path.key}
//                     newscategory={path.category}
//                     country={path.country}
//                     searchTerm={searchTerm}
//                   />
//                 }
//               />
//             ))}
//             <Route exact path= "/articles/:id" element={<ReadMore />} />
//             <Route path="/search/:query" element={<Search />} />
//             <Route path="/myblog" element={<DisplayAllPosts />} />
//             {/* <Route path='/' element={<article searchTerm={searchTerm}/>} /> */}
//           </Routes>
//           {/* <DisplayAllPosts/> */}
//           <Footer/>
//         </>
//       ) : (
//         <Routes>
//           <Route path="/" element={<Login onLogin={loginHandler} />} />
//           <Route path="/signup" element={<SignUp onSignup={signupHandler} />} />
//         </Routes>
//       )}
//     </Router>
//   );
// }

// export default App;
