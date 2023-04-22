import Image from "next/image"
import { useState } from "react"

import { Roboto_Mono } from "next/font/google"
const FontQuestion = Roboto_Mono({ subsets: ['latin'], weight: '500' })

import FaqIsClosed from "../../public/faqIsClosed.png"

export type FaqItem = {
  id: string,
  question: string,
  answer: string
}

interface FaqProps {
  items: FaqItem[]
}

export default function Faq({ items }: FaqProps) {
  const [activeItem, setActiveItem] = useState<FaqItem | undefined>(items[0])

  return (
    <div className="flex flex-col px-4 md:px-0">
      {items.map(i => {
        return (
          <div key={i.id} className="pb-8">
            <div className={`${i.id === activeItem?.id && 'md:bg-gradient-to-r md:from-orange-300 md:to-orange-50 md:text-black'}`}>
              <div className="flex justify-between items-center md:w-8/12 md:mx-auto hover:cursor-pointer" onClick={() => setActiveItem(ai => ai && ai.id === i.id ? undefined : i)}>
                <div className={`${FontQuestion.className} pr-12 text-xl uppercase`}>{i.question}</div>
                <div>
                  {i.id === activeItem?.id ? (
                    <svg viewBox="0 0 17 18" fill="none" width={17} height={17} xmlns="http://www.w3.org/2000/svg" className={`stroke-white md:stroke-black`}><g clip-path="url(#clip0_1_457)"><path d="M9 0.775391V17.7754" stroke-width="2" /><path d="M0 9.27539L17 9.27539" stroke-width="2" /></g><defs><clipPath id="clip0_1_457"><rect width="17" height="17" fill="white" transform="translate(0 0.775391)" /></clipPath></defs></svg>
                  ) : (
                    <Image src={FaqIsClosed} alt="Open FAQ answer" className="hover:cursor-pointer" />
                  )}
                </div>
              </div>
            </div>
            <div className={`
            pt-4 transition-max-height ease-in duration-300 ${i.id === activeItem?.id ? 'h-auto max-h-80' : 'max-h-0'} overflow-hidden
            md:w-8/12 md:mx-auto
            `}>
              {i.answer}
            </div>
          </div>
        )
      })}
    </div>
  )
}