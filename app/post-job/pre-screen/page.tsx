"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export default function PreScreenPage() {
  const router = useRouter()
  const [questions, setQuestions] = useState<string[]>([])

  const handleNext = () => {
    router.push("/post-job/preview")
  }

  const handleBack = () => {
    router.push("/post-job")
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1200px] px-6 pt-8">
        <div className="flex h-[600px]">
          {/* Left Sidebar */}
          <div className="w-80 bg-gray-50 p-6 border-r rounded-l-xl">
            <h1 className="text-2xl font-semibold mb-8">Job Creation</h1>

            <div className="space-y-3">
              <div className="p-4 rounded-lg border-2 border-green-500 bg-green-50">
                <span className="font-medium text-green-700">Job details</span>
              </div>
              <div className="p-4 rounded-lg border-2 border-blue-500 bg-blue-50">
                <span className="font-medium text-blue-700">Pre screen</span>
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-200 bg-white">
                <span className="font-medium text-gray-600">Preview</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 bg-white rounded-r-xl border border-l-0 border-gray-200">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Pre-screening Questions</h3>
              <p className="text-gray-600">Add questions to help filter candidates before they apply.</p>
              <div className="space-y-4">
                <Input placeholder="Add a pre-screening question..." className="border-gray-300" />
                <Button type="button" variant="outline" className="w-full bg-transparent">
                  + Add Another Question
                </Button>
              </div>
            </div>

            <div className="flex justify-between pt-6 border-t mt-6">
              <Button variant="outline" onClick={handleBack} className="px-8 bg-transparent">
                Back
              </Button>
              <Button onClick={handleNext} className="bg-blue-500 hover:bg-blue-600 px-8">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
