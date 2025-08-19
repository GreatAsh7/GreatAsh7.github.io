// Gallery Data - Updated with actual available files
const galleryData = [
    // Moon Images
    {
        id: 1,
        title: "Moon Craters",
        description: "Detailed view of lunar craters showing the moon's ancient impact history.",
        category: "moon",
        image: "Astro/Moon/craters.jpeg",
        type: "image",
        date: "November 2024",
        equipment: "26\" Newtonian, High-resolution camera"
    },
    {
        id: 2,
        title: "Quarter Moon",
        description: "The moon in its first quarter phase, revealing beautiful surface details.",
        category: "moon",
        image: "Astro/Moon/quarter.jpeg",
        type: "image",
        date: "October 2024",
        equipment: "26\" Newtonian, LRGB filters"
    },
    {
        id: 3,
        title: "Quarter Moon Phase 2",
        description: "Another perspective of the quarter moon showing different lunar features.",
        category: "moon",
        image: "Astro/Moon/quarter2.jpeg",
        type: "image",
        date: "September 2024",
        equipment: "26\" Newtonian, High-resolution imaging"
    },
    {
        id: 4,
        title: "Moon and Sun",
        description: "A rare capture showing both the moon and sun in the same frame.",
        category: "moon",
        image: "Astro/Moon/moon-sun.jpeg",
        type: "image",
        date: "May 2024",
        equipment: "26\" Newtonian, Special filters"
    },
    {
        id: 5,
        title: "Edited Moon",
        description: "Enhanced view of the moon revealing subtle surface details.",
        category: "moon",
        image: "Astro/Moon/edited-moon.jpeg",
        type: "image",
        date: "April 2024",
        equipment: "26\" Newtonian, Advanced processing"
    },
    {
        id: 6,
        title: "Moon Copy",
        description: "Another beautiful capture of our closest celestial neighbor.",
        category: "moon",
        image: "Astro/Moon/moon_copy.jpg",
        type: "image",
        date: "March 2024",
        equipment: "26\" Newtonian, Standard imaging"
    },
    {
        id: 7,
        title: "Moon Video",
        description: "A dynamic view of the moon captured in motion.",
        category: "moon",
        image: "Astro/Moon/moon.mov",
        type: "video",
        date: "February 2024",
        equipment: "26\" Newtonian, Video capture"
    },
    {
        id: 8,
        title: "Moon Cloud Video",
        description: "The moon passing through clouds in real-time.",
        category: "moon",
        image: "Astro/Moon/moon-cloud.MOV",
        type: "video",
        date: "January 2024",
        equipment: "26\" Newtonian, Video capture"
    },
    // Moon (additional)
    {
        id: 9,
        title: "Strawberry Moon",
        description: "The Strawberry Moon captured at peak brightness.",
        category: "moon",
        image: "Astro/Moon/strawberry.jpeg",
        type: "image",
        date: "June 2024",
        equipment: "26\" Newtonian, Color filters"
    },
    // Star Clusters
    {
        id: 10,
        title: "Great Cluster in Hercules",
        description: "A magnificent globular cluster containing hundreds of thousands of stars.",
        category: "dsos",
        image: "Astro/DSOs/M13.jpeg",
        type: "image",
        date: "August 2024",
        equipment: "26\" Newtonian, LRGB filters"
    },
    {
        id: 11,
        title: "Double Cluster (h and χ Persei)",
        description: "A striking pair of open clusters in Perseus.",
        category: "dsos",
        image: "Astro/DSOs/double_cluster.jpeg",
        type: "image",
        date: "July 2024",
        equipment: "26\" Newtonian, LRGB filters"
    },
    // Deep Sky Objects
    {
        id: 12,
        title: "Ring Nebula",
        description: "A beautiful planetary nebula in the constellation Lyra.",
        category: "dsos",
        image: "Astro/DSOs/ring.jpeg",
        type: "image",
        date: "June 2024",
        equipment: "26\" Newtonian, OIII/Ha filters"
    },
    {
        id: 13,
        title: "Dumbbell Nebula",
        description: "A stunning planetary nebula in the constellation Vulpecula.",
        category: "dsos",
        image: "Astro/DSOs/dumbell.jpeg",
        type: "image",
        date: "May 2024",
        equipment: "26\" Newtonian, OIII/Ha filters"
    }
    ,
    // Additional DSOs
    {
        id: 14,
        title: "Globular Cluster M5",
        description: "A bright globular cluster in Serpens.",
        category: "dsos",
        image: "Astro/DSOs/M5.jpeg",
        type: "image",
        date: "May 2024",
        equipment: "26\" Newtonian, LRGB filters"
    },
    {
        id: 15,
        title: "Pleiades (M45)",
        description: "The Seven Sisters open star cluster.",
        category: "dsos",
        image: "Astro/DSOs/pleiades.jpeg",
        type: "image",
        date: "January 2024",
        equipment: "Wide-field optics"
    },
    {
        id: 16,
        title: "Pleiades Video",
        description: "A short clip featuring the Pleiades region.",
        category: "dsos",
        image: "Astro/DSOs/pleiades.mov",
        type: "video",
        date: "January 2024",
        equipment: "Wide-field optics, video capture"
    },
    // Additional Moon
    {
        id: 17,
        title: "Luna",
        description: "A crisp capture of the lunar surface.",
        category: "moon",
        image: "Astro/Moon/luna.jpeg",
        type: "image",
        date: "Various",
        equipment: "26\" Newtonian"
    },
    // Eclipse
    { id: 18, title: "Eclipse",   description: "Solar eclipse.",        category: "eclipse", image: "Astro/Eclipse/eclipse.jpeg",  type: "image", date: "", equipment: "" },
    { id: 19, title: "Eclipse 2", description: "Solar eclipse.",        category: "eclipse", image: "Astro/Eclipse/eclipse2.jpeg", type: "image", date: "", equipment: "" },
    { id: 20, title: "Eclipse 3", description: "Solar eclipse.",        category: "eclipse", image: "Astro/Eclipse/eclipse3.jpeg", type: "image", date: "", equipment: "" },
    { id: 21, title: "Eclipse Sky", description: "Eclipse sky.",        category: "eclipse", image: "Astro/Eclipse/sky.jpeg",      type: "image", date: "", equipment: "" },
    // Misc
    { id: 22, title: "Egypt",     description: "Night sky over Egypt.", category: "misc",    image: "Astro/Misc/egypt.jpeg",      type: "image", date: "", equipment: "" },
    { id: 23, title: "Lunar Eclipse", description: "Lunar eclipse.",   category: "misc",    image: "Astro/Misc/lunar_eclipse.jpeg", type: "image", date: "", equipment: "" },
    { id: 24, title: "Moon Photobomb", description: "Photobomb.",     category: "misc",    image: "Astro/Misc/moon_photobomb.jpeg", type: "image", date: "", equipment: "" },
    { id: 25, title: "Rainbow",   description: "Rainbow.",             category: "misc",    image: "Astro/Misc/rainbow.jpeg",     type: "image", date: "", equipment: "" },
    { id: 26, title: "Rainbow 2", description: "Rainbow.",             category: "misc",    image: "Astro/Misc/rainbow2.jpeg",    type: "image", date: "", equipment: "" },
    { id: 27, title: "Rocket",    description: "Rocket.",              category: "misc",    image: "Astro/Misc/rocket.jpeg",      type: "image", date: "", equipment: "" },
    { id: 28, title: "Rocket 2",  description: "Rocket.",              category: "misc",    image: "Astro/Misc/rocket2.jpeg",     type: "image", date: "", equipment: "" },
    { id: 29, title: "Sky 2",     description: "Sky scene.",           category: "misc",    image: "Astro/Misc/sky2.jpeg",       type: "image", date: "", equipment: "" },
    { id: 30, title: "Stargazing", description: "On a mountain.",      category: "misc",    image: "Astro/Misc/stargazing_on_mountain.jpeg", type: "image", date: "", equipment: "" },
    { id: 31, title: "Sunset",    description: "Sunset.",              category: "misc",    image: "Astro/Misc/sunset.jpeg",     type: "image", date: "", equipment: "" },
    // Plane
    { id: 32, title: "Caverns",   description: "Aerial scene.",        category: "plane",   image: "Astro/Plane/caverns.jpeg",    type: "image", date: "", equipment: "" },
    { id: 33, title: "Cloud Explosion", description: "Clouds.",        category: "plane",   image: "Astro/Plane/cloud_explosion.jpeg", type: "image", date: "", equipment: "" },
    { id: 34, title: "Plane Moon", description: "Plane and Moon.",     category: "plane",   image: "Astro/Plane/moon.jpeg",       type: "image", date: "", equipment: "" },
    { id: 35, title: "Plane Moon 2", description: "Plane and Moon.",   category: "plane",   image: "Astro/Plane/moon2.jpeg",      type: "image", date: "", equipment: "" },
    { id: 36, title: "Stunning",  description: "Stunning skies.",      category: "plane",   image: "Astro/Plane/stunning.jpeg",   type: "image", date: "", equipment: "" },
    { id: 37, title: "Sunset (Plane)", description: "Sunset above.",   category: "plane",   image: "Astro/Plane/sunset.jpeg",     type: "image", date: "", equipment: "" },
    { id: 38, title: "Plane Timelapse", description: "Timelapse.",     category: "plane",   image: "Astro/Plane/timelapse.mov",   type: "video", date: "", equipment: "" },
    // Planets
    { id: 39, title: "Jupiter",   description: "Jupiter and bands.",   category: "planets", image: "Astro/Planets/jupiter.jpeg",  type: "image", date: "", equipment: "" },
    { id: 40, title: "Saturn",    description: "Saturn with rings.",   category: "planets", image: "Astro/Planets/Saturn.jpeg",  type: "image", date: "", equipment: "" },
    { id: 41, title: "Venus",     description: "Brilliant Venus.",     category: "planets", image: "Astro/Planets/venus.jpeg",   type: "image", date: "", equipment: "" },
    // Stars
    { id: 42, title: "First Light", description: "First light capture.", category: "stars", image: "Astro/Stars/first_light.jpeg", type: "image", date: "", equipment: "" }
];

// Gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.getElementById('galleryGrid');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const categoryContainer = document.getElementById('categoryContainer');
    const categoryLeftArrow = document.getElementById('categoryLeftArrow');
    const categoryRightArrow = document.getElementById('categoryRightArrow');
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
    let currentVideo = null;

    // Initialize gallery
    function initGallery() {
        try {
        renderGallery(galleryData);
        setupEventListeners();
            console.log('Gallery initialized successfully');
        } catch (error) {
            console.error('Error initializing gallery:', error);
        }
    }

    // Render gallery items
    function renderGallery(images) {
        if (images.length === 0) {
            galleryGrid.innerHTML = `
                <div class="gallery-empty">
                    <i class="fas fa-image"></i>
                    <h3>No images found</h3>
                    <p>No images available for this category.</p>
                </div>
            `;
            return;
        }

        galleryGrid.innerHTML = images.map((item, index) => {
            const isVideo = item.type === 'video';
            const fileExtension = item.image.split('.').pop().toLowerCase();
            const isVideoFile = ['mp4', 'mov', 'avi', 'webm', 'mkv'].includes(fileExtension);
            
            // Use video type if file extension indicates video, otherwise use specified type
            const actualType = isVideoFile ? 'video' : (item.type || 'image');
            
            return `
            <div class="gallery-item" onclick="openLightbox(${index})">
                <div class="gallery-item-image">
                        ${actualType === 'video' ? `
                            <video src="${item.image}" muted loop>
                                <source src="${item.image}" type="video/${fileExtension}">
                                Your browser does not support the video tag.
                            </video>
                            <div class="video-overlay">
                                <i class="fas fa-play"></i>
                            </div>
                        ` : `
                            <img src="${item.image}" alt="${item.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        `}
                    <div class="gallery-item-overlay" style="display: none;">
                            <i class="fas fa-${actualType === 'video' ? 'play' : 'expand'}"></i>
                    </div>
                </div>
                <div class="gallery-item-info">
                        <h3 class="gallery-item-title">${item.title}</h3>
                        <p class="gallery-item-description">${item.description}</p>
                    <div class="gallery-item-meta">
                            <span>${item.date}</span>
                            <span class="gallery-item-category">${getCategoryName(item.category)}</span>
                            <span class="gallery-item-type">${actualType === 'video' ? 'Video' : 'Image'}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Get category display name
    function getCategoryName(category) {
        const categoryNames = {
            'all': 'All Images',
            'dsos': 'DSOs',
            'eclipse': 'Eclipse',
            'misc': 'Misc',
            'moon': 'Moon',
            'plane': 'Plane',
            'planets': 'Planets',
            'stars': 'Stars'
        };
        return categoryNames[category] || category;
    }

    // Filter gallery by category
    function filterGallery(category) {
        currentCategory = category;
        if (category === 'all') {
            filteredImages = galleryData;
        } else {
            filteredImages = galleryData.filter(image => image.category === category);
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

    // Update category navigation arrows
    function updateCategoryArrows() {
        if (!categoryContainer || !categoryLeftArrow || !categoryRightArrow) return;
        
        const scrollLeft = categoryContainer.scrollLeft;
        const scrollWidth = categoryContainer.scrollWidth;
        const clientWidth = categoryContainer.clientWidth;
        
        // Show/hide left arrow
        if (scrollLeft <= 0) {
            categoryLeftArrow.classList.add('disabled');
        } else {
            categoryLeftArrow.classList.remove('disabled');
        }
        
        // Show/hide right arrow
        if (scrollLeft >= scrollWidth - clientWidth - 1) {
            categoryRightArrow.classList.add('disabled');
        } else {
            categoryRightArrow.classList.remove('disabled');
        }
    }

    // Open lightbox
    function openLightbox(index) {
        try {
            const items = currentCategory === 'all' ? galleryData : filteredImages;
            const item = items[index];
        currentImageIndex = index;
        
            const fileExtension = item.image.split('.').pop().toLowerCase();
            const isVideoFile = ['mp4', 'mov', 'avi', 'webm', 'mkv'].includes(fileExtension);
            const actualType = isVideoFile ? 'video' : (item.type || 'image');
            
            // Clear previous content
            lightboxImage.innerHTML = '';
            
            if (actualType === 'video') {
                // Create video element
                const video = document.createElement('video');
                video.src = item.image;
                video.controls = true;
                video.autoplay = false;
                video.muted = true; // Mute all videos by default
                video.style.width = '100%';
                video.style.height = 'auto';
                video.style.maxHeight = '70vh';
                video.style.objectFit = 'contain';
                // No brightness modification - using default
                
                // Add video event listeners
                video.addEventListener('loadedmetadata', () => {
                    // Video is ready
                });
                
                video.addEventListener('error', (e) => {
                    console.error('Video error:', e);
                    // Fallback to image if video fails
                    const img = document.createElement('img');
                    img.src = item.image;
                    img.alt = item.title;
                    img.style.width = '100%';
                    img.style.height = 'auto';
                    img.style.maxHeight = '70vh';
                    img.style.objectFit = 'contain';
                    lightboxImage.appendChild(img);
                });
                
                lightboxImage.appendChild(video);
                currentVideo = video;
            } else {
                // Create image element
                const img = document.createElement('img');
                img.src = item.image;
                img.alt = item.title;
                img.style.width = '100%';
                img.style.height = 'auto';
                img.style.maxHeight = '70vh';
                img.style.objectFit = 'contain';
                
                // Add image event listeners
                img.addEventListener('load', () => {
                    // Image loaded successfully
                });
                
                img.addEventListener('error', (e) => {
                    console.error('Image error:', e);
                    // Show error message
                    lightboxImage.innerHTML = `
                        <div style="display: flex; align-items: center; justify-content: center; height: 200px; color: #ff6b6b; font-size: 1.2rem;">
                            <i class="fas fa-exclamation-triangle"></i>
                            <span style="margin-left: 10px;">Image not found</span>
                        </div>
                    `;
                });
                
                lightboxImage.appendChild(img);
                currentVideo = null;
            }
            
            lightboxTitle.textContent = item.title;
            lightboxDescription.textContent = item.description;
            lightboxDate.textContent = item.date;
            lightboxEquipment.textContent = item.equipment;
            
            // Show lightbox immediately
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        } catch (error) {
            console.error('Error opening lightbox:', error);
        }
    }

    // Make openLightbox globally accessible
    window.openLightbox = openLightbox;

    // Close lightbox
    function closeLightboxModal() {
        // Pause any playing video
        if (currentVideo) {
            currentVideo.pause();
            currentVideo = null;
        }
        
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Navigate lightbox
    function navigateLightbox(direction) {
        const items = currentCategory === 'all' ? galleryData : filteredImages;
        if (direction === 'prev') {
            currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : items.length - 1;
        } else {
            currentImageIndex = currentImageIndex < items.length - 1 ? currentImageIndex + 1 : 0;
        }
        openLightbox(currentImageIndex);
    }

    // Setup event listeners
    function setupEventListeners() {
        // Category button clicks
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterGallery(btn.dataset.category);
            });
        });

        // Category navigation arrows
        if (categoryLeftArrow && categoryRightArrow) {
            categoryLeftArrow.addEventListener('click', () => {
                categoryContainer.scrollBy({ left: -200, behavior: 'smooth' });
                updateCategoryArrows();
            });

            categoryRightArrow.addEventListener('click', () => {
                categoryContainer.scrollBy({ left: 200, behavior: 'smooth' });
                updateCategoryArrows();
            });

            // Update arrows on scroll
            categoryContainer.addEventListener('scroll', updateCategoryArrows);
            
            // Initial arrow state
            updateCategoryArrows();
        }

        // Lightbox controls
        closeLightbox.addEventListener('click', closeLightboxModal);
        prevBtn.addEventListener('click', () => navigateLightbox('prev'));
        nextBtn.addEventListener('click', () => navigateLightbox('next'));

        // Close lightbox on background click
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightboxModal();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
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

    // Show loading state
    function showLoading() {
        galleryGrid.innerHTML = `
            <div class="gallery-loading">
                <i class="fas fa-spinner"></i>
                <p>Loading images...</p>
            </div>
        `;
    }

    // Initialize the gallery
    initGallery();
});

// Function to add new images to gallery (for future use)
function addImageToGallery(imageData) {
    galleryData.push({
        id: galleryData.length + 1,
        type: 'image', // Default to image type
        ...imageData
    });
    
    if (currentCategory === 'all' || imageData.category === currentCategory) {
        renderGallery(currentCategory === 'all' ? galleryData : filteredImages);
    }
}

// Function to add new videos to gallery (for future use)
function addVideoToGallery(videoData) {
    galleryData.push({
        id: galleryData.length + 1,
        type: 'video',
        ...videoData
    });
    
    if (currentCategory === 'all' || videoData.category === currentCategory) {
        renderGallery(currentCategory === 'all' ? galleryData : filteredImages);
    }
}
