import { ScreenBg } from '@/components/common/ScreenBg/ScreenBg';
import { ImageItem, VideoBg} from '@/types/common';
import { ScreenWrap, TextWrap } from '@/components/common/FirstScreenHome/FirstScreenHome.style';
export interface IFirstScreen {
  data: {
    firstScreenBackgrounds: {
      image: ImageItem;
      video: VideoBg;
      embedVideo: string;
    }
    firstScreenSubtitle: string;
    firstScreenText: string;
    firstScreenTitle: string;
  }
};

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