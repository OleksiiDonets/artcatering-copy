import { ScreenBg } from '@/components/common/ScreenBg/ScreenBg';
import { ImageBg, VideoBg } from '@/types/common';
import styled from 'styled-components';

export interface IFirstScreen {
  data: {
    firstScreenBackgrounds: {
      image: ImageBg;
      video: VideoBg;
      embedVideo: string;
    }
    firstScreenSubtitle: string;
    firstScreenText: string;
    firstScreenTitle: string;
  }
};

const ScreenWrap = styled.div`
  position: relative;
  height: 100vh;
`;
const TextWrap = styled.div`
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

export const FirstScreen = ({data}: IFirstScreen) => {
  const { firstScreenTitle,firstScreenSubtitle, firstScreenText, firstScreenBackgrounds } = data;
  return (
    <ScreenWrap>
      <ScreenBg items={firstScreenBackgrounds}/>
      <TextWrap >
        <div className="title">
          <h1>{ firstScreenTitle}</h1>
          <span>{ firstScreenSubtitle }</span>
        </div>
        <div>
          <h3>{ firstScreenText }</h3>
        </div>
      </TextWrap>
    </ScreenWrap>
  )
}