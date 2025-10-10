import { defineCollection, z } from 'astro:content';

// Base schemas
const projectSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  images: z.array(z.string()).optional(),
  tags: z.array(z.string()),
  githubUrl: z.string().optional(),
  featured: z.boolean().default(false),
  ecoResponsibility: z.string().optional(),
});

const experienceSchema = z.object({
  title: z.string(),
  company: z.string(),
  period: z.string(),
  description: z.array(z.string()),
  technologies: z.array(z.string()),
});

const educationSchema = z.object({
  degree: z.string(),
  school: z.string(),
  period: z.string(),
  achievements: z.array(z.string()),
});

const skillSchema = z.object({
  name: z.string(),
  level: z.enum(['Expert', 'Advanced', 'Intermediate']),
  icon: z.string(),
  category: z.string(),
});

const testimonialSchema = z.object({
  content: z.string(),
  author: z.string(),
  role: z.string(),
  company: z.string(),
  avatar: z.string(),
});

const achievementSchema = z.object({
  icon: z.string(),
  number: z.string(),
  label: z.string(),
});

const personalSchema = z.object({
  location: z.string(),
  timezone: z.string(),
  availability: z.string(),
  socialLinks: z.array(z.object({
    name: z.string(),
    url: z.string(),
    icon: z.string(),
  })),
});

// Content collections for each language
const projectsFr = defineCollection({
  type: 'content',
  schema: projectSchema,
});

const projectsEn = defineCollection({
  type: 'content',
  schema: projectSchema,
});

const experiencesFr = defineCollection({
  type: 'content',
  schema: experienceSchema,
});

const experiencesEn = defineCollection({
  type: 'content',
  schema: experienceSchema,
});

const educationFr = defineCollection({
  type: 'content',
  schema: educationSchema,
});

const educationEn = defineCollection({
  type: 'content',
  schema: educationSchema,
});

const experiences = defineCollection({
  type: 'content',
  schema: experienceSchema,
});

const education = defineCollection({
  type: 'content',
  schema: educationSchema,
});

const skillsFr = defineCollection({
  type: 'content',
  schema: skillSchema,
});

const skillsEn = defineCollection({
  type: 'content',
  schema: skillSchema,
});

const testimonialsFr = defineCollection({
  type: 'content',
  schema: testimonialSchema,
});

const testimonialsEn = defineCollection({
  type: 'content',
  schema: testimonialSchema,
});

const achievementsFr = defineCollection({
  type: 'content',
  schema: achievementSchema,
});

const achievementsEn = defineCollection({
  type: 'content',
  schema: achievementSchema,
});

const personalFr = defineCollection({
  type: 'content',
  schema: personalSchema,
});

const personalEn = defineCollection({
  type: 'content',
  schema: personalSchema,
});

// Hero content collections
const heroFr = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    viewMyWork: z.string(),
    getInTouch: z.string(),
    giveMeAStar: z.string(),
  }),
});

const heroEn = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    viewMyWork: z.string(),
    getInTouch: z.string(),
    giveMeAStar: z.string(),
  }),
});

// Contact content collections
const contactFr = defineCollection({
  type: 'content',
  schema: z.object({
    getInTouch: z.string(),
    name: z.string(),
    email: z.string(),
    message: z.string(),
    sendMessage: z.string(),
    contactInformation: z.string(),
    officeHours: z.string(),
    mondayFriday: z.string(),
  }),
});

const contactEn = defineCollection({
  type: 'content',
  schema: z.object({
    getInTouch: z.string(),
    name: z.string(),
    email: z.string(),
    message: z.string(),
    sendMessage: z.string(),
    contactInformation: z.string(),
    officeHours: z.string(),
    mondayFriday: z.string(),
  }),
});

// Blog content collections
const blogFr = defineCollection({
  type: 'content',
  schema: z.object({
    recentPosts: z.string(),
    viewAllPosts: z.string(),
    read: z.string(),
  }),
});

const blogEn = defineCollection({
  type: 'content',
  schema: z.object({
    recentPosts: z.string(),
    viewAllPosts: z.string(),
    read: z.string(),
  }),
});

// Skills content collections
const skillsContentFr = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seeMore: z.string(),
  }),
});

const skillsContentEn = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seeMore: z.string(),
  }),
});

// Info widgets content collections
const infoFr = defineCollection({
  type: 'content',
  schema: z.object({
    location: z.string(),
    localTime: z.string(),
    availability: z.string(),
    socialMedia: z.string(),
  }),
});

const infoEn = defineCollection({
  type: 'content',
  schema: z.object({
    location: z.string(),
    localTime: z.string(),
    availability: z.string(),
    socialMedia: z.string(),
  }),
});

// Experience content collections
const experienceFr = defineCollection({
  type: 'content',
  schema: z.object({
    workExperience: z.string(),
    education: z.string(),
    seeMore: z.string(),
    seeLess: z.string(),
  }),
});

const experienceEn = defineCollection({
  type: 'content',
  schema: z.object({
    workExperience: z.string(),
    education: z.string(),
    seeMore: z.string(),
    seeLess: z.string(),
  }),
});

// Projects content collections
const projectsContentFr = defineCollection({
  type: 'content',
  schema: z.object({
    featuredProjects: z.string(),
    viewAllProjects: z.string(),
  }),
});

const projectsContentEn = defineCollection({
  type: 'content',
  schema: z.object({
    featuredProjects: z.string(),
    viewAllProjects: z.string(),
  }),
});

export const collections = {
  // French collections
  'projects-fr': projectsFr,
  'experiences-fr': experiencesFr,
  'education-fr': educationFr,
  'skills-fr': skillsFr,
  'testimonials-fr': testimonialsFr,
  'achievements-fr': achievementsFr,
  'personal-fr': personalFr,
  'hero-fr': heroFr,
  'contact-fr': contactFr,
  'blog-fr': blogFr,
  'skills-content-fr': skillsContentFr,
  'info-fr': infoFr,
  'experience-fr': experienceFr,
  'projects-content-fr': projectsContentFr,

  // English collections
  'projects-en': projectsEn,
  'experiences-en': experiencesEn,
  'education-en': educationEn,
  'skills-en': skillsEn,
  'testimonials-en': testimonialsEn,
  'achievements-en': achievementsEn,
  'personal-en': personalEn,
  'hero-en': heroEn,
  'contact-en': contactEn,
  'blog-en': blogEn,
  'skills-content-en': skillsContentEn,
  'info-en': infoEn,
  'experience-en': experienceEn,
  'projects-content-en': projectsContentEn,

  // General collections
  'experiences': experiences,
  'education': education,
};