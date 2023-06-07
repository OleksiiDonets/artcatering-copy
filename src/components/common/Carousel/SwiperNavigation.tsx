import { useSwiper } from "swiper/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

const ButtonLeft = styled.button`
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
const ButtonRight = styled.button`
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
const ButtonIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1.25rem;
  height: 1.25rem;
  transform: translate(-50%, -50%);
`;
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