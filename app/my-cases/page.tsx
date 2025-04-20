import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Search, Filter, ArrowUpDown, FileText, Eye } from "lucide-react"

export default function MyCases() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-purple-700 mb-1">My Cases</h1>
              <p className="text-gray-600 dark:text-gray-400">View and manage all your filed FIR cases</p>
            </div>
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link href="/file-fir">File New FIR</Link>
            </Button>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Case Search & Filters</CardTitle>
              <CardDescription>Find specific cases by various parameters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="col-span-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input type="search" placeholder="Search by case ID, type, location..." className="w-full pl-9" />
                  </div>
                </div>
                <div>
                  <Button variant="outline" className="w-full">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>
                <div>
                  <Button variant="outline" className="w-full">
                    <ArrowUpDown className="mr-2 h-4 w-4" />
                    Sort by Date
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all">All Cases</TabsTrigger>
              <TabsTrigger value="active">Active Cases</TabsTrigger>
              <TabsTrigger value="resolved">Resolved Cases</TabsTrigger>
              <TabsTrigger value="action">Needs Action</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>All Cases</CardTitle>
                  <CardDescription>View all your filed cases regardless of status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-100 dark:bg-gray-800">
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                              Case ID
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                              Type
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                              Location
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                              Filed Date
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                              Status
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-900">
                            <td className="px-4 py-3 text-sm">VPS-2023-78901</td>
                            <td className="px-4 py-3 text-sm">Theft/Robbery</td>
                            <td className="px-4 py-3 text-sm">Central Market</td>
                            <td className="px-4 py-3 text-sm">18 Mar 2023</td>
                            <td className="px-4 py-3 text-sm">
                              <Badge variant="outline" className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                                In Progress
                              </Badge>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <Eye className="h-4 w-4" />
                                  <span className="sr-only">View details</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <FileText className="h-4 w-4" />
                                  <span className="sr-only">View documents</span>
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-900">
                            <td className="px-4 py-3 text-sm">VPS-2023-65432</td>
                            <td className="px-4 py-3 text-sm">Fraud/Scam</td>
                            <td className="px-4 py-3 text-sm">Online</td>
                            <td className="px-4 py-3 text-sm">02 Feb 2023</td>
                            <td className="px-4 py-3 text-sm">
                              <Badge variant="outline" className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                                In Progress
                              </Badge>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <Eye className="h-4 w-4" />
                                  <span className="sr-only">View details</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <FileText className="h-4 w-4" />
                                  <span className="sr-only">View documents</span>
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-900">
                            <td className="px-4 py-3 text-sm">VPS-2023-45678</td>
                            <td className="px-4 py-3 text-sm">Property Damage</td>
                            <td className="px-4 py-3 text-sm">Residential Area</td>
                            <td className="px-4 py-3 text-sm">05 Jan 2023</td>
                            <td className="px-4 py-3 text-sm">
                              <Badge variant="outline" className="bg-green-100 text-green-700 hover:bg-green-100">
                                Resolved
                              </Badge>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <Eye className="h-4 w-4" />
                                  <span className="sr-only">View details</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <FileText className="h-4 w-4" />
                                  <span className="sr-only">View documents</span>
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-900">
                            <td className="px-4 py-3 text-sm">VPS-2022-98765</td>
                            <td className="px-4 py-3 text-sm">Cybercrime</td>
                            <td className="px-4 py-3 text-sm">Online</td>
                            <td className="px-4 py-3 text-sm">10 Dec 2022</td>
                            <td className="px-4 py-3 text-sm">
                              <Badge variant="outline" className="bg-red-100 text-red-700 hover:bg-red-100">
                                Action Required
                              </Badge>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <Eye className="h-4 w-4" />
                                  <span className="sr-only">View details</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <FileText className="h-4 w-4" />
                                  <span className="sr-only">View documents</span>
                                </Button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <Button variant="outline" size="sm">
                      Previous
                    </Button>
                    <div className="text-sm text-gray-500">
                      Showing <strong>1-4</strong> of <strong>4</strong> results
                    </div>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="active" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Active Cases</CardTitle>
                  <CardDescription>Cases currently in progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <p className="text-gray-500">You have 2 active cases that are currently being processed.</p>
                    <div className="border rounded-lg overflow-hidden mt-4">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-gray-100 dark:bg-gray-800">
                              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                Case ID
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                Type
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                Location
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                Filed Date
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                Status
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-900">
                              <td className="px-4 py-3 text-sm">VPS-2023-78901</td>
                              <td className="px-4 py-3 text-sm">Theft/Robbery</td>
                              <td className="px-4 py-3 text-sm">Central Market</td>
                              <td className="px-4 py-3 text-sm">18 Mar 2023</td>
                              <td className="px-4 py-3 text-sm">
                                <Badge variant="outline" className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                                  In Progress
                                </Badge>
                              </td>
                              <td className="px-4 py-3 text-sm">
                                <div className="flex space-x-2">
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <Eye className="h-4 w-4" />
                                    <span className="sr-only">View details</span>
                                  </Button>
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <FileText className="h-4 w-4" />
                                    <span className="sr-only">View documents</span>
                                  </Button>
                                </div>
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-900">
                              <td className="px-4 py-3 text-sm">VPS-2023-65432</td>
                              <td className="px-4 py-3 text-sm">Fraud/Scam</td>
                              <td className="px-4 py-3 text-sm">Online</td>
                              <td className="px-4 py-3 text-sm">02 Feb 2023</td>
                              <td className="px-4 py-3 text-sm">
                                <Badge variant="outline" className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                                  In Progress
                                </Badge>
                              </td>
                              <td className="px-4 py-3 text-sm">
                                <div className="flex space-x-2">
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <Eye className="h-4 w-4" />
                                    <span className="sr-only">View details</span>
                                  </Button>
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <FileText className="h-4 w-4" />
                                    <span className="sr-only">View documents</span>
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resolved" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Resolved Cases</CardTitle>
                  <CardDescription>Cases that have been completed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <p className="text-gray-500">You have 1 resolved case that has been successfully completed.</p>
                    <div className="border rounded-lg overflow-hidden mt-4">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-gray-100 dark:bg-gray-800">
                              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                Case ID
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                Type
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                Location
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                Filed Date
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                Resolved Date
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-900">
                              <td className="px-4 py-3 text-sm">VPS-2023-45678</td>
                              <td className="px-4 py-3 text-sm">Property Damage</td>
                              <td className="px-4 py-3 text-sm">Residential Area</td>
                              <td className="px-4 py-3 text-sm">05 Jan 2023</td>
                              <td className="px-4 py-3 text-sm">15 Mar 2023</td>
                              <td className="px-4 py-3 text-sm">
                                <div className="flex space-x-2">
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <Eye className="h-4 w-4" />
                                    <span className="sr-only">View details</span>
                                  </Button>
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <FileText className="h-4 w-4" />
                                    <span className="sr-only">View documents</span>
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="action" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Needs Action</CardTitle>
                  <CardDescription>Cases that require your attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <p className="text-gray-500">You have 1 case that requires your immediate attention.</p>
                    <div className="border rounded-lg overflow-hidden mt-4">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-gray-100 dark:bg-gray-800">
                              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                Case ID
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                Type
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                Location
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                Filed Date
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                Required Action
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-900">
                              <td className="px-4 py-3 text-sm">VPS-2022-98765</td>
                              <td className="px-4 py-3 text-sm">Cybercrime</td>
                              <td className="px-4 py-3 text-sm">Online</td>
                              <td className="px-4 py-3 text-sm">10 Dec 2022</td>
                              <td className="px-4 py-3 text-sm">Court Hearing Scheduled</td>
                              <td className="px-4 py-3 text-sm">
                                <div className="flex space-x-2">
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <Eye className="h-4 w-4" />
                                    <span className="sr-only">View details</span>
                                  </Button>
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <FileText className="h-4 w-4" />
                                    <span className="sr-only">View documents</span>
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
