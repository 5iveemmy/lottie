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
  Uni,
  UniWrap,
} from "./BikeKit.elements";
// import MidBikes from "./MidBikes";
// import universal from "../../images/universal.png";
import Biker from "./Biker";
import Lottie from "react-lottie";
import animationData from "../../lotties/rider.json";

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
                  on mobile and online for everyone. To us, it's <br /> not just
                  work. We take pride <br /> in the solutions we deliver
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
    </>
  );
};

export default Hybrid;
