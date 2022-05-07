import React, {useEffect, useState} from "react";
import ScrollText1 from "../../assets/imgs/scrolling-text-1.png";
import ScrollText837Webm from "../../assets/imgs/scrolling-text-837.webm";
import ScrollText837Mp4 from "../../assets/imgs/scrolling-text-837.mp4";
import ScrollText837Gif from "../../assets/imgs/scrolling-text-837.gif";
import Radar1 from "../../assets/imgs/radar-newspeed-1.png";
import Radar405Webm from "../../assets/imgs/radar-newspeed-sm-405.webm";
import Radar405Mp4 from "../../assets/imgs/radar-newspeed-sm-405.mp4";
import Radar405Gif from "../../assets/imgs/radar-newspeed-sm-405.gif";
import Radar972Webm from "../../assets/imgs/radar-newspeed-xl-972.webm";
import Radar972Mp4 from "../../assets/imgs/radar-newspeed-xl-972.mp4";
import Radar972Gif from "../../assets/imgs/radar-newspeed-xl-972.gif";
import Screen675Webm from "../../assets/imgs/screen-sm-675.webm";
import Screen675Mp4 from "../../assets/imgs/screen-sm-675.mp4";
import Screen675Gif from "../../assets/imgs/screen-sm-675.gif";
import Screen1 from "../../assets/imgs/screen-1.png";
import Screen1257 from "../../assets/imgs/screen-xl-1257.webm";
import Screen1257Mp4 from "../../assets/imgs/screen-xl-1257.mp4";
import Screen1257Gif from "../../assets/imgs/screen-xl-1257.gif";
import Counter from "../../assets/imgs/counter-sm.png";
import CounterXl from "../../assets/imgs/counter-xl.png";
import DiscPort from "../../assets/imgs/disc_port.png";
import Keyboard from "../../assets/imgs/full_keyboard-sm.png";
import KeyboardXl from "../../assets/imgs/full_keyboard-xl.png";
import {fetchData} from "../../redux/data/dataActions";
import {useDispatch, useSelector} from "react-redux";
import {connect} from "../../redux/blockchain/blockchainActions";
import MintBox from "../mintBox/MintBox";
import Image1 from "../../assets/imgs/image1.png";

const Banner = () => {
  const dispatch = useDispatch();
  const [hoverItemId, setHoverItemId] = useState(null);
  const [isTurnButtonOn, setIsTurnButtonOn] = useState([]);
  
  const blockchain = useSelector((state) => state.blockchain);
  
  const onHoverSidebar = (type, index) => {
    if (type === "mousemove") {
      setHoverItemId(index);
    } else {
      setHoverItemId(null);
    }
  };
  
  const onTurnButtonOnBtnClick = (buttonId) => {
    let tempObj = Array.from(isTurnButtonOn);
    
    if (!tempObj.includes(buttonId)) {
      tempObj.push(buttonId);
    } else {
      const indexOfItem = tempObj.indexOf(buttonId);
      
      indexOfItem > -1 && tempObj.splice(indexOfItem, 1);
    }
    
    setIsTurnButtonOn(tempObj);
  };
  
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };
  
  useEffect(() => {
    getData();
  }, [blockchain.account]);
  
  return (
    <div className="top-section">
      <div className="wrapper">
        <div className="top-section-container">
          <div className="cdb-top js-cdb-top">
            <div className="img-box-bg"/>
            <div className="int-board-1">
              <div className="tg1">
                
                <div className="lblock-item tg1-1">
                  <div className="anime-wrapper">
                    <div className="anime-asp-box">
                      <video autoPlay loop muted playsInline disableRemotePlayback
                             className="tg1-1-anime video-safari-change"
                             poster={ScrollText1}>
                        <source src={ScrollText837Webm} type="video/webm"
                                width="279" height="73"/>
                        <source src={ScrollText837Mp4} type="video/mp4"
                                width="279" height="73"/>
                        Your browser does not support the video tag.
                      </video>
                      <picture className="tg1-1-anime gif-safari-change" style={{display: "none"}}>
                        <source media="(max-width: 1199px)"
                                srcSet={ScrollText837Gif} type="image/gif"/>
                        <img src={ScrollText837Gif} alt="scrolling"/>
                      </picture>
                    </div>
                  </div>
                  {/*<div className="sign-wrapper">*/}
                  {/*  <div className="sign-asp-box">*/}
                  {/*    <div className="sign-anime" data-attention-lamp/>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </div>
                
                <div className="lblock-item tg1-2">
                  {
                    [...new Array(4)].map((val, index) => (
                      <div key={index} className="btn-wrapper">
                        <div className="btn-asp-box">
                          <button className={`tg1-btn ${isTurnButtonOn.includes(index) && "active"}`}
                                  data-id="tg1-btn"
                                  aria-label={`toggler ${index + 1}`}
                                  onClick={() => onTurnButtonOnBtnClick(index)}/>
                        </div>
                      </div>
                    ))
                  }
                </div>
                
                <div className="lblock-item tg1-3">
                  <div className="anime-wrapper">
                    <div className="anime-asp-box">
                      <video autoPlay loop muted playsInline disableRemotePlayback
                             className="tg1-3-anime video-safari-change"
                             poster={Radar1}>
                        <source media="(max-width: 1199px)"
                                src={Radar405Webm} type="video/webm"
                                width="135" height="169"/>
                        <source media="(max-width: 1199px)"
                                src={Radar405Mp4} type="video/mp4"
                                width="135" height="169"/>
                        <source media="(min-width: 1200px)"
                                src={Radar972Webm} type="video/webm"
                                width="324" height="405"/>
                        <source media="(min-width: 1200px)"
                                src={Radar972Mp4} type="video/mp4"
                                width="324" height="405"/>
                        Your browser does not support the video tag.
                      </video>
                      <picture className="tg1-3-anime gif-safari-change" style={{display: "none"}}>
                        <source media="(max-width: 1199px)"
                                srcSet={Radar405Gif} type="image/gif"/>
                        <source media="(min-width: 1200px)"
                                srcSet={Radar972Gif} type="image/gif"/>
                        <img src={Radar972Gif} alt="radar"/>
                      </picture>
                    </div>
                  </div>
                </div>
              
              </div>
              <div className="tg2">
                {
                  blockchain.account ? (
                    <MintBox/>
                  ) : (
                    <div className="anime-wrapper">
                      <div className="anime-asp-box">
                        <img src={Image1} alt="" className="tg2-anime" style={{borderRadius: "24px"}}/>
                        {/*<video autoPlay loop muted playsInline disableRemotePlayback*/}
                        {/*       className="tg2-anime video-safari-change" poster={Screen1}>*/}
                        {/*  <source media="(max-width: 1199px)" src={Screen675Webm}*/}
                        {/*          type="video/webm" width="225" height="225"/>*/}
                        {/*  <source media="(max-width: 1199px)" src={Screen675Mp4}*/}
                        {/*          type="video/mp4" width="225" height="225"/>*/}
                        {/*  <source media="(min-width: 1200px)" src={Screen1257}*/}
                        {/*          type="video/webm" width="419" height="419"/>*/}
                        {/*  <source media="(min-width: 1200px)" src={Screen1257Mp4}*/}
                        {/*          type="video/mp4" width="419" height="419"/>*/}
                        {/*  Your browser does not support the video tag.*/}
                        {/*</video>*/}
                        {/*<picture className="tg2-anime gif-safari-change" style={{display: "none"}}>*/}
                        {/*  <source media="(max-width: 1199px)" srcSet={Screen675Gif}*/}
                        {/*          type="image/gif"/>*/}
                        {/*  <source media="(min-width: 1200px)" srcSet={Screen1257Gif}*/}
                        {/*          type="image/gif"/>*/}
                        {/*  <img src={Screen1257Gif} alt="screen"/>*/}
                        {/*</picture>*/}
                      </div>
                    </div>
                  )
                }
                {/*<div className="counter-wrapper">*/}
                {/*  <div className="counter-asp-box">*/}
                {/*    <picture>*/}
                {/*      <source media="(max-width: 1199px)" srcSet={Counter}*/}
                {/*              type="image/png"/>*/}
                {/*      <source media="(min-width: 1200px)" srcSet={CounterXl}*/}
                {/*              type="image/png"/>*/}
                {/*      <img className="tg2-counter" src={CounterXl} alt="counter"/>*/}
                {/*    </picture>*/}
                {/*    <span className="counter-symbols"><span data-count="1">SOLD</span><span*/}
                {/*      data-count="2">//</span><span data-count="3">OUT</span></span>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
              <div className="tg3">
                
                <div className="rblock-item tg3-1">
                  {/*<div className="btn-wrapper">*/}
                  {/*  <div className="btn-asp-box">*/}
                  {/*    <button className="tg3-1-btn" aria-label="connect">*/}
                  {/*      <span className="tg3-1-text">Connect</span>*/}
                  {/*    </button>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </div>
                
                <div className="rblock-item tg3-2">
                  <div className="tg3-2-1">
                    {
                      [...new Array(3)].map((val, index) => (
                        index !== 2 && (
                          <div key={index} className="sign-wrapper">
                            <div className="sign-asp-box">
                              <div className={`sign-anime sign-${index + 1} ${index + 1 === hoverItemId && "active"}`}
                                   data-link-lamp={index + 1}/>
                            </div>
                          </div>
                        )
                      ))
                    }
                  </div>
                  <div className="tg3-2-2">
                    {
                      [
                        {
                          path: "#about",
                          label: "About"
                        },
                        {
                          path: "#contact",
                          label: "Contact"
                        },
                        {
                          path: "#faq",
                          label: "FAQs"
                        }
                      ].map((val, index) => (
                        index !== 2 && (
                          <div key={index} className="sign-wrapper">
                            <div className="sign-asp-box">
                              <a className={`sign-text sign-${index + 1}`}
                                 href={val.path}
                                 data-hover-link={index + 1}
                                 onMouseMove={(e) => onHoverSidebar(e.type, index + 1)}
                                 onMouseLeave={(e) => onHoverSidebar(e.type)}>
                                {val.label}
                              </a>
                            </div>
                          </div>
                        )
                      ))
                    }
                  </div>
                  <div className="tg3-2-3">
                    {/*<div className="btn-wrapper">*/}
                    {/*  <div className="btn-asp-box">*/}
                    {/*    <a className="tg3-2-3-btn btn-egg"*/}
                    {/*       href="https://opensea.io/collection/cryptodickbutts-s3"/>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                    {/*<div className="btn-wrapper">*/}
                    {/*  <div className="btn-asp-box">*/}
                    {/*    <a className="tg3-2-3-btn btn-skull"*/}
                    {/*       href="https://opensea.io/collection/cryptodickbutts-s3"/>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                  </div>
                </div>
                
                <div className="rblock-item tg3-3">
                  <div className="disc-wrapper">
                    <div className="disc-asp-box">
                      <img className="tg1-3-disc" src={DiscPort} alt="disc_port"/>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
          
          <div className="cdb-medium js-cdb-medium">
            
            <div className="img-box-bg">
            
            </div>
            
            <div className="int-board-4">
              
              <div className="g1">
                <div className="img-asp-box">
                  <picture>
                    <source media="(max-width: 1199px)" srcSet={Keyboard}
                            type="image/png"/>
                    <source media="(min-width: 1200px)" srcSet={KeyboardXl}
                            type="image/png"/>
                    <img className="g1-img" src={KeyboardXl} alt="keyboard"/>
                  </picture>
                </div>
              </div>
              
              <div className="g2">
                <div className="bg-g2-btn-wrapper">
                  <div className="btn-asp-box">
                    <div className="bg-g2-btn">
                    </div>
                  </div>
                </div>
                <div className="btn-wrapper">
                  <div className="btn-asp-box">
                    <button className={`g2-btn js-g2-btn hover ${blockchain.account && "active"}`} onClick={(e) => {
                      e.preventDefault();
                      dispatch(connect());
                      getData();
                    }} disabled={blockchain.account}/>
                    <span className="popup-text-wrapper">
                      <span className="popup-text-asp-box">
                        <span className="popup-text"/>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="g3">
                
                <div className="g3-row">
                  <div className="btn-wrapper">
                    <div className="btn-asp-box">
                      <div className="g3-btn t1">
                        <button className="g3-btn-clip" data-id="g3-btn" data-note="A"
                                aria-label="note A"/>
                      </div>
                    </div>
                  </div>
                  <div className="btn-wrapper">
                    <div className="btn-asp-box">
                      <div className="g3-btn t2">
                        <button className="g3-btn-clip" data-id="g3-btn" data-note="B"
                                aria-label="note B"/>
                      </div>
                    </div>
                  </div>
                  <div className="btn-wrapper">
                    <div className="btn-asp-box">
                      <div className="g3-btn t3">
                        <button className="g3-btn-clip" data-id="g3-btn" data-note="C"
                                aria-label="note C"/>
                      </div>
                    </div>
                  </div>
                  <div className="btn-wrapper">
                    <div className="btn-asp-box">
                      <div className="g3-btn t4">
                        <button className="g3-btn-clip" data-id="g3-btn" data-note="D"
                                aria-label="note D"/>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="g3-row">
                  <div className="btn-wrapper">
                    <div className="btn-asp-box">
                      <div className="g3-btn t5">
                        <button className="g3-btn-clip" data-id="g3-btn" data-note="E"
                                aria-label="note E"/>
                      </div>
                    </div>
                  </div>
                  <div className="btn-wrapper">
                    <div className="btn-asp-box">
                      <div className="g3-btn t6">
                        <button className="g3-btn-clip" data-id="g3-btn" data-note="F"
                                aria-label="note F"/>
                      </div>
                    </div>
                  </div>
                  <div className="btn-wrapper">
                    <div className="btn-asp-box">
                      <div className="g3-btn t7">
                        <button className="g3-btn-clip" data-id="g3-btn" data-note="G"
                                aria-label="note G"/>
                      </div>
                    </div>
                  </div>
                  <div className="btn-wrapper">
                    <div className="btn-asp-box">
                      <div className="g3-btn t8">
                        <button className="g3-btn-clip" data-id="g3-btn" data-note="A"
                                aria-label="note A 2"/>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
          
          <div className="cdb-bottom">
            <div className="img-box-bg"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;