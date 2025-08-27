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
        date: "June 2025",
        equipment: "Orion Starblast II 4.5 Eq, iPhone 13"
    },
    {
        id: 2,
        title: "Quarter Moon",
        description: "The moon in its first quarter phase, which is one of the best times to observe its features.",
        category: "moon",
        image: "Astro/Moon/quarter.jpeg",
        type: "image",
        date: "April 2024",
        equipment: "Orion Starblast II 4.5 Eq, iPhone 13"
    },
    {
        id: 3,
        title: "Quarter Moon 2",
        description: "Another perspective of the quarter moon showing different lunar features.",
        category: "moon",
        image: "Astro/Moon/quarter2.jpeg",
        type: "image",
        date: "June 2025",
        equipment: "Orion Starblast II 4.5 Eq, iPhone 13"
    },
    {
        id: 4,
        title: "Sun or Moon?",
        description: "Though it looks like the sun, it's actually the moon.",
        category: "moon",
        image: "Astro/Moon/moon-sun.jpeg",
        type: "image",
        date: "August 2023",
        equipment: "iPhone 13"
    },
    {
        id: 5,
        title: "Edited Moon",
        description: "Enhanced view of the moon revealing subtle surface details.",
        category: "moon",
        image: "Astro/Moon/edited-moon.jpeg",
        type: "image",
        date: "October 2023",
        equipment: "Orion Starblast II 4.5 Eq, iPhone 13 Editing"
    },
    {
        id: 6,
        title: "The Beauty of the Moon",
        description: "My personal favorite. It really captures the beauty of the moon.",
        category: "moon",
        image: "Astro/Moon/moon_copy.jpg",
        type: "image",
        date: "March 2025",
        equipment: "Orion Starblast II 4.5 Eq, iPhone 13"
    },
    {
        id: 7,
        title: "Full Moon Video",
        description: "A video of the full moon.",
        category: "moon",
        image: "Astro/Moon/moon.mov",
        type: "video",
        date: "October 2023",
        equipment: "Orion Starblast II 4.5 Eq, iPhone 13"
    },
    {
        id: 8,
        title: "Moon Cloud Video",
        description: "The moon passing through clouds in real-time.",
        category: "moon",
        image: "Astro/Moon/moon-cloud.MOV",
        type: "video",
        date: "June 2025",
        equipment: "Orion Starblast II 4.5 Eq, iPhone 13"
    },
    // Moon (additional)
    {
        id: 9,
        title: "Strawberry Moon",
        description: "The Strawberry Moon captured at peak brightness. What a shade of red!",
        category: "moon",
        image: "Astro/Moon/strawberry.jpeg",
        type: "image",
        date: "June 2025",
        equipment: "Orion Starblast II 4.5 Eq, iPhone 13"
    },
    // Star Clusters
    {
        id: 10,
        title: "Great Cluster in Hercules (M13)",
        description: "A magnificent globular cluster containing hundreds of thousands of stars, and my go-to DSO on clear nights.",
        category: "dsos",
        image: "Astro/DSOs/M13.jpeg",
        type: "image",
        date: "July 2025",
        equipment: "Orion Starblast II 4.5 Eq, iPhone 13"
    },
    {
        id: 11,
        title: "Double Cluster (h and χ Persei)",
        description: "So many stars in such a small area; well it's not actually that small.",
        category: "dsos",
        image: "Astro/DSOs/double_cluster.jpeg",
        type: "image",
        date: "July 2025",
        equipment: "Orion Starblast II 4.5 Eq, iPhone 13"
    },
    // Deep Sky Objects
    {
        id: 12,
        title: "Ring Nebula",
        description: "I guess Saturn isn’t the only one with rings.",
        category: "dsos",
        image: "Astro/DSOs/ring.jpeg",
        type: "image",
        date: "July 2025",
        equipment: "Orion Starblast II 4.5 Eq, iPhone 13"
    },
    {
        id: 13,
        title: "Dumbbell Nebula",
        description: "Lifting weights in space doesn't seem so hard!",
        category: "dsos",
        image: "Astro/DSOs/dumbell.jpeg",
        type: "image",
        date: "July 2025",
        equipment: "Orion Starblast II 4.5 Eq, iPhone 13"
    }
    ,
    // Additional DSOs
    {
        id: 14,
        title: "Globular Cluster M5",
        description: "So dim + cloudy skies! Can't seem to extract much out of this one.",
        category: "dsos",
        image: "Astro/DSOs/M5.jpeg",
        type: "image",
        date: "August 2025",
        equipment: "Orion Starblast II 4.5 Eq, iPhone 13"
    },
    {
        id: 15,
        title: "Pleiades (M45)",
        description: "The Seven Sisters open star cluster.",
        category: "dsos",
        image: "Astro/DSOs/pleiades.jpeg",
        type: "image",
        date: "October 2023",
        equipment: "Orion Starblast II 4.5 Eq, iPhone 13"
    },
    {
        id: 16,
        title: "Pleiades Video",
        description: "A short clip featuring the Pleiades region.",
        category: "dsos",
        image: "Astro/DSOs/pleiades.mov",
        type: "video",
        date: "October 2023",
        equipment: "Orion Starblast II 4.5 Eq, iPhone 13"
    },
    // Additional Moon
    {
        id: 17,
        title: "The Moon (Luna 2)",
        description: "The Moon through a powerful telescope called Luna 2 at my observatory!",
        category: "moon",
        image: "Astro/Moon/luna.jpeg",
        type: "image",
        date: "May 2025",
        equipment: "Orion Starblast II 4.5 Eq, iPhone 13"
    },
    // Eclipse
    { id: 18, title: "Eclipse",   description: "An unedited view of the solar eclipse from New Jersey.",        category: "eclipse", image: "Astro/Eclipse/eclipse.jpeg",  type: "image", date: "April 2024", equipment: "iPhone 13" },
    { id: 19, title: "Orange Eclipse", description: "Got a nice orange-brown sky from a bit of editing.",        category: "eclipse", image: "Astro/Eclipse/eclipse2.jpeg", type: "image", date: "April 2024", equipment: "iPhone 13" },
    { id: 20, title: "Pure Eclipse", description: "Turning the exposure all the way down got me this!",        category: "eclipse", image: "Astro/Eclipse/eclipse3.jpeg", type: "image", date: "April 2024", equipment: "iPhone 13" },
    { id: 21, title: "Eclipse Sky", description: "On the other hand, turning it up made it look like a gateway to another world!",        category: "eclipse", image: "Astro/Eclipse/sky.jpeg",      type: "image", date: "April 2024", equipment: "iPhone 13" },
    // Misc
    { id: 22, title: "Egypt",     description: "A beautiful sunrise in Egypt.", category: "misc",    image: "Astro/Misc/egypt.jpeg",      type: "image", date: "April 2025", equipment: "iPhone SE" },
    { id: 23, title: "Lunar Eclipse", description: "Partial lunar eclipse was only visible for a few seconds before it vanished into the trees.",   category: "misc",    image: "Astro/Misc/lunar_eclipse.jpeg", type: "image", date: "October 2023", equipment: "iPhone 13" },
    { id: 24, title: "Moon Photobomb", description: "Moon photobomb at the top left!",     category: "misc",    image: "Astro/Misc/moon_photobomb.jpeg", type: "image", date: "April 2025", equipment: "iPhone SE" },
    { id: 25, title: "Rainbow",   description: "Got a stunning view of a rainbow on a beautiful day.",             category: "misc",    image: "Astro/Misc/rainbow.jpeg",     type: "image", date: "September 2024", equipment: "iPhone 13" },
    { id: 26, title: "Full Rainbow", description: "Got another rainbow, this time from end to end. I can clearly see where the pot of gold is!",             category: "misc",    image: "Astro/Misc/rainbow2.jpeg",    type: "image", date: "May 2023", equipment: "iPhone 13" },

    { id: 27, title: "Clouds",     description: "Sometimes you realize just how beautiful the clouds are.",           category: "misc",    image: "Astro/Misc/sky2.jpeg",       type: "image", date: "September 2023", equipment: "iPhone 13" },
    { id: 28, title: "Stargazing", description: "My friend and I stargazing on a mountain!",      category: "misc",    image: "Astro/Misc/stargazing_on_mountain.jpeg", type: "image", date: "October 2024", equipment: "iPhone 13" },
    { id: 29, title: "Sunset",    description: "What a magnificent sunset!",              category: "misc",    image: "Astro/Misc/sunset.jpeg",     type: "image", date: "July 2024", equipment: "iPhone 13" },
    { id: 30, title: "Spruce Run", description: "Sunset from the Spruce Run event.", category: "misc", image: "Astro/Misc/spruce_run.jpg", type: "image", date: "August 2025", equipment: "Canon Rebel T8I" },
    // Plane
    { id: 31, title: "Caverns",   description: "I didn't know they had caverns in the sky.",        category: "plane",   image: "Astro/Plane/caverns.jpeg",    type: "image", date: "August 2025", equipment: "iPhone 13" },
    { id: 32, title: "Cloud Explosion", description: "Always finding random clouds shapes, like this one! Wonder what caused it.",        category: "plane",   image: "Astro/Plane/cloud_explosion.jpeg", type: "image", date: "July 2024", equipment: "iPhone 13" },
    { id: 33, title: "Plane+Moon", description: "Got a view of the moon through my plane window during sunset!",     category: "plane",   image: "Astro/Plane/moon.jpeg",       type: "image", date: "August 2025", equipment: "iPhone 13" },
    { id: 34, title: "Plane+Moon 2", description: "Another look at the same scenario but darker.",   category: "plane",   image: "Astro/Plane/moon2.jpeg",      type: "image", date: "August 2025", equipment: "iPhone 13" },
    { id: 35, title: "Stunning Sunset",  description: "Beautiful sunset in the sky. You can really capture some nice pictures.",      category: "plane",   image: "Astro/Plane/stunning.jpeg",   type: "image", date: "August 2025", equipment: "iPhone 13" },
    { id: 36, title: "Sunset 2", description: "Sun right at the horizon creates a streak of orange.",   category: "plane",   image: "Astro/Plane/sunset.jpeg",     type: "image", date: "August 2024", equipment: "iPhone 13" },
    { id: 37, title: "Plane Timelapse", description: "Timelapse of plane.",     category: "plane",   image: "Astro/Plane/timelapse.mov",   type: "video", date: "July 2024", equipment: "iPhone 13" },
    // Planets
    { id: 38, title: "Jupiter",   description: "Jupiter and its moons. Didn't know how to adjust exposure back then!",   category: "planets", image: "Astro/Planets/jupiter.jpeg",  type: "image", date: "September 2023", equipment: "Orion Starblast II 4.5 Eq, iPhone 13" },
    { id: 39, title: "Saturn",    description: "One of my favorite images. Captures Saturn's rings in all their glory.",   category: "planets", image: "Astro/Planets/Saturn.jpeg",  type: "image", date: "September 2023", equipment: "Orion Starblast II 4.5 Eq, iPhone 13" },
    { id: 40, title: "Venus?",     description: "Not the best image, wonder why Venus turned out like this.",     category: "planets", image: "Astro/Planets/venus.jpeg",   type: "image", date: "March 2025", equipment: "Orion Starblast II 4.5 Eq, iPhone 13" },
    // Stars
    { id: 41, title: "First Light", description: "My very first look into a telescope!", category: "stars", image: "Astro/Stars/first_light.jpeg", type: "image", date: "September 2023", equipment: "Orion Starblast II 4.5 Eq, iPhone 13" },
    { id: 42, title: "Vega", description: "The star Vega captured with SeeStar.", category: "seestar", image: "Astro/Stars/Stacked_1_Vega_30.0s_IRCUT_20250825-204456.JPG", type: "image", date: "August 2025", equipment: "SeeStar S50" },
    
    // Sky Images
    { id: 43, title: "Beautiful Milky Way", description: "A stunning view of the Milky Way galaxy stretching across the night sky.", category: "sky", image: "Astro/Sky/beautiful_milky_way.JPG", type: "image", date: "August 2025", equipment: "Canon Rebel T8I" },
    { id: 44, title: "Unedited Milky Way", description: "Raw capture of the Milky Way before any processing or editing.", category: "sky", image: "Astro/Sky/unedited_beautiful_milky_way.JPEG", type: "image", date: "August 2025", equipment: "Canon Rebel T8I" },
    { id: 45, title: "Faint Milky Way", description: "A more subtle view of the Milky Way showing its delicate structure.", category: "sky", image: "Astro/Sky/faint_milky_way.jpeg", type: "image", date: "August 2025", equipment: "iPhone 13" },
    { id: 46, title: "Faint Milky Way 2", description: "Another perspective of the faint Milky Way showing different regions.", category: "sky", image: "Astro/Sky/faint_milky_way2.jpeg", type: "image", date: "August 2025", equipment: "iPhone 13" },
    { id: 47, title: "Star Trails", description: "Exposure showing slight movement of stars across the night sky.", category: "sky", image: "Astro/Sky/star_trails.jpeg", type: "image", date: "August 2025", equipment: "iPhone 13" },
    { id: 48, title: "Car Light Trails", description: "Long exposure capturing the trails of car lights on a road and sky.", category: "sky", image: "Astro/Sky/cars_trails.jpeg", type: "image", date: "August 2025", equipment: "iPhone 13" },
    { id: 49, title: "Starry Sky", description: "A different view of the sky showing many stars.", category: "sky", image: "Astro/Sky/another_sky.jpg", type: "image", date: "August 2025", equipment: "Canon Rebel T8I" },
    
    // Objects
    { id: 52, title: "Airplane Trails", description: "An airplane captured during a long exposure!", category: "objects", image: "Astro/Objects/airplane.JPG", type: "image", date: "August 2025", equipment: "Canon Rebel T8I" },
    { id: 53, title: "Unedited Airplane Trails", description: "Raw capture before any editing.", category: "objects", image: "Astro/Objects/unedited_airplane.JPEG", type: "image", date: "August 2025", equipment: "Canon Rebel T8I" },
    { id: 54, title: "Starlink Satellites", description: "A train of Starlink satellites passing overhead.", category: "objects", image: "Astro/Objects/starlinks2.jpeg", type: "image", date: "August 2025", equipment: "iPhone 13" },
    { id: 55, title: "Starlink Video", description: "Video of Starlink satellites moving across the sky.", category: "objects", image: "Astro/Objects/starlinks.MOV", type: "video", date: "August 2025", equipment: "iPhone 13" },
    { id: 56, title: "ULA Vulcan Rocket", description: "View of the ULA Vulcan Rocket from telescope.", category: "objects", image: "Astro/Objects/rocket.jpeg", type: "image", date: "August 2025", equipment: "iPhone 13" },
    { id: 57, title: "Zoomed-In Rocket", description: "ULA Vulcan Rocket captured!", category: "objects", image: "Astro/Objects/rocket2.jpeg", type: "image", date: "August 2025", equipment: "iPhone 13" },
    
    // SeeStar Images
    { id: 58, title: "Sun", description: "The sun (and sunspot!) captured through the SeeStar telescope.", category: "seestar", image: "Astro/Seestar/sun.jpeg", type: "image", date: "August 2025", equipment: "SeeStar S50" },
    { id: 59, title: "NGC 6995 - Eastern Veil Nebula", description: "Deep sky object NGC 6995 captured with SeeStar.", category: "seestar", image: "Astro/Seestar/Stacked_11_NGC 6995_30.0s_LP_20250825-210946.JPG", type: "image", date: "August 2025", equipment: "SeeStar S50" },
    { id: 60, title: "M31 - Andromeda Galaxy", description: "The Andromeda Galaxy (M31) captured with SeeStar.", category: "seestar", image: "Astro/Seestar/Stacked_23_M 31_10.0s_IRCUT_20250822-204002.JPG", type: "image", date: "August 2025", equipment: "SeeStar S50" },
    { id: 61, title: "M13 - Hercules Cluster", description: "The Great Cluster in Hercules (M13) captured with SeeStar.", category: "seestar", image: "Astro/Seestar/Stacked_28_M 13_10.0s_IRCUT_20250822-205003.JPG", type: "image", date: "August 2025", equipment: "SeeStar S50" },
    { id: 62, title: "M8 - Lagoon Nebula", description: "The Lagoon Nebula (M8) captured with SeeStar.", category: "seestar", image: "Astro/Seestar/Stacked_15_M 8_10.0s_LP_20250822-203003.JPG", type: "image", date: "August 2025", equipment: "SeeStar S50" },
    { id: 63, title: "M27 - Dumbbell Nebula", description: "The Dumbbell Nebula (M27) captured with SeeStar.", category: "seestar", image: "Astro/Seestar/Stacked_25_M 27_10.0s_LP_20250822-213004.JPG", type: "image", date: "August 2025", equipment: "SeeStar S50" },
    { id: 64, title: "NGC 281 - Pacman Nebula", description: "The Pacman Nebula (NGC 281) captured with SeeStar.", category: "seestar", image: "Astro/Seestar/Stacked_12_NGC 281_10.0s_LP_20250822-212002.JPG", type: "image", date: "August 2025", equipment: "SeeStar S50" },
    { id: 65, title: "M101 - Pinwheel Galaxy", description: "The Pinwheel Galaxy (M101) captured with SeeStar.", category: "seestar", image: "Astro/Seestar/Stacked_31_M 101_10.0s_IRCUT_20250822-214002.JPG", type: "image", date: "August 2025", equipment: "SeeStar S50" },
    { id: 66, title: "C55 - Saturn Nebula", description: "The Saturn Nebula (C55) captured with SeeStar.", category: "seestar", image: "Astro/Seestar/Stacked_19_C 55_10.0s_IRCUT_20250822-210003.JPG", type: "image", date: "August 2025", equipment: "SeeStar S50" },
    { id: 67, title: "C14 - Double Cluster", description: "The Double Cluster (C14) captured with SeeStar.", category: "seestar", image: "Astro/Seestar/Stacked_23_C 14_10.0s_IRCUT_20250822-211003.JPG", type: "image", date: "August 2025", equipment: "SeeStar S50" },
    { id: 68, title: "M81 - Bode's Galaxy", description: "Bode's Galaxy (M81) captured with SeeStar.", category: "seestar", image: "Astro/Seestar/Stacked_26_M 81_10.0s_IRCUT_20250822-221003.JPG", type: "image", date: "August 2025", equipment: "SeeStar S50" },
    { id: 69, title: "M22 - Sagittarius Cluster", description: "The Sagittarius Cluster (M22) captured with SeeStar.", category: "seestar", image: "Astro/Seestar/Stacked_34_M 22_10.0s_IRCUT_20250822-220004.JPG", type: "image", date: "August 2025", equipment: "SeeStar S50" },
    { id: 70, title: "NGC 6572 - Blue Racquetball", description: "The Blue Racquetball Nebula (NGC 6572) captured with SeeStar.", category: "seestar", image: "Astro/Seestar/Stacked_17_NGC 6572_10.0s_IRCUT_20250822-222002.JPG", type: "image", date: "August 2025", equipment: "SeeStar S50" },
    { id: 71, title: "M51 - Whirlpool Galaxy", description: "The Whirlpool Galaxy (M51) captured with SeeStar.", category: "seestar", image: "Astro/Seestar/Stacked_18_M 51_10.0s_IRCUT_20250822-224003.JPG", type: "image", date: "August 2025", equipment: "SeeStar S50" },
    { id: 72, title: "M12 - Gumball Cluster", description: "The Gumball Cluster (M12) captured with SeeStar.", category: "seestar", image: "Astro/Seestar/Stacked_29_M 12_10.0s_IRCUT_20250822-225002.JPG", type: "image", date: "August 2025", equipment: "SeeStar S50" },
    { id: 73, title: "M20 - Trifid Nebula", description: "The Trifid Nebula (M20) captured with SeeStar.", category: "seestar", image: "Astro/Seestar/Stacked_28_M 20_10.0s_LP_20250822-215003.JPG", type: "image", date: "August 2025", equipment: "SeeStar S50" },
    { id: 74, title: "M32 - Andromeda Satellite", description: "M32, a satellite galaxy of Andromeda, captured with SeeStar.", category: "seestar", image: "Astro/Seestar/Stacked_23_M 32_10.0s_IRCUT_20250822-223002.JPG", type: "image", date: "August 2025", equipment: "SeeStar S50" },
    { id: 75, title: "M16 - Eagle Nebula", description: "The Eagle Nebula (M16) captured with SeeStar.", category: "seestar", image: "Astro/Seestar/JPEG image-46B0-B712-28-0.JPEG", type: "image", date: "August 2025", equipment: "SeeStar S50" }
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

    let currentCategory = 'moon';
    let currentImageIndex = 0;
    let filteredImages = [];
    let currentVideo = null;

    // Initialize gallery
    function initGallery() {
        try {
        filterGallery('moon');
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
            'dsos': 'DSOs',
            'eclipse': 'Eclipse',
            'misc': 'Misc',
            'moon': 'Moon',
            'plane': 'Plane',
            'planets': 'Planets',
            'stars': 'Stars',
            'sky': 'Sky',
            'objects': 'Objects',
            'seestar': 'SeeStar'
        };
        return categoryNames[category] || category;
    }

    // Filter gallery by category
    function filterGallery(category) {
        currentCategory = category;
        filteredImages = galleryData.filter(image => image.category === category);
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
            const items = filteredImages;
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
        const items = filteredImages;
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
    
    if (imageData.category === currentCategory) {
        renderGallery(filteredImages);
    }
}

// Function to add new videos to gallery (for future use)
function addVideoToGallery(videoData) {
    galleryData.push({
        id: galleryData.length + 1,
        type: 'video',
        ...videoData
    });
    
    if (videoData.category === currentCategory) {
        renderGallery(filteredImages);
    }
}
