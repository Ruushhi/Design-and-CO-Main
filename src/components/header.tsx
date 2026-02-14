'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Works', href: '#works' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Philosophy', href: '#philosophy' },
    // { label: 'Team', href: '#team' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <a href="#" className="text-sm font-bold tracking-widest text-gray-900 hover:text-amber-700 transition-colors">
          DESIGN & CO
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs text-gray-700 hover:text-amber-700 transition-colors uppercase tracking-widest font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-4 md:gap-6">
          <a href="#contact"> 
          <button className="hidden md:flex px-6 py-2 bg-gray-900 text-white hover:bg-amber-700 transition-colors text-xs font-semibold tracking-widest">
            Book Now
          </button>
          </a>
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-xs text-gray-700 hover:text-amber-700 transition-colors uppercase tracking-widest font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact"> 
            <button className="w-full mt-6 px-6 py-3 bg-gray-900 text-white hover:bg-amber-700 transition-colors text-xs font-semibold tracking-widest">
              Book Now
            </button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
