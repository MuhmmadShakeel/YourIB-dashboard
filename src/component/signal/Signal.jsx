import React from "react";
import { Search, Activity, TrendingUp, TrendingDown } from "lucide-react";

function Signal() {
    const signals = [
        {
            pair: "EUR/USD (Buy)",
            trader: "John Trader",
            time: "1 hour ago",
            pips: "+25 Pips",
            entry: "1.0850",
            current: "1.0850",
            tp: "1.0850",
            sl: "1.0850",
        },
        {
            pair: "GBP/JPY (Sell)",
            trader: "Sarah Analyst",
            time: "3 hours ago",
            pips: "+15 Pips",
            entry: "188.50",
            current: "188.35",
            tp: "187.80",
            sl: "189.20",
        },
        {
            pair: "XAU/USD (Buy)",
            trader: "Mike Gold",
            time: "5 hours ago",
            pips: "+29 Pips",
            entry: "2045.00",
            current: "2048.50",
            tp: "2065.00",
            sl: "2035.00",
        },
        {
            pair: "USD/CAD (Sell)",
            trader: "John Trader",
            time: "1 day ago",
            pips: "+65 Pips",
            entry: "1.3520",
            current: "1.3515",
            tp: "1.3480",
            sl: "1.3560",
        },
        {
            pair: "BTC/USD (Buy)",
            trader: "Emma Crypto",
            time: "2 days ago",
            pips: "+35 Pips",
            entry: "42,500",
            current: "42,150",
            tp: "44,000",
            sl: "41,800",
        },
    ];

    const getTrendIcon = (pair) => {
        return pair.includes("Buy") ? (
            <TrendingUp size={14} className="text-green-600" />
        ) : (
            <TrendingDown size={14} className="text-red-600" />
        );
    };

    return (
        <div className="w-full lg:w-[74%] lg:ml-78 px-4 md:px-8 mt-0 mb-10">
            <div className="relative w-full mb-6">
                <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                    type="text"
                    placeholder="Search signals..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm shadow-sm"
                />
            </div>

            <div className="space-y-4">
                {signals.map((signal, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-200"
                    >
                        <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                                {getTrendIcon(signal.pair)}
                                <h3 className="text-base sm:text-lg font-bold text-gray-800">
                                    {signal.pair}
                                </h3>
                            </div>

                            <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm font-semibold shadow-sm">
                                <Activity size={14} className="text-green-600" />
                                <span>{signal.pips}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-600 mb-3">
                            <span className="font-medium">{signal.trader}</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-500">{signal.time}</span>
                        </div>

                        <div className="overflow-x-auto">
                            <div className="grid grid-cols-4 gap-2 min-w-[400px] sm:min-w-0 text-sm">
                                <div className="text-gray-500 font-medium">Entry</div>
                                <div className="text-gray-500 font-medium">Current</div>
                                <div className="text-gray-500 font-medium">Take Profit</div>
                                <div className="text-gray-500 font-medium">Stop Loss</div>

                                <div className="font-semibold text-gray-800">{signal.entry}</div>
                                <div className="font-semibold text-gray-800">{signal.current}</div>
                                <div className="font-semibold text-gray-800">{signal.tp}</div>
                                <div className="font-semibold text-gray-800">{signal.sl}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Signal;