import "./AboutC.css";
import AboutC from "./AboutC";
import AboutCardData from "./AboutData";
import React from "react";

const AboutW = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {AboutCardData.map((val, index) => {
          return (
            <AboutC
              key={index}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutW;
