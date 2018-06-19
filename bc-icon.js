const iconTemplate = `
    <style>
        :host {
            all: initial;
            contain: content;
            display: inline-block;
        }

        :host i {
            display: inline-block;
            font-family: "brickcity-icons";
            font-size: 16px;
            font-style: normal;
            font-weight: normal;
            line-height: 1.1;
        }

        :host([icon-size="small"]) i { font-size: 16px; }
        :host([icon-size="medium"]) i { font-size: 24px; }
        :host([icon-size="large"]) i { font-size: 32px; }

        :host([icon-type="add"]) i:before { content: "\\e601"; }
        :host([icon-type="add-circle"]) i:before { content: "\\e600"; }
        :host([icon-type="amazon"]) i:before { content: "\\e602"; }
        :host([icon-type="android"]) i:before { content: "\\e603"; }
        :host([icon-type="apple"]) i:before { content: "\\e604"; }
        :host([icon-type="archive"]) i:before { content: "\\e605"; }
        :host([icon-type="calendar"]) i:before { content: "\\e606"; }
        :host([icon-type="caret-down"]) i:before { content: "\\e607"; }
        :host([icon-type="caret-left"]) i:before { content: "\\e608"; }
        :host([icon-type="caret-right"]) i:before { content: "\\e609"; }
        :host([icon-type="caret-up"]) i:before { content: "\\e60a"; }
        :host([icon-type="cart"]) i:before { content: "\\e60b"; }
        :host([icon-type="chat"]) i:before { content: "\\e60c"; }
        :host([icon-type="check"]) i:before { content: "\\e60d"; }
        :host([icon-type="chevron-down"]) i:before { content: "\\e60e"; }
        :host([icon-type="chevron-left"]) i:before { content: "\\e60f"; }
        :host([icon-type="chevron-right"]) i:before { content: "\\e610"; }
        :host([icon-type="chevron-up"]) i:before { content: "\\e611"; }
        :host([icon-type="clock"]) i:before { content: "\\e612"; }
        :host([icon-type="close"]) i:before { content: "\\e613"; }
        :host([icon-type="download"]) i:before { content: "\\e614"; }
        :host([icon-type="edit"]) i:before { content: "\\e615"; }
        :host([icon-type="envelope"]) i:before { content: "\\e616"; }
        :host([icon-type="exclamation-triangle"]) i:before { content: "\\e617"; }
        :host([icon-type="facebook"]) i:before { content: "\\e619"; }
        :host([icon-type="facebook-square"]) i:before { content: "\\e618"; }
        :host([icon-type="file"]) i:before { content: "\\e61a"; }
        :host([icon-type="filter"]) i:before { content: "\\e61b"; }
        :host([icon-type="gift"]) i:before { content: "\\e61c"; }
        :host([icon-type="googleplus"]) i:before { content: "\\e61d"; }
        :host([icon-type="grid"]) i:before { content: "\\e61e"; }
        :host([icon-type="hamburger"]) i:before { content: "\\e61f"; }
        :host([icon-type="info-circle"]) i:before { content: "\\e620"; }
        :host([icon-type="list"]) i:before { content: "\\e621"; }
        :host([icon-type="location"]) i:before { content: "\\e622"; }
        :host([icon-type="microphone"]) i:before { content: "\\e623"; }
        :host([icon-type="move-to-bottom"]) i:before { content: "\\e624"; }
        :host([icon-type="move-to-top"]) i:before { content: "\\e625"; }
        :host([icon-type="overflow-vertical"]) i:before { content: "\\e626"; }
        :host([icon-type="pause"]) i:before { content: "\\e627"; }
        :host([icon-type="phone"]) i:before { content: "\\e628"; }
        :host([icon-type="pin"]) i:before { content: "\\e629"; }
        :host([icon-type="pinterest"]) i:before { content: "\\e62a"; }
        :host([icon-type="play"]) i:before { content: "\\e62b"; }
        :host([icon-type="podcast"]) i:before { content: "\\e62c"; }
        :host([icon-type="related"]) i:before { content: "\\e62d"; }
        :host([icon-type="restore"]) i:before { content: "\\e62e"; }
        :host([icon-type="search"]) i:before { content: "\\e62f"; }
        :host([icon-type="series"]) i:before { content: "\\e630"; }
        :host([icon-type="skip"]) i:before { content: "\\e631"; }
        :host([icon-type="star"]) i:before { content: "\\e635"; }
        :host([icon-type="star-half-left"]) i:before { content: "\\e632"; }
        :host([icon-type="star-half-right"]) i:before { content: "\\e633"; }
        :host([icon-type="star-hollow"]) i:before { content: "\\e634"; }
        :host([icon-type="trash"]) i:before { content: "\\e636"; }
        :host([icon-type="twitter"]) i:before { content: "\\e637"; }
        :host([icon-type="whispersync"]) i:before { content: "\\e638"; }
        :host([icon-type="windows"]) i:before { content: "\\e639"; }
        :host([icon-type="overflow-horizontal"]) i:before { content: "\\e640"; }
        :host([icon-type="chapters"]) i:before { content: "\\e641"; }
        :host([icon-type="bookmarks"]) i:before { content: "\\e642"; }
        :host([icon-type="globe"]) i:before { content: "\\e643"; }
        :host([icon-type="volume-high"]) i:before { content: "\\e644"; }
        :host([icon-type="volume-medium"]) i:before { content: "\\e645"; }
        :host([icon-type="volume-low"]) i:before { content: "\\e646"; }
        :host([icon-type="volume-off"]) i:before { content: "\\e647"; }
        :host([icon-type="minimize-screen"]) i:before { content: "\\e648"; }
        :host([icon-type="maximize-screen"]) i:before { content: "\\e649"; }
        :host([icon-type="instagram"]) i:before { content: "\\e900"; }
    </style>

    <i aria-hidden="true"></i>
`;

class BCIcon extends BCElement {
    constructor() {
        super();
        this.createShadowRoot(iconTemplate);
    }
}

window.customElements.define('bc-icon', BCIcon);