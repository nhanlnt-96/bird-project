import React from "react";
import Image4 from "../../assets/imgs/image4.png";
import Image5 from "../../assets/imgs/image5.png";

const About = () => {
  return (
    <div className="info-section" id="about">
      <div className="info-container-wrapper">
        <div className="anime-container">
          {
            [Image4, Image5].map((val, index) => (
              <img key={index} src={val} alt=""/>
            ))
          }
        </div>
        <div className="text-container">
          <h1 className="title">MoonButts</h1>
          <p className="text">
            A collection of 2,669 CCO enabled PFPs that feature beautiful art derived from two of the top NFT projects
            in the space. The detail in the traits and art will set this apart from the rest. Come join the MoonButts
            community! No roadmap just vibes!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;