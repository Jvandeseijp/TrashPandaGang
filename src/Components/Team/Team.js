import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 55px 0;
  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 125%;
    /* identical to box height, or 62px */

    text-align: center;

    color: #ffffff;
  }
  .tagline {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 152%;
    /* or 30px */

    text-align: center;

    color: #ffffff;
  }
  .image {
    width: 100%;
  }
  .position {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 100%;
    /* identical to box height, or 14px */

    color: #0bd488;
  }
  .name {
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 100%;
    /* identical to box height, or 22px */

    letter-spacing: 0.02em;

    color: #ffffff;
  }
  .text {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    /* or 24px */

    color: #d9d9d9;
  }
  .social {
    margin-right: 12px;
  }
  @media only screen and (max-width: 520px) {
    br {
      display: none;
    }
    .title {
      font-size: 40px;
    }
  }
  .barSvg
  {
    display:flex;margin:5px auto;
  }
`;
const Team = () => {
  const teamArray = [
    {
      img: "./images/birds_satin-min.png",
      position: "Co-Founder & Artist",
      name: "Milen Piskuliyski",
      text: "",
      linkedin: "https://www.linkedin.com/in/milenpiskuliyski/",
      imdb: "https://www.imdb.com/name/nm4691128/",
      twitter: "https://twitter.com/milenpp",
    },
    {
      img: "./images/1.png",
      position: "Co-Founder & Artist",
      name: "Dorothy Ballarini",
      text: "",
      linkedin: "https://www.linkedin.com/in/dorothyballarini/",
      imdb: "https://www.imdb.com/name/nm4809197/",
      twitter: "https://twitter.com/DorothyBallarin",
    },
    {
      img: "./images/cigar.png",
      position: "Co-Founder & Head of Marketing",
      name: "Kevsko",
      text: "",
      twitter: "https://twitter.com/kevinsnftspace",
    },
    {
      img: "./images/karatekid-min.png",
      position: "Web3 Developer & Security Auditor",
      name: "Jarmo van de Seijp",
      text: "",
      linkedin: "https://www.linkedin.com/in/jarmo-van-de-seijp/",
    },
    {
      img: "./images/marketing.jpeg",
      position: "Head of Marketing",
      name: "Andri Davids",
      text: "",
      linkedin: "https://www.linkedin.com/in/anri-davids-61485311b/",
      twitter: "https://twitter.com/anridavids_eth",

    },
  ];
  return (
    <Wrapper id="team" data-aos="fade-up">
      <Col xs={11} md={10} xl={9} xxl={8} className="mx-auto">
        <h3 className="title text-center">Our Team </h3>
        <svg className="barSvg" xmlns="http://www.w3.org/2000/svg" width="167" height="10" viewBox="0 0 167 10" fill="none"><rect width="167" height="2" rx="1" fill="#0bd488"></rect><rect y="8" width="87" height="2" rx="1" x="40" fill="#0bd488"></rect><defs><linearGradient id="paint0_linear_393_3132" x1="167" y1="2" x2="-0.00152114" y2="0.136306" gradientUnits="userSpaceOnUse"><stop stopColor="#C4C4C4" stopOpacity="0"></stop><stop offset="1" stopColor="#0bd488"></stop></linearGradient><linearGradient id="paint1_linear_393_3132" x1="87" y1="10" x2="-0.00868664" y2="9.49415" gradientUnits="userSpaceOnUse"><stop stopColor="#C4C4C4" stopOpacity="0"></stop><stop offset="1" stopColor="#0bd488"></stop></linearGradient></defs></svg>
       
        <Row className="my-2">
          {teamArray.map((el, i) => (
            <Col
                sm={6}
                md={6}
                key={i}
                className="my-2 d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-up"
                >
              <Col
                sm={8}
                md={8}
                key={i}
                className="my-2 d-flex flex-column justify-content-between "
                data-aos="fade-up"
              >
                <div>
                  <img src={el.img} alt="#" className="image" />
                  <p className="position my-2">{el.position}</p>
                  <p className="name">{el.name}</p>
                  <p className="text my-2">{el.text}</p>
                </div>
                <div>
                  {el.linkedin?
                  <a
                    href={el.linkedin}
                    className="social"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="./images/linkedin.png" alt="#" />
                  </a>:''}
                  {el.imdb?
                  <a
                    href={el.imdb}
                    className="social"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="./images/imdb.png" alt="#" />
                  </a> : ''}
                  {el.twitter?
                  <a
                    href={el.twitter}
                    className="social"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="./images/twitter2.png" alt="#" />
                  </a> : '' }
                </div>
              </Col>
            </Col>
          ))}
        </Row>
      </Col>
    </Wrapper>
  );
};
export default Team;
