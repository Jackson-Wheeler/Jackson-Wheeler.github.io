class ButtonCount extends HTMLElement {
    btnStaticText = 'Times Clicked: ';
    count = 0;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        let btnEl = document.createElement('button');
        btnEl.type = 'button';
        this.shadowRoot.appendChild(btnEl);
        this.updateButton();

        this.addEventListener('click', this.onClickCustom);
    }

    updateButton() {
        let btnEl = this.shadowRoot.firstElementChild;
        btnEl.innerHTML = this.getButtonText();
    }


    getButtonText() {
        return this.btnStaticText + this.count;
    }

    onClickCustom() {
        this.count += 1;
        this.updateButton();
    }
}
// Register in the custom element registry
window.customElements.define('button-count', ButtonCount);