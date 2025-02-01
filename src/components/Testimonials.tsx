import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Alex Peterson",
    role: "CEO, Tech Solutions",
    content: "Outstanding work! The project was completed on time with exceptional quality. Their attention to detail and professional approach exceeded our expectations.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    name: "Maria Thompson",
    role: "Director, Design Studio",
    content: "Professional approach and meticulous attention to detail. The results were beyond our expectations. I highly recommend their services to anyone looking for quality construction work.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    name: "David Wilson",
    role: "Owner, Construction Pro",
    content: "Creative solutions and excellent execution quality. Their team showed great expertise and professionalism throughout the entire project. Would definitely work with them again!",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">
          Client Testimonials
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto animate-fade-in">
          Discover what our clients say about their experience working with us
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-in glass-effect"
              style={{ 
                animationDelay: `${index * 200}ms`,
                transform: "translateY(0)",
                transition: "transform 0.3s ease-in-out"
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.imageUrl} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" 
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-2" />
                <p className="text-gray-700 italic">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};