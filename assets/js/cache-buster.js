(function () {
  // Get all <link> and <script> tags
  const links = document.querySelectorAll('link[rel="stylesheet"]');
  const scripts = document.querySelectorAll('script[src]');

  // Add timestamp to CSS files
  links.forEach((link) => {
    const href = link.href.split('?')[0]; // Remove existing query parameters
    link.href = `${href}?v=${new Date().getTime()}`;
  });

  // Add timestamp to JS files
  scripts.forEach((script) => {
    const src = script.src.split('?')[0]; // Remove existing query parameters
    script.src = `${src}?v=${new Date().getTime()}`;
  });
})();
