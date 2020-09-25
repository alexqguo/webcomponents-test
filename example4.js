const myTemplate = `
  <style>
    p {
      color: blue;
    }
  </style>

  <p>
    <slot></slot>
    <br>
    <img src="https://media1.tenor.com/images/381700fd0e28a386c794df5dc61c9f15/tenor.gif">
  </p>
`;

class MyElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // External styles
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'shadowstyles.css');
    shadowRoot.appendChild(link);

    // Set up the content via template
    const template = document.createElement('template');
    template.innerHTML = myTemplate;
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('my-element', MyElement);