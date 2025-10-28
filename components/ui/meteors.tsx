"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface MeteorsProps {
  number?: number
  minDelay?: number
  maxDelay?: number
  minDuration?: number
  maxDuration?: number
  angle?: number
  className?: string
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  )

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      // Set CSS custom property and explicit animation
      ["--angle" as any]: `-${angle}deg`,
      top: "-5%",
      left: `${Math.floor(Math.random() * 100)}%`,
      animationDelay: `${Math.random() * (maxDelay - minDelay) + minDelay}s`,
      animationDuration: `${Math.floor(Math.random() * (maxDuration - minDuration) + minDuration)}s`,
      animationName: "meteor",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
      transform: `rotate(${-angle}deg)`,
    }))
    setMeteorStyles(styles)
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle])

  return (
    <>
      {meteorStyles.map((style, idx) => (
        // Meteor Head - increased size and proper z-index
        <span
          key={idx}
          style={style}
          className={cn(
            "pointer-events-none absolute w-2 h-2 rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10] z-50",
            className
          )}
        >
          {/* Meteor Tail - positive z-index */}
          <div className="pointer-events-none absolute top-1/2 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent z-40" />
        </span>
      ))}
    </>
  )
}