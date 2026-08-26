// ==========================================
// Main JavaScript - Lutfor Rahman Portfolio
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Year in Footer
  const yearElements = document.querySelectorAll('.dynamic-year');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });

  // 2. Navbar Background Blur on Scroll
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // 3. Contact Form Submission Handling
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = contactForm.querySelector('input[type="text"]');
      const emailInput = contactForm.querySelector('input[type="email"]');
      const msgInput = contactForm.querySelector('textarea');
      
      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      
      if (!name || !email) {
        alert('Please fill out all required fields.');
        return;
      }

      // Show success notification
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!';
      submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      
      setTimeout(() => {
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
        alert(`Thank you, ${name}! Your message has been received. I will get back to you soon.`);
      }, 1200);
    });
  }

  // 4. Smooth scrolling for internal anchors
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});