import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
const Wrapper = styled.div`
  .image-container {
    display: flex;
    align-items: center;
  }
  .image {
    border-radius: 8px;
    margin: 15px 0;
    width: 300px;
  }
  @media only screen and (max-width: 1399px) {
    .image {
      width: 240px;
    }
  }
  @media only screen and (max-width: 767px) {
    .image {
      width: 200px;
    }
  }
  @media only screen and (max-width: 450px) {
    .image {
      width: 170px;
    }
  }
`;

const Gallary = () => {
  const gallary = [
    "./images/birds_satin-min.png",
    "./images/furcoat_yellow-min.png",
    "./images/gucci_green-min.png",
    "./images/backastro.jpeg",
    "./images/ironman_red.png",
    "./images/puffer_pink-min.png",
    "./images/samurai_lord-min.png",
    "./images/soldier01-min.png",
    "./images/techwear_blue-min.png",
    "./images/tpg 1-min.png",
    
  ];
  const gallery = [
    "./images/tpg 2-min.png",
    "./images/tpg 3-min.jpeg",
    "./images/tpg 4-min.png",
    "./images/tpg 5-min.png",
    "./images/tpg 6-min.png",
    "./images/tpg7-min.jpeg",
    "./images/tpg 8-min.png",
    "./images/tpg 9-min.png",        
  ];
  return (
    <Wrapper>
      <Marquee speed={120} gradientColor={[""]} data-aos="fade-up">
        <div className="image-container">
          {" "}
          {gallary.map((el, i) => (
            <div key={i} className="mx-2" data-aos="fade-down">
              <img src={el} alt="#" className="image" />
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee gradientColor={[""]} speed={120} direction='right' style={{overflowY:"hidden"}}>
        <div className="image-container" data-aos="fade-up">
          {gallery.map((el, i) => (
            <div key={i} className="mx-2 w-100">
              <img src={el} alt="#" className="image" />
            </div>
          ))}
        </div>
      </Marquee>
    </Wrapper>
  );
};
export default Gallary;
