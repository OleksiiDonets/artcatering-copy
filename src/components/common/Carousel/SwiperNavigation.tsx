import { useSwiper } from "swiper/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const SwiperNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="nav-block">
     <button type="button" onClick={()=> swiper.slidePrev()}  className="absolute top-1/2 left-2 -translate-y-2/4 h-10 w-10 rounded-full bg-zinc-200 z-50">
        <FontAwesomeIcon color="#000" icon={faChevronLeft} size="xs" className="absolute left-2/4 top-2/4 w-5 h-5 -translate-x-1/2 -translate-y-1/2"/>
      </button>
      <button type="button" onClick={()=> swiper.slideNext()}  className="absolute top-1/2 right-2 h-10 w-10 -translate-y-2/4 rounded-full bg-zinc-200 z-50">
        <FontAwesomeIcon color="#000" icon={faChevronRight} size="xs" className="absolute left-2/4 top-2/4 w-5 h-5 -translate-x-1/2 -translate-y-1/2"/>
      </button>
    </div>
    
  )
}