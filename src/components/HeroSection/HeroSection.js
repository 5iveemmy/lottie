import React from "react";
import { Container } from "../../globalStyles";
import Lottie from "react-lottie";
import animationData from "../../lotties/helmet.json";
import dotss from "../../images/dotss.png";
import {
  DotssImg,
  Dummy,
  Electric,
  FindBtn,
  ForDotss,
  Form,
  FormInput,
  FormWrap,
  HeroSect,
  HeroSectContainer,
  Left,
  LeftHeader,
  Right,
  SearchIcon,
  Your,
} from "./HeroSection.elements";

const HeroSection = () => {
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
      <HeroSect>
        <ForDotss>
          <DotssImg src={dotss} />
        </ForDotss>
        <Container>
          <HeroSectContainer>
            <Left>
              <LeftHeader>
                <Your>Your Bike</Your>
                <Electric>Electric Update</Electric>
              </LeftHeader>
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

            <Right>
              <Lottie options={defaultOptions} height={400} width={400} />
            </Right>
          </HeroSectContainer>
        </Container>
      </HeroSect>
    </>
  );
};

export default HeroSection;
