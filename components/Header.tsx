"use client";

import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Facebook, Instagram } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Corsi', href: '#corsi' },
    { name: 'Chi Siamo', href: '#chi-siamo' },
    { name: 'Eventi', href: '#eventi' },
    { name: 'Contatti', href: '#contatti' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/assets/src/logo3celeste.svg"
              alt="Logo"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 md:space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative font-display font-semibold tracking-wide text-judo-amaranto hover:text-[#3C69AE] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3C69AE] after:transition-all hover:after:w-full"
              >
                {item.name}
              </button>
            ))}

            {/* Social Icons */}
            <div className="flex items-center space-x-3 ml-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 text-judo-amaranto hover:text-[#3C69AE] transition-colors" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-judo-amaranto hover:text-[#3C69AE] transition-colors" />
              </a>
            </div>

            {/* Pulsante Iscriviti */}
            <Button
              onClick={() => scrollToSection('#contatti')}
              className="bg-[#3C69AE] hover:bg-[#3C69AE]/90 text-white border border-judo-amaranto font-display font-bold px-6 py-2 rounded-full shadow-modern hover:shadow-hover transition-all duration-300 tracking-wide ml-4"
            >
              Iscriviti
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-judo-amaranto p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 rounded-b-2xl shadow-modern">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-3 font-display font-semibold tracking-wide text-judo-amaranto hover:text-[#3C69AE] hover:bg-gray-50 rounded-lg transition-all relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3C69AE] after:transition-all hover:after:w-full"
                >
                  {item.name}
                </button>
              ))}

              {/* Social Icons Mobile */}
              <div className="flex items-center space-x-4 px-3 py-2">
                <a href="https://www.facebook.com/JudoRieti/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-6 h-6 text-judo-amaranto hover:text-[#3C69AE] transition-colors" />
                </a>
                <a href="https://www.instagram.com/a.s.d.judorieti/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-6 h-6 text-judo-amaranto hover:text-[#3C69AE] transition-colors" />
                </a>
              </div>

              <Button
                onClick={() => scrollToSection('#contatti')}
                className="w-full bg-[#3C69AE] hover:bg-[#3C69AE]/90 text-white border border-judo-amaranto font-display font-bold px-6 py-2 rounded-full shadow-modern hover:shadow-hover transition-all duration-300 tracking-wide"
              >
                Iscriviti
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
