// Gallery Data - Replace with your actual images and videos
const galleryData = [
    {
        id: 1,
        title: "Andromeda Galaxy",
        description: "The closest spiral galaxy to our Milky Way, captured in stunning detail.",
        category: "galaxies",
        type: "image",
        src: "path/to/andromeda.jpg",
        thumbnail: "path/to/andromeda_thumb.jpg",
        date: "December 2024",
        equipment: "16\" Newtonian, ZWO ASI2600MM Pro"
    },
    {
        id: 2,
        title: "Orion Nebula",
        description: "A stellar nursery where new stars are being born.",
        category: "nebulae",
        type: "image",
        src: "path/to/orion.jpg",
        thumbnail: "path/to/orion_thumb.jpg",
        date: "November 2024",
        equipment: "16\" Newtonian, Ha/OIII/SII filters"
    },
    {
        id: 3,
        title: "Saturn with Rings",
        description: "The ringed planet showing its magnificent ring system.",
        category: "planets",
        type: "image",
        src: "path/to/saturn.jpg",
        thumbnail: "path/to/saturn_thumb.jpg",
        date: "October 2024",
        equipment: "16\" Newtonian, ZWO ASI174MM Mini"
    },
    {
        id: 4,
        title: "Pleiades Star Cluster",
        description: "The Seven Sisters, a beautiful open star cluster.",
        category: "stars",
        type: "image",
        src: "path/to/pleiades.jpg",
        thumbnail: "path/to/pleiades_thumb.jpg",
        date: "September 2024",
        equipment: "16\" Newtonian, LRGB filters"
    },
    {
        id: 5,
        title: "Geminid Meteor Shower Timelapse",
        description: "A mesmerizing timelapse captured during the peak of the annual meteor shower.",
        category: "events",
        type: "video",
        src: "path/to/geminids.mp4",
        thumbnail: "path/to/geminids_thumb.jpg",
        date: "December 2024",
        equipment: "Wide-field camera, 24mm lens"
    },
    {
        id: 6,
        title: "Whirlpool Galaxy",
        description: "A stunning example of interacting galaxies.",
        category: "galaxies",
        type: "image",
        src: "path/to/whirlpool.jpg",
        thumbnail: "path/to/whirlpool_thumb.jpg",
        date: "November 2024",
        equipment: "16\" Newtonian, LRGB filters"
    },
    {
        id: 7,
        title: "Eagle Nebula",
        description: "Home to the famous Pillars of Creation.",
        category: "nebulae",
        type: "image",
        src: "path/to/eagle.jpg",
        thumbnail: "path/to/eagle_thumb.jpg",
        date: "October 2024",
        equipment: "16\" Newtonian, Ha/OIII/SII filters"
    },
    {
        id: 8,
        title: "Jupiter Rotation Timelapse",
        description: "A fascinating timelapse showing Jupiter's rotation with its four Galilean moons.",
        category: "planets",
        type: "video",
        src: "path/to/jupiter_rotation.mp4",
        thumbnail: "path/to/jupiter_thumb.jpg",
        date: "September 2024",
        equipment: "16\" Newtonian, ZWO ASI174MM Mini"
    },
    {
        id: 9,
        title: "Moon Surface Detail",
        description: "High-resolution capture of lunar craters and surface features.",
        category: "planets",
        type: "image",
        src: "path/to/moon_detail.jpg",
        thumbnail: "path/to/moon_detail_thumb.jpg",
        date: "August 2024",
        equipment: "16\" Newtonian, ZWO ASI174MM Mini"
    },
    {
        id: 10,
        title: "Star Trail Sequence",
        description: "Beautiful star trails captured over several hours showing Earth's rotation.",
        category: "events",
        type: "video",
        src: "path/to/star_trails.mp4",
        thumbnail: "path/to/star_trails_thumb.jpg",
        date: "July 2024",
        equipment: "DSLR, 14mm wide-angle lens"
    }
];

// Gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.getElementById('galleryGrid');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDescription = document.getElementById('lightboxDescription');
    const lightboxDate = document.getElementById('lightboxDate');
    const lightboxEquipment = document.getElementById('lightboxEquipment');
    const closeLightbox = document.getElementById('closeLightbox');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentCategory = 'all';
    let currentImageIndex = 0;
    let filteredImages = [];

    // Initialize gallery
    function initGallery() {
        renderGallery(galleryData);
        setupEventListeners();
    }

    // Render gallery items
    function renderGallery(images) {
        if (images.length === 0) {
            galleryGrid.innerHTML = `
                <div class="gallery-empty">
                    <i class="fas fa-search"></i>
                    <h3>No images found</h3>
                    <p>Try selecting a different category or check back later for new images.</p>
                </div>
            `;
            return;
        }

        galleryGrid.innerHTML = images.map((item, index) => `
            <div class="gallery-item" data-index="${index}" data-category="${item.category}" data-type="${item.type}">
                <div class="gallery-item-image">
                    ${item.thumbnail ? `
                        <img src="${item.thumbnail}" alt="${item.title}" class="gallery-thumbnail" />
                        <div class="media-type-indicator ${item.type}">
                            <i class="fas ${item.type === 'video' ? 'fa-play' : 'fa-image'}"></i>
                        </div>
                    ` : `
                        <div class="image-placeholder">
                            <i class="fas ${item.type === 'video' ? 'fa-video' : 'fa-image'}"></i>
                            <p>${item.title}</p>
                        </div>
                    `}
                    <div class="gallery-item-overlay">
                        <i class="fas fa-expand"></i>
                        ${item.type === 'video' ? '<span class="media-label">Video</span>' : '<span class="media-label">Image</span>'}
                    </div>
                </div>
                <div class="gallery-item-info">
                    <h3 class="gallery-item-title">${item.title}</h3>
                    <p class="gallery-item-description">${item.description}</p>
                    <div class="gallery-item-meta">
                        <span>${item.date}</span>
                        <span class="gallery-item-category">${getCategoryName(item.category)}</span>
                        <span class="gallery-item-type ${item.type}">${item.type === 'video' ? 'Video' : 'Image'}</span>
                    </div>
                </div>
            </div>
        `).join('');

        // Add click event to gallery items
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                openLightbox(index);
            });
        });
    }

    // Get category display name
    function getCategoryName(category) {
        const categoryNames = {
            'galaxies': 'Galaxies',
            'nebulae': 'Nebulae',
            'planets': 'Planets',
            'stars': 'Star Clusters',
            'events': 'Events'
        };
        return categoryNames[category] || category;
    }

    // Filter gallery by category
    function filterGallery(category) {
        currentCategory = category;
        
        if (category === 'all') {
            filteredImages = galleryData;
        } else {
            filteredImages = galleryData.filter(item => item.category === category);
        }

        renderGallery(filteredImages);
        updateCategoryButtons();
    }

    // Update category button states
    function updateCategoryButtons() {
        categoryButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.category === currentCategory) {
                btn.classList.add('active');
            }
        });
    }

    // Open lightbox
    function openLightbox(index) {
        const item = filteredImages[index];
        currentImageIndex = index;

        // Clear previous content
        const lightboxMediaContainer = document.getElementById('lightboxMediaContainer');
        lightboxMediaContainer.innerHTML = '';

        // Create appropriate media element
        if (item.type === 'video') {
            const videoElement = document.createElement('video');
            videoElement.src = item.src || '';
            videoElement.className = 'lightbox-video';
            videoElement.controls = true;
            videoElement.autoplay = false;
            videoElement.preload = 'metadata';
            lightboxMediaContainer.appendChild(videoElement);
        } else {
            const imageElement = document.createElement('img');
            imageElement.src = item.src || '';
            imageElement.className = 'lightbox-image';
            imageElement.alt = item.title;
            lightboxMediaContainer.appendChild(imageElement);
        }

        lightboxTitle.textContent = item.title;
        lightboxDescription.textContent = item.description;
        lightboxDate.textContent = item.date;
        lightboxEquipment.textContent = item.equipment;

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close lightbox
    function closeLightboxModal() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Navigate lightbox
    function navigateLightbox(direction) {
        if (direction === 'next') {
            currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
        } else {
            currentImageIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
        }
        openLightbox(currentImageIndex);
    }

    // Setup event listeners
    function setupEventListeners() {
        // Category buttons
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const category = this.dataset.category;
                filterGallery(category);
            });
        });

        // Lightbox controls
        closeLightbox.addEventListener('click', closeLightboxModal);
        prevBtn.addEventListener('click', () => navigateLightbox('prev'));
        nextBtn.addEventListener('click', () => navigateLightbox('next'));

        // Close lightbox on background click
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightboxModal();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (!lightbox.classList.contains('active')) return;

            switch(e.key) {
                case 'Escape':
                    closeLightboxModal();
                    break;
                case 'ArrowLeft':
                    navigateLightbox('prev');
                    break;
                case 'ArrowRight':
                    navigateLightbox('next');
                    break;
            }
        });
    }

    // Initialize the gallery
    initGallery();

    // Add loading animation
    function showLoading() {
        galleryGrid.innerHTML = `
            <div class="gallery-loading">
                <i class="fas fa-spinner"></i>
                <p>Loading images...</p>
            </div>
        `;
    }

    // Simulate loading (remove this when you have real images)
    showLoading();
    setTimeout(() => {
        renderGallery(galleryData);
    }, 1000);
});

// Utility function to add new media (images or videos) to the gallery
function addMediaToGallery(mediaData) {
    // Ensure required fields are present
    const newMedia = {
        id: galleryData.length + 1,
        type: mediaData.type || 'image', // default to image if not specified
        ...mediaData
    };
    
    galleryData.push(newMedia);
    
    // Update filtered images if the new media matches current category
    if (currentCategory === 'all' || mediaData.category === currentCategory) {
        if (currentCategory === 'all') {
            filteredImages = galleryData;
        } else {
            filteredImages = galleryData.filter(item => item.category === currentCategory);
        }
        renderGallery(filteredImages);
    }
}

// Backward compatibility - alias for the old function name
function addImageToGallery(imageData) {
    addMediaToGallery({ ...imageData, type: 'image' });
}

// Example usage for images:
// addMediaToGallery({
//     title: "New Galaxy Image",
//     description: "Description of the new image",
//     category: "galaxies",
//     type: "image",
//     src: "path/to/new-image.jpg",
//     thumbnail: "path/to/new-image_thumb.jpg",
//     date: "January 2025",
//     equipment: "16\" Newtonian, ZWO ASI2600MM Pro"
// });

// Example usage for videos:
// addMediaToGallery({
//     title: "Mars Rotation Timelapse",
//     description: "Fascinating timelapse showing Mars rotation",
//     category: "planets",
//     type: "video",
//     src: "path/to/mars-rotation.mp4",
//     thumbnail: "path/to/mars-rotation_thumb.jpg",
//     date: "January 2025",
//     equipment: "16\" Newtonian, ZWO ASI174MM Mini"
// });
