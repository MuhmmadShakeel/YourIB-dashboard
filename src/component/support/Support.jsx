import React from "react";
import { MessageSquare, Clock, AlertCircle } from "lucide-react";

function Support() {
  const tickets = [
    {
      title: "Commission payout delay",
      time: "30 minutes ago",
      replies: 3,
      priority: "High",
    },
    {
      title: "White label logo upload issue",
      time: "2 hours ago",
      replies: 5,
      priority: "Medium",
    },
    {
      title: "Request for marketing materials",
      time: "1 day ago",
      replies: 2,
      priority: "Low",
    },
    {
      title: "Client signup verification problem",
      time: "1 day ago",
      replies: 1,
      priority: "High",
    },
    {
      title: "Dashboard statistics not updating",
      time: "3 days ago",
      replies: 4,
      priority: "Medium",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700 border-red-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Low":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="w-full lg:w-[74%] lg:ml-78 px-4 md:px-8 mt-8 mb-10">
      {/* Need immediate assistance card */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-100 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Need immediate assistance?
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Our support team is available 24/5 via live chat for urgent matters.
        </p>
        <button className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-6 py-2.5 rounded-xl shadow hover:bg-blue-800 transition text-sm font-medium">
          <MessageSquare size={16} />
          Start Live Chat
        </button>
      </div>

      {/* Support tickets list */}
      <div className="space-y-3">
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              {/* Left: Title and metadata */}
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-800 mb-1">
                  {ticket.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    {ticket.time}
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <MessageSquare size={12} />
                    {ticket.replies} {ticket.replies === 1 ? "reply" : "replies"}
                  </div>
                  <span>•</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${getPriorityColor(
                      ticket.priority
                    )}`}
                  >
                    {ticket.priority} Priority
                  </span>
                </div>
              </div>

              {/* Right: Action buttons */}
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <button className="text-xs font-medium text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition">
                  View Details
                </button>
                <button className="text-xs font-medium text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition">
                  Add Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* "In Progress" footer */}
      <div className="mt-8 text-center sm:text-left">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
          <AlertCircle size={14} />
          In Progress
        </span>
      </div>
    </div>
  );
}

export default Support;