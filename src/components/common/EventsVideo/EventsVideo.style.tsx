import styled from "styled-components";

export const EventsVideoWrap = styled.div`
  padding-top:  5rem;
  padding-bottom: 8rem;
  background-color: var(--pink-color);
  font-family: var(--font-playfair);
`;
export const EventsVideoTitle = styled.div`
  font-size: 46px;
  color: #000000;
  text-align: center;
  margin-bottom: 3rem;
  @media screen and (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;
export const EventsVideoItems = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  margin: 0 auto;
  span {
    font-weight: 300;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
  iframe {
    border: none;
  }
  &>div{
    display: flex;
    flex-direction: column;
    text-align: left;
    max-width: 36rem;
    width: 100%;
    &>div{
      height: 315px;
      margin-bottom: 2.5rem;
    }
  }
`;