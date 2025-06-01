
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactModal from './ContactModal';

const HeroSection = () => {
  const handleConsultation = () => {
    const message = "مرحبا، أريد حجز استشارة مجانية مع Vertex Solutions";
    const whatsappUrl = `https://wa.me/966501234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-vertex-hero relative overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-vertex-black/80 to-transparent"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-vertex-gold/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-vertex-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-white">نحو وكالة مؤتمتة،</span>
              <br />
              <span className="vertex-gradient-text">مبيعات مستمرة،</span>
              <br />
              <span className="text-white">ونمو بلا توقف</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              وكالة رقمية مؤتمتة بنسبة 80% تقود مشروعك للنمو الذكي باستخدام الذكاء الاصطناعي والتحول الرقمي.
              تحوّل رقمي متكامل. ذكاء اصطناعي في كل خطوة. نتائج حقيقية.
            </p>

            <div className="bg-vertex-gold/10 border border-vertex-gold/30 rounded-lg p-4 max-w-2xl">
              <p className="text-vertex-gold font-semibold text-lg">
                🎯 ابدأ في 72 ساعة. ارفع أرباحك، وخفّض نفقاتك، وسوّق على مدار الساعة.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <ContactModal 
                trigger={
                  <Button className="vertex-button text-lg px-8 py-4 animate-glow">
                    🟢 ابدأ الآن
                  </Button>
                }
                title="ابدأ مشروعك الرقمي الآن"
              />
              <Button 
                onClick={handleConsultation}
                variant="outline" 
                className="text-white border-vertex-gold hover:bg-vertex-gold hover:text-vertex-black text-lg px-8 py-4 transition-all duration-300"
              >
                📞 احجز استشارة مجانية
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold vertex-gradient-text">80%</div>
                <div className="text-gray-400 mt-1">نسبة الأتمتة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold vertex-gradient-text">72</div>
                <div className="text-gray-400 mt-1">ساعة للبدء</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold vertex-gradient-text">24/7</div>
                <div className="text-gray-400 mt-1">أنظمة ذكية</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold vertex-gradient-text">100+</div>
                <div className="text-gray-400 mt-1">عميل راضي</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-vertex-gold transition-colors"
      >
        <ArrowDown className="text-vertex-gold w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;
