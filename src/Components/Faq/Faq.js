import React, { useState } from "react";

import { Col } from "react-bootstrap";

import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 55px 0;

  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 125%;
    /* identical to box height, or 62px */

    color: #ffffff;
  }
  .tagline {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 152%;
    color: #ffffff;
    padding: 20px 0;
  }
  .faqContainer {
    padding: 15px 0;
    border-bottom: 1px solid #0bd488;
  }
  .question {
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 125%;
    /* or 31px */

    color: rgba(255, 255, 255, 0.9);
  }
  .answer {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 155%;

    color: rgba(255, 255, 255, 0.9);
    width: 70%;
    padding: 10px 0;
  }

  .icon {
    font-size: 25px;
    color: #fff;
    margin-top: 5px;
    margin-left: 10px;
  }

  @media only screen and (max-width: 767px) {
    .title {
      font-size: 40px;
    }
    .tagline {
      font-size: 18px;
    }
    .question {
      font-size: 21px;
    }
    .answer {
      width: 80%;
    }
    .icon {
      font-size: 20px;
      color: #fff;
    }
  }
`;

const Faq = () => {
  const [value, setValue] = useState(null);
  const dashboardArray = [
    {
      question: "What are the objectives of this Token?",

      Ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
    },
    {
      question: "What is the best features and services?",

      Ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
    },
    {
      question: "How may I take part in and purchase this NFT?",

      Ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
    },
    {
      question: "Why this Grift important to me?",

      Ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
    },
    {
      question: "What are the objectives of this Token?",

      Ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
    },
  ];

  return (
    <Wrapper id="faq">
      <Col xs={11} md={10} xl={9} xxl={8} className="mx-auto">
        <h3 className="title">Frequently Asked Questions</h3>

        <svg xmlns="http://www.w3.org/2000/svg" width="167" height="10" viewBox="0 0 167 10" fill="none"><rect width="167" height="2" rx="1" fill="url(#paint0_linear_393_3132)"></rect><rect y="8" width="87" height="2" rx="1" fill="url(#paint1_linear_393_3132)"></rect><defs><linearGradient id="paint0_linear_393_3132" x1="167" y1="2" x2="-0.00152114" y2="0.136306" gradientUnits="userSpaceOnUse"><stop stopColor="#C4C4C4" stopOpacity="0"></stop><stop offset="1" stopColor="#0bd488"></stop></linearGradient><linearGradient id="paint1_linear_393_3132" x1="87" y1="10" x2="-0.00868664" y2="9.49415" gradientUnits="userSpaceOnUse"><stop stopColor="#C4C4C4" stopOpacity="0"></stop><stop offset="1" stopColor="#0bd488"></stop></linearGradient></defs></svg>

        <p className="tagline" data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
          accumsan hendrerit commodo.
        </p>
        <div className="pt-4" data-aos="fade-up">
          {dashboardArray.map((el, i) => (
            <div key={i} className="faqContainer">
              <div className="d-flex justify-content-between">
                <p className="question" onClick={() => setValue(i)}>
                  {el.question}
                </p>
                <div className="d-flex">
                  {value !== i && (
                    <BsChevronDown
                      className="icon"
                      onClick={() => setValue(i)}
                    />
                  )}
                  {value === i && (
                    <BsChevronUp
                      className="icon"
                      onClick={() => setValue(null)}
                    />
                  )}
                </div>
              </div>

              {value === i && <p className="answer">{el.Ans}</p>}
            </div>
          ))}
        </div>
      </Col>
    </Wrapper>
  );
};
export default Faq;
