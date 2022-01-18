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

const MidBikes = ({ src, alt, price, BikeName, padding }) => {
  return (
    <>
      <Uni>
        <UniWrap>
          <UniHead>{BikeName}</UniHead>
          <BikeImg src={src} alt={alt} />
          <BikeText>
            <Price>
              <PriceTag>Price</PriceTag>
              <Num>{price}</Num>
            </Price>
            <Order top>
              <OrderBtn>Order</OrderBtn>
            </Order>
          </BikeText>
        </UniWrap>
      </Uni>
    </>
  );
};

export default MidBikes;
