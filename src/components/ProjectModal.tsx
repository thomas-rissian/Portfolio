import React, { useState, useEffect } from 'react';
import type { CollectionEntry } from 'astro:content';

interface ProjectModalProps {
  isOpen: boolean;
  project: CollectionEntry<'projects'> | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setCurrentImageIndex(0); // Reset to first image when project changes
  }, [project]);

  if (!isOpen || !project) return null;

  const images = project.data.images || [project.data.image];
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  // Parse markdown content to extract sections
  const parseContent = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Extract headings and their content
    const sections: { title: string; content: string }[] = [];
    const elements = doc.body.children;

    let currentSection = { title: 'Description', content: '' };

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];

      if (element.tagName.match(/^H[1-6]$/)) {
        // Save previous section
        if (currentSection.content.trim()) {
          sections.push({ ...currentSection });
        }
        // Start new section
        currentSection = {
          title: element.textContent || '',
          content: ''
        };
      } else {
        currentSection.content += element.outerHTML || element.textContent || '';
      }
    }

    // Add last section
    if (currentSection.content.trim()) {
      sections.push(currentSection);
    }

    return sections.length > 0 ? sections : [{ title: 'Description', content: html }];
  };

  const sections = project.rendered?.html ? parseContent(project.rendered.html) : [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-white">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{project.data.title}</h2>
            <p className="text-gray-600 mt-1">{project.data.description}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-4xl leading-none h-12 w-12 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col lg:flex-row max-h-[calc(95vh-120px)] overflow-hidden">
          {/* Image Carousel - Left Side */}
          <div className="lg:w-1/2 p-6 border-r border-gray-200">
            <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={images[currentImageIndex]}
                alt={`${project.data.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {images.length > 1 && (
                <>
                  {/* Navigation arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-3 rounded-full transition-all duration-200 shadow-lg"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-3 rounded-full transition-all duration-200 shadow-lg"
                  >
                    ›
                  </button>

                  {/* Dots indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex
                            ? 'bg-white shadow-lg'
                            : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Image counter */}
                  <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>

            {/* Technologies */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-2">
                {project.data.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="lg:w-1/2 p-6 overflow-y-auto">
            <div className="space-y-6">
              {sections.map((section, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </span>
                    {section.title}
                  </h3>
                  <div
                    className="prose prose-lg max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex gap-3">
                {project.data.githubUrl && (
                  <a
                    href={project.data.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium"
                  >
                    🔗 Voir le code source
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};