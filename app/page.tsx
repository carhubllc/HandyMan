import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Wrench,
  Hammer,
  PaintBucket,
  Zap,
  Home,
  CheckCircle,
  Users,
  Award,
  Shield,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import MobileHeader from "@/components/mobile-header"

export default function HandymanWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Mobile-Responsive Header */}
      <MobileHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-orange-100 py-12 sm:py-16 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 text-xs sm:text-sm">
                  Serving All of California
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Reliable Handyman Services in California – Fast, Affordable
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Professional home repairs and improvements you can trust. From minor fixes to major projects, we've
                  got you covered with quality workmanship and fair pricing.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                >
                  Get Free Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent w-full sm:w-auto"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span className="hidden sm:inline">(555) 123-4567</span>
                  <span className="sm:hidden">Call Now</span>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm sm:text-base text-gray-600">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
                  <span className="text-sm sm:text-base text-gray-600">500+ Happy Customers</span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Professional handyman working on home repairs"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  priority
                />
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg max-w-[280px] sm:max-w-none">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">Licensed & Insured</p>
                      <p className="text-xs sm:text-sm text-gray-600">Fully bonded professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Handyman Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From small repairs to complete renovations, we handle it all with expertise and care
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                slug: "plumbing-repairs",
                icon: <Wrench className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Plumbing Repairs",
                description: "Leaky faucets, clogged drains, toilet repairs, and pipe installations",
                features: ["Emergency repairs", "Fixture installation", "Pipe maintenance"],
              },
              {
                slug: "electrical-work",
                icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Electrical Work",
                description: "Light fixtures, outlets, switches, and minor electrical repairs",
                features: ["Light installation", "Outlet repair", "Switch replacement"],
              },
              {
                slug: "painting-drywall",
                icon: <PaintBucket className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Painting & Drywall",
                description: "Interior/exterior painting, drywall repair, and wall texturing",
                features: ["Interior painting", "Drywall patching", "Color consultation"],
              },
              {
                slug: "carpentry",
                icon: <Hammer className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Carpentry",
                description: "Custom shelving, door installation, trim work, and furniture assembly",
                features: ["Custom shelving", "Door hanging", "Trim installation"],
              },
              {
                slug: "home-maintenance",
                icon: <Home className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Home Maintenance",
                description: "Gutter cleaning, pressure washing, and seasonal maintenance",
                features: ["Gutter cleaning", "Pressure washing", "Seasonal checks"],
              },
              {
                slug: "emergency-repairs",
                icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Emergency Repairs",
                description: "24/7 emergency services for urgent home repair needs",
                features: ["24/7 availability", "Quick response", "Emergency fixes"],
              },
            ].map((service, index) => (
              <Link
                href={`/services/${service.slug}`}
                className="block hover:scale-105 transition-transform duration-200"
                key={index}
              >
                <Card className="hover:shadow-lg transition-shadow border-0 shadow-md h-full">
                  <CardHeader className="pb-4">
                    <div className="bg-orange-100 text-orange-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-sm sm:text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Experienced handyman team"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Why Choose ProFix Handyman Services?
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  With over 15 years of experience serving California homeowners, we pride ourselves on delivering
                  exceptional craftsmanship and reliable service. Our team of licensed professionals is committed to
                  your satisfaction.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    icon: <Award className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />,
                    title: "Licensed & Insured",
                    description: "Fully licensed contractors with comprehensive insurance coverage",
                  },
                  {
                    icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />,
                    title: "Same-Day Service",
                    description: "Quick response times with same-day service available",
                  },
                  {
                    icon: <Star className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />,
                    title: "Quality Guarantee",
                    description: "100% satisfaction guarantee on all our work",
                  },
                  {
                    icon: <Users className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />,
                    title: "Experienced Team",
                    description: "15+ years of experience with skilled professionals",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex space-x-3">
                    <div className="bg-orange-100 p-2 rounded-full flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{feature.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Get Your Free Quote Today</h2>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  Ready to get started? Contact us for a free, no-obligation quote. We'll assess your project and
                  provide transparent pricing.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-600 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Call or Text</p>
                    <p className="text-gray-300 text-sm sm:text-base">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-600 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Email Us</p>
                    <p className="text-gray-300 text-sm sm:text-base">info@profixhandyman.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-600 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Service Area</p>
                    <p className="text-gray-300 text-sm sm:text-base">All of California</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-600 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Business Hours</p>
                    <p className="text-gray-300 text-sm sm:text-base">Mon-Sat: 7AM-7PM | Sun: 9AM-5PM</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Request a Quote</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="John" className="text-base" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Doe" className="text-base" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="john@example.com" className="text-base" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <Input type="tel" placeholder="(555) 123-4567" className="text-base" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Service Needed</label>
                  <Input placeholder="e.g., Plumbing repair, Painting, etc." className="text-base" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Project Description</label>
                  <Textarea
                    placeholder="Please describe your project in detail..."
                    className="min-h-[100px] text-base"
                  />
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-base sm:text-lg py-4 sm:py-6">
                  Get Free Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2">
                <Hammer className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                <span className="text-xl sm:text-2xl font-bold">ProFix</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                California's trusted handyman service for all your home repair and improvement needs.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Services</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Plumbing Repairs</li>
                <li>Electrical Work</li>
                <li>Painting & Drywall</li>
                <li>Carpentry</li>
                <li>Home Maintenance</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Contact Info</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>(555) 123-4567</li>
                <li>info@profixhandyman.com</li>
                <li>Serving All of California</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Business Hours</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Monday - Saturday: 7AM - 7PM</li>
                <li>Sunday: 9AM - 5PM</li>
                <li>Emergency services available 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
            <p>&copy; {new Date().getFullYear()} ProFix Handyman Services. All rights reserved. | Licensed & Insured</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
