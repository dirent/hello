import Text from './text.js';
import Input from './input.js';
import Answer from './answer.js';
import Table from './table.js';
import * as Storage from './store.js';

class App {
    constructor(message='duke') {
        this.message = message;
        this.first = new Text('first');
        this.second = new Text('second');
        this.table = new Table('answers');
        const listener = value => console.log(value);
        this.firstInput = new Input('firstInput', listener);
        this.answer = new Answer();
        this.answerButton = Text.lookup('slow');
        this.getAnswer = this.getAnswer.bind(this);
        this.store = new Storage.Store('response');
        console.log( Storage.precalculated );
        this.init();
    }

    init() {
        this.table.addHeader('java');
        this.table.addHeader('duke');
        this.table.addRow('one', 'two');
        this.table.addRow(3, 4);

        this.first.content(`first content: ${this.message}`);
        this.second.content('another contents');
        this.answerButton.onclick = this.getAnswer;
    }

    async getAnswer() {
        let result = this.store.load();
        if( !result ) {
            try {
                result = await this.answer.answer;
                this.store.store(result);
            } catch (e) {
                console.error(`error happened: ${e}`);
            }
        }
        this.output(result);
    }

    output( data ) {
        let [first] = data;
        this.table = new Table('answers');
        // create header from keys of the first row
        Reflect.ownKeys(first).forEach( name => this.table.addHeader(name) );
        // create rows from values
        for( let row of data ) {
            const { answer:result, precision:accuracy, duration:time='years' } = row;
            this.table.addRow( result, accuracy, time );
        }
    }
}

console.log('loading...');

const sayHello = greeting => console.log('global',greeting);
sayHello('chief duke');

const app = new App('Java rocks...');
