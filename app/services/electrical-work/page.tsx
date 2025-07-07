import ServiceLayout from "@/components/service-layout"
import { Zap } from "lucide-react"

export default function ElectricalWorkPage() {
  return (
    <ServiceLayout
      title="Electrical Work"
      description="Safe, reliable electrical services by licensed electricians. From simple outlet repairs to complete lighting installations, we handle all your electrical needs with safety as our top priority."
      icon={<Zap className="h-8 w-8" />}
      heroImage="/placeholder.svg?height=400&width=600"
      services={[
        "Light Fixture Installation",
        "Outlet & Switch Repair",
        "Ceiling Fan Installation",
        "GFCI Outlet Installation",
        "Circuit Breaker Repair",
        "Electrical Panel Upgrade",
        "Outdoor Lighting Setup",
        "Smoke Detector Installation",
        "USB Outlet Installation",
        "Electrical Safety Inspection",
      ]}
      beforeAfterImages={[
        {
          before: "/placeholder.svg?height=200&width=300",
          after: "/placeholder.svg?height=200&width=300",
          description: "Dining room chandelier installation - from basic fixture to elegant lighting",
        },
        {
          before: "/placeholder.svg?height=200&width=300",
          after: "/placeholder.svg?height=200&width=300",
          description: "Kitchen outlet upgrade - added GFCI outlets for safety compliance",
        },
        {
          before: "/placeholder.svg?height=200&width=300",
          after: "/placeholder.svg?height=200&width=300",
          description: "Ceiling fan installation - improved air circulation and lighting",
        },
      ]}
      pricing={[
        {
          service: "Light Fixture Install",
          price: "$120-250",
          description: "Standard light fixture installation including wiring",
        },
        {
          service: "Outlet Repair",
          price: "$85-150",
          description: "Outlet replacement or repair work",
        },
        {
          service: "Ceiling Fan Install",
          price: "$200-350",
          description: "Complete ceiling fan installation with controls",
        },
        {
          service: "GFCI Outlet",
          price: "$150-200",
          description: "GFCI outlet installation for safety",
        },
        {
          service: "Panel Upgrade",
          price: "$800-1500",
          description: "Electrical panel upgrade and modernization",
        },
        {
          service: "Safety Inspection",
          price: "$100-150",
          description: "Comprehensive electrical safety check",
        },
      ]}
      features={[
        "Licensed Electricians",
        "Code Compliant Work",
        "Safety First Approach",
        "Modern Equipment",
        "Warranty Included",
        "Clean Installation",
        "Free Estimates",
        "Emergency Service",
      ]}
      testimonials={[
        {
          name: "David Wilson",
          review: "Installed beautiful pendant lights in our kitchen. Professional work and great attention to detail.",
          rating: 5,
          project: "Kitchen Lighting Installation",
        },
        {
          name: "Jennifer Adams",
          review: "Fixed our faulty outlets quickly and safely. Very knowledgeable electrician.",
          rating: 5,
          project: "Outlet Repair",
        },
        {
          name: "Robert Kim",
          review: "Ceiling fan installation was perfect. Works great and looks fantastic!",
          rating: 5,
          project: "Ceiling Fan Installation",
        },
      ]}
    />
  )
}
