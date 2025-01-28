 // =============== Topbar ======================================
    // Function to update time for a specific timezone
    function updateTime() {
        // Jordan Time (UTC+3)
        let jordanDate = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Amman" }));
        let jordanTime = jordanDate.toLocaleTimeString();
        document.getElementById("topBarJordanTime").innerText = jordanTime;
  
        // Nepal Time (UTC+5:45)
        let nepalDate = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" }));
        let nepalTime = nepalDate.toLocaleTimeString();
        document.getElementById("nepal-time").innerText = nepalTime;
      }
      // Update time every second
      setInterval(updateTime, 1000);
      updateTime();
  


      document.getElementById('allSocialIcon').addEventListener('click', function() {
        var socialIcons = document.getElementById('socialIcons');
        socialIcons.classList.toggle('show');
        this.style.display = 'none';
    });
  

    document.getElementById('closeSocialIcons').addEventListener('click', function() {
        var socialIcons = document.getElementById('socialIcons');
        var allSocialIcon = document.getElementById('allSocialIcon');
        socialIcons.classList.remove('show');
        allSocialIcon.style.display = 'block';
    });
      // =============== Topbar End ======================================


/* =================== Navbar ====================== */
  // Toggle search input
  const searchIcon = document.querySelector('.searchIcon');
  const searchInput = document.querySelector('.searchInput');
  
  searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
      searchInput.focus();
    }
  });
  
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menuToggle');
  const closeMenu = document.querySelector('.closeMenu');
  const navLinks = document.querySelector('.navLinks');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  
  closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  
  // Close search when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchIcon.contains(e.target) && !searchInput.contains(e.target)) {
      searchInput.classList.remove('active');
    }
  });
  
  // Handle dropDown menus on mobile
  const dropDownToggles = document.querySelectorAll('.dropDownToggle');
  
  dropDownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropDownMenu = toggle.nextElementSibling;
        const icon = toggle.querySelector('i');
        
        // Close other dropDowns
        dropDownToggles.forEach(otherToggle => {
          if (otherToggle !== toggle) {
            otherToggle.nextElementSibling.classList.remove('active');
            otherToggle.querySelector('i').classList.remove('active');
          }
        });
  
        // Toggle current dropDown
        dropDownMenu.classList.toggle('active');
        icon.classList.toggle('active');
      }
    });
  });

  
  
  // Reset styles on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
      document.querySelectorAll('.dropDownMenu').forEach(menu => {
        menu.classList.remove('active');
      });
      document.querySelectorAll('.dropDownToggle i').forEach(icon => {
        icon.classList.remove('active');
      });
    }
  });
/* ============ Navbar End ============= */
