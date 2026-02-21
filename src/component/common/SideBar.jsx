import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
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
      <header className="md:hidden fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-8 w-auto" />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-[280px] lg:w-[300px]
          bg-white border-r border-gray-100
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="hidden md:flex flex-col items-start px-8 pt-8 pb-4">
          <img src={Logo} alt="Logo" className="w-24 h-auto" />
          <div className="mt-2">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#002d72] block">YOUR</span>
            <span className="text-[8px] font-bold tracking-[0.1em] text-[#002d72] block">I B</span>
          </div>
        </div>

        <div className="px-4 mb-6 mt-2 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 p-3 flex items-center gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="member"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="member"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="member"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
            </div>
            <div className="text-[#4b5563] text-[13px] font-semibold truncate">
              Members X’S C...
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 space-y-1 scrollbar-hide pb-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `relative flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-200 group ${isActive
                  ? "bg-[#ebf2ff] text-[#0047ab] font-bold"
                  : "text-[#64748b] hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-[#0047ab] rounded-r-full" />
                  )}

                  <item.icon
                    size={22}
                    strokeWidth={isActive ? 2.5 : 2}
                    className={
                      isActive
                        ? "text-[#0047ab]"
                        : "text-[#94a3b8] group-hover:text-gray-600"
                    }
                  />
                  <span className="text-[16px]">{item.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>

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