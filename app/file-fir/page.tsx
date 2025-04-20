import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Clock, FileText, Camera, PaperclipIcon as PaperClip } from "lucide-react"

export default function FileFIR() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-purple-700 mb-2">File New FIR</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Submit a First Information Report to initiate the legal process. All information is securely stored using
              blockchain technology.
            </p>
          </div>

          <Tabs defaultValue="personal">
            <div className="flex flex-col md:flex-row gap-8">
              <Card className="md:w-64 lg:w-72">
                <CardHeader>
                  <CardTitle>FIR Process</CardTitle>
                  <CardDescription>Complete all sections to file your report</CardDescription>
                </CardHeader>
                <CardContent>
                  <TabsList className="flex flex-col w-full h-auto space-y-2">
                    <TabsTrigger value="personal" className="justify-start">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-700 dark:text-purple-400 mr-2 text-xs font-bold">
                          1
                        </div>
                        <span>Personal Information</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger value="incident" className="justify-start">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-700 dark:text-purple-400 mr-2 text-xs font-bold">
                          2
                        </div>
                        <span>Incident Details</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger value="evidence" className="justify-start">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-700 dark:text-purple-400 mr-2 text-xs font-bold">
                          3
                        </div>
                        <span>Evidence & Witnesses</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger value="review" className="justify-start">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-700 dark:text-purple-400 mr-2 text-xs font-bold">
                          4
                        </div>
                        <span>Review & Submit</span>
                      </div>
                    </TabsTrigger>
                  </TabsList>

                  <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/10 rounded-lg border border-purple-100 dark:border-purple-900/20">
                    <h4 className="text-sm font-medium text-purple-700 dark:text-purple-400 mb-2">
                      Blockchain Security
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      All information submitted is securely encrypted and stored on our blockchain network, ensuring
                      tamper-proof record keeping.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex-1">
                <Card>
                  <TabsContent value="personal" className="m-0">
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Provide your contact details and identification</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input id="fullName" placeholder="Enter your full legal name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="idNumber">ID Number</Label>
                          <Input id="idNumber" placeholder="National ID/Passport Number" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="your@email.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="Include country code" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="address">Residential Address</Label>
                          <Textarea id="address" placeholder="Enter your complete address" />
                        </div>
                        <div className="space-y-2">
                          <Label>Filing as</Label>
                          <RadioGroup defaultValue="victim">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="victim" id="victim" />
                              <Label htmlFor="victim">Victim</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="witness" id="witness" />
                              <Label htmlFor="witness">Witness</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="representative" id="representative" />
                              <Label htmlFor="representative">Legal Representative</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Save Draft</Button>
                      <Button className="bg-purple-600 hover:bg-purple-700">Next: Incident Details</Button>
                    </CardFooter>
                  </TabsContent>

                  <TabsContent value="incident" className="m-0">
                    <CardHeader>
                      <CardTitle>Incident Details</CardTitle>
                      <CardDescription>Provide information about when and where the incident occurred</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="incidentType">Incident Type</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select incident type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="theft">Theft/Robbery</SelectItem>
                              <SelectItem value="assault">Assault</SelectItem>
                              <SelectItem value="fraud">Fraud/Scam</SelectItem>
                              <SelectItem value="cybercrime">Cybercrime</SelectItem>
                              <SelectItem value="property">Property Damage</SelectItem>
                              <SelectItem value="domestic">Domestic Violence</SelectItem>
                              <SelectItem value="missing">Missing Person</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="incidentDate" className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            Incident Date
                          </Label>
                          <Input type="date" id="incidentDate" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="incidentTime" className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            Approximate Time
                          </Label>
                          <Input type="time" id="incidentTime" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="location" className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            Incident Location
                          </Label>
                          <Textarea id="location" placeholder="Provide detailed location information" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="description" className="flex items-center">
                            <FileText className="w-4 h-4 mr-2" />
                            Incident Description
                          </Label>
                          <Textarea
                            id="description"
                            placeholder="Describe what happened in detail"
                            className="min-h-[150px]"
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Previous</Button>
                      <Button className="bg-purple-600 hover:bg-purple-700">Next: Evidence & Witnesses</Button>
                    </CardFooter>
                  </TabsContent>

                  <TabsContent value="evidence" className="m-0">
                    <CardHeader>
                      <CardTitle>Evidence & Witnesses</CardTitle>
                      <CardDescription>Upload supporting evidence and provide witness information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Evidence Upload</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer transition">
                            <Camera className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                            <p className="text-sm mb-1 font-medium">Upload Photos/Videos</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Drag and drop or click to upload</p>
                          </div>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer transition">
                            <PaperClip className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                            <p className="text-sm mb-1 font-medium">Other Documents</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Receipts, screenshots, reports, etc.
                            </p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">
                          All evidence is securely encrypted and stored on the blockchain. Only authorized personnel can
                          access these files.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Witness Information</h3>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="witnessName">Witness Name</Label>
                              <Input id="witnessName" placeholder="Full name of witness (if known)" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="witnessContact">Contact Information</Label>
                              <Input id="witnessContact" placeholder="Phone or email (if available)" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="witnessDetails">Witness Statement/Details</Label>
                            <Textarea
                              id="witnessDetails"
                              placeholder="What did the witness observe? Any relevant information."
                            />
                          </div>
                          <Button variant="outline" className="text-sm">
                            + Add Another Witness
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Previous</Button>
                      <Button className="bg-purple-600 hover:bg-purple-700">Next: Review & Submit</Button>
                    </CardFooter>
                  </TabsContent>

                  <TabsContent value="review" className="m-0">
                    <CardHeader>
                      <CardTitle>Review & Submit</CardTitle>
                      <CardDescription>Verify your information before final submission</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-6">
                        <div className="rounded-lg border p-4">
                          <h3 className="font-medium mb-2">Personal Information</h3>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <p className="text-gray-500">Full Name:</p>
                            <p>[Full Name]</p>
                            <p className="text-gray-500">ID Number:</p>
                            <p>[ID Number]</p>
                            <p className="text-gray-500">Contact:</p>
                            <p>[Email / Phone]</p>
                            <p className="text-gray-500">Filing as:</p>
                            <p>[Role]</p>
                          </div>
                        </div>

                        <div className="rounded-lg border p-4">
                          <h3 className="font-medium mb-2">Incident Details</h3>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <p className="text-gray-500">Incident Type:</p>
                            <p>[Type]</p>
                            <p className="text-gray-500">Date & Time:</p>
                            <p>[Date] at [Time]</p>
                            <p className="text-gray-500">Location:</p>
                            <p>[Location]</p>
                          </div>
                          <div className="mt-2">
                            <p className="text-gray-500 text-sm">Description:</p>
                            <p className="text-sm mt-1">[Incident Description]</p>
                          </div>
                        </div>

                        <div className="rounded-lg border p-4">
                          <h3 className="font-medium mb-2">Evidence & Witnesses</h3>
                          <p className="text-sm mb-2">[Number] evidence files uploaded</p>
                          <p className="text-sm">[Number] witnesses added</p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <input type="checkbox" id="declaration" className="mt-1" />
                            <Label htmlFor="declaration" className="text-sm">
                              I declare that the information provided is true and accurate to the best of my knowledge.
                              I understand that filing a false report is a punishable offense.
                            </Label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <input type="checkbox" id="consent" className="mt-1" />
                            <Label htmlFor="consent" className="text-sm">
                              I consent to the storage of this report and evidence on a secure blockchain ledger for
                              verification and case processing purposes.
                            </Label>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Previous</Button>
                      <Button className="bg-purple-600 hover:bg-purple-700">Submit FIR</Button>
                    </CardFooter>
                  </TabsContent>
                </Card>
              </div>
            </div>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
