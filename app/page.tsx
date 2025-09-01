"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Search, ChevronDown, MapPin, Upload } from "lucide-react"

export default function JobBoard() {
  const [showJobForm, setShowJobForm] = useState(false)
  const [showJobSuccess, setShowJobSuccess] = useState(false)
  const [showResumeSuccess, setShowResumeSuccess] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowJobForm(false)
    setShowJobSuccess(true)
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (file.type === "application/pdf" || file.name.endsWith(".pdf")) {
        setUploadedFile(file)
        setShowResumeSuccess(true)
      }
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (file.type === "application/pdf" || file.name.endsWith(".pdf")) {
        setUploadedFile(file)
        setShowResumeSuccess(true)
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1200px] px-6 pt-8">
        <h1 className="text-2xl font-semibold mb-4">Job board</h1>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3 space-y-4">
            <Card className="border border-gray-200 rounded-xl">
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg mb-2">Post a job for free</h3>
                <p className="text-gray-600 text-sm mb-4">Reach over 30k talents across Africa</p>
                <Button
                  onClick={() => setShowJobForm(true)}
                  className="w-full bg-blue-500 hover:bg-blue-600 rounded-xl"
                >
                  Post a free job
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 rounded-xl">
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg mb-2">Add your resume</h3>
                <p className="text-gray-600 text-sm mb-4">Add your resume for future opportunities</p>
                <div
                  className={`border-2 border-dashed rounded-xl p-4 text-center min-h-[120px] flex flex-col items-center justify-center cursor-pointer transition-colors ${
                    dragActive ? "border-blue-400 bg-blue-50" : "border-gray-300 bg-gray-50"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("file-input")?.click()}
                >
                  <Upload className="w-6 h-6 text-gray-400 mb-2" />
                  <p className="text-gray-500 text-sm">Drop your CV Here</p>
                  <p className="text-gray-400 text-xs mt-1">or click to browse</p>
                  <input id="file-input" type="file" accept=".pdf" onChange={handleFileInput} className="hidden" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-6">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="Search" className="pl-10 h-11 rounded-xl border-gray-200" />
            </div>

            <div className="space-y-3">
              {Array.from({ length: 8 }).map((_, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 border-2 border-gray-300 rounded-full"></div>
                        <div>
                          <h3 className="font-medium text-base leading-6 mb-2">UX Designer at Seven X</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600 leading-5">
                            <MapPin className="w-4 h-4" />
                            <span>Rwanda, Kigali</span>
                            <span>•</span>
                            <span>Closing in 5 days</span>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 text-xs min-h-7 px-2.5 rounded-full">
                        38+ applicants
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="col-span-3">
            <Card className="border border-gray-200 rounded-xl sticky top-6">
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg mb-4">Filter</h3>

                <div className="space-y-4">
                  {/* Industry */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Industry</label>
                    <div className="relative">
                      <select className="w-full h-10 px-2.5 border border-gray-200 rounded-xl appearance-none bg-white text-gray-500">
                        <option>Ex: finance</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  {/* Job Type */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Job type</label>
                    <div className="relative">
                      <select className="w-full h-10 px-2.5 border border-gray-200 rounded-xl appearance-none bg-white text-gray-500">
                        <option>Ex: full time</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  {/* Job Location */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Job Location</label>
                    <div className="relative mb-3">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Search cities / Countries"
                        className="pl-10 h-10 border-gray-200 rounded-xl"
                      />
                    </div>
                    <label className="flex items-center gap-2 text-sm leading-5">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                      <span>Remote only</span>
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Experience</label>
                    <div className="space-y-2">
                      <div className="relative">
                        <select className="w-full h-10 px-2.5 border border-gray-200 rounded-xl appearance-none bg-white text-gray-500">
                          <option>Seniority</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["Entry", "Junior", "Mid", "Senior"].map((level) => (
                          <button
                            key={level}
                            className="inline-flex items-center h-7 rounded-full px-2.5 text-sm border border-gray-200 hover:bg-gray-50"
                          >
                            {level}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-6 pt-3 border-t border-gray-100">
                  <Button variant="outline" className="flex-1 h-10 rounded-xl bg-transparent">
                    Reset
                  </Button>
                  <Button className="flex-1 h-10 rounded-xl bg-blue-500 hover:bg-blue-600">Apply (0)</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Dialog open={showJobForm} onOpenChange={setShowJobForm}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Post a Free Job</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleJobSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Job Title</label>
              <Input placeholder="e.g. Senior UX Designer" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Company Name</label>
              <Input placeholder="e.g. Seven X" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <Input placeholder="e.g. Rwanda, Kigali" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Job Type</label>
              <select className="w-full h-10 px-3 border border-gray-200 rounded-lg" required>
                <option value="">Select job type</option>
                <option value="full-time">Full time</option>
                <option value="part-time">Part time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Job Description</label>
              <Textarea placeholder="Describe the role, responsibilities, and requirements..." rows={4} required />
            </div>
            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => setShowJobForm(false)} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1 bg-blue-500 hover:bg-blue-600">
                Publish Job
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={showJobSuccess} onOpenChange={setShowJobSuccess}>
        <DialogContent className="max-w-md text-center">
          <div className="mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎉</span>
            </div>
            <DialogTitle className="text-xl mb-2">Your job is ready to go live!</DialogTitle>
            <p className="text-gray-600 text-sm">
              Create your free account to manage applicants, edit your post, or close the job.
            </p>
          </div>
          <div className="space-y-3">
            <Button className="w-full bg-blue-500 hover:bg-blue-600">Sign up with Google</Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Sign up with LinkedIn</Button>
            <Button variant="outline" className="w-full bg-transparent">
              Create account with email
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showResumeSuccess} onOpenChange={setShowResumeSuccess}>
        <DialogContent className="max-w-md text-center">
          <div className="mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✅</span>
            </div>
            <DialogTitle className="text-xl mb-2">Resume uploaded successfully!</DialogTitle>
            <p className="text-gray-600 text-sm">
              Create a free account to save your resume and apply for jobs with one click.
            </p>
            {uploadedFile && (
              <div className="bg-gray-50 rounded-lg p-3 mt-3">
                <p className="text-sm font-medium">{uploadedFile.name}</p>
                <p className="text-xs text-gray-500">{(uploadedFile.size / 1024 / 1024).toFixed(1)} MB</p>
              </div>
            )}
          </div>
          <div className="space-y-3">
            <Button className="w-full bg-blue-500 hover:bg-blue-600">Continue with Google</Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Continue with LinkedIn</Button>
            <Button variant="outline" className="w-full bg-transparent">
              Continue with email
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
