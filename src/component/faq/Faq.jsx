import React, { useState } from "react";
import { Search, Plus, Minus } from "lucide-react";

function Faq() {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "How do I become an IB with YOUR IB?",
            answer:
                "To become an Introducing Broker, simply complete our online application form, submit the required documentation, and await approval from our compliance team. The process typically takes 2-3 business days.",
        },
        {
            question: "How are commissions calculated?",
            answer:
                "Commissions are calculated based on your clients' trading volume and the agreed commission structure. Higher volume tiers receive improved commission rates.",
        },
        {
            question: "When are commission payouts processed?",
            answer:
                "Commission payouts are processed weekly. Funds are transferred directly to your registered account after verification.",
        },
        {
            question: "What trading platforms do you support?",
            answer:
                "We support industry-leading trading platforms including MT4, MT5, and WebTrader to ensure flexibility and reliability for all clients.",
        },
        {
            question: "How can I contact support?",
            answer:
                "You can contact our support team via live chat, email, or through your account dashboard. Our team is available 24/7.",
        },
        {
            question: "Can I have multiple IB accounts?",
            answer:
                "Yes, you may operate multiple IB accounts depending on your business structure. Please contact support for assistance in setting this up.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full lg:w-[74%] lg:ml-78 px-4 md:px-8 mt-0 mb-12">


            <div className="rounded-[20px] p-4 md:p-6 mb-6">
                <div className="relative w-full">
                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="Search faq..."
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none text-sm transition-all duration-200"
                    />
                </div>
            </div>

            <div className="rounded-[24px]  bg-gray-100">

                <div className="p-4 md:p-6 space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-2xl bg-white transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                            >
                                <h3 className="text-sm md:text-base font-semibold text-gray-800 pr-4">
                                    {faq.question}
                                </h3>

                                <div className="flex-shrink-0">
                                    {activeIndex === index ? (
                                        <div className="w-8 h-8 flex cursor-pointer items-center justify-center rounded-full bg-blue-900 text-white">
                                            <Minus size={16} />
                                        </div>
                                    ) : (
                                        <div className="w-8 h-8 flex cursor-pointer items-center justify-center rounded-full bg-gray-200 text-gray-600">
                                            <Plus size={16} />
                                        </div>
                                    )}
                                </div>
                            </button>

                            <div
                                className={`px-4 md:px-5 overflow-hidden transition-all duration-300 ${activeIndex === index
                                        ? "max-h-40 pb-5 opacity-100"
                                        : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Faq;