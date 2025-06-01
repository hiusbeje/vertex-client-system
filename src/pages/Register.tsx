
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, EyeOff, User, Mail, Phone } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('كلمات المرور غير متطابقة');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      alert('تم إنشاء الحساب بنجاح! سيتم توجيهك لتسجيل الدخول');
      window.location.href = '/login';
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-vertex-black flex items-center justify-center p-4" dir="rtl">
      <div className="absolute inset-0 bg-gradient-to-br from-vertex-black via-vertex-black-light to-vertex-black"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-vertex-gold/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-vertex-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <Card className="w-full max-w-md vertex-card relative z-10">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-vertex-gold-gradient rounded-xl flex items-center justify-center">
              <span className="text-vertex-black font-bold text-2xl">V</span>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-white">إنشاء حساب جديد</CardTitle>
          <CardDescription className="text-gray-300">
            انضم إلى Vertex Solutions وابدأ رحلة النمو الرقمي
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">الاسم الكامل</Label>
              <div className="relative">
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="اسمك الكامل"
                  className="bg-vertex-black-light border-vertex-gold/30 text-white placeholder:text-gray-400 pr-12"
                  required
                />
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">البريد الإلكتروني</Label>
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="bg-vertex-black-light border-vertex-gold/30 text-white placeholder:text-gray-400 pr-12"
                  required
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">رقم الهاتف</Label>
              <div className="relative">
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+966 50 123 4567"
                  className="bg-vertex-black-light border-vertex-gold/30 text-white placeholder:text-gray-400 pr-12"
                  required
                />
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">كلمة المرور</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-vertex-black-light border-vertex-gold/30 text-white placeholder:text-gray-400 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-vertex-gold"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-white">تأكيد كلمة المرور</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-vertex-black-light border-vertex-gold/30 text-white placeholder:text-gray-400 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-vertex-gold"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full vertex-button text-lg py-3"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-vertex-black border-t-transparent rounded-full animate-spin"></div>
                  جاري إنشاء الحساب...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  إنشاء حساب
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              لديك حساب بالفعل؟{' '}
              <Link to="/login" className="text-vertex-gold hover:text-vertex-gold-light transition-colors">
                تسجيل الدخول
              </Link>
            </p>
          </div>
          <div className="mt-4 text-center">
            <Link to="/" className="text-gray-400 hover:text-vertex-gold transition-colors text-sm">
              العودة للصفحة الرئيسية
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
