export type Language = 'fr' | 'en';

export interface Translation {
  // Hero section
  hero: {
    title: string;
    subtitle: string;
    description: string;
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
  // Skills
  skills: {
    title: string;
    seeMore: string;
  };
  // Contact
  contact: {
    getInTouch: string;
    name: string;
    email: string;
    message: string;
    sendMessage: string;
    contactInformation: string;
    officeHours: string;
    mondayFriday: string;
  };
  // Blog
  blog: {
    recentPosts: string;
    viewAllPosts: string;
    read: string;
  };
  // Common
  common: {
    language: string;
  };
}

// Static translations that can be imported client-side
export const translations: Record<Language, Translation> = {
  fr: {
    hero: {
      title: "Thomas Rissian",
      subtitle: "Développeur Full Stack",
      description: "Passionné par le développement web moderne et les technologies innovantes. Je crée des expériences utilisateur exceptionnelles avec React, Node.js et le cloud.",
      viewMyWork: "Voir mes travaux",
      getInTouch: "Me contacter",
      giveMeAStar: "Donnez-moi une étoile sur GitHub"
    },
    info: {
      location: "Localisation",
      localTime: "Heure locale",
      availability: "Disponibilité",
      socialMedia: "Réseaux sociaux"
    },
    experience: {
      workExperience: "Expérience professionnelle",
      education: "Éducation",
      seeMore: "Voir plus",
      seeLess: "Voir moins"
    },
    projects: {
      featuredProjects: "Projets en vedette",
      viewAllProjects: "Voir tous les projets"
    },
    skills: {
      title: "Compétences",
      seeMore: "Voir plus"
    },
    contact: {
      getInTouch: "Me contacter",
      name: "Nom",
      email: "Email",
      message: "Message",
      sendMessage: "Envoyer le message",
      contactInformation: "Informations de contact",
      officeHours: "Heures de bureau",
      mondayFriday: "Lundi - Vendredi"
    },
    blog: {
      recentPosts: "Articles récents",
      viewAllPosts: "Voir tous les articles",
      read: "Lire"
    },
    common: {
      language: "Langue"
    }
  },
  en: {
    hero: {
      title: "Thomas Rissian",
      subtitle: "Full Stack Developer",
      description: "Passionate about modern web development and innovative technologies. I create exceptional user experiences with React, Node.js and cloud technologies.",
      viewMyWork: "View My Work",
      getInTouch: "Get In Touch",
      giveMeAStar: "Give me a star on GitHub"
    },
    info: {
      location: "Location",
      localTime: "Local Time",
      availability: "Availability",
      socialMedia: "Social Media"
    },
    experience: {
      workExperience: "Work Experience",
      education: "Education",
      seeMore: "See more",
      seeLess: "See less"
    },
    projects: {
      featuredProjects: "Featured Projects",
      viewAllProjects: "View All Projects"
    },
    skills: {
      title: "Skills",
      seeMore: "See more"
    },
    contact: {
      getInTouch: "Get In Touch",
      name: "Name",
      email: "Email",
      message: "Message",
      sendMessage: "Send Message",
      contactInformation: "Contact Information",
      officeHours: "Office Hours",
      mondayFriday: "Monday - Friday"
    },
    blog: {
      recentPosts: "Recent Posts",
      viewAllPosts: "View All Posts",
      read: "Read"
    },
    common: {
      language: "Language"
    }
  }
};

export function getCurrentLanguage(): Language {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('language');
    if (stored === 'fr' || stored === 'en') {
      return stored;
    }
  }
  return 'fr'; // Default to French
}

export function getTranslation(language: Language): Translation {
  return translations[language];
}

export function setCurrentLanguage(language: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', language);
    // Dispatch custom event to notify components of language change
    window.dispatchEvent(new CustomEvent('languageChange', { detail: language }));
  }
}

// Re-export LanguageSwitcher component
export { LanguageSwitcher } from './LanguageSwitcher';

// Re-export language context
export { useLanguage, LanguageProvider } from './LanguageContext';
