console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290


//+++ Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта
type someObjType = {
    name: string;
    age: number;
    greeting?: () => string
}

let someObj:someObjType = {
    name: 'Eugene',
    age: 32
}

function greeting() {
    // @ts-ignore
    const name = this.name
    // @ts-ignore
    const age = this.age
    return `My name is ${name}. I am ${age}`
}
//someObj.greeting = greeting
//console.log(someObj.greeting())

//+++ Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект
let counter = {
    count: 0,
    getCurrentCount() {
        return this.count
    },
    increment() {
        this.count += 1
        return counter
    },
    decrement() {
        this.count -= 1
        return counter
    },
    setCurrentCount(currentCount:number) {
        this.count = currentCount
        return counter
    },
    restCurrentCount() {
        this.count = 0
        return counter
    }
}
//console.log(counter.getCurrentCount())
//counter.increment()
//console.log(counter.getCurrentCount())
//counter.decrement()
//console.log(counter.getCurrentCount())
//counter.setCurrentCount(5)
//console.log(counter.getCurrentCount())
//counter.restCurrentCount()
//console.log(counter.getCurrentCount())

//+++ Task 03
// переделайте код из Task 02, что бы сработал следующий код:
//counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12
//console.log(counter.getCurrentCount())

//+++ Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01
function myFirstConstructorFunc(name: string, age: number) {
    return {
        name,
        age,
        greeting
    }
}
// @ts-ignore
const obj = new myFirstConstructorFunc('Ivan', 30)
//console.log(obj.greeting())

//+++ Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One
let One = {name: 'One'};
let Two = {name: 'Two', sayHello: function() {console.log(`Hello, my name is ${this.name}`)}};
//Two.sayHello.bind(One)()

//+++ Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore
const helperObj = {
    name: 'Anna',
    age: 20,
    changeName(newName:string) {
        this.name = newName
        return helperObj
    },
    setAge(age: number) {
        this.age = age
        return helperObj
    },
    greeting() {
        Two.sayHello.bind(this)()
    }
}
//helperObj.changeName('Serg').setAge(30)
//console.log(helperObj)
//helperObj.greeting()

//+++ Bind
// 1)+++ Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
function sumTwoNumbers(a:number,b:number):number {return a + b};

function bindNumber(f:(a:number, b:number) => number, c:number) {
    return f.bind(bindNumber, c)
}
//console.log(bindNumber(sumTwoNumbers, 6)(130))

// 2)+++ Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
// @ts-ignore
function funcBind(willChangeObj, changeRule) {
    return changeRule.changeName.bind(willChangeObj)
}
//funcBind(One, helperObj)('wwwww')
//console.log(One)

// 3)+++ Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
//helperObj.setAge.bind(Two)(135)
//console.log(Two)

// 4)+++ Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two
function hiBind() {
    helperObj.greeting.bind(Two)()
}
// @ts-ignore
//One.hi = hiBind
// @ts-ignore
//One.hi()

// Реализовать задачи 2-4 из Bind с помощью Call
// 2)+++ Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
function funcCall(willChangeObj, changeRule) {
    function other(str:string) {
        changeRule.changeName.call(willChangeObj, str)
    }
    return other
}
//funcCall(One, helperObj)('fffffff')
//console.log(One)

// 3)+++ Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
//helperObj.setAge.call(Two, 500)
//console.log(Two)

// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two
function hi() {
    helperObj.greeting.call(Two)
}
// @ts-ignore
//One.hi = hi
// @ts-ignore
//One.hi()

// just a plug
export default () => {};