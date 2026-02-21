import React from "react";
import { Search, Plus, BookOpen, Clock } from "lucide-react";

function Courses() {
  const courses = [
    {
      title: "Introduction to Forex Trading",
      description:
        "Master the fundamentals of forex trading, including market structure, currency pairs, and basic analysis techniques.",
      sections: 12,
      hours: 8,
      progress: 100,
      status: "Completed",
    },
    {
      title: "Advanced Technical Analysis",
      description:
        "Deep dive into advanced chart patterns, indicators, and trading strategies used by professional traders.",
      sections: 15,
      hours: 8,
      progress: 60,
      status: "In Progress",
    },
    {
      title: "Risk Management Strategies",
      description:
        "Learn essential risk management techniques to protect your capital and maximize long-term profitability.",
      sections: 9,
      hours: 8,
      progress: 75,
      status: "Not Started",
    },
    {
      title: "Building Your IB Business",
      description:
        "Comprehensive guide to growing and managing a successful Introducing Broker business.",
      sections: 15,
      hours: 8,
      progress: 50,
      status: "In Progress",
    },
    {
      title: "Market Psychology & Trading Psychology",
      description:
        "Understand market psychology and develop the mental discipline required for consistent trading success.",
      sections: 8,
      hours: 8,
      progress: 40,
      status: "Not Started",
    },
  ];

  const statusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600";
      case "In Progress":
        return "bg-yellow-100 text-yellow-600";
      case "Not Started":
        return "bg-gray-200 text-gray-600";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  return (
    <div className="flex-1 bg-gray-100 min-h-screen px-4 sm:px-6 py-6 lg:ml-72">

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">

        <div className="relative w-full sm:flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        <button className="w-full sm:w-auto cursor-pointer flex items-center justify-center gap-2 bg-blue-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-800 transition">
          <Plus size={16} />
          Add New
        </button>

      </div>

      <div className="space-y-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
          >
            <div className="flex flex-col gap-3">

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                  {course.title}
                </h3>

                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyle(
                    course.status
                  )}`}
                >
                  {course.status}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-600">
                {course.description}
              </p>

              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-900 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>

              <div className="flex items-center gap-6 text-xs text-gray-500 pt-2">
                <div className="flex items-center gap-1">
                  <BookOpen size={14} />
                  {course.sections} Section
                </div>

                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {course.hours} Hours
                </div>

                <div>
                  {course.progress}% Complete
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Courses;