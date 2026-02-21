import React from "react";
import { Bell, ChevronDown } from "lucide-react";

function Profile({ title, subtitle }) {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">

      <div>
        <h1 className="text-lg sm:text-xl font-bold text-gray-800">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs text-gray-400">
            {subtitle}
          </p>
        )}
      </div>

      <div className="flex items-center gap-4">

        <button className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
          <Bell size={18} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white" />
        </button>

        <div className="flex items-center gap-3 cursor-pointer group">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover border border-gray-200"
          />
          <div className="hidden sm:block">
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-gray-700">
                John Doe
              </span>
              <ChevronDown
                size={14}
                className="text-gray-400 group-hover:text-gray-600 transition"
              />
            </div>
            <p className="text-xs text-gray-400">
              admin@yourib.com
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Profile;