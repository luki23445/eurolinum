import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Oferta', id: 'offer' },
    { label: 'Program', id: 'program' },
    { label: 'Galeria', id: 'gallery' },
    { label: 'Opinie', id: 'reviews' },
    { label: 'Rezerwacja', id: 'reservation' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#1a2947] rounded-full flex items-center justify-center">
              <span className="text-white">PT</span>
            </div>
            <span className="text-[#1a2947]">Piotr Travel</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#1a2947] hover:text-[#d4af37] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:600301704" className="flex items-center space-x-2 text-[#1a2947] hover:text-[#d4af37] transition-colors">
              <Phone className="w-4 h-4" />
              <span>600 301 704</span>
            </a>
            <Button
              onClick={() => scrollToSection('reservation')}
              className="bg-[#d4af37] text-[#1a2947] hover:bg-[#c49d2e]"
            >
              Zarezerwuj miejsce
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-[#1a2947] hover:text-[#d4af37] transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a href="tel:600301704" className="flex items-center space-x-2 py-2 text-[#1a2947]">
                <Phone className="w-4 h-4" />
                <span>600 301 704</span>
              </a>
              <Button
                onClick={() => scrollToSection('reservation')}
                className="w-full bg-[#d4af37] text-[#1a2947] hover:bg-[#c49d2e]"
              >
                Zarezerwuj miejsce
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
