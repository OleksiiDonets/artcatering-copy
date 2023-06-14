import Link from 'next/link'
import { Logo } from '@/components/layout/DomainLogo/DomainLogo.style';

export const DomainLogo = ({ isHome = true}) => {
  if(isHome){
    return (
      <div>
        <Logo>Art catering</Logo>
      </div>
    )
  }
  return (
    <Link href='/' prefetch>
        <Logo>Art catering</Logo>
    </Link>
  )
}