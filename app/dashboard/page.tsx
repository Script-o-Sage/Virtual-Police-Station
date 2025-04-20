"use client"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Clock, AlertCircle, CheckCircle2, Users, Calendar, PlusCircle, Check } from "lucide-react"
import Link from "next/link"
import { ThreeDCard } from "@/components/ui/3d-card"
import { ThreeDButton } from "@/components/ui/3d-button"
import { FloatingElement } from "@/components/ui/floating-element"
import { ParallaxSection } from "@/components/ui/parallax-section"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Dashboard() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <AnimatedContainer animation="slide" delay={0.1}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold text-purple-700 mb-1"
                  style={{ textShadow: "0 2px 4px rgba(124, 58, 237, 0.1)" }}
                >
                  Dashboard
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-gray-600 dark:text-gray-400"
                >
                  Monitor your cases and access key services
                </motion.p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <ThreeDButton className="bg-purple-600 hover:bg-purple-700">
                  <Link href="/file-fir" className="flex items-center">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    File New FIR
                  </Link>
                </ThreeDButton>
                <ThreeDButton variant="outline">
                  <Link href="/track-case" className="flex items-center">
                    <Search className="mr-2 h-4 w-4" />
                    Track Case
                  </Link>
                </ThreeDButton>
              </div>
            </div>
          </AnimatedContainer>

          <ParallaxSection direction="up" intensity={0.05}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
              {[
                {
                  title: "Total FIRs Filed",
                  value: "4",
                  icon: Check,
                  color: "green",
                  text: "All securely recorded on blockchain",
                },
                {
                  title: "Cases in Progress",
                  value: "2",
                  icon: Clock,
                  color: "yellow",
                  text: "Active investigation ongoing",
                },
                {
                  title: "Resolved Cases",
                  value: "1",
                  icon: CheckCircle2,
                  color: "green",
                  text: "Successfully closed",
                },
                {
                  title: "Pending Actions",
                  value: "3",
                  icon: AlertCircle,
                  color: "red",
                  text: "Require your attention",
                },
              ].map((item, index) => (
                <AnimatedContainer key={index} animation="scale" delay={0.1 + index * 0.1}>
                  <ThreeDCard intensity={3}>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <motion.div
                          className="text-3xl font-bold"
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                          style={{
                            transform: "translateZ(10px)",
                            textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <FloatingElement amplitude={2} duration={4} delay={index * 0.5}>
                            {item.value}
                          </FloatingElement>
                        </motion.div>
                        <p className={`text-xs text-${item.color}-500 flex items-center mt-1`}>
                          <item.icon className="h-3 w-3 mr-1" />
                          {item.text}
                        </p>
                      </CardContent>
                    </Card>
                  </ThreeDCard>
                </AnimatedContainer>
              ))}
            </div>
          </ParallaxSection>

          <div className="grid gap-6 lg:grid-cols-3 mb-8">
            <AnimatedContainer animation="slide" delay={0.3} className="lg:col-span-2">
              <ThreeDCard intensity={2}>
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Cases</CardTitle>
                    <CardDescription>Overview of your recently filed cases</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg overflow-hidden">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="bg-gray-100 dark:bg-gray-800">
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                  Case Ref
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                  Type
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                  Date Filed
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                  Status
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y">
                              {[
                                {
                                  ref: "VPS-2023-78901",
                                  type: "Theft/Robbery",
                                  date: "18 Mar 2023",
                                  status: "In Progress",
                                  statusColor: "yellow",
                                },
                                {
                                  ref: "VPS-2023-65432",
                                  type: "Fraud/Scam",
                                  date: "02 Feb 2023",
                                  status: "In Progress",
                                  statusColor: "yellow",
                                },
                                {
                                  ref: "VPS-2023-45678",
                                  type: "Property Damage",
                                  date: "05 Jan 2023",
                                  status: "Resolved",
                                  statusColor: "green",
                                },
                                {
                                  ref: "VPS-2022-98765",
                                  type: "Cybercrime",
                                  date: "10 Dec 2022",
                                  status: "Action Required",
                                  statusColor: "red",
                                },
                              ].map((item, index) => (
                                <motion.tr
                                  key={index}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                                  className="hover:bg-gray-50 dark:hover:bg-gray-900"
                                  style={{ transform: `translateZ(${(4 - index) * 2}px)` }}
                                >
                                  <td className="px-4 py-3 text-sm">{item.ref}</td>
                                  <td className="px-4 py-3 text-sm">{item.type}</td>
                                  <td className="px-4 py-3 text-sm">{item.date}</td>
                                  <td className="px-4 py-3 text-sm">
                                    <Badge
                                      variant="outline"
                                      className={`bg-${item.statusColor}-100 text-${item.statusColor}-700 hover:bg-${item.statusColor}-100`}
                                    >
                                      {item.status}
                                    </Badge>
                                  </td>
                                  <td className="px-4 py-3 text-sm">
                                    <Button variant="link" size="sm" asChild className="h-auto p-0 text-purple-600">
                                      <Link href="/track-case">View Details</Link>
                                    </Button>
                                  </td>
                                </motion.tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-between">
                    <Button variant="ghost" size="sm">
                      Previous
                    </Button>
                    <div className="text-xs text-gray-500">Showing 1-4 of 4 entries</div>
                    <Button variant="ghost" size="sm">
                      Next
                    </Button>
                  </CardFooter>
                </Card>
              </ThreeDCard>
            </AnimatedContainer>

            <AnimatedContainer animation="slide" delay={0.4} direction="right">
              <ThreeDCard intensity={4}>
                <Card>
                  <CardHeader>
                    <CardTitle>Actions Required</CardTitle>
                    <CardDescription>Items that need your attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          icon: AlertCircle,
                          color: "yellow",
                          title: "Additional Evidence Required",
                          desc: "Case #VPS-2023-78901 requires additional information for investigation.",
                          action: "Submit Information",
                        },
                        {
                          icon: Calendar,
                          color: "blue",
                          title: "Court Hearing Scheduled",
                          desc: "Case #VPS-2022-98765 - Hearing on 15 Apr 2023, 10:00 AM at Central Court.",
                          action: "View Details",
                        },
                        {
                          icon: Users,
                          color: "purple",
                          title: "Witness Statement Required",
                          desc: "Case #VPS-2023-65432 - Additional witness statements needed.",
                          action: "Submit Statement",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                          className={`rounded-md border p-4 bg-${item.color}-50 dark:bg-${item.color}-900/20`}
                          style={{
                            transform: `translateZ(${(3 - index) * 5}px)`,
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <div className="flex items-start">
                            <item.icon className={`h-5 w-5 text-${item.color}-600 mr-2 shrink-0 mt-0.5`} />
                            <div>
                              <h3 className="font-medium text-sm">{item.title}</h3>
                              <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                              <Button variant="link" size="sm" className="p-0 h-auto mt-2 text-purple-600">
                                {item.action}
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <ThreeDButton variant="outline" size="sm" className="w-full" depth={2}>
                      View All Notifications
                    </ThreeDButton>
                  </CardFooter>
                </Card>
              </ThreeDCard>
            </AnimatedContainer>
          </div>
        </div>
      </main>
    </div>
  )
}
