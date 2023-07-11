export default class Clock {

    constructor(listener) {
        this.listener = listener;
        this.socket = new WebSocket( "ws://localhost:8080/clock" );
        this.socket.onopen = e => console.log(e);
        this.socket.onmessage = ( { data : time } ) => this.listener(time);
    }
}