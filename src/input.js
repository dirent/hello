import Text from './text.js';

export default class Input extends Text {

    constructor(id, ...listeners) {
        super(id);
        this.listeners = listeners;
        this.register();
    }

    register() {
        this.listeners.forEach( l => this.domElement.addEventListener("change", l) );
    }
}