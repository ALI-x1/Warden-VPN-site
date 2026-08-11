import { useState } from 'react';
import ThemeSelector from './components/ThemeSelector';
import Material3Theme from './components/Material3Theme';
import GlassmorphismTheme from './components/GlassmorphismTheme';
import NeomorphismTheme from './components/NeomorphismTheme';
import AuroraTheme from './components/AuroraTheme';
import DarkMinimalTheme from './components/DarkMinimalTheme';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState('material3');

  const renderTheme = () => {
    switch (currentTheme) {
      case 'material3':
        return <Material3Theme />;
      case 'glassmorphism':
        return <GlassmorphismTheme />;
      case 'neomorphism':
        return <NeomorphismTheme />;
      case 'aurora':
        return <AuroraTheme />;
      case 'darkminimal':
        return <DarkMinimalTheme />;
      default:
        return <Material3Theme />;
    }
  };

  return (
    <div className="relative">
      <ThemeSelector currentTheme={currentTheme} onThemeChange={setCurrentTheme} />
      {renderTheme()}
    </div>
  );
}
