/*
Add to index.html

<my-element>
  <span slot="paragraph-content">Hello there!</span>
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