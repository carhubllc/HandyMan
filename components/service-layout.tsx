"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, CheckCircle, Star, ArrowLeft, Calculator, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import MobileHeader from "@/components/mobile-header"

interface ServiceLayoutProps {
  title: string
  description: string
  icon: React.ReactNode
  heroImage: string
  services: string[]
  beforeAfterImages: { before: string; after: string; description: string }[]
  pricing: { service: string; price: string; description: string }[]
  features: string[]
  testimonials: { name: string; review: string; rating: number; project: string }[]
}

export default function ServiceLayout({
  title,
  description,
  icon,
  heroImage,
  services,
  beforeAfterImages,
  pricing,
  features,
  testimonials,
}: ServiceLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile-Responsive Header */}
      <MobileHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">Back to Home</span>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="bg-orange-600 text-white p-2 sm:p-3 rounded-full">{icon}</div>
                <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 text-xs sm:text-sm">Professional Service</Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">{title}</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">{description}</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 w-full sm:w-auto">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Schedule Service
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950/50 bg-transparent w-full sm:w-auto"
                >
                  <Calculator className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Get Quote
                </Button>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <Image
                src={heroImage}
                alt={`Professional ${title.toLowerCase()} service`}
                width={800}
                height={500}
                className="rounded-2xl shadow-2xl w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">
            Our {title} Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-l-4 border-l-orange-600 hover:shadow-md transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-foreground text-sm sm:text-base leading-relaxed">{service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">
            Before & After Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {beforeAfterImages.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <Image
                      src={project.before || "https://images.pexels.com/photos/5691661/pexels-photo-5691661.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"}
                      alt="Before"
                      width={400}
                      height={250}
                      className="w-full h-32 sm:h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={project.after || "https://images.pexels.com/photos/5691662/pexels-photo-5691662.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"}
                      alt="After"
                      width={400}
                      height={250}
                      className="w-full h-32 sm:h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                      After
                    </div>
                  </div>
                </div>
                <CardContent className="p-3 sm:p-4">
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">
            Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {pricing.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-base sm:text-lg">{item.service}</CardTitle>
                  <div className="text-2xl sm:text-3xl font-bold text-orange-600">{item.price}</div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              All prices include materials and labor. Free estimates available.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 w-full sm:w-auto">Get Custom Quote</Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">
            Why Choose Our {title}?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-4 sm:p-6 hover:shadow-md transition-shadow">
                <div className="bg-orange-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base leading-tight">{feature}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="flex text-yellow-400 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-3 sm:mb-4 italic text-sm sm:text-base leading-relaxed">
                  "{testimonial.review}"
                </p>
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.project}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
            Contact us today for a free estimate on your {title.toLowerCase()} project
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 w-full sm:w-auto">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Call (555) 123-4567
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 dark:hover:bg-gray-100 bg-transparent w-full sm:w-auto"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
