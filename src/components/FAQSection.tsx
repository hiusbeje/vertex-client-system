
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'كم تستغرق مدة تنفيذ المشروع؟',
      answer: 'تختلف المدة حسب نوع الباقة: الباقة الأساسية (3-5 أيام)، الباقة المتوسطة (5-7 أيام)، والباقة المتقدمة (7-14 يوم). نلتزم بالمواعيد المحددة ونقدم تحديثات يومية عن سير العمل.'
    },
    {
      question: 'هل يمكنني تعديل التصميم بعد التسليم؟',
      answer: 'نعم، نقدم جولة تعديلات مجانية بعد التسليم حسب الباقة المختارة. كما يمكنك طلب تعديلات إضافية مقابل رسوم رمزية. هدفنا هو رضاك التام عن النتيجة النهائية.'
    },
    {
      question: 'ما هي طرق الدفع المتاحة؟',
      answer: 'نقبل الدفع عبر التحويل البنكي، فيزا، ماستركارد، مدى، وأبل باي. يمكنك الدفع على دفعات: 50% عند البدء و50% عند التسليم للمشاريع الكبيرة.'
    },
    {
      question: 'هل تقدمون ضمان على الخدمات؟',
      answer: 'نعم، نقدم ضمان شامل لمدة 30 يوم على جميع المشاريع يشمل إصلاح أي أخطاء تقنية وضمان جودة العمل. بعد انتهاء فترة الضمان، نقدم دعم تقني مدفوع بأسعار تنافسية.'
    },
    {
      question: 'هل يمكنني إدارة الموقع بنفسي بعد التسليم؟',
      answer: 'بالطبع! نصمم جميع مواقعنا بحيث تكون سهلة الإدارة. نقدم تدريب مجاني على استخدام لوحة التحكم، ونوفر أدلة مرئية مفصلة. كما يمكنك الاعتماد على دعمنا التقني عند الحاجة.'
    },
    {
      question: 'هل تعملون مع عملاء من خارج السعودية؟',
      answer: 'نعم، نخدم عملاء من جميع أنحاء العالم العربي. نتعامل مع المناطق الزمنية المختلفة ونقدم الدعم باللغة العربية والإنجليزية. التواصل يتم عبر واتساب، زووم، أو أي وسيلة تناسبك.'
    },
    {
      question: 'ماذا يحدث إذا لم أكن راضياً عن النتيجة؟',
      answer: 'رضاك هو أولويتنا. إذا لم تكن راضياً عن النتيجة، نقوم بإعادة العمل مجاناً حتى نصل للنتيجة المطلوبة. في حالات نادرة، نقدم استرداد كامل للمبلغ خلال أول 7 أيام من التسليم.'
    },
    {
      question: 'هل تقدمون خدمات الصيانة والتحديث؟',
      answer: 'نعم، نقدم باقات صيانة شهرية وسنوية تشمل التحديثات الأمنية، النسخ الاحتياطي، مراقبة الأداء، وإضافة محتوى جديد. الصيانة الأساسية مجانية لأول شهر، ثم يمكنك اختيار الباقة التي تناسبك.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-vertex-black-light relative">
      <div className="absolute inset-0 bg-gradient-to-t from-vertex-black to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">الأسئلة</span>
            <span className="vertex-gradient-text"> الشائعة</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            إجابات شاملة على أكثر الأسئلة التي يطرحها عملاؤنا حول خدماتنا وطرق العمل
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="vertex-card border-vertex-gold/20 hover:border-vertex-gold/40 transition-all duration-300"
              >
                <AccordionTrigger className="text-right text-white hover:text-vertex-gold text-lg font-semibold px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 px-6 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="vertex-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              لم تجد إجابة لسؤالك؟
            </h3>
            <p className="text-gray-300 mb-6">
              فريقنا جاهز للإجابة على جميع استفساراتك وتقديم المساعدة التي تحتاجها
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="vertex-button">
                تحدث معنا مباشرة
              </button>
              <button className="bg-vertex-black-light border border-vertex-gold text-vertex-gold hover:bg-vertex-gold hover:text-vertex-black font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                أرسل استفسارك
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
