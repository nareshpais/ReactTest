import { Inter } from "next/font/google"
const HeadingFont = Inter({ subsets: ['latin'], weight: '700' })

interface HeadingProps {
  title: string
}
export default function Heading({ title }: HeadingProps) {
  return <div className={`
  ${HeadingFont.className} text-4xl px-4 pb-5 pt-10 uppercase
  md:text-9xl md:w-8/12 md:mx-auto
    `}>{title}</div>
}