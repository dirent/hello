import Text from './text.js';
import Input from './input.js';
import Answer from './answer.js';

class App {
    constructor(message='duke') {
        this.message = message;
        this.first = new Text('first');
        this.second = new Text('second');
        const listener = value => console.log(value);
        this.firstInput = new Input('firstInput', listener);
        this.answer = new Answer();
        this.answerButton = Text.lookup('slow');
        this.getAnswer = this.getAnswer.bind(this);
        this.init();
    }

    init() {
        this.first.content(`first content: ${this.message}`);
        this.second.content('another contents');
        this.answerButton.onclick = this.getAnswer;
    }

    getAnswer() {
        this.answer.answer().
            then( response => this.first.content(response) ).
            catch( e => console.warn(e) );
    }
}

console.log('loading...');

const sayHello = greeting => console.log('global',greeting);
sayHello('chief duke');

const exceptional = () => { throw new Error('41') };
try {
    exceptional();
} catch(e) {
    console.log(`${e.message}  -->  ${e.stack}`);
    console.error(e);
} finally {
    console.info('always executed');
}

const app = new App('Java rocks...');
