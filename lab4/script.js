// Класс заявки на допуск к архиву
class AccessRequest {
    constructor(callsign, email, level, agreed) {
        this.callsign = callsign;
        this.email = email;
        this.level = level;
        this.agreed = agreed;
    }

    print() {
        console.log('\nПоступила заявка на допуск:');
        console.log(`Позывной: ${this.callsign}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Уровень допуска: ${this.level}`);
        console.log(`Согласие на обработку данных: ${this.agreed ? 'да' : 'нет'}`);
    }
}

const form = document.querySelector('.form');
let lastRequest = null;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const request = new AccessRequest(
        form.elements.callsign.value,
        form.elements.email.value,
        form.elements.level.value,
        form.elements.agree.checked
    );

    request.print();
    lastRequest = request;
});
