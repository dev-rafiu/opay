"use client";

import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="flex w-full items-center justify-between p-2 focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="text-base font-medium">{title}</span>
        <svg
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180 transform" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        className={`transition-max-height overflow-hidden duration-300 ${isOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
