import { ReactNode } from "react"

interface PageImageWrapperProps {
  children: ReactNode
}
export default function PageImageWrapper({ children }: PageImageWrapperProps) {
  return (
    <div className='px-4 pb-14 flex md:basis-1/3'>
      {children}
    </div>
  )
}