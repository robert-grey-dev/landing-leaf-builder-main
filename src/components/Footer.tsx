import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const contactInfo = [
    { icon: MapPin, text: "123 Ave, New York, NY 10001", ariaLabel: "Our address" },
    { icon: Phone, text: "+1 (555) 123-4567", ariaLabel: "Our phone number" },
    { icon: Mail, text: "contact@construction.com", ariaLabel: "Our email" },
  ];

  const workingHours = [
    { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { days: "Saturday - Sunday", hours: "Closed" },
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "#", 
      ariaLabel: "Visit our LinkedIn",
      color: "#0EA5E9",
      hoverColor: "#0284C7"
    },
    { 
      icon: Instagram, 
      href: "#", 
      ariaLabel: "Follow us on Instagram",
      color: "#8B5CF6",
      hoverColor: "#7C3AED"
    },
    { 
      icon: Facebook, 
      href: "#", 
      ariaLabel: "Like us on Facebook",
      color: "#1EAEDB",
      hoverColor: "#0FA0CE"
    },
  ];

  return (
    <footer className="relative bg-white text-black py-16 border-t dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="font-bold text-2xl mb-6 border-b-2 border-black/20 pb-2 tracking-wide text-center dark:border-white/20">
              Contact Us
            </h3>
            <div className="space-y-4 flex flex-col items-center">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 hover:translate-x-1 transition-all duration-300 ease-out w-full max-w-[280px]"
                  aria-label={item.ariaLabel}
                >
                  <div className="w-8 flex-shrink-0">
                    <item.icon className="w-5 h-5 text-black/90 group-hover:scale-110 transition-transform dark:text-white/90" />
                  </div>
                  <p className="text-base leading-relaxed group-hover:text-black/80 transition-colors text-left dark:group-hover:text-white/80">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-6 text-center">
            <h3 className="font-bold text-2xl mb-6 border-b-2 border-black/20 pb-2 tracking-wide dark:border-white/20">
              Working Hours
            </h3>
            <div className="space-y-4">
              {workingHours.map((schedule, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg hover:bg-black/5 transition-all duration-300 ease-out transform hover:scale-105 dark:hover:bg-white/5"
                >
                  <p className="flex flex-col gap-1">
                    <span className="font-semibold text-lg">{schedule.days}</span>
                    <span className={cn(
                      "text-black/90 dark:text-white/90",
                      schedule.hours === "Closed" && "text-red-500 dark:text-red-400 font-semibold"
                    )}>{schedule.hours}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6 text-center">
            <h3 className="font-bold text-2xl mb-6 border-b-2 border-black/20 pb-2 tracking-wide dark:border-white/20">
              Follow Us
            </h3>
            <div className="flex justify-center gap-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group relative"
                  aria-label={social.ariaLabel}
                >
                  <div className={cn(
                    "p-3 rounded-full transition-all duration-300",
                    "hover:scale-110 hover:shadow-lg",
                    "bg-white dark:bg-gray-800 hover:bg-opacity-90",
                    "ring-1 ring-black/5 hover:ring-2 dark:ring-white/5",
                    "animate-fade-in-up",
                    "glass-effect"
                  )}>
                    <social.icon 
                      className="w-6 h-6 transition-all duration-300"
                      style={{
                        color: social.color,
                      }}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-16 pt-8 border-t border-black/20 dark:border-white/20">
          <p className="text-sm text-black/80 dark:text-white/80">
            &copy; {new Date().getFullYear()} Construction Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};