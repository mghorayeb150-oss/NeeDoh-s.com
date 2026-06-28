import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
}

export function Header({ cartCount }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-orange-400 font-bold text-white">
              N
            </div>
            <span className="text-xl font-black tracking-tight text-gray-900">NeeDoh Shop</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <a href="#" className="hover:text-pink-500 transition-colors">Shop All</a>
          <a href="#features" className="hover:text-pink-500 transition-colors">Why Us</a>
          <a href="#about" className="hover:text-pink-500 transition-colors">About</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ShoppingBag className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
          
          <button 
            className="p-2 md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4">
          <nav className="flex flex-col gap-4 font-medium text-gray-600">
            <a href="#" className="hover:text-pink-500">Shop All</a>
            <a href="#features" className="hover:text-pink-500">Why Us</a>
            <a href="#about" className="hover:text-pink-500">About</a>
          </nav>
        </div>
      )}
    </header>
  );
}
