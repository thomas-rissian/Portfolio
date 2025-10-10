import React from 'react';
import type { CollectionEntry } from 'astro:content';

interface ProjectCardProps {
  project: CollectionEntry<'projects'>;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.data.image}
          alt={project.data.title}
          className="w-full h-full object-cover"
        />
        {project.data.featured && (
          <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            Featured
          </span>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">
          {project.data.title}
        </h3>
        <p className="text-blue-600 mb-4 line-clamp-2">
          {project.data.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.data.tags.slice(0, 3).map((tag: string) => (
            <span
              key={tag}
              data-tag={tag.toLowerCase()}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
          {project.data.tags.length > 3 && (
            <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm">
              +{project.data.tags.length - 3}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => {
              if (window.location.pathname === '/projects') {
                // On projects page - open modal directly
                if (typeof (window as any).openProjectModal === 'function') {
                  (window as any).openProjectModal(project);
                }
              } else {
                // Navigate to projects page and open modal
                sessionStorage.setItem('openProjectId', project.data.id.toString());
                window.location.href = '/projects';
              }
            }}
            className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium text-sm"
          >
            Voir détails
          </button>
          {project.data.githubUrl && (
            <a
              href={project.data.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
