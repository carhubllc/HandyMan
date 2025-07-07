import ServiceLayout from "@/components/service-layout"
import { PaintBucket } from "lucide-react"

export default function PaintingDrywallPage() {
  return (
    <ServiceLayout
      title="Painting & Drywall"
      description="Transform your space with professional painting and drywall services. From color consultation to flawless finishes, we deliver beautiful results that enhance your home's value and appeal."
      icon={<PaintBucket className="h-8 w-8" />}
      heroImage="/placeholder.svg?height=400&width=600"
      services={[
        "Interior Painting",
        "Exterior Painting",
        "Drywall Repair & Patching",
        "Texture Matching",
        "Color Consultation",
        "Trim & Molding Paint",
        "Cabinet Painting",
        "Wallpaper Removal",
        "Primer & Sealing",
        "Touch-up Services",
      ]}
      beforeAfterImages={[
        {
          before: "/placeholder.svg?height=200&width=300",
          after: "/placeholder.svg?height=200&width=300",
          description: "Living room transformation - from dated colors to modern neutral palette",
        },
        {
          before: "/placeholder.svg?height=200&width=300",
          after: "/placeholder.svg?height=200&width=300",
          description: "Drywall hole repair - seamless patch and paint match",
        },
        {
          before: "/placeholder.svg?height=200&width=300",
          after: "/placeholder.svg?height=200&width=300",
          description: "Kitchen cabinet refresh - painted cabinets for updated look",
        },
      ]}
      pricing={[
        {
          service: "Interior Room Paint",
          price: "$300-600",
          description: "Complete room painting including prep work",
        },
        {
          service: "Drywall Repair",
          price: "$75-200",
          description: "Hole patching and texture matching",
        },
        {
          service: "Exterior Paint",
          price: "$2000-5000",
          description: "Full exterior house painting project",
        },
        {
          service: "Cabinet Painting",
          price: "$800-2000",
          description: "Kitchen cabinet painting and refinishing",
        },
        {
          service: "Trim Painting",
          price: "$200-500",
          description: "Trim, doors, and molding painting",
        },
        {
          service: "Color Consultation",
          price: "$100-150",
          description: "Professional color selection service",
        },
      ]}
      features={[
        "Premium Paint Brands",
        "Color Matching",
        "Detailed Prep Work",
        "Clean Application",
        "Texture Expertise",
        "Fast Turnaround",
        "Satisfaction Guarantee",
        "Free Color Samples",
      ]}
      testimonials={[
        {
          name: "Maria Gonzalez",
          review: "Amazing paint job on our living room! The color consultation was so helpful.",
          rating: 5,
          project: "Interior Painting",
        },
        {
          name: "Tom Bradley",
          review: "Fixed wall holes perfectly - you can't even tell they were there!",
          rating: 5,
          project: "Drywall Repair",
        },
        {
          name: "Amy Foster",
          review: "Kitchen cabinet painting transformed our entire kitchen. Looks brand new!",
          rating: 5,
          project: "Cabinet Painting",
        },
      ]}
    />
  )
}
