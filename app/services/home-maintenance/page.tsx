import ServiceLayout from "@/components/service-layout"
import { Home } from "lucide-react"

export default function HomeMaintenancePage() {
  return (
    <ServiceLayout
      title="Home Maintenance"
      description="Keep your home in perfect condition with our comprehensive maintenance services. From seasonal upkeep to preventive care, we help protect your investment year-round."
      icon={<Home className="h-8 w-8" />}
      heroImage="https://images.pexels.com/photos/5691650/pexels-photo-5691650.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
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
          before: "https://images.pexels.com/photos/5691649/pexels-photo-5691649.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/5691648/pexels-photo-5691648.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Gutter cleaning - removed debris and restored proper drainage",
        },
        {
          before: "https://images.pexels.com/photos/5691647/pexels-photo-5691647.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/5691646/pexels-photo-5691646.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Pressure washing - restored deck to like-new condition",
        },
        {
          before: "https://images.pexels.com/photos/5691645/pexels-photo-5691645.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/5691644/pexels-photo-5691644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
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
