
import { useState } from 'react';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import AuthModal from './AuthModal';
import ContactModal from './ContactModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'الرئيسية', href: '/' },
    { name: 'خدماتنا', href: '/services' },
    { name: 'الباقات', href: '/#packages' },
    { name: 'عملاؤنا', href: '/#testimonials' },
    { name: 'الأسئلة الشائعة', href: '/#faq' },
    { name: 'تواصل معنا', href: '/contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      scrollToSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-vertex-black/90 backdrop-blur-md z-50 border-b border-vertex-gold/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-vertex-gold-gradient rounded-lg flex items-center justify-center">
              <span className="text-vertex-black font-bold text-xl">V</span>
            </div>
            <div className="text-xl font-bold vertex-gradient-text">
              Vertex Solutions
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigationItems.map((item) => (
              item.href.startsWith('/#') ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white hover:text-vertex-gold transition-colors duration-300 font-medium"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white hover:text-vertex-gold transition-colors duration-300 font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <AuthModal 
              trigger={
                <Button variant="ghost" className="text-white hover:text-vertex-gold">
                  <User className="w-4 h-4 ml-2" />
                  حسابي
                  <ChevronDown className="w-4 h-4 mr-2" />
                </Button>
              }
            />
            
            <ContactModal 
              trigger={
                <Button className="vertex-button">
                  ابدأ الآن
                </Button>
              }
              title="ابدأ مشروعك الآن"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-vertex-gold/20">
            <nav className="flex flex-col space-y-4 mt-4">
              {navigationItems.map((item) => (
                item.href.startsWith('/#') ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-white hover:text-vertex-gold transition-colors duration-300 text-right"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-white hover:text-vertex-gold transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <AuthModal 
                  trigger={
                    <Button variant="ghost" className="text-white justify-start">
                      تسجيل الدخول
                    </Button>
                  }
                />
                <ContactModal 
                  trigger={
                    <Button className="vertex-button">
                      ابدأ الآن
                    </Button>
                  }
                  title="ابدأ مشروعك الآن"
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
