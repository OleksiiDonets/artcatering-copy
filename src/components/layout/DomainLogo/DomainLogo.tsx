import Link from "next/link"

export const DomainLogo = ({ isHome = true}) => {
  if(isHome){
    return (
      <div>
        <span className="font-playair font-bold text-black text-xl md:text-2xl uppercase">Art catering</span>
      </div>
    )
  }
  return (
    <Link href='/'>
        <span className="font-playfair font-bold text-black text-xl md:text-2xl uppercase">Art catering</span>
    </Link>
  )
}