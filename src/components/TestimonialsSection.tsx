
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'أحمد محمد',
      role: 'مؤسس شركة التقنية المتقدمة',
      content: 'فريق Vertex Solutions نقل أعمالنا لمستوى جديد تماماً. النظام الذي بنوه لنا زاد مبيعاتنا بنسبة 300% خلال 3 أشهر فقط.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'فاطمة السعيد',
      role: 'مديرة مركز التدريب النسائي',
      content: 'البوت الذكي للواتساب وفر علينا ساعات كثيرة يومياً في الرد على العملاء. الآن نركز على تطوير خدماتنا بدلاً من الأعمال الروتينية.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'محمد العتيبي',
      role: 'صاحب متجر إلكتروني',
      content: 'التصميم احترافي والسرعة في التنفيذ مذهلة. تم تسليم المتجر في 5 أيام بالضبط كما وعدوا، والنتائج فاقت توقعاتي.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'سارة الزهراني',
      role: 'مدربة حياة',
      content: 'نظام CRM ساعدني أنظم عملائي بشكل مثالي. الآن أقدر أتابع كل عميل وأطور خدماتي بناءً على التحليلات الدقيقة.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'عبدالله الشمري',
      role: 'رائد أعمال',
      content: 'الدعم التقني متاح 24/7 ومستوى الخدمة عالي جداً. كل استفسار يتم الرد عليه بسرعة ومهنية عالية.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'نورا القحطاني',
      role: 'مؤسسة مشروع تجاري',
      content: 'استثمار يستحق كل ريال. الموقع والنظام زاد ثقة العملاء في علامتنا التجارية وساعدنا نوصل لعملاء جدد بسهولة.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-vertex-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-vertex-gold/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="vertex-gradient-text">عملاؤنا</span>
            <span className="text-white"> يتحدثون</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            اكتشف تجارب عملائنا الناجحة والنتائج المذهلة التي حققوها مع حلولنا الرقمية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="vertex-card hover:border-vertex-gold/40 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-vertex-gold mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-vertex-gold fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ml-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-vertex-gold transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold vertex-gradient-text">150+</div>
              <div className="text-gray-400">عميل راضي</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold vertex-gradient-text">98%</div>
              <div className="text-gray-400">معدل الرضا</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold vertex-gradient-text">24/7</div>
              <div className="text-gray-400">دعم مستمر</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold vertex-gradient-text">5★</div>
              <div className="text-gray-400">متوسط التقييم</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
