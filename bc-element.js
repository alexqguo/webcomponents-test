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

        // console.log(this);
        // console.log(`[BCElement] cssClass: ${this.cssClass}`);
        // extraParameters
    }
}