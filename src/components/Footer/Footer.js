import React from "react";
import { Container } from "../../globalStyles";
import { Ebike, NavIcon, NavIconB, NavLogo } from "../Navbar/Navbar.elements";
import {
  BikeFooter,
  Company,
  FooterDiv,
  FooterDotDiv,
  FooterDotImg,
  FooterLinks,
  FooterLinksHeader,
  FooterPara,
  FooterWrap,
  Help,
} from "./Footer.elements";
import footerDot from "../../images/footerDot.png";

const Footer = () => {
  return (
    <>
      <FooterDiv>
        <FooterDotDiv>
          <FooterDotImg src={footerDot} />
        </FooterDotDiv>
        <Container>
          <FooterWrap>
            <BikeFooter>
              <NavLogo to="/">
                <NavIcon iconDivFooter>
                  <NavIconB Bfooter> B </NavIconB>
                </NavIcon>
                <Ebike forFooter>eBike</Ebike>
              </NavLogo>
              <FooterPara>
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </FooterPara>
            </BikeFooter>
            <Company>
              <FooterLinksHeader>Company</FooterLinksHeader>
              <FooterLinks>Product</FooterLinks>
              <FooterLinks>Bike Type</FooterLinks>
              <FooterLinks>About</FooterLinks>
              <FooterLinks>Contact</FooterLinks>
            </Company>
            <Help>
              <FooterLinksHeader>Help</FooterLinksHeader>
              <FooterLinks>Help center</FooterLinks>
              <FooterLinks>Contact support</FooterLinks>
              <FooterLinks>Instructions</FooterLinks>
              <FooterLinks>How it works</FooterLinks>
            </Help>
          </FooterWrap>
        </Container>
      </FooterDiv>
    </>
  );
};

export default Footer;
