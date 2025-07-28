/**
 * C4 LOGÍSTICA Y TRANSPORTE - MAIN JAVASCRIPT
 * =============================================
 */

// Configuration
const CONFIG = {
  whatsapp: {
    number: '573007377368',
    messages: {
      visit: 'Hola, me interesa agendar una visita a sus instalaciones',
      contact: 'Hola, me interesa conocer más sobre sus servicios logísticos',
      quote:
        'Hola, me gustaría solicitar una cotización para servicios logísticos',
    },
  },
  maps: {
    center: { lat: 6.2442, lng: -75.5812 }, // Km. 5 Autopista Medellín-Bogotá (approximate)
    zoom: 15,
  },
  animation: {
    observerOptions: {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    },
  },
};

/**
 * DOM Elements
 */
const elements = {
  header: document.getElementById('header'),
  heroSection: document.getElementById('hero'),
  navLinks: document.querySelectorAll('a[href^="#"]'),
  whatsappButtons: document.querySelectorAll('.btn--whatsapp'),
  videoPlayButton: document.querySelector('.video-container__play-btn'),
  mapContainer: document.getElementById('map'),
  observableElements: document.querySelectorAll(
    'section, .service-card, .pillar'
  ),
};

/**
 * Utility Functions
 */
const utils = {
  /**
   * Debounce function to limit function calls
   */
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  /**
   * Throttle function to limit function calls
   */
  throttle: (func, limit) => {
    let lastFunc;
    let lastRan;
    return function (...args) {
      if (!lastRan) {
        func.apply(this, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(
          () => {
            if (Date.now() - lastRan >= limit) {
              func.apply(this, args);
              lastRan = Date.now();
            }
          },
          limit - (Date.now() - lastRan)
        );
      }
    };
  },

  /**
   * Check if element is in viewport
   */
  isInViewport: (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  /**
   * Generate WhatsApp URL with message
   */
  generateWhatsAppURL: (message) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${CONFIG.whatsapp.number}?text=${encodedMessage}`;
  },
};

/**
 * Header Scroll Handler
 */
const headerScrollHandler = () => {
  const { header } = elements;
  if (!header) return;

  const handleScroll = utils.throttle(() => {
    const scrolled = window.scrollY > 100;
    header.classList.toggle('scrolled', scrolled);
  }, 100);

  window.addEventListener('scroll', handleScroll);
};

/**
 * Smooth Scrolling
 */
const smoothScrolling = () => {
  elements.navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = elements.header?.offsetHeight || 70;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
};

/**
 * Intersection Observer for Animations
 */
const animationObserver = () => {
  if (!window.IntersectionObserver) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        // Unobserve element after animation
        observer.unobserve(entry.target);
      }
    });
  }, CONFIG.animation.observerOptions);

  elements.observableElements.forEach((element) => {
    observer.observe(element);
  });
};

/**
 * WhatsApp Integration
 */
const whatsappIntegration = () => {
  elements.whatsappButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      // Determine message type based on button context
      let messageType = 'contact';
      if (button.closest('.hero')) {
        messageType = 'visit';
      } else if (button.closest('.footer')) {
        messageType = 'contact';
      }

      const message = CONFIG.whatsapp.messages[messageType];
      const whatsappURL = utils.generateWhatsAppURL(message);

      // Open WhatsApp
      window.open(whatsappURL, '_blank', 'noopener,noreferrer');

      // Analytics tracking (if implemented)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
          event_category: 'engagement',
          event_label: messageType,
        });
      }
    });
  });
};

/**
 * Video Player Handler
 */
const videoPlayerHandler = () => {
  if (!elements.videoPlayButton) return;

  elements.videoPlayButton.addEventListener('click', () => {
    // For now, we'll show an alert. In production, this would open a video modal
    // or replace the thumbnail with an actual video player
    alert(
      'Video player functionality - In production, this would open the warehouse tour video'
    );

    // Example of how to replace with video:
    /*
    const videoContainer = elements.videoPlayButton.closest('.video-container');
    const videoHTML = `
      <video controls autoplay>
        <source src="src/videos/warehouse-tour.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
    videoContainer.innerHTML = videoHTML;
    */
  });
};

/**
 * Google Maps Integration
 */
const googleMapsIntegration = () => {
  if (!elements.mapContainer) return;

  // Initialize Google Maps
  const initMap = () => {
    const map = new google.maps.Map(elements.mapContainer, {
      zoom: CONFIG.maps.zoom,
      center: CONFIG.maps.center,
      styles: [
        {
          featureType: 'all',
          elementType: 'geometry.fill',
          stylers: [{ weight: '2.00' }],
        },
        {
          featureType: 'all',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#9c9c9c' }],
        },
        {
          featureType: 'all',
          elementType: 'labels.text',
          stylers: [{ visibility: 'on' }],
        },
      ],
    });

    // Add marker
    new google.maps.Marker({
      position: CONFIG.maps.center,
      map: map,
      title: 'C4 Logística y Transporte',
      icon: {
        url: 'src/images/map-marker.svg',
        scaledSize: new google.maps.Size(40, 40),
      },
    });

    // Add info window
    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="padding: 10px;">
          <h3 style="margin: 0 0 10px 0; color: #1E3A8A;">C4 Logística y Transporte</h3>
          <p style="margin: 0; color: #6B7280;">Km. 5 Autopista Medellín-Bogotá</p>
          <p style="margin: 5px 0 0 0;">
            <a href="tel:+573007377368" style="color: #00B04A; text-decoration: none;">
              📞 300 7377368
            </a>
          </p>
        </div>
      `,
    });

    // Open info window on marker click
    new google.maps.Marker({
      position: CONFIG.maps.center,
      map: map,
    }).addListener('click', () => {
      infoWindow.open(map, marker);
    });
  };

  // Load Google Maps API if not already loaded
  if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;

    // Make initMap globally available
    window.initMap = initMap;

    document.head.appendChild(script);
  } else {
    initMap();
  }
};

/**
 * Form Validation (for future contact forms)
 */
const formValidation = () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      // Basic validation
      if (!data.name || !data.email || !data.message) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        alert('Por favor, ingrese un email válido.');
        return;
      }

      // Submit form (implement your submission logic here)
      console.log('Form submitted:', data);
      alert('Mensaje enviado correctamente. Nos pondremos en contacto pronto.');
    });
  });
};

/**
 * Lazy Loading Images
 */
const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }
};

/**
 * Performance Monitoring
 */
const performanceMonitoring = () => {
  // Monitor Core Web Vitals if supported
  if ('PerformanceObserver' in window) {
    // Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    new PerformanceObserver((entryList) => {
      let clsValue = 0;
      entryList.getEntries().forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('CLS:', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  }
};

/**
 * Error Handling
 */
const errorHandling = () => {
  window.addEventListener('error', (event) => {
    console.error('JavaScript Error:', event.error);
    // In production, send to error tracking service
  });

  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled Promise Rejection:', event.reason);
    // In production, send to error tracking service
  });
};

/**
 * Service Worker Registration
 */
const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};

/**
 * Initialize Application
 */
const init = () => {
  // Core functionality
  headerScrollHandler();
  smoothScrolling();
  animationObserver();
  whatsappIntegration();
  videoPlayerHandler();

  // Enhanced functionality
  lazyLoadImages();
  formValidation();

  // Maps integration (load after other critical features)
  setTimeout(googleMapsIntegration, 1000);

  // Monitoring and error handling
  performanceMonitoring();
  errorHandling();

  // Service worker (non-critical)
  setTimeout(registerServiceWorker, 2000);

  console.log('C4 Logística - Application initialized successfully');
};

/**
 * DOM Content Loaded
 */
document.addEventListener('DOMContentLoaded', init);

/**
 * Export for module systems (if needed)
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { init, utils, CONFIG };
}
