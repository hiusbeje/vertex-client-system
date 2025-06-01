
import { Globe, MessageSquare, BarChart3, Smartphone, Database, Headphones } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'مواقع ومتاجر إلكترونية',
      description: 'تصميم وتطوير مواقع احترافية ومتاجر إلكترونية متكاملة مع أنظمة الدفع',
      features: ['تصميم متجاوب', 'أنظمة دفع متعددة', 'SEO محسن', 'لوحة تحكم شاملة']
    },
    {
      icon: MessageSquare,
      title: 'بوتات واتساب ذكية',
      description: 'أتمتة خدمة العملاء والمبيعات عبر بوتات واتساب المتطورة',
      features: ['رد تلقائي ذكي', 'تكامل مع CRM', 'تحليلات شاملة', 'دعم متعدد اللغات']
    },
    {
      icon: BarChart3,
      title: 'أنظمة CRM متقدمة',
      description: 'إدارة شاملة لعلاقات العملاء مع تحليلات متقدمة وتقارير تفصيلية',
      features: ['تتبع العملاء', 'إدارة المبيعات', 'تقارير تحليلية', 'تكامل مع الأدوات']
    },
    {
      icon: Smartphone,
      title: 'تطبيقات الجوال',
      description: 'تطوير تطبيقات iOS و Android بتقنيات حديثة وواجهات سلسة',
      features: ['تصميم UX/UI', 'أداء محسن', 'دعم أجهزة متعددة', 'تحديثات مستمرة']
    },
    {
      icon: Database,
      title: 'حلول قواعد البيانات',
      description: 'تصميم وإدارة قواعد بيانات قوية وآمنة مع النسخ الاحتياطي',
      features: ['أمان عالي', 'نسخ احتياطي', 'أداء سريع', 'قابلية التوسع']
    },
    {
      icon: Headphones,
      title: 'دعم تقني مستمر',
      description: 'دعم تقني شامل 24/7 مع صيانة دورية وتحديثات أمنية',
      features: ['دعم مستمر', 'صيانة دورية', 'تحديثات أمنية', 'استشارات تقنية']
    }
  ];

  return (
    <section id="services" className="py-20 bg-vertex-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-vertex-black-light/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">خدماتنا</span>
            <span className="vertex-gradient-text"> المتميزة</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            نقدم حلولاً رقمية شاملة ومتكاملة لتلبية احتياجات أعمالك وتحقيق أهدافك التجارية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="vertex-card hover:border-vertex-gold/40 transition-all duration-300 group hover:scale-105"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-vertex-gold-gradient rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow">
                  <service.icon className="w-8 h-8 text-vertex-black" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-vertex-gold transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-gray-400 flex items-center">
                      <div className="w-2 h-2 bg-vertex-gold rounded-full ml-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="vertex-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              جاهز لبدء مشروعك؟
            </h3>
            <p className="text-gray-300 mb-6">
              احجز استشارة مجانية معنا لمناقشة احتياجاتك والحصول على خطة مخصصة لمشروعك
            </p>
            <button className="vertex-button">
              احجز استشارة مجانية
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
