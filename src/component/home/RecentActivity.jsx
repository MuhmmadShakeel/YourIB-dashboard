import React from "react";

const activities = [
    {
        id: 1,
        name: "John Smith",
        action: "New Signup",
        time: "2 minutes ago",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        id: 2,
        name: "Sarah Johnson",
        action: "Deposit $5,000",
        time: "15 minutes ago",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        id: 3,
        name: "Mike Chen",
        action: "Commission earned",
        time: "1 hour ago",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
        id: 4,
        name: "Emma Wilson",
        action: "New signup",
        time: "2 hour ago",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        id: 5,
        name: "David Brown",
        action: "Deposit $12,500",
        time: "3 hour ago",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    },
];

function RecentActivity() {
    return (
        <div className="w-full px-4 md:px-8 mt-8 mb-10">
            <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm max-w-full lg:max-w-[70%] xl:max-w-[1000px]">
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
                </div>

                <div className="space-y-3">
                    {activities.map((activity) => (
                        <div
                            key={activity.id}
                            className="flex items-center justify-between p-4 rounded-2xl bg-[#f8fafc] hover:bg-gray-100 transition-colors duration-200 border border-transparent hover:border-gray-200"
                        >
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <img
                                        src={activity.avatar}
                                        alt={activity.name}
                                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                                    />
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold text-gray-800">
                                        {activity.name}
                                    </h4>
                                    <p className="text-xs text-gray-500 font-medium mt-0.5">
                                        {activity.action}
                                    </p>
                                </div>
                            </div>

                            <div className="text-right">
                                <span className="text-[11px] md:text-xs text-gray-400 font-semibold whitespace-nowrap">
                                    {activity.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="w-full mt-6 py-3 text-sm font-bold text-blue-700 hover:bg-blue-50 rounded-xl transition-colors duration-200">
                    View All Activity
                </button>
            </div>
        </div>
    );
}

export default RecentActivity;