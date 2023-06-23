import "./Works.css";

import React from "react";
import WorkCard from "./WorkCard";

import ProjectCardData from "./WorkCardData";
const Work = () => {
  return (
    <div className="work-containers">
      <h1 className="project-headings">Projects</h1>
      <div className="project-containers">
        {ProjectCardData.map((val, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
