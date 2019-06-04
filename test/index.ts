
declare var Reflect: any;

class MyElement extends HTMLElement {
    constructor() {
        super();
        return Reflect.construct(HTMLElement, [], this.constructor);
    }
  
    createdCallback() {
      console.log("Connected");
      this.setAttribute('dummy', "2");
  }
}

class MyElement2 extends MyElement {
  constructor() {
    super();
    return Reflect.construct(MyElement, [], this.constructor);
  }
  
  createdCallback() {
      super.createdCallback();
      console.log("Connected 2");
      this.setAttribute('dummy-2', "3");
      this.innerHTML = '<button>BUTTON</button>';
  };
}

customElements.define('my-el', MyElement);
customElements.define('my-el2', MyElement2);
  