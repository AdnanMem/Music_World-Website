import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  const facebook = <FontAwesomeIcon icon={faFacebook} />;
  const twitter = <FontAwesomeIcon icon={faTwitter} />;
  const instagram = <FontAwesomeIcon icon={faInstagram} />;
  const youtube = <FontAwesomeIcon icon={faYoutube} />;
  const linkedin = <FontAwesomeIcon icon={faLinkedin} />;

  return (
    <div className="footer-container">
      <div className="footer-first">
        <h1>Join us and receive the latest news from music world!</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <input className="footer-input" type="text" placeholder="Your e-mail" />
        <button className="sub-button">Subscribe</button>
      </div>
      <div className="footer-second">
        <h1>Contact us</h1>
        <div className="social">
          {facebook} {twitter} {instagram} {youtube} {linkedin}
        </div>
      </div>
    </div>
  );
};

export default Footer;
