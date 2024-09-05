"use client";
import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
} from "framer-motion";
import Image from "next/image";
import TextSlider from "./TextSlider";

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [200, -100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  const isInView = useInView(paragraphRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const services = [
    {
      title: "Web Design",
      icon: "🎨",
      description: "Innovative designs that captivate. Websites that convert.",
    },
    {
      title: "Web Development",
      icon: "💻",
      description:
        "Expertly crafted web solutions. Performance and scalability guaranteed.",
    },
    {
      title: "SEO Optimization",
      icon: "📈",
      description:
        "Dominate search results. Boost your online visibility and reach.",
    },
  ];

  return (
    <motion.section
      ref={aboutRef}
      initial="hidden"
      id="about"
      className="pt-6 bg-black text-white overflow-hidden min-h-screen relative"
    >
      <div
        className="w-[300px]
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-purple-500/20
          -z-10
          top-22
        "
      />
      <div>
        <TextSlider />
      </div>
      <div className="container mx-auto px-4">
        <motion.h1
          ref={titleRef}
          style={{ opacity: titleOpacity, y: titleY }}
          className="text-4xl sm:text-7xl md:text-7xl font-bold mb-12 text-center relative"
        >
          Elevating <motion.span className="text-purple-500">Your</motion.span>{" "}
          Digital Presence
        </motion.h1>

        <motion.div className="text-center mb-20">
          <p className="text-lg sm:text-2xl md:text-3xl mb-8 max-w-6xl mx-auto">
            Our mission is to empower businesses through exceptional digital
            solutions. We deliver high-impact websites and digital marketing
            strategies that strengthen brand identity and achieve measurable
            results.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(149, 96, 235, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#9560EB] to-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            ✨ Explore Our Work
          </motion.button>
        </motion.div>

        <motion.div
          style={{ translateY }}
          className="absolute top-[20%] z-20 left-9 rotate-45 hidden lg:block"
        >
          <Image
            src="/rhombus.avif"
            width={200}
            height={200}
            alt="rhombus"
            className="hero-object"
          />
        </motion.div>
        <motion.div
          style={{ translateY }}
          className="absolute top-[40%] z-20 right-9 rotate-45 hidden lg:block"
        >
          <Image
            src="/cube-1.avif"
            width={200}
            height={200}
            alt="cube"
            className="hero-object"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          id="services"
          className="grid md:grid-cols-3 relative gap-12 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(149, 96, 235, 0.3)",
              }}
              className="bg-gradient-to-br from-[#9560EB]/10 to-[#1e1e2d]/10 p-8 rounded-2xl backdrop-blur-md shadow-xl transition-all duration-300 relative"
            >
              <div className="absolute z-10 top-[-13%] shadow-xl shadow-black left-[40%] bg-[#9560EB] text-white rounded-full text-2xl font-medium w-16 h-16 grid place-items-center">
                {index + 1}
              </div>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-lg">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          ref={paragraphRef}
          variants={paragraphVariants}
          initial="hidden"
          animate={controls}
          className="mt-16 text-xl lg:text-4xl"
        >
          ✦ Welcome to our agency, where we transform your ideas into designs.
          <br />
          <br />
          <strong>What We Do:</strong> We craft exceptional digital experiences
          through a blend of web design, development, and strategic marketing.
          Our goal is to elevate your brand and drive tangible results.
          <br />
          <br />
          <strong>Our Process:</strong> WWe partner with you to understand your
          business intimately. Armed with this knowledge, we develop a tailored
          strategy, design, and build your online presence. Our commitment is to
          deliver exceptional results.
          <br />
          <br />
          <strong>Boost Your Brand:</strong> Stand out in a crowded digital
          landscape. Our innovative approach combines creativity and technology
          to build a strong online brand that drives growth.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;
