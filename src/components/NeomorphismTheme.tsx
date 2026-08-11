import {
  Shield, Download, Zap, Globe, Lock,
  Star, Users, Server, CheckCircle2, ArrowLeft,
  Smartphone, Monitor, Apple, Menu, X
} from 'lucide-react';
import { useState } from 'react';

export default function NeomorphismTheme() {
  const [menuOpen, setMenuOpen] = useState(false);

  const neuBox = 'bg-[#E8EDF2] shadow-[8px_8px_16px_#c5c9cd,-8px_-8px_16px_#ffffff]';
  const neuBoxInset = 'bg-[#E8EDF2] shadow-[inset_4px_4px_8px_#c5c9cd,inset_-4px_-4px_8px_#ffffff]';
  const neuBtn = 'bg-[#E8EDF2] shadow-[6px_6px_12px_#c5c9cd,-6px_-6px_12px_#ffffff] hover:shadow-[2px_2px_6px_#c5c9cd,-2px_-2px_6px_#ffffff] active:shadow-[inset_4px_4px_8px_#c5c9cd,inset_-4px_-4px_8px_#ffffff] transition-all duration-200';

  return (
    <div className="min-h-screen bg-[#E8EDF2] text-gray-700" dir="rtl">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#E8EDF2]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${neuBox}`}>
                <Shield className="w-5 h-5 text-indigo-500" />
              </div>
              <span className="text-xl font-bold text-indigo-600">ShieldVPN</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              {['خانه', 'ویژگی‌ها', 'قیمت‌ها', 'دانلود'].map((item) => (
                <button key={item} className={`px-4 py-2 rounded-xl text-sm font-medium ${neuBtn}`}>
                  {item}
                </button>
              ))}
              <button className="mr-2 px-6 py-2.5 bg-indigo-500 text-white rounded-xl text-sm font-bold shadow-[4px_4px_8px_#c5c9cd,-4px_-4px_8px_#ffffff] hover:bg-indigo-600 transition-all">
                ورود
              </button>
            </div>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden p-4 space-y-2 animate-slide-up">
            {['خانه', 'ویژگی‌ها', 'قیمت‌ها', 'دانلود'].map((item) => (
              <button key={item} className={`w-full text-right px-4 py-3 rounded-xl text-sm ${neuBtn}`}>{item}</button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${neuBox}`}>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-500">آنلاین و آماده اتصال</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-800">
                اتصال <span className="text-indigo-500">امن</span>
                <br />
                به اینترنت <span className="text-indigo-500">آزاد</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                با طراحی مدرن و رابط کاربری ساده، تجربه‌ای آرام و لذت‌بخش از VPN داشته باشید.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="group flex items-center gap-3 px-8 py-4 bg-indigo-500 text-white rounded-2xl font-bold shadow-[6px_6px_12px_#c5c9cd,-6px_-6px_12px_#ffffff] hover:bg-indigo-600 transition-all active:scale-95">
                  <Download className="w-5 h-5" />
                  دانلود رایگان
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-indigo-600 ${neuBtn}`}>
                  اطلاعات بیشتر
                </button>
              </div>
            </div>
            <div className="flex justify-center animate-slide-up delay-300">
              <div className={`p-8 rounded-[2rem] ${neuBox}`}>
                <img
                  src="/images/vpn-app-mockup.png"
                  alt="VPN App"
                  className="w-56 sm:w-64 lg:w-72 animate-float rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '+۵۰۰', label: 'سرور', icon: Server },
              { num: '+۸۰', label: 'کشور', icon: Globe },
              { num: '+۲M', label: 'کاربر', icon: Users },
              { num: '۴.۹', label: 'امتیاز', icon: Star },
            ].map((stat) => (
              <div key={stat.label} className={`text-center p-6 rounded-2xl ${neuBox}`}>
                <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 ${neuBoxInset}`}>
                  <stat.icon className="w-5 h-5 text-indigo-500" />
                </div>
                <div className="text-2xl font-black text-indigo-600">{stat.num}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-800">ویژگی‌های <span className="text-indigo-500">کلیدی</span></h2>
            <p className="text-gray-400">تکنولوژی‌های روز برای امنیت شما</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'سرعت بالا', desc: 'اتصال سریع بدون افت سرعت' },
              { icon: Lock, title: 'رمزگذاری قوی', desc: 'AES-256 برای حفاظت کامل' },
              { icon: Globe, title: 'سرور جهانی', desc: 'سرور در ۸۰+ کشور' },
              { icon: Shield, title: 'محافظت کامل', desc: 'Kill Switch خودکار' },
              { icon: Server, title: 'بدون لاگ', desc: 'عدم ثبت فعالیت‌ها' },
              { icon: Smartphone, title: 'همه دستگاه‌ها', desc: 'پشتیبانی کامل' },
            ].map((f) => (
              <div key={f.title} className={`p-6 rounded-2xl ${neuBox} hover:-translate-y-1 transition-all duration-300`}>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${neuBoxInset}`}>
                  <f.icon className="w-7 h-7 text-indigo-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`p-8 sm:p-12 rounded-3xl text-center space-y-8 ${neuBox}`}>
            <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center ${neuBoxInset}`}>
              <Download className="w-10 h-10 text-indigo-500" />
            </div>
            <h2 className="text-3xl font-black text-gray-800">دانلود اپلیکیشن</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { icon: Smartphone, label: 'Android' },
                { icon: Apple, label: 'iOS' },
                { icon: Monitor, label: 'Windows' },
                { icon: Monitor, label: 'macOS' },
              ].map((p) => (
                <button key={p.label} className={`p-5 rounded-2xl ${neuBtn}`}>
                  <p.icon className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
                  <div className="font-bold text-sm text-gray-700">{p.label}</div>
                </button>
              ))}
            </div>
            <button className="px-10 py-4 bg-indigo-500 text-white rounded-2xl font-black text-lg shadow-[6px_6px_12px_#c5c9cd,-6px_-6px_12px_#ffffff] hover:bg-indigo-600 transition-all active:scale-95">
              دانلود مستقیم
            </button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-black text-gray-800">پلن‌ها</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'رایگان', price: '۰', features: ['۳ سرور', '۱ دستگاه', 'سرعت محدود'], popular: false },
              { name: 'حرفه‌ای', price: '۴۹,۰۰۰', features: ['همه سرورها', '۵ دستگاه', 'سرعت نامحدود', 'Kill Switch'], popular: true },
              { name: 'سازمانی', price: '۹۹,۰۰۰', features: ['همه سرورها', 'نامحدود', 'IP اختصاصی', 'مدیریت تیم'], popular: false },
            ].map((plan) => (
              <div key={plan.name} className={`relative p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 ${plan.popular ? 'bg-indigo-500 text-white shadow-xl shadow-indigo-500/30 scale-105' : neuBox}`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-800 rounded-full text-xs font-bold">محبوب</div>}
                <div className="text-center space-y-3 mb-8">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div>
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-gray-400'}`}> تومان/ماه</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${plan.popular ? 'text-green-300' : 'text-green-500'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.popular ? 'bg-white text-indigo-600 hover:bg-white/90' : neuBtn + ' text-indigo-600'}`}>
                  انتخاب
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`p-8 rounded-3xl ${neuBox}`}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-indigo-500" />
                  <span className="font-bold text-gray-800">ShieldVPN</span>
                </div>
                <p className="text-gray-400 text-sm">اینترنت آزاد و امن</p>
              </div>
              {[
                { title: 'محصولات', links: ['اندروید', 'iOS', 'ویندوز'] },
                { title: 'شرکت', links: ['درباره ما', 'وبلاگ', 'تماس'] },
                { title: 'حقوقی', links: ['حریم خصوصی', 'شرایط'] },
              ].map((col) => (
                <div key={col.title}>
                  <h4 className="font-bold text-gray-800 mb-3 text-sm">{col.title}</h4>
                  <ul className="space-y-2">
                    {col.links.map((l) => (
                      <li key={l}><a href="#" className="text-gray-400 hover:text-indigo-500 text-sm transition-colors">{l}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-300 pt-6 text-center text-gray-400 text-sm">
              © ۱۴۰۴ ShieldVPN
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
