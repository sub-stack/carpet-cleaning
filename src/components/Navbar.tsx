import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首頁', href: '#home' },
    { name: '服務特色', href: '#features' },
    { name: '服務流程', href: '#procedure' },
    { name: '價目表', href: '#price' },
    { name: '服務據點', href: '#locations' },
    { name: '常見問題', href: '#faq' },
    { name: '服務條款', href: '#terms' },
    { name: '關於我們', href: '#about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className={`text-2xl font-bold ${scrolled ? 'text-primary' : 'text-primary lg:text-white'}`}>
              窩心清潔
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? 'text-text-secondary' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center space-x-4 border-l border-border pl-6 ml-2">
              <a href="#" className={`hover:text-primary transition-colors ${scrolled ? 'text-text-secondary' : 'text-white/90'}`}>
                <Facebook size={18} />
              </a>
              <a href="#" className={`hover:text-primary transition-colors ${scrolled ? 'text-text-secondary' : 'text-white/90'}`}>
                <Instagram size={18} />
              </a>
            </div>

            <a 
              href="https://wa.me/85212345678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              WhatsApp 查詢
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-text-primary' : 'text-primary'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-text-primary hover:text-primary hover:bg-bg rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a 
                href="https://wa.me/85212345678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-primary text-white px-5 py-3 rounded-full text-base font-medium"
              >
                WhatsApp 查詢
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
