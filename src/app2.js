import Text from './text.js';
import Input from './input.js';

class App {
    constructor(message='duke') {
        this.message = message;
        this.first = new Text('first');
        this.second = new Text('second');
        const listener = value => console.log(value);
        this.firstInput = new Input('firstInput', listener);
        this.init();
    }

    init() {
        this.first.content(`first content: ${this.message}`);
        this.second.content('another contents');
    }
}

console.log('loading...');
const second = Text.lookup('second');
console.dir(second);

const sayHello = greeting => console.log('global',greeting);
sayHello('chief duke');

new App('Java rocks...');