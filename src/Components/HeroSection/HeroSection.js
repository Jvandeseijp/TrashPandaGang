import React from "react";
import MyCountDown from "../MyCountDown/MyCountDown";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 150px 25px;
  background: url(./images/herocolor.png) #000;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 1000px;

  color: #fff;


    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .title {
    font-weight: normal;
    font-size: 85px;
    line-height: 100%;
    font-weight: 900; 
    text-align: center;
    letter-spacing: 0.02em;
    color: #ffffff;
    text-shadow: 0px 2px 8px rgba(64, 63, 63, 0.3), 0px 4px 8px #000000;
  }
  .panda {
    color: #0bd488;
  }
  .text {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 170%;
    /* or 31px */
    padding-top: 20px;
    text-align: center;

    color: #ffffff;

    text-shadow: 0px 2px 8px rgba(33, 33, 33, 0.3);
  }
  .socialContainer {
    display: grid;
    grid-template-columns: repeat(4, 140px);
    justify-content: center;
  }
  .social {
    display: flex;
    jusitfy-content: center;
    align-items: center;
    padding: 12px 18px;
    border: 1px solid #0bd488;
    border-radius: 8px;
    font-family: TT Firs Neue;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    /* identical to box height, or 16px */

    color: #ffffff;
    background: rgba(255, 255, 255, 0.2);
  }

  .active {
    background: #0bd488;
    color: #fff;
    border: 1px solid #0bd488;
  }
  .name {
    padding-left: 8px;
  }
  @media only screen and (max-width: 1399px) {
    .title {
      font-size: 65px;
    }

    .text {
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 575px) {
    height: auto;
    padding: 200px 25px;
    br {
      display: none;
    }
    .title {
      font-size: 50px;
    }
    .text {
      font-size: 16px;
    }
    .socialContainer {
      display: grid;
      grid-template-columns: repeat(2, 140px);
      justify-content: center;
    }
    .social {
      margin-bottom: 20px;
    }
  }
  @media only screen and (max-width: 400px) {
    .title {
      font-size: 42px;
    }
    height: auto;
    padding: 170px 10px;
  }

  .animate__infinite {
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
}
.animate__duration-1500 {
  -webkit-animation-duration: 1.5s!important;
  animation-duration: 1.5s!important;
}
@-webkit-keyframes bounce {
  from,
  20%,
  53%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0) scaleY(1.1);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0) scaleY(1.05);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0) scaleY(0.95);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0) scaleY(1.02);
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
}
@keyframes bounce {
  from,
  20%,
  53%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0) scaleY(1.1);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0) scaleY(1.05);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0) scaleY(0.95);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0) scaleY(1.02);
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
}
.animate__bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}
`;
const HeroSection = () => {
  
  return (
    <Wrapper id="hero" data-aos="fade-up">
      <div>
      <h1 className="title" data-aos="fade-down">
        TRASH <span className="panda">PANDA </span>
        GANG
      </h1>
      <p className="text" data-aos="fade-down">
        Trash Panda Gang NFT will produce a unique collection of 5555 pieces.{" "}
        <br />
        They are going to conquer the Metaverse with their whole Gang.
      </p>
      <MyCountDown dayCount="April 12, 2022 20:00:00" />

      <div style={{display: 'flex',
          justifyContent: 'center',}} data-aos="fade-up">
        {/*<button style={{
          cursor: 'pointer',
          background: '#fff', 
          color: '#000',
          padding: '16px 32px', 
          position: 'relative',          
          fontWeight: 600,
          fontSize: '22px',
          lineHeight: '20px',
          borderRadius: '5px',
          width: '250px',
          border: 'none',

          
          }}>ENTER RAFFLE</button>*/}
      </div>
      </div>
      <div className="animate__bounce animation animate__duration-1500 animate__infinite"><svg xmlns="http://www.w3.org/2000/svg" width="27" height="48" viewBox="0 0 27 48" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M25.3373 33.516C26.0338 34.2125 26.0338 35.3417 25.3373 36.0382L13.3755 48L1.4137 36.0382C0.717215 35.3417 0.717215 34.2125 1.4137 33.516C2.11018 32.8195 3.23939 32.8195 3.93588 33.516L13.3755 42.9556L22.8151 33.516C23.5116 32.8195 24.6408 32.8195 25.3373 33.516Z" fill="#0bd488"></path><path fillRule="evenodd" clipRule="evenodd" d="M25.1844 11.9618C25.8809 12.6583 25.8809 13.7875 25.1844 14.484L13.2227 26.4458L1.26086 14.484C0.564383 13.7875 0.564383 12.6583 1.26086 11.9618C1.95734 11.2653 3.08656 11.2653 3.78304 11.9618L13.2227 21.4014L22.6623 11.9618C23.3588 11.2653 24.488 11.2653 25.1844 11.9618Z" fill="#0bd488"></path></svg></div>
    </Wrapper>
  );
};
export default HeroSection;
