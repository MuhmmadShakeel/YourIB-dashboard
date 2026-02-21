import React from "react";
import { Search, Plus, Pin, Clock } from "lucide-react";

function Anoucement() {
    const announcements = [
        {
            title: "Platform Maintenance Scheduled",
            description:
                "We will be performing routine maintenance on Sunday, Feb 2nd from 2:00 AM - 4:00 AM EST. Trading services may be temporarily unavailable.",
            author: "Admin Team",
            time: "2 hours ago",
            pinned: true,
        },
        {
            title: "New Trading Instruments Available",
            description:
                "We are pleased to announce the addition of 15 new cryptocurrency pairs to our trading platform. Check your trading terminal for the full list.",
            author: "Admin Team",
            time: "1 day ago",
        },
        {
            title: "Updated Commission Structure",
            description:
                "Starting next month, we are introducing an improved tiered commission structure that rewards high-volume IBs with better rates.",
            author: "Market Analyst",
            time: "5 days ago",
        },
        {
            title: "Weekly Market Analysis Available",
            description:
                "Our weekly market analysis report is now available in the resources section.",
            author: "Market Analyst",
            time: "5 days ago",
        },
        {
            title: "Holiday Trading Hours",
            description:
                "Please note the adjusted trading hours for the upcoming public holidays.",
            author: "Admin Team",
            time: "1 week ago",
        },
    ];

    return (
        <div className="w-full lg:w-[74%] lg:ml-78 px-4 md:px-8 mt-0 mb-10">

            <div className="p-4 md:p-6 mb-6">
                <div className="flex flex-col sm:flex-row gap-3 w-full">

                    <div className="relative flex-1">
                        <Search
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Search announcements..."
                            className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 focus:ring-blue-500 focus:bg-white focus:outline-none text-sm transition-all duration-200"
                        />
                    </div>

                    <button className="flex cursor-pointer items-center justify-center gap-2 bg-blue-900 text-white px-5 py-2.5 rounded-lg shadow-sm hover:bg-blue-800 hover:shadow-md transition-all duration-200 text-sm font-semibold whitespace-nowrap">
                        <Plus size={16} />
                        Add New
                    </button>

                </div>
            </div>

            <div className="rounded-[24px] mb-34">

                <div className="p-4 md:p-6 space-y-3 x">
                    {announcements.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col p-4  rounded-xl bg-white hover:shadow-sm transition-all duration-200 border border-gray-100 hover:border-gray-200"
                        >
                            <div className="flex items-start gap-3">
                                {item.pinned && (
                                    <div className="p-1.5 bg-blue-50 rounded-lg flex-shrink-0">
                                        <Pin size={12} className="text-blue-700" />
                                    </div>
                                )}

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-bold text-gray-800 leading-tight break-words">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1 leading-relaxed line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                                    {item.author}
                                </span>

                                <div className="flex items-center gap-1 text-xs text-gray-400 font-semibold whitespace-nowrap">
                                    <Clock size={12} />
                                    {item.time}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-4 md:p-6 border-t border-gray-100">
                    <button className="w-full py-2.5 text-sm font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-200 border border-blue-200 hover:border-blue-300">
                        View All
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Anoucement;