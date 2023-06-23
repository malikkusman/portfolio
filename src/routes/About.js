import React from "react";
import Navbar from "../components/Navbar";
import Heroimg2 from "../components/Heroimg2";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";
import AboutW from "../components/About Data/AboutW";

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="About" text="I'm a Passionate Front End Developer" />
      <AboutContent />
      <AboutW />
      <Footer />
    </div>
  );
};

export default About;
