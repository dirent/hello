export default class Answer {

    answer() {
        return new Promise(function (resolve, reject) {
            setTimeout(_ => resolve(Math.random()), 1000);
        });
    }
}