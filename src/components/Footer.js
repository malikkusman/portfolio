import "./Footer.css";
import React from "react";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Officer's Colony</p>
              <p>Kasur, Pakistan</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              0300-8185999
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              42khan0@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the University</h4>
          <p>
            I'm Muhammad Usman Asghar. Computer Science Student at University Of
            Engineering and Technology Lahore.
          </p>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/muhammad-usman-asghar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://twitter.com/malikusmann_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://github.com/malikkusman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
