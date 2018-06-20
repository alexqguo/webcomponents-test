/**
 * handles common things like cssClass/id/extraParameters..?
 */
class BCElement extends HTMLElement {
    constructor() {
        super();

        this.bcAttrs = {
            id: this.getAttribute('id'),
            cssClass: this.getAttribute('css-class')
        };

        // Each element can add to this and use them more easily in attributeChangedCallback
        this.attributeChangedHandlers = {};

        // console.log(`[BCElement] cssClass: ${this.cssClass}`);
        // extraParameters
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        // attributeChangedHandlers comes from BCElement
        const handler = this.attributeChangedHandlers[attrName];

        if (typeof handler === 'function') {
            handler(oldVal, newVal);
        }
    }

    /**
     * Creates and returns the shadow DOM for the element, given template HTML
     * 
     * TODO - should this be part of the constructor?
     * 
     * @param templateContent - inner HTML for the template
     * @return - the shadow root of the element
     */
    createShadowRoot(templateContent) {
        const template = document.createElement('template');
        const shadowRoot = this.attachShadow({ mode: 'open' });

        template.innerHTML = templateContent;
        shadowRoot.appendChild(template.content.cloneNode(true));
        
        return shadowRoot;
    }
}