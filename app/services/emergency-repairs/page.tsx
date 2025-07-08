import ServiceLayout from "@/components/service-layout"
import { Shield } from "lucide-react"

export default function EmergencyRepairsPage() {
  return (
    <ServiceLayout
      title="Emergency Repairs"
      description="24/7 emergency handyman services when you need help fast. From burst pipes to electrical issues, our rapid response team is ready to handle urgent home repairs any time, day or night."
      icon={<Shield className="h-8 w-8" />}
      heroImage="https://images.pexels.com/photos/5691643/pexels-photo-5691643.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
      services={[
        "24/7 Emergency Response",
        "Burst Pipe Repairs",
        "Electrical Emergencies",
        "Storm Damage Repair",
        "Lock-out Services",
        "Water Damage Mitigation",
        "Heating System Repairs",
        "Roof Leak Repairs",
        "Security Issues",
        "Safety Hazard Fixes",
      ]}
      beforeAfterImages={[
        {
          before: "https://images.pexels.com/photos/5691642/pexels-photo-5691642.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/5691641/pexels-photo-5691641.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Emergency pipe burst repair - stopped flooding and restored water service",
        },
        {
          before: "https://images.pexels.com/photos/5691640/pexels-photo-5691640.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/5691639/pexels-photo-5691639.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Storm damage repair - secured roof and prevented further damage",
        },
        {
          before: "https://images.pexels.com/photos/5691638/pexels-photo-5691638.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/5691637/pexels-photo-5691637.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Emergency electrical repair - restored power safely and quickly",
        },
      ]}
      pricing={[
        {
          service: "Emergency Call-out",
          price: "$150",
          description: "24/7 emergency service call fee",
        },
        {
          service: "Pipe Burst Repair",
          price: "$200-500",
          description: "Emergency plumbing repair service",
        },
        {
          service: "Electrical Emergency",
          price: "$175-400",
          description: "Emergency electrical repair work",
        },
        {
          service: "Storm Damage",
          price: "$300-1000",
          description: "Emergency storm damage repairs",
        },
        {
          service: "Water Damage",
          price: "$250-750",
          description: "Emergency water damage mitigation",
        },
        {
          service: "Lock-out Service",
          price: "$125-200",
          description: "Emergency locksmith services",
        },
      ]}
      features={[
        "24/7 Availability",
        "Rapid Response",
        "Emergency Equipment",
        "Licensed Professionals",
        "Insurance Claims Help",
        "Temporary Solutions",
        "Follow-up Service",
        "Priority Scheduling",
      ]}
      testimonials={[
        {
          name: "John Peterson",
          review: "Pipe burst at 2AM - they came out immediately and fixed it perfectly!",
          rating: 5,
          project: "Emergency Plumbing",
        },
        {
          name: "Susan Lee",
          review: "Storm damaged our roof - quick response prevented major water damage.",
          rating: 5,
          project: "Storm Damage Repair",
        },
        {
          name: "Mike Torres",
          review: "Electrical emergency handled professionally and safely. Great service!",
          rating: 5,
          project: "Emergency Electrical",
        },
      ]}
    />
  )
}
