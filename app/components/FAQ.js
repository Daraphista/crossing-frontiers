'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "What if I lose my H-1B job?",
      answer: "You may qualify for an Employment Authorization Document (EAD) based on compelling circumstances, allowing you to stay legally while your application is pending."
    },
    {
      question: "Can I use my spouse's EB-2 priority date if I apply for EB-1B?",
      answer: "No, but if your spouse was born in a different country, cross-chargeability may reduce your wait time."
    },
    {
      question: "How do I improve my EB-1A application?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Securing venture capital funding or industry awards</li>
          <li>Joining selective incubators like Y Combinator</li>
          <li>Getting featured in prestigious industry publications</li>
        </ul>
      )
    },
    {
      question: "Can I apply for EB-1A or EB-2 NIW while on F1 OPT?",
      answer: "Yes! USCIS allows F-1 students to file for immigrant petitions while maintaining F-1 status. If approved, you can transition to H-1B or O-1 without leaving the U.S."
    },
    {
      question: "How do I prove my work has 'major significance' for EB-1?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Patents, industry adoption, sales figures, or media recognition</li>
          <li>Conference presentations, business metrics, and innovation impact</li>
        </ul>
      )
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">
          Your Questions, Answered
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className="w-full text-left py-6 focus:outline-none border-b border-secondary-200"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-primary-700">
                    {faq.question}
                  </h3>
                  <span className="text-primary-800 text-xl">
                    {openQuestion === index ? '−' : '+'}
                  </span>
                </div>
                {openQuestion === index && (
                  <div className="mt-4 text-primary-600 text-base">
                    {faq.answer}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}