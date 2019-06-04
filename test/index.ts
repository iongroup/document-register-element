
declare var Reflect: any;

class MyElement1 extends HTMLElement {
    protected _template: string;

    constructor(instance: any) {
        if (false) super();
        instance = instance || Reflect.construct(HTMLElement, [], this.constructor);
        MyElement1.prototype.ctor.call(instance);
        return instance;
    }

    protected ctor() {
      this._template = '<button>BUTTON</button>';
    }
  
    connectedCallback() {
      console.log("Connected");
      this.setAttribute('dummy', "2");
      this.innerHTML = this._template;
    }
}

customElements.define('my-el', MyElement1);
  