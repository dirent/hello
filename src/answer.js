export default class Answer {

    answer() {
        return new Promise(function (resolve, reject) {
            setTimeout(() => resolve(new Answer().calculate()), 1000);
        });
    }

    calculate() {
        return {
            answer: Math.random(),
            precision: 'low',
            duration: 'seconds'
        }
    }
}