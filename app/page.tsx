import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, ChevronDown, MapPin } from "lucide-react"

export default function JobBoard() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-2xl font-semibold mb-6">Job board</h1>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3 space-y-4">
            {/* Post a Job Card */}
            <Card className="border border-gray-200 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Post a job for free</h3>
                <p className="text-gray-600 text-sm mb-4">Reach over 30k talents across Africa</p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 rounded-lg">Post a free job</Button>
              </CardContent>
            </Card>

            {/* Add Resume Card */}
            <Card className="border border-gray-200 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Add your resume</h3>
                <p className="text-gray-600 text-sm mb-4">Add your resume for future opportunities</p>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
                  <p className="text-gray-500 text-sm">Drop your CV Here</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-6">
            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="Search" className="pl-10 py-3 rounded-2xl border-gray-200" />
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <Card key={index} className="border border-gray-200 rounded-2xl hover:shadow-sm transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 border-2 border-gray-300 rounded-full"></div>
                        <div>
                          <h3 className="font-medium">UX Designer at Seven X</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                            <MapPin className="w-4 h-4" />
                            <span>Rwanda, Kigali</span>
                            <span>•</span>
                            <span>Closing in 5 days</span>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 text-xs">38+ applicants</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="col-span-3">
            <Card className="border border-gray-200 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-6">Filter</h3>

                <div className="space-y-6">
                  {/* Industry */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Industry</label>
                    <div className="relative">
                      <select className="w-full p-3 border border-gray-200 rounded-lg appearance-none bg-white text-gray-500">
                        <option>Ex: finance</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  {/* Job Type */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Job type</label>
                    <div className="relative">
                      <select className="w-full p-3 border border-gray-200 rounded-lg appearance-none bg-white text-gray-500">
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
                      <Input placeholder="Search cities / Countries" className="pl-10 border-gray-200 rounded-lg" />
                    </div>
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                      <span>Remote only</span>
                    </label>
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Experience</label>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <select className="w-full p-3 border border-gray-200 rounded-lg appearance-none bg-white text-gray-500">
                          <option>Min</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      </div>
                      <div className="relative">
                        <select className="w-full p-3 border border-gray-200 rounded-lg appearance-none bg-white text-gray-500">
                          <option>Max</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
