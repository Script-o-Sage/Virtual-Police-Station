import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, MessageSquare, Phone, Mail, Clock, Info, Shield } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-purple-700 mb-2">Support Center</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Get help with your Virtual Police Station account, cases, and general inquiries.
            </p>
          </div>

          <Tabs defaultValue="faq">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="faq">
                <HelpCircle className="mr-2 h-4 w-4" />
                Frequently Asked Questions
              </TabsTrigger>
              <TabsTrigger value="contact">
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact Support
              </TabsTrigger>
              <TabsTrigger value="resources">
                <Info className="mr-2 h-4 w-4" />
                Resources & Guides
              </TabsTrigger>
            </TabsList>

            <TabsContent value="faq" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Find answers to common questions about our platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What is a Virtual Police Station?</AccordionTrigger>
                      <AccordionContent>
                        A Virtual Police Station is a secure Web3-powered platform that allows citizens to file First
                        Information Reports (FIRs) and track cases online. It uses blockchain technology to ensure the
                        security, immutability, and transparency of all filed reports and case records.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How secure is my information on this platform?</AccordionTrigger>
                      <AccordionContent>
                        Your information is extremely secure. We utilize advanced blockchain technology that creates an
                        immutable record of all filed reports and actions. This means your data cannot be altered,
                        tampered with, or deleted once recorded. Additionally, all sensitive personal information is
                        encrypted using industry-standard protocols.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>What types of cases can I file on this platform?</AccordionTrigger>
                      <AccordionContent>
                        You can file various types of cases including theft/robbery, fraud/scam, property damage,
                        cybercrime, domestic violence, missing person reports, and more. The platform supports different
                        categories to ensure your case is appropriately classified and directed to the relevant
                        authorities.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>How do I track the status of my case?</AccordionTrigger>
                      <AccordionContent>
                        Once you've filed a case, you'll receive a unique case reference number. You can use this number
                        in the "Track Case" section to view real-time updates on your case, including investigation
                        progress, officer assignments, and next steps. The blockchain ensures all updates are authentic
                        and timestamped.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>What is blockchain verification and why is it important?</AccordionTrigger>
                      <AccordionContent>
                        Blockchain verification is a process that creates a tamper-proof, transparent record of all case
                        information. It's important because it ensures that once information is recorded, it cannot be
                        altered or deleted by any party, including system administrators. This creates a trustworthy
                        system where citizens can be confident their reports are being handled properly and legal
                        authorities have reliable records.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger>How long does it take for my case to be processed?</AccordionTrigger>
                      <AccordionContent>
                        Processing times vary depending on the type and complexity of your case. Once filed, your case
                        will be reviewed within 24-48 hours for initial assessment. You'll be able to track the progress
                        in real-time through your dashboard. If your case requires immediate attention, please contact
                        emergency services directly.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                      <AccordionTrigger>Can I submit evidence after filing my initial report?</AccordionTrigger>
                      <AccordionContent>
                        Yes, you can submit additional evidence at any time during the investigation process. Simply log
                        in to your account, navigate to your case details, and use the "Submit Additional Information"
                        option. All submissions are timestamped and securely recorded on the blockchain.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                      <AccordionTrigger>Who has access to my case information?</AccordionTrigger>
                      <AccordionContent>
                        Your case information is only accessible to you and authorized law enforcement personnel
                        assigned to your case. The system employs role-based access control, ensuring that only those
                        with proper authorization can view specific details. Every access attempt is logged and verified
                        through the blockchain.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Support</CardTitle>
                  <CardDescription>Get in touch with our support team</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Support Channels</h3>
                        <div className="grid gap-4">
                          <div className="flex items-start p-4 border rounded-lg">
                            <div className="mr-4 bg-purple-100 p-3 rounded-full">
                              <Phone className="h-5 w-5 text-purple-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Phone Support</h4>
                              <p className="text-sm text-gray-600 mt-1">
                                Call us at <span className="font-medium">+1-800-VPS-HELP</span>
                              </p>
                              <p className="text-xs text-gray-500 mt-1 flex items-center">
                                <Clock className="h-3 w-3 mr-1" /> Available 24/7
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start p-4 border rounded-lg">
                            <div className="mr-4 bg-purple-100 p-3 rounded-full">
                              <Mail className="h-5 w-5 text-purple-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Email Support</h4>
                              <p className="text-sm text-gray-600 mt-1">
                                Send an email to <span className="font-medium">support@vps.example.com</span>
                              </p>
                              <p className="text-xs text-gray-500 mt-1">We typically respond within 24 hours</p>
                            </div>
                          </div>

                          <div className="flex items-start p-4 border rounded-lg">
                            <div className="mr-4 bg-purple-100 p-3 rounded-full">
                              <MessageSquare className="h-5 w-5 text-purple-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">Live Chat</h4>
                              <p className="text-sm text-gray-600 mt-1">Chat with our support agents directly</p>
                              <p className="text-xs text-gray-500 mt-1 flex items-center">
                                <Clock className="h-3 w-3 mr-1" /> Available Monday to Friday, 9AM - 6PM
                              </p>
                              <Button variant="outline" size="sm" className="mt-2">
                                Start Chat
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-100">
                        <div className="flex">
                          <Shield className="h-5 w-5 text-yellow-600 mr-2 shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Emergency Services</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              For emergencies requiring immediate assistance, please contact your local emergency
                              services directly at <span className="font-bold">911</span> or your country's emergency
                              number.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Send a Message</h3>
                        <form className="space-y-4">
                          <div className="grid grid-cols-1 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name</Label>
                              <Input id="name" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email Address</Label>
                              <Input id="email" type="email" placeholder="your@email.com" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="case-ref">Case Reference (Optional)</Label>
                              <Input id="case-ref" placeholder="e.g., VPS-2023-12345" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="subject">Subject</Label>
                              <Input id="subject" placeholder="Brief description of your inquiry" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="message">Message</Label>
                              <Textarea
                                id="message"
                                placeholder="Please provide details about your inquiry or issue"
                                className="min-h-[120px]"
                              />
                            </div>
                          </div>
                          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                            Send Message
                          </Button>
                        </form>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Resources & Guides</CardTitle>
                  <CardDescription>Helpful information to make the most of our platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Filing an FIR Guide</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          Learn how to properly file a First Information Report with all necessary details to ensure
                          quick processing.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Guide
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Evidence Submission Tips</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          Best practices for documenting and submitting evidence to strengthen your case and aid
                          investigation.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Guide
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Understanding Case Status</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          A detailed explanation of different case statuses and what they mean for your report's
                          progress.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Guide
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Blockchain Technology</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          Learn how blockchain technology is used in our platform to ensure security and immutability of
                          records.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Guide
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Legal Process Timeline</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          Understand the typical timeline for different types of cases from filing to resolution.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Guide
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Account Security</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          Tips and best practices for keeping your Virtual Police Station account secure and protected.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Guide
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div className="mt-8 p-6 border rounded-lg bg-gray-50 dark:bg-gray-900">
                    <h3 className="text-lg font-medium mb-4">Video Tutorials</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                          <p className="text-sm text-gray-500">Video Tutorial: How to File an FIR</p>
                        </div>
                        <h4 className="font-medium">How to File an FIR</h4>
                        <p className="text-sm text-gray-600">Step-by-step walkthrough of the FIR filing process</p>
                      </div>
                      <div className="space-y-2">
                        <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                          <p className="text-sm text-gray-500">Video Tutorial: Tracking Your Case</p>
                        </div>
                        <h4 className="font-medium">Tracking Your Case</h4>
                        <p className="text-sm text-gray-600">
                          Learn how to efficiently track and monitor your case status
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
