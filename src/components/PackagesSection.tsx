
import { Check, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PackagesSection = () => {
  const packages = [
    {
      name: 'Starter MVP',
      description: 'مثالي للمشاريع الناشئة والشركات الصغيرة',
      price: '497',
      popular: false,
      features: [
        'موقع من صفحة واحدة احترافي',
        'تصميم متجاوب لجميع الأجهزة', 
        'نموذج طلب خدمة بسيط',
        'تحسين محركات البحث الأساسي',
        'دعم تقني لمدة 15 يوم',
        'رابط حجز مواعيد مدمج'
      ],
      deliveryTime: '3-5 أيام'
    },
    {
      name: 'Business Pro',
      description: 'الحل الأمثل للشركات المتوسطة',
      price: '997',
      popular: true,
      features: [
        'موقع متعدد الصفحات (حتى 5 صفحات)',
        'نظام CRM بسيط لإدارة العملاء',
        'بوت واتساب للرد التلقائي',
        'نظام حجز مواعيد متقدم',
        'تحليلات زوار الموقع',
        'دعم تقني لمدة 30 يوم',
        'تدريب على استخدام النظام'
      ],
      deliveryTime: '5-7 أيام'
    },
    {
      name: 'Enterprise Elite',
      description: 'حل شامل للشركات الكبيرة والمؤسسات',
      price: '1997',
      popular: false,
      features: [
        'موقع أو متجر إلكتروني كامل',
        'نظام CRM متقدم مع تقارير',
        'بوت واتساب ذكي بـ AI',
        'تطبيق جوال للعملاء',
        'نظام إدارة المحتوى',
        'تكامل مع وسائل الدفع',
        'دعم تقني لمدة 60 يوم',
        'استشارات تسويقية'
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
            <span className="text-white">باقات</span>
            <span className="vertex-gradient-text"> مميزة</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            اختر الباقة التي تناسب احتياجات مشروعك وابدأ رحلتك نحو النجاح الرقمي
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                <CardTitle className="text-2xl font-bold text-white">
                  {pkg.name}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {pkg.description}
                </CardDescription>
                <div className="pt-4">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold vertex-gradient-text">
                      ${pkg.price}
                    </span>
                    <span className="text-gray-400 mr-2">/ مشروع</span>
                  </div>
                  <div className="text-sm text-vertex-gold mt-1">
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
                  <span>استشارة مجانية قبل البدء</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="text-center mt-16">
          <div className="vertex-card p-8 max-w-2xl mx-auto border-vertex-gold/40">
            <h3 className="text-2xl font-bold text-white mb-4">
              تحتاج حلول مخصصة؟
            </h3>
            <p className="text-gray-300 mb-6">
              نقوم بتصميم باقات مخصصة حسب احتياجاتك الخاصة مع ضمان أفضل النتائج
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="vertex-button">
                اطلب باقة مخصصة
              </Button>
              <Button variant="outline" className="text-vertex-gold border-vertex-gold hover:bg-vertex-gold hover:text-vertex-black">
                تحدث مع مستشار
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
