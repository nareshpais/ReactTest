import { ReactNode } from "react";

interface PageItemsWrapperProps {
  children: ReactNode
  end?: boolean
}
export default function PageItemsWrapper({ children, end }: PageItemsWrapperProps) {
  return (
    <div className={`flex flex-col md:flex-row flex-wrap md:w-8/12 md:mx-auto ${end && 'justify-end'}`}>
      {children}
    </div>
  )
}