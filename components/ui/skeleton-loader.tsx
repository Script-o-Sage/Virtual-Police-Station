import type React from "react"
import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "card" | "text" | "button" | "image" | "avatar"
  count?: number
}

export function Skeleton({ className, variant = "text", count = 1, ...props }: SkeletonProps) {
  const renderSkeleton = () => {
    switch (variant) {
      case "card":
        return (
          <div className="space-y-3">
            <div className="h-40 w-full rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse" />
            <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
            <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
            <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
            <div className="h-8 w-1/3 rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
          </div>
        )
      case "button":
        return <div className="h-10 w-24 rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse" />
      case "image":
        return <div className="h-48 w-full rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse" />
      case "avatar":
        return <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
      case "text":
      default:
        return <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
    }
  }

  return (
    <div className={cn("space-y-2", className)} {...props}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i}>{renderSkeleton()}</div>
      ))}
    </div>
  )
}
