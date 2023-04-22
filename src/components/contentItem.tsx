import { Roboto_Mono } from "next/font/google"
import { ReactNode } from "react"
const HeadingSub = Roboto_Mono({ subsets: ['latin'], weight: '700' })

interface ContentItemProps {
  title: string | ReactNode
  text: string
  icon: ReactNode
}

export default function ContentItem({ title, text, icon }: ContentItemProps) {
  return (
    <div className={`flex flex-col px-4 pb-14 md:flex-row md:basis-1/3`}>
      <div className={`flex flex-col`}>
        <div className={`${HeadingSub.className} pb-2 uppercase`}>
          {title}
        </div>
        <div className={`pb-4`}>
          {text}
        </div>
        <div className="">
          {icon}
        </div>
      </div>
    </div>
  )
}