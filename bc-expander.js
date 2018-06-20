const expanderTemplate = `
    <style>
        :host {
            all: initial;
            contain: content;
            font-family: sans-serif;
        }
        :host .content {
            overflow: hidden;
            position: relative;
        }
        :host .fade {
            bottom: 0;
            width: 100%;
            height: 20px;
            position: absolute;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0), white);
        }
        :host .hidden {
            display: none;
        }
    </style>
    <div class="bc-expander">
        <div class="content hidden">
            <slot name="content"></slot>
            <div class="fade hidden"></div>
        </div>
        <a href="">
            <span class="hidden"><slot name="hide-text"></slot></span><!--
            --><span><slot name="expand-text"></slot></span><!--
        --></a>
        <bc-icon icon-type="caret-down"></bc-icon>
    </div>`;

const DEFAULT_COLLAPSED_HEIGHT = '40';

class BCExpander extends BCElement {

    // Not adding handlers because from a usability perspective these behaviors
    // should never change once rendered
    static get observedAttributes() {
        return ['partial-collapse', 'collapsed-height'];
    }

    _showCloseLink() {
        this._expandSlot.classList.add('hidden');
        this._hideSlot.classList.remove('hidden');
        this._icon.setAttribute('icon-type', 'caret-up');
    }

    _showOpenLink() {
        this._hideSlot.classList.add('hidden');
        this._expandSlot.classList.remove('hidden');
        this._icon.setAttribute('icon-type', 'caret-down');
    }

    _expand(e) {
        e.preventDefault();
        this._showCloseLink();

        if (this._partialCollapse) {
            this._content.style.height = 'auto';
            this._fader.classList.add('hidden');
        } else {
            this._content.classList.remove('hidden');
        }
    }

    _collapse(e) {
        e.preventDefault();
        this._showOpenLink();

        if (this._partialCollapse) {
            this._content.style.height = this._collapsedHeight;
            this._fader.classList.remove('hidden');
        } else {
            this._content.classList.add('hidden');
        }
    }

    constructor() {
        super();

        this.createShadowRoot(expanderTemplate);
        this._fader = this.shadowRoot.querySelector('.fade');
        this._icon = this.shadowRoot.querySelector('bc-icon');
        this._content = this.shadowRoot.querySelector('.content');
        this._partialCollapse = this.hasAttribute('partial-collapse');
        this._hideSlot = this.shadowRoot.querySelector('slot[name=hide-text]').parentElement;
        this._expandSlot = this.shadowRoot.querySelector('slot[name=expand-text]').parentElement;
        this._collapsedHeight = `${this.getAttribute('collapsed-height') || DEFAULT_COLLAPSED_HEIGHT}px`;

        if (this._partialCollapse) {
            this._fader.classList.remove('hidden');
            this._content.classList.remove('hidden');
            this._content.style.height = this._collapsedHeight;
        }

        this._hideSlot.addEventListener('click', this._collapse.bind(this));
        this._expandSlot.addEventListener('click', this._expand.bind(this));
    }
}

class BCExpanderContent extends BCElement {}
class BCExpanderHeader extends BCElement {}

window.customElements.define('bc-expander', BCExpander);
window.customElements.define('bc-expander-header', BCExpanderHeader);
window.customElements.define('bc-expander-content', BCExpanderContent);