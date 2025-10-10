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
  level: z.enum(['Expert', 'Advanced', 'Intermediate', 'Avancé', 'Intermédiaire']),
  icon: z.string(),
  category: z.string(),
  order: z.number().optional(),
  technologies: z.array(z.string()).optional(),
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

const favoriteSkillsSchema = z.object({
  favorites: z.array(z.string()),
});

// Content collections
const experiences = defineCollection({
  type: 'content',
  schema: experienceSchema,
});

const education = defineCollection({
  type: 'content',
  schema: educationSchema,
});

const personal = defineCollection({
  type: 'content',
  schema: z.union([personalSchema, favoriteSkillsSchema]),
});

const skills = defineCollection({
  type: 'content',
  schema: skillSchema,
});

const projects = defineCollection({
  type: 'content',
  schema: projectSchema,
});

const achievements = defineCollection({
  type: 'content',
  schema: achievementSchema,
});

const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
  }),
});

export const collections = {
  experiences,
  education,
  personal,
  skills,
  projects,
  achievements,
  about,
};