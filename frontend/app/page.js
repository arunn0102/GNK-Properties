"use client";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServiceCard from "./components/ServiceCard";
import ContactSection from "./components/ContactSection";
import ServiceSection from "./components/ServiceSection";

export default function Home() {
  return (
    <main className="bg-white relative">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServiceSection/>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
