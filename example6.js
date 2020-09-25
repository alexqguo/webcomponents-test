/*
Add to index.html

<my-counter></my-counter>
*/

// HTML Import polyfill
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/@webcomponents/html-imports@1.2.5/html-imports.min.js';

// Import custom element
const link = document.createElement('link');
link.rel = 'import';
link.href = 'my-counter.html';

document.body.appendChild(script);
document.body.appendChild(link);
