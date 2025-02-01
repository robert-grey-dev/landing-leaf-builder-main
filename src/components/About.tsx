import { Award, Clock, Users, Shield, Target, Wrench } from "lucide-react";

export const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Since 2010, we've been delivering exceptional construction and renovation services 
            to our local community. Our team combines expertise with personalized attention 
            to bring your vision to life, ensuring quality and satisfaction in every project.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-16">
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 
                          group-hover:bg-primary/20 transition-colors duration-300">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
            <p className="text-muted-foreground">Skilled professionals with years of experience</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 
                          group-hover:bg-primary/20 transition-colors duration-300">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Quality Assurance</h3>
            <p className="text-muted-foreground">Guaranteed satisfaction on every project</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 
                          group-hover:bg-primary/20 transition-colors duration-300">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">On Time</h3>
            <p className="text-muted-foreground">Timely project completion guaranteed</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 
                          group-hover:bg-primary/20 transition-colors duration-300">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Precision</h3>
            <p className="text-muted-foreground">Attention to every detail</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 
                          group-hover:bg-primary/20 transition-colors duration-300">
              <Wrench className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Modern Tools</h3>
            <p className="text-muted-foreground">Latest technology and equipment</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 
                          group-hover:bg-primary/20 transition-colors duration-300">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Certified</h3>
            <p className="text-muted-foreground">Industry certified professionals</p>
          </div>
        </div>
      </div>
    </section>
  );
};