class App {
    constructor(message='duke') {
        this.message = message;
        console.log("created",this);
    }

    init(callback = _ => console.log('callback is not defined')) {
        console.log("initialized",this.message);
        callback(this.message);
    }
}

console.log('load time');

const withParams = new App('java');
const sayHello = greeting => console.log('global',greeting);
withParams.init(sayHello);
withParams.init();
