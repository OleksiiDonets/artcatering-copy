import styled from "styled-components";

export const ScreenWrap = styled.div`
  position: relative;
  height: 100vh;
`;
export const TextWrap = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX( -50%);
  font-family: var(--font-cormorant);
  font-size: 1.5rem;
  line-height: 2rem;
  display: none;
  h3,
  h1{
    font-size: 6rem;
    line-height: 1;
  }
  span {
    font-size: 3rem;
    line-height: 1;
  }
`;