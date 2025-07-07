import ServiceLayout from "@/components/service-layout"
import { Home } from "lucide-react"

export default function HomeMaintenancePage() {
  return (
    <ServiceLayout
      title="Home Maintenance"
      description="Keep your home in perfect condition with our comprehensive maintenance services. From seasonal upkeep to preventive care, we help protect your investment year-round."
      icon={<Home className="h-8 w-8" />}
      heroImage="/placeholder.svg?height=400&width=600"
      services={[
        "Gutter Cleaning & Repair",
        "Pressure Washing",
        "Caulking & Sealing",
        "Weather Stripping",
        "HVAC Filter Replacement",
        "Seasonal Inspections",
        "Minor Roof Repairs",
        "Window Cleaning",
        "Deck Maintenance",
        "Preventive Care Plans",
      ]}
      beforeAfterImages={[
        {
          before: "/placeholder.svg?height=200&width=300",
          after: "/placeholder.svg?height=200&width=300",
          description: "Gutter cleaning - removed debris and restored proper drainage",
        },
        {
          before: "/placeholder.svg?height=200&width=300",
          after: "/placeholder.svg?height=200&width=300",
          description: "Pressure washing - restored deck to like-new condition",
        },
        {
          before: "/placeholder.svg?height=200&width=300",
          after: "/placeholder.svg?height=200&width=300",
          description: "Caulking repair - sealed gaps to prevent water damage",
        },
      ]}
      pricing={[
        {
          service: "Gutter Cleaning",
          price: "$150-300",
          description: "Complete gutter cleaning and inspection",
        },
        {
          service: "Pressure Washing",
          price: "$200-500",
          description: "House exterior or deck pressure washing",
        },
        {
          service: "Caulking Service",
          price: "$100-250",
          description: "Bathroom and kitchen caulking refresh",
        },
        {
          service: "Seasonal Inspection",
          price: "$125-200",
          description: "Comprehensive home maintenance check",
        },
        {
          service: "Weather Stripping",
          price: "$150-300",
          description: "Door and window weather stripping",
        },
        {
          service: "Maintenance Plan",
          price: "$500-1000/yr",
          description: "Annual home maintenance package",
        },
      ]}
      features={[
        "Preventive Approach",
        "Seasonal Scheduling",
        "Detailed Inspections",
        "Professional Equipment",
        "Maintenance Records",
        "Priority Scheduling",
        "Cost Savings",
        "Peace of Mind",
      ]}
      testimonials={[
        {
          name: "Linda Davis",
          review: "Gutter cleaning service was thorough and professional. Great value!",
          rating: 5,
          project: "Gutter Cleaning",
        },
        {
          name: "Mark Johnson",
          review: "Pressure washed our deck and it looks amazing! Like new again.",
          rating: 5,
          project: "Pressure Washing",
        },
        {
          name: "Carol White",
          review: "Annual maintenance plan keeps our home in perfect condition.",
          rating: 5,
          project: "Maintenance Plan",
        },
      ]}
    />
  )
}
