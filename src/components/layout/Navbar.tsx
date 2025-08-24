import { Bell, Home, Info, LayoutGridIcon } from "lucide-react";
import MakayLogo from "../../assets/makay-logo.svg";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white border-gray-200">
      {/* Logo and Navigation Links Section */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={MakayLogo} alt="Makay logo" className="w-20 rounded-lg" />
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          <Home className="w-5 h-5" />
        </button>

        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors relative">
          <LayoutGridIcon className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>

        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          <Info className="w-5 h-5" />
        </button>

        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
        </button>

        {/* Pipe separator */}
        <div className="h-6 w-px bg-gray-300 mx-2"></div>

        {/* Sign up button with butter background */}
        <button
          className="px-4 py-2 text-gray-900 font-medium rounded-lg transition-colors hover:opacity-80"
          style={{ backgroundColor: "#F4D03F" }}
        >
          J
        </button>
      </div>
    </nav>
  );
}
