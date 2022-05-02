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
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };
  useEffect(() => {
    getData();
  }, [blockchain.account]);
  
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
      <Container fluid className="app">
        <div className="app-slideshow__container">
          <Slider {...settings}>
            {
              [Image1, Image2, Image3, Image1, Image2, Image3].map((val, index) => (
                <div className="app-slideshow__item" key={index}>
                  <img src={val} alt=""/>
                </div>
              ))
            }
          </Slider>
        </div>
        <div className="app-container">
          <Container fluid={"xxl"} className="app-container__main">
            <Row className="app-content__container">
              <Col lg={7} md={6} sm={12} className="app-content__left">
                <div className="app-content__left__container">
                  {
                    blockchain.account ? (
                      <MintBox/>
                    ) : (
                      <>
                        <h1>Lorem ipsum dolor sit.</h1>
                        <button className="btn-grad" onClick={(e) => {
                          e.preventDefault();
                          dispatch(connect());
                          getData();
                        }}>Connect wallet
                        </button>
                      </>
                    )
                  }
                </div>
              </Col>
              <Col lg={5} md={6} sm={12} className="app-content__right">
                <div className="app-content__right__image">
                  {
                    [Image1, Image2, Image3].map((val, index) => (
                      <div className="image-item">
                        <img src={val} alt=""/>
                      </div>
                    ))
                  }
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
      <ToastNoti errorMsg={blockchain.errorMsg} titleNoti={"Error"}/>
    </>
  );
}

export default App;
