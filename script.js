document.addEventListener('DOMContentLoaded', function() {
    // Initialize Splide slider for the alert banner
    new Splide('#alert-slider', {
        type: 'fade',
        autoplay: false,
        interval: 3000,
        pauseOnHover: false,
        arrows: true,  // Show next and previous arrows
        pagination: false,  // Disable pagination dots
    }).mount();

    // Handle the dropdown selection for content positioning
    const positionSelector = document.getElementById('position');
    const heroContent = document.getElementById('hero-content');

    positionSelector.addEventListener('change', function() {
        // Remove any existing position classes
        heroContent.className = 'hero-content';

        // Add the selected position class
        heroContent.classList.add(this.value);
    });

    // JSON data
    const siteConfig = {
        "navLinks": [
            "Shop",
            "Trends",
            "Men's",
            "Women's",
            "Blogs",
            "Contact"
        ],
        "alertMessages": [
            "Flash Sale Alert: Save Big for the Next 24 Hours!",
            "Qualify for complimentary shipping on orders totaling $50 or more."
        ]
    };

    // Create slides for alert messages
    const alertSliderList = document.querySelector('#alert-slider .splide__list');
    siteConfig.alertMessages.forEach(message => {
        const slideItem = document.createElement('li');
        slideItem.className = 'splide__slide';
        const spanElement = document.createElement('span');
        spanElement.textContent = message;
        slideItem.appendChild(spanElement);
        alertSliderList.appendChild(slideItem);
    });

    // Create navigation links
    const navContainer = document.getElementById('nav');
    siteConfig.navLinks.forEach(link => {
        const navItem = document.createElement('li');
        const linkElement = document.createElement('a');
        linkElement.href = "#";  // Add appropriate link here
        linkElement.textContent = link;
        navItem.appendChild(linkElement);
        navContainer.appendChild(navItem);
    });

    // JavaScript to handle custom slide effect (if needed)
    const slides = document.querySelectorAll('.slide-text');
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    rightButton?.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    leftButton?.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    // Initialize with the first slide visible
    if (slides.length > 0) {
        showSlide(currentSlide);
    }
});
// JavaScript for Search Popup
document.querySelector('.fa-search').addEventListener('click', function() {
    document.getElementById('search-popup').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('search-popup').style.display = 'none';
});

// JavaScript for Hero Content Positioning
document.getElementById('position').addEventListener('change', function() {
    const heroContent = document.getElementById('hero-content');
    heroContent.className = ''; // Clear existing classes
    heroContent.classList.add(this.value);
});



// document.addEventListener('DOMContentLoaded', function () {
//     // Fetch JSON data
//     fetch('path/to/your/data.json')
//         .then(response => response.json())
//         .then(data => {
//             const splideList = document.querySelector('#hero-slider .splide__list');

//             data.slides.forEach(slide => {
//                 const slideItem = document.createElement('li');
//                 slideItem.className = 'splide__slide';
//                 slideItem.innerHTML = `
//                     <section class="hero ${slide.class}">
//                         <div class="hero-content ${positionClass}">
//                             <ul class="hero-small-text">
//                                 <li class="tag">${slide.tag}</li>
//                             </ul>
//                             <h1>${slide.headline}</h1>
//                             <a href="${slide.buttonLink}" class="btn">${slide.buttonText}</a>
//                         </div>
//                     </section>
//                 `;
//                 splideList.appendChild(slideItem);
//             });

//             new Splide('#hero-slider', {
//                 type: 'fade',
//                 autoplay: true,
//                 interval: 4000,
//                 arrows: true,
//                 pagination: false
//             }).mount();
//         });
// });



