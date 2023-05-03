import { faTruckMedical } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

interface ITopMenu {
  items: Menu;
  isMobile: boolean;
  showMenu: boolean;
  toggleMenu: () => void;
}
export const TopMenu = ({items, isMobile, showMenu, toggleMenu}: ITopMenu) => {
  const toggleLink = () => {
    toggleMenu();
  }
  return (
    <nav className={`grid h-screen md:h-auto absolute z-10 bg-white  w-full md:position-unset transition-all ease-in-out ${classNames({ "left-0": showMenu, "-left-full": !showMenu })}`}>
     <ul className="grid row-auto h-[calc(100vh-25em)] px-5 py-5 w-full relative z-20 md:h-auto md:grid-flow-col md:px-0 md:py-0">
      {
        items.map(item => (
          <li key={item.id} className="text-left md:text-center" onClick={toggleLink}>
            <a href={item.url} className="font-montserrat text-sm uppercase relative after:absolute after:bg-black after:bottom-0 after:h-[1px] after:left-2/4 after:right-2/4 after:transition-all after:ease-out hover:after:left-0 hover:after:right-0 active:after:right-0 active:after:left-0">
              <span>{item.label}</span>
            </a>
          </li>
        ))
      } 
     </ul> 
    </nav>
  )
}