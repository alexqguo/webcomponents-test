const reviewStarsTemplate = `
    <style>
        :host {
            all: initial;
            contain: content;
            display: inline-block;
        }
        :host * {
            cursor: pointer;
        }
    </style>
    <span class="star-container"></span>`;

const emptyStarTemplate = `<span class="star empty"><bc-icon icon-type="star-hollow"></bc-icon></span>`;
const fullStarTemplate = `<span class="star full"><bc-icon icon-type="star"></bc-icon></span>`;

class BCRatingStars extends BCElement {
    /*
    TODO
    - should fire event on click
    - JS parity
    - need the wrapper around bc-icon?
    */

    static get observedAttributes() {
        return ['star-count'];
    }

    /**
     * Repeats a string n times and then returns it. Shitty
     */
    static repeatString(string, n) {
        if (n === 0) { return ''; }

        let repeatedString = string;

        while (n && n > 0) {
            --n && (repeatedString += string);
        }

        return repeatedString;
    }

    constructor() {
        super();

        this.createShadowRoot(reviewStarsTemplate);
        this._container = this.shadowRoot.querySelector('.star-container');
        this._container.addEventListener('click', this.handleStarClick.bind(this));
        this.attributeChangedHandlers['star-count'] = this.renderStars.bind(this);

        this.renderStars();
    }

    addMouseEventListeners() {
        this._emptyStars.forEach(function(star) {
            star.addEventListener('mouseenter', this.handleStarHover.bind(this));
            star.addEventListener('mouseleave', this.handleStarLeave.bind(this));
        }.bind(this));
    }

    removeMouseEventListners() {
        // Truthy check this._stars in case it's the first time this is being rendered and there are no stars yet
        this._stars && this._stars.forEach(function(star) {
            star.removeEventListener('mouseenter', this.handleStarHover);
            star.removeEventListener('mouseleave', this.handleStarLeave);
        }.bind(this));
    }

    handleStarClick(e) {
        let target = e.target;

        if (target.nodeName === 'BC-ICON') {
            this.setAttribute('star-count', e.target.parentElement.getAttribute('data-index'));
        }
    }

    handleStarHover(e) {
        let hoveredStarIndex = Number.parseInt(e.currentTarget.getAttribute('data-index'));

        for (let i = hoveredStarIndex; i > 0; i--) {
            let star = this._stars[i - 1]; // Star indexes are based at 1, not 0
            if (star.classList.contains('full')) break;

            star.getElementsByTagName('bc-icon')[0].setAttribute('icon-type', 'star');
        }
    }

    handleStarLeave() {
        this._emptyStars.forEach(function(star) {
            star.querySelector('bc-icon').setAttribute('icon-type', 'star-hollow');
        });
    }

    generateStarIndexes() {
        for (let i = 0; i < this._stars.length; i++) {
            this._stars[i].setAttribute('data-index', i + 1);
        }
    }

    renderStars() {
        this.removeMouseEventListners();

        const starCountAttribute = this.getAttribute('star-count');
        let fullStarCount = Number.parseInt(starCountAttribute);

        if (isNaN(fullStarCount) || fullStarCount < 0) {
            fullStarCount = 0;
        }

        this._container.innerHTML = (
            BCRatingStars.repeatString(fullStarTemplate, fullStarCount) +
            BCRatingStars.repeatString(emptyStarTemplate, 5 - fullStarCount)
        );

        this._stars = this.shadowRoot.querySelectorAll('.star');
        this._emptyStars = this.shadowRoot.querySelectorAll('.star.empty');
        this.addMouseEventListeners();
        this.generateStarIndexes();
    }
}

window.customElements.define('bc-rating-stars', BCRatingStars);