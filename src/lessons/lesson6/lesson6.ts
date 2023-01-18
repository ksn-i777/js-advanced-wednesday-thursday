console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

//+ Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.
class Student {
    name: string;
    lastName: string;
    group: number;
    performance: number;
    constructor(name:string, lastName:string, group:number, performance:number) {
        this.name = name
        this.lastName = lastName
        this.group = group
        this.performance = performance
    }
    saySelf() {
        if(this.performance >= 4) {console.log(`${this.lastName}, group: ${this.group}`)}
    }
}
const st1 = new Student('a', 'aa', 1, 5)
const st2 = new Student('b', 'bb', 2, 4)
const st3 = new Student('c', 'cc', 3, 3)
const st4 = new Student('d', 'dd', 4, 2)
const st5 = new Student('e', 'ee', 5, 1)
//const arr = [st1, st2, st3, st4, st5].sort((a, b) => a.performance - b.performance).map(el => el.saySelf())

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

//+ Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию
class Time {
    hours: number;
    minutes: number;
    seconds: number;
    constructor(time: Date) {
        this.hours = time.getHours()
        this.minutes = time.getMinutes()
        this.seconds = time.getSeconds()
    }
    setTime(hours: number, minutes: number, seconds:number) {
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
    }
    getTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    }
}


//+ Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.
class Сustomer{
    lastName: string;
    name: string;
    address: string;
    card: number;
    constructor(lastName: string, name: string, address: string, card:number) {
        this.lastName = lastName
        this.name = name
        this.address = address
        this.card = card
    }
    setlastName(lastName: string) {
        this.lastName = lastName
    }
    setName(name: string) {
        this.name = name
    }
    setAddress(address: string) {
        this.address = address
    }
    setCard(card: number) {
        this.card = card
    }
    getCustomer() {
        if(this.card < 3) {
            console.log(`${this.lastName} ${this.name} living on ${this.address} with card ${this.card}`)
        }
    }
}
/* const arr = [new Сustomer('ccc', 'c', 'CC street', 1), new Сustomer('bbb', 'b', 'BB street', 2), new Сustomer('aaa', 'a', 'AA street', 3)]
.sort((a, b) => a.name.localeCompare(b.name)).map(el => el.getCustomer()) */

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.
class Car {
    m: string;
    numC: number;
    power: number;
    constructor(m:string, numC:number, power:number) {
        this.m = m
        this.numC = numC
        this.power = power
    }
    getCar() {
        console.log(`This ${this.m} have ${this.numC} cylinders and power ${this.power}`)
    }
}
class Gruz extends Car {
    gruz: number;
    constructor(m:string, numC:number, power:number, gruz:number) {
        super(m, numC, power)
        this.gruz = gruz
    }
    setM(m:string) {
        this.m = m
    }
    setGruz(g:number) {
        this.gruz = g
    }
    getCar() {
        console.log(`This ${this.m} have ${this.numC} cylinders, power ${this.power} and gruz: ${this.gruz}`)
    }
}
const maz = new Gruz('maz', 12, 1000, 500)


// just a plug
export default () => {
};