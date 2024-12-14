"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from '@/context/ThemeContext'; // Import the useTheme hook

const FAQs = () => {
  const { isDarkMode } = useTheme(); // Get theme state

  const faqData = [
    {
        question: "What is Oga4Bill?",
        answer: "Oga4Bill is a technology-driven payment solutions platform designed to simplify and centralize billing and payment processes for businesses and individuals. We provide a comprehensive hub for managing financial transactions, invoices, and bills with a focus on convenience and efficiency.",
    },
    {
        question: "How can Oga4Bill help me manage my financial transactions?",
        answer: "Our platform offers a centralized system that allows you to track, manage, and process invoices and payments from a single interface. We streamline financial management by reducing administrative work and providing real-time insights into your financial transactions.",
    },
    {
        question: "What types of payments can I process through Oga4Bill?",
        answer: "Oga4Bill supports multiple payment methods, including bank transfers, credit/debit card payments, and digital wallet transactions. Our platform is designed to accommodate various financial preferences for both individuals and businesses.",
    },
    {
        question: "Is Oga4Bill secure for handling financial transactions?",
        answer: "Security is our top priority. We implement advanced encryption and robust security protocols to protect your financial data and ensure safe, secure transactions. Our platform uses state-of-the-art technology to safeguard your personal and business financial information.",
    },
    {
        question: "Are there any fees for using Oga4Bill?",
        answer: "Our pricing structure is designed to be transparent and competitive. We offer various plans to suit different user needs, with options ranging from free basic accounts to premium features for businesses requiring advanced financial management tools.",
    },
    {
        question: "Can I integrate Oga4Bill with my existing accounting software?",
        answer: "We design our platform to be compatible with various accounting and financial management systems. Our team is continuously working on expanding integration capabilities to provide seamless financial workflow management across different platforms.",
    },
    {
        question: "How quickly are payments processed on Oga4Bill?",
        answer: "Payment processing times vary depending on the payment method and financial institutions involved. We strive to ensure the fastest possible transaction speeds while maintaining maximum security and reliability for our users.",
    },
    {
        question: "Who can use Oga4Bill?",
        answer: "Oga4Bill is versatile and designed for both individual users and businesses of all sizes. Whether you're a freelancer, small business owner, or part of a larger enterprise, our platform offers flexible solutions to meet your financial management needs.",
    },
    {
        question: "How does Oga4Bill improve financial efficiency?",
        answer: "Our platform reduces manual financial tasks by automating invoice generation, payment tracking, and financial reporting. This automation saves time, minimizes errors, and allows you to focus on core business activities or personal financial management.",
    },
    {
        question: "What makes Oga4Bill unique from other payment platforms?",
        answer: "Oga4Bill stands out through its user-friendly design, innovative technology, and comprehensive financial management system. We prioritize user experience, offering intuitive interfaces and features that make financial transactions smooth, efficient, and hassle-free.",
    }
];

  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className={`flex flex-col pb-4 py-4 w-full border-b-2 border-zinc-400 ${isDarkMode ? 'text-white' : 'text-gray-900'} max-md:max-w-full transform hover:scale-100 transition-transform duration-700`}>
        <div
          className="flex flex-row gap-10 justify-between items-center w-full font-bold leading-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="self-stretch my-auto max-md:max-w-full">
            {question}
          </div>
          {isOpen ? (
            <ChevronUp className="shrink-0 self-stretch my-auto w-4" />
          ) : (
            <ChevronDown className="shrink-0 self-stretch my-auto w-4" />
          )}
        </div>
        {isOpen && (
          <div className="mt-4 text-base leading-6 text-zinc-400 max-md:max-w-full">
            {answer}
          </div>
        )}
      </div>
    );
  };
  return (
    <div className={`flex flex-col items-center mt-32 px-4 w-full max-md:mt-10 ${isDarkMode ? 'text-white' : 'bg-white text-gray-900'}`}>
      <div className="text-4xl font-bold mb-16">FAQs</div>

      
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:w-[70%] w-full"
        >
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
    </div>
  );
};

export default FAQs;
