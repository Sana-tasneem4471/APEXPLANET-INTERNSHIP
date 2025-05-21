/**
 * Initialize animations on page elements
 */
export function initAnimations() {
  // Add scroll reveal animations
  const elementsToAnimate = document.querySelectorAll('.section-title, .card, .gallery-item, .contact-form');
  
  // Create observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });
  
  // Observe each element
  elementsToAnimate.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
  });
  
  // Define the animation class
  document.head.insertAdjacentHTML('beforeend', `
    <style>
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    </style>
  `);
  
  // Add smooth navigation for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
}