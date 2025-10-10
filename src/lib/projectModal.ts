// ===================================
// PROJECT MODAL - Centralized Logic
// ===================================

export interface ProjectData {
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
    images?: string[];
    tags: string[];
    githubUrl?: string;
    ecoResponsibility?: string;
  };
  rendered?: {
    html: string;
  };
}

let currentProject: ProjectData | null = null;
let currentImageIndex = 0;

/**
 * Open project modal with clean, GitLab-style layout
 */
export function openProjectModal(project: ProjectData): void {
  console.log('🎯 Opening modal for:', project.data.title);
  
  currentProject = project;
  currentImageIndex = 0;
  
  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-content');
  
  if (!modal || !content) {
    console.error('❌ Modal elements not found');
    return;
  }

  const images = project.data.images || [project.data.image];

  // Build modal HTML with clean GitLab-style design
  content.innerHTML = `
    <!-- Header -->
    <div class="flex justify-between items-center p-6 border-b border-gray-200 bg-white">
      <h2 class="text-2xl font-semibold text-gray-900">${project.data.title}</h2>
      <button id="close-modal" class="text-gray-400 hover:text-gray-600 text-3xl leading-none w-8 h-8 flex items-center justify-center">×</button>
    </div>

    <!-- Description Banner -->
    <div class="bg-gray-50 border-b border-gray-200 p-6">
      <p class="text-gray-700 text-base leading-relaxed">${project.data.description}</p>
    </div>

    <div class="flex flex-col lg:flex-row h-[calc(95vh-200px)]">
      <!-- Left: Image Gallery -->
      <div class="lg:w-1/2 p-6 border-r border-gray-200 bg-gray-50">
        <div class="sticky top-6 space-y-4">
          <!-- Main Image -->
          <div class="relative aspect-video bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer group border border-gray-200" id="image-container">
            <img id="modal-image" src="${images[0]}" alt="${project.data.title}" class="w-full h-full object-cover" />
            ${images.length > 1 ? `
              <button id="prev-image" class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">‹</button>
              <button id="next-image" class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">›</button>
              <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5" id="image-dots">
                ${images.map((_: string, i: number) => `<button class="image-dot w-2 h-2 rounded-full transition-all ${i === 0 ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'}" data-index="${i}"></button>`).join('')}
              </div>
              <div class="absolute top-3 right-3 bg-black/60 text-white px-2 py-1 rounded text-xs" id="image-counter">1 / ${images.length}</div>
            ` : ''}
          </div>

          <!-- Technologies -->
          <div>
            <h3 class="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">Technologies</h3>
            <div class="flex flex-wrap gap-2">
              ${project.data.tags.map(tag => `<span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm font-medium border border-blue-100">${tag}</span>`).join('')}
            </div>
          </div>

          <!-- Similar Projects Navigation -->
          <div id="similar-projects-nav" class="border-t border-gray-200 pt-4">
            <!-- Will be populated by JavaScript -->
          </div>

          <!-- GitHub Link -->
          ${project.data.githubUrl ? `
            <a href="${project.data.githubUrl}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Voir le code source
            </a>
          ` : ''}
        </div>
      </div>

      <!-- Right: Content Tabs -->
      <div class="lg:w-1/2 flex flex-col bg-white">
        <!-- Tabs -->
        <div class="sticky top-0 bg-white z-10 border-b border-gray-200">
          <nav class="flex">
            <button id="tab-description" class="tab-button active px-6 py-3 border-b-2 border-blue-600 text-blue-600 font-medium text-sm">Description</button>
            ${project.data.ecoResponsibility ? '<button id="tab-eco" class="tab-button px-6 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">Numérique responsable</button>' : ''}
          </nav>
        </div>

        <!-- Tab Content -->
        <div class="flex-1 overflow-y-auto p-6">
          <div id="tab-content-description" class="tab-content project-description">
            ${project.rendered?.html || '<p class="text-gray-500">Aucune description disponible</p>'}
          </div>

          ${project.data.ecoResponsibility ? `
            <div id="tab-content-eco" class="tab-content eco-content hidden">
              ${renderEcoContent(project.data.ecoResponsibility)}
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  // Setup event listeners
  setupModalListeners(modal, images);
}

/**
 * Render eco-responsibility content with clean styling
 */
function renderEcoContent(text: string): string {
  return text
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^- \*\*(.*?)\*\*(.*)$/gm, '<li><strong>$1</strong>$2</li>')
    .replace(/^- (.*?)$/gm, '<li>$1</li>')
    .replace(/^([^-\n#<].+)$/gm, '<p>$1</p>')
    .replace(/\n\n+/g, '\n')
    .trim();
}

/**
 * Setup all modal event listeners
 */
function setupModalListeners(modal: HTMLElement, images: string[]): void {
  // Close modal
  const closeBtn = document.getElementById('close-modal');
  closeBtn?.addEventListener('click', () => closeModal(modal));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal(modal);
  });

  document.addEventListener('keydown', function escapeHandler(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      closeModal(modal);
      document.removeEventListener('keydown', escapeHandler);
    }
  });

  // Image navigation
  if (images.length > 1) {
    setupImageNavigation(images);
  }

  // Image zoom
  setupImageZoom();

  // Tab switching
  setupTabs();

  // Similar projects
  setupSimilarProjects();
}

/**
 * Setup image carousel navigation
 */
function setupImageNavigation(images: string[]): void {
  const prevBtn = document.getElementById('prev-image');
  const nextBtn = document.getElementById('next-image');
  const imageEl = document.getElementById('modal-image') as HTMLImageElement;
  const counterEl = document.getElementById('image-counter');
  const dots = document.querySelectorAll('.image-dot');

  const updateImage = (index: number) => {
    currentImageIndex = index;
    if (imageEl) imageEl.src = images[index];
    if (counterEl) counterEl.textContent = `${index + 1} / ${images.length}`;
    
    dots.forEach((dot, i) => {
      dot.classList.toggle('bg-blue-600', i === index);
      dot.classList.toggle('w-6', i === index);
      dot.classList.toggle('bg-gray-300', i !== index);
      dot.classList.toggle('w-2', i !== index);
    });
  };

  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    updateImage(currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1);
  });

  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    updateImage(currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      updateImage(index);
    });
  });
}

/**
 * Setup image zoom functionality with carousel navigation
 */
function setupImageZoom(): void {
  if (!currentProject) return;
  
  const images = currentProject.data.images || [currentProject.data.image];
  const imageContainer = document.getElementById('image-container');
  const zoomModal = document.getElementById('image-zoom-modal');
  const zoomedImage = document.getElementById('zoomed-image') as HTMLImageElement;
  const closeZoom = document.getElementById('close-zoom');
  const prevZoomBtn = document.getElementById('prev-zoom');
  const nextZoomBtn = document.getElementById('next-zoom');
  const zoomCounter = document.getElementById('zoom-counter');

  // Function to update zoomed image
  const updateZoomedImage = (index: number) => {
    if (zoomedImage && images[index]) {
      zoomedImage.src = images[index];
      if (zoomCounter) {
        zoomCounter.textContent = `${index + 1} / ${images.length}`;
      }
    }
  };

  // Open zoom with current image
  imageContainer?.addEventListener('click', () => {
    if (zoomedImage && zoomModal) {
      updateZoomedImage(currentImageIndex);
      zoomModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  });

  // Close zoom
  const closeZoomModal = () => {
    zoomModal?.classList.add('hidden');
    document.body.style.overflow = '';
  };

  closeZoom?.addEventListener('click', closeZoomModal);
  zoomModal?.addEventListener('click', (e) => {
    if (e.target === zoomModal) closeZoomModal();
  });

  // Navigation in zoom mode
  prevZoomBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
    updateZoomedImage(currentImageIndex);
    // Update main modal image too
    const mainImage = document.getElementById('modal-image') as HTMLImageElement;
    if (mainImage) {
      mainImage.src = images[currentImageIndex];
      updateImageDots();
    }
  });

  nextZoomBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentImageIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
    updateZoomedImage(currentImageIndex);
    // Update main modal image too
    const mainImage = document.getElementById('modal-image') as HTMLImageElement;
    if (mainImage) {
      mainImage.src = images[currentImageIndex];
      updateImageDots();
    }
  });

  // Keyboard navigation in zoom
  const handleKeyboard = (e: KeyboardEvent) => {
    if (!zoomModal?.classList.contains('hidden')) {
      if (e.key === 'Escape') {
        closeZoomModal();
      } else if (e.key === 'ArrowLeft') {
        prevZoomBtn?.click();
      } else if (e.key === 'ArrowRight') {
        nextZoomBtn?.click();
      }
    }
  };

  document.addEventListener('keydown', handleKeyboard);

  // Helper to update dots
  function updateImageDots(): void {
    const dots = document.querySelectorAll('.image-dot');
    const counter = document.getElementById('image-counter');
    
    dots.forEach((dot, i) => {
      if (i === currentImageIndex) {
        dot.classList.add('bg-blue-600', 'w-6');
        dot.classList.remove('bg-gray-300', 'w-2');
      } else {
        dot.classList.remove('bg-blue-600', 'w-6');
        dot.classList.add('bg-gray-300', 'w-2');
      }
    });

    if (counter) {
      counter.textContent = `${currentImageIndex + 1} / ${images.length}`;
    }
  }
}

/**
 * Setup tab switching
 */
function setupTabs(): void {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update buttons
      tabButtons.forEach(btn => {
        btn.classList.remove('active', 'border-blue-600', 'text-blue-600');
        btn.classList.add('border-transparent', 'text-gray-500');
      });
      button.classList.add('active', 'border-blue-600', 'text-blue-600');
      button.classList.remove('border-transparent', 'text-gray-500');

      // Update content
      tabContents.forEach(content => content.classList.add('hidden'));
      const tabId = button.id.replace('tab-', 'tab-content-');
      document.getElementById(tabId)?.classList.remove('hidden');
    });
  });
}

/**
 * Setup similar projects navigation (arrows)
 */
function setupSimilarProjects(): void {
  if (!currentProject) return;

  const container = document.getElementById('similar-projects-nav');
  if (!container) return;

  const allProjects = (window as any).allProjectsData || [];

  // Find similar projects based on tags
  const similarProjects = allProjects.filter((p: ProjectData) => 
    p.data.id !== currentProject!.data.id && 
    p.data.tags.some(tag => currentProject!.data.tags.includes(tag))
  );

  if (similarProjects.length === 0) {
    container.innerHTML = '';
    return;
  }

  let currentIndex = 0;

  const renderNavigation = () => {
    const project = similarProjects[currentIndex];
    const commonTags = project.data.tags.filter((t: string) => currentProject!.data.tags.includes(t));
    
    container.innerHTML = `
      <div class="space-y-2">
        <p class="text-xs text-gray-600 font-medium uppercase tracking-wide">Projets similaires (${currentIndex + 1}/${similarProjects.length})</p>
        <div class="flex items-center gap-2">
          <button id="prev-similar" class="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors ${similarProjects.length === 1 ? 'opacity-50 cursor-not-allowed' : ''}" ${similarProjects.length === 1 ? 'disabled' : ''}>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          
          <div class="flex-1 p-3 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors" id="current-similar">
            <h4 class="font-medium text-gray-900 text-sm mb-1">${project.data.title}</h4>
            <div class="flex gap-1 flex-wrap">
              ${commonTags.slice(0, 3).map((tag: string) => `<span class="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded">${tag}</span>`).join('')}
            </div>
          </div>
          
          <button id="next-similar" class="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors ${similarProjects.length === 1 ? 'opacity-50 cursor-not-allowed' : ''}" ${similarProjects.length === 1 ? 'disabled' : ''}>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    // Add event listeners
    const prevBtn = document.getElementById('prev-similar');
    const nextBtn = document.getElementById('next-similar');
    const currentSimilar = document.getElementById('current-similar');

    prevBtn?.addEventListener('click', () => {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : similarProjects.length - 1;
      renderNavigation();
    });

    nextBtn?.addEventListener('click', () => {
      currentIndex = currentIndex < similarProjects.length - 1 ? currentIndex + 1 : 0;
      renderNavigation();
    });

    currentSimilar?.addEventListener('click', () => {
      const modal = document.getElementById('project-modal');
      if (modal) closeModal(modal);
      setTimeout(() => openProjectModal(project), 100);
    });
  };

  renderNavigation();
}

/**
 * Close modal
 */
function closeModal(modal: HTMLElement): void {
  modal.classList.add('hidden');
  document.body.style.overflow = 'unset';
  const zoomModal = document.getElementById('image-zoom-modal');
  zoomModal?.classList.add('hidden');
}
