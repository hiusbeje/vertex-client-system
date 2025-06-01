
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
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
              <span className="text-white">نحن نبني لك</span>
              <br />
              <span className="vertex-gradient-text">نظامًا يجلب العملاء</span>
              <br />
              <span className="text-white">بدلاً منك</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
              وكالة Vertex Solutions المتخصصة في بناء الأنظمة الرقمية المتكاملة. 
              من المواقع إلى الـ CRM وبوتات الواتساب - كل ما تحتاجه لتنمية أعمالك.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button className="vertex-button text-lg px-8 py-4 animate-glow">
                احجز استشارة مجانية
              </Button>
              <Button 
                variant="outline" 
                className="text-white border-vertex-gold hover:bg-vertex-gold hover:text-vertex-black text-lg px-8 py-4 transition-all duration-300"
              >
                استكشف خدماتنا
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold vertex-gradient-text">150+</div>
                <div className="text-gray-400 mt-1">مشروع مكتمل</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold vertex-gradient-text">98%</div>
                <div className="text-gray-400 mt-1">رضا العملاء</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold vertex-gradient-text">24/7</div>
                <div className="text-gray-400 mt-1">دعم تقني</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold vertex-gradient-text">7</div>
                <div className="text-gray-400 mt-1">أيام متوسط التسليم</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-vertex-gold w-6 h-6" />
      </div>
    </section>
  );
};

export default HeroSection;
