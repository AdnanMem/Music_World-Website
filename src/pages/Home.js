import React from "react";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";
import data from "../data";
import Articles from "../components/Articles";
import articles from "../articleData";
import About from "../components/About";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

const Home = ({ showBurger }) => {
  return (
    <>
      <HeroSection showBurger={showBurger} />
      <Card data={data} />
      <Articles articles={articles} />
      <About />
      <Footer />
      <Modal />
    </>
  );
};

export default Home;
