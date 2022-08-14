import Text from './text.js';

export default class Input extends Text {

    constructor(id, changeListener) {
        super(id);
        this.listeners =
            [ changeListener, e => console.log( e.target.value ) ];
        this.register();
    }

    register() {
        this.listeners.forEach( l => this.domElement.addEventListener("change", l) );
    }
}