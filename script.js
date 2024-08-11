

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


document.addEventListener('DOMContentLoaded', function () {
    new Splide('#hero-slider', {
        type    : 'loop',
        perPage : 1,
        autoplay: true,
        pagination: true,
        arrows: true,
    }).mount();
});













// const sliderData = {
//     slides: [
//         {
//             image: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/1.png?v=1705665890&width=2000",
//             title: "Womens Apparel",
//             description: "Elevate your wardrobe<br> with our limited-time<br>fashion offer!",
//             buttonText: "Explore More",
//             buttonLink: "https://veena-theme-fashion.myshopify.com/collections",
//             defaultPosition: "middle-center"
//         },
//         {
//             image: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/3.png?v=1705665898&width=2000",
//             title: "Modern Elegance",
//             description: "Step into the World of<br>Style with the<br>Latest Fashion Trends Unveiled!",
//             buttonText: "Explore More",
//             buttonLink: "https://veena-theme-fashion.myshopify.com/collections",
//             defaultPosition: "middle-left"
//         },
//         {
//             image: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/4.png?v=1705665890&width=2000",
//             title: "Trendy classic",
//             description: "Discover Signature Look:<br>Fashion Forward and<br>Fabulous!",
//             buttonText: "Shop Now",
//             buttonLink: "https://veena-theme-fashion.myshopify.com/collections",
//             defaultPosition: "middle-left"
//         }
//     ]
// };

// const positionClasses = {
//     'top-left': 'top-left',
//     'top-center': 'top-center',
//     'top-right': 'top-right',
//     'middle-left': 'middle-left',
//     'middle-center': 'middle-center',
//     'middle-right': 'middle-right',
//     'bottom-left': 'bottom-left',
//     'bottom-center': 'bottom-center',
//     'bottom-right': 'bottom-right',
// };

// let splide;

// function initializeSlider() {
//     const sliderContent = document.getElementById('slider-content');
//     const slidesHTML = sliderData.slides.map(({ image, title, description, buttonText, buttonLink, defaultPosition }, index) => `
//         <li class="splide__slide">
//             <img src="${image}" alt="Slide ${index + 1}">
//             <div class="description ${positionClasses[defaultPosition]}">
//                 <h6>${title}</h6>
//                 <p>${description}</p>
//                 <a href="${buttonLink}" class="slider-button">${buttonText}</a>
//             </div>
//         </li>
//     `).join('');

//     sliderContent.innerHTML = slidesHTML;

//     // Initialize Splide
//     splide = new Splide('#image-slider', {
//         type: 'loop',
//         perPage: 1,
//         autoplay: true,
//         pagination: true,
//     }).mount();
// }
// function updatePosition() {
//     const selectedPosition = document.getElementById('position-select').value;
//     const descriptions = document.querySelectorAll('.description');
//     descriptions.forEach(description => {
//         description.className = `description ${positionClasses[selectedPosition]}`;
//     });
// }

// function previousSlide() {
//     splide?.go('<');
// }

// function nextSlide() {
//     splide?.go('>');
// }

// // Initialize slider and set up event listeners
// document.addEventListener('DOMContentLoaded', initializeSlider);






