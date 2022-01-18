import React from "react";
import { Container } from "../../globalStyles";
import { BikeKitWrap, BikeKits } from "./BikeKit.elements";
import universal from "../../images/universal.png";
import brampton from "../../images/brampton.png";
import MidBikes from "./MidBikes";

const BikeKit = () => {
  return (
    <>
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
        </BikeKits>
      </Container>
    </>
  );
};

export default BikeKit;
