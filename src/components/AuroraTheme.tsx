import {
  Shield, Download, Zap, Globe, Lock,
  Server, CheckCircle2, ArrowLeft,
  Smartphone, Monitor, Apple, Menu, X, Sparkles
} from 'lucide-react';
import { useState } from 'react';

export default function AuroraTheme() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden" dir="rtl">
      {/* Aurora BG */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-green-500/15 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#020617]/50 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-cyan-400 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#020617]" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">ShieldVPN</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {['خانه', 'ویژگی‌ها', 'قیمت‌ها', 'دانلود'].map((item) => (
                <button key={item} className="px-4 py-2 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all">{item}</button>
              ))}
              <button className="mr-3 px-6 py-2.5 bg-gradient-to-r from-green-400 to-cyan-400 text-[#020617] rounded-lg text-sm font-bold hover:opacity-90 transition-all">
                شروع رایگان
              </button>
            </div>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden p-4 space-y-2 bg-[#020617]/80 backdrop-blur-xl animate-slide-up">
            {['خانه', 'ویژگی‌ها', 'قیمت‌ها', 'دانلود'].map((item) => (
              <button key={item} className="w-full text-right px-4 py-3 rounded-lg text-sm text-white/60 hover:bg-white/5">{item}</button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative z-10 py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-slide-up max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">تکنولوژی نسل جدید VPN</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-green-300 via-cyan-300 to-green-300 bg-clip-text text-transparent">آزادی دیجیتال</span>
              <br />
              <span className="text-white/90">بدون مرز</span>
            </h1>
            <p className="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto">
              با پروتکل‌های نسل جدید، سریع‌ترین و امن‌ترین اتصال VPN را تجربه کنید. بدون محدودیت، بدون نگرانی.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-400 to-cyan-400 text-[#020617] rounded-xl font-black text-lg hover:opacity-90 transition-all shadow-2xl shadow-green-500/20 active:scale-95">
                <Download className="w-6 h-6" />
                دانلود رایگان
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-3 px-10 py-5 border border-white/10 rounded-xl font-bold text-lg hover:bg-white/5 transition-all text-white/80">
                مشاهده دمو
              </button>
            </div>
            <div className="pt-8">
              <img
                src="/images/vpn-app-mockup.png"
                alt="VPN App"
                className="mx-auto w-64 sm:w-72 lg:w-80 animate-float rounded-3xl shadow-2xl shadow-green-500/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {[
              { num: '+۵۰۰', label: 'سرور' },
              { num: '+۸۰', label: 'کشور' },
              { num: '+۲M', label: 'کاربر' },
              { num: '۴.۹★', label: 'امتیاز' },
            ].map((s) => (
              <div key={s.label} className="text-center px-6 py-4 bg-white/5 backdrop-blur rounded-xl border border-white/5">
                <div className="text-2xl font-black bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">{s.num}</div>
                <div className="text-xs text-white/30 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-3xl sm:text-4xl font-black">
              چرا <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">ShieldVPN</span>؟
            </h2>
            <p className="text-white/30 max-w-xl mx-auto">امنیت و سرعت در کنار هم</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'فوق سریع', desc: 'WireGuard Protocol' },
              { icon: Lock, title: 'رمزگذاری', desc: 'AES-256 Encryption' },
              { icon: Globe, title: 'جهانی', desc: '۸۰+ کشور' },
              { icon: Shield, title: 'Kill Switch', desc: 'محافظت خودکار' },
              { icon: Server, title: 'No-Log', desc: 'بدون ثبت فعالیت' },
              { icon: Smartphone, title: 'همه دستگاه‌ها', desc: 'Cross-Platform' },
            ].map((f) => (
              <div key={f.title} className="group p-6 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/[0.06] hover:border-green-500/20 transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:from-green-500/30 group-hover:to-cyan-500/30 transition-all">
                  <f.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-bold text-white/90 mb-1">{f.title}</h3>
                <p className="text-sm text-white/30">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="relative z-10 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/10 rounded-3xl p-8 sm:p-14 text-center space-y-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-cyan-400" />
            <h2 className="text-3xl sm:text-4xl font-black">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">دانلود</span> اپلیکیشن
            </h2>
            <p className="text-white/40 max-w-lg mx-auto">در کمتر از ۱ دقیقه نصب و متصل شوید</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Smartphone, label: 'Android', color: 'text-green-400' },
                { icon: Apple, label: 'iOS', color: 'text-white/80' },
                { icon: Monitor, label: 'Windows', color: 'text-blue-400' },
                { icon: Monitor, label: 'macOS', color: 'text-purple-400' },
              ].map((p) => (
                <button key={p.label} className="p-5 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-green-500/20 transition-all group">
                  <p.icon className={`w-8 h-8 ${p.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                  <div className="font-bold text-sm">{p.label}</div>
                </button>
              ))}
            </div>
            <button className="px-10 py-4 bg-gradient-to-r from-green-400 to-cyan-400 text-[#020617] rounded-xl font-black text-lg hover:opacity-90 transition-all shadow-2xl shadow-green-500/20 active:scale-95">
              دانلود مستقیم APK
            </button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-black">تعرفه‌ها</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'رایگان', price: '۰', features: ['۳ سرور', '۱ دستگاه', 'سرعت محدود'], popular: false },
              { name: 'پرمیوم', price: '۴۹,۰۰۰', features: ['همه سرورها', '۵ دستگاه', 'سرعت نامحدود', 'Kill Switch', 'پشتیبانی ۲۴/۷'], popular: true },
              { name: 'سازمانی', price: '۹۹,۰۰۰', features: ['نامحدود', 'IP اختصاصی', 'API', 'مدیریت تیم'], popular: false },
            ].map((plan) => (
              <div key={plan.name} className={`relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'bg-gradient-to-br from-green-500/20 to-cyan-500/20 border-2 border-green-500/30 shadow-2xl shadow-green-500/10'
                  : 'bg-white/[0.03] border border-white/5 hover:border-white/10'
              }`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-green-400 to-cyan-400 text-[#020617] rounded-full text-xs font-bold">پیشنهادی</div>}
                <div className="text-center space-y-3 mb-8">
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  <div><span className="text-4xl font-black">{plan.price}</span><span className="text-white/30 text-sm"> تومان/ماه</span></div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/50">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-400 to-cyan-400 text-[#020617] hover:opacity-90'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white/70'
                }`}>انتخاب</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="font-bold">ShieldVPN</span>
              </div>
              <p className="text-white/20 text-sm">آزادی دیجیتال</p>
            </div>
            {[
              { title: 'دانلود', links: ['اندروید', 'آیفون', 'ویندوز'] },
              { title: 'شرکت', links: ['درباره ما', 'وبلاگ'] },
              { title: 'حقوقی', links: ['حریم خصوصی', 'شرایط'] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-bold text-sm mb-3">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((l) => <li key={l}><a href="#" className="text-white/20 hover:text-green-400 text-sm transition-colors">{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/5 pt-6 text-center text-white/15 text-sm">© ۱۴۰۴ ShieldVPN</div>
        </div>
      </footer>
    </div>
  );
}
