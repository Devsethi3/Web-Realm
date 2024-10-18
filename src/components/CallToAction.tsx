"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null); // Form reference
  const [loading, setLoading] = useState(false); // Loading state

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  // Email 
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Handle form submission and email sending
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const form = formRef.current;
    const email = form.user_email.value;
    const message = form.user_message.value;

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (message.trim() === "") {
      toast.error("Message cannot be empty.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_b9d6ri8",
        "template_d7m2lpn",
        formRef.current,
        "wjG0qEbYkoa3KZJSJ"
      )
      .then(
        () => {
          toast.success("Email Sent Successfully!", {
            style: {
              border: "1px solid #A259FF", // Purple border
              padding: "12px 16px",
              backgroundColor: "#1E1E2E", // Dark background for the toast
              color: "#EDE9FE", // Light purple text for success message
            },
            iconTheme: {
              primary: "#A259FF", // Purple color for the icon
              secondary: "#1E1E2E", // Dark background for the icon to match the toast background
            },
          });

          setLoading(false);
          formRef.current?.reset(); // Reset form fields
        },
        (error: any) => {
          toast.error("Failed to send email. Please try again later.");
          console.error("Failed to send email:", error);
          setLoading(false);
        }
      );
  };

  return (
    <div
      id="contact"
      className="bg-black container text-white py-16 lg:py-24 text-center relative"
      ref={containerRef}
    >
      <div className="mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          style={{
            translateY,
          }}
        >
          <Image
            src="/settings.avif"
            width={250}
            height={250}
            alt="Settings decoration"
            className="absolute top-6 right-0 lg:right-[-150px] lg:block hidden"
          />
        </motion.div>
        <motion.div
          style={{
            translateY,
          }}
        >
          <Image
            src="/helix.avif"
            width={200}
            height={200}
            alt="Helix decoration"
            className="absolute -top-[100px] left-0 lg:left-[-150px] lg:block hidden"
          />
        </motion.div>
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
          How Can We Help?
        </h2>
        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
          Have questions or need assistance? Contact us today!
        </p>
        <form
          className="flex flex-col gap-4 max-w-md mx-auto"
          ref={formRef}
          onSubmit={sendEmail}
        >
          <input
            type="email"
            name="user_email"
            placeholder="abc@gmail.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
            disabled={loading}
          />
          <textarea
            name="user_message"
            placeholder="Your message..."
            className="h-32 bg-white/20 rounded-lg px-5 py-3 font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-white text-black h-12 rounded-lg px-8 font-semibold hover:bg-gray-200 transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallToAction;
