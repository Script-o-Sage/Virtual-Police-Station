"use client"

import { useState, type ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"

interface ThreeDButtonProps extends ButtonProps {
  children: ReactNode
  depth?: number
  className?: string
  pressEffect?: boolean
}

export function ThreeDButton({ children, depth = 4, className, pressEffect = true, ...props }: ThreeDButtonProps) {
  const [isPressing, setIsPressing] = useState(false)

  return (
    <div className="relative inline-block">
      {/* Shadow/depth element */}
      <motion.div
        className={cn(
          "absolute inset-0 rounded-md bg-purple-900/20 dark:bg-purple-700/30",
          props.variant === "outline" && "bg-purple-500/10 dark:bg-purple-400/20",
        )}
        animate={{
          y: isPressing ? 0 : depth,
          x: 0,
          opacity: isPressing ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Main button */}
      <motion.div
        animate={{
          y: isPressing && pressEffect ? depth / 2 : 0,
          x: 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        onTapStart={() => setIsPressing(true)}
        onTap={() => setIsPressing(false)}
        onTapCancel={() => setIsPressing(false)}
      >
        <Button
          className={cn(
            "relative transition-all will-change-transform",
            isPressing ? "shadow-sm" : "shadow-md",
            className,
          )}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    </div>
  )
}
