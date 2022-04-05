import styled from "styled-components";
import { Col } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";


const Wrapper = styled.div`
  padding: 55px 0;
  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 125%;

    color: #ffffff;
  }
  .tagline {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 152%;
    color: #ffffff;
    padding: 15px 0;
    padding-bottom: 30px;
  }
  .socialContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    justify-content: center;
  }
  .social {
    display: flex;
    jusitfy-content: center;
    align-items: center;
    padding: 12px 18px;
    border: 1px solid #0bd488;
    border-radius: 8px;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    /* identical to box height, or 16px */
    margin-top: 15px;
    color: #ffffff;
    background: transparent;
  }
  .active {
    background: #0bd488;
    color: #fff;
    border: 1px solid #0bd488;
  }
  .name {
    padding-left: 8px;
  }
  .vertical-timeline-element-title {
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 125%;
    text-transform: capitalize;
    color: #ffffff;
  }
  .vertical-timeline-element-subtitle {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 155%;
    color: rgba(255, 255, 255, 0.9);
  }
  .vertical-timeline {
    padding: 0;
    width: 100% !important;
    max-width: 100% !important;
  }

  .vertical-timeline-element-content {
    box-shadow: none;
    color: #fff;
    background: transparent;
    padding: 0;
    padding-top: 5px;
  }
  .vertical-timeline-element-content-arrow {
    display: none;
  }
  .vertical-timeline-element-icon {
    box-shadow: none;
    font-size: 35px;
    border-radius: 0%;
  }
  .star {
    width: 30px;
    height: 70px;
    background: #000;
    margin-left: 5px;
    display: flex;
    jusitfy-content: center;
    align-items: center;
  }

  .main-container::before {
    position: absolute;
    left: -50%;
  }
  ${
    "" /* .main-container1::before {
    content: url(./images/roadmap1.png);
  }
  .main-container2::before {
    content: url(./images/roadmap2.png);
  }
  .main-container3::before {
    content: url(./images/roadmap3.png);
  }
  .main-container4::before {
    content: url(./images/roadmap4.png);
  }
  .main-container5::before {
    content: url(./images/roadmap5.png);
  } */
  }
  ${
    "" /* 
  @media only screen and (max-width: 1457px) {
    .vertical-timeline::before {
      height: 99%;
    }
  }
  @media only screen and (max-width: 1399px) {
    .main-container::before {
      left: -55%;
    }
  }
  @media only screen and (max-width: 1199px) {
    .main-container::before {
      left: -60%;
    }
  }

  @media only screen and (max-width: 1050px) {
    .main-container::before {
      left: -65%;
    }
  } */
  }
  @media only screen and (max-width: 991px) {
    ${
      "" /* .main-container::before {
      display: none;
    } */
    }
    br {
      display: none;
    }
  }
  @media only screen and (max-width: 767px) {
    .socialContainer {
      padding-bottom: 20px;
    }
  }

  .TimeLineProgress
  {
    height: auto;
    width: 4px;
    background: white;
    margin-right: 40px;
    margin-top: 85px;

    
    height: 100%;
    position: absolute;
    margin-left: 58px;
  }

  .TimeLineProgressBar
  {
    width: 100%;
    height: 0%;
    display: block;
    background: #0bd488;
    box-shadow: 0 0 8px 2px #0bd488;    
  }

  .vertical-timeline
  {
    display: flex;
  }
  .vertical-timeline-element
  {
    padding: 0 80px 60px 120px;
    border: 1px solid gray;
    border-radius: 16px;
    margin-bottom: 20px;
    background: linear-gradient(262.31deg,hsla(0,0%,100%,.08) .27%,hsla(0,0%,100%,0) 99.02%);

  }
  .vertical-timeline-element-title
  {
    font-weight:bold;
  }
  .vertical-timeline-element-title .index
  {
    color:#0bd488;
  }

  .vertical-timeline .vertical-timeline-element-icon
  {
    position: relative;
    left: -61px;
    top: 55px;
  }
  .star
  {
    height: 30px;
    background: #000;
    margin-left: -15px;
  }
  .star.gray svg
  {
    filter: brightness(0) saturate(100%) invert(88%) sepia(100%) saturate(0%) hue-rotate(170deg) brightness(113%) contrast(100%);
  }
`;
const RoadMap = () => {
  
  const roadmap = [
    {
      img: "./images/roadmap1.png",
      title: "Our Own Token",
      text1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
      text2:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here content here.",
    },
    {
      img: "./images/roadmap2.png",
      title: "Our Own Token",
      text1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
      text2:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here content here.",
    },
    {
      img: "./images/roadmap3.png",
      title: "Our Own Token",
      text1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
      text2:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here content here.",
    },
    {
      img: "./images/roadmap4.png",
      title: "Our Own Token",
      text1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
      text2:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here content here.",
    },
    {
      img: "./images/roadmap5.png",
      title: "Our Own Token",
      text1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
      text2:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here content here.",
    },
  ];

  return (
    <Wrapper id="roadmap" data-aos="fade-up">
      

      <Col xs={11} lg={7} xl={7} xxl={7} className="mx-auto">
        {" "}
        <div className="d-flex justify-content-between align-items-start align-items-md-center flex-column flex-md-row">
          <div>
            {" "}
            <h3 className="title">RoadMap</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="167" height="10" viewBox="0 0 167 10" fill="none"><rect width="167" height="2" rx="1" fill="url(#paint0_linear_393_3132)"></rect><rect y="8" width="87" height="2" rx="1" fill="url(#paint1_linear_393_3132)"></rect><defs><linearGradient id="paint0_linear_393_3132" x1="167" y1="2" x2="-0.00152114" y2="0.136306" gradientUnits="userSpaceOnUse"><stop stopColor="#C4C4C4" stopOpacity="0"></stop><stop offset="1" stopColor="#0bd488"></stop></linearGradient><linearGradient id="paint1_linear_393_3132" x1="87" y1="10" x2="-0.00868664" y2="9.49415" gradientUnits="userSpaceOnUse"><stop stopColor="#C4C4C4" stopOpacity="0"></stop><stop offset="1" stopColor="#0bd488"></stop></linearGradient></defs></svg>
            <p className="tagline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              accumsan hendrerit commodo.
            </p>
          </div>
          
        </div>
        <VerticalTimeline layout="1-column-left">
          <span className="TimeLineProgress">
            <span className="TimeLineProgressBar"></span>
          </span>
          <div>
          {roadmap.map((el, i) => (
            <VerticalTimelineElement
              key={i}
              icon={
                <div className="star gray">
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none"><g filter="url(#filter0_f_501_516)"><rect x="19.3135" y="8" width="16" height="16" rx="2" transform="rotate(45 19.3135 8)" fill="#0bd488"></rect><rect x="19.3135" y="6.58579" width="18" height="18" rx="3" transform="rotate(45 19.3135 6.58579)" stroke="#0bd488" strokeWidth="2"></rect></g><rect x="19.3135" y="8" width="16" height="16" rx="2" transform="rotate(45 19.3135 8)" fill="#0bd488"></rect><defs><filter id="filter0_f_501_516" x="0.828125" y="0.828125" width="36.9707" height="36.9707" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_501_516"></feGaussianBlur></filter></defs></svg>
                  {/* <img src="./images/star.png" /> */}
                </div>
              }
            >
              <div
                className={`d-flex flex-column mt-3 main-container main-container${
                  i + 1
                }`}
              >
                <span className="vertical-timeline-element-title">
                  <span className="index">{i + 1}.</span> {el.title}
                </span>
                <span className="vertical-timeline-element-subtitle mt-3">
                  {el.text1}
                </span>
                <span className="vertical-timeline-element-subtitle mt-3">
                  {el.text2}
                </span>
              </div>
            </VerticalTimelineElement>
          ))}
          </div>
        </VerticalTimeline>
      </Col>
      
    </Wrapper>
  );
};
export default RoadMap;
