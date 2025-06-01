
import { Globe, MessageSquare, BarChart3, Smartphone, Brain, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'مواقع ذكية تتحدث وتبيع',
      description: 'مواقع إلكترونية متصلة ببوتات GPT، تحجز، تشرح، وتبيع 24/7',
      features: ['بوتات GPT مدمجة', 'حجز تلقائي', 'مبيعات مستمرة', 'دعم متعدد اللغات']
    },
    {
      icon: MessageSquare,
      title: 'بوتات محادثة ذكية',
      description: 'ترد على العملاء، تجمع بياناتهم، وتوجّههم خطوة بخطوة نحو الشراء',
      features: ['رد تلقائي ذكي', 'جمع البيانات', 'توجيه للشراء', 'متابعة العملاء']
    },
    {
      icon: BarChart3,
      title: 'أدوات SaaS حسب المشروع',
      description: 'منصات CRM، أنظمة حجز، إدارة مشروعات، متجر ذكي... كلها مؤتمتة',
      features: ['CRM مخصص', 'أنظمة الحجز', 'إدارة المشاريع', 'أتمتة كاملة']
    },
    {
      icon: TrendingUp,
      title: 'تسويق رقمي يعمل وحده',
      description: 'حملات + محتوى + إعلانات تعمل تلقائيًا وتولد عملاء دائمين',
      features: ['حملات مؤتمتة', 'توليد محتوى', 'إعلانات ذكية', 'عملاء دائمين']
    },
    {
      icon: Brain,
      title: 'توليد محتوى ذكي',
      description: 'مقالات، منشورات، إيميلات، فيديوهات تسويقية... كلها جاهزة بأدوات AI',
      features: ['مقالات AI', 'منشورات تلقائية', 'إيميلات ذكية', 'فيديوهات تسويقية']
    },
    {
      icon: Users,
      title: 'أنظمة ذكاء وتحليل',
      description: 'نظام متابعة وتحليل مبيعاتك وأداءك مع توصيات ذكية وجاهزة للتنفيذ',
      features: ['تحليلات متقدمة', 'توصيات ذكية', 'متابعة الأداء', 'تقارير تفصيلية']
    }
  ];

  return (
    <section id="services" className="py-20 bg-vertex-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-vertex-black-light/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">ماذا</span>
            <span className="vertex-gradient-text"> نقدم؟</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            نخدمك من أول فكرة حتى أول 100 عميل. نعتمد على الأتمتة لتقليل التدخل البشري بنسبة +80%
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

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-white">لماذا </span>
            <span className="vertex-gradient-text">Vertex Solutions؟</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '✅ لا نبيع خدمات فقط، بل نبني لك نظام ربحي ذكي',
              '✅ أتمتة كاملة لـ 80% من العمليات',
              '✅ فريق يعمل معك كـ "شريك نمو"',
              '✅ نتائج واضحة + مقاييس حقيقية',
              '✅ دعم تقني واستشاري مستمر',
              '✅ ندمج الذكاء الاصطناعي لتحويل الزوار إلى عملاء دائمين'
            ].map((point, index) => (
              <div key={index} className="vertex-card p-6 text-center">
                <p className="text-gray-300">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="vertex-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              هل أنت جاهز للتحوّل؟
            </h3>
            <p className="text-gray-300 mb-6">
              ابدأ خلال 72 ساعة. احصل على خطة مخصصة + تنفيذ فوري + متابعة أسبوعية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="vertex-button">
                💡 احجز جلسة مجانية الآن
              </button>
              <button className="bg-vertex-black-light border border-vertex-gold text-vertex-gold hover:bg-vertex-gold hover:text-vertex-black font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                📈 تصفّح باقاتنا
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
