import React from "react";
import {
  BikerDiv,
  BikerImg,
  BikerImgDiv,
  BikerName,
  BikerTag,
  BikerText,
  DotArrow,
  Dots,
  DotsWrap,
  Dot,
  What,
  WhatHead,
  WhatWrap,
  WhatContainer,
  TiltDotDiv,
  TiltDotImg,
} from "./BikeKit.elements";

import biker from "../../images/biker.png";
import whiteDot from "../../images/whiteDot.png";

const Biker = () => {
  return (
    <>
      <What>
        <WhatContainer>
          <WhatWrap>
            <TiltDotDiv>
              <TiltDotImg src={whiteDot} />
            </TiltDotDiv>
            <WhatHead>What our customer are saying</WhatHead>
            <BikerDiv>
              <BikerImgDiv>
                <BikerImg src={biker}></BikerImg>
                <BikerName>Edward Newgate</BikerName>
                <BikerTag>Pro-Cycler</BikerTag>
              </BikerImgDiv>
              <BikerText>
                Dummy Text patient engagement app and web portal allow you to
                access information instantaneously (no tedeous form, long calls,
                or administrative hassle) and securely”
              </BikerText>
            </BikerDiv>
          </WhatWrap>
        </WhatContainer>
        <DotsWrap>
          <Dots>
            <Dot noFade />
            <Dot />
            <Dot />
            <Dot />
          </Dots>
          <DotArrow />
        </DotsWrap>
      </What>
    </>
  );
};

export default Biker;
