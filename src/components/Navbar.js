import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHeadphones,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = ({
  showBurger,
  setShowBurger,
  clickHandler,
  setShowModal,
}) => {
  const navbarLogo = <FontAwesomeIcon icon={faHeadphones} />;
  const menuIconOpen = <FontAwesomeIcon icon={faBars} />;
  const menuIconClose = <FontAwesomeIcon icon={faTimes} />;

  const showMenu = () => {
    if (window.innerWidth >= 900 && showBurger === true) {
      setShowBurger(false);
    } else if (window.innerWidth < 900 && showBurger === false) {
      setShowBurger(true);
    }
  };

  useEffect(() => {
    showMenu();
  }, []);

  window.addEventListener("resize", showMenu);

  const openModal = () => {
    setShowModal(true);
  };

  const closeMenu = () => showBurger(!showBurger);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            style={{ color: "white" }}
            onClick={closeMenu}
          >
            M {navbarLogo} W
          </Link>
          <div
            className="menu-icon"
            style={{ color: "white" }}
            onClick={clickHandler}
          >
            {showBurger ? menuIconOpen : menuIconClose}
          </div>

          <ul className={showBurger ? "nav-menu" : "nav-menu active"}>
            <li className="nav-item">
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "30px",
                }}
                className="nav-links"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/selection"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "30px",
                }}
                className="nav-links"
                onClick={closeMenu}
              >
                Selection
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/articles"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "30px",
                }}
                className="nav-links"
                onClick={closeMenu}
              >
                Articles
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "30px",
                }}
                className="nav-links-mobile"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <button
                onClick={openModal}
                className={showBurger ? "hide-btn" : "show-btn"}
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
