import ServiceLayout from "@/components/service-layout"
import { Zap } from "lucide-react"

export default function ElectricalWorkPage() {
  return (
    <ServiceLayout
      title="Electrical Work"
      description="Safe, reliable electrical services by licensed electricians. From simple outlet repairs to complete lighting installations, we handle all your electrical needs with safety as our top priority."
      icon={<Zap className="h-8 w-8" />}
      heroImage="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
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
          before: "https://images.pexels.com/photos/1216595/pexels-photo-1216595.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/1216596/pexels-photo-1216596.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Dining room chandelier installation - from basic fixture to elegant lighting",
        },
        {
          before: "https://images.pexels.com/photos/1216597/pexels-photo-1216597.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/1216598/pexels-photo-1216598.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Kitchen outlet upgrade - added GFCI outlets for safety compliance",
        },
        {
          before: "https://images.pexels.com/photos/1216599/pexels-photo-1216599.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/1216600/pexels-photo-1216600.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Ceiling fan installation - improved air circulation and lighting",
        },
        {
          before: "https://images.pexels.com/photos/1216631/pexels-photo-1216631.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/1216632/pexels-photo-1216632.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Outdoor lighting installation - enhanced security and curb appeal",
        },
        {
          before: "https://images.pexels.com/photos/1216633/pexels-photo-1216633.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/1216634/pexels-photo-1216634.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Panel upgrade - modernized electrical system for safety",
        },
        {
          before: "https://images.pexels.com/photos/1216635/pexels-photo-1216635.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/1216636/pexels-photo-1216636.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Kitchen under-cabinet lighting - added task lighting for cooking",
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
