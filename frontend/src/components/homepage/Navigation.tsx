import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20%282%29-9g4laL1EiPmzEURRA8f5yfZmMIVaJ1.png"
              alt="MentorMate"
              className="h-8 w-8"
            />
            <span className="ml-2 text-xl font-bold text-[#5c59b1]">MentorMate</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#7e81fb] transition-colors">
              Use Cases
            </a>
            <a href="#" className="text-gray-700 hover:text-[#7e81fb] transition-colors">
              Search
            </a>
            <a href="/mentor-listing" className="text-gray-700 hover:text-[#7e81fb] transition-colors">
              Listing
            </a>
            <a href="#" className="text-gray-700 hover:text-[#7e81fb] transition-colors">
              Pricing
            </a>
            <button className="text-[#7e81fb] hover:text-[#5c59b1] transition-colors">
              Sign In
            </button>
            <button className="bg-[#7e81fb] text-white px-4 py-2 rounded-lg hover:bg-[#5c59b1] transition-colors">
              Start Listing
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700">
                Use Cases
              </a>
              <a href="#" className="text-gray-700">
                Search
              </a>
              <a href="/mentor-listing" className="text-gray-700">
                Listing
              </a>
              <a href="#" className="text-gray-700">
                Pricing
              </a>
              <button className="text-[#7e81fb] text-left">Sign In</button>
              <button className="bg-[#7e81fb] text-white px-4 py-2 rounded-lg w-fit">
                Start Listing
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
