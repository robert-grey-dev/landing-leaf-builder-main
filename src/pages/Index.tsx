import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Statistics } from "@/components/Statistics";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <ErrorBoundary>
      <Helmet>
        <title>Construction Co. - Building Excellence | Professional Construction Services</title>
        <meta name="description" content="Professional construction and renovation services with over 13 years of experience in creating modern office and residential spaces." />
        <meta name="keywords" content="construction, renovation, office spaces, residential projects, professional services" />
        <meta property="og:title" content="Construction Co. - Building Excellence" />
        <meta property="og:description" content="Transform spaces with professional construction and renovation services." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://your-domain.com" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Construction Co.",
              "description": "Professional construction and renovation services",
              "url": "https://your-domain.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service"
              }
            }
          `}
        </script>
      </Helmet>
      <Navbar />
      <main className="min-h-screen">
        <section id="home">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="statistics">
          <Statistics />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
        <Footer />
      </main>
    </ErrorBoundary>
  );
};

export default Index;