import React, { useEffect, useRef } from "react";
import { Container } from "../../globalStyles";

import {
  Dummy,
  Electric,
  FindBtn,
  Form,
  FormInput,
  FormWrap,
  HeroSect,
  HeroSectContainer,
  Left,
  SearchIcon,
  Your,
} from "./HeroSection.elements";
// import lottie from "lottie-web";

const HeroSection = () => {
  // const container = useRef(null);
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: container.current,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     animationData: require("../../lotties/Header.json"),
  //   });
  // }, []);

  return (
    <>
      <HeroSect>
        <Container>
          <HeroSectContainer>
            <Left>
              <Your>Your Bike</Your>
              <Electric>Electric Update</Electric>
              <Dummy>
                Dummy text progressive and affordable healthcare, accessible on
                mobile and onine for everyone
              </Dummy>
              <Form>
                <FormWrap>
                  <FormInput
                    name="search"
                    type="text"
                    placeholder="Search Bike or anything "
                  />
                  <SearchIcon />
                  <FindBtn>Find</FindBtn>
                </FormWrap>
              </Form>
            </Left>
            {/* <div className="container" ref={container}></div> */}
          </HeroSectContainer>
        </Container>
      </HeroSect>
    </>
  );
};

export default HeroSection;
