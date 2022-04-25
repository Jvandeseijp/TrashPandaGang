import React from "react";

import styled from "styled-components";
const Wrapper = styled.div`

  padding: 150px 25px;
  background: url(./images/A-min.png) #000;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 1000px;

  color: #fff;

  display: flex;
  height: 100vh !important;
  justify-content: center;
  align-items: baseline;
  
  padding: 0 !important;
  padding-top: 150px !important;


  
  .scrollIconAnim
  {
    position: absolute;
    bottom: 40px;
  }
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

  
.button.buttonMimas {
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  overflow: hidden;
  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  background: #000000;
}
.button.buttonMimas span {
  position: relative;
  display: flex;
  align-items: center;
}
.button.buttonMimas span > svg {
  width: 32px;
  margin-right: 10px;
}
.button.buttonMimas span > svg path {
  fill: #ffffff;
}
.button.buttonMimas::before {
  content: "";
  background: #586AEA;
  width: 120%;
  left: -10%;
  transform: skew(30deg);
  transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
}
.button.buttonMimas:hover {
  color: #0bd488;
}
.button.buttonMimas:hover::before {
  transform: translate3d(100%, 0, 0);
}
.button.buttonMimas:hover span > svg path {
  fill: #000000;
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


a.button {
  text-decoration: none;
}

.button {
  pointer-events: auto;
  cursor: pointer;
  background: #e7e7e7;
  border: none;
  padding: 4px 16px;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
}
.button::before, .button::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.button.buttonMimas {
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  overflow: hidden;
  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  background: #ffffff;
}
.button.buttonMimas span {
  position: relative;
  display: flex;
  align-items: center;
}
.button.buttonMimas span > svg {
  width: 32px;
  margin-right: 10px;
}
.button.buttonMimas span > svg path {
  fill: #ffffff;
}
.button.buttonMimas::before {
  content: "";
  background: #586AEA;
  width: 120%;
  left: -10%;
  transform: skew(30deg);
  transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
}
.button.buttonMimas:hover {
  color: #000000;
}
.button.buttonMimas:hover::before {
  transform: translate3d(100%, 0, 0);
}
.button.buttonMimas:hover span > svg path {
  fill: #000000;
}
`;
const HeroSection = () => {
  
  return (
    <Wrapper id="hero" data-aos="fade-up">
      <div >
      <h1 className="title" data-aos="fade-down">
        TRASH <span className="panda">PANDA </span>
        GANG
      </h1>
      <p className="text" data-aos="fade-down">
        Trash Panda Gang focuses on building a community where growth around knowledge and self-development is a priority.{" "}
        <br />
        They are going to conquer the Metaverse with their whole Gang.
        
      </p>
      <div className="text-center mt-2">
        <a className="button buttonMimas" rel="noreferrer" href="https://discord.gg/trashpandagang" target="_blank"><span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_151_363)"><path d="M25.0101 7.86639C23.3526 7.11889 21.576 6.56639 19.718 6.25222C19.7015 6.24904 19.6844 6.25109 19.669 6.25808C19.6537 6.26506 19.6409 6.27665 19.6325 6.29122C19.4049 6.69097 19.1514 7.21205 18.9738 7.62372C17.0033 7.32931 15 7.32931 13.0295 7.62372C12.8316 7.16749 12.6085 6.72263 12.3611 6.29122C12.3527 6.27647 12.34 6.26462 12.3248 6.25727C12.3095 6.24991 12.2923 6.2474 12.2755 6.25005C10.4187 6.56422 8.64203 7.11672 6.98345 7.8653C6.96918 7.87129 6.95708 7.88149 6.94878 7.89455C3.57745 12.8508 2.65337 17.6846 3.10728 22.4578C3.10855 22.4695 3.11217 22.4808 3.11795 22.491C3.12372 22.5013 3.13152 22.5103 3.14087 22.5174C5.10862 23.95 7.3034 25.0414 9.63328 25.7457C9.64952 25.7507 9.6669 25.7507 9.68313 25.7457C9.69936 25.7407 9.71371 25.7309 9.72428 25.7176C10.2248 25.0459 10.6711 24.3363 11.0524 23.591C11.0752 23.5476 11.0535 23.4956 11.008 23.4783C10.3082 23.2148 9.63012 22.8967 8.98003 22.5271C8.96835 22.5205 8.95851 22.511 8.95139 22.4996C8.94426 22.4882 8.94009 22.4752 8.93923 22.4618C8.93837 22.4483 8.94085 22.4349 8.94646 22.4227C8.95207 22.4105 8.96063 22.3998 8.97137 22.3917C9.10787 22.291 9.24437 22.1859 9.37437 22.0808C9.38607 22.0714 9.40016 22.0653 9.41508 22.0634C9.43 22.0615 9.44516 22.0638 9.45887 22.07C13.7131 23.981 18.3205 23.981 22.525 22.07C22.5387 22.0634 22.554 22.0608 22.5691 22.0626C22.5843 22.0643 22.5986 22.0702 22.6105 22.0797C22.7405 22.1859 22.876 22.291 23.0135 22.3917C23.0244 22.3997 23.0331 22.4102 23.0389 22.4223C23.0446 22.4344 23.0473 22.4478 23.0467 22.4612C23.0461 22.4746 23.0421 22.4876 23.0352 22.4991C23.0282 22.5107 23.0186 22.5203 23.007 22.5271C22.3592 22.8998 21.6854 23.2151 20.9779 23.4772C20.9671 23.4812 20.9572 23.4874 20.9489 23.4955C20.9406 23.5035 20.9342 23.5133 20.93 23.524C20.9258 23.5348 20.9239 23.5463 20.9245 23.5579C20.9251 23.5694 20.9282 23.5807 20.9335 23.591C21.3235 24.3352 21.7699 25.0437 22.2606 25.7165C22.2708 25.7303 22.285 25.7406 22.3013 25.746C22.3176 25.7515 22.3352 25.7517 22.3516 25.7468C24.6855 25.0444 26.8839 23.9526 28.8538 22.5174C28.8634 22.5107 28.8715 22.502 28.8774 22.4919C28.8834 22.4818 28.8872 22.4705 28.8884 22.4589C29.4301 16.9404 27.9806 12.1456 25.0437 7.89672C25.0365 7.88291 25.0246 7.87215 25.0101 7.86639ZM11.6884 19.5512C10.4079 19.5512 9.35162 18.3931 9.35162 16.9729C9.35162 15.5516 10.3873 14.3946 11.6884 14.3946C12.9992 14.3946 14.0457 15.5613 14.0251 16.9729C14.0251 18.3942 12.9894 19.5512 11.6884 19.5512ZM20.3279 19.5512C19.0464 19.5512 17.9912 18.3931 17.9912 16.9729C17.9912 15.5516 19.0258 14.3946 20.3279 14.3946C21.6388 14.3946 22.6853 15.5613 22.6647 16.9729C22.6647 18.3942 21.6399 19.5512 20.3279 19.5512Z" fill="white"></path></g><defs><clipPath id="clip0_151_363"><rect width="26" height="26" fill="white" transform="translate(3 3)"></rect></clipPath></defs></svg>Join Our Discord</span></a>
      </div>
      {/*<MyCountDown dayCount="April 12, 2022 20:00:00" />*/}

      <br />
      <br />
      

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
      <div className="scrollIconAnim animate__bounce animation animate__duration-1500 animate__infinite"><svg xmlns="http://www.w3.org/2000/svg" width="27" height="48" viewBox="0 0 27 48" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M25.3373 33.516C26.0338 34.2125 26.0338 35.3417 25.3373 36.0382L13.3755 48L1.4137 36.0382C0.717215 35.3417 0.717215 34.2125 1.4137 33.516C2.11018 32.8195 3.23939 32.8195 3.93588 33.516L13.3755 42.9556L22.8151 33.516C23.5116 32.8195 24.6408 32.8195 25.3373 33.516Z" fill="#0bd488"></path><path fillRule="evenodd" clipRule="evenodd" d="M25.1844 11.9618C25.8809 12.6583 25.8809 13.7875 25.1844 14.484L13.2227 26.4458L1.26086 14.484C0.564383 13.7875 0.564383 12.6583 1.26086 11.9618C1.95734 11.2653 3.08656 11.2653 3.78304 11.9618L13.2227 21.4014L22.6623 11.9618C23.3588 11.2653 24.488 11.2653 25.1844 11.9618Z" fill="#0bd488"></path></svg></div>
    </Wrapper>
  );
};
export default HeroSection;
