// Experiences functionality
document.addEventListener('DOMContentLoaded', function() {
    // Toggle experience content
    window.toggleExperience = function(button) {
        const experienceCard = button.closest('.experience-card');
        const fullText = experienceCard.querySelector('.experience-full-text');
        const isExpanded = fullText.style.display !== 'none';
        
        if (isExpanded) {
            fullText.style.display = 'none';
            button.classList.remove('expanded');
            button.innerHTML = 'Read More <i class="fas fa-chevron-down"></i>';
        } else {
            fullText.style.display = 'block';
            button.classList.add('expanded');
            button.innerHTML = 'Read Less <i class="fas fa-chevron-up"></i>';
            
            // Smooth scroll to the expanded content
            setTimeout(() => {
                fullText.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }, 100);
        }
    };

    // Add animation to experience cards
    const experienceCards = document.querySelectorAll('.experience-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    experienceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });

    // Add hover effects to mini gallery images
    const miniImages = document.querySelectorAll('.mini-image');
    miniImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Removed parallax effect for experience images to prevent unwanted movement

    // Add typing effect to experience titles
    const experienceTitles = document.querySelectorAll('.experience-title');
    experienceTitles.forEach((title, index) => {
        const text = title.textContent;
        title.textContent = '';
        title.style.borderRight = '2px solid #00d4ff';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            } else {
                title.style.borderRight = 'none';
            }
        };
        
        // Stagger the typing effect
        setTimeout(typeWriter, 1000 + (index * 500));
    });

    // Add category filtering (if needed in the future)
    function filterExperiences(category) {
        const cards = document.querySelectorAll('.experience-card');
        cards.forEach(card => {
            const cardCategory = card.querySelector('.experience-category').textContent.toLowerCase();
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Add search functionality (if needed in the future)
    function searchExperiences(query) {
        const cards = document.querySelectorAll('.experience-card');
        const searchTerm = query.toLowerCase();
        
        cards.forEach(card => {
            const title = card.querySelector('.experience-title').textContent.toLowerCase();
            const description = card.querySelector('.experience-excerpt').textContent.toLowerCase();
            const content = card.querySelector('.experience-full-text').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm) || content.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Add share functionality
    function shareExperience(experienceId) {
        if (navigator.share) {
            navigator.share({
                title: 'Astronomy Experience',
                text: 'Check out this amazing astronomy experience!',
                url: window.location.href
            });
        } else {
            // Fallback: copy to clipboard
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                alert('Link copied to clipboard!');
            });
        }
    }

    // Add like/bookmark functionality (if needed in the future)
    function toggleLike(button) {
        button.classList.toggle('liked');
        const icon = button.querySelector('i');
        if (button.classList.contains('liked')) {
            icon.className = 'fas fa-heart';
            icon.style.color = '#ff6b6b';
        } else {
            icon.className = 'far fa-heart';
            icon.style.color = '#b0b0b0';
        }
    }

    // Add comment functionality (if needed in the future)
    function addComment(experienceId, comment) {
        // This would typically involve sending data to a server
        console.log(`Adding comment to experience ${experienceId}: ${comment}`);
    }

    // Add social media sharing
    function shareToSocial(platform, experienceId) {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent('Check out this amazing astronomy experience!');
        
        const shareUrls = {
            twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
        };
        
        if (shareUrls[platform]) {
            window.open(shareUrls[platform], '_blank', 'width=600,height=400');
        }
    }

    // Add print functionality
    function printExperience(experienceId) {
        const printWindow = window.open('', '_blank');
        const experienceCard = document.querySelector(`[data-experience-id="${experienceId}"]`);
        
        if (experienceCard) {
            printWindow.document.write(`
                <html>
                    <head>
                        <title>Astronomy Experience</title>
                        <style>
                            body { font-family: Arial, sans-serif; margin: 20px; }
                            h1 { color: #00d4ff; }
                            .meta { color: #666; margin-bottom: 20px; }
                            .content { line-height: 1.6; }
                        </style>
                    </head>
                    <body>
                        ${experienceCard.innerHTML}
                    </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();
        }
    }

    // Add keyboard navigation for experience cards
    document.addEventListener('keydown', function(e) {
        const activeElement = document.activeElement;
        const experienceCards = document.querySelectorAll('.experience-card');
        const currentIndex = Array.from(experienceCards).indexOf(activeElement);
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (currentIndex < experienceCards.length - 1) {
                    experienceCards[currentIndex + 1].focus();
                }
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (currentIndex > 0) {
                    experienceCards[currentIndex - 1].focus();
                }
                break;
            case 'Enter':
            case ' ':
                if (activeElement.classList.contains('experience-card')) {
                    e.preventDefault();
                    const button = activeElement.querySelector('.read-more-btn');
                    if (button) {
                        button.click();
                    }
                }
                break;
        }
    });

    // Make experience cards focusable
    experienceCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.style.outline = 'none';
        
        card.addEventListener('focus', function() {
            this.style.borderColor = '#00d4ff';
            this.style.boxShadow = '0 0 0 2px rgba(0, 212, 255, 0.3)';
        });
        
        card.addEventListener('blur', function() {
            this.style.borderColor = 'rgba(0, 212, 255, 0.2)';
            this.style.boxShadow = 'none';
        });
    });

    // Add loading animation for images (when you add real images)
    function preloadExperienceImages() {
        const imageUrls = [
            // Add your actual experience image URLs here
            // 'path/to/experience1.jpg',
            // 'path/to/experience2.jpg',
            // 'path/to/experience3.jpg'
        ];
        
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }

    // Initialize image preloading
    preloadExperienceImages();
});
