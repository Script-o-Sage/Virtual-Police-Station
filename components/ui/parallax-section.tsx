"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  intensity?: number
  baseVelocity?: number
}

export function ParallaxSection({
  children,
  className,
  direction = "up",
  intensity = 0.2,
  baseVelocity = 0.2,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Calculate transform values based on direction
  const yTransform = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [intensity * 100, 0] : direction === "down" ? [-intensity * 100, 0] : [0, 0],
  )

  const xTransform = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? [intensity * 100, 0] : direction === "right" ? [-intensity * 100, 0] : [0, 0],
  )

  const opacityTransform = useTransform(scrollYProgress, [0, 0.3], [0.6, 1])

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        style={{
          y: yTransform,
          x: xTransform,
          opacity: opacityTransform,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
