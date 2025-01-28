const pages = [
    { title: "Home", url: "index.html", content: ["home1", "imageLink", "currencyConverter"] },
    { title: "Home", url: "include/link.html", content: ["link1", "link2", "link3", "link4", "link5", "link6"] },
    { title: "Home", url: "include/currencyConverter.html", content: ["currencyConverter", "link2", "link3", "link4", "link5", "link6"] },
    { title: "About Us", url: "about.html", content: ["about1", "about2", "about3"] }
  ];
  const searchBar = document.getElementById('searchBar');
  const searchResults = document.getElementById('searchResults');
  
  async function searchPages() {
    const query = searchBar.value.toLowerCase();
  
    // Clear previous results
    searchResults.innerHTML = '';
    if (!query) {
      searchResults.style.display = 'none';
      return;
    }
  
    searchResults.style.display = 'block';
  
    for (const page of pages) {
      try {
        const response = await fetch(page.url);
        const text = await response.text();
  
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
  
        page.content.forEach(id => {
          const element = doc.getElementById(id);
          if (element && element.textContent.toLowerCase().includes(query)) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `${page.url}#${id}`;
            a.textContent = `${page.title} - ${element.textContent}`;
            li.appendChild(a);
            searchResults.appendChild(li);
          }
        });
      } catch (error) {
        console.error(`Error loading ${page.url}:`, error);
      }
    }
  }
  
  // Hide results on click outside
  document.addEventListener('click', (e) => {
    if (!searchBar.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });
  

  // Hide results on scroll
//   window.addEventListener('scroll', () => {
//     searchResults.style.display = 'none';
//   });