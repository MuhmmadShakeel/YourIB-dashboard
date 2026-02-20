import React from "react";
import { Search, Plus, Gift, Image, Smile } from "lucide-react";

const messages = [
    {
        id: 1,
        name: "Michael Chen",
        time: "Today at 18:35",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
        message:
            "Just crossed $100k in monthly commissions! The key is consistent client education and support. Happy to share strategies that worked for me.",
    },
    {
        id: 2,
        name: "Sarah Johnson",
        time: "Today at 18:35",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        message:
            "Does anyone have experience with the new white label features? Looking to launch my own branded platform and would love to hear feedback.",
    },
    {
        id: 3,
        name: "Michael Chen",
        time: "Today at 18:35",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
        message:
            "The key is consistent client education and support. Happy to share strategies that worked for me.",
    },
    {
        id: 4,
        name: "David Martinez",
        time: "Today at 18:35",
        avatar: "https://randomuser.me/api/portraits/men/13.jpg",
        message:
            "Attended the webinar on advanced marketing techniques today. Great insights on social media strategies for IB growth. Highly recommended!",
    },
    {
        id: 5,
        name: "David Martinez",
        time: "Today at 18:35",
        avatar: "https://randomuser.me/api/portraits/men/13.jpg",
        message:
            "Pro tip: Set up automated weekly market analysis emails for your clients. I've seen a 40% increase in engagement since implementing this.",
    },
];

function Community() {
    return (
        <div className="w-full lg:w-[74%] lg:ml-78 px-4 md:px-8 mt-8 mb-10">

            <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden">

                <div className="flex items-center justify-between bg-[#f3f4f6] px-5 py-4">

                    <h2 className="text-base md:text-lg font-bold text-gray-800">
                        Community chat
                    </h2>

                    <div className="relative w-44 sm:w-64">
                        <Search
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Search community..."
                            className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none text-xs sm:text-sm transition-all duration-200"
                        />
                    </div>

                </div>

                <div className="px-5 py-6 space-y-6">

                    {messages.map((msg) => (
                        <div key={msg.id} className="flex items-start gap-4">

                            <img
                                src={msg.avatar}
                                alt={msg.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />

                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <h4 className="text-sm font-semibold text-gray-800">
                                        {msg.name}
                                    </h4>
                                    <span className="text-xs text-gray-400 font-medium">
                                        {msg.time}
                                    </span>
                                </div>

                                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                                    {msg.message}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>

                <div className="bg-[#f3f4f6] px-5 py-4">
                    <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 border border-gray-200">

                        <button className="text-gray-500 hover:text-blue-600 transition">
                            <Plus size={18} />
                        </button>

                        <input
                            type="text"
                            placeholder="Message Community"
                            className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                        />

                        <div className="flex items-center gap-3 text-gray-500">
                            <Gift size={18} className="hover:text-blue-600 cursor-pointer transition" />
                            <Image size={18} className="hover:text-blue-600 cursor-pointer transition" />
                            <Smile size={18} className="hover:text-blue-600 cursor-pointer transition" />
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Community;