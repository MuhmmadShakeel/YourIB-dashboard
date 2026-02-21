import React, { useState } from "react";
import { Upload } from "lucide-react"; // Optional: for the upload icon
import Logo from "../../assets/images/Logo.png"; // Placeholder logo
const WhiteLabel = () => {
  const [platformName, setPlatformName] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");
  const [primaryColor, setPrimaryColor] = useState("#003986");
  const [logo, setLogo] = useState(null);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setLogo(URL.createObjectURL(file));
    } else {
      alert("File must be PNG, JPG, or SVG and max 2MB");
    }
  };

  return (
    <div className="min-h-screen lg:ml-65 bg-[#F8FAFC] flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-[20px] shadow-sm w-full max-w-[650px] overflow-hidden border border-gray-100">
        <form className="p-8 space-y-6">

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Platform Logo</label>
              <label className="flex flex-col items-center justify-center w-full h-[140px] rounded-xl cursor-pointer bg-white hover:bg-gray-50 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <div className="bg-[#E0E7FF] p-2 rounded-full mb-2">
                    <Upload className="w-5 h-5 text-[#003986]" />
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="text-[#003986] font-bold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG or SVG (max. 2MB)</p>
                </div>
                <input type="file" className="hidden" onChange={handleLogoUpload} accept="image/*" />
              </label>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Current Logo</label>
              <div className="w-full h-[140px] bg-[#F1F3F6] rounded-xl flex items-center justify-center p-4">
                <img src={Logo} alt="Logo" className="max-h-full object-contain" />

              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">Platform Name</label>
            <input
              type="text"
              placeholder="YOUR IB Trading Platform"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#003986] focus:border-transparent outline-none transition-all placeholder:text-gray-300"
              value={platformName}
              onChange={(e) => setPlatformName(e.target.value)}
            />
            <p className="text-xs text-gray-400">This name will appear in the header and throughout your platform</p>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">Website URL</label>
            <input
              type="text"
              placeholder="https://yourib.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#003986] focus:border-transparent outline-none transition-all placeholder:text-gray-300"
              value={websiteURL}
              onChange={(e) => setWebsiteURL(e.target.value)}
            />
            <p className="text-xs text-gray-400">Your company website URL for external links</p>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">Primary Brand Color</label>
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden w-full">
              <div className="p-2 border-r border-gray-200">
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-8 h-8 rounded cursor-pointer border-none p-0"
                />
              </div>
              <input
                type="text"
                value={primaryColor.toUpperCase()}
                readOnly
                className="px-4 py-2 text-gray-400 outline-none w-full"
              />
            </div>
            <p className="text-xs text-gray-400">This color will be used for buttons, links, and accent elements</p>
          </div>

          <div className="space-y-3 pt-4">
            <button
              type="submit"
              className="w-full bg-[#003986] cursor-pointer text-white py-3.5 rounded-lg font-semibold hover:bg-[#002d6b] transition-colors shadow-md"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="w-full bg-white text-gray-600 py-3.5 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>

          <div className="mt-8 p-6 bg-[#E8F0FE] rounded-2xl border border-[#B8D1F5]">
            <h4 className="text-[#003986] font-bold text-lg mb-1">Need More Customization?</h4>
            <p className="text-[#3C5A85] text-sm leading-relaxed">
              Contact our team to discuss advanced white label options including custom domains, email templates, and more.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WhiteLabel;