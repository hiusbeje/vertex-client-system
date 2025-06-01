
import { Target, Eye, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: 'مهمتنا',
      description: 'تمكين المشاريع الناشئة والشركات الصغيرة من النمو باستخدام أدوات المستقبل'
    },
    {
      icon: Eye,
      title: 'رؤيتنا',
      description: 'أن نكون الوكالة الأولى في العالم العربي المتخصصة في بناء مشاريع رقمية مؤتمتة وقابلة للتوسع'
    },
    {
      icon: Users,
      title: 'فريقنا',
      description: 'خبراء في الذكاء الاصطناعي والتحول الرقمي يعملون كشركاء نمو لمشروعك'
    },
    {
      icon: Zap,
      title: 'نهجنا',
      description: 'أتمتة 80% من العمليات باستخدام أحدث تقنيات الذكاء الاصطناعي والتحول الرقمي'
    }
  ];

  return (
    <section className="py-20 bg-vertex-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-vertex-black-light/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">من</span>
            <span className="vertex-gradient-text"> نحن؟</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              Vertex Solutions هي وكالة هجينة تقدم حلولاً تقنية وتسويقية ذكية مدفوعة بالنتائج. 
              نعتمد على أنظمة الأتمتة والذكاء الاصطناعي لتقديم خدمات عالية الكفاءة بأقل تدخل بشري، 
              مما يقلل التكاليف ويرفع العائد.
            </p>
            <div className="bg-vertex-gold/10 border border-vertex-gold/30 rounded-lg p-6">
              <p className="text-vertex-gold font-semibold text-lg">
                🚀 نخدمك من أول فكرة حتى أول 100 عميل
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="vertex-card hover:border-vertex-gold/40 transition-all duration-300 group hover:scale-105 text-center"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-vertex-gold-gradient rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:animate-glow">
                  <feature.icon className="w-8 h-8 text-vertex-black" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-vertex-gold transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How We Work */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-white">كيف </span>
            <span className="vertex-gradient-text">نعمل؟</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'استشارة مجانية',
                description: 'جلسة 30 دقيقة لفهم فكرتك'
              },
              {
                step: '2',
                title: 'خطة مخصصة',
                description: 'نعدّ لك عرضًا تنفيذيًا حسب احتياجك'
              },
              {
                step: '3',
                title: 'تنفيذ مؤتمت',
                description: 'نطلق مشروعك باستخدام فريق ذكي وأنظمة AI'
              },
              {
                step: '4',
                title: 'متابعة وتطوير',
                description: 'دعم شهري وتحسين مستمر حسب النتائج'
              }
            ].map((step, index) => (
              <div key={index} className="vertex-card p-6 text-center relative">
                <div className="w-12 h-12 bg-vertex-gold-gradient rounded-full flex items-center justify-center text-vertex-black font-bold text-xl mb-4 mx-auto">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
