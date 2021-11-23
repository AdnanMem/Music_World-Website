import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Card from "./components/Card";
import data from "./data";
import articles from "./articleData";
import Articles from "./components/Articles";
import About from "./components/About";
import Modal from "./components/Modal";

const App = () => {
  const [showBurger, setShowBurger] = useState(true);
  const clickHandler = () => {
    setShowBurger(!showBurger);
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Router>
        <Navbar
          showBurger={showBurger}
          setShowBurger={setShowBurger}
          clickHandler={clickHandler}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Routes>
          <Route path="/" element={<Home showBurger={showBurger} />} />
          <Route path="/selection" element={<Card data={data} />} />
          <Route path="/articles" element={<Articles articles={articles} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        showBurger={showBurger}
        setShowBuger={setShowBurger}
      />
    </>
  );
};

export default App;
