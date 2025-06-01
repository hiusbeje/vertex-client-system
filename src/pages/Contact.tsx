
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      alert('تم إرسال رسالتك بنجاح! سنتواصل معك خلال 24 ساعة.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = () => {
    const message = "مرحبا، أريد الاستفسار عن خدمات Vertex Solutions";
    const whatsappUrl = `https://wa.me/966501234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCalendly = () => {
    // Open Calendly booking
    window.open('https://calendly.com/vertex-solutions', '_blank');
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
              <span className="vertex-gradient-text">تواصل معنا</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              نحن هنا لمساعدتك في تحويل أفكارك إلى واقع رقمي ناجح
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="vertex-card">
              <CardHeader>
                <CardTitle className="text-2xl text-white">أرسل لنا رسالة</CardTitle>
                <CardDescription className="text-gray-300">
                  املأ النموذج وسنتواصل معك خلال 24 ساعة
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">الاسم الكامل *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="اسمك الكامل"
                        className="bg-vertex-black-light border-vertex-gold/30 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">البريد الإلكتروني *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="bg-vertex-black-light border-vertex-gold/30 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">رقم الهاتف *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+966 50 123 4567"
                        className="bg-vertex-black-light border-vertex-gold/30 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">اسم الشركة</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="اسم شركتك (اختياري)"
                        className="bg-vertex-black-light border-vertex-gold/30 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-white">الخدمة المطلوبة</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-vertex-black-light border border-vertex-gold/30 text-white placeholder:text-gray-400 rounded-md px-3 py-2"
                    >
                      <option value="">اختر الخدمة</option>
                      <option value="website">مواقع ذكية</option>
                      <option value="bot">بوتات محادثة</option>
                      <option value="saas">أدوات SaaS</option>
                      <option value="marketing">تسويق رقمي</option>
                      <option value="content">توليد محتوى</option>
                      <option value="analytics">أنظمة تحليل</option>
                      <option value="consultation">استشارة</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">رسالتك *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="اكتب رسالتك هنا..."
                      className="bg-vertex-black-light border-vertex-gold/30 text-white placeholder:text-gray-400 min-h-[120px]"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full vertex-button text-lg py-3"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-vertex-black border-t-transparent rounded-full animate-spin"></div>
                        جاري الإرسال...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        إرسال الرسالة
                        <Send className="w-4 h-4" />
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="vertex-card">
                <CardHeader>
                  <CardTitle className="text-xl text-white">تواصل سريع</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    onClick={handleWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3"
                  >
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      تواصل عبر واتساب
                    </div>
                  </Button>
                  <Button 
                    onClick={handleCalendly}
                    className="w-full vertex-button text-lg py-3"
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      احجز مكالمة مجانية
                    </div>
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <Card className="vertex-card">
                <CardHeader>
                  <CardTitle className="text-xl text-white">معلومات التواصل</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <MapPin className="w-6 h-6 text-vertex-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">المقر الرئيسي</h3>
                      <p className="text-gray-300">الرياض، المملكة العربية السعودية</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <Phone className="w-6 h-6 text-vertex-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">الهاتف</h3>
                      <p className="text-gray-300" dir="ltr">+966 50 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <Mail className="w-6 h-6 text-vertex-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">البريد الإلكتروني</h3>
                      <p className="text-gray-300">info@vertex-solutions.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <Clock className="w-6 h-6 text-vertex-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">ساعات العمل</h3>
                      <p className="text-gray-300">الأحد - الخميس: 9:00 ص - 6:00 م</p>
                      <p className="text-gray-300">دعم طوارئ: 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="vertex-card bg-vertex-gold/10 border-vertex-gold/30">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-vertex-gold mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">وقت الاستجابة</h3>
                    <p className="text-gray-300">
                      نتواصل معك خلال <span className="text-vertex-gold font-bold">24 ساعة</span> كحد أقصى
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
