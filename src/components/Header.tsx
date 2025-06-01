
import { useState } from 'react';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'الباقات', href: '#packages' },
    { name: 'عملاؤنا', href: '#testimonials' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 w-full bg-vertex-black/90 backdrop-blur-md z-50 border-b border-vertex-gold/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-vertex-gold-gradient rounded-lg flex items-center justify-center">
              <span className="text-vertex-black font-bold text-xl">V</span>
            </div>
            <div className="text-xl font-bold vertex-gradient-text">
              Vertex Solutions
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-vertex-gold transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:text-vertex-gold">
                  <User className="w-4 h-4 ml-2" />
                  حسابي
                  <ChevronDown className="w-4 h-4 mr-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-vertex-black-light border-vertex-gold/20">
                <DropdownMenuItem className="text-white hover:bg-vertex-gold/10">
                  تسجيل الدخول
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-vertex-gold/10">
                  إنشاء حساب
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-vertex-gold/10">
                  لوحة التحكم
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button className="vertex-button">
              ابدأ الآن
            </Button>
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
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-vertex-gold transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-white justify-start">
                  تسجيل الدخول
                </Button>
                <Button className="vertex-button">
                  ابدأ الآن
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
