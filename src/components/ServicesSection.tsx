
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Globe, Palette, BarChart3, Zap, MessageCircle } from 'lucide-react';
import ContactModal from './ContactModal';

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-vertex-gold" />,
      title: "مواقع ذكية تتحدث وتبيع",
      description: "مواقع إلكترونية متصلة ببوتات GPT، تحجز، تشرح، وتبيع 24/7"
    },
    {
      icon: <Bot className="w-12 h-12 text-vertex-gold" />,
      title: "بوتات محادثة ذكية",
      description: "ترد على العملاء، تجمع بياناتهم، وتوجّههم خطوة بخطوة نحو الشراء"
    },
    {
      icon: <Zap className="w-12 h-12 text-vertex-gold" />,
      title: "أدوات SaaS حسب المشروع",
      description: "منصات CRM، أنظمة حجز، إدارة مشروعات، متجر ذكي... كلها مؤتمتة"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-vertex-gold" />,
      title: "تسويق رقمي يعمل وحده",
      description: "حملات + محتوى + إعلانات تعمل تلقائيًا وتولد عملاء دائمين"
    },
    {
      icon: <Palette className="w-12 h-12 text-vertex-gold" />,
      title: "توليد محتوى ذكي",
      description: "مقالات، منشورات، إيميلات، فيديوهات تسويقية... كلها جاهزة بأدوات AI"
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-vertex-gold" />,
      title: "أنظمة ذكاء وتحليل",
      description: "نظام متابعة وتحليل مبيعاتك وأداءك مع توصيات ذكية وجاهزة للتنفيذ"
    }
  ];

  return (
    <section id="services" className="py-20 bg-vertex-black-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="vertex-gradient-text">خدماتنا المتطورة</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            حلول رقمية شاملة مدعومة بالذكاء الاصطناعي لتحويل مشروعك إلى نجاح قابل للتوسع
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
              <CardContent className="text-center">
                <ContactModal 
                  trigger={
                    <Button className="w-full vertex-button">
                      طلب الخدمة
                    </Button>
                  }
                  title={`طلب خدمة: ${service.title}`}
                  service={service.title}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <ContactModal 
            trigger={
              <Button className="vertex-button text-lg px-8 py-4">
                احصل على استشارة مجانية
              </Button>
            }
            title="احجز استشارة مجانية"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
