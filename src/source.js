class Foo extends HTMLElement {

  static get observedAttributes() {
    return ['data-foo'];
  }

  constructor(){
    super();
  }

  connectedCallback() {
  }

  attributeChangedCallback(name, oldValue, newValue) {
  }

  disconnectedCallback(){
  }

}

customElements.define('exa-foo', Foo);
