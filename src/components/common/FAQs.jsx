"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const FAQs = () => {
  const faqData = [
    {
      question: "What credit score do I need to apply for a credit card?",
      answer:
        "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      question: "How can I apply for a credit card online?",
      answer:
        "Most credit card issuers offer online applications through their websites. You'll typically need to provide personal information, income details, and consent to a credit check.",
    },
    {
      question: "Are there any annual fees associated with the credit card?",
      answer:
        "Annual fees vary by card. Some cards have no annual fee, while premium cards may charge fees ranging from $50 to $500 depending on the benefits offered.",
    },
    {
      question:
        "How long does it take to receive the credit card once approved?",
      answer:
        "After approval, most credit cards arrive by mail within 7-10 business days. Some issuers offer expedited shipping for an additional fee.",
    },
    {
      question: "How can I check my credit card balance and transactions?",
      answer:
        "You can check your balance and transactions through online banking, mobile apps, monthly statements, or by calling the customer service number on the back of your card.",
    },
    {
      question: "What should I do if my credit card is lost or stolen?",
      answer:
        "Immediately contact your card issuer's customer service to report the card lost or stolen. They will cancel the card and issue a replacement to prevent unauthorized charges.",
    },
    {
      question: "Is my credit card information secure?",
      answer:
        "Reputable credit card issuers use advanced encryption and security measures to protect your information. Always use secure networks and be cautious of phishing attempts.",
    },
  ];

  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="flex flex-col pb-4 py-4 w-full border-b-2 border-zinc-400 max-md:max-w-full transform hover:scale-50 transition-transform duration-700">
        <div
          className="flex flex-row gap-10 justify-between items-center w-full font-bold leading-none text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="self-stretch my-auto max-md:max-w-full">
            {question}
          </div>
          {isOpen ? (
            <ChevronUp className="shrink-0 self-stretch my-auto w-4 text-white" />
          ) : (
            <ChevronDown className="shrink-0 self-stretch my-auto w-4 text-white" />
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
    <div className="flex flex-col items-center mt-32 px-4 w-full max-md:mt-10">
      <div className="text-4xl font-bold text-white mb-16">FAQs</div>

      
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-full"
        >
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
    </div>
  );
};

export default FAQs;
