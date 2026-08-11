import {
  Shield, Download, Zap, Globe, Lock,
  Star, Users, Server, CheckCircle2, ArrowLeft,
  Smartphone, Monitor, Apple, Menu, X
} from 'lucide-react';
import { useState } from 'react';

export default function Material3Theme() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFBFE] text-[#1C1B1F]" dir="rtl">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FFFBFE]/80 backdrop-blur-md border-b border-[#E7E0EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#6750A4] rounded-2xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#6750A4]">ShieldVPN</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {['خانه', 'ویژگی‌ها', 'قیمت‌ها', 'دانلود'].map((item) => (
                <button key={item} className="px-4 py-2 rounded-full text-sm font-medium text-[#625B71] hover:bg-[#EADDFF] hover:text-[#6750A4] transition-all duration-200">
                  {item}
                </button>
              ))}
              <button className="mr-2 px-6 py-2.5 bg-[#6750A4] text-white rounded-full text-sm font-medium hover:bg-[#7965AF] transition-all shadow-md hover:shadow-lg">
                ورود / ثبت‌نام
              </button>
            </div>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#FFFBFE] border-t border-[#E7E0EC] p-4 space-y-2 animate-slide-up">
            {['خانه', 'ویژگی‌ها', 'قیمت‌ها', 'دانلود'].map((item) => (
              <button key={item} className="w-full text-right px-4 py-3 rounded-xl text-sm font-medium text-[#625B71] hover:bg-[#EADDFF]">
                {item}
              </button>
            ))}
            <button className="w-full px-6 py-3 bg-[#6750A4] text-white rounded-full text-sm font-medium">
              ورود / ثبت‌نام
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EADDFF]/50 to-[#FFFBFE]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#EADDFF] rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D0BCFF] rounded-full blur-3xl opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EADDFF] rounded-full">
                <span className="w-2 h-2 bg-[#6750A4] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-[#6750A4]">نسخه جدید ۳.۰ منتشر شد!</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                اینترنت <span className="text-[#6750A4]">آزاد</span> و
                <br />
                <span className="text-[#6750A4]">امن</span> با ShieldVPN
              </h1>
              <p className="text-lg text-[#625B71] leading-relaxed max-w-lg">
                با بیش از ۵۰۰ سرور در ۸۰ کشور، سرعت بالا و رمزگذاری نظامی. اینترنت بدون محدودیت را تجربه کنید.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="group flex items-center gap-3 px-8 py-4 bg-[#6750A4] text-white rounded-2xl text-base font-bold hover:bg-[#7965AF] transition-all shadow-lg hover:shadow-xl hover:shadow-[#6750A4]/25 active:scale-95">
                  <Download className="w-5 h-5" />
                  دانلود رایگان
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center gap-3 px-8 py-4 bg-[#EADDFF] text-[#6750A4] rounded-2xl text-base font-bold hover:bg-[#D0BCFF] transition-all">
                  مشاهده قیمت‌ها
                </button>
              </div>
              <div className="flex items-center gap-6 text-sm text-[#625B71]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>بدون ثبت‌نام</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>۷ روز رایگان</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>بدون تبلیغات</span>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center animate-slide-up delay-200">
              <div className="relative">
                <div className="absolute inset-0 bg-[#6750A4]/10 rounded-[3rem] blur-2xl scale-110" />
                <img
                  src="/images/vpn-app-mockup.png"
                  alt="VPN App"
                  className="relative w-72 sm:w-80 lg:w-96 animate-float rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#EADDFF]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '+۵۰۰', label: 'سرور فعال', icon: Server },
              { num: '+۸۰', label: 'کشور', icon: Globe },
              { num: '+۲M', label: 'کاربر فعال', icon: Users },
              { num: '۴.۹', label: 'امتیاز کاربران', icon: Star },
            ].map((stat) => (
              <div key={stat.label} className="text-center space-y-3 p-6 bg-[#FFFBFE] rounded-3xl shadow-sm border border-[#E7E0EC]">
                <stat.icon className="w-8 h-8 text-[#6750A4] mx-auto" />
                <div className="text-3xl font-black text-[#6750A4]">{stat.num}</div>
                <div className="text-sm text-[#625B71]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-black">چرا <span className="text-[#6750A4]">ShieldVPN</span>؟</h2>
            <p className="text-[#625B71] max-w-2xl mx-auto">امکانات پیشرفته‌ای که ما را از بقیه متمایز می‌کند</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'سرعت فوق‌العاده', desc: 'پروتکل‌های بهینه‌شده برای حداکثر سرعت و کمترین تأخیر', color: '#FFD60A' },
              { icon: Lock, title: 'رمزگذاری AES-256', desc: 'بالاترین سطح رمزگذاری نظامی برای حفظ حریم خصوصی', color: '#6750A4' },
              { icon: Globe, title: 'سرورهای جهانی', desc: 'دسترسی به محتوای مسدودشده از هر نقطه جهان', color: '#0EA5E9' },
              { icon: Shield, title: 'محافظت لحظه‌ای', desc: 'Kill Switch خودکار برای جلوگیری از نشت اطلاعات', color: '#10B981' },
              { icon: Server, title: 'بدون لاگ', desc: 'سیاست عدم ثبت فعالیت‌ها تحت ممیزی مستقل', color: '#F43F5E' },
              { icon: Smartphone, title: 'همه پلتفرم‌ها', desc: 'پشتیبانی از اندروید، iOS، ویندوز، مک و لینوکس', color: '#8B5CF6' },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group p-6 bg-[#FFFBFE] rounded-3xl border border-[#E7E0EC] hover:border-[#6750A4]/30 hover:shadow-xl hover:shadow-[#6750A4]/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-[#625B71] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="py-20 bg-gradient-to-br from-[#6750A4] to-[#7965AF] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute bottom-10 left-20 w-60 h-60 bg-white/5 rounded-full blur-2xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <h2 className="text-3xl sm:text-4xl font-black">همین الان دانلود کنید</h2>
          <p className="text-white/80 max-w-xl mx-auto">ShieldVPN را روی هر دستگاهی نصب کنید و از اینترنت آزاد لذت ببرید</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Smartphone, label: 'اندروید', sub: 'Google Play' },
              { icon: Apple, label: 'آیفون', sub: 'App Store' },
              { icon: Monitor, label: 'ویندوز', sub: 'Windows 10+' },
              { icon: Monitor, label: 'مک', sub: 'macOS 12+' },
            ].map((platform) => (
              <button
                key={platform.label}
                className="flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur rounded-2xl hover:bg-white/20 transition-all duration-200 border border-white/20 min-w-[180px]"
              >
                <platform.icon className="w-8 h-8" />
                <div className="text-right">
                  <div className="text-xs text-white/70">{platform.sub}</div>
                  <div className="font-bold">{platform.label}</div>
                </div>
              </button>
            ))}
          </div>
          <button className="px-10 py-4 bg-white text-[#6750A4] rounded-2xl text-lg font-black hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl active:scale-95">
            <div className="flex items-center gap-2">
              <Download className="w-6 h-6" />
              دانلود مستقیم APK
            </div>
          </button>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-black">پلن‌های <span className="text-[#6750A4]">اشتراک</span></h2>
            <p className="text-[#625B71]">بهترین پلن را متناسب با نیاز خود انتخاب کنید</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'رایگان', price: '۰', period: 'ماهانه', features: ['۳ سرور', '۱ دستگاه', 'سرعت محدود', 'پشتیبانی ایمیل'], popular: false },
              { name: 'حرفه‌ای', price: '۴۹,۰۰۰', period: 'ماهانه', features: ['همه سرورها', '۵ دستگاه', 'سرعت نامحدود', 'پشتیبانی ۲۴/۷', 'Kill Switch'], popular: true },
              { name: 'سازمانی', price: '۹۹,۰۰۰', period: 'ماهانه', features: ['همه سرورها', 'نامحدود', 'IP اختصاصی', 'پشتیبانی ویژه', 'مدیریت تیم'], popular: false },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-3xl border-2 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? 'bg-[#6750A4] text-white border-[#6750A4] shadow-2xl shadow-[#6750A4]/30 scale-105'
                    : 'bg-[#FFFBFE] border-[#E7E0EC] hover:border-[#6750A4]/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 bg-[#FFD60A] text-[#1C1B1F] rounded-full text-xs font-bold">
                    محبوب‌ترین
                  </div>
                )}
                <div className="text-center space-y-4 mb-8">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div>
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-[#625B71]'}`}> تومان / {plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${plan.popular ? 'text-green-300' : 'text-green-600'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-2xl font-bold transition-all ${
                    plan.popular
                      ? 'bg-white text-[#6750A4] hover:bg-white/90'
                      : 'bg-[#EADDFF] text-[#6750A4] hover:bg-[#D0BCFF]'
                  }`}
                >
                  انتخاب پلن
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1B1F] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#6750A4] rounded-2xl flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold">ShieldVPN</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">اینترنت آزاد، امن و بدون محدودیت برای همه.</p>
            </div>
            {[
              { title: 'محصولات', links: ['اندروید', 'iOS', 'ویندوز', 'مک'] },
              { title: 'شرکت', links: ['درباره ما', 'وبلاگ', 'استخدام', 'تماس'] },
              { title: 'پشتیبانی', links: ['سؤالات متداول', 'مرکز کمک', 'حریم خصوصی', 'شرایط'] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-bold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            © ۱۴۰۴ ShieldVPN - تمامی حقوق محفوظ است.
          </div>
        </div>
      </footer>
    </div>
  );
}
