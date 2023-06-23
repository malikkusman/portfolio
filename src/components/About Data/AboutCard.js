import "./AboutC.css";
import { NavLink } from "react-router-dom";
import React from "react";

const AboutCard = (props) => {
  return (
    <div className="project-cards">
      <img src={props.imgsrc} alt="assets" />
      <h2 className="project-titles">{props.title}</h2>
      <div className="pro-detail">
        <p>{props.text}</p>
        <div className="pro-btn">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
