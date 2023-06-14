import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 3.5rem auto;
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
      max-width: 768px;
  }
  @media (min-width: 1024px) {
      max-width: 1024px;
  }
  @media (min-width: 1280px) {
      max-width: 1280px;
  }
  @media (min-width: 1536px) {
      max-width: 1536px;
  }
`;
export const SliderTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.875rem;
  line-height: 2.25rem;
  text-align: center;
  font-family: var(--font-playfair);
  font-weight: 700;
  margin-bottom: 50px;
  @media screen and ( min-width: 1024px){
    font-size: 42px;
  }
  h4{
    display: block;
  }
`;
export const SliderSubtitle = styled.span`
  font-family: var(--font-montserrat);
  font-weight: 300;
  margin-top: 1.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

export const SliderSubtitleSimple = styled.span`
  display: inline-block;
`;

export const ButtonLeft = styled.button`
  position: absolute;
  top: 50%;
  left: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  transform: translateY(-50%);
  background-color: rgb(228 228 231);
  border: none;
  border-radius: 100%;
  z-index: 50;
`;
export const ButtonRight = styled.button`
  position: absolute;
  top: 50%;
  right: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgb(228 228 231);
  transform: translateY(-50%);
  border: none;
  border-radius: 100%;
  z-index: 50;
  outline: none;
  cursor: pointer;
  &:focus{
    outline: none;
  }
`;
export const ButtonIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1.25rem;
  height: 1.25rem;
  transform: translate(-50%, -50%);
`;
