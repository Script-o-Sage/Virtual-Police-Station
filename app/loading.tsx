"use client"

import { Skeleton } from "@/components/ui/skeleton-loader"
import { SiteHeader } from "@/components/site-header"
import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Skeleton variant="text" className="h-10 w-1/3" />
              <Skeleton variant="text" className="h-6 w-2/3" />
              <div className="flex space-x-4">
                <Skeleton variant="button" className="h-12 w-32" />
                <Skeleton variant="button" className="h-12 w-32" />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Skeleton variant="card" />
              <Skeleton variant="card" />
            </div>

            <div className="space-y-4">
              <Skeleton variant="text" className="h-8 w-1/4" />
              <Skeleton variant="text" className="h-6 w-full" />
              <div className="grid gap-4 md:grid-cols-3">
                <Skeleton variant="card" />
                <Skeleton variant="card" />
                <Skeleton variant="card" />
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
