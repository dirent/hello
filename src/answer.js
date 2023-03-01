export default class Answer {

    get answer() {
        return new Promise(function (resolve, reject) {
            setTimeout(() => resolve(new Answer().fetchFromServer()), 1000);
        });
    }

    async fetchFromServer() {
        return await fetch('answer.json').then(response => response.json());
    }
}