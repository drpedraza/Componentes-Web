class componentes extends HTMLElement{
    constructor(){
        super();
        this.name;
        this.surname;
    }

    static get observedAttributes(){
        return ['name', "surname"];
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        switch(nameAttr){
            case "name":
                this.name = newValue;
            break;
            case "surname":
                this.surname = newValue;
            break;
        }
    }

    connectedCallback(){
        this.innerHTML = `<div>
            <h1>Hola ${this.name} ${this.surname}</h1>
            <p>Ingenieria Web I</p>
        </div>`;
        this.style.color = "blue";
        this.style.fontFamily = "sans-serif";
    }
}

window.customElements.define("nombre-saludo", componentes);
