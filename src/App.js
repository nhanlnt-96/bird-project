import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "./styles/App.scss";

import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import MintBox from "./components/mintBox/MintBox";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "./redux/data/dataActions";
import {connect} from "./redux/blockchain/blockchainActions";
import ToastNoti from "./components/toastNoti/ToastNoti";
import Image1 from "./assets/img/image1.png";
import Image2 from "./assets/img/image2.png";
import Image3 from "./assets/img/image3.png";
import Slider from "react-slick";

function App() {
  return (
    <Container className="app" fluid>
    
    </Container>
  );
}

export default App;
