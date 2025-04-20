import Link from "next/link"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
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
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <Label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </Label>
                <Input type="email" name="email" id="email" placeholder="name@example.com" required />
              </div>
              <div>
                <Label htmlFor="password" className="block mb-2 text-sm font-medium">
                  Password
                </Label>
                <Input type="password" name="password" id="password" placeholder="••••••••" required />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                    Remember me
                  </Label>
                </div>
                <Link href="#" className="text-sm font-medium text-purple-600 hover:underline dark:text-purple-500">
                  Forgot password?
                </Link>
              </div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                Sign in
              </Button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account yet?{" "}
                <Link href="/register" className="font-medium text-purple-600 hover:underline dark:text-purple-500">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
