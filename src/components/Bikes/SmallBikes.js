import React from "react";
import { SmallBike, SmallWrap, SmallImg, BikeName } from "./BikeKit.elements";

const SmallBikes = ({ src, alt, bikeName, firstItem, lastBike }) => {
  return (
    <SmallBike opacity={lastBike && "0.2"}>
      <SmallWrap border={firstItem && "2px solid #fcb72b"}>
        <SmallImg src={src} alt={alt}></SmallImg>
      </SmallWrap>
      <BikeName>{bikeName}</BikeName>
    </SmallBike>
  );
};

export default SmallBikes;
