import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavIconB,
  Ebike,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{ color: "#233348" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon>
                <NavIconB> B </NavIconB>
              </NavIcon>
              <Ebike>eBike</Ebike>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks
                  to="/"
                  inputColor="#233348"
                  opaci="normal"
                  weight="bold"
                >
                  Product
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">Bike Type</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">About us</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">Testimonials</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">Contact</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
