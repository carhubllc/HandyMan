import ServiceLayout from "@/components/service-layout"
import { Wrench } from "lucide-react"

export default function PlumbingRepairsPage() {
  return (
    <ServiceLayout
      title="Plumbing Repairs"
      description="Expert plumbing solutions for your home. From leaky faucets to major pipe repairs, our licensed plumbers deliver reliable, long-lasting fixes with upfront pricing and guaranteed workmanship."
      icon={<Wrench className="h-8 w-8" />}
      heroImage="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
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
          before: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/1216590/pexels-photo-1216590.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Kitchen faucet replacement - from old leaky fixture to modern efficient model",
        },
        {
          before: "https://images.pexels.com/photos/1216591/pexels-photo-1216591.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/1216592/pexels-photo-1216592.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Bathroom toilet installation - complete removal and new toilet setup",
        },
        {
          before: "https://images.pexels.com/photos/1216593/pexels-photo-1216593.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/1216594/pexels-photo-1216594.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Pipe leak repair - fixed burst pipe and restored water pressure",
        },
        {
          before: "https://images.pexels.com/photos/1216625/pexels-photo-1216625.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/1216626/pexels-photo-1216626.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Bathroom sink upgrade - replaced old vanity with modern double sink",
        },
        {
          before: "https://images.pexels.com/photos/1216627/pexels-photo-1216627.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/1216628/pexels-photo-1216628.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Shower head replacement - upgraded to rainfall shower system",
        },
        {
          before: "https://images.pexels.com/photos/1216629/pexels-photo-1216629.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/1216630/pexels-photo-1216630.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Water heater installation - new energy-efficient tankless system",
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
