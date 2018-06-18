const expanderTemplate = `
    <style>
        :host {
            all: initial;
            contain: content;
            font-family: sans-serif;
        }
        .hidden {
            display: none;
        }
    </style>
    <div class="bc-expander">
        <div class="content hidden"><slot name="content"></slot></div>
        <a href="">
            <span class="hidden"><slot name="hide-text"></slot></span>
            <span><slot name="expand-text"></slot></span>
        </a>
        <!-- icon goes here -->
    </div>`;

// TODO: partial-collapse mode
// https://developers.google.com/web/fundamentals/web-components/examples/howto-tabs#demo
class BCExpander extends BCElement {

    _expand(e) {
        e.preventDefault();

        this._expandSlot.classList.add('hidden');
        this._hideSlot.classList.remove('hidden');
        this._content.classList.remove('hidden');
    }

    _close(e) {
        e.preventDefault();

        this._expandSlot.classList.remove('hidden');
        this._hideSlot.classList.add('hidden');
        this._content.classList.add('hidden');
    }

    constructor() {
        super();

        const template = document.createElement('template');
        const shadowRoot = this.attachShadow({ mode: 'open' });

        template.innerHTML = expanderTemplate;
        shadowRoot.appendChild(template.content.cloneNode(true));
        shadowRoot.querySelector('.bc-expander').classList.add(...this.bcAttrs.cssClass.split(' '));

        this._content = this.shadowRoot.querySelector('.content');
        this._hideSlot = this.shadowRoot.querySelector('slot[name=hide-text]').parentElement;
        this._expandSlot = this.shadowRoot.querySelector('slot[name=expand-text]').parentElement;

        this._hideSlot.addEventListener('click', this._close.bind(this));
        this._expandSlot.addEventListener('click', this._expand.bind(this));
    }
}

class BCExpanderContent extends BCElement {}
class BCExpanderHeader extends BCElement {}

window.customElements.define('bc-expander', BCExpander);
window.customElements.define('bc-expander-header', BCExpanderHeader);
window.customElements.define('bc-expander-content', BCExpanderContent);