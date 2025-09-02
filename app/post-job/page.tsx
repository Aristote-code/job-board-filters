"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"

export default function PostJobPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    jobTitle: "",
    location: "",
    description: "",
    salary: "",
    companyDetails: "",
  })

  useEffect(() => {
    // Load saved form data from localStorage
    const saved = localStorage.getItem("jobFormData")
    if (saved) {
      setFormData(JSON.parse(saved))
    }
  }, [])

  const handleInputChange = (field: string, value: string) => {
    const newData = { ...formData, [field]: value }
    setFormData(newData)
    // Save to localStorage
    localStorage.setItem("jobFormData", JSON.stringify(newData))
  }

  const handleNext = () => {
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
              <div className="p-4 rounded-lg border-2 border-blue-500 bg-blue-50">
                <span className="font-medium text-blue-700">Job details</span>
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-200 bg-white">
                <span className="font-medium text-gray-600">Pre screen</span>
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-200 bg-white">
                <span className="font-medium text-gray-600">Preview</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 bg-white rounded-r-xl border border-l-0 border-gray-200">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-700">Job details</label>
                <Textarea
                  placeholder="Enter job title, requirements, and key details..."
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                  className="min-h-[120px] border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-gray-700">Location</label>
                <Textarea
                  placeholder="Enter job location, remote options, etc..."
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  className="min-h-[100px] border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-gray-700">Description</label>
                <Textarea
                  placeholder="Detailed job description, responsibilities, and requirements..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  className="min-h-[120px] border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-gray-700">Monthly Salary Expectation</label>
                <Textarea
                  placeholder="Enter salary range, benefits, and compensation details..."
                  value={formData.salary}
                  onChange={(e) => handleInputChange("salary", e.target.value)}
                  className="min-h-[100px] border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-gray-700">Company details</label>
                <Textarea
                  placeholder="Company name, size, culture, and other relevant information..."
                  value={formData.companyDetails}
                  onChange={(e) => handleInputChange("companyDetails", e.target.value)}
                  className="min-h-[120px] border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="flex justify-end pt-6 border-t mt-6">
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
