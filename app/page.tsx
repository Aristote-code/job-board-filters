import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Plus, Upload, Users } from "lucide-react"

export default function JobBoard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-blue-600">BAG</div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  DASHBOARD
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  LEARNING
                </a>
                <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-4">
                  JOB BOARD
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  RESUME
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">LOGIN</Button>
              <Button>GET STARTED</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Left Side - Main Content */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="SEARCH..." className="pl-10 py-3 text-lg" />
            </div>

            {/* Action Components */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {/* Post a Job Component */}
              <Card className="border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Plus className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-blue-900">Post a Job</h3>
                      <p className="text-blue-700 text-sm">Find the perfect candidate for your company</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Add Your CV Component */}
              <Card className="border-2 border-green-200 bg-green-50 hover:bg-green-100 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-600 p-3 rounded-lg">
                      <Upload className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-green-900">Add Your CV</h3>
                      <p className="text-green-700 text-sm">Get considered for future opportunities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
              {/* Job 1 */}
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        BAG
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">BAG Technologies</div>
                        <h3 className="font-semibold text-lg mb-2">Chief Operating Officer (COO)</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <img src="/rwanda-flag.png" alt="Rwanda" className="w-4 h-4" />
                            <span>Rwanda, Kigali</span>
                          </div>
                          <Badge variant="secondary">Full time</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-blue-100 text-blue-800 mb-2">New</Badge>
                      <div className="text-sm text-gray-500">Closing in 13 days</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Job 2 */}
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        BAG
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">BAG Technologies</div>
                        <h3 className="font-semibold text-lg mb-2">Admin & Procurement Officer</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <img src="/chad-flag.png" alt="Chad" className="w-4 h-4" />
                            <span>Chad, Ouaddai</span>
                          </div>
                          <Badge variant="secondary">Full time</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-blue-100 text-blue-800 mb-2">New</Badge>
                      <div className="text-sm text-gray-500">Closing in 13 days</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Job 3 */}
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        RWACOF
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">SUCAFINA (RWACOF)</div>
                        <h3 className="font-semibold text-lg mb-2">Sustainability Manager</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <img src="/rwanda-flag.png" alt="Rwanda" className="w-4 h-4" />
                            <span>Rwanda, Kigali</span>
                          </div>
                          <Badge variant="secondary">Full time</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-blue-600 text-sm mb-2">
                        <Users className="w-4 h-4" />
                        <span>10+ applicants</span>
                      </div>
                      <div className="text-sm text-gray-500">Closing in 9 days</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Job 4 */}
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        SLS
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">SLS Energy Ltd</div>
                        <h3 className="font-semibold text-lg mb-2">Field Tech Operations Manager</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <img src="/rwanda-flag.png" alt="Rwanda" className="w-4 h-4" />
                            <span>Rwanda, Kigali</span>
                          </div>
                          <Badge variant="secondary">Full time</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-blue-600 text-sm mb-2">
                        <Users className="w-4 h-4" />
                        <span>41+ applicants</span>
                      </div>
                      <div className="text-sm text-gray-500">Closing in 18 days</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Job 5 */}
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        A
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Andersen in Rwanda</div>
                        <h3 className="font-semibold text-lg mb-2">Graduate Trainee – Business Support Services</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <img src="/rwanda-flag.png" alt="Rwanda" className="w-4 h-4" />
                            <span>Rwanda, Kigali</span>
                          </div>
                          <Badge variant="secondary">Internship</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-blue-600 text-sm mb-2">
                        <Users className="w-4 h-4" />
                        <span>38+ applicants</span>
                      </div>
                      <div className="text-sm text-gray-500">Closing in 5 days</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Side - Filters */}
          <div className="w-80">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-lg">Filters</h3>
                  <Filter className="w-5 h-5 text-gray-400" />
                </div>

                <div className="space-y-6">
                  {/* Job Type */}
                  <div>
                    <h4 className="font-medium mb-3">Job type</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="jobType" className="w-4 h-4" />
                        <span className="text-sm">Full time</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="jobType" className="w-4 h-4" />
                        <span className="text-sm">Part time</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="jobType" className="w-4 h-4" />
                        <span className="text-sm">Internship</span>
                      </label>
                    </div>
                  </div>

                  {/* Job Location */}
                  <div>
                    <h4 className="font-medium mb-3">Job Location</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="location" className="w-4 h-4" />
                        <span className="text-sm">On site</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="location" className="w-4 h-4" />
                        <span className="text-sm">Remote</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="location" className="w-4 h-4" />
                        <span className="text-sm">Hybrid</span>
                      </label>
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <h4 className="font-medium mb-3">Experience Level</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="experience" className="w-4 h-4" />
                        <span className="text-sm">Less than a year</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="experience" className="w-4 h-4" />
                        <span className="text-sm">1-3 Years</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="experience" className="w-4 h-4" />
                        <span className="text-sm">3+ Years</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="experience" className="w-4 h-4" />
                        <span className="text-sm">5+ years</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4">
                    <Button className="w-full">Apply Filters</Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      Reset Filters
                    </Button>
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
