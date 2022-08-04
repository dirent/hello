import Text from './text.js';
import Input from './input.js';

class App {
    constructor(message='duke') {
        this.message = message;
        this.first = new Text('first');
        this.second = new Text('second');
        this.firstInput = new Input('firstInput', function(e) {
            console.log(e.target.value);
        });
        this.init();
    }

    init() {
        this.first.content(`first content: ${this.message}`);
        this.second.content('another contents');
    }
}

console.log('loading...');

const sayHello = greeting => console.log('global',greeting);
sayHello('chief duke');

new App('Java rocks...');