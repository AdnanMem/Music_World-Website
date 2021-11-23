import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <h1 className="about">A B O U T </h1>
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://cdn.pixabay.com/photo/2012/04/15/18/57/dvd-34919_960_720.png"
            alt="disc image"
          />
        </div>
        <div className="about-text">
          <h1 className="text-details">A few details about us</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            voluptates mollitia corrupti expedita alias, ea consectetur libero
            placeat. Dolorem modi autem magni sint. Sapiente temporibus,
            blanditiis quam pariatur voluptates, ipsam quo incidunt excepturi
            officiis magni fuga quidem, perspiciatis rem earum. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. <br /> <br /> Quia
            suscipit distinctio, et a corporis soluta, temporibus voluptatem
            eaque laudantium, eius necessitatibus nobis dolorem. Assumenda
            placeat, excepturi nam vel at repellat adipisci, laboriosam, nostrum
            laudantium officiis dolore porro sed earum nisi.
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            quas odit laborum illo eum rem beatae obcaecati expedita nobis quis?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            ipsam hic eveniet porro blanditiis. Reprehenderit enim doloribus nam
            illum maiores? Error praesentium unde aut eos molestiae, repellendus
            perferendis est ea.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
