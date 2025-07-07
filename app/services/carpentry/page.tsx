import ServiceLayout from "@/components/service-layout"
import { Hammer } from "lucide-react"

export default function CarpentryPage() {
  return (
    <ServiceLayout
      title="Carpentry Services"
      description="Custom carpentry solutions for your home. From built-in shelving to door installations, our skilled carpenters deliver precision craftsmanship and functional beauty."
      icon={<Hammer className="h-8 w-8" />}
      heroImage="/placeholder.svg?height=400&width=600"
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
          before: "/placeholder.svg?height=200&width=300",
          after: "/placeholder.svg?height=200&width=300",
          description: "Custom built-in shelving - maximized storage in living room",
        },
        {
          before: "/placeholder.svg?height=200&width=300",
          after: "/placeholder.svg?height=200&width=300",
          description: "Door installation - replaced old door with modern design",
        },
        {
          before: "/placeholder.svg?height=200&width=300",
          after: "/placeholder.svg?height=200&width=300",
          description: "Crown molding installation - added elegant finishing touches",
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
