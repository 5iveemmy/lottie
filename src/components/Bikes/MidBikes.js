import React from "react";
import {
  Uni,
  UniWrap,
  BikeImg,
  UniHead,
  BikeText,
  Price,
  PriceTag,
  Num,
  Order,
  OrderBtn,
} from "./BikeKit.elements";

const MidBikes = ({ src, lastItem, alt, price, BikeName }) => {
  return (
    <>
      <Uni opacity={lastItem && "0.2"}>
        <UniWrap>
          <UniHead>{BikeName}</UniHead>
          <BikeImg src={src} alt={alt} />
          <BikeText>
            <Price>
              <PriceTag>Price</PriceTag>
              <Num>{price}</Num>
            </Price>
            <Order>
              <OrderBtn>Order</OrderBtn>
            </Order>
          </BikeText>
        </UniWrap>
      </Uni>
    </>
  );
};

export default MidBikes;
