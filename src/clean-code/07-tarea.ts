(() => {

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

    class HtmlElement {
        constructor(public id: string, public type: HtmlType) {
            this.id = id;
            this.type = type;
        }
    }

    class InputAttributes {
        constructor(public value: string, public placeholder: string) {
            this.value = value;
            this.placeholder = placeholder;
        }
    }

    class InputEvents {
        constructor() { }


        setFocus() { };
        getValue() {
        };
        isActive() { };
        removeValue() { };
    }


    //? Idea para la nueva clase InputElement
    class InputElement {
        public html: HtmlElement;
        public attributes: InputAttributes;
        public events: InputEvents;

        // Constructor Estatico
        static create(value: string, placeholder: string) {
            return new InputElement(value, placeholder, 'txtName');
        }

        constructor(value: string, placeholder: string, id: string) {
            this.html = new HtmlElement(id, 'input');
            this.attributes = new InputAttributes(value, placeholder);
            this.events = new InputEvents();
        }
    }

    const fieldWithStaticConstructor = InputElement.create('Fernando', 'Enter first name');
    

})()