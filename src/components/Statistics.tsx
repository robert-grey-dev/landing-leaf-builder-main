import { Users, Building2, Trophy, Clock } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const stats = [
  { icon: Building2, value: 500, label: "Projects Completed", suffix: "+" },
  { icon: Users, value: 250, label: "Happy Clients", suffix: "+" },
  { icon: Clock, value: 13, label: "Years Experience", suffix: "" },
  { icon: Trophy, value: 15, label: "Industry Awards", suffix: "" },
];

export const Statistics = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center transform transition-all duration-1000 ${
                inView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};