import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const HeroSect = styled.div`
  cursor: pointer;
  padding-bottom: 50px;
`;

export const ForDotss = styled.div`
  position: relative;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const DotssImg = styled.img`
  position: absolute;
`;

export const HeroSectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media screen and (max-width: 960px) {
    flex-wrap: wrap;
  }
`;

export const Left = styled.div`
  width: 51%;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const LeftHeader = styled.div`
  font-weight: 700;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Right = styled.div``;

export const Your = styled.p`
  font-size: 48px;
  color: #233348;
`;

export const Electric = styled.p`
  font-size: 48px;
  color: #233348;
`;

export const Dummy = styled.p`
  color: #7d7987;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 58%;
  line-height: 2;
  font-size: 18px;

  @media screen and (max-width: 960px) {
    width: auto;
  }
`;

export const Form = styled.form``;

export const FormWrap = styled.div`
  position: relative;
  width: 400px;
  display: flex;

  @media screen and (max-width: 475px) {
    width: 320px;
  }
`;

export const FormInput = styled.input`
  border-radius: 100px;
  width: 100%;
  padding: 17px 40px;
  border: 0.5px solid #c2cfe0;
  outline: none;

  &::placeholder {
    color: #c2cfe0;
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  color: #c2cfe0;
  position: absolute;
  left: 2%;
  top: 37%;
`;

export const FindBtn = styled.button`
  color: #233348;
  position: absolute;
  right: 0.45rem;
  top: 0.4rem;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  border-radius: 20px;
  padding: 10px 32px;
  background-color: #ffbd37;
  border: none;

  &:hover {
    background-color: #ffc857;
    transition: 0.4s ease-in-out;
  }
`;
