import Image from "next/image"
import Hamburger from "../../../public/hamburger.png"

interface HeaderNavClosedProps {
  toggleOpen: () => void
}

export default function HeaderNavClosed({ toggleOpen }: HeaderNavClosedProps) {
  return (
    <>
      <div>
        We&apos;re on a mission
      </div>
      <div className="md:hidden">
        <Image
          src={Hamburger}
          alt='hamburger mobile meu'
          onClick={() => toggleOpen()}
        />
      </div>
    </>
  )
}