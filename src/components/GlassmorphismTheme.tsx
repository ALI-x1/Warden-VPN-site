import {
  Shield, Download, Zap, Globe, Lock,
  Star, Users, Server, CheckCircle2, ArrowLeft,
  Smartphone, Monitor, Apple, Menu, X, Wifi, Eye
} from 'lucide-react';
import { useState } from 'react';

export default function GlassmorphismTheme() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0C29] via-[#302B63] to-[#24243E] text-white" dir="rtl">
      {/* Animated BG Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-pink-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">ShieldVPN</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {['خانه', 'ویژگی‌ها', 'قیمت‌ها', 'دانلود'].map((item) => (
                <button key={item} className="px-4 py-2 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all">
                  {item}
                </button>
              ))}
              <button className="mr-3 px-6 py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-purple-500/25">
                ورود / ثبت‌نام
              </button>
            </div>
            <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white/5 backdrop-blur-xl border-t border-white/10 p-4 space-y-2 animate-slide-up">
            {['خانه', 'ویژگی‌ها', 'قیمت‌ها', 'دانلود'].map((item) => (
              <button key={item} className="w-full text-right px-4 py-3 rounded-xl text-sm text-white/70 hover:bg-white/10">{item}</button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative z-10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20">
                <Wifi className="w-4 h-4 text-green-400" />
                <span className="text-sm text-white/80">اتصال ایمن در کمتر از ۱ ثانیه</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                حریم خصوصی
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">دیجیتال</span> شما
                <br />
                اولویت ماست
              </h1>
              <p className="text-lg text-white/60 leading-relaxed max-w-lg">
                با تکنولوژی رمزگذاری پیشرفته، هویت و داده‌های شما را در برابر هکرها و جاسوسی محافظت می‌کنیم.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg shadow-purple-500/25 animate-pulse-glow active:scale-95">
                  <Download className="w-5 h-5" />
                  دانلود رایگان
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-2xl font-bold hover:bg-white/20 transition-all">
                  <Eye className="w-5 h-5" />
                  دموی آنلاین
                </button>
              </div>
            </div>
            <div className="relative flex justify-center animate-slide-up delay-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-[3rem] blur-3xl scale-110" />
                <img
                  src="/images/hero-vpn.png"
                  alt="VPN Shield"
                  className="relative w-64 sm:w-72 lg:w-80 animate-float drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '+۵۰۰', label: 'سرور فعال', icon: Server },
              { num: '+۸۰', label: 'کشور', icon: Globe },
              { num: '+۲M', label: 'کاربر', icon: Users },
              { num: '۴.۹', label: 'امتیاز', icon: Star },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <stat.icon className="w-6 h-6 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{stat.num}</div>
                <div className="text-sm text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-black">
              ویژگی‌های <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">بی‌نظیر</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">تکنولوژی‌های پیشرفته برای تجربه‌ای بی‌نقص</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'سرعت نوری', desc: 'پروتکل WireGuard برای سرعت‌های فوق‌العاده بالا', gradient: 'from-yellow-500 to-orange-500' },
              { icon: Lock, title: 'رمزگذاری نظامی', desc: 'AES-256 برای حداکثر امنیت داده‌های شما', gradient: 'from-purple-500 to-pink-500' },
              { icon: Globe, title: 'دسترسی جهانی', desc: 'سرورها در ۸۰+ کشور جهان', gradient: 'from-blue-500 to-cyan-500' },
              { icon: Shield, title: 'Kill Switch', desc: 'قطع خودکار اینترنت در صورت قطع VPN', gradient: 'from-green-500 to-emerald-500' },
              { icon: Server, title: 'No-Log Policy', desc: 'هیچ فعالیتی ثبت نمی‌شود', gradient: 'from-red-500 to-pink-500' },
              { icon: Smartphone, title: 'Multi-Platform', desc: 'همه سیستم‌عامل‌ها پشتیبانی می‌شوند', gradient: 'from-indigo-500 to-purple-500' },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 sm:p-12 text-center space-y-8">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/30">
              <Download className="w-10 h-10" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black">دانلود اپلیکیشن</h2>
            <p className="text-white/60 max-w-lg mx-auto">روی پلتفرم مورد نظر کلیک کنید و در کمتر از ۱ دقیقه نصب کنید</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { icon: Smartphone, label: 'Android', sub: 'نسخه ۵+', color: 'from-green-500 to-green-600' },
                { icon: Apple, label: 'iOS', sub: 'نسخه ۱۴+', color: 'from-gray-600 to-gray-800' },
                { icon: Monitor, label: 'Windows', sub: 'ویندوز ۱۰+', color: 'from-blue-500 to-blue-700' },
                { icon: Monitor, label: 'macOS', sub: 'مانتری+', color: 'from-purple-500 to-purple-700' },
              ].map((p) => (
                <button
                  key={p.label}
                  className="group p-5 bg-white/5 backdrop-blur rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <p.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-bold text-sm">{p.label}</div>
                  <div className="text-xs text-white/40 mt-1">{p.sub}</div>
                </button>
              ))}
            </div>
            <button className="px-10 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl font-black text-lg hover:opacity-90 transition-all shadow-xl shadow-purple-500/25 active:scale-95">
              دانلود مستقیم APK
            </button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-black">تعرفه‌ها</h2>
            <p className="text-white/50">پلن مناسب خود را انتخاب کنید</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'رایگان', price: '۰', features: ['۳ سرور', '۱ دستگاه', 'سرعت محدود'], popular: false },
              { name: 'پرمیوم', price: '۴۹,۰۰۰', features: ['همه سرورها', '۵ دستگاه', 'سرعت نامحدود', 'Kill Switch', 'پشتیبانی ۲۴/۷'], popular: true },
              { name: 'تیمی', price: '۹۹,۰۰۰', features: ['همه سرورها', 'نامحدود', 'IP اختصاصی', 'مدیریت تیم', 'API'], popular: false },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-3xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500/50 shadow-2xl shadow-purple-500/20'
                    : 'bg-white/5 border border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-xs font-bold">
                    پیشنهادی
                  </div>
                )}
                <div className="text-center space-y-3 mb-8">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div>
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className="text-white/50 text-sm"> تومان/ماه</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 border border-white/20'
                }`}>
                  انتخاب
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="font-bold">ShieldVPN</span>
              </div>
              <p className="text-white/40 text-sm">امنیت دیجیتال برای همه</p>
            </div>
            {[
              { title: 'دانلود', links: ['اندروید', 'آیفون', 'ویندوز', 'مک'] },
              { title: 'شرکت', links: ['درباره ما', 'وبلاگ', 'تماس'] },
              { title: 'حقوقی', links: ['حریم خصوصی', 'شرایط استفاده'] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-bold mb-3 text-sm">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}><a href="#" className="text-white/40 hover:text-white text-sm transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-white/30 text-sm">
            © ۱۴۰۴ ShieldVPN
          </div>
        </div>
      </footer>
    </div>
  );
}
