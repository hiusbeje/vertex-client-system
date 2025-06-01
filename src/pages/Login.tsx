
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard
      window.location.href = '/dashboard';
    }, 2000);
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
          <CardTitle className="text-2xl font-bold text-white">تسجيل الدخول</CardTitle>
          <CardDescription className="text-gray-300">
            ادخل إلى لوحة تحكم Vertex Solutions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="bg-vertex-black-light border-vertex-gold/30 text-white placeholder:text-gray-400"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">كلمة المرور</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            <Button 
              type="submit" 
              className="w-full vertex-button text-lg py-3"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-vertex-black border-t-transparent rounded-full animate-spin"></div>
                  جاري تسجيل الدخول...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  دخول
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              ليس لديك حساب؟{' '}
              <Link to="/register" className="text-vertex-gold hover:text-vertex-gold-light transition-colors">
                إنشاء حساب جديد
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

export default Login;
