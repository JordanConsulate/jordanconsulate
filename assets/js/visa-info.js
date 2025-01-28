    // Animate steps on scroll
    function animateSteps() {
        const steps = document.querySelectorAll('.step');
        steps.forEach(step => {
            const stepTop = step.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (stepTop < windowHeight - 50) {
                step.classList.add('visible');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize animations
    window.addEventListener('scroll', animateSteps);
    window.addEventListener('load', animateSteps);