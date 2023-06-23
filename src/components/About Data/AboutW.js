import "./AboutC.css";

import React from "react";
import AboutCardData from "./AboutData";

import AboutCard from "./AboutCard";
const AboutW = () => {
  return (
    <div className="work-containers">
      <h1 className="project-headings">Education</h1>
      <div className="project-containers">
        {AboutCardData.map((val, index) => {
          return (
            <AboutCard
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
