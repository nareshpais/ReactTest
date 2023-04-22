import Image from "next/image"
import MenuClose from "../../../public/menuClose.png"

interface HeaderNavOpenProps {
  toggleOpen: () => void
}

export default function HeaderNavOpen({ toggleOpen }: HeaderNavOpenProps) {
  return (
    <>
      <div>
        Menu
      </div>
      <div>
        <Image src={MenuClose} alt="Close menu" onClick={() => toggleOpen()} />
      </div>
    </>
  )
}