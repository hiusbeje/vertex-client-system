
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Globe, Palette, BarChart3, Zap, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-vertex-gold" />,
      title: "مواقع ذكية تتحدث وتبيع",
      description: "مواقع إلكترونية متصلة ببوتات GPT، تحجز، تشرح، وتبيع 24/7. نظام كامل لتحويل الزوار إلى عملاء دائمين.",
      features: ["تصميم متجاوب", "بوت ذكي مدمج", "نظام حجز تلقائي", "تحليلات متقدمة"],
      price: "من $899"
    },
    {
      icon: <Bot className="w-12 h-12 text-vertex-gold" />,
      title: "بوتات محادثة ذكية",
      description: "ترد على العملاء، تجمع بياناتهم، وتوجّههم خطوة بخطوة نحو الشراء باستخدام أحدث تقنيات الذكاء الاصطناعي.",
      features: ["رد فوري 24/7", "جمع بيانات العملاء", "توجيه للشراء", "تكامل مع CRM"],
      price: "من $299"
    },
    {
      icon: <Zap className="w-12 h-12 text-vertex-gold" />,
      title: "أدوات SaaS حسب المشروع",
      description: "منصات CRM، أنظمة حجز، إدارة مشروعات، متجر ذكي... كلها مؤتمتة ومخصصة لاحتياجاتك.",
      features: ["تطوير مخصص", "أتمتة كاملة", "تكامل سلس", "دعم مستمر"],
      price: "من $1,499"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-vertex-gold" />,
      title: "تسويق رقمي يعمل وحده",
      description: "حملات + محتوى + إعلانات تعمل تلقائيًا وتولد عملاء دائمين مع تحسين مستمر للأداء.",
      features: ["حملات تلقائية", "توليد محتوى", "تحسين مستمر", "تقارير شاملة"],
      price: "من $799"
    },
    {
      icon: <Palette className="w-12 h-12 text-vertex-gold" />,
      title: "توليد محتوى ذكي",
      description: "مقالات، منشورات، إيميلات، فيديوهات تسويقية... كلها جاهزة بأدوات AI متطورة.",
      features: ["محتوى متنوع", "جودة احترافية", "تخصيص كامل", "إنتاج سريع"],
      price: "من $399"
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-vertex-gold" />,
      title: "أنظمة ذكاء وتحليل",
      description: "نظام متابعة وتحليل مبيعاتك وأداءك مع توصيات ذكية وجاهزة للتنفيذ الفوري.",
      features: ["تحليلات عميقة", "توصيات ذكية", "مراقبة مستمرة", "تقارير مفصلة"],
      price: "من $599"
    }
  ];

  const handleRequestService = (serviceName: string) => {
    const message = `مرحبا، أريد طلب خدمة: ${serviceName}`;
    const whatsappUrl = `https://wa.me/966501234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-vertex-black text-white" dir="rtl">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-vertex-black via-vertex-black-light to-vertex-black relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-vertex-gold/10 rounded-full blur-3xl animate-float"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="vertex-gradient-text">خدماتنا المتطورة</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              حلول رقمية شاملة مدعومة بالذكاء الاصطناعي لتحويل مشروعك إلى نجاح قابل للتوسع
            </p>
            <Button 
              onClick={() => handleRequestService('استشارة مجانية')}
              className="vertex-button text-lg px-8 py-4"
            >
              احجز استشارة مجانية الآن
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="vertex-card hover:scale-105 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-vertex-gold rounded-full ml-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <div className="text-2xl font-bold vertex-gradient-text mb-4">
                      {service.price}
                    </div>
                    <Button 
                      onClick={() => handleRequestService(service.title)}
                      className="w-full vertex-button"
                    >
                      <div className="flex items-center gap-2">
                        طلب الخدمة
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-vertex-black-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            جاهز لبدء مشروعك الرقمي؟
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            احصل على استشارة مجانية واكتشف كيف يمكن لخدماتنا أن تحول مشروعك إلى نجاح باهر
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleRequestService('استشارة شاملة')}
              className="vertex-button text-lg px-8 py-4"
            >
              ابدأ الآن مجانًا
            </Button>
            <Link to="/contact">
              <Button 
                variant="outline" 
                className="text-white border-vertex-gold hover:bg-vertex-gold hover:text-vertex-black text-lg px-8 py-4"
              >
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
