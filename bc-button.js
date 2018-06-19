const buttonRootTemplate = `
    <style>
        :host {
            all: initial;
            contain: content;
            display: inline-block;
        }

        :host a {
            color: black;
            font-family: sans-serif;
            text-decoration: none;
            display: inline-block;
        }

        :host > * {
            background-color: lightgray;
            border: none;
            border-radius: 1px;
            padding: 20px;
            cursor: pointer;
            font-size: 14px;
        }
        :host > *:hover {
            background-color: #e0e0e0;
        }
        :host > *:active {
            background-color: #d6d6d6;
        }

        :host([primary]) > * {
            background-color: darkorange;
        }
        :host([primary]) > *:hover {
            background-color: orange;
        }
        :host([primary]) > *:active {
            background-color: #ec8d0e;
        }

        :host([disabled]) > * {
            opacity: 0.5;
            cursor: default;
        }
        :host([disabled])::before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 10;
            top: 0;
            left: 0;
        }
    </style>`;

const buttonTemplate = `<button><slot></slot></button>`;
const linkTemplate = `<a href=""><slot></slot></a>`;

class BCButton extends BCElement {
    static get observedAttributes() {
        return ['primary', 'disabled'];
    }

    constructor() {
        super();

        const url = this.getAttribute('url');
        this.createShadowRoot(buttonRootTemplate + (url ? linkTemplate : buttonTemplate));

        if (url) {
            this.shadowRoot.querySelector('a').setAttribute('href', url);
        }

        this.attributeChangedHandlers.primary = this.updatePrimary.bind(this);
        this.attributeChangedHandlers.disabled = this.updateDisabled.bind(this);
    }

    updatePrimary() {
        // no-op. styling handles it
    }

    updateDisabled(oldVal, newVal) {
        const root = this.shadowRoot.querySelector('button, a');

        if (typeof newVal === 'undefined' || newVal === null) {
            root.removeAttribute('aria-disabled');
        } else {
            root.setAttribute('aria-disabled', 'true');
        }
    }
}

window.customElements.define('bc-button', BCButton);