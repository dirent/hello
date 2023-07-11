export default class Answer {

    get answer() {
        return new Promise(function (resolve, reject) {
            resolve(new Answer().fetchFromServer());
        });
    }

    async fetchFromServer() {
        return await fetch('http://localhost:8080/answers').then(response => response.json());
    }
}