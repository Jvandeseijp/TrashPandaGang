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
      question: "What is the supply?",

      Ans: "There will be a total of 2222 NFT's available for mint.",
    },
    {
      question: "What blockchain will Raccoon City be on?",

      Ans: "RCC will be launched on the Ethereum blockchain.",
    },
    {
      question: "How do I get on the Whitelist?",

      Ans: "Go to whitelist info channel in Discord and follow the requirements to get more chance to be WL.",
    },
    {
      question: "Can Whitelist be revoked?",

      Ans: "Yes, if we find that you are inactive or break any of our rules.",
    },
    {
      question: "How do I know if I'm on the whitelist?",

      Ans:` You will have the ????RCC Whitelisted role on your RCC discord profile!
      Make sure to read whitelist info channel in Discord & ????-announcements channel frequently so you don't miss out on new updates!`,
    },
   
    {
      question: "What is the Mint price?",

      Ans:`To be announced.`,
    },
    {
      question: "How many pieces can you mint?",

      Ans:`The Whitelist can mint up to 2 NFTs.
      The RCC Warriors can mint up to 3 NFTs.
      The Raffle can mint up to 4 NFTs (the remaining ones).`,
    },
  ];

  return (
    <Wrapper id="faq">
      <Col xs={11} md={10} xl={9} xxl={8} className="mx-auto">
        <h3 className="title">FAQ</h3>
        <h2 style={{fontWeight: 700, fontSize:'32px', color:'#fff'}}> Frequently Asked Questions</h2>

        <svg xmlns="http://www.w3.org/2000/svg" width="167" height="10" viewBox="0 0 167 10" fill="none"><rect width="167" height="2" rx="1" fill="url(#paint0_linear_393_3132)"></rect><rect y="8" width="87" height="2" rx="1" fill="url(#paint1_linear_393_3132)"></rect><defs><linearGradient id="paint0_linear_393_3132" x1="167" y1="2" x2="-0.00152114" y2="0.136306" gradientUnits="userSpaceOnUse"><stop stopColor="#C4C4C4" stopOpacity="0"></stop><stop offset="1" stopColor="#0bd488"></stop></linearGradient><linearGradient id="paint1_linear_393_3132" x1="87" y1="10" x2="-0.00868664" y2="9.49415" gradientUnits="userSpaceOnUse"><stop stopColor="#C4C4C4" stopOpacity="0"></stop><stop offset="1" stopColor="#0bd488"></stop></linearGradient></defs></svg>

       
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
