export default class Store {

    constructor(name) {
        this.slot = name;
        this.storage = window.localStorage;
    }

    store(value) {
        const stringified = JSON.stringify(value);
        this.storage.setItem(this.slot, stringified);
    }

    load() {
        const stringified = this.storage.getItem(this.slot);
        return JSON.parse(stringified);
    }
}