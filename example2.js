class MyBaseElement extends HTMLElement {
  constructor() {
    super();
  }

  // Whenever the element is added to a page
  connectedCallback() {
    console.log('connectedCallback');
  }

  // Whenever the element is removed from the page
  disconnectedCallback() {
    console.log('disconnectedCallback');
  }

  // Whenever the elements attributes change
  attributeChangedCallback(name, oldVal, newVal) {
    console.log('attributeChangedCallback', name, oldVal, newVal);
  }

  static get observedAttributes() {
    return ['asdf'];
  }
}

////////////////////////////////////////////////////

class MyElement extends MyBaseElement {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('doing my own thing');
  }

  static get observedAttributes() {
    return [...MyBaseElement.observedAttributes, 'other'];
  }
}

customElements.define('my-element', MyElement);

/*

document.querySelector('my-element').setAttribute('asdf', 'blah');
document.querySelector('my-element').setAttribute('asdf', 'blah2');
document.querySelector('my-element').setAttribute('other', 'blah');

*/