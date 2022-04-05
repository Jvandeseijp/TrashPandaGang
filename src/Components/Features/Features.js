import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 55px 0;
  padding-top: 100px;
  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 52px;
    line-height: 120%;
    letter-spacing: 0.01em;

    color: #ffffff;
    padding-bottom: 15px;
  }
  .text {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 152%;
    width: 90%;
    padding-top: 18px;
    /* or 30px */

    color: #ffffff;
  }
  .image {
    width: 80%;
    margin: 0 auto;
  }
  @media only screen and (max-width: 1500px) {
    .text {
      width: 100%;
    }
  }
  @media only screen and (max-width: 1222px) {
    br {
      display: none;
    }
    .title {
      font-size: 47px;
    }
    .text {
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 991px) {
    .image {
      width: 100%;
    }
  }
  @media only screen and (max-width: 767px) {
    .title {
      font-size: 40px;
      text-align: center;
    }
    .text {
      font-size: 16px;
      text-align: center;
    }
    .image {
    }
  }
`;
const Features = () => {
  return (
    <Wrapper id="about" data-aos="fade-up">
      <Col xs={11} md={10} xl={9} xxl={8} className="mx-auto">
        <Row className="align-items-center">
        <Col
            data-aos="fade-left"
            sm={8}
            md={5}
            lg={6}
            className="d-flex justify-content-center align-items-center my-3 my-md-0 mx-auto"
          >
            <img src="/images/puffer_pink.png" alt="#" className="image mx-auto" />
          </Col>
          <Col md={7} lg={6} className="my-3 my-md-0" data-aos="fade-right">
            <h3 className="title">
              Features 
            </h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="167" height="10" viewBox="0 0 167 10" fill="none"><rect width="167" height="2" rx="1" fill="url(#paint0_linear_393_3132)"></rect><rect y="8" width="87" height="2" rx="1" fill="url(#paint1_linear_393_3132)"></rect><defs><linearGradient id="paint0_linear_393_3132" x1="167" y1="2" x2="-0.00152114" y2="0.136306" gradientUnits="userSpaceOnUse"><stop stopColor="#C4C4C4" stopOpacity="0"></stop><stop offset="1" stopColor="#0bd488"></stop></linearGradient><linearGradient id="paint1_linear_393_3132" x1="87" y1="10" x2="-0.00868664" y2="9.49415" gradientUnits="userSpaceOnUse"><stop stopColor="#C4C4C4" stopOpacity="0"></stop><stop offset="1" stopColor="#0bd488"></stop></linearGradient></defs></svg>
            <p className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s.
            </p>
            <p className="text">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type.
            </p>
            <p className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s.
            </p>
          </Col>
          
        </Row>
      </Col>
    </Wrapper>
  );
};
export default Features;
