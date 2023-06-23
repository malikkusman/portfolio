import "./Works.css";
import { NavLink } from "react-router-dom";
import React from "react";

const WorkCard = (props) => {
  return (
    <div className="project-cards">
      <img src={props.imgsrc} alt="Assets" />
      <h2 className="project-titles">{props.title}</h2>
      <div className="pro-detail">
        <p>{props.text}</p>
        <div className="pro-btn">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
          <NavLink to={props.source} className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
