import ServiceLayout from "@/components/service-layout"
import { Hammer } from "lucide-react"

export default function CarpentryPage() {
  return (
    <ServiceLayout
      title="Carpentry Services"
      description="Custom carpentry solutions for your home. From built-in shelving to door installations, our skilled carpenters deliver precision craftsmanship and functional beauty."
      icon={<Hammer className="h-8 w-8" />}
      heroImage="https://images.pexels.com/photos/5691657/pexels-photo-5691657.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
      services={[
        "Custom Shelving & Storage",
        "Door Installation & Repair",
        "Window Trim & Casing",
        "Crown Molding Installation",
        "Furniture Assembly",
        "Deck & Patio Repair",
        "Stair Repair & Railings",
        "Cabinet Installation",
        "Closet Organization",
        "Custom Woodwork",
      ]}
      beforeAfterImages={[
        {
          before: "https://images.pexels.com/photos/1216607/pexels-photo-1216607.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/1216608/pexels-photo-1216608.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Custom built-in shelving - maximized storage in living room",
        },
        {
          before: "https://images.pexels.com/photos/1216609/pexels-photo-1216609.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/1216610/pexels-photo-1216610.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Door installation - replaced old door with modern design",
        },
        {
          before: "https://images.pexels.com/photos/1216611/pexels-photo-1216611.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/1216612/pexels-photo-1216612.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Crown molding installation - added elegant finishing touches",
        },
        {
          before: "https://images.pexels.com/photos/1216643/pexels-photo-1216643.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/1216644/pexels-photo-1216644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Kitchen island build - custom storage and workspace addition",
        },
        {
          before: "https://images.pexels.com/photos/1216645/pexels-photo-1216645.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/1216646/pexels-photo-1216646.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Deck repair and staining - restored outdoor living space",
        },
        {
          before: "https://images.pexels.com/photos/1216647/pexels-photo-1216647.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          after: "https://images.pexels.com/photos/1216648/pexels-photo-1216648.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
          description: "Closet organization system - custom shelving and hanging space",
        },
      ]}
      pricing={[
        {
          service: "Custom Shelving",
          price: "$300-800",
          description: "Built-in shelving per linear foot",
        },
        {
          service: "Door Installation",
          price: "$200-400",
          description: "Interior door hanging and hardware",
        },
        {
          service: "Crown Molding",
          price: "$8-15/ft",
          description: "Crown molding installation per foot",
        },
        {
          service: "Furniture Assembly",
          price: "$75-150",
          description: "Professional furniture assembly service",
        },
        {
          service: "Deck Repair",
          price: "$300-1000",
          description: "Deck board replacement and repair",
        },
        {
          service: "Custom Project",
          price: "Quote",
          description: "Custom carpentry project pricing",
        },
      ]}
      features={[
        "Precision Craftsmanship",
        "Quality Materials",
        "Custom Solutions",
        "Detailed Finishing",
        "Project Planning",
        "Clean Work Site",
        "Warranty Included",
        "Design Consultation",
      ]}
      testimonials={[
        {
          name: "Steve Martinez",
          review: "Built amazing custom shelves in our home office. Perfect fit and beautiful finish!",
          rating: 5,
          project: "Custom Shelving",
        },
        {
          name: "Rachel Green",
          review: "Door installation was flawless. Operates smoothly and looks great.",
          rating: 5,
          project: "Door Installation",
        },
        {
          name: "Paul Thompson",
          review: "Crown molding transformed our dining room. Excellent attention to detail.",
          rating: 5,
          project: "Crown Molding",
        },
      ]}
    />
  )
}
