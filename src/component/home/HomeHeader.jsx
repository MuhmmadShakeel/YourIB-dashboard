import React from "react";
import {
  Bell,
  ChevronDown,
  DollarSign,
  UserPlus,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
} from "lucide-react";

function HomeHeader() {
  const stats = [
    {
      title: "Total Commission",
      value: "$58,425",
      change: "12.5%",
      isUp: true,
      icon: DollarSign,
      iconBg: "bg-[#003B8F]",
      lineColor: "#003B8F",
    },
    {
      title: "New Signups",
      value: "247",
      change: "8.2%",
      isUp: true,
      icon: UserPlus,
      iconBg: "bg-[#22C55E]",
      lineColor: "#22C55E",
    },
    {
      title: "Total Deposits",
      value: "$1.2M",
      change: "3.1%",
      isUp: false,
      icon: TrendingUp,
      iconBg: "bg-[#FBBF24]",
      lineColor: "#FBBF24",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 pb-6 md:pt-6 md:pb-8">
      <div className="pt-14 md:pt-0">
     

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 lg:p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Section */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`${stat.iconBg} p-2 rounded-xl shadow-md`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">
                        {stat.title}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-0.5">
                        {stat.value}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`flex items-center gap-1 text-sm font-semibold ${stat.isUp ? "text-green-500" : "text-red-500"
                      }`}
                  >
                    {stat.isUp ? (
                      <ArrowUpRight size={16} />
                    ) : (
                      <ArrowDownRight size={16} />
                    )}
                    {stat.change}
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <span className="text-gray-400 text-sm">This month</span>

                  <div className="w-24 h-8">
                    <svg viewBox="0 0 100 40" className="w-full h-full">
                      <path
                        d={
                          stat.isUp
                            ? "M0,35 Q20,35 40,20 T80,10 T100,5"
                            : "M0,5 Q20,10 40,20 T80,25 T100,38"
                        }
                        fill="none"
                        stroke={stat.lineColor}
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;