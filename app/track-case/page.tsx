import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, Clock, Calendar, ChevronRight, AlertCircle, Check } from "lucide-react"

export default function TrackCase() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-purple-700 mb-2">Track Existing Case</h1>
            <p className="text-gray-600 dark:text-gray-400">
              View the status and updates of your filed FIR case using your unique case reference number.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle>Case Lookup</CardTitle>
                <CardDescription>Enter your case reference to track status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="caseRef">Case Reference Number</Label>
                    <div className="flex space-x-2">
                      <Input id="caseRef" placeholder="e.g., VPS-2023-12345" />
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        <Search className="h-4 w-4 mr-2" />
                        Track
                      </Button>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-medium mb-3">Recent Cases</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-2 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer">
                        <div>
                          <p className="font-medium">VPS-2023-78901</p>
                          <p className="text-sm text-gray-500">Filed on: 18 Mar 2023</p>
                        </div>
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                          In Progress
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer">
                        <div>
                          <p className="font-medium">VPS-2023-45678</p>
                          <p className="text-sm text-gray-500">Filed on: 05 Jan 2023</p>
                        </div>
                        <Badge variant="outline" className="bg-green-100 text-green-700 hover:bg-green-100">
                          Resolved
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Case #VPS-2023-78901</CardTitle>
                    <CardDescription>Theft/Robbery - Filed on: 18 Mar 2023</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                    In Progress
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="status">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="status">Case Status</TabsTrigger>
                    <TabsTrigger value="details">Case Details</TabsTrigger>
                    <TabsTrigger value="timeline">Timeline</TabsTrigger>
                  </TabsList>

                  <TabsContent value="status" className="space-y-4">
                    <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-900">
                      <h3 className="font-medium text-lg mb-2">Current Status: Investigation</h3>
                      <div className="flex space-x-2 items-center text-sm text-gray-600 mb-4">
                        <Clock className="h-4 w-4" />
                        <span>Last updated: 02 Apr 2023, 10:45 AM</span>
                      </div>
                      <p className="mb-3">
                        Your case is currently under active investigation. Officer Khan (ID: 45678) has been assigned to
                        this case.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="border rounded-md p-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            Next Action
                          </h4>
                          <p className="text-sm">Witness interviews scheduled for 12 Apr 2023</p>
                        </div>
                        <div className="border rounded-md p-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-2" />
                            Required from You
                          </h4>
                          <p className="text-sm">Additional documentation requested. See case details.</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-md border overflow-hidden">
                      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 font-medium">Case Processing Stages</div>
                      <div className="p-4">
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                              <Check className="h-4 w-4" />
                            </div>
                            <div className="ml-4">
                              <p className="font-medium">FIR Filed</p>
                              <p className="text-sm text-gray-500">18 Mar 2023, 3:22 PM</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                              <Check className="h-4 w-4" />
                            </div>
                            <div className="ml-4">
                              <p className="font-medium">Initial Assessment</p>
                              <p className="text-sm text-gray-500">20 Mar 2023, 11:45 AM</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white">
                              <Clock className="h-4 w-4" />
                            </div>
                            <div className="ml-4">
                              <p className="font-medium">Investigation</p>
                              <p className="text-sm text-gray-500">Current Stage</p>
                            </div>
                          </div>
                          <div className="flex items-center opacity-50">
                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white">
                              <ChevronRight className="h-4 w-4" />
                            </div>
                            <div className="ml-4">
                              <p className="font-medium">Evidence Collection</p>
                              <p className="text-sm text-gray-500">Pending</p>
                            </div>
                          </div>
                          <div className="flex items-center opacity-50">
                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white">
                              <ChevronRight className="h-4 w-4" />
                            </div>
                            <div className="ml-4">
                              <p className="font-medium">Case Resolution</p>
                              <p className="text-sm text-gray-500">Pending</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="space-y-4">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-md border p-4">
                          <h3 className="font-medium mb-2">Incident Information</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-500">Type:</span>
                              <span>Theft/Robbery</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Date:</span>
                              <span>15 Mar 2023</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Time:</span>
                              <span>Approx. 2:30 PM</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Location:</span>
                              <span>Central Market Area, Block C</span>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-md border p-4">
                          <h3 className="font-medium mb-2">Case Officer</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-500">Name:</span>
                              <span>Officer Khan</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">ID:</span>
                              <span>45678</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Station:</span>
                              <span>Central Police Station</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Contact:</span>
                              <span>Station Desk: 555-123-4567</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-md border p-4">
                        <h3 className="font-medium mb-2">Incident Description</h3>
                        <p className="text-sm">
                          Victim reported that their smartphone and wallet were stolen while shopping at Central Market.
                          The incident occurred near the eastern entrance around 2:30 PM when the market was
                          particularly crowded. Victim described being jostled by a group of individuals before noticing
                          the items were missing.
                        </p>
                      </div>

                      <div className="rounded-md border p-4">
                        <h3 className="font-medium mb-2">Evidence Submitted</h3>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Purchase receipt for stolen smartphone</li>
                          <li>CCTV footage request from market security</li>
                          <li>Photos of the location</li>
                        </ul>
                      </div>

                      <div className="rounded-md border p-4 bg-yellow-50 dark:bg-yellow-900/20">
                        <h3 className="font-medium mb-2 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-2 text-yellow-600" />
                          Required Actions
                        </h3>
                        <p className="text-sm mb-2">
                          Please provide the following additional information or documents:
                        </p>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Phone IMEI number for tracking purposes</li>
                          <li>Bank card cancellation confirmation</li>
                          <li>Any additional witnesses contact information</li>
                        </ul>
                        <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                          <FileText className="h-4 w-4 mr-2" />
                          Submit Required Information
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="timeline" className="space-y-4">
                    <div className="rounded-md border">
                      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 font-medium">Case Timeline</div>
                      <div className="p-4">
                        <div className="space-y-6">
                          <div className="relative pl-8 pb-6 border-l border-gray-200">
                            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-600"></div>
                            <div className="flex justify-between mb-1">
                              <h3 className="font-medium">FIR Submitted</h3>
                              <span className="text-sm text-gray-500">18 Mar 2023, 3:22 PM</span>
                            </div>
                            <p className="text-sm">
                              First Information Report filed through Virtual Police Station platform. Case reference
                              VPS-2023-78901 generated and verified on blockchain.
                            </p>
                          </div>

                          <div className="relative pl-8 pb-6 border-l border-gray-200">
                            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-600"></div>
                            <div className="flex justify-between mb-1">
                              <h3 className="font-medium">Initial Assessment</h3>
                              <span className="text-sm text-gray-500">20 Mar 2023, 11:45 AM</span>
                            </div>
                            <p className="text-sm">
                              Case reviewed by Duty Officer and categorized as Theft/Robbery. Preliminary assessment
                              completed and assigned priority level 2.
                            </p>
                          </div>

                          <div className="relative pl-8 pb-6 border-l border-gray-200">
                            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-600"></div>
                            <div className="flex justify-between mb-1">
                              <h3 className="font-medium">Officer Assignment</h3>
                              <span className="text-sm text-gray-500">25 Mar 2023, 9:30 AM</span>
                            </div>
                            <p className="text-sm">
                              Case assigned to Officer Khan (ID: 45678) for investigation. Initial contact made with
                              victim via registered phone number.
                            </p>
                          </div>

                          <div className="relative pl-8 pb-6 border-l border-gray-200">
                            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-600"></div>
                            <div className="flex justify-between mb-1">
                              <h3 className="font-medium">Evidence Collection Initiated</h3>
                              <span className="text-sm text-gray-500">28 Mar 2023, 2:15 PM</span>
                            </div>
                            <p className="text-sm">
                              Officer visited incident location. CCTV footage requested from market security. Area
                              canvassed for witnesses and additional evidence.
                            </p>
                          </div>

                          <div className="relative pl-8 pb-0 border-l border-gray-200">
                            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-600"></div>
                            <div className="flex justify-between mb-1">
                              <h3 className="font-medium">Additional Information Request</h3>
                              <span className="text-sm text-gray-500">02 Apr 2023, 10:45 AM</span>
                            </div>
                            <p className="text-sm">
                              Case officer requested additional information including phone IMEI number and bank card
                              cancellation confirmation to aid in investigation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
