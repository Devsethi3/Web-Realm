"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    question: "What types of websites do you design and develop?",
    answer:
      "We design and develop a wide range of websites, including corporate sites, e-commerce platforms, blogs, portfolios, and more. Whether you need a simple informational site or a complex web application, we have the expertise to deliver a solution that meets your needs.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "The timeline for each project varies based on its complexity and scope. On average, a standard website project takes between 4 to 8 weeks from initial consultation to final launch. We provide a detailed timeline and milestones during the project kickoff.",
  },
  {
    question:
      "How do you ensure the website is mobile-friendly and responsive?",
    answer:
      "All our websites are designed with a mobile-first approach, ensuring they are fully responsive and look great on all devices. We test each site across various screen sizes and devices to ensure optimal performance and user experience.",
  },
  {
    question: "Can I update my website content after it's launched?",
    answer:
      "Yes, we provide easy-to-use content management systems (CMS) for most of our websites, allowing you to update text, images, and other content without needing technical skills. We also offer training and support if needed.",
  },
  {
    question:
      "What is included in your website design and development services?",
    answer:
      "Our services include custom website design, development, user experience (UX) optimization, content creation, SEO setup, and testing. We also offer ongoing maintenance and support to ensure your site remains up-to-date and secure.",
  },
  {
    question: "Do you offer SEO services?",
    answer:
      "Yes, we provide basic SEO services as part of our website design packages, including keyword optimization, meta tags, and on-page SEO. For more advanced SEO strategies, we offer specialized packages tailored to your needs.",
  },
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="py-7 border-b cursor-pointer border-white/30"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className="flex-1 lg:text-2xl text-xl font-medium">{question}</span>
          {isOpen ? <LuMinus /> : <LuPlus />}
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={clsx("mt-4 text-lg lg:text-xl text-white/90", { hidden: !isOpen, "": isOpen === true })}
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
              exit={{
                opacity: 0,
                height: 0,
                marginTop: 0,
              }}
            >
              {answer}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const FAQs = () => {
  return (
    <div id="faq">
      <div className="bg-black text-white bg-gradient-to-b from-[#5D2CAB] to-black py-14 lg:py-[72px]">
        <div className="container">
          <h2 className="text-center text-4xl lg:text-5xl font-bold">
            Frequently Asked Question
          </h2>

          <div className="mt-12 max-w-[948px] mx-auto">
            {items.map(({ question, answer }) => (
              <AccordionItem
                question={question}
                answer={answer}
                key={question}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
