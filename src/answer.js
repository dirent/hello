export default class Answer {

    answer() {
        return new Promise( (resolve, reject) => {
            setTimeout(_ => resolve('42'), 2000);
        });
    }
}