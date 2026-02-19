import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  LayoutDashboard,
  Megaphone,
  HelpCircle,
  Users,
  TrendingUp,
  MessageCircle,
  BookOpen,
  Calculator,
  Building2,
  Layers,
} from "lucide-react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Announcement", icon: Megaphone, path: "/announcement" },
    { name: "FAQ", icon: HelpCircle, path: "/faq" },
    { name: "Community", icon: Users, path: "/community" },
    { name: "Signals", icon: TrendingUp, path: "/signals" },
    { name: "Support", icon: MessageCircle, path: "/support" },
    { name: "Courses", icon: BookOpen, path: "/courses" },
    { name: "Lot Calculator", icon: Calculator, path: "/calculator" },
    { name: "Brokers", icon: Building2, path: "/brokers" },
    { name: "White Label", icon: Layers, path: "/white-label" },
  ];

  return (
    <>
      {/* ===== Mobile Header ===== */}
      <header className="md:hidden fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-black text-blue-900">W</div>
          <span className="text-[10px] font-bold tracking-widest text-blue-900 uppercase">
            YOUR IB
          </span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* ===== Mobile Overlay ===== */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ===== Sidebar ===== */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-[280px] lg:w-[300px]
          bg-[#f9fafb] border-r border-gray-200
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          pt-0 md:pt-10
        `}
      >
        {/* Logo */}
        <div className="hidden md:flex flex-col items-start px-8 pt-10 pb-6">
          <h1 className="text-5xl font-black text-blue-900 leading-none tracking-tighter">
            W
          </h1>
          <p className="text-[10px] font-bold tracking-[0.3em] text-blue-900 mt-2 uppercase opacity-80">
            YOUR IB SOLUTIONS
          </p>
        </div>

        {/* Community Card */}
        <div className="px-4 mt-4 md:mt-0 mb-6 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3.5 flex items-center gap-3">
            <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="member"
                className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
              />
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="member"
                className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
              />
            </div>
            <div className="text-gray-700 text-[13px] font-bold truncate">
              Members X’s Community
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 space-y-1 scrollbar-hide pb-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-4 px-6 py-3.5 rounded-2xl text-gray-500 transition-all duration-300 group ${isActive
                  ? "bg-blue-50 text-blue-700 shadow-sm font-semibold"
                  : "hover:bg-white hover:text-blue-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon
                    size={20}
                    className={
                      isActive
                        ? "text-blue-700"
                        : "text-gray-400 group-hover:text-blue-600"
                    }
                  />
                  <span className="text-[15px]">{item.name}</span>
                  {isActive && (
                    <span className="ml-auto w-1.5 h-5 bg-blue-700 rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default SideBar;
