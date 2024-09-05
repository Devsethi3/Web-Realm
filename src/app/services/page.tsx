"use client";
import React from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

const services = [
  {
    title: "Web Development",
    href: "/services/web-development",
    description:
      "Building robust, scalable web applications with the latest technologies.",
    icon: "💻",
  },
  {
    title: "Web Design",
    href: "/services/web-design",
    description:
      "Crafting visually stunning and user-friendly interfaces to elevate your brand.",
    icon: "🎨",
  },
  {
    title: "SEO Optimization",
    href: "/services/seo-optimization",
    description:
      "Enhancing your online presence to ensure your website ranks higher in search results.",
    icon: "🔍",
  },
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    description:
      "Boosting your online presence and reach with targeted digital marketing strategies.",
    icon: "📈",
  },
  {
    title: "E-commerce Solutions",
    href: "/services/e-commerce-solutions",
    description:
      "Providing end-to-end e-commerce solutions to help you sell online effectively.",
    icon: "🛒",
  },
];

const Services: React.FC = () => {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <div className="container py-36">
      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#9560EB] to-blue-500 opacity-10"
          style={{ zIndex: -1 }}
        />
        <motion.div
          className="container mx-auto px-4"
          style={{ translateY, scale }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-center mb-16"
          >
            Our <span className="text-purple-500">Services</span>
          </motion.h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(149, 96, 235, 0.3)",
                }}
                className="bg-gray-800 rounded-xl p-8 shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600 to-blue-500 opacity-20 z-0" />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg mb-8">{service.description}</p>
                  <motion.a
                    href={service.href}
                    className="inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 text-white font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    Learn More
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold mb-4">Our Process</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Our process is designed to ensure we deliver exceptional results
              that meet your business goals. We start with understanding your
              requirements, followed by planning, designing, developing,
              testing, and launching your project. Our team ensures that every
              step is meticulously executed to provide you with the best
              outcome.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold mb-4">
              Benefits for Your Business
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Partnering with us means leveraging our expertise to enhance your
              digital presence. Our services help you increase visibility,
              engage more customers, and drive conversions. Whether it's through
              a stunning website, effective SEO, or a comprehensive digital
              marketing strategy, we provide solutions that benefit your
              business in the long run.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold mb-4">Why Choose Us?</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              We are passionate about what we do, and it shows in the quality of
              our work. Our team of experts stays updated with the latest trends
              and technologies to provide innovative solutions. We believe in
              transparent communication, timely delivery, and exceeding client
              expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <motion.a
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold text-xl"
              whileHover={{ scale: 1.05 }}
            >
              Get Started
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
