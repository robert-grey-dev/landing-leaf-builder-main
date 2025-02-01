import { Building2, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Modern Office Renovation",
    description: "Complete transformation of a 2000 sq ft office space with sustainable materials and smart technology integration",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    icon: Building2,
    alt: "Modern office space with large windows and contemporary design"
  },
  {
    title: "Contemporary Home",
    description: "Custom-built residential project featuring open-concept design and energy-efficient solutions",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    icon: Home,
    alt: "Contemporary home exterior with modern architecture"
  },
];

export const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    const loadImages = () => {
      const imagePromises = projects.map((project) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = project.image;
          img.onload = resolve;
        });
      });

      Promise.all(imagePromises).then(() => {
        setIsLoading(false);
      });
    };

    loadImages();
  }, []);

  return (
    <section 
      id="projects" 
      className="py-24 bg-gradient-to-b from-white to-gray-50"
      aria-label="Featured Projects"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our latest work and see how we transform spaces into extraordinary environments
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-none animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative">
                  {isLoading && (
                    <div className="w-full h-80 bg-gray-200 animate-pulse" />
                  )}
                  <img
                    src={project.image}
                    alt={project.alt}
                    className={`w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110 ${
                      isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="flex items-center mb-3">
                        <project.icon className="w-6 h-6 text-primary mr-3" />
                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                      </div>
                      <p className="text-gray-200 mb-4">{project.description}</p>
                      <Button 
                        variant="outline" 
                        className="text-black border-white bg-white hover:bg-white/90 hover:text-black
                                 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};