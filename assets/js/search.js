 // JavaScript for search functionality
 const searchInput = document.querySelector('.searchInput');
 const resultsContainer = document.getElementById('resultsContainer');

 // All searchable tags
 const searchableTags = [...document.querySelectorAll('p, a, h1, h2, h3, h4, h5, h6, li, span, div')];

 // Event listener for input change
 searchInput.addEventListener('input', () => {
   const query = searchInput.value.toLowerCase();
   resultsContainer.innerHTML = ''; // Clear previous results
   resultsContainer.style.display = 'none';

   if (query.trim() === '') return; // Exit if query is empty

   let results = [];

   searchableTags.forEach((tag, index) => {
     if (tag.textContent.toLowerCase().includes(query)) {
       results.push({ content: tag.textContent, element: tag, id: index });
     }
   });

   if (results.length > 0) {
     resultsContainer.style.display = 'block';
     results.forEach(result => {
       const resultItem = document.createElement('div');
       resultItem.classList.add('resultItem');
       resultItem.textContent = result.content;

       // Scroll to the element on click
       resultItem.addEventListener('click', () => {
         result.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
         result.element.style.backgroundColor = 'yellow'; // Highlight the element
         setTimeout(() => (result.element.style.backgroundColor = ''), 2000); // Remove highlight
       });

       resultsContainer.appendChild(resultItem);
     });
   }
 });