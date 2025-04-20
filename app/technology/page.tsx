import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import {
  Shield,
  Lock,
  FileText,
  Database,
  Server,
  Fingerprint,
  Clock,
  CheckCircle,
  Layers,
  Code,
  Cpu,
  Network,
  Key,
  RefreshCw,
  Users,
  Eye,
  AlertTriangle,
  ArrowRight,
} from "lucide-react"

export default function TechnologyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
                Advanced Technology
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-purple-700 dark:text-purple-400">
                Blockchain-Powered Security
              </h1>
              <p className="max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl">
                Our platform leverages cutting-edge blockchain technology to create a secure, transparent, and efficient
                system for managing legal processes.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-purple-700 dark:text-purple-400">
                  How Our Technology Works
                </h2>
                <p className="text-gray-600 dark:text-gray-400 md:text-lg">
                  The Virtual Police Station platform combines blockchain technology with secure authentication and
                  encryption to create a tamper-proof system for filing and tracking legal cases.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Immutable record-keeping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">End-to-end encryption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Smart contract automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Decentralized verification</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800">
                    <Link href="/file-fir">Try It Now</Link>
                  </Button>
                  <Button variant="outline">
                    <Link href="/support">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] w-full rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/20 dark:to-gray-900 p-6 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-[400px]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg z-10">
                      <Shield className="h-10 w-10 text-purple-600" />
                    </div>
                    <div className="mt-8 grid grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md flex flex-col items-center text-center">
                        <Lock className="h-8 w-8 text-purple-600 mb-2" />
                        <span className="text-sm font-medium">Secure Authentication</span>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md flex flex-col items-center text-center">
                        <Database className="h-8 w-8 text-purple-600 mb-2" />
                        <span className="text-sm font-medium">Blockchain Storage</span>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md flex flex-col items-center text-center">
                        <FileText className="h-8 w-8 text-purple-600 mb-2" />
                        <span className="text-sm font-medium">Smart Contracts</span>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md flex flex-col items-center text-center">
                        <Fingerprint className="h-8 w-8 text-purple-600 mb-2" />
                        <span className="text-sm font-medium">Biometric Verification</span>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md flex flex-col items-center text-center">
                        <Server className="h-8 w-8 text-purple-600 mb-2" />
                        <span className="text-sm font-medium">Decentralized Network</span>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md flex flex-col items-center text-center">
                        <Clock className="h-8 w-8 text-purple-600 mb-2" />
                        <span className="text-sm font-medium">Timestamped Records</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter text-purple-700 dark:text-purple-400">
                Our Technology Stack
              </h2>
              <p className="max-w-[700px] text-gray-600 dark:text-gray-400 md:text-lg">
                The Virtual Police Station platform is built using cutting-edge technologies to ensure security,
                scalability, and reliability.
              </p>
            </div>

            <Tabs defaultValue="blockchain" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="blockchain">
                  <Database className="h-4 w-4 mr-2" />
                  Blockchain
                </TabsTrigger>
                <TabsTrigger value="security">
                  <Lock className="h-4 w-4 mr-2" />
                  Security
                </TabsTrigger>
                <TabsTrigger value="infrastructure">
                  <Server className="h-4 w-4 mr-2" />
                  Infrastructure
                </TabsTrigger>
                <TabsTrigger value="frontend">
                  <Layers className="h-4 w-4 mr-2" />
                  Frontend
                </TabsTrigger>
              </TabsList>

              <TabsContent value="blockchain" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Code className="h-5 w-5 mr-2 text-purple-600" />
                        Smart Contracts
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Our platform uses Ethereum-based smart contracts to automate case processing, evidence
                        verification, and status updates, ensuring transparency and eliminating manual intervention.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Database className="h-5 w-5 mr-2 text-purple-600" />
                        Distributed Ledger
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        All case records are stored on a distributed ledger, creating multiple copies across the network
                        that prevent tampering and ensure data integrity and availability.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Key className="h-5 w-5 mr-2 text-purple-600" />
                        Cryptographic Hashing
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        We use SHA-256 cryptographic hashing to create unique, tamper-evident fingerprints of all
                        documents and evidence, allowing for verification without revealing the original content.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-purple-600" />
                        Consensus Mechanism
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Our platform employs a Proof of Authority consensus mechanism optimized for legal
                        record-keeping, balancing security with performance and energy efficiency.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <RefreshCw className="h-5 w-5 mr-2 text-purple-600" />
                        Immutable Audit Trail
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Every action taken on a case creates an immutable audit trail, recording who accessed the
                        information, what changes were made, and when they occurred.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Network className="h-5 w-5 mr-2 text-purple-600" />
                        Private Blockchain Network
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        We operate on a permissioned private blockchain network that provides the benefits of blockchain
                        technology while maintaining control over who can participate in the network.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Lock className="h-5 w-5 mr-2 text-purple-600" />
                        End-to-End Encryption
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        All data transmitted through our platform is protected with AES-256 encryption, ensuring that
                        sensitive information remains confidential during transmission and storage.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Fingerprint className="h-5 w-5 mr-2 text-purple-600" />
                        Multi-Factor Authentication
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Our platform requires multiple forms of verification before granting access, combining something
                        you know (password), something you have (device), and something you are (biometrics).
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Users className="h-5 w-5 mr-2 text-purple-600" />
                        Role-Based Access Control
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Our system implements granular permissions that ensure users can only access information
                        relevant to their role, with special protections for sensitive case details.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Eye className="h-5 w-5 mr-2 text-purple-600" />
                        Privacy by Design
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        We follow privacy-by-design principles, collecting only necessary information and implementing
                        data minimization techniques to protect user privacy.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-purple-600" />
                        Threat Monitoring
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Our platform includes 24/7 security monitoring with advanced threat detection systems that can
                        identify and respond to suspicious activities in real-time.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-purple-600" />
                        Compliance Framework
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Our security measures comply with international standards including ISO 27001, GDPR, and
                        industry-specific regulations for handling legal and personal data.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="infrastructure" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Server className="h-5 w-5 mr-2 text-purple-600" />
                        Cloud Infrastructure
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Our platform runs on a distributed cloud infrastructure with multiple redundancies, ensuring
                        99.99% uptime and seamless scaling during peak usage periods.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Cpu className="h-5 w-5 mr-2 text-purple-600" />
                        Microservices Architecture
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        We use a microservices architecture that separates the platform into independent services,
                        allowing for better fault isolation and more efficient resource utilization.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Database className="h-5 w-5 mr-2 text-purple-600" />
                        Data Replication
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Critical data is replicated across multiple geographic regions, ensuring that information
                        remains accessible even in the event of regional outages or disasters.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Network className="h-5 w-5 mr-2 text-purple-600" />
                        Content Delivery Network
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Our platform utilizes a global CDN to deliver content quickly to users regardless of their
                        location, reducing latency and improving the user experience.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <RefreshCw className="h-5 w-5 mr-2 text-purple-600" />
                        Automated Scaling
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Our infrastructure automatically scales based on demand, ensuring optimal performance during
                        usage spikes without manual intervention.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-purple-600" />
                        Disaster Recovery
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        We maintain comprehensive disaster recovery plans with regular backups and failover systems to
                        ensure business continuity in any scenario.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="frontend" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Layers className="h-5 w-5 mr-2 text-purple-600" />
                        React Framework
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Our user interface is built with React and Next.js, providing a fast, responsive experience with
                        server-side rendering for optimal performance.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Code className="h-5 w-5 mr-2 text-purple-600" />
                        Progressive Web App
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        The platform functions as a Progressive Web App, allowing users to access it offline and
                        providing a native app-like experience across all devices.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Eye className="h-5 w-5 mr-2 text-purple-600" />
                        Accessibility Compliance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Our interface is WCAG 2.1 AA compliant, ensuring that the platform is accessible to users with
                        disabilities and works with assistive technologies.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Cpu className="h-5 w-5 mr-2 text-purple-600" />
                        API-First Design
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        We follow an API-first approach, with a clear separation between frontend and backend services
                        that allows for greater flexibility and easier integration with other systems.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <RefreshCw className="h-5 w-5 mr-2 text-purple-600" />
                        Real-time Updates
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Our platform uses WebSockets to provide real-time updates on case status changes, notifications,
                        and messages without requiring page refreshes.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <Users className="h-5 w-5 mr-2 text-purple-600" />
                        Responsive Design
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        The interface is fully responsive, providing an optimal experience on devices of all sizes from
                        mobile phones to desktop computers.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-purple-700 dark:text-purple-400">
                  The FIR Process Flow
                </h2>
                <p className="text-gray-600 dark:text-gray-400 md:text-lg">
                  Our blockchain-powered FIR filing process ensures security, transparency, and efficiency at every
                  step. Here's how your case moves through our system:
                </p>
                <div className="space-y-6 mt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 text-purple-700 dark:text-purple-400">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-purple-700 dark:text-purple-400">
                        1. Secure Authentication
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Users verify their identity through multi-factor authentication, including biometric
                        verification when available, ensuring only authorized individuals can file reports.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 text-purple-700 dark:text-purple-400">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-purple-700 dark:text-purple-400">
                        2. Digital FIR Submission
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Complete the digital FIR form with incident details, location information, and the ability to
                        upload multimedia evidence securely.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 text-purple-700 dark:text-purple-400">
                      <Database className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-purple-700 dark:text-purple-400">
                        3. Blockchain Verification
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        The system creates a cryptographic hash of your report and stores it on the blockchain, creating
                        an immutable record that cannot be altered or deleted.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 text-purple-700 dark:text-purple-400">
                      <Key className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-purple-700 dark:text-purple-400">
                        4. Digital Receipt Generation
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Receive a tamper-proof digital receipt with a unique case number and blockchain reference that
                        serves as proof of filing.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 text-purple-700 dark:text-purple-400">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-purple-700 dark:text-purple-400">
                        5. Authorized Processing
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Law enforcement officials with proper authorization access your case through secure channels,
                        with every access recorded on the blockchain.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 text-purple-700 dark:text-purple-400">
                      <RefreshCw className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-purple-700 dark:text-purple-400">
                        6. Real-time Tracking
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Track your case status in real-time through your secure dashboard, with all updates
                        cryptographically signed and verified.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[600px] w-full rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/20 dark:to-gray-900 p-6 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-[400px] space-y-8">
                    <div className="relative flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <div className="mt-2 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg w-full">
                        <h4 className="font-medium text-purple-700 dark:text-purple-400">Authentication</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Secure identity verification</p>
                      </div>
                      <div className="absolute top-[100%] left-1/2 w-1 h-8 bg-purple-200 dark:bg-purple-900/50 -translate-x-1/2"></div>
                    </div>

                    <div className="relative flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <div className="mt-2 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg w-full">
                        <h4 className="font-medium text-purple-700 dark:text-purple-400">FIR Submission</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Digital form with evidence upload</p>
                      </div>
                      <div className="absolute top-[100%] left-1/2 w-1 h-8 bg-purple-200 dark:bg-purple-900/50 -translate-x-1/2"></div>
                    </div>

                    <div className="relative flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <div className="mt-2 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg w-full">
                        <h4 className="font-medium text-purple-700 dark:text-purple-400">Blockchain Storage</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Immutable record creation</p>
                      </div>
                      <div className="absolute top-[100%] left-1/2 w-1 h-8 bg-purple-200 dark:bg-purple-900/50 -translate-x-1/2"></div>
                    </div>

                    <div className="relative flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                        4
                      </div>
                      <div className="mt-2 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg w-full">
                        <h4 className="font-medium text-purple-700 dark:text-purple-400">Case Processing</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Secure authorized access</p>
                      </div>
                      <div className="absolute top-[100%] left-1/2 w-1 h-8 bg-purple-200 dark:bg-purple-900/50 -translate-x-1/2"></div>
                    </div>

                    <div className="relative flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                        5
                      </div>
                      <div className="mt-2 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg w-full">
                        <h4 className="font-medium text-purple-700 dark:text-purple-400">Real-time Updates</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Transparent case tracking</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-purple-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter text-purple-700 dark:text-purple-400">
                Ready to Experience the Future of Legal Reporting?
              </h2>
              <p className="max-w-[700px] text-gray-600 dark:text-gray-400 md:text-lg">
                Join thousands of citizens who have already benefited from our secure, transparent, and efficient
                blockchain-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800">
                  <Link href="/file-fir">
                    File New FIR <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline">
                  <Link href="/track-case">Track Existing Case</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-4">
                    <Shield className="h-6 w-6 text-purple-700 dark:text-purple-400" />
                  </div>
                  <CardTitle>Secure & Tamper-Proof</CardTitle>
                  <CardDescription>
                    Blockchain technology ensures your case information cannot be altered or deleted once recorded.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-4">
                    <Clock className="h-6 w-6 text-purple-700 dark:text-purple-400" />
                  </div>
                  <CardTitle>Real-Time Updates</CardTitle>
                  <CardDescription>
                    Track your case status in real-time with instant notifications about important developments.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-4">
                    <Users className="h-6 w-6 text-purple-700 dark:text-purple-400" />
                  </div>
                  <CardTitle>Transparent Process</CardTitle>
                  <CardDescription>
                    Clear visibility into every step of the legal process with verifiable blockchain records.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
