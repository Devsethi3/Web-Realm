import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import FAQs from "@/components/FAQs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker"; 
import ProductShowcase from "@/components/ProductShowcase";
import Showcase from "@/components/Showcase";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <LogoTicker /> */}
      <About />
      <Features />
      <Showcase />
      <ProductShowcase />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
