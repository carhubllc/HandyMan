"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Hammer, Menu, Phone } from "lucide-react"
import Link from "next/link"

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const services = [
    { name: "Plumbing Repairs", href: "/services/plumbing-repairs" },
    { name: "Electrical Work", href: "/services/electrical-work" },
    { name: "Painting & Drywall", href: "/services/painting-drywall" },
    { name: "Carpentry", href: "/services/carpentry" },
    { name: "Home Maintenance", href: "/services/home-maintenance" },
    { name: "Emergency Repairs", href: "/services/emergency-repairs" },
  ]

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Hammer className="h-7 w-7 sm:h-8 sm:w-8 text-orange-600" />
            <span className="text-xl sm:text-2xl font-bold text-gray-900">ProFix</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-orange-600 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Call Button */}
          <Button className="hidden sm:flex bg-orange-600 hover:bg-orange-700 text-sm sm:text-base">
            <Phone className="h-4 w-4 mr-2" />
            <span className="hidden md:inline">Call Now</span>
            <span className="md:hidden">(555) 123-4567</span>
          </Button>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Mobile Call Button */}
            <Button size="sm" className="bg-orange-600 hover:bg-orange-700 sm:hidden">
              <Phone className="h-4 w-4" />
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b">
                    <div className="flex items-center space-x-2">
                      <Hammer className="h-6 w-6 text-orange-600" />
                      <span className="text-lg font-bold text-gray-900">ProFix</span>
                    </div>
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1 py-6">
                    <div className="space-y-6">
                      {/* Main Navigation */}
                      <div className="space-y-3">
                        <Link
                          href="#services"
                          className="block text-lg font-medium text-gray-900 hover:text-orange-600 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          Services
                        </Link>
                        <Link
                          href="#about"
                          className="block text-lg font-medium text-gray-900 hover:text-orange-600 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          About
                        </Link>
                        <Link
                          href="#contact"
                          className="block text-lg font-medium text-gray-900 hover:text-orange-600 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          Contact
                        </Link>
                      </div>

                      {/* Services Submenu */}
                      <div className="border-t pt-6">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Our Services
                        </h3>
                        <div className="space-y-2">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block text-gray-700 hover:text-orange-600 transition-colors py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </nav>

                  {/* Footer */}
                  <div className="border-t pt-6 space-y-4">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700" onClick={() => setIsOpen(false)}>
                      <Phone className="h-4 w-4 mr-2" />
                      Call (555) 123-4567
                    </Button>
                    <div className="text-center text-sm text-gray-500">
                      <p>Available 24/7 for emergencies</p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
