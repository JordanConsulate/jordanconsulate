    // =============== Time ======================================
    // Function to update time for a specific timezone
    function updateTime() {
        // Jordan Time (UTC+3)
        let jordanDate = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Amman" }));
        let jordanTime = jordanDate.toLocaleTimeString();
        document.getElementById("jordan-time").innerText = jordanTime;
  
        // Nepal Time (UTC+5:45)
        let nepalDate = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" }));
        let nepalTime = nepalDate.toLocaleTimeString();
        document.getElementById("nepal-time").innerText = nepalTime;
      }
      // Update time every second
      setInterval(updateTime, 1000);
      updateTime();




// ======================== Search =============================
    // Ensure the element exists before accessing it
const form = document.getElementById("searchForm");
const resultsDiv = document.getElementById("results");

// Position the results div below the search form
resultsDiv.style.position = "absolute";
resultsDiv.style.width = `${form.offsetWidth}px`;
resultsDiv.style.top = `${form.offsetTop + form.offsetHeight}px`;
resultsDiv.style.left = `${form.offsetLeft}px`;

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = document.getElementById("searchQuery").value;
    const apiUrl = `https://www.googleapis.com/customsearch/v1?key=AIzaSyAK5xST4fi6AX8yO9PaIt4B8rRXzWnCkaU&cx=00a523c8478af499a&q=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        displayResults(data);
        resultsDiv.style.display = "block"; // Show results
    } catch (error) {
        resultsDiv.innerHTML = `<p style="color: red;">Failed to fetch results: ${error.message}</p>`;
        resultsDiv.style.display = "block"; // Show error message
    }
});

// Function to display results
function displayResults(data) {
    resultsDiv.innerHTML = ''; // Clear previous results
    if (data.items && data.items.length > 0) {
        data.items.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `
                <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
                <p>${item.snippet}</p>
            `;
            resultsDiv.appendChild(resultItem);
        });
    } else {
        resultsDiv.innerHTML = '<p>No results found.</p>';
    }
}

// Hide results when clicking outside
document.addEventListener("click", (event) => {
    if (!form.contains(event.target) && !resultsDiv.contains(event.target)) {
        resultsDiv.style.display = "none";
    }
});


// =====================================================

