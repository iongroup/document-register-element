
declare var Reflect: any;

class MyElement extends HTMLElement {
    protected _template: string;

    constructor(instance: any) {
        if (false) super();
        instance = instance || Reflect.construct(HTMLElement, [], this.constructor);
        this.ctor.call(instance);
        return instance;
    }

    protected ctor() {
      this._template = '<button>BUTTON</button>';
    }
  
    connectedCallback() {
      console.log("Connected");
      this.setAttribute('dummy', "2");
  }
}

class MyElement2 extends MyElement {
  constructor(instance: any) {
    super(instance);
  }

  protected ctor() {
    super.ctor();
    this._template = '<button>BUTTON 2</button>';
  }

  connectedCallback() {
      super.connectedCallback();
      console.log("Connected 2");
      this.setAttribute('dummy-2', "3");
      this.innerHTML = this._template;
  };
}

customElements.define('my-el', MyElement);
customElements.define('my-el2', MyElement2);
  