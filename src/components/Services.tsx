import { Building2, HomeIcon, Wrench, PaintBucket, Ruler, HardHat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "Commercial Renovation",
    description: "Transform your business space with our expert commercial renovation services",
  },
  {
    icon: HomeIcon,
    title: "Residential Projects",
    description: "Create your dream home with our custom residential construction solutions",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Keep your property in perfect condition with our professional maintenance",
  },
  {
    icon: PaintBucket,
    title: "Interior Finishing",
    description: "Expert interior finishing touches that bring your vision to life",
  },
  {
    icon: Ruler,
    title: "Project Planning",
    description: "Comprehensive project planning and architectural consultation",
  },
  {
    icon: HardHat,
    title: "Construction Management",
    description: "Professional oversight of your entire construction project",
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive construction and renovation services tailored to your needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 
                         hover:translate-y-[-5px] bg-white"
            >
              <CardContent className="p-8">
                <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};