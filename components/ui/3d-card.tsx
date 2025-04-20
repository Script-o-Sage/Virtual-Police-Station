"use client"

import type React from "react"

import { useState, useRef, useEffect, type ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ThreeDCardProps {
  children: ReactNode
  className?: string
  intensity?: number
  border?: boolean
  shadow?: boolean
  disabled?: boolean
}

export function ThreeDCard({
  children,
  className,
  intensity = 10,
  border = true,
  shadow = true,
  disabled = false,
}: ThreeDCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || isMobile) return

    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    // Calculate rotation based on mouse position relative to card center
    const rotateYValue = ((mouseX - centerX) / (rect.width / 2)) * intensity
    const rotateXValue = ((centerY - mouseY) / (rect.height / 2)) * intensity

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    if (disabled || isMobile) return
    setRotateX(0)
    setRotateY(0)
    setIsHovering(false)
  }

  const handleMouseEnter = () => {
    if (disabled || isMobile) return
    setIsHovering(true)
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative rounded-lg overflow-hidden transition-all duration-200",
        border && "border border-border",
        shadow && "shadow-md",
        isHovering && shadow && "shadow-lg",
        className,
      )}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
    >
      <motion.div
        className="relative z-10 h-full"
        animate={{
          z: isHovering ? 10 : 0,
        }}
      >
        {children}
      </motion.div>
      {isHovering && shadow && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  )
}
