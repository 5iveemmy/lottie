import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const HeroSect = styled.div`
  cursor: pointer;
`;

// Dummy, Electric , Your, Left

export const HeroSectContainer = styled.div`
  display: flex;
`;

export const Left = styled.div``;

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
`;

export const Form = styled.form``;

export const FormWrap = styled.div`
  position: relative;
`;

export const FormInput = styled.input`
  border-radius: 100px;
  width: 400px;
  padding: 17px 40px;
  border: 0.5px solid #c2cfe0;
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
  left: 42%;
  top: 14%;
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
