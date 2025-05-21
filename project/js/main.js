// Import modules
import { initAnimations } from './animations.js';
import { setupInteractions } from './interactions.js';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  
  // Initialize animations
  initAnimations();
  
  // Set up interactive elements
  setupInteractions();
});