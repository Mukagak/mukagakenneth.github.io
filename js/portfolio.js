document.addEventListener('DOMContentLoaded', function() {
    // Initialize Particles.js
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  
    // Typing Effect
    const typingElement = document.querySelector('.typing');
    const texts = [
      "Creative Developer Building User-Focused Solutions",
      "Full Stack Developer",
      "UI/UX Enthusiast",
      "Problem Solver",
      "Continuous Learner"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
  
    function type() {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }
  
      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at end of text
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500; // Pause before typing next text
      }
  
      setTimeout(type, typingSpeed);
    }
  
    // Start typing effect after initial animation
    setTimeout(type, 1500);
  
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  
    // Navbar Hide/Show on Scroll
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll <= 0) {
        navbar.classList.remove('hidden');
        return;
      }
      
      if (currentScroll > lastScroll && !navbar.classList.contains('hidden')) {
        // Scroll down
        navbar.classList.add('hidden');
      } else if (currentScroll < lastScroll && navbar.classList.contains('hidden')) {
        // Scroll up
        navbar.classList.remove('hidden');
      }
      
      lastScroll = currentScroll;
    });
  
    // Create floating elements
    function createFloatingElements() {
      const hero = document.querySelector('.hero');
      const colors = ['rgba(108, 99, 255, 0.1)', 'rgba(255, 101, 132, 0.1)', 'rgba(255, 255, 255, 0.1)'];
      
      for (let i = 0; i < 5; i++) {
        const floating = document.createElement('div');
        floating.classList.add('floating');
        
        // Random properties
        const size = Math.random() * 100 + 50;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const delay = Math.random() * 15;
        const duration = 15 + Math.random() * 10;
        
        floating.style.width = `${size}px`;
        floating.style.height = `${size}px`;
        floating.style.left = `${posX}%`;
        floating.style.top = `${posY}%`;
        floating.style.background = color;
        floating.style.animationDelay = `${delay}s`;
        floating.style.animationDuration = `${duration}s`;
        
        hero.appendChild(floating);
      }
    }
  
    createFloatingElements();
  
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Add scroll animation to elements
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.fade-in, [data-animate]');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };
  
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
  
    // Cursor Effects
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
  
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .cta-button, .nav-links li, .profile-pic');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
      });
      
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
      });
    });
  });
  
  // Add custom cursor styles dynamically
  const cursorStyles = document.createElement('style');
  cursorStyles.textContent = `
    .custom-cursor {
      position: fixed;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: rgba(108, 99, 255, 0.5);
      pointer-events: none;
      transform: translate(-50%, -50%);
      mix-blend-mode: difference;
      z-index: 9999;
      transition: transform 0.2s ease, width 0.2s ease, height 0.2s ease;
    }
    
    .cursor-hover {
      transform: translate(-50%, -50%) scale(1.5);
      background-color: rgba(255, 101, 132, 0.7);
    }
  `;
  document.head.appendChild(cursorStyles);