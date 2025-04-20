import Link from "next/link"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-purple-700">
          <Shield className="w-8 h-8 mr-2 text-purple-600" />
          Virtual Police Station
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="first-name" className="block mb-2 text-sm font-medium">
                    First Name
                  </Label>
                  <Input type="text" name="first-name" id="first-name" placeholder="John" required />
                </div>
                <div>
                  <Label htmlFor="last-name" className="block mb-2 text-sm font-medium">
                    Last Name
                  </Label>
                  <Input type="text" name="last-name" id="last-name" placeholder="Doe" required />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </Label>
                <Input type="email" name="email" id="email" placeholder="name@example.com" required />
              </div>
              <div>
                <Label htmlFor="phone" className="block mb-2 text-sm font-medium">
                  Phone Number
                </Label>
                <Input type="tel" name="phone" id="phone" placeholder="+1 (555) 123-4567" required />
              </div>
              <div>
                <Label htmlFor="id-type" className="block mb-2 text-sm font-medium">
                  ID Type
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select ID type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="national-id">National ID</SelectItem>
                    <SelectItem value="passport">Passport</SelectItem>
                    <SelectItem value="drivers-license">Driver's License</SelectItem>
                    <SelectItem value="other">Other Government ID</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="id-number" className="block mb-2 text-sm font-medium">
                  ID Number
                </Label>
                <Input type="text" name="id-number" id="id-number" placeholder="Enter your ID number" required />
              </div>
              <div>
                <Label htmlFor="password" className="block mb-2 text-sm font-medium">
                  Password
                </Label>
                <Input type="password" name="password" id="password" placeholder="••••••••" required />
              </div>
              <div>
                <Label htmlFor="confirm-password" className="block mb-2 text-sm font-medium">
                  Confirm Password
                </Label>
                <Input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" required />
              </div>
              <div className="flex items-start">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="ml-2 text-sm font-light text-gray-500 dark:text-gray-300">
                  I accept the{" "}
                  <a className="font-medium text-purple-600 hover:underline dark:text-purple-500" href="#">
                    Terms and Conditions
                  </a>{" "}
                  and confirm that my information will be securely stored on the blockchain for verification purposes.
                </Label>
              </div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                Create Account
              </Button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-purple-600 hover:underline dark:text-purple-500">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
