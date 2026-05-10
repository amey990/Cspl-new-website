import React from "react";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import ProductsSection from "@/components/ProductsSection";
import CustomerSection from "@/components/CustomerSection";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";

export default function HomePage(): React.ReactElement{
  return (
    <>
      <Hero />
      <Solutions />
      <ProductsSection />
      <CustomerSection />
      <StatsSection />
      <Testimonials />
    </>
  );
}