"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function PreviewPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    jobTitle: "",
    location: "",
    description: "",
    salary: "",
    companyDetails: "",
  })

  useEffect(() => {
    const saved = localStorage.getItem("jobFormData")
    if (saved) {
      setFormData(JSON.parse(saved))
    }
  }, [])

  const handleSubmit = () => {
    // Clear form data and navigate to success
    localStorage.removeItem("jobFormData")
    router.push("/post-job/success")
  }

  const handleBack = () => {
    router.push("/post-job/pre-screen")
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
              <div className="p-4 rounded-lg border-2 border-green-500 bg-green-50">
                <span className="font-medium text-green-700">Pre screen</span>
              </div>
              <div className="p-4 rounded-lg border-2 border-blue-500 bg-blue-50">
                <span className="font-medium text-blue-700">Preview</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 bg-white rounded-r-xl border border-l-0 border-gray-200">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Preview Your Job Post</h3>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">Job Details:</h4>
                  <p className="text-gray-600 mt-1">{formData.jobTitle || "Not specified"}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Location:</h4>
                  <p className="text-gray-600 mt-1">{formData.location || "Not specified"}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Description:</h4>
                  <p className="text-gray-600 mt-1">{formData.description || "Not specified"}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Salary:</h4>
                  <p className="text-gray-600 mt-1">{formData.salary || "Not specified"}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Company:</h4>
                  <p className="text-gray-600 mt-1">{formData.companyDetails || "Not specified"}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-6 border-t mt-6">
              <Button variant="outline" onClick={handleBack} className="px-8 bg-transparent">
                Back
              </Button>
              <Button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 px-8">
                Post Job
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
