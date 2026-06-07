"use client";

import Link from 'next/link';
import { ShoppingBag, Search, PlusCircle, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Bazaar Digital BD
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/browse" className="text-gray-600 hover:text-blue-600 font-medium transition-colors flex items-center gap-1">
              <Search className="h-4 w-4" />
              Browse
            </Link>
            <Link href="/sell" className="text-gray-600 hover:text-blue-600 font-medium transition-colors flex items-center gap-1">
              <PlusCircle className="h-4 w-4" />
              Sell
            </Link>
            <Link href="/profile" className="text-gray-600 hover:text-blue-600 font-medium transition-colors flex items-center gap-1">
              <User className="h-4 w-4" />
              Profile
            </Link>
            <Link
              href="/auth"
              className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/browse"
              className="block px-3 py-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Browse Products
            </Link>
            <Link
              href="/sell"
              className="block px-3 py-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Sell Item
            </Link>
            <Link
              href="/profile"
              className="block px-3 py-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              My Profile
            </Link>
            <div className="px-3 py-4">
              <Link
                href="/auth"
                className="block w-full text-center bg-blue-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
