import React from "react";
import { Search, Star } from "lucide-react";

function Broker() {
  const brokers = [
    {
      name: "MetaQuotes Global",
      rating: "4.6",
      description:
        "Industry-leading broker with tight spreads, multiple account types, and comprehensive trading instruments across forex, commodities, and indices.",
      minDeposit: "$100",
      leverage: "1:500",
      instruments: "200+",
    },
    {
      name: "ForexPro Trading",
      rating: "4.8",
      description:
        "Specialized forex broker offering competitive commissions, advanced charting tools, and dedicated account management for serious traders.",
      minDeposit: "$250",
      leverage: "1:400",
      instruments: "150+",
    },
    {
      name: "GlobalTrade Markets",
      rating: "4.9",
      description:
        "Multi-asset broker providing access to forex, stocks, cryptocurrencies, and commodities with institutional-grade execution.",
      minDeposit: "$50",
      leverage: "1:300",
      instruments: "500+",
    },
    {
      name: "PrimeFX Solutions",
      rating: "4.7",
      description:
        "Premium broker catering to professional traders with deep liquidity, tight spreads, and personalized service.",
      minDeposit: "$1,000",
      leverage: "1:200",
      instruments: "300+",
    },
    {
      name: "TradeSmart Global",
      rating: "4.5",
      description:
        "User-friendly platform perfect for beginners and intermediate traders, offering educational resources and social trading features.",
      minDeposit: "$50",
      leverage: "1:500",
      instruments: "100+",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 py-6 lg:ml-72">

      <div className="mb-6">
        <div className="relative w-full">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search brokers..."
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>
      </div>

      <div className="space-y-6">
        {brokers.map((broker, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 shadow-sm"          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                  {broker.name}
                </h3>
                <div className="flex items-center text-yellow-500 text-xs gap-1">
                  <Star size={14} fill="currentColor" />
                  {broker.rating}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 mb-4">
              {broker.description}
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-gray-700">
                <div>
                  <p className="text-gray-500 text-xs">Min. Deposit</p>
                  <p className="font-semibold">{broker.minDeposit}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-xs">Max Leverage</p>
                  <p className="font-semibold">{broker.leverage}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-xs">Instruments</p>
                  <p className="font-semibold">{broker.instruments}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-blue-900 cursor-pointer text-white text-xs sm:text-sm px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                Visit Broker
              </button>

              <button className="border border-gray-300 cursor-pointer text-gray-700 text-xs sm:text-sm px-4 py-2 rounded-lg hover:bg-gray-50 transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-blue-900 mb-1">
          Important Notice
        </h4>
        <p className="text-xs text-blue-800">
          These links and brokers are examples only. Please ensure you review
          each broker’s terms and conditions carefully before opening an
          account.
        </p>
      </div>

    </div>
  );
}

export default Broker;