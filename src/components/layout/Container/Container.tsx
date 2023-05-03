import { ReactElement} from 'react'
import classNames from "classnames";


interface IContainer {
  children: JSX.Element | JSX.Element[];
  size?: string;
  className?: string;
  padding?: string;
}

export const Container = ({ children, size, className, padding }:IContainer) => {
  return (
    <div className={classNames('px-5 max-w-full lg:mx-auto lg:w-full lg:max-w-[1820px]', className, size, padding )}>
      { children }
    </div>
  )
}