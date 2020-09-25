/*
- Shadow DOM (diagram)
- <video>
- Shadow root, Hello there text disappears
- Add content via template string
*/

const myTemplate = `
  <p>
    <iframe src="https://giphy.com/embed/Nx0rz3jtxtEre" width="240" height="120" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  </p>
`;

class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Set up the content via template
    const template = document.createElement('template');
    template.innerHTML = myTemplate;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('my-element', MyElement);