// Gallery Data - Replace with your actual images
const galleryData = [
    {
        id: 1,
        title: "Andromeda Galaxy",
        description: "The closest spiral galaxy to our Milky Way, captured in stunning detail.",
        category: "galaxies",
        image: "path/to/andromeda.jpg",
        date: "December 2024",
        equipment: "16\" Newtonian, ZWO ASI2600MM Pro"
    },
    {
        id: 2,
        title: "Orion Nebula",
        description: "A stellar nursery where new stars are being born.",
        category: "nebulae",
        image: "path/to/orion.jpg",
        date: "November 2024",
        equipment: "16\" Newtonian, Ha/OIII/SII filters"
    },
    {
        id: 3,
        title: "Saturn with Rings",
        description: "The ringed planet showing its magnificent ring system.",
        category: "planets",
        image: "path/to/saturn.jpg",
        date: "October 2024",
        equipment: "16\" Newtonian, ZWO ASI174MM Mini"
    },
    {
        id: 4,
        title: "Pleiades Star Cluster",
        description: "The Seven Sisters, a beautiful open star cluster.",
        category: "stars",
        image: "path/to/pleiades.jpg",
        date: "September 2024",
        equipment: "16\" Newtonian, LRGB filters"
    },
    {
        id: 5,
        title: "Geminid Meteor Shower",
        description: "Captured during the peak of the annual meteor shower.",
        category: "events",
        image: "path/to/geminids.jpg",
        date: "December 2024",
        equipment: "Wide-field camera, 24mm lens"
    },
    {
        id: 6,
        title: "Whirlpool Galaxy",
        description: "A stunning example of interacting galaxies.",
        category: "galaxies",
        image: "path/to/whirlpool.jpg",
        date: "November 2024",
        equipment: "16\" Newtonian, LRGB filters"
    },
    {
        id: 7,
        title: "Eagle Nebula",
        description: "Home to the famous Pillars of Creation.",
        category: "nebulae",
        image: "path/to/eagle.jpg",
        date: "October 2024",
        equipment: "16\" Newtonian, Ha/OIII/SII filters"
    },
    {
        id: 8,
        title: "Jupiter with Moons",
        description: "The gas giant with its four Galilean moons visible.",
        category: "planets",
        image: "path/to/jupiter.jpg",
        date: "September 2024",
        equipment: "16\" Newtonian, ZWO ASI174MM Mini"
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
            <div class="gallery-item" data-index="${index}" data-category="${item.category}">
                <div class="gallery-item-image">
                    <div class="image-placeholder">
                        <i class="fas fa-image"></i>
                        <p>${item.title}</p>
                    </div>
                    <div class="gallery-item-overlay">
                        <i class="fas fa-expand"></i>
                    </div>
                </div>
                <div class="gallery-item-info">
                    <h3 class="gallery-item-title">${item.title}</h3>
                    <p class="gallery-item-description">${item.description}</p>
                    <div class="gallery-item-meta">
                        <span>${item.date}</span>
                        <span class="gallery-item-category">${getCategoryName(item.category)}</span>
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
        const image = filteredImages[index];
        currentImageIndex = index;

        lightboxImage.src = image.image || '';
        lightboxTitle.textContent = image.title;
        lightboxDescription.textContent = image.description;
        lightboxDate.textContent = image.date;
        lightboxEquipment.textContent = image.equipment;

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

// Utility function to add new images to the gallery
function addImageToGallery(imageData) {
    galleryData.push({
        id: galleryData.length + 1,
        ...imageData
    });
    
    if (currentCategory === 'all' || imageData.category === currentCategory) {
        renderGallery(filteredImages);
    }
}

// Example usage:
// addImageToGallery({
//     title: "New Image",
//     description: "Description of the new image",
//     category: "galaxies",
//     image: "path/to/new-image.jpg",
//     date: "January 2025",
//     equipment: "16\" Newtonian, ZWO ASI2600MM Pro"
// });
