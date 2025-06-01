
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Send, MessageCircle } from 'lucide-react';

interface ContactModalProps {
  trigger: React.ReactNode;
  title?: string;
  service?: string;
}

const ContactModal = ({ trigger, title = "تواصل معنا", service }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: service ? `أريد الاستفسار عن خدمة: ${service}` : ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.');
      setFormData({ name: '', email: '', phone: '', message: service ? `أريد الاستفسار عن خدمة: ${service}` : '' });
      setIsOpen(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = () => {
    const message = formData.message || "مرحبا، أريد الاستفسار عن خدمات Vertex Solutions";
    const whatsappUrl = `https://wa.me/966501234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="bg-vertex-black-light border-vertex-gold/20 text-white max-w-md" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-xl vertex-gradient-text">{title}</DialogTitle>
          <DialogDescription className="text-gray-300">
            اختر طريقة التواصل المفضلة لديك
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <Button 
            onClick={handleWhatsApp}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            <MessageCircle className="w-4 h-4 ml-2" />
            تواصل عبر واتساب فورًا
          </Button>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-vertex-gold/30" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-vertex-black-light px-2 text-gray-400">أو</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">الاسم</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="اسمك الكامل"
                className="bg-vertex-black border-vertex-gold/30 text-white placeholder:text-gray-400"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">البريد الإلكتروني</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="bg-vertex-black border-vertex-gold/30 text-white placeholder:text-gray-400"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">رقم الهاتف</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+966 50 123 4567"
                className="bg-vertex-black border-vertex-gold/30 text-white placeholder:text-gray-400"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">رسالتك</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="اكتب رسالتك هنا..."
                className="bg-vertex-black border-vertex-gold/30 text-white placeholder:text-gray-400"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full vertex-button"
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
