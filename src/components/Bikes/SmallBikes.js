import React from "react";
import { SmallBike, SmallWrap, SmallImg, BikeName } from "./BikeKit.elements";

const SmallBikes = ({ src, alt, bikeName }) => {
  return (
    <SmallBike>
      <SmallWrap>
        <SmallImg src={src} alt={alt}></SmallImg>
      </SmallWrap>
      <BikeName>{bikeName}</BikeName>
    </SmallBike>
  );
};

export default SmallBikes;
