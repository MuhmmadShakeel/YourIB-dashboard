import React from "react";
import {
  Search,
  MessageSquare,
  Clock,
  Plus,
} from "lucide-react";

function Support() {
  const tickets = [
    {
      id: "T-1247",
      category: "Billing",
      title: "Commission payout delay",
      time: "30 minutes ago",
      replies: 3,
      priority: "High",
      status: "Open",
    },
    {
      id: "T-1246",
      category: "Technical",
      title: "White label logo upload issue",
      time: "2 hours ago",
      replies: 5,
      priority: "Medium",
      status: "In Progress",
    },
    {
      id: "T-1245",
      category: "General",
      title: "Request for marketing materials",
      time: "1 day ago",
      replies: 2,
      priority: "Low",
      status: "Resolved",
    },
    {
      id: "T-1244",
      category: "Account",
      title: "Client signup verification problem",
      time: "1 day ago",
      replies: 1,
      priority: "High",
      status: "Open",
    },
    {
      id: "T-1243",
      category: "Technical",
      title: "Dashboard statistics not updating",
      time: "3 days ago",
      replies: 4,
      priority: "Medium",
      status: "Resolved",
    },
  ];

  const statusStyle = (status) => {
    switch (status) {
      case "Open":
        return "bg-blue-50 text-blue-700";
      case "In Progress":
        return "bg-orange-50 text-orange-600";
      case "Resolved":
        return "bg-green-50 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const priorityStyle = (priority) => {
    switch (priority) {
      case "High":
        return "text-green-600";
      case "Medium":
        return "text-yellow-600";
      case "Low":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="flex-1 bg-gray-50 min-h-screen px-4 pb-4 pt-0 sm:p-6 lg:ml-72">

      <div className="flex flex-col sm:flex-row w-full gap-3 mb-6">

        <div className="relative w-full sm:flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search tickets..."
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
          />
        </div>

        <button className="w-full cursor-pointer sm:w-auto flex items-center justify-center gap-2 bg-blue-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-800 transition">
          <Plus size={16} />
          <span>Add New</span>
        </button>

      </div>

      <div className="bg-gray-100 border border-gray-200 rounded-xl p-5 mb-6">
        <h3 className="text-sm font-semibold text-gray-800 mb-1">
          Need immediate assistance?
        </h3>
        <p className="text-xs text-gray-600 mb-3">
          Our support team is available 24/5 via live chat for urgent matters.
        </p>
        <button className="bg-blue-900 cursor-pointer text-white px-4 py-2 text-xs rounded-md hover:bg-blue-800 transition">
          Start Live Chat
        </button>
      </div>

      <div className="space-y-4">
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-5"
          >
            <div className="flex flex-col gap-3">

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="font-medium text-gray-400">
                    #{ticket.id}
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md">
                    {ticket.category}
                  </span>
                </div>

                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyle(
                    ticket.status
                  )}`}
                >
                  {ticket.status}
                </span>
              </div>

              <h4 className="text-sm font-semibold text-gray-800">
                {ticket.title}
              </h4>

              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock size={13} />
                  {ticket.time}
                </div>

                <div className="flex items-center gap-1">
                  <MessageSquare size={13} />
                  {ticket.replies}{" "}
                  {ticket.replies === 1 ? "reply" : "replies"}
                </div>

                <span className={`font-medium ${priorityStyle(ticket.priority)}`}>
                  {ticket.priority} Priority
                </span>
              </div>

              <div className="flex gap-3 pt-2">
                <button className="bg-blue-900 cursor-pointer text-white text-xs px-4 py-2 rounded-md hover:bg-blue-800 transition">
                  View Details
                </button>

                <button className="border border-gray-300 text-gray-700 text-xs px-4 py-2 rounded-md hover:bg-gray-100 transition">
                  Add Reply
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Support;