	
    // ==================== Hero Section ====================
    // Access the Images
let slideImages = document.querySelectorAll('.slides img');
// Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
// Access the indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;

// Code for next button
next.addEventListener('click', slideNext);
function slideNext() {
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if (counter >= slideImages.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}

// Code for prev button
prev.addEventListener('click', slidePrev);
function slidePrev() {
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if (counter == 0) {
        counter = slideImages.length - 1;
    } else {
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
}

// Auto sliding
function autoSliding() {
    deletInterval = setInterval(timer, 2000); // Change image every 2 seconds
    function timer() {
        slideNext();
        indicators();
    }
}
autoSliding();

// Stop auto sliding when mouse is over
const container = document.querySelector('.hero');
container.addEventListener('mouseover', function() {
    clearInterval(deletInterval);
});

// Resume sliding when mouse is out
container.addEventListener('mouseout', autoSliding);

// Add and remove active class from the indicators
function indicators() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

// Add click event to the indicator
function switchImage(currentImage) {
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if (imageId > counter) {
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    } else if (imageId == counter) {
        return;
    } else {
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators();
}

document.addEventListener('DOMContentLoaded', function() {
    showSlides();
});
    // ==================== Hero Section End ====================

    
    // ==================== Articles Section ====================
// Articles data
const articles = [
    {
        
        title: "Call for Proposal - Local Transition and Media Projects",
        date: "15.01.2025 / 10:30",
        preview: "The Embassy of the Czech Republic in New Delhi announces a call for proposals for the Local Transition and Media Projects...",
        link: "article1.html"
    },
    {
        title: "Appointments for Long-term Visas/Residence Permits",
        date: "14.01.2025 / 12:00",
        preview: "Only applicants for long-term visas and residence permits can apply for the appointment date via this booking system...",
        link: "article2.html"
    },
    {
        title: "Renewal of short-term visas processing",
        date: "13.01.2025 / 09:15",
        preview: "The Czech Embassy in New Delhi informs that the new concession agreement for the processing of short-term visa applications...",
        link: "article3.html"
    }
];

// Render articles
const articlesContent = document.getElementById('articles-content');
articles.forEach(article => {
    articlesContent.innerHTML += `
        <article class="article">
            <a href="${article.link}" class="article-title">${article.title}</a>
                <div class="article-date">${article.date}</div>
            <p class="article-preview">${article.preview}  <a href="${article.link}" class="more">more</a></p>
            
        </article>
    `;
});
    // ==================== Articles Section End ====================


    // ==================== Gallery Section ====================
    var swiper = new Swiper(".slide-container", {
        slidesPerView: 4,
        spaceBetween: 20,
        sliderPerGroup: 4,
        loop: true,
        centerSlide: "true",
        fade: "true",
        grabCursor: "true",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
        },
      });
    // ==================== Gallery Section End ====================