import { Palette } from 'lucide-react';

interface ThemeSelectorProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

const themes = [
  { id: 'material3', name: 'متریال ۳', color: 'bg-purple-500', emoji: '🎨' },
  { id: 'glassmorphism', name: 'شیشه‌ای', color: 'bg-blue-500', emoji: '💎' },
  { id: 'neomorphism', name: 'نئومورفیسم', color: 'bg-gray-400', emoji: '🌙' },
  { id: 'aurora', name: 'شفق قطبی', color: 'bg-green-500', emoji: '🌌' },
  { id: 'darkminimal', name: 'تاریک مینیمال', color: 'bg-gray-800', emoji: '⚫' },
];

export default function ThemeSelector({ currentTheme, onThemeChange }: ThemeSelectorProps) {
  return (
    <div className="fixed top-4 left-4 z-[100]" dir="rtl">
      <div className="group relative">
        <button className="flex items-center gap-2 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-4 py-2.5 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
          <Palette className="w-5 h-5 text-purple-600" />
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">تم‌ها</span>
        </button>
        <div className="absolute top-full right-0 mt-2 w-56 rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 overflow-hidden">
          <div className="p-2">
            <div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">انتخاب تم</div>
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => onThemeChange(theme.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 text-right ${
                  currentTheme === theme.id
                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="text-lg">{theme.emoji}</span>
                <span className="text-sm font-medium">{theme.name}</span>
                {currentTheme === theme.id && (
                  <span className="mr-auto text-purple-500 text-xs">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
