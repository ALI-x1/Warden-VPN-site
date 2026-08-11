import {
  Shield, Download, Zap, Globe, Lock,
  Star, Users, Server, CheckCircle2, ArrowLeft,
  Smartphone, Monitor, Apple, Menu, X, ChevronRight
} from 'lucide-react';
import { useState } from 'react';

export default function DarkMinimalTheme() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white" dir="rtl">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-base font-bold tracking-tight">ShieldVPN</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {['ویژگی‌ها', 'قیمت‌ها', 'دانلود', 'بلاگ'].map((item) => (
                <button key={item} className="text-sm text-white/40 hover:text-white transition-colors">{item}</button>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button className="text-sm text-white/60 hover:text-white transition-colors">ورود</button>
              <button className="px-4 py-1.5 bg-white text-black rounded-md text-sm font-medium hover:bg-white/90 transition-all">
                شروع رایگان
              </button>
            </div>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-white/[0.06] p-4 space-y-1 animate-slide-up bg-[#0A0A0A]">
            {['ویژگی‌ها', 'قیمت‌ها', 'دانلود', 'بلاگ'].map((item) => (
              <button key={item} className="w-full text-right px-3 py-2.5 text-sm text-white/40 hover:text-white rounded-md hover:bg-white/5">{item}</button>
            ))}
            <button className="w-full px-4 py-2.5 bg-white text-black rounded-md text-sm font-medium mt-2">شروع رایگان</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="py-24 lg:py-36">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full text-xs text-white/40">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            نسخه ۳.۰ — سریع‌تر از همیشه
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
            اینترنت آزاد
            <br />
            <span className="text-white/20">برای همه.</span>
          </h1>
          <p className="text-lg text-white/30 max-w-xl mx-auto leading-relaxed">
            VPN سریع، امن و ساده. بدون پیچیدگی. فقط یک کلیک تا آزادی.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="group flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-all active:scale-95">
              <Download className="w-4 h-4" />
              دانلود رایگان
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-white/10 rounded-lg text-white/60 hover:text-white hover:border-white/20 transition-all">
              مشاهده دمو
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-12 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10 pointer-events-none" />
            <div className="border border-white/[0.06] rounded-2xl p-1 bg-white/[0.02]">
              <img
                src="/images/vpn-app-mockup.png"
                alt="VPN"
                className="w-full max-w-sm mx-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logos / Stats */}
      <section className="py-12 border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-8 sm:gap-16">
          {[
            { num: '۵۰۰+', label: 'سرور', icon: Server },
            { num: '۸۰+', label: 'کشور', icon: Globe },
            { num: '۲M+', label: 'کاربر', icon: Users },
            { num: '۴.۹', label: 'امتیاز', icon: Star },
          ].map((s) => (
            <div key={s.label} className="text-center space-y-1">
              <div className="text-2xl font-black">{s.num}</div>
              <div className="text-xs text-white/20">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-3xl font-black tracking-tight">ویژگی‌ها</h2>
            <p className="text-white/20 text-sm">هر آنچه برای امنیت نیاز دارید</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
            {[
              { icon: Zap, title: 'سرعت بالا', desc: 'پروتکل WireGuard' },
              { icon: Lock, title: 'رمزگذاری', desc: 'AES-256 نظامی' },
              { icon: Globe, title: 'جهانی', desc: '۸۰+ کشور' },
              { icon: Shield, title: 'Kill Switch', desc: 'محافظت خودکار' },
              { icon: Server, title: 'No-Log', desc: 'بدون ثبت فعالیت' },
              { icon: Smartphone, title: 'همه پلتفرم‌ها', desc: 'یک اکانت، همه جا' },
            ].map((f) => (
              <div key={f.title} className="bg-[#0A0A0A] p-8 hover:bg-white/[0.02] transition-colors group">
                <f.icon className="w-5 h-5 text-white/20 mb-4 group-hover:text-white/60 transition-colors" />
                <h3 className="font-bold mb-1">{f.title}</h3>
                <p className="text-sm text-white/20">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-10">
          <h2 className="text-3xl font-black tracking-tight">دانلود</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Smartphone, label: 'Android' },
              { icon: Apple, label: 'iOS' },
              { icon: Monitor, label: 'Windows' },
              { icon: Monitor, label: 'macOS' },
            ].map((p) => (
              <button key={p.label} className="p-6 border border-white/[0.06] rounded-xl hover:border-white/10 hover:bg-white/[0.02] transition-all group">
                <p.icon className="w-6 h-6 text-white/20 mx-auto mb-3 group-hover:text-white/60 transition-colors" />
                <div className="text-sm font-medium">{p.label}</div>
              </button>
            ))}
          </div>
          <button className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-all active:scale-95">
            دانلود مستقیم APK
          </button>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tight">قیمت‌گذاری ساده</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { name: 'رایگان', price: '۰', features: ['۳ سرور', '۱ دستگاه', 'سرعت محدود'], popular: false },
              { name: 'Pro', price: '۴۹,۰۰۰', features: ['همه سرورها', '۵ دستگاه', 'نامحدود', 'Kill Switch', '۲۴/۷'], popular: true },
              { name: 'Team', price: '۹۹,۰۰۰', features: ['نامحدود', 'IP اختصاصی', 'API', 'مدیریت'], popular: false },
            ].map((plan) => (
              <div key={plan.name} className={`p-8 rounded-2xl transition-all hover:-translate-y-1 ${
                plan.popular
                  ? 'bg-white text-black border-2 border-white'
                  : 'border border-white/[0.06] hover:border-white/10'
              }`}>
                {plan.popular && <div className="text-xs font-bold text-black/40 mb-4 uppercase tracking-wider">محبوب‌ترین</div>}
                <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                <div className="mb-6"><span className="text-3xl font-black">{plan.price}</span><span className={`text-sm ${plan.popular ? 'text-black/40' : 'text-white/20'}`}> ت/ماه</span></div>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${plan.popular ? 'text-black/60' : 'text-white/30'}`}>
                      <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${plan.popular ? 'text-green-600' : 'text-green-500/50'}`} />{f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2.5 rounded-lg text-sm font-medium transition-all ${
                  plan.popular ? 'bg-black text-white hover:bg-black/90' : 'border border-white/10 hover:bg-white/5'
                }`}>انتخاب</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-white/20" />
              <span className="text-sm text-white/20">© ۱۴۰۴ ShieldVPN</span>
            </div>
            <div className="flex gap-6">
              {['حریم خصوصی', 'شرایط', 'تماس'].map((l) => (
                <a key={l} href="#" className="text-xs text-white/15 hover:text-white/40 transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
