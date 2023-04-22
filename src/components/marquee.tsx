import { ReactNode, useEffect, useState } from "react"

interface MarqueeProps {
  text: string
  repeat?: number
}
export default function Marquee({ text, repeat }: MarqueeProps) {

  const [items, setItems] = useState<ReactNode[]>([])

  useEffect(() => {
    const r = repeat ?? 5
    const textItems = []
    for (let i = 0; i < r; i++) {
      textItems.push(<span className="mx-4">{text}</span>)
    }
    setItems(textItems)
  }, [text, repeat])

  return (
    <div className="relative flex overflow-x-hidden bg-gradient-to-r from-orange-300 to-orange-50 text-black" style={{ maxWidth: '100vw' }}>
      <div className="animate-marquee whitespace-nowrap">
        {items}
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
        {items}
      </div>
    </div>
  )
}