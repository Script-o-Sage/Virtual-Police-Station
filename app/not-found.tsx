import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="container flex items-center justify-center min-h-[80vh] px-4">
      <Card className="w-full max-w-md border-lavender-500/20 bg-gradient-to-b from-lavender-900/10 to-lavender-800/5">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold text-lavender-100">404</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-xl mb-2 text-lavender-200">Page Not Found</p>
          <p className="text-lavender-300">The page you are looking for doesn't exist or has been moved.</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/">
            <Button className="bg-lavender-600 hover:bg-lavender-700">Return to Home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
