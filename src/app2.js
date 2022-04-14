import Text from './text.js'

class App {
    constructor(message='duke') {
        this.message = message;
        this.first = new Text('first');
        this.second = new Text('second');
        this.init();
    }

    init() {
        this.first.content(`first content: ${this.message}`);
        this.second.content('another contents');
    }
}

console.log('load time');

const sayHello = greeting => console.log('global',greeting);
sayHello('chief duke');

new App('Java rocks...');