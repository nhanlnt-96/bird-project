import "./About.css";
import React from "react";
import {Container} from "react-bootstrap";
import Image1 from "../../assets/img/image1.png";
import Image2 from "../../assets/img/image2.png";
import Image3 from "../../assets/img/image3.png";

const About = () => {
  return (
    <Container className="about" fluid>
      <Container fluid={"xxl"}>
        <div className="info-section" id="about">
          <div className="info-container-wrapper">
            <div className="anime-container">
              {
                [Image1, Image2, Image3].map((val, index) => (
                  <img key={index} src={val} alt=""/>
                ))
              }
            </div>
            <div className="text-container">
              <h1 className="title">MoonButts</h1>
              <p className="text">
                A collection of 2,669 CCO enabled PFPs that feature beautiful art derived from two of the top NFT
                projects
                in the space. The detail in the traits and art will set this apart from the rest. Come join the
                MoonButts
                community! No roadmap just vibes!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default About;