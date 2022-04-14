class App {
    constructor(message='duke') {
        this.message = message;
        console.log("created",this);
    }

    init(callback = param => console.log('default:', param)) {
        console.log("initialized",this.message);
        callback(this.message);
    }
}

console.log('load time');

const sayHello = greeting => console.log('global',greeting);
sayHello('chief duke');

const withParams = new App('java');
withParams.init(sayHello);
withParams.init();

(function(content) {
    console.log('anonymous', content);
}('duke'));
