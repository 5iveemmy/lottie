import styled from "styled-components";

export const FooterDiv = styled.div`
  background-color: #fcb72b;
  color: white;
  padding-top: 5rem;
  padding-bottom: 5rem;
  position: relative;
`;

export const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 8rem;
  padding-right: 8rem;

  @media screen and (max-width: 950px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const FooterPara = styled.p`
  font-size: 18px;
  padding-top: 25px;
  line-height: 2;
`;

export const BikeFooter = styled.div`
  width: 24rem;
`;

export const Company = styled.ul``;

export const FooterLinksHeader = styled.h3`
  padding-bottom: 25px;
  font-weight: bold;
`;

export const Help = styled.ul``;

export const FooterLinks = styled.li`
  cursor: pointer;
  list-style: none;
  padding: 7px 0px;
`;

export const FooterDotDiv = styled.div``;

export const FooterDotImg = styled.img`
  position: absolute;
`;
