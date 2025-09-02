"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function SuccessPage() {
  const router = useRouter()

  const handleBackToJobBoard = () => {
    router.push("/")
  }

  const handleCreateAccount = () => {
    // Handle account creation
    console.log("Create account clicked")
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-2xl text-center p-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Job Successfully Posted</h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto">
            Your job has been posted we will review your job before it is posted to our job board create the your
            account to see your candidates who applied to your job
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button onClick={handleCreateAccount} className="bg-blue-500 hover:bg-blue-600 px-8 py-3 text-base">
            Create Your account
          </Button>
          <Button variant="outline" className="px-8 py-3 text-base bg-transparent" onClick={handleBackToJobBoard}>
            Back to job board
          </Button>
        </div>
      </div>
    </div>
  )
}
