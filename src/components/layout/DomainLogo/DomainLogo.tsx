import Link from 'next/link'
import styled from 'styled-components';

const StyledLogo = styled.span`
  font-weight: bold;
  color: #000000;
  font-family: var(--font-playfair);
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-transform: uppercase;

  @media screen and ( min-width: 768px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const DomainLogo = ({ isHome = true}) => {
  if(isHome){
    return (
      <div>
        <StyledLogo>Art catering</StyledLogo>
      </div>
    )
  }
  return (
    <Link href='/'>
        <StyledLogo>Art catering</StyledLogo>
    </Link>
  )
}