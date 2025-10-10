import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface Translation {
  // Hero section
  hero: {
    viewMyWork: string;
    getInTouch: string;
    giveMeAStar: string;
  };
  // Info widgets
  info: {
    location: string;
    localTime: string;
    availability: string;
    socialMedia: string;
  };
  // Experience
  experience: {
    workExperience: string;
    education: string;
    seeMore: string;
    seeLess: string;
  };
  // Projects
  projects: {
    featuredProjects: string;
    viewAllProjects: string;
  };
  // Common
  common: {
    language: string;
  };
}

const translations: Record<Language, Translation> = {
  fr: {
    hero: {
      viewMyWork: 'Voir mes travaux',
      getInTouch: 'Me contacter',
      giveMeAStar: 'Donnez-moi une étoile sur GitHub',
    },
    info: {
      location: 'Localisation',
      localTime: 'Heure locale',
      availability: 'Disponibilité',
      socialMedia: 'Réseaux sociaux',
    },
    experience: {
      workExperience: 'Expérience professionnelle',
      education: 'Formation',
      seeMore: 'Voir plus',
      seeLess: 'Voir moins',
    },
    projects: {
      featuredProjects: 'Projets en vedette',
      viewAllProjects: 'Voir tous les projets →',
    },
    common: {
      language: 'Langue',
    },
  },
  en: {
    hero: {
      viewMyWork: 'View My Work',
      getInTouch: 'Get in Touch',
      giveMeAStar: 'Give me a star on GitHub',
    },
    info: {
      location: 'Location',
      localTime: 'Local Time',
      availability: 'Availability',
      socialMedia: 'Social Media',
    },
    experience: {
      workExperience: 'Work Experience',
      education: 'Education',
      seeMore: 'See more',
      seeLess: 'See less',
    },
    projects: {
      featuredProjects: 'Featured Projects',
      viewAllProjects: 'View all projects →',
    },
    common: {
      language: 'Language',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};