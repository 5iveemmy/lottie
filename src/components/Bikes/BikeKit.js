import React from "react";
import { Container } from "../../globalStyles";
import {
  BikeKitWrap,
  BikeKits,
  Arrows,
  LeftIcon,
  LeftArrow,
  RightArrow,
  RightIcon,
  ArrowWrap,
  OtherBikes,
  OtherWrap,
  ForVector,
  VectorImg,
} from "./BikeKit.elements";
import universal from "../../images/universal.png";
import brampton from "../../images/brampton.png";
import MidBikes from "./MidBikes";
import small from "../../images/small.png";
import vector from "../../images/vector.png";
import SmallBikes from "./SmallBikes";

const BikeKit = () => {
  return (
    <>
      <ForVector>
        <VectorImg src={vector}></VectorImg>
      </ForVector>
      <Container>
        <BikeKits>
          <BikeKitWrap>
            <MidBikes
              src={universal}
              alt={"Universal Bike"}
              price="$750.00"
              BikeName="Universal eBike Kit"
            />
            <MidBikes
              src={brampton}
              alt={"Brampton Bike"}
              price="$750.00"
              BikeName="Brampton eBike Kit"
            />
            <MidBikes
              src={brampton}
              alt={"Additional Bike"}
              price="$250.00"
              BikeName="Additional eBike Kit"
            />
          </BikeKitWrap>
          <Arrows>
            <ArrowWrap>
              <LeftArrow>
                <LeftIcon></LeftIcon>
              </LeftArrow>
            </ArrowWrap>
            <ArrowWrap>
              <RightArrow>
                <RightIcon></RightIcon>
              </RightArrow>
            </ArrowWrap>
          </Arrows>
        </BikeKits>

        <OtherBikes>
          <OtherWrap>
            <SmallBikes src={small} bikeName="Hybrid Bikes" />
            <SmallBikes src={small} bikeName="Fixie Bikes" />
            <SmallBikes src={small} bikeName="Folding Bikes" />
            <SmallBikes src={small} bikeName="Mount Bikes" />
            <SmallBikes src={small} bikeName="City Bikes" />
          </OtherWrap>
        </OtherBikes>
      </Container>
    </>
  );
};

export default BikeKit;
