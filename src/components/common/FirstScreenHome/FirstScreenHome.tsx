import { ScreenBg } from "../ScreenBg/ScreenBg"

interface IFirstScreen {
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
}
export const FirstScreen = ({data}: IFirstScreen) => {
  const { firstScreenTitle,firstScreenSubtitle, firstScreenText, firstScreenBackgrounds } = data;
  return (
    <div className="relative h-screen">
      <ScreenBg items={firstScreenBackgrounds}/>
      <div className="content font-cormorant text-2xl text-white text-center absolute bottom-40 left-2/4 -translate-x-2/4 hidden">
        <div className="title">
          <h1 className="text-8xl">{ firstScreenTitle}</h1>
          <span className="text-5xl">{ firstScreenSubtitle }</span>
        </div>
        <div className="text text-8xl">
          <h3>{ firstScreenText }</h3>
        </div>
       
      </div>
    </div>
  )
}