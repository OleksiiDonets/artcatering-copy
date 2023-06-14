import { useSwiper } from "swiper/react"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ButtonIcon, ButtonLeft, ButtonRight } from "@/components/common/Carousel/Carousel.style";

export const SwiperNavigation = () => {
  const swiper = useSwiper();
  return (
    <div className="nav-block">
     <ButtonLeft type="button" onClick={()=> swiper.slidePrev()}>
        <ButtonIcon color="#000" icon={faChevronLeft} size="xs"/>
      </ButtonLeft>
      <ButtonRight type="button" onClick={()=> swiper.slideNext()}>
        <ButtonIcon color="#000" icon={faChevronRight} size="xs"/>
      </ButtonRight>
    </div>
  )
}