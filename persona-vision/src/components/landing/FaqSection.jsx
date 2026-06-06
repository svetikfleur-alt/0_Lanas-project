import React, { useState } from "react";

/**
 * A simplified FAQ section.  Each item can be toggled open and
 * closed to reveal the answer.  The original uses an accordion
 * component; this version implements its own basic toggle logic.
 */
export default function FaqSection() {
  const faqs = [
    {
      question: "How many photos do I need to upload?",
      answer:
        "We recommend at least 10 clear selfies showing your face from different angles to achieve the best results.",
    },
    {
      question: "What file types are supported?",
      answer: "You can upload JPG or PNG files up to 10MB in size.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can manage or cancel your subscription from your account dashboard without any penalties.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border rounded-lg">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left"
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-primary">{isOpen ? '-' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground">{faq.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}