import "./Banner.scss";
import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import Header from "../../assets/img/headerBg.png";
import SubBanner from "../../assets/img/subBannerBg.png";
import BannerImage from "../../assets/img/bannerBg.png";
import StartBanner from "../../assets/img/startBanner.png";
import ArrowImg from "../../assets/img/arrow.png";
import NavLeft from "../../assets/img/navLeft.png";
import NavRight from "../../assets/img/navRight.png";
import NavAcpt from "../../assets/img/navAccess.png";
import GamePlay from "../../assets/img/gameplay.gif";
import {fetchData} from "../../redux/data/dataActions";
import {useDispatch, useSelector} from "react-redux";
import {connect} from "../../redux/blockchain/blockchainActions";
import MintBox from "../mintBox/MintBox";
import ToastNoti from "../toastNoti/ToastNoti";
import {useWindowSize} from "../../helpers/useWindowSize";

const Banner = () => {
  const dispatch = useDispatch();
  const currentWidth = useWindowSize();
  const [isUserSelectOption, setIsUserSelectOption] = useState(0);
  const [isShowGifImage, setIsShowGifImage] = useState(false);
  
  const blockchain = useSelector((state) => state.blockchain);
  
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };
  
  useEffect(() => {
    getData();
  }, [blockchain.account]);
  
  const onNavigateOptionBtnClick = (type) => {
    if (type === "next") {
      let temp = isUserSelectOption;
      temp++;
      setIsUserSelectOption(temp);
    } else if (type === "prev") {
      let temp = isUserSelectOption;
      temp--;
      setIsUserSelectOption(temp);
    }
  };
  const onSubmitBtnClick = () => {
    if (isUserSelectOption === 0) {
      setIsShowGifImage(!isShowGifImage);
    } else if (isUserSelectOption === 1) {
      dispatch(connect());
      getData();
    }
  };
  return (
    <Container className="banner" fluid>
      <Container className="banner-container" fluid={"xxl"}>
        <div className="banner-header" style={{display: (blockchain.account && currentWidth < 768) && "none"}}>
          <img src={Header} alt=""/>
          <div className="banner-header__wrapper">
            <span>the moonbutts</span>
          </div>
        </div>
        <div className="banner-body"
             style={{
               paddingBottom: (blockchain.account && currentWidth < 768) && "unset",
               minHeight: (blockchain.account && currentWidth < 768) && "50vh"
             }}>
          <div className="banner-body__wrapper" style={{display: (blockchain.account && currentWidth < 768) && "none"}}>
            <img src={BannerImage} alt=""/>
          </div>
          {
            isShowGifImage ? (
              <img src={GamePlay} alt="" className="sub-banner"/>
            ) : (
              <img src={SubBanner}
                   alt=""
                   className="sub-banner"
                   style={{display: (blockchain.account && currentWidth < 768) && "none"}}/>
            )
          }
          <div className="banner-body__content">
            {
              !isShowGifImage && (
                blockchain.account ? (
                  <MintBox/>
                ) : (
                  <div className="banner-body__content__option">
                    <img src={StartBanner} alt="" className="start-banner"/>
                    <div className="banner-body__content__option__container">
                      {
                        ["Play", "Mint your NFT", "About us"].map((val, index) => (
                          <div key={index} className="item">
                            <img src={ArrowImg}
                                 alt=""
                                 style={{visibility: isUserSelectOption === index ? "visible" : "hidden"}}/>
                            <p className={`content ${isUserSelectOption === index && "active"}`}>{index + 1}.{val}</p>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                )
              )
            }
          </div>
          <div className="banner-body__btn" style={{display: (blockchain.account && currentWidth < 768) && "none"}}>
            <div className={`left ${(isUserSelectOption === 0 || isShowGifImage || blockchain.account) && "disabled"}`}
                 onClick={() => onNavigateOptionBtnClick("prev")}>
              <img src={NavLeft} alt=""/>
            </div>
            <div className={`acpt ${blockchain.account && "disabled"}`} onClick={onSubmitBtnClick}>
              <img src={NavAcpt} alt=""/>
            </div>
            <div className={`right ${(isUserSelectOption === 2 || isShowGifImage || blockchain.account) && "disabled"}`}
                 onClick={() => onNavigateOptionBtnClick("next")}>
              <img src={NavRight} alt=""/>
            </div>
          </div>
        </div>
      </Container>
      <ToastNoti errorMsg={blockchain.errorMsg} titleNoti={"Error"}/>
    </Container>
  );
};

export default Banner;