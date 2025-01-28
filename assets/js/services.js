 // Accordion functionality
 const accordionItems = document.querySelectorAll('.accordion-item');

 accordionItems.forEach(item => {
     const header = item.querySelector('.accordion-header');
     const content = item.querySelector('.accordion-content');
     const icon = item.querySelector('.accordion-icon');

     header.addEventListener('click', () => {
         content.classList.toggle('active');
         icon.textContent = content.classList.contains('active') ? '-' : '+';
     });
 });

 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });

 // Animate elements on scroll
 function animateOnScroll() {
     const elements = document.querySelectorAll('.service-card, .accordion-item');
     elements.forEach(element => {
         const elementTop = element.getBoundingClientRect().top;
         const windowHeight = window.innerHeight;
         if (elementTop < windowHeight - 50) {
             element.style.opacity = '1';
             element.style.transform = 'translateY(0)';
         }
     });
 }

 window.addEventListener('scroll', animateOnScroll);
 window.addEventListener('load', animateOnScroll);