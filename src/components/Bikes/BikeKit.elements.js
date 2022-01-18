import styled from "styled-components";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const BikeKits = styled.div``;

export const BikeKitWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Uni = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
  width: 32%;
  box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.06);
`;

export const UniWrap = styled.div``;

export const UniHead = styled.h3`
  font-weight: 700;
`;

export const BikeText = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.span``;

export const PriceTag = styled.p`
  color: #7d7987;
`;

export const Num = styled.p`
  color: #233348;
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

export const BikeImg = styled.img``;

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
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const OtherWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SmallBike = styled.div``;

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

export const ForHybrid = styled.div``;

export const HybridWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HybridBikes = styled.div`
  width: 50%;
`;

export const HybridBikesWrap = styled.div``;

export const HybridHead = styled.h3`
  font-weight: 700;
  font-size: 36px;
  padding-bottom: 25px;
`;

export const HybridPara = styled.p`
  color: #7d7987;
  line-height: 2;
  width: 80%;
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
