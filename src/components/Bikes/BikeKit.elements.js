import styled from "styled-components";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const ForVector = styled.div`
  position: absolute;
  top: 44rem;
  right: 60rem;
  opacity: 0.5;
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
  z-index: 10;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
  margin: 20px auto;
  width: 23rem;
  box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.06);
`;

export const UniWrap = styled.div``;

export const UniHead = styled.h3`
  font-weight: 700;
`;

export const BikeText = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${({ top }) => (top ? "20px" : "normal")};
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

  /* &:hover {
    background-color: #ffc857;
    transition: 0.4s ease-in-out;
  } */
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
`;

export const SmallWrap = styled.div`
  background-color: #fff;
  padding: 10px 30px;
  /* width: 20%; */
  box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
`;

export const SmallImg = styled.img``;

export const BikeName = styled.p`
  text-align: center;
  padding-top: 10px;
  font-weight: 600;
  color: #233348;
`;

export const LottieWrap = styled.div``;

export const ForHybrid = styled.div``;

export const HybridWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const HybridBikes = styled.div`
  width: 50%;

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
  padding-left: 80px;
  padding-right: 80px;
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

export const WhatWrap = styled.div`
  background-color: #fcb72b;
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
  margin-left: 4rem;
  cursor: pointer;
`;
