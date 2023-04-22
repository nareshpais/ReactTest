import Image from "next/image"
import { ReactNode, useState } from "react"


import Logo from "../../../public/nxodetor 1.png"

import { Roboto_Mono } from 'next/font/google'
import Link from 'next/link'
import HeaderNavClosed from "./headerNavClosed"
import HeaderNavOpen from "./headerNavOpen"
const RobotoMonoBase = Roboto_Mono({ weight: '400', subsets: ['latin'] })

const navLinks = [
  { id: 'genesis-pass', name: 'GENESIS pass', href: '/genesis-pass', active: true },
  { id: 'services', name: 'SERVICES', href: '/services', active: true },
  { id: 'projects', name: 'PROJECTS', href: '/projects', active: true },
  { id: 'nft', name: 'NFT', href: '/nft', active: true },
  { id: 'faq', name: 'FAQ', href: '/faq', active: true },
  { id: 'platform', name: 'PLATFORM', href: '/platform', active: false },
]

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {

  const [navIsOpen, setNavIsOpen] = useState(false)

  return (
    <div className={`flex flex-col bg-black text-white grow ${RobotoMonoBase.className} text-base min-h-full`}>
      <div className='flex py-4 px-8'>
        <div className='pr-4'>
          <Link href={`/`}>
            <Image
              src={Logo}
              alt='Project logo'
            />
          </Link>
        </div>
        <div className='
          flex grow justify-between items-center
          '>
          {navIsOpen ? (
            <HeaderNavOpen toggleOpen={() => setNavIsOpen(v => !v)} />
          ) : (
            <HeaderNavClosed toggleOpen={() => setNavIsOpen(v => !v)} />
          )}
        </div>
      </div >
      {
        navIsOpen ? (
          <div className='flex grow items-center px-8 py-4 ' >
            <ul className="flex grow flex-col gap-y-6">
              {navLinks.map(l => {
                if (l.active)
                  return (
                    <li key={l.id} className="flex">
                      <Link href={l.href} className="uppercase" onClick={() => setNavIsOpen(v => !v)}>
                        {l.name}
                      </Link>
                    </li>
                  )
                else
                  return (
                    <li key={l.id} className="flex justify-between opacity-40 text-lg">
                      <div className="pr-2">{l.name}</div>
                      <div className="uppercase">comming soon</div>
                    </li>
                  )
              })}
            </ul>
          </div>
        ) : (
          <div>{children}</div>
        )
      }
    </div >
  )
}
