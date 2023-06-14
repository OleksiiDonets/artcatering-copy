import { ReactNode } from 'react'
import { AppContainer } from '@/components/layout/Container/Container.style';

interface IContainer {
  children: ReactNode;
  size?: string;
  className?: string;
  padding?: string;
}

export const Container = ({ children, size, className, padding }: IContainer) => {
  return (
    <AppContainer>
      { children }
    </AppContainer>
  )
}