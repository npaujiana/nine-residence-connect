
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full py-2 px-4 fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div className="container max-w-6xl bg-white/95 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-between px-6 py-2">
        <div className="flex items-center">
          <span className="text-xl font-bold text-nine-accent">
            Nine<span className="text-nine-dark">Residence</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#features" className="text-gray-600 hover:text-nine-accent transition-colors text-sm font-medium flex items-center">
            Features
            <ChevronDown className="ml-1 h-4 w-4" />
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-nine-accent transition-colors text-sm font-medium flex items-center">
            Testimonials
            <ChevronDown className="ml-1 h-4 w-4" />
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-nine-accent transition-colors text-sm font-medium flex items-center">
            Pricing
            <ChevronDown className="ml-1 h-4 w-4" />
          </a>
          <a href="#contact" className="text-gray-600 hover:text-nine-accent transition-colors text-sm font-medium">
            Contact
          </a>
        </div>
        
        {/* Right side icons and button */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
          </div>
          <Button className="bg-nine-accent hover:bg-nine-dark text-white rounded-full text-sm px-5">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            className="focus:ring-0"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 bg-white rounded-xl shadow-md py-4 px-6 z-50">
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-nine-accent transition-colors py-2 flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
              <ChevronDown className="h-4 w-4" />
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-600 hover:text-nine-accent transition-colors py-2 flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
              <ChevronDown className="h-4 w-4" />
            </a>
            <a 
              href="#pricing" 
              className="text-gray-600 hover:text-nine-accent transition-colors py-2 flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
              <ChevronDown className="h-4 w-4" />
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-nine-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
              </div>
              <Button className="bg-nine-accent hover:bg-nine-dark text-white rounded-full">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
