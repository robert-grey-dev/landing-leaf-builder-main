import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "react-intersection-observer";

export const FAQ = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqItems = [
    {
      question: "What services do you offer?",
      answer: "We provide a comprehensive range of construction services including residential and commercial construction, renovations, interior design, and project management.",
    },
    {
      question: "How long has your company been in business?",
      answer: "Our company has been delivering exceptional construction services for over 13 years, establishing a strong reputation for quality and reliability in the industry.",
    },
    {
      question: "Do you provide free consultations?",
      answer: "Yes, we offer free initial consultations to discuss your project requirements and provide preliminary guidance on how we can help bring your vision to life.",
    },
    {
      question: "What areas do you serve?",
      answer: "We primarily serve the greater metropolitan area and surrounding suburbs, with the capability to take on projects throughout the entire state for larger commercial developments.",
    },
    {
      question: "How do you ensure project quality?",
      answer: "We maintain strict quality control measures, including regular site inspections, adherence to building codes, and collaboration with certified professionals throughout the project lifecycle.",
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. Small renovations might take 2-4 weeks, while larger commercial projects can span several months. We provide detailed timelines during consultation.",
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "Yes, we provide comprehensive warranties on all our construction work. Our standard warranty covers workmanship for 5 years, and we also honor manufacturer warranties on all materials used.",
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div 
        ref={ref}
        className={`max-w-4xl mx-auto px-6 transform transition-all duration-1000 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-black/80 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services and process
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300
                         transform hover:-translate-y-1 border border-gray-100
                         ${inView ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AccordionTrigger 
                className="px-6 py-4 text-left hover:no-underline group"
              >
                <span className="font-medium text-lg text-black group-hover:text-black/80 transition-colors">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-black/70 leading-relaxed">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center">
          <p className="text-black/70">
            Still have questions? Feel free to{' '}
            <a 
              href="#contact" 
              className="text-black hover:text-black/80 font-medium underline-offset-4 hover:underline"
            >
              contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};