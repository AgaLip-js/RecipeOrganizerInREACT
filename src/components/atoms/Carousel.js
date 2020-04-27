import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import recipe1 from "../../assets/pictures/recipe1.jpg";
import recipe2 from "../../assets/pictures/recipe2.jpg";
import recipe3 from "../../assets/pictures/recipe3.jpg";
import recipe4 from "../../assets/pictures/recipe4.jpg";
import recipe5 from "../../assets/pictures/recipe5.jpg";
import recipe6 from "../../assets/pictures/recipe6.jpg";
import styled, { css } from "styled-components";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        display: "block",
        zIndex: "99",
        right: "0px",
        borderRadius: "50%",
        border: "none",
        position: "absolute",
        cursor: "pointer",
        background: "transparent",
      }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: "99",
        left: "0px",
        borderRadius: "50%",
        border: "none",
        position: "absolute",
        cursor: "pointer",
        background: "transparent",
      }}
      onClick={onClick}
    />
  );
}

const StyledImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  :after {
    content: "";
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fcfcfca6;
    opacity: 0;
    right: 0;
    transition: transform 0.2s ease-out;
    transition: opacity 0.2s linear;
    will-change: transform;
    top: 0%;
    border-radius: 5px;
  }
  :hover::after {
    opacity: 0.75;
    transition: opacity 0.2s linear;
    z-index: 2;
    cursor: pointer;
  }
  :hover > p {
    color: rgb(242, 162, 44);
    font-weight: 500;
    background: white;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
`;

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    const SliderStyle = styled(Slider)`
      width: 100%;
      padding-top: 20px;
      overflow: visible;
      height: fit-content;
      position: relative;
      display: flex;
    `;
    const StyledTitle = styled.p`
      position: relative;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      padding: 10px;
      border-radius: 5px;
      color: black;
      top: -15%;
      background: white;
      z-index: 10;
      width: 100%;
      height: 15%;
      transition: all 0.2s linear;
      cursor: pointer;
    `;

    return (
      <SliderStyle {...settings}>
        <StyledImageContainer>
          <StyledImage src={recipe1} />
          <StyledTitle>Przepis 1</StyledTitle>
        </StyledImageContainer>
        <StyledImageContainer>
          <StyledImage src={recipe2} />
          <StyledTitle>Przepis 2</StyledTitle>
        </StyledImageContainer>
        <StyledImageContainer>
          <StyledImage src={recipe3} />
          <StyledTitle>Przepis 3</StyledTitle>
        </StyledImageContainer>
        <StyledImageContainer>
          <StyledImage src={recipe4} />
          <StyledTitle>Przepis 4</StyledTitle>
        </StyledImageContainer>
        <StyledImageContainer>
          <StyledImage src={recipe5} />
          <StyledTitle>Przepis 5</StyledTitle>
        </StyledImageContainer>
        <StyledImageContainer>
          <StyledImage src={recipe6} />
          <StyledTitle>Przepis 6</StyledTitle>
        </StyledImageContainer>
      </SliderStyle>
    );
  }
}

export default SimpleSlider;
