
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  Globe, 
  MessageCircle, 
  Settings, 
  LogOut,
  Bell,
  ArrowUp,
  ArrowDown,
  Eye,
  Calendar,
  FileText,
  Download
} from 'lucide-react';

const Dashboard = () => {
  const [user, setUser] = useState({
    name: 'أحمد محمد',
    email: 'ahmed@example.com',
    plan: 'V Growth',
    joinDate: '2024-01-15'
  });

  const [stats, setStats] = useState({
    totalVisitors: 15420,
    conversions: 324,
    activeProjects: 3,
    supportTickets: 2
  });

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'موقع الشركة الرئيسي',
      type: 'موقع ذكي',
      status: 'نشط',
      visitors: 8540,
      lastUpdate: '2024-01-20'
    },
    {
      id: 2,
      name: 'بوت خدمة العملاء',
      type: 'بوت محادثة',
      status: 'نشط',
      interactions: 1250,
      lastUpdate: '2024-01-19'
    },
    {
      id: 3,
      name: 'نظام إدارة العملاء',
      type: 'CRM',
      status: 'قيد التطوير',
      progress: 75,
      lastUpdate: '2024-01-18'
    }
  ]);

  const handleLogout = () => {
    if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-vertex-black text-white" dir="rtl">
      {/* Header */}
      <header className="bg-vertex-black-light border-b border-vertex-gold/20 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-vertex-gold-gradient rounded-lg flex items-center justify-center">
              <span className="text-vertex-black font-bold text-xl">V</span>
            </div>
            <div>
              <h1 className="text-xl font-bold vertex-gradient-text">لوحة التحكم</h1>
              <p className="text-sm text-gray-400">مرحبًا، {user.name}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Button variant="ghost" className="text-white hover:text-vertex-gold">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" className="text-white hover:text-vertex-gold">
              <Settings className="w-5 h-5" />
            </Button>
            <Button 
              onClick={handleLogout}
              variant="ghost" 
              className="text-white hover:text-red-400"
            >
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">مرحبًا بك، {user.name}</h2>
          <p className="text-gray-300">إليك نظرة سريعة على أداء مشاريعك</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="vertex-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">إجمالي الزوار</p>
                  <p className="text-2xl font-bold text-white">{stats.totalVisitors.toLocaleString()}</p>
                  <div className="flex items-center text-green-400 text-sm mt-1">
                    <ArrowUp className="w-4 h-4 ml-1" />
                    +12.5%
                  </div>
                </div>
                <Users className="w-8 h-8 text-vertex-gold" />
              </div>
            </CardContent>
          </Card>

          <Card className="vertex-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">التحويلات</p>
                  <p className="text-2xl font-bold text-white">{stats.conversions}</p>
                  <div className="flex items-center text-green-400 text-sm mt-1">
                    <ArrowUp className="w-4 h-4 ml-1" />
                    +8.2%
                  </div>
                </div>
                <BarChart3 className="w-8 h-8 text-vertex-gold" />
              </div>
            </CardContent>
          </Card>

          <Card className="vertex-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">المشاريع النشطة</p>
                  <p className="text-2xl font-bold text-white">{stats.activeProjects}</p>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <Globe className="w-4 h-4 ml-1" />
                    مستقر
                  </div>
                </div>
                <Globe className="w-8 h-8 text-vertex-gold" />
              </div>
            </CardContent>
          </Card>

          <Card className="vertex-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">تذاكر الدعم</p>
                  <p className="text-2xl font-bold text-white">{stats.supportTickets}</p>
                  <div className="flex items-center text-orange-400 text-sm mt-1">
                    <MessageCircle className="w-4 h-4 ml-1" />
                    يحتاج متابعة
                  </div>
                </div>
                <MessageCircle className="w-8 h-8 text-vertex-gold" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="vertex-card">
            <CardHeader>
              <CardTitle className="text-white">مشاريعك النشطة</CardTitle>
              <CardDescription className="text-gray-300">
                جميع المشاريع التي تعمل عليها حاليًا
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between p-4 bg-vertex-black-light rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{project.name}</h3>
                      <p className="text-sm text-gray-400">{project.type}</p>
                      <p className="text-xs text-gray-500">آخر تحديث: {project.lastUpdate}</p>
                    </div>
                    <div className="text-left">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        project.status === 'نشط' ? 'bg-green-600 text-white' : 'bg-orange-600 text-white'
                      }`}>
                        {project.status}
                      </span>
                      {project.visitors && (
                        <p className="text-sm text-gray-400 mt-1">{project.visitors} زائر</p>
                      )}
                      {project.interactions && (
                        <p className="text-sm text-gray-400 mt-1">{project.interactions} تفاعل</p>
                      )}
                      {project.progress && (
                        <p className="text-sm text-gray-400 mt-1">{project.progress}% مكتمل</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 vertex-button">
                إدارة المشاريع
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="vertex-card">
            <CardHeader>
              <CardTitle className="text-white">إجراءات سريعة</CardTitle>
              <CardDescription className="text-gray-300">
                الأدوات والخدمات الأكثر استخدامًا
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button className="flex flex-col items-center p-4 h-auto bg-vertex-black-light hover:bg-vertex-gold/10 text-white border border-vertex-gold/20">
                  <FileText className="w-6 h-6 mb-2" />
                  <span className="text-sm">طلب مشروع جديد</span>
                </Button>
                <Button className="flex flex-col items-center p-4 h-auto bg-vertex-black-light hover:bg-vertex-gold/10 text-white border border-vertex-gold/20">
                  <MessageCircle className="w-6 h-6 mb-2" />
                  <span className="text-sm">دعم فني</span>
                </Button>
                <Button className="flex flex-col items-center p-4 h-auto bg-vertex-black-light hover:bg-vertex-gold/10 text-white border border-vertex-gold/20">
                  <Calendar className="w-6 h-6 mb-2" />
                  <span className="text-sm">حجز استشارة</span>
                </Button>
                <Button className="flex flex-col items-center p-4 h-auto bg-vertex-black-light hover:bg-vertex-gold/10 text-white border border-vertex-gold/20">
                  <Download className="w-6 h-6 mb-2" />
                  <span className="text-sm">تقارير الأداء</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Account Info */}
        <Card className="vertex-card">
          <CardHeader>
            <CardTitle className="text-white">معلومات الحساب</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-gray-400 text-sm">الباقة الحالية</p>
                <p className="text-xl font-bold vertex-gradient-text">{user.plan}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">تاريخ الانضمام</p>
                <p className="text-white">{user.joinDate}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">البريد الإلكتروني</p>
                <p className="text-white">{user.email}</p>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <Button className="vertex-button">
                ترقية الباقة
              </Button>
              <Button variant="outline" className="text-white border-vertex-gold hover:bg-vertex-gold hover:text-vertex-black">
                إدارة الحساب
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
