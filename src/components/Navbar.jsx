import { useState } from "react";
import { Menu, X, Search } from "lucide-react"; // Added Search icon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <span className="font-bold text-lg sm:text-xl">
            Crown Group Job Portal
          </span>
        </div>

        {/* Middle: Search Bar (Desktop) */}
        {/* <div className="hidden md:flex flex-1 justify-center mx-4">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full px-4 py-2 pl-10 rounded-md shadow-md text-black focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
            />
            <Search
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
        </div> */}

        {/* Right: Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-white text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
            Login
          </button>
          <button className="bg-amber-400 text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-orange-500 transition">
            Signup
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          {/* Mobile Search */}
          {/* <div className="relative w-full">
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full px-4 py-2 pl-10 rounded-md shadow-md text-black focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <Search
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div> */}

          <button className="w-full bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
            Login
          </button>
          <button className="w-full bg-amber-400 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-500 transition">
            Signup
          </button>
        </div>
      )}
    </nav>
  );
}
