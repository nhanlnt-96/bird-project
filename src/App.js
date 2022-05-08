import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";

import React from "react";
import {Container} from "react-bootstrap";
import Banner from "./components/banner";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <Container className="app" fluid>
      <Banner/>
      <About/>
      <Footer/>
    </Container>
  );
}

export default App;
