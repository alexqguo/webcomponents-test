/*
- Proper template and slot usage

Add to index.html:
<my-element>
  <span slot="paragraph-content">Hello there!</span>
  <img slot="other-content" src="https://media1.tenor.com/images/381700fd0e28a386c794df5dc61c9f15/tenor.gif">
</my-element>

<template id="my-template">
  <style>
    p {
      font-style: italic;
      line-height: 1.2;
      font-size: 16px;
    }
  </style>

  <p>
    Slot begins here: <slot name="paragraph-content">PLACEHOLDER CONTENT</slot>
  </p>
  <p>
    <slot name="other-content"></slot>
  </p>
</template>
*/

class MyElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // Set up the content via template
    const template = document.getElementById('my-template');
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('my-element', MyElement);