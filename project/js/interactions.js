/**
 * Set up interactive elements on the page
 */
export function setupInteractions() {
  // Get Started button in hero section
  const getStartedBtn = document.getElementById('get-started');
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
      alert('Welcome to Web Fundamentals! Ready to start learning?');
      
      // Smooth scroll to about section
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  
  // Learn More buttons in cards
  const learnMoreBtns = document.querySelectorAll('.learn-more');
  learnMoreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const topic = e.target.getAttribute('data-topic');
      showTopicInfo(topic);
    });
  });
  
  // Submit button for contact form
  const submitBtn = document.getElementById('submit-form');
  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Basic validation
      if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      // Email validation
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      // Show success message
      alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
      
      // Reset form
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    });
  }
  
  // Add hover effects for gallery items
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
      const caption = e.currentTarget.querySelector('.gallery-caption');
      if (caption) {
        caption.style.transform = 'translateY(0)';
      }
    });
    
    item.addEventListener('mouseleave', (e) => {
      const caption = e.currentTarget.querySelector('.gallery-caption');
      if (caption) {
        caption.style.transform = 'translateY(100%)';
      }
    });
  });
}

/**
 * Show information about a specific web development topic
 * @param {string} topic - The topic to show info about
 */
function showTopicInfo(topic) {
  const topics = {
    html: {
      title: 'HTML (HyperText Markup Language)',
      description: 'HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the structure and content of web pages.'
    },
    css: {
      title: 'CSS (Cascading Style Sheets)',
      description: 'CSS is a style sheet language used for describing the presentation of a document written in HTML. CSS is designed to enable the separation of presentation and content.'
    },
    javascript: {
      title: 'JavaScript',
      description: 'JavaScript is a programming language that allows you to implement complex features on web pages. It enables interactive web pages and is an essential part of web applications.'
    }
  };
  
  const selectedTopic = topics[topic];
  if (selectedTopic) {
    alert(`${selectedTopic.title}\n\n${selectedTopic.description}`);
  }
}

/**
 * Validate an email address
 * @param {string} email - The email to validate
 * @returns {boolean} - Whether the email is valid
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}