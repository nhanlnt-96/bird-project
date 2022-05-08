import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";

import React from "react";
import {Container} from "react-bootstrap";
import Banner from "./components/banner";

function App() {
  return (
    <Container className="app" fluid>
      <Banner/>
    </Container>
  );
}

export default App;
