const buttonRootTemplate = `
    <style>
        :host {
            all: initial;
            contain: content;
        }

        :host button {
            background-color: lightgray;
            border: none;
            border-radius: 1px;
            padding: 20px;
            cursor: pointer;
        }

        :host button:hover {
            background-color: #e0e0e0;
        }

        :host([primary]) button {
            background-color: darkorange;
        }
        :host([primary]) button:hover {
            background-color: orange;
        }
    </style>`;

const buttonTemplate = `<button><slot></slot></button>`;
const linkTemplate = `<a href=""><slot></slot></a>`;

class BCButton extends BCElement {
    static get observedAttributes() {
        return ['primary'];
    }

    constructor() {
        super();

        const url = this.getAttribute('url');
        const template = document.createElement('template');
        const shadowRoot = this.attachShadow({ mode: 'open' });

        if (url) {
            template.innerHTML = buttonRootTemplate + linkTemplate;
        } else {
            template.innerHTML = buttonRootTemplate + buttonTemplate;
        }

        shadowRoot.appendChild(template.content.cloneNode(true));

        if (url) {
            shadowRoot.querySelector('a').setAttribute('href', url);
        }
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        // console.log(`attrName: ${attrName}, oldVal: ${oldVal}, newVal: ${newVal}`);
    }
}

window.customElements.define('bc-button', BCButton);