
import { Check, Star, Zap, TrendingUp, Crown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PackagesSection = () => {
  const packages = [
    {
      name: 'V Start',
      subtitle: 'LaunchPad',
      description: 'أطلق مشروعك الذكي الآن',
      price: '399 - 699',
      pricing: '/ شهريًا',
      targetAudience: 'للأفراد والمشاريع الناشئة',
      popular: false,
      icon: Zap,
      features: [
        'موقع ذكي متجاوب',
        'بوت واتساب أساسي',
        'خطة تسويق أولية',
        'CRM بسيط لإدارة العملاء',
        'دعم تقني لمدة 30 يوم',
        'استشارة شهرية مجانية'
      ],
      deliveryTime: '3-5 أيام'
    },
    {
      name: 'V Growth',
      subtitle: 'GrowthX',
      description: 'نموك يبدأ من هنا',
      price: '999 - 1,499',
      pricing: '/ شهريًا',
      targetAudience: 'للشركات في بدايات التوسع',
      popular: true,
      icon: TrendingUp,
      features: [
        'كل مميزات V Start',
        'نظام CRM متقدم',
        'منصة SaaS مخصصة',
        'حملات تسويق مؤتمتة',
        'بوتات ذكية متعددة',
        'تحليلات متقدمة',
        'دعم تقني مستمر',
        'استشارات أسبوعية'
      ],
      deliveryTime: '5-7 أيام'
    },
    {
      name: 'V Scale',
      subtitle: 'VertexAI',
      description: 'الذكاء الكامل في خدمتك',
      price: '2,999 - 4,999',
      pricing: '/ شهريًا',
      targetAudience: 'للشركات المتوسطة والكبيرة',
      popular: false,
      icon: Crown,
      features: [
        'كل مميزات V Growth',
        'أتمتة شاملة 80%+',
        'أنظمة ذكاء اصطناعي',
        'منصات متعددة',
        'تكامل مع جميع الأدوات',
        'فريق مخصص لمشروعك',
        'استشارات يومية',
        'ضمان النتائج'
      ],
      deliveryTime: '7-14 يوم'
    }
  ];

  return (
    <section id="packages" className="py-20 bg-vertex-black-light relative">
      <div className="absolute inset-0 bg-gradient-to-b from-vertex-black to-vertex-black-light"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">باقاتنا</span>
            <span className="vertex-gradient-text"> الذكية</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            اختر الباقة التي تناسب نموك - من المشاريع الناشئة إلى الشركات الكبيرة
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`vertex-card relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                pkg.popular ? 'border-vertex-gold shadow-2xl shadow-vertex-gold/20' : 'hover:border-vertex-gold/40'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-vertex-gold-gradient p-2">
                  <Badge className="bg-vertex-black text-vertex-gold w-full justify-center">
                    <Star className="w-4 h-4 ml-1" />
                    الأكثر طلباً
                  </Badge>
                </div>
              )}

              <CardHeader className={pkg.popular ? 'pt-12' : ''}>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-vertex-gold-gradient rounded-lg flex items-center justify-center">
                    <pkg.icon className="w-8 h-8 text-vertex-black" />
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold text-white text-center">
                  {pkg.name}
                </CardTitle>
                <div className="text-center">
                  <div className="text-lg font-semibold vertex-gradient-text">
                    {pkg.subtitle}
                  </div>
                  <CardDescription className="text-gray-300 mt-2">
                    {pkg.description}
                  </CardDescription>
                </div>
                
                <div className="pt-4 text-center">
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold vertex-gradient-text">
                      ${pkg.price}
                    </span>
                    <span className="text-gray-400 mr-2">{pkg.pricing}</span>
                  </div>
                  <div className="text-sm text-vertex-gold mt-1">
                    {pkg.targetAudience}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    التسليم: {pkg.deliveryTime}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <Check className="w-5 h-5 text-vertex-gold ml-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full mt-6 ${
                    pkg.popular 
                      ? 'vertex-button animate-glow' 
                      : 'bg-vertex-black-light border border-vertex-gold text-vertex-gold hover:bg-vertex-gold hover:text-vertex-black'
                  }`}
                >
                  {pkg.popular ? 'ابدأ الآن' : 'اطلب الباقة'}
                </Button>

                <div className="text-center text-sm text-gray-400 mt-4">
                  <span>✅ ضمان استرداد خلال 14 يوم</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="text-center mt-16">
          <div className="vertex-card p-8 max-w-3xl mx-auto border-vertex-gold/40">
            <div className="flex items-center justify-center mb-4">
              <Crown className="w-8 h-8 text-vertex-gold ml-2" />
              <h3 className="text-2xl font-bold text-white">
                Dominance - سيطر على السوق باحتراف
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              خطة مخصصة للشركات والمشاريع التي تبحث عن قيادة السوق. 
              نظام شامل مع فريق مخصص وأتمتة كاملة بأحدث تقنيات الذكاء الاصطناعي.
            </p>
            <div className="text-center mb-6">
              <span className="text-3xl font-bold vertex-gradient-text">$4,500+</span>
              <span className="text-gray-400 mr-2">/ خطة مخصصة</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="vertex-button">
                احجز استشارة مجانية
              </Button>
              <Button variant="outline" className="text-vertex-gold border-vertex-gold hover:bg-vertex-gold hover:text-vertex-black">
                تحدث مع خبير
              </Button>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 rtl:space-x-reverse bg-vertex-gold/10 border border-vertex-gold/30 rounded-lg px-6 py-4">
            <div className="text-vertex-gold font-semibold">
              ✨ ضمان الثقة: لا نتائج؟ لا تدفع | استشارة مجانية أولية بدون التزام
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
