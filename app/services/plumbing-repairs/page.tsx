import ServiceLayout from "@/components/service-layout"
import { Wrench } from "lucide-react"

export default function PlumbingRepairsPage() {
  return (
    <ServiceLayout
      title="Plumbing Repairs"
      description="Expert plumbing solutions for your home. From leaky faucets to major pipe repairs, our licensed plumbers deliver reliable, long-lasting fixes with upfront pricing and guaranteed workmanship."
      icon={<Wrench className="h-8 w-8" />}
      heroImage="/placeholder.svg?height=400&width=600"
      services={[
        "Leaky Faucet Repair",
        "Toilet Repair & Installation",
        "Drain Cleaning & Unclogging",
        "Pipe Leak Detection & Repair",
        "Water Heater Service",
        "Garbage Disposal Repair",
        "Shower & Bathtub Repair",
        "Sump Pump Installation",
        "Water Line Replacement",
        "Emergency Plumbing Services",
      ]}
      beforeAfterImages={[
        {
          before: "/placeholder.svg?height=200&width=300",
          after: "/placeholder.svg?height=200&width=300",
          description: "Kitchen faucet replacement - from old leaky fixture to modern efficient model",
        },
        {
          before: "/placeholder.svg?height=200&width=300",
          after: "/placeholder.svg?height=200&width=300",
          description: "Bathroom toilet installation - complete removal and new toilet setup",
        },
        {
          before: "/placeholder.svg?height=200&width=300",
          after: "/placeholder.svg?height=200&width=300",
          description: "Pipe leak repair - fixed burst pipe and restored water pressure",
        },
      ]}
      pricing={[
        {
          service: "Faucet Repair",
          price: "$85-150",
          description: "Basic faucet repair including parts and labor",
        },
        {
          service: "Toilet Installation",
          price: "$200-350",
          description: "Complete toilet removal and installation",
        },
        {
          service: "Drain Cleaning",
          price: "$120-200",
          description: "Professional drain cleaning and unclogging",
        },
        {
          service: "Water Heater Service",
          price: "$150-300",
          description: "Water heater maintenance and minor repairs",
        },
        {
          service: "Emergency Service",
          price: "$150+",
          description: "24/7 emergency plumbing repairs",
        },
        {
          service: "Pipe Repair",
          price: "$200-500",
          description: "Pipe leak detection and repair",
        },
      ]}
      features={[
        "Licensed Plumbers",
        "24/7 Emergency Service",
        "Upfront Pricing",
        "Quality Guarantee",
        "Modern Equipment",
        "Clean Work Area",
        "Insurance Coverage",
        "Free Estimates",
      ]}
      testimonials={[
        {
          name: "Sarah Johnson",
          review: "Fixed our kitchen sink leak quickly and professionally. Great service and fair pricing!",
          rating: 5,
          project: "Kitchen Faucet Repair",
        },
        {
          name: "Mike Chen",
          review: "Emergency toilet repair on Sunday - they came right out and got it working perfectly.",
          rating: 5,
          project: "Emergency Toilet Repair",
        },
        {
          name: "Lisa Rodriguez",
          review: "Professional water heater installation. Clean work and explained everything clearly.",
          rating: 5,
          project: "Water Heater Installation",
        },
      ]}
    />
  )
}
