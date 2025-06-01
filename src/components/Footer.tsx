
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal';

const Footer = () => {
  const services = [
    { name: 'مواقع إلكترونية', href: '/services' },
    { name: 'متاجر إلكترونية', href: '/services' }, 
    { name: 'بوتات واتساب', href: '/services' },
    { name: 'أنظمة CRM', href: '/services' },
    { name: 'تطبيقات الجوال', href: '/services' },
    { name: 'دعم تقني', href: '/contact' }
  ];

  const quickLinks = [
    { name: 'من نحن', href: '/#about' },
    { name: 'خدماتنا', href: '/services' },
    { name: 'الباقات', href: '/#packages' },
    { name: 'أعمالنا', href: '/#testimonials' },
    { name: 'المدونة', href: '#' },
    { name: 'اتصل بنا', href: '/contact' }
  ];

  const handleWhatsApp = () => {
    const message = "مرحبا، أريد الاستفسار عن خدمات Vertex Solutions";
    const whatsappUrl = `https://wa.me/966501234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailContact = () => {
    window.location.href = 'mailto:info@vertex-solutions.com';
  };

  const handlePhoneContact = () => {
    window.location.href = 'tel:+966501234567';
  };

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickLinkClick = (href: string) => {
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      scrollToSection(sectionId);
    }
  };

  return (
    <footer className="bg-vertex-black border-t border-vertex-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-vertex-black-light/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-vertex-gold-gradient rounded-lg flex items-center justify-center">
                <span className="text-vertex-black font-bold text-xl">V</span>
              </div>
              <div className="text-xl font-bold vertex-gradient-text">
                Vertex Solutions
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              وكالة رقمية متخصصة في بناء الحلول التقنية المتكاملة للشركات والمشاريع الناشئة.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <button 
                onClick={handleWhatsApp}
                className="w-10 h-10 bg-vertex-gold/20 rounded-lg flex items-center justify-center hover:bg-vertex-gold hover:text-vertex-black transition-all duration-300 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <button 
                onClick={handleEmailContact}
                className="w-10 h-10 bg-vertex-gold/20 rounded-lg flex items-center justify-center hover:bg-vertex-gold hover:text-vertex-black transition-all duration-300 cursor-pointer"
              >
                <Mail className="w-5 h-5" />
              </button>
              <button 
                onClick={handlePhoneContact}
                className="w-10 h-10 bg-vertex-gold/20 rounded-lg flex items-center justify-center hover:bg-vertex-gold hover:text-vertex-black transition-all duration-300 cursor-pointer"
              >
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">خدماتنا</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-vertex-gold transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/#') ? (
                    <button 
                      onClick={() => handleQuickLinkClick(link.href)}
                      className="text-gray-300 hover:text-vertex-gold transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-vertex-gold transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">تواصل معنا</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-vertex-gold mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  الرياض، المملكة العربية السعودية
                </div>
              </div>
              <button 
                onClick={handlePhoneContact}
                className="flex items-center space-x-3 rtl:space-x-reverse hover:text-vertex-gold transition-colors"
              >
                <Phone className="w-5 h-5 text-vertex-gold flex-shrink-0" />
                <div className="text-gray-300" dir="ltr">
                  +966 50 123 4567
                </div>
              </button>
              <button 
                onClick={handleEmailContact}
                className="flex items-center space-x-3 rtl:space-x-reverse hover:text-vertex-gold transition-colors"
              >
                <Mail className="w-5 h-5 text-vertex-gold flex-shrink-0" />
                <div className="text-gray-300">
                  info@vertex-solutions.com
                </div>
              </button>
              <ContactModal 
                trigger={
                  <button className="flex items-center space-x-3 rtl:space-x-reverse hover:text-vertex-gold transition-colors">
                    <MessageCircle className="w-5 h-5 text-vertex-gold flex-shrink-0" />
                    <div className="text-gray-300">
                      دعم على مدار الساعة
                    </div>
                  </button>
                }
                title="طلب دعم فني"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-vertex-gold/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-center md:text-right">
              © 2024 Vertex Solutions. جميع الحقوق محفوظة.
            </div>
            <div className="flex space-x-6 rtl:space-x-reverse">
              <Link to="#" className="text-gray-300 hover:text-vertex-gold transition-colors duration-300">
                سياسة الخصوصية
              </Link>
              <Link to="#" className="text-gray-300 hover:text-vertex-gold transition-colors duration-300">
                شروط الاستخدام
              </Link>
              <Link to="#" className="text-gray-300 hover:text-vertex-gold transition-colors duration-300">
                سياسة الاسترداد
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
