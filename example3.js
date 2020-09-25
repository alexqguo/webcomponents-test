const myTemplate = `
  <p>
    <iframe src="https://giphy.com/embed/Nx0rz3jtxtEre" width="240" height="120" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  </p>
`;

class MyElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // Set up the content via template
    const template = document.createElement('template');
    template.innerHTML = myTemplate;
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('my-element', MyElement);