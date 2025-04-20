"use client"

import { Skeleton } from "@/components/ui/skeleton-loader"
import { SiteHeader } from "@/components/site-header"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <Skeleton variant="text" className="h-10 w-1/3" />
              <Skeleton variant="text" className="h-5 w-2/3" />
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <Card className="md:w-64 lg:w-72 p-6 space-y-4">
                <Skeleton variant="text" className="h-6 w-1/2" />
                <Skeleton variant="text" className="h-4 w-3/4" />
                <div className="space-y-2">
                  <Skeleton variant="text" className="h-10 w-full" />
                  <Skeleton variant="text" className="h-10 w-full" />
                  <Skeleton variant="text" className="h-10 w-full" />
                  <Skeleton variant="text" className="h-10 w-full" />
                </div>
              </Card>

              <Card className="flex-1 p-6 space-y-6">
                <div className="space-y-2">
                  <Skeleton variant="text" className="h-6 w-1/3" />
                  <Skeleton variant="text" className="h-4 w-1/2" />
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Skeleton variant="text" className="h-10 w-full" />
                    <Skeleton variant="text" className="h-10 w-full" />
                    <Skeleton variant="text" className="h-10 w-full" />
                    <Skeleton variant="text" className="h-10 w-full" />
                  </div>
                  <Skeleton variant="text" className="h-24 w-full" />
                </div>
                <div className="flex justify-between">
                  <Skeleton variant="button" className="h-10 w-24" />
                  <Skeleton variant="button" className="h-10 w-32" />
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
