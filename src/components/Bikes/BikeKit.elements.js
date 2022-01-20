import styled from "styled-components";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const ForVector = styled.div`
  position: absolute;
  top: 44rem;
  right: 60rem;

  @media screen and (max-width: 1200px) {
    right: 43rem;
    top: 60rem;
  }

  @media screen and (max-width: 860px) {
    right: 32rem;
    top: 67rem;
  }

  @media screen and (max-width: 860px) {
    right: 18rem;
  }
`;

export const VectorImg = styled.img``;

export const BikeKits = styled.div`
  padding-top: 50px;
`;

export const BikeKitWrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

export const Uni = styled.div`
  display: flex;
  z-index: 10;
  background-color: #fff;
  border-radius: 20px;
  cursor: pointer;
  padding: 20px;
  margin: 20px auto;
  width: 23rem;
  box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.06);
  opacity: ${({ opacity }) => opacity};

  &:hover {
    transform: scale(1.06);
    transition: all 0.4s ease-out;
    color: #1c2237;
  }
`;

export const UniWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const UniHead = styled.h3`
  font-weight: 700;
`;

export const BikeText = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 0.5px solid #c2cfe0;
  padding-top: 20px;
`;

export const Price = styled.span``;

export const PriceTag = styled.p`
  color: #7d7987;
`;

export const Num = styled.p`
  color: #233348;
  font-weight: 700;
`;

export const Order = styled.div``;

export const OrderBtn = styled.button`
  color: #233348;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  border-radius: 20px;
  padding: 10px 32px;
  background-color: #ffbd37;
  border: none;

  &:hover {
    background-color: #ffc857;
    transition: 0.4s ease-in-out;
  }
`;

export const BikeImg = styled.img`
  margin: auto;
`;

export const Arrows = styled.div`
  display: flex;
  justify-content: right;
`;

export const ArrowWrap = styled.div`
  padding: 8px;
`;

export const LeftArrow = styled.div`
  background-color: #ffe8b9;
  border-radius: 50%;
  padding: 8px 12px;
  cursor: pointer;
`;

export const LeftIcon = styled(BsArrowLeft)`
  font-size: 22px;
  color: #daa53a;
`;

export const RightArrow = styled.div`
  background-color: #ffbd37;
  border-radius: 50%;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #ffc857;
    transition: 0.4s ease-in-out;
  }
`;

export const RightIcon = styled(BsArrowRight)`
  font-size: 22px;
`;

export const OtherBikes = styled.div`
  padding-top: 8rem;
  padding-bottom: 50px;
`;

export const OtherWrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

export const SmallBike = styled.div`
  margin: 20px auto;
  opacity: ${({ opacity }) => opacity};
  cursor: pointer;

  &:hover {
    transform: scale(1.06);
    transition: all 0.4s ease-out;
    color: #1c2237;
  }
`;

export const SmallWrap = styled.div`
  background-color: #fff;
  padding: 10px 30px;
  box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  border: ${({ border }) => border};
`;

export const SmallImg = styled.img``;

export const BikeName = styled.p`
  text-align: center;
  padding-top: 10px;
  font-weight: 600;
  color: #233348;
`;

export const LottieWrap = styled.div`
  padding-bottom: 20px;
`;

export const ForHybrid = styled.div``;

export const HybridWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;

export const HybridBikes = styled.div`
  width: 50%;
  z-index: 10;

  @media screen and (max-width: 1200px) {
    width: auto;
  }
`;

export const HybridBikesWrap = styled.div``;

export const HybridHead = styled.h3`
  font-weight: 700;
  font-size: 36px;
  padding-bottom: 25px;

  @media screen and (max-width: 1200px) {
    text-align: center;
  }
`;

export const HybridPara = styled.p`
  color: #7d7987;
  line-height: 2;
  width: 80%;
  @media screen and (max-width: 1200px) {
    width: auto;
  }
`;

export const HybridContainer = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 45px;
  padding-right: 45px;
`;

export const HybridButtonDiv = styled.div`
  padding-top: 2rem;
`;

export const HybridButton = styled.button`
  background: transparent;
  border: 1.4px solid #fcb72b;
  border-radius: 55px;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  color: #fcb72b;
  padding: 13px 40px;

  &:hover {
    background-color: #fcb72b;
    color: white;
    transition: 0.5s ease-in-out;
  }
`;

export const RightVectorDiv = styled.div`
  position: absolute;
  top: 96rem;
  right: 0%;

  @media screen and (max-width: 1200px) {
    top: 147rem;
  }

  @media screen and (max-width: 960px) {
    top: 165rem;
  }
  @media screen and (max-width: 840px) {
    top: 189rem;
  }
  @media screen and (max-width: 570px) {
    top: 218rem;
  }
  /* @media screen and (max-width: 520px) {
    top: 229rem;
  } */
`;
export const RightVectorImg = styled.img``;
/* Bikers */

export const What = styled.div`
  padding-top: 100px;
  color: #fff;
`;

export const WhatContainer = styled.div`
  padding-left: 6rem;
  padding-right: 6rem;

  @media screen and (max-width: 1200px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const TiltDotDiv = styled.div`
  position: absolute;
  right: 3%;
  bottom: 86%;
`;

export const TiltDotImg = styled.img``;

export const WhatWrap = styled.div`
  background-color: #fcb72b;
  position: relative;
  padding: 70px 160px;
  border-radius: 10px;

  @media screen and (max-width: 850px) {
    padding: 50px 50px;
  }
`;

export const WhatHead = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 36px;
  text-align: center;

  @media screen and (max-width: 1200px) {
    font-size: 30px;
  }
`;

export const BikerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

export const BikerImgDiv = styled.div`
  padding-top: 20px;
  padding-right: 50px;
  text-align: center;

  @media screen and (max-width: 1200px) {
    padding-right: 0px;
  }
`;

export const BikerImg = styled.img`
  border-radius: 50%;
  border: 4px solid #fff;
`;

export const BikerName = styled.p`
  font-weight: 700;
`;

export const BikerTag = styled.span`
  opacity: 85%;
`;

export const BikerText = styled.p`
  width: 80%;
  line-height: 1.8;
  font-weight: 400;
  font-size: 18px;

  @media screen and (max-width: 1200px) {
    padding-top: 20px;
  }
`;

export const DotsWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  align-items: center;
`;

export const Dots = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90px;
`;

export const Dot = styled.p`
  background-color: #ffbe3b;
  border-radius: 50%;
  opacity: ${({ noFade }) => (noFade ? "normal" : "0.3")};
  height: 10px;
  width: 10px;
  padding-right: 10px;
`;

export const DotArrow = styled(BsArrowRight)`
  color: #ffbe3b;
  font-size: 28px;
  margin-left: 4.5rem;
  cursor: pointer;
`;
export const DotArrowLeft = styled(BsArrowLeft)`
  color: #ffbe3b;
  font-size: 28px;
  margin-right: 4.5rem;
  cursor: pointer;
  opacity: 0.2;
`;
