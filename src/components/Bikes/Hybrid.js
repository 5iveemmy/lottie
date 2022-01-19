import React from "react";
import {
  BikeText,
  ForHybrid,
  HybridBikes,
  HybridBikesWrap,
  HybridButton,
  HybridButtonDiv,
  HybridContainer,
  HybridHead,
  HybridPara,
  HybridWrap,
  LottieWrap,
  Num,
  Order,
  OrderBtn,
  Price,
  PriceTag,
  RightVectorDiv,
  RightVectorImg,
  Uni,
  UniWrap,
} from "./BikeKit.elements";
import Biker from "./Biker";
import Lottie from "react-lottie";
import animationData from "../../lotties/rider.json";
import rightVector from "../../images/right.png";

const Hybrid = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <HybridContainer>
        <ForHybrid>
          <HybridWrap>
            <Uni>
              <UniWrap>
                <LottieWrap>
                  <Lottie options={defaultOptions} height={300} width={300} />
                </LottieWrap>
                <BikeText top>
                  <Price>
                    <PriceTag>Price</PriceTag>
                    <Num>$750</Num>
                  </Price>
                  <Order>
                    <OrderBtn>Order</OrderBtn>
                  </Order>
                </BikeText>
              </UniWrap>
            </Uni>
            <HybridBikes>
              <HybridBikesWrap>
                <HybridHead> Hybrid Bikes</HybridHead>
                <HybridPara>
                  {" "}
                  Dummy Text progressive, and affordable healthcare, accessible
                  on mobile and online for everyone. To us, it's not just work.
                  We take pride in the solutions we deliver
                </HybridPara>
                <HybridButtonDiv>
                  <HybridButton>Learn more</HybridButton>
                </HybridButtonDiv>
              </HybridBikesWrap>
            </HybridBikes>
          </HybridWrap>
        </ForHybrid>
        <Biker />
      </HybridContainer>
      <RightVectorDiv>
        <RightVectorImg src={rightVector} />
      </RightVectorDiv>
    </>
  );
};

export default Hybrid;
