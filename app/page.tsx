"use client"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Database, FileText, Search, Shield, Users } from "lucide-react"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ThreeDCard } from "@/components/ui/3d-card"
import { ParallaxSection } from "@/components/ui/parallax-section"
import { ThreeDButton } from "@/components/ui/3d-button"
import { FloatingElement } from "@/components/ui/floating-element"

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-purple-50 dark:from-background dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <AnimatedContainer animation="slide" delay={0.1}>
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1.5 text-sm font-medium text-purple-700 dark:text-purple-300 mb-4"
                  >
                    <span className="flex items-center">
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                        className="mr-2 h-2 w-2 rounded-full bg-green-500"
                      ></motion.span>
                      <span className="relative z-10">Secure Blockchain Technology</span>
                    </span>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-purple-700"
                    style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
                  >
                    <span className="inline-block">
                      <FloatingElement amplitude={3} duration={5} delay={0}>
                        Virtual
                      </FloatingElement>
                    </span>{" "}
                    <span className="inline-block">
                      <FloatingElement amplitude={3} duration={5} delay={0.5}>
                        Police
                      </FloatingElement>
                    </span>{" "}
                    <span className="inline-block">
                      <FloatingElement amplitude={3} duration={5} delay={1}>
                        Station
                      </FloatingElement>
                    </span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-600 dark:text-gray-400 md:text-xl max-w-[600px]"
                  >
                    A secure Web3-powered platform for filing and tracking FIRs with blockchain verification and smart
                    contract automation.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col gap-2 min-[400px]:flex-row"
                  >
                    <ThreeDButton className="bg-purple-600 hover:bg-purple-700" size="lg">
                      <Link href="/file-fir" className="flex items-center">
                        File New FIR <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </ThreeDButton>
                    <ThreeDButton variant="outline" size="lg">
                      <Link href="/track-case">Track Existing Case</Link>
                    </ThreeDButton>
                  </motion.div>
                </div>
              </AnimatedContainer>
              <AnimatedContainer animation="scale" delay={0.4}>
                <ThreeDCard className="mt-8 lg:mt-0" intensity={5}>
                  <Tabs
                    defaultValue="overview"
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden"
                  >
                    <TabsList className="grid w-full grid-cols-3 border-b">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="filing">FIR Filing</TabsTrigger>
                      <TabsTrigger value="tracking">Case Tracking</TabsTrigger>
                    </TabsList>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <TabsContent value="overview" className="p-4">
                          <div className="space-y-4">
                            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 flex items-center">
                              Virtual Police Station Platform
                              <Badge variant="outline" className="ml-2 bg-purple-100 dark:bg-purple-900/30">
                                Web3 Enabled
                              </Badge>
                            </h3>
                            <div className="aspect-video bg-purple-50 dark:bg-gray-900 rounded-md flex items-center justify-center">
                              <div className="w-full max-w-[500px] p-4">
                                <div className="relative">
                                  <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-purple-600 dark:bg-purple-700 rounded-full flex items-center justify-center"
                                    style={{
                                      boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)",
                                      zIndex: 10,
                                    }}
                                  >
                                    <FloatingElement amplitude={3} duration={3}>
                                      <Shield className="h-8 w-8 text-white" />
                                    </FloatingElement>
                                  </motion.div>
                                  <div className="grid grid-cols-2 gap-4">
                                    {[
                                      { icon: Users, label: "Citizens", delay: 0.1, z: 1 },
                                      { icon: FileText, label: "FIR Filing", delay: 0.2, z: 2 },
                                      { icon: Database, label: "Blockchain", delay: 0.3, z: 3 },
                                      { icon: Search, label: "Tracking", delay: 0.4, z: 4 },
                                    ].map((item, index) => (
                                      <motion.div
                                        key={index}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: item.delay }}
                                        className="bg-white dark:bg-gray-800 p-3 rounded-lg text-center flex flex-col items-center"
                                        style={{
                                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                          transform: `translateZ(${item.z * 5}px)`,
                                          zIndex: item.z,
                                        }}
                                      >
                                        <item.icon className="h-5 w-5 text-purple-600 dark:text-purple-400 mb-1" />
                                        <span className="text-xs font-medium">{item.label}</span>
                                      </motion.div>
                                    ))}
                                  </div>
                                  <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="mt-4 bg-white dark:bg-gray-800 p-3 rounded-lg text-center"
                                    style={{
                                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                      transform: "translateZ(25px)",
                                      zIndex: 5,
                                    }}
                                  >
                                    <span className="text-xs font-medium">Secure Legal Authorities</span>
                                  </motion.div>
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              The VPS platform connects citizens and legal authorities through a secure blockchain-based
                              system for FIR filing and case tracking with immutable record keeping. All data is
                              encrypted and verified using advanced cryptographic techniques.
                            </p>
                          </div>
                        </TabsContent>
                        <TabsContent value="filing" className="p-4">
                          <div className="space-y-4">
                            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">
                              Secure FIR Filing Process
                            </h3>
                            <ul className="space-y-2">
                              {[
                                {
                                  title: "Verify identity with secure authentication",
                                  description:
                                    "Multi-factor authentication ensures only authorized individuals can file reports",
                                  delay: 0.1,
                                  z: 4,
                                },
                                {
                                  title: "Complete digital FIR form with multimedia evidence",
                                  description: "Upload photos, videos, documents, and other evidence securely",
                                  delay: 0.2,
                                  z: 3,
                                },
                                {
                                  title: "Blockchain verification ensures data integrity",
                                  description: "Cryptographic hashing creates tamper-proof records on the blockchain",
                                  delay: 0.3,
                                  z: 2,
                                },
                                {
                                  title: "Receive tamper-proof digital receipt",
                                  description: "Unique case number and blockchain reference serve as proof of filing",
                                  delay: 0.4,
                                  z: 1,
                                },
                              ].map((item, index) => (
                                <motion.li
                                  key={index}
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ duration: 0.5, delay: item.delay }}
                                  className="flex items-start"
                                  style={{
                                    transform: `translateZ(${item.z * 5}px)`,
                                    zIndex: item.z,
                                  }}
                                >
                                  <motion.div
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    transition={{ duration: 0.2 }}
                                    style={{
                                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                      borderRadius: "50%",
                                    }}
                                  >
                                    <Check className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                                  </motion.div>
                                  <div>
                                    <span className="font-medium">{item.title}</span>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                                      {item.description}
                                    </p>
                                  </div>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </TabsContent>
                        <TabsContent value="tracking" className="p-4">
                          <div className="space-y-4">
                            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">
                              Real-time Case Tracking
                            </h3>
                            <ul className="space-y-2">
                              {[
                                {
                                  title: "Track case status in real-time",
                                  description:
                                    "Secure dashboard shows current status and all updates with blockchain verification",
                                  delay: 0.1,
                                  z: 4,
                                },
                                {
                                  title: "View investigation updates from authorities",
                                  description: "All official updates are cryptographically signed and verified",
                                  delay: 0.2,
                                  z: 3,
                                },
                                {
                                  title: "Receive notifications about case developments",
                                  description: "Instant alerts for important updates and required actions",
                                  delay: 0.3,
                                  z: 2,
                                },
                                {
                                  title: "Access court hearing schedules and documentation",
                                  description: "Complete timeline of case progress with all relevant documentation",
                                  delay: 0.4,
                                  z: 1,
                                },
                              ].map((item, index) => (
                                <motion.li
                                  key={index}
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ duration: 0.5, delay: item.delay }}
                                  className="flex items-start"
                                  style={{
                                    transform: `translateZ(${item.z * 5}px)`,
                                    zIndex: item.z,
                                  }}
                                >
                                  <motion.div
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    transition={{ duration: 0.2 }}
                                    style={{
                                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                      borderRadius: "50%",
                                    }}
                                  >
                                    <Check className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                                  </motion.div>
                                  <div>
                                    <span className="font-medium">{item.title}</span>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                                      {item.description}
                                    </p>
                                  </div>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </TabsContent>
                      </motion.div>
                    </AnimatePresence>
                  </Tabs>
                </ThreeDCard>
              </AnimatedContainer>
            </div>
            <AnimatedContainer animation="fade" delay={0.6}>
              <div className="mt-8 flex items-center justify-center space-x-2">
                <div className="flex -space-x-2">
                  {[200, 300, 400, 500].map((bg, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                      className={`h-8 w-8 rounded-full bg-gray-${bg}`}
                      style={{
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        transform: `translateZ(${(4 - i) * 5}px)`,
                        zIndex: 4 - i,
                      }}
                    />
                  ))}
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  <span className="font-semibold">3,248+</span> users trust our platform
                </motion.p>
              </div>
            </AnimatedContainer>
          </div>
        </section>

        <ParallaxSection direction="up" intensity={0.1} className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <AnimatedContainer animation="slide" delay={0.2}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700"
                  style={{
                    boxShadow: "0 2px 4px rgba(124, 58, 237, 0.2)",
                    transform: "translateZ(10px)",
                  }}
                >
                  How It Works
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-700 max-w-[800px]"
                  style={{
                    textShadow: "0 2px 4px rgba(124, 58, 237, 0.1)",
                    transform: "translateZ(20px)",
                  }}
                >
                  <FloatingElement amplitude={2} duration={6}>
                    Blockchain-Powered Legal Process Management
                  </FloatingElement>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl"
                  style={{
                    transform: "translateZ(15px)",
                  }}
                >
                  Our platform leverages blockchain technology to create a secure, transparent, and efficient system for
                  managing legal processes.
                </motion.p>
              </div>
            </AnimatedContainer>
          </div>
        </ParallaxSection>
      </main>
    </div>
  )
}
