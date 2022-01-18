import React from "react";
import {
  ForHybrid,
  HybridBikes,
  HybridBikesWrap,
  HybridButton,
  HybridButtonDiv,
  HybridContainer,
  HybridHead,
  HybridPara,
  HybridWrap,
} from "./BikeKit.elements";
import MidBikes from "./MidBikes";
import universal from "../../images/universal.png";
import Biker from "./Biker";

const Hybrid = () => {
  return (
    <>
      <HybridContainer>
        <ForHybrid>
          <HybridWrap>
            <MidBikes
              src={universal}
              alt={"Universal Bike"}
              price="$750.00"
              BikeName="Universal eBike Kit"
            />
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
