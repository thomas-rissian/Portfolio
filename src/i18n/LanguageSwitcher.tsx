import { useState, useEffect } from 'react';
import { getCurrentLanguage, setCurrentLanguage, getTranslation, type Language } from './index';

export const LanguageSwitcher = () => {
  const [language, setLanguageState] = useState<Language>('fr');

  useEffect(() => {
    setLanguageState(getCurrentLanguage());
  }, []);

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'fr' ? 'en' : 'fr';
    setCurrentLanguage(newLanguage);
    setLanguageState(newLanguage);
    // Reload page to apply language change to server-rendered content
    window.location.reload();
  };

  const t = getTranslation(language);

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-lg rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
      title={t.common.language}
    >
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">
          {language === 'fr' ? 'FR' : 'EN'}
        </span>
        <svg
          className="w-4 h-4 text-apple-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
      </div>
    </button>
  );
};