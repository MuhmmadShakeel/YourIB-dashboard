import React from "react";
import { Calculator, Info } from "lucide-react";

function LotCalculater() {
  return (
    <div className="min-h-screen lg:ml-52 bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-xl">

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">

          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-50 p-2 rounded-lg">
              <Calculator size={18} className="text-blue-900" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-800 ">
                Position Size Calculator
              </h2>
              <p className="text-xs text-gray-500">
                Enter your trade parameters below
              </p>
            </div>
          </div>

          <div className="space-y-4">

            <div>
              <label className="text-xs font-medium text-gray-600">
                Account Balance (USD)
              </label>
              <input
                type="number"
                defaultValue="10000"
                className="mt-1 w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-gray-600">
                Risk Per Trade (%)
              </label>
              <input
                type="number"
                defaultValue="2"
                className="mt-1 w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <p className="text-[11px] text-gray-400 mt-1">
                Recommended: 1-2% per trade
              </p>
            </div>

            <div>
              <label className="text-xs font-medium text-gray-600">
                Stop Loss (Pips)
              </label>
              <input
                type="number"
                defaultValue="50"
                className="mt-1 w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-gray-600">
                Pip Value (USD)
              </label>
              <input
                type="number"
                defaultValue="2"
                className="mt-1 w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <p className="text-[11px] text-gray-400 mt-1">
                Standard lot pip value: $10, Mini lot: $1, Micro lot: $0.10
              </p>
            </div>

            <button className="w-full cursor-pointer bg-blue-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-800 transition">
              Calculate Position Size
            </button>

          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 mt-6">

          <h3 className="text-sm font-semibold text-gray-800 mb-4">
            How to Use
          </h3>

          <ul className="space-y-3 text-xs text-gray-600">
            <li className="flex items-start gap-2">
              <Info size={14} className="text-blue-900 mt-0.5" />
              Enter your account balance in USD
            </li>

            <li className="flex items-start gap-2">
              <Info size={14} className="text-blue-900 mt-0.5" />
              Set your risk percentage (typically 1-2% per trade)
            </li>

            <li className="flex items-start gap-2">
              <Info size={14} className="text-blue-900 mt-0.5" />
              Input your stop loss distance in pips
            </li>

            <li className="flex items-start gap-2">
              <Info size={14} className="text-blue-900 mt-0.5" />
              Specify the pip value for your trading instrument
            </li>

            <li className="flex items-start gap-2">
              <Info size={14} className="text-blue-900 mt-0.5" />
              Click Calculate to get your recommended position size
            </li>
          </ul>

        </div>

      </div>
    </div>
  );
}

export default LotCalculater;