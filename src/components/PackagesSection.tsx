
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';
import ContactModal from './ContactModal';

const PackagesSection = () => {
  const packages = [
    {
      name: "V Start",
      slogan: "أطلق مشروعك الذكي الآن",
      price: "$499",
      period: "لمرة واحدة",
      description: "للأفراد والمشاريع الناشئة جدًا",
      popular: false,
      features: [
        "موقع ذكي أساسي",
        "بوت محادثة بسيط",
        "خطة تسويق أولية",
        "دعم لمدة شهر",
        "تدريب أساسي"
      ]
    },
    {
      name: "V Growth",
      slogan: "نموك يبدأ من هنا",
      price: "$997",
      period: "شهريًا",
      description: "للمشاريع النشطة وتحتاج تسويق وتحول رقمي",
      popular: true,
      features: [
        "موقع ذكي متطور",
        "بوت محادثة متقدم",
        "حملات تسويق مؤتمتة",
        "نظام CRM بسيط",
        "تحليلات شاملة",
        "دعم على مدار الساعة",
        "استشارة شهرية"
      ]
    },
    {
      name: "V Scale",
      slogan: "الذكاء الكامل في خدمتك",
      price: "$1,997",
      period: "شهريًا",
      description: "لأصحاب المشاريع الجادين بتوسيع أعمالهم",
      popular: false,
      features: [
        "نظام شامل ومتكامل",
        "أدوات SaaS مخصصة",
        "أتمتة كاملة للعمليات",
        "ذكاء اصطناعي متقدم",
        "تسويق متعدد المنصات",
        "فريق دعم مخصص",
        "استشارات أسبوعية",
        "تقارير تفصيلية"
      ]
    }
  ];

  const handleStripePayment = (packageName: string, price: string) => {
    // This would integrate with Stripe for actual payments
    alert(`سيتم توجيهك لإتمام الدفع للباقة: ${packageName} بسعر ${price}`);
    // window.open('https://buy.stripe.com/test_...' + packageName, '_blank');
  };

  return (
    <section id="packages" className="py-20 bg-vertex-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="vertex-gradient-text">باقاتنا المتميزة</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            اختر الباقة التي تناسب احتياجاتك ومرحلة نمو مشروعك
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`vertex-card relative transition-all duration-300 hover:scale-105 ${
                pkg.popular ? 'border-vertex-gold ring-2 ring-vertex-gold/20' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-vertex-gold text-vertex-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    الأكثر شعبية
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-white mb-2">{pkg.name}</CardTitle>
                <CardDescription className="text-vertex-gold font-semibold text-lg mb-4">
                  "{pkg.slogan}"
                </CardDescription>
                <div className="mb-4">
                  <span className="text-4xl font-bold vertex-gradient-text">{pkg.price}</span>
                  <span className="text-gray-400 mr-2">/ {pkg.period}</span>
                </div>
                <p className="text-gray-300">{pkg.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-vertex-gold ml-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Button 
                    onClick={() => handleStripePayment(pkg.name, pkg.price)}
                    className={`w-full text-lg py-3 ${
                      pkg.popular ? 'vertex-button animate-glow' : 'bg-vertex-black-light hover:bg-vertex-gold hover:text-vertex-black text-white border border-vertex-gold'
                    }`}
                  >
                    اختر هذه الباقة
                  </Button>
                  
                  <ContactModal 
                    trigger={
                      <Button 
                        variant="outline" 
                        className="w-full text-white border-vertex-gold/30 hover:bg-vertex-gold/10"
                      >
                        استفسار عن الباقة
                      </Button>
                    }
                    title={`استفسار عن باقة ${pkg.name}`}
                    service={`باقة ${pkg.name} - ${pkg.slogan}`}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-vertex-gold/10 border border-vertex-gold/30 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">هل تحتاج حلول مخصصة؟</h3>
            <p className="text-gray-300 mb-6">
              نقدم حلول enterprise مخصصة للشركات الكبيرة والمشاريع المعقدة
            </p>
            <ContactModal 
              trigger={
                <Button className="vertex-button text-lg px-8 py-4">
                  طلب عرض مخصص
                </Button>
              }
              title="طلب حل مخصص للمؤسسات"
              service="حل enterprise مخصص"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
