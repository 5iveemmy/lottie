import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  height: 8.5rem;
  /* background-color: red; */
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  ${Container}
`;

export const NavLogo = styled.div`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 6.5rem;
`;

export const NavIcon = styled.div`
  background-color: #ffbd37;
  padding: 2px 9px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
`;

export const Ebike = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #233348;
`;

export const NavIconB = styled.p`
  color: white;
  font-weight: 700;
  font-size: 26px;
  margin: 0;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 140%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 98vh;
    position: absolute;
    top: 95px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #ffbd37;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #ffbd37;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: ${({ boldColor }) => (boldColor ? "#233348" : "#7D7987")};
  opacity: ${({ noFade }) => (noFade ? "normal" : "0.5")};
  font-weight: ${({ heavy }) => (heavy ? "bold" : "400")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    opacity: 1;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;
