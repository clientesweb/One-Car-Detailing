document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.getElementById('main-header');
    const servicesGrid = document.getElementById('servicesGrid');
    const galleryGrid = document.getElementById('galleryGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const contactForm = document.getElementById('contactForm');
    const preloader = document.getElementById('preloader');
    const heroSlider = document.getElementById('hero-slider');
    const adSlider = document.getElementById('adSlider');
    const topBannerSlider = document.querySelector('.top-banner-slider');
    let topBannerCurrentSlide = 0;

    // Preloader
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 2000);
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            mobileMenu.classList.add('hidden');
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('shadow-md', 'bg-opacity-90');
        } else {
            header.classList.remove('shadow-md', 'bg-opacity-90');
        }
    });

    // Services data
    const services = [
        {
            title: "Detallado Interior",
            description: "Limpieza profunda y desinfección del interior de tu vehículo para una sensación fresca y como nueva.",
            image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        },
        {
            title: "Detallado Exterior",
            description: "Restauramos el brillo de tu auto con nuestro servicio de detallado exterior completo.",
            image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            title: "Encerado Cerámico",
            description: "Protege la pintura de tu vehículo con nuestro servicio de encerado cerámico de larga duración.",
            image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        },
        {
            title: "Corrección de Pintura",
            description: "Eliminamos rayones y marcas de remolino para restaurar el acabado perfecto de tu auto.",
            image: "https://images.unsplash.com/photo-1612570158821-4503900049b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        }
    ];

    // Populate services grid
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover-scale';
        serviceCard.innerHTML = `
            <img src="${service.image}" alt="${service.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">${service.title}</h3>
                <p class="text-gray-600 mb-4">${service.description}</p>
                <a href="https://wa.me/522201929514?text=Estoy%20interesado%20en%20su%20servicio%20de%20${encodeURIComponent(service.title)}" class="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300" target="_blank" rel="noopener noreferrer">Reservar Ahora</a>
            </div>
        `;
        servicesGrid.appendChild(serviceCard);
    });

    // Gallery data
    const galleryItems = [
        { image: "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", category: "interior" },
        { image: "https://images.unsplash.com/photo-1600964373031-f0b65565f354?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", category: "exterior" },
        { image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", category: "ceramic" },
        { image: "https://images.unsplash.com/photo-1612570158821-4503900049b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", category: "paint" },
        { image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80", category: "interior" },
        { image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", category: "exterior" }
    ];

    // Populate gallery grid
    function populateGallery(items) {
        galleryGrid.innerHTML = '';
        items.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover-scale';
            galleryItem.innerHTML = `
                <img src="${item.image}" alt="Elemento de galería" class="w-full h-64 object-cover">
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <span class="text-white text-lg font-semibold">Ver</span>
                </div>
            `;
            galleryGrid.appendChild(galleryItem);
        });
    }

    populateGallery(galleryItems);

    // Gallery filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.textContent.toLowerCase();
            filterButtons.forEach(btn => btn.classList.remove('active', 'bg-gray-800', 'text-white'));
            button.classList.add('active', 'bg-gray-800', 'text-white');

            const filteredItems = filter === 'todos' 
                ? galleryItems 
                : galleryItems.filter(item => item.category === filter);
            
            populateGallery(filteredItems);
        });
    });

    // Contact form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí normalmente enviarías los datos del formulario a un servidor
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });

    // Hero slider
    const heroImages = [
        "https://images.unsplash.com/photo-1600964373031-f0b65565f354?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    ];

    let currentHeroIndex = 0;

    function updateHeroSlider() {
        heroSlider.style.backgroundImage = `url('${heroImages[currentHeroIndex]}')`;
        heroSlider.style.backgroundSize = 'cover';
        heroSlider.style.backgroundPosition = 'center';
        currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
    }

    updateHeroSlider();
    setInterval(updateHeroSlider, 5000);

    // Ad banner slider
    const ads = [
        { image: "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Oferta Especial", description: "20% de descuento en detallado completo" },
        { image: "https://images.unsplash.com/photo-1600964373031-f0b65565f354?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Nuevo Servicio", description: "Encerado cerámico ahora disponible" },
        { image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Paquete de Temporada", description: "Detallado interior + exterior por $1999" }
    ];

    let currentAdIndex = 0;

    function updateAdSlider() {
        currentAdIndex = (currentAdIndex + 1) % ads.length;
        adSlider.style.transform = `translateX(-${currentAdIndex * 100}%)`;
    }

    adSlider.innerHTML = ads.map(ad => `
        <div class="flex-shrink-0 w-full">
            <div class="flex items-center bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl">
                <img src="${ad.image}" alt="${ad.title}" class="w-1/2 h-64 object-cover">
                <div class="w-1/2 p-6">
                    <h3 class="text-2xl font-semibold mb-2">${ad.title}</h3>
                    <p class="text-gray-600 mb-4">${ad.description}</p>
                    <a href="#contact" class="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300">Reservar Ahora</a>
                </div>
            </div>
        </div>
    `).join('');
    adSlider.style.display = 'flex';
    adSlider.style.transition = 'transform 0.5s ease-in-out';
updateAdSlider();
    setInterval(updateAdSlider, 5000);

    // Intersection Observer for fade-in effect
    const fadeElems = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElems.forEach(elem => {
        fadeObserver.observe(elem);
    });

    function updateTopBannerSlider() {
        topBannerCurrentSlide = (topBannerCurrentSlide + 1) % 3;
        topBannerSlider.style.transform = `translateX(-${topBannerCurrentSlide * 100}%)`;
    }

    setInterval(updateTopBannerSlider, 5000);
});

