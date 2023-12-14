import React, { useRef, useState } from "react";
// import { IoCloseOutline } from "react-icons/io5";
import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { closeBtn, nav, navBar, searchBar, navbar } from "./index";
import { debounce } from "lodash";

function NavBar(props) {
  const navigate = useNavigate();
  const navRef = useRef(null);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const navigatHandler = () => {
    navigate("/myblog");
  };

  const handleCategorySelect = (category) => {
    props.onCategoryChange(category);
  };

  const handleSearch = debounce((searchValue) => {
    props.getDataHandler(searchValue);
  }, 1000);

  const handleInputChange = (e) => {
    const searchValue = e.target.value;
    handleSearch(searchValue);
  };

  return (
    <>
      <Navbar
        ref={navRef}
        style={navBar}
        variant="dark"
        expand="lg"
        fixed="top"
        expanded={!isCollapsed}
      >
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
        {/* ... Other parts of your Navbar */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
          <Nav
            style={nav}
            className="mr-auto"
            onClick={() => setIsCollapsed(true)}
          >
            <Nav.Link onClick={() => handleCategorySelect("")}>
              <h7>Home</h7>
            </Nav.Link>
            <Nav.Link onClick={() => handleCategorySelect("sports")}>
              <h7>Sports</h7>
            </Nav.Link>
            {/* <Nav.Link
              style={{ color: "grey" }}
              onClick={() => handleCategorySelect("business")}
            >
              <h7>Business</h7>
            </Nav.Link> */}
            <Nav.Link onClick={() => handleCategorySelect("technology")}>
              <h7>Technology</h7>
            </Nav.Link>
            <Nav.Link onClick={() => handleCategorySelect("health")}>
              <h7>Health</h7>
            </Nav.Link>
            <Nav.Link onClick={() => handleCategorySelect("entertainment")}>
              <h7>Entertainment</h7>
            </Nav.Link>
            <Nav.Link onClick={() => handleCategorySelect("business")}>
              <h7>Business</h7>
            </Nav.Link>
            <Nav.Link onClick={() => handleCategorySelect("science")}>
              <h7>Science</h7>
            </Nav.Link>
            <Nav.Link onClick={navigatHandler}>
              <h7>My Blog</h7>
            </Nav.Link>
          </Nav>

          <input
            type="text"
            className={searchBar}
            style={{ marginRight: "100px" }}
            placeholder="search news article... "
            onChange={handleInputChange}
          />

          {
            <Nav.Link
              // className="navbar"
              onClick={props.onLogout}
            >
              <h7>Log Out</h7>{" "}
            </Nav.Link>
          }
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
