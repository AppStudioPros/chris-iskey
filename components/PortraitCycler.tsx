'use client'
import { useEffect, useState } from 'react'

export default function PortraitCycler({ portraits }: { portraits: string[] }) {
  const [idx, setIdx] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (portraits.length < 2) return
    const timer = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setIdx(i => (i + 1) % portraits.length)
        setFading(false)
      }, 500)
    }, 5000)
    return () => clearInterval(timer)
  }, [portraits.length])

  const label = `0${idx + 1} / 0${portraits.length}`

  return (
    <div className="hero-portrait">
      <div className="portrait-frame">
        <div className="portrait-fallback"><span>CK</span></div>
        <img
          src={portraits[idx]}
          alt="Christopher Key"
          style={{ transition: 'opacity 0.5s ease', opacity: fading ? 0 : 1 }}
        />
        <div className="portrait-shade"/>
      </div>
      <div className="portrait-caption">
        <span>{label}</span>
        <span>THE STORY, IN HIS OWN WORDS</span>
      </div>
      <div className="portrait-mark">CK<span>.</span></div>
    </div>
  )
}
