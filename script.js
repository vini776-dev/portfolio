/* ========================================
   Portfolio - Main JavaScript
   Premium Cyberpunk Portfolio
   ======================================== */

// ===== DOM ELEMENTS =====
const DOM = {
  // Loading
  loadingScreen: null,
  loadingProgress: null,
  loadingText: null,

  // Cursor
  cursor: null,
  cursorFollower: null,

  // Scroll
  scrollProgressBar: null,

  // Navbar
  navbar: null,
  navLinks: null,
  navLinkItems: null,
  hamburger: null,
  navLogo: null,

  // Hero
  hero: null,
  heroCanvas: null,
  heroGreeting: null,
  heroName: null,
  heroTitleWrapper: null,
  heroDescription: null,
  heroButtons: null,
  heroSocials: null,
  scrollIndicator: null,
  typingText: null,
  typingCursor: null,

  // Stats
  statNumbers: null,

  // Skills
  skillsTabs: null,
  skillsGrid: null,
  skillCards: null,
  skillProgressBars: null,

  // Projects
  filterBtns: null,
  projectSearch: null,
  projectsGrid: null,
  projectCards: null,
  projectPreviews: null,

  // Modal
  projectModal: null,
  modalOverlay: null,
  modalContent: null,
  modalClose: null,
  modalBody: null,

  // Testimonials
  testimonialsSlider: null,
  testimonialCards: null,
  sliderPrev: null,
  sliderNext: null,
  sliderDots: null,

  // Contact
  contactForm: null,
  formInputs: null,
  formTextareas: null,
  formGroups: null,

  // Back to top
  backToTop: null,

  // Shared
  magneticBtns: null,
  revealElements: null,
  glassCards: null,
  socialLinks: null,
  sections: null,
};

function cacheDOMElements() {
  DOM.loadingScreen = document.getElementById('loading-screen');
  DOM.loadingProgress = document.querySelector('.loading-progress');
  DOM.loadingText = document.querySelector('.loading-text');

  DOM.cursor = document.querySelector('.cursor');
  DOM.cursorFollower = document.querySelector('.cursor-follower');

  DOM.scrollProgressBar = document.querySelector('.scroll-progress-bar');

  DOM.navbar = document.getElementById('navbar');
  DOM.navLinks = document.querySelector('.nav-links');
  DOM.navLinkItems = document.querySelectorAll('.nav-link[data-section]');
  DOM.hamburger = document.querySelector('.hamburger');
  DOM.navLogo = document.querySelector('.nav-logo');

  DOM.hero = document.getElementById('hero');
  DOM.heroCanvas = document.getElementById('hero-canvas');
  DOM.heroGreeting = document.querySelector('.hero-greeting');
  DOM.heroName = document.querySelector('.hero-name');
  DOM.heroTitleWrapper = document.querySelector('.hero-title-wrapper');
  DOM.heroDescription = document.querySelector('.hero-description');
  DOM.heroButtons = document.querySelector('.hero-buttons');
  DOM.heroSocials = document.querySelector('.hero-socials');
  DOM.scrollIndicator = document.querySelector('.scroll-indicator');
  DOM.typingText = document.querySelector('.typing-text');
  DOM.typingCursor = document.querySelector('.typing-cursor');

  DOM.statNumbers = document.querySelectorAll('.stat-number[data-target]');

  DOM.skillsTabs = document.querySelectorAll('.skills-tab[data-category]');
  DOM.skillsGrid = document.querySelector('.skills-grid');
  DOM.skillCards = document.querySelectorAll('.skill-card[data-category]');
  DOM.skillProgressBars = document.querySelectorAll('.skill-progress-bar[data-progress]');

  DOM.filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
  DOM.projectSearch = document.getElementById('project-search');
  DOM.projectsGrid = document.querySelector('.projects-grid');
  DOM.projectCards = document.querySelectorAll('.project-card[data-category][data-name]');
  DOM.projectPreviews = document.querySelectorAll('.project-preview[data-project]');

  DOM.projectModal = document.getElementById('project-modal');
  DOM.modalOverlay = document.querySelector('.modal-overlay');
  DOM.modalContent = document.querySelector('.modal-content');
  DOM.modalClose = document.querySelector('.modal-close');
  DOM.modalBody = document.querySelector('.modal-body');

  DOM.testimonialsSlider = document.querySelector('.testimonials-slider');
  DOM.testimonialCards = document.querySelectorAll('.testimonial-card');
  DOM.sliderPrev = document.querySelector('.slider-arrow.prev');
  DOM.sliderNext = document.querySelector('.slider-arrow.next');
  DOM.sliderDots = document.querySelectorAll('.dot');

  DOM.contactForm = document.getElementById('contact-form');
  DOM.formInputs = document.querySelectorAll('.form-input');
  DOM.formTextareas = document.querySelectorAll('.form-textarea');
  DOM.formGroups = document.querySelectorAll('.form-group');

  DOM.backToTop = document.getElementById('back-to-top');

  DOM.magneticBtns = document.querySelectorAll('.magnetic-btn');
  DOM.revealElements = document.querySelectorAll('.reveal');
  DOM.glassCards = document.querySelectorAll('.glass-card');
  DOM.socialLinks = document.querySelectorAll('.social-link');
  DOM.sections = document.querySelectorAll('.section');
}


// ===== CONSTANTS =====
const TYPING_TITLES = [
  'Full Stack Developer',
  'Creative Designer',
  'UI/UX Enthusiast',
  'Problem Solver',
  'Tech Explorer',
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'A stunning personal portfolio website featuring 3D effects powered by Three.js, smooth GSAP animations, glassmorphism design, and a fully responsive layout. Built with vanilla HTML, CSS, and JavaScript.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Three.js', 'GSAP'],
    features: [
      '3D Interactive Background',
      'Smooth Scroll Animations',
      'Responsive Design',
      'Contact Form Validation',
    ],
  },
  {
    id: 2,
    title: 'Unicorn Vista Realty',
    description:
      'A full-stack real estate web application built with modern technologies including HTML, CSS, JavaScript, Express, Node.js, and MongoDB.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JavaScript', 'HTML/CSS'],
    features: [
      'Full-Stack Architecture',
      'Database Integration',
      'RESTful API',
      'Responsive UI',
    ],
  },
];

const LOADING_MESSAGES = [
  'Loading assets...',
  'Preparing scene...',
  'Almost ready...',
];

const TYPE_SPEED = 80;
const DELETE_SPEED = 40;
const PAUSE_DURATION = 2000;
const SLIDER_INTERVAL = 5000;

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;
const isFineCursor = window.matchMedia('(pointer: fine)').matches;


// ===== UTILITY FUNCTIONS =====
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function throttle(fn, limit) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

function lerp(start, end, factor) {
  return start + (end - start) * factor;
}


// ===== LOADING SCREEN =====
function initLoadingScreen() {
  if (!DOM.loadingScreen || !DOM.loadingProgress || !DOM.loadingText) return;

  let progress = 0;
  const totalDuration = 2500;
  const stepTime = 30;
  const steps = totalDuration / stepTime;
  const increment = 100 / steps;
  let messageIndex = 0;

  DOM.loadingText.textContent = LOADING_MESSAGES[0];

  const loadingInterval = setInterval(() => {
    progress += increment;

    if (progress >= 100) {
      progress = 100;
      DOM.loadingProgress.style.width = '100%';
      DOM.loadingText.textContent = LOADING_MESSAGES[2];
      clearInterval(loadingInterval);

      setTimeout(() => {
        DOM.loadingScreen.classList.add('hidden');
        document.body.classList.add('loaded');
        document.body.classList.remove('no-scroll');

        setTimeout(() => {
          startHeroAnimations();
        }, 500);
      }, 400);

      return;
    }

    DOM.loadingProgress.style.width = progress + '%';

    if (progress > 33 && messageIndex === 0) {
      messageIndex = 1;
      DOM.loadingText.textContent = LOADING_MESSAGES[1];
    } else if (progress > 75 && messageIndex === 1) {
      messageIndex = 2;
      DOM.loadingText.textContent = LOADING_MESSAGES[2];
    }
  }, stepTime);
}


// ===== CUSTOM CURSOR =====
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;
let cursorVisible = true;
let cursorRAFId = null;

function initCustomCursor() {
  if (!isFineCursor || !DOM.cursor || !DOM.cursorFollower) return;

  document.addEventListener(
    'mousemove',
    (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;

      DOM.cursor.style.left = cursorX + 'px';
      DOM.cursor.style.top = cursorY + 'px';

      if (!cursorVisible) {
        DOM.cursor.style.opacity = '1';
        DOM.cursorFollower.style.opacity = '1';
        cursorVisible = true;
      }
    },
    { passive: true }
  );

  // Hover effects on interactive elements
  const interactiveSelectors =
    'a, button, .glass-card, input, textarea, .filter-btn, .skills-tab, .project-preview, .social-link, .slider-arrow, .dot, .hamburger';

  document.querySelectorAll(interactiveSelectors).forEach((el) => {
    el.addEventListener(
      'mouseenter',
      () => {
        DOM.cursor.classList.add('hover');
        DOM.cursorFollower.classList.add('hover');
      },
      { passive: true }
    );
    el.addEventListener(
      'mouseleave',
      () => {
        DOM.cursor.classList.remove('hover');
        DOM.cursorFollower.classList.remove('hover');
      },
      { passive: true }
    );
  });

  // Mouse down / up
  document.addEventListener(
    'mousedown',
    () => {
      DOM.cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
      DOM.cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.6)';
    },
    { passive: true }
  );

  document.addEventListener(
    'mouseup',
    () => {
      DOM.cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      DOM.cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    },
    { passive: true }
  );

  // Hide cursor when mouse leaves window
  document.addEventListener(
    'mouseleave',
    () => {
      DOM.cursor.style.opacity = '0';
      DOM.cursorFollower.style.opacity = '0';
      cursorVisible = false;
    },
    { passive: true }
  );

  document.addEventListener(
    'mouseenter',
    () => {
      DOM.cursor.style.opacity = '1';
      DOM.cursorFollower.style.opacity = '1';
      cursorVisible = true;
    },
    { passive: true }
  );

  // Follower lerp animation loop
  function animateFollower() {
    followerX = lerp(followerX, cursorX, 0.15);
    followerY = lerp(followerY, cursorY, 0.15);

    DOM.cursorFollower.style.left = followerX + 'px';
    DOM.cursorFollower.style.top = followerY + 'px';

    cursorRAFId = requestAnimationFrame(animateFollower);
  }

  animateFollower();
}


// ===== THREE.JS HERO SCENE =====
let threeScene = null;
let threeCamera = null;
let threeRenderer = null;
let threeRAFId = null;
let mouseXNorm = 0;
let mouseYNorm = 0;
let mainIcosahedron = null;
let secondaryIcosahedron = null;
let neonCubes = [];
let torus = null;
let particles = null;

function initThreeScene() {
  if (!DOM.heroCanvas) return;

  try {
    // Scene
    threeScene = new THREE.Scene();

    // Camera
    threeCamera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    threeCamera.position.z = 6;

    // Renderer
    threeRenderer = new THREE.WebGLRenderer({
      canvas: DOM.heroCanvas,
      alpha: true,
      antialias: true,
    });
    threeRenderer.setSize(window.innerWidth, window.innerHeight);
    threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // ---- OBJECTS ----

    // 1. Main Icosahedron
    const mainGeo = new THREE.IcosahedronGeometry(2, 1);
    const mainMat = new THREE.MeshPhongMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    mainIcosahedron = new THREE.Mesh(mainGeo, mainMat);
    threeScene.add(mainIcosahedron);

    // 2. Secondary Icosahedron
    const secGeo = new THREE.IcosahedronGeometry(1.5, 0);
    const secMat = new THREE.MeshPhongMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    secondaryIcosahedron = new THREE.Mesh(secGeo, secMat);
    secondaryIcosahedron.position.set(1, -0.5, -1);
    threeScene.add(secondaryIcosahedron);

    // 3. Neon Cubes (wireframe edges)
    for (let i = 0; i < 5; i++) {
      const cubeGeo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
      const edgesGeo = new THREE.EdgesGeometry(cubeGeo);
      const lineMat = new THREE.LineBasicMaterial({ color: 0x3b82f6 });
      const cube = new THREE.LineSegments(edgesGeo, lineMat);

      cube.position.set(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16
      );

      cube.userData.rotationSpeedX = (Math.random() - 0.5) * 0.02;
      cube.userData.rotationSpeedY = (Math.random() - 0.5) * 0.02;

      neonCubes.push(cube);
      threeScene.add(cube);

      cubeGeo.dispose(); // dispose original box geo, edges geo is kept
    }

    // 4. Torus
    const torusGeo = new THREE.TorusGeometry(3, 0.05, 16, 100);
    const torusMat = new THREE.MeshPhongMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.15,
    });
    torus = new THREE.Mesh(torusGeo, torusMat);
    threeScene.add(torus);

    // 5. Particle System
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 500 : 1500;
    const particlesGeo = new THREE.BufferGeometry();
    const positionsArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positionsArray[i] = (Math.random() - 0.5) * 30;
    }

    particlesGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(positionsArray, 3)
    );

    const particlesMat = new THREE.PointsMaterial({
      color: 0xa855f7,
      size: 0.02,
      transparent: true,
      opacity: 0.6,
    });

    particles = new THREE.Points(particlesGeo, particlesMat);
    threeScene.add(particles);

    // ---- LIGHTING ----
    const ambientLight = new THREE.AmbientLight(0x222244, 0.5);
    threeScene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xa855f7, 1, 50);
    pointLight1.position.set(5, 5, 5);
    threeScene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 0.8, 50);
    pointLight2.position.set(-5, -3, 5);
    threeScene.add(pointLight2);

    // ---- MOUSE INTERACTION ----
    document.addEventListener(
      'mousemove',
      (e) => {
        mouseXNorm = (e.clientX / window.innerWidth) * 2 - 1;
        mouseYNorm = -(e.clientY / window.innerHeight) * 2 + 1;
      },
      { passive: true }
    );

    // ---- ANIMATION LOOP ----
    function animateThree() {
      threeRAFId = requestAnimationFrame(animateThree);

      // Rotate main icosahedron
      if (mainIcosahedron) {
        mainIcosahedron.rotation.x += 0.002;
        mainIcosahedron.rotation.y += 0.003;
        // Subtle mouse influence
        mainIcosahedron.rotation.x += mouseYNorm * 0.001;
        mainIcosahedron.rotation.y += mouseXNorm * 0.001;
      }

      // Rotate secondary (opposite)
      if (secondaryIcosahedron) {
        secondaryIcosahedron.rotation.x -= 0.001;
        secondaryIcosahedron.rotation.y -= 0.002;
      }

      // Rotate cubes
      neonCubes.forEach((cube) => {
        cube.rotation.x += cube.userData.rotationSpeedX;
        cube.rotation.y += cube.userData.rotationSpeedY;
      });

      // Rotate torus
      if (torus) {
        torus.rotation.x += 0.001;
        torus.rotation.z += 0.0015;
      }

      // Subtle particle drift
      if (particles) {
        particles.rotation.y += 0.0003;
        particles.rotation.x += 0.0001;
      }

      // Camera follow mouse
      if (threeCamera) {
        threeCamera.position.x +=
          (mouseXNorm * 2 - threeCamera.position.x) * 0.05;
        threeCamera.position.y +=
          (mouseYNorm * 1.5 - threeCamera.position.y) * 0.05;
        threeCamera.lookAt(threeScene.position);
      }

      threeRenderer.render(threeScene, threeCamera);
    }

    if (!prefersReducedMotion) {
      animateThree();
    } else {
      // Single render for reduced motion
      threeRenderer.render(threeScene, threeCamera);
    }

    // ---- RESIZE HANDLER ----
    const handleResize = debounce(() => {
      if (!threeCamera || !threeRenderer) return;
      threeCamera.aspect = window.innerWidth / window.innerHeight;
      threeCamera.updateProjectionMatrix();
      threeRenderer.setSize(window.innerWidth, window.innerHeight);
      threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }, 250);

    window.addEventListener('resize', handleResize, { passive: true });
  } catch (err) {
    console.warn('Three.js initialization failed:', err);
    // Graceful fallback — the canvas just stays empty/transparent
  }
}


// ===== GSAP REGISTRATION & HERO INTRO =====
function initGSAP() {
  if (typeof gsap === 'undefined') return;

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Set initial states for hero elements
  const heroElements = [
    '.hero-greeting',
    '.hero-name',
    '.hero-title-wrapper',
    '.hero-description',
    '.hero-buttons',
    '.hero-socials',
  ];

  gsap.set(heroElements, { opacity: 0, y: 30 });

  if (DOM.scrollIndicator) {
    gsap.set('.scroll-indicator', { opacity: 0, y: 20 });
  }
}

function startHeroAnimations() {
  if (typeof gsap === 'undefined') return;

  const heroTl = gsap.timeline({ delay: 0.3 });

  heroTl
    .to('.hero-greeting', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
    .to('.hero-name', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3')
    .to('.hero-title-wrapper', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
    .to('.hero-description', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
    .to('.hero-buttons', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
    .to('.hero-socials', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
    .to('.scroll-indicator', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')
    .call(() => {
      startTypingEffect();
    });
}


// ===== NAVBAR =====
function initNavbar() {
  if (!DOM.navbar) return;

  // Scroll class toggle
  const handleNavScroll = throttle(() => {
    if (window.scrollY > 50) {
      DOM.navbar.classList.add('scrolled');
    } else {
      DOM.navbar.classList.remove('scrolled');
    }
  }, 100);

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // Active section highlighting via IntersectionObserver
  if (DOM.sections.length > 0 && DOM.navLinkItems.length > 0) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            DOM.navLinkItems.forEach((link) => {
              link.classList.remove('active');
              if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    DOM.sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }

  // Hamburger toggle
  if (DOM.hamburger && DOM.navLinks) {
    DOM.hamburger.addEventListener('click', () => {
      DOM.hamburger.classList.toggle('active');
      DOM.navLinks.classList.toggle('active');
    });
  }

  // Click nav link → close mobile menu
  if (DOM.navLinkItems.length > 0) {
    DOM.navLinkItems.forEach((link) => {
      link.addEventListener('click', () => {
        if (DOM.hamburger) DOM.hamburger.classList.remove('active');
        if (DOM.navLinks) DOM.navLinks.classList.remove('active');
      });
    });
  }

  // Click nav-logo → scroll to hero
  if (DOM.navLogo) {
    DOM.navLogo.addEventListener('click', (e) => {
      e.preventDefault();
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}


// ===== SCROLL PROGRESS BAR =====
function initScrollProgress() {
  if (!DOM.scrollProgressBar) return;

  const updateProgress = throttle(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;
    DOM.scrollProgressBar.style.width = Math.min(scrollPercent, 100) + '%';
  }, 16);

  window.addEventListener('scroll', updateProgress, { passive: true });
}


// ===== TYPING EFFECT =====
let typingTitleIndex = 0;
let typingCharIndex = 0;
let typingIsDeleting = false;
let typingTimeout = null;

function startTypingEffect() {
  if (!DOM.typingText) return;
  typeNextChar();
}

function typeNextChar() {
  const currentTitle = TYPING_TITLES[typingTitleIndex];

  if (!typingIsDeleting) {
    // Typing forward
    DOM.typingText.textContent = currentTitle.substring(0, typingCharIndex + 1);
    typingCharIndex++;

    if (typingCharIndex >= currentTitle.length) {
      // Finished typing — pause then delete
      typingTimeout = setTimeout(() => {
        typingIsDeleting = true;
        typeNextChar();
      }, PAUSE_DURATION);
      return;
    }

    typingTimeout = setTimeout(typeNextChar, TYPE_SPEED);
  } else {
    // Deleting
    DOM.typingText.textContent = currentTitle.substring(0, typingCharIndex - 1);
    typingCharIndex--;

    if (typingCharIndex <= 0) {
      typingIsDeleting = false;
      typingTitleIndex = (typingTitleIndex + 1) % TYPING_TITLES.length;
      typingTimeout = setTimeout(typeNextChar, TYPE_SPEED + 200);
      return;
    }

    typingTimeout = setTimeout(typeNextChar, DELETE_SPEED);
  }
}


// ===== SCROLL REVEAL ANIMATIONS =====
function initScrollReveal() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    // Fallback: make everything visible if GSAP isn't available
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
    return;
  }
  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  // Set initial hidden state via GSAP (not CSS) so GSAP controls the full lifecycle
  const revealEls = gsap.utils.toArray('.reveal');
  gsap.set(revealEls, { opacity: 0, y: 50 });

  // Animate each element when it scrolls into view
  revealEls.forEach((el) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    });
  });

  // Staggered grid animations
  const staggerConfigs = [
    { selector: '.skills-grid .skill-card', stagger: 0.1 },
    { selector: '.projects-grid .project-card', stagger: 0.15 },
    { selector: '.services-grid .service-card', stagger: 0.1 },
    { selector: '.about-stats .stat-item', stagger: 0.15 },
    { selector: '.timeline-item', stagger: 0.2 },
  ];

  staggerConfigs.forEach(({ selector, stagger }) => {
    const items = gsap.utils.toArray(selector);
    if (items.length === 0) return;

    const parent = items[0].closest('.section') || items[0].parentElement;

    gsap.set(items, { opacity: 0, y: 40 });

    gsap.to(items, {
      scrollTrigger: {
        trigger: parent,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: stagger,
      ease: 'power2.out',
    });
  });
}


// ===== STATS COUNTER =====
function initStatsCounter() {
  if (!DOM.statNumbers || DOM.statNumbers.length === 0) return;

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !prefersReducedMotion) {
    DOM.statNumbers.forEach((el) => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      if (isNaN(target)) return;

      const counter = { val: 0 };

      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(counter, {
            val: target,
            duration: 2,
            ease: 'power1.out',
            onUpdate: () => {
              el.textContent = Math.floor(counter.val) + '+';
            },
            onComplete: () => {
              el.textContent = target + '+';
            },
          });
        },
      });
    });
  } else {
    // Fallback: just set the values
    DOM.statNumbers.forEach((el) => {
      const target = el.getAttribute('data-target');
      el.textContent = target + '+';
    });
  }
}


// ===== SKILLS TABS =====
function initSkillsTabs() {
  if (!DOM.skillsTabs || DOM.skillsTabs.length === 0) return;

  DOM.skillsTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      // Remove active from all tabs
      DOM.skillsTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.getAttribute('data-category');

      // Show/hide skill cards
      DOM.skillCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.style.display = '';
          card.classList.remove('hidden');
        } else {
          card.style.display = 'none';
          card.classList.add('hidden');
        }
      });

      // Animate visible cards in
      const visibleCards = Array.from(DOM.skillCards).filter(
        (c) => !c.classList.contains('hidden') && c.style.display !== 'none'
      );

      if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
        gsap.from(visibleCards, {
          opacity: 0,
          scale: 0.9,
          y: 20,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power2.out',
        });
      }

      // Re-trigger skill progress bars
      animateSkillBars(visibleCards);
    });
  });
}

function animateSkillBars(cards) {
  if (!cards) cards = Array.from(DOM.skillCards);

  cards.forEach((card) => {
    const progressBar = card.querySelector('.skill-progress-bar[data-progress]');
    if (!progressBar) return;

    const targetProgress = progressBar.getAttribute('data-progress');
    progressBar.style.width = '0%';

    // Small delay so the animation is visible
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
          gsap.to(progressBar, {
            width: targetProgress + '%',
            duration: 1,
            ease: 'power2.out',
          });
        } else {
          progressBar.style.width = targetProgress + '%';
        }
      });
    });
  });
}

function initSkillProgressOnScroll() {
  if (!DOM.skillsGrid) return;

  if (typeof IntersectionObserver !== 'undefined') {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleCards = Array.from(DOM.skillCards).filter(
              (c) => !c.classList.contains('hidden') && c.style.display !== 'none'
            );
            animateSkillBars(visibleCards);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(DOM.skillsGrid);
  }
}


// ===== PROJECTS FILTER & SEARCH =====
let activeProjectFilter = 'all';

function initProjectsFilter() {
  if (!DOM.filterBtns || DOM.filterBtns.length === 0) return;

  DOM.filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update active button
      DOM.filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      activeProjectFilter = btn.getAttribute('data-filter');
      filterProjects();
    });
  });

  // Search
  if (DOM.projectSearch) {
    DOM.projectSearch.addEventListener('input', () => {
      filterProjects();
    });
  }
}

function filterProjects() {
  const searchTerm = DOM.projectSearch
    ? DOM.projectSearch.value.toLowerCase().trim()
    : '';

  DOM.projectCards.forEach((card) => {
    const cardCategory = card.getAttribute('data-category');
    const cardName = (card.getAttribute('data-name') || '').toLowerCase();

    const matchesFilter =
      activeProjectFilter === 'all' || cardCategory === activeProjectFilter;
    const matchesSearch = !searchTerm || cardName.includes(searchTerm);

    if (matchesFilter && matchesSearch) {
      card.classList.remove('hidden');

      if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
        gsap.to(card, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
        });
      } else {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      }
    } else {
      if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
        gsap.to(card, {
          opacity: 0,
          scale: 0.9,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => {
            card.classList.add('hidden');
          },
        });
      } else {
        card.style.opacity = '0';
        card.classList.add('hidden');
      }
    }
  });
}


// ===== PROJECT MODAL =====
function initProjectModal() {
  // Open modal from preview buttons
  if (DOM.projectPreviews && DOM.projectPreviews.length > 0) {
    DOM.projectPreviews.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = parseInt(btn.getAttribute('data-project'), 10);
        openProjectModal(projectId);
      });
    });
  }

  // Close modal
  if (DOM.modalClose) {
    DOM.modalClose.addEventListener('click', closeProjectModal);
  }

  if (DOM.modalOverlay) {
    DOM.modalOverlay.addEventListener('click', (e) => {
      // Close only if clicking overlay (outside modal-content)
      if (e.target === DOM.modalOverlay) {
        closeProjectModal();
      }
    });
  }

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = PROJECTS_DATA.find((p) => p.id === projectId);
  if (!project || !DOM.modalBody || !DOM.modalOverlay) return;

  // Populate modal
  DOM.modalBody.innerHTML = `
    <h2 class="modal-title">${project.title}</h2>
    <p class="modal-description">${project.description}</p>
    <div class="modal-tech">
      <h3>Technologies Used</h3>
      <div class="tech-tags">
        ${project.tech.map((t) => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>
    <div class="modal-features">
      <h3>Key Features</h3>
      <ul class="feature-list">
        ${project.features.map((f) => `<li>${f}</li>`).join('')}
      </ul>
    </div>
  `;

  DOM.modalOverlay.classList.add('active');
  document.body.classList.add('no-scroll');

  // Animate modal in
  if (typeof gsap !== 'undefined' && DOM.modalContent) {
    gsap.fromTo(
      DOM.modalContent,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.35, ease: 'power2.out' }
    );
  }
}

function closeProjectModal() {
  if (!DOM.modalOverlay) return;

  if (typeof gsap !== 'undefined' && DOM.modalContent) {
    gsap.to(DOM.modalContent, {
      scale: 0.9,
      opacity: 0,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        DOM.modalOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
      },
    });
  } else {
    DOM.modalOverlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
}


// ===== TESTIMONIALS SLIDER =====
let currentSlide = 0;
let slideCount = 0;
let sliderAutoPlayInterval = null;
let sliderHovered = false;

function initTestimonialsSlider() {
  if (!DOM.testimonialsSlider || !DOM.testimonialCards || DOM.testimonialCards.length === 0) return;

  slideCount = DOM.testimonialCards.length;

  // Navigation arrows
  if (DOM.sliderNext) {
    DOM.sliderNext.addEventListener('click', () => nextSlide());
  }

  if (DOM.sliderPrev) {
    DOM.sliderPrev.addEventListener('click', () => prevSlide());
  }

  // Dot navigation
  if (DOM.sliderDots && DOM.sliderDots.length > 0) {
    DOM.sliderDots.forEach((dot, index) => {
      dot.addEventListener('click', () => goToSlide(index));
    });
  }

  // Auto-play
  startSliderAutoPlay();

  // Pause on hover
  DOM.testimonialsSlider.addEventListener(
    'mouseenter',
    () => {
      sliderHovered = true;
      stopSliderAutoPlay();
    },
    { passive: true }
  );

  DOM.testimonialsSlider.addEventListener(
    'mouseleave',
    () => {
      sliderHovered = false;
      startSliderAutoPlay();
    },
    { passive: true }
  );

  updateSlider();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideCount;
  updateSlider();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slideCount) % slideCount;
  updateSlider();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

function updateSlider() {
  if (!DOM.testimonialsSlider) return;

  DOM.testimonialsSlider.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update dots
  if (DOM.sliderDots && DOM.sliderDots.length > 0) {
    DOM.sliderDots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }
}

function startSliderAutoPlay() {
  if (sliderAutoPlayInterval) return;
  sliderAutoPlayInterval = setInterval(() => {
    if (!sliderHovered) {
      nextSlide();
    }
  }, SLIDER_INTERVAL);
}

function stopSliderAutoPlay() {
  if (sliderAutoPlayInterval) {
    clearInterval(sliderAutoPlayInterval);
    sliderAutoPlayInterval = null;
  }
}


// ===== CONTACT FORM VALIDATION =====
function initContactForm() {
  if (!DOM.contactForm) return;

  const validators = {
    name: (value) => {
      if (!value.trim()) return 'Name is required';
      if (value.trim().length < 2) return 'Name must be at least 2 characters';
      return '';
    },
    email: (value) => {
      if (!value.trim()) return 'Email is required';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.trim())) return 'Please enter a valid email';
      return '';
    },
    subject: (value) => {
      if (!value.trim()) return 'Subject is required';
      if (value.trim().length < 2) return 'Subject must be at least 2 characters';
      return '';
    },
    message: (value) => {
      if (!value.trim()) return 'Message is required';
      if (value.trim().length < 10) return 'Message must be at least 10 characters';
      return '';
    },
  };

  // Real-time validation on blur
  const allInputs = [
    ...DOM.contactForm.querySelectorAll('.form-input'),
    ...DOM.contactForm.querySelectorAll('.form-textarea'),
  ];

  allInputs.forEach((input) => {
    input.addEventListener('blur', () => {
      validateField(input, validators);
    });

    // Clear error on focus/input
    input.addEventListener('input', () => {
      const group = input.closest('.form-group');
      if (group) {
        group.classList.remove('error');
        const errorEl = group.querySelector('.form-error');
        if (errorEl) errorEl.textContent = '';
      }
    });
  });

  // Submit handler
  DOM.contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let isValid = true;

    allInputs.forEach((input) => {
      const error = validateField(input, validators);
      if (error) isValid = false;
    });

    if (isValid) {
      const submitBtn = DOM.contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      try {
        const formData = new FormData(DOM.contactForm);
        const response = await fetch(DOM.contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Success
          showFormNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
          DOM.contactForm.reset();

          // Clear all error states
          DOM.contactForm.querySelectorAll('.form-group').forEach((group) => {
            group.classList.remove('error');
            const errorEl = group.querySelector('.form-error');
            if (errorEl) errorEl.textContent = '';
          });
        } else {
          showFormNotification('Oops! There was a problem sending your message.', 'error');
        }
      } catch (error) {
        showFormNotification('Oops! There was a problem sending your message.', 'error');
      } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    }
  });
}

function validateField(input, validators) {
  const fieldName = input.getAttribute('name') || input.getAttribute('id');
  const validator = validators[fieldName];
  if (!validator) return '';

  const errorMsg = validator(input.value);
  const group = input.closest('.form-group');

  if (group) {
    const errorEl = group.querySelector('.form-error');
    if (errorMsg) {
      group.classList.add('error');
      if (errorEl) errorEl.textContent = errorMsg;
    } else {
      group.classList.remove('error');
      if (errorEl) errorEl.textContent = '';
    }
  }

  return errorMsg;
}

function showFormNotification(message, type) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `form-notification ${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-icon">${type === 'success' ? '✓' : '✕'}</span>
      <span class="notification-text">${message}</span>
    </div>
  `;

  // Style inline (keeps it self-contained)
  Object.assign(notification.style, {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    background: type === 'success'
      ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.95), rgba(5, 150, 105, 0.95))'
      : 'linear-gradient(135deg, rgba(239, 68, 68, 0.95), rgba(220, 38, 38, 0.95))',
    color: '#fff',
    padding: '16px 24px',
    borderRadius: '12px',
    fontSize: '14px',
    fontFamily: 'inherit',
    zIndex: '10000',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(10px)',
    transform: 'translateY(20px)',
    opacity: '0',
    transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  });

  document.body.appendChild(notification);

  // Animate in
  requestAnimationFrame(() => {
    notification.style.transform = 'translateY(0)';
    notification.style.opacity = '1';
  });

  // Remove after delay
  setTimeout(() => {
    notification.style.transform = 'translateY(20px)';
    notification.style.opacity = '0';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 400);
  }, 4000);
}


// ===== MAGNETIC BUTTONS =====
function initMagneticButtons() {
  if (!isFineCursor || prefersReducedMotion) return;
  if (!DOM.magneticBtns || DOM.magneticBtns.length === 0) return;

  DOM.magneticBtns.forEach((btn) => {
    btn.addEventListener(
      'mousemove',
      (e) => {
        const rect = btn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const threshold = 100;

        if (distance < threshold) {
          const moveX = deltaX * 0.3;
          const moveY = deltaY * 0.3;

          if (typeof gsap !== 'undefined') {
            gsap.to(btn, {
              x: moveX,
              y: moveY,
              duration: 0.3,
              ease: 'power2.out',
            });
          } else {
            btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
          }
        }
      },
      { passive: true }
    );

    btn.addEventListener(
      'mouseleave',
      () => {
        if (typeof gsap !== 'undefined') {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)',
          });
        } else {
          btn.style.transform = 'translate(0, 0)';
        }
      },
      { passive: true }
    );
  });
}


// ===== RIPPLE EFFECT =====
function initRippleEffect() {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';

      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 600);
    });
  });
}


// ===== BACK TO TOP =====
function initBackToTop() {
  if (!DOM.backToTop) return;

  const handleScroll = throttle(() => {
    if (window.scrollY > 500) {
      DOM.backToTop.classList.add('visible');
    } else {
      DOM.backToTop.classList.remove('visible');
    }
  }, 100);

  window.addEventListener('scroll', handleScroll, { passive: true });

  DOM.backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}


// ===== LAZY LOADING =====
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  if (lazyImages.length === 0) return;

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      },
      { rootMargin: '50px' }
    );

    lazyImages.forEach((img) => imageObserver.observe(img));
  } else {
    // Fallback: load all immediately
    lazyImages.forEach((img) => {
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
      img.classList.add('loaded');
    });
  }
}


// ===== INITIALIZATION =====
function init() {
  // Cache all DOM references
  cacheDOMElements();

  // Initialize GSAP (sets initial states)
  initGSAP();

  // Start loading screen
  initLoadingScreen();

  // Custom cursor (non-touch only)
  initCustomCursor();

  // Three.js hero scene
  initThreeScene();

  // Navbar
  initNavbar();

  // Scroll progress bar
  initScrollProgress();

  // Scroll reveal animations
  initScrollReveal();

  // Stats counter
  initStatsCounter();

  // Skills tabs
  initSkillsTabs();
  initSkillProgressOnScroll();

  // Projects filter & search
  initProjectsFilter();

  // Project modal
  initProjectModal();

  // Testimonials slider
  initTestimonialsSlider();

  // Contact form validation
  initContactForm();

  // Magnetic buttons (non-touch only)
  initMagneticButtons();

  // Ripple effect
  initRippleEffect();

  // Back to top
  initBackToTop();

  // Smooth scroll
  initSmoothScroll();

  // Lazy loading
  initLazyLoading();
}

// Run on DOMContentLoaded
document.addEventListener('DOMContentLoaded', init);
