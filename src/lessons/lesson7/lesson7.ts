console.log('Lesson 7');

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI


//+++ Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают
/* class Animal {
    name: string;
    constructor(name = 'Animal') {
        this.name = name
    }
    walk() {
        console.log(this.name + ' walking')
    }
    eat() {
        console.log(this.name + ' eating')
    }
    sleep() {
        console.log(this.name + ' sleeping')
    }
}
const a = new Animal()
a.walk()
a.eat()
a.sleep() */


//+++ Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают
/* class Monkey extends Animal {
    constructor(name = 'Monkey') {
        super(name)
    }
    roar() {
        console.log(this.name + ' roaring')
    }
    climb() {
        console.log(this.name + ' climbing')
    }
}
const b = new Monkey()
b.climb()
b.eat()
b.roar()
b.sleep()
b.walk() */


//+++ Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают
/* class Human extends Monkey {
    constructor(name = 'Human') {
        super(name)
    }
    speak() {
        console.log(this.name + ' speaking')
    }
    think() {
        console.log(this.name + ' thinking')
    }
}
const c = new Human()
c.climb()
c.eat()
c.roar()
c.sleep()
c.speak()
c.think()
c.walk() */


//+++ Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование
function Animal(this: any, name = 'Animal') {
    this.name = name
    this.walk = function() {
        console.log(this.name + ' walking')
    }
    this.eat = function() {
        console.log(this.name + ' eating')
    }
    this.sleep = function() {
        console.log(this.name + ' sleeping')
    }  
}
const d = new (Animal as any)()
d.walk()
d.eat()
d.sleep()

function Monkey(this: any, name = 'Monkey') {
    this.name = name
    this.roar = function() {
        console.log(this.name + ' roaring')
    }
    this.climb = function() {
        console.log(this.name + ' climbing')
    }
}
const e = new (Monkey as any)()
e.__proto__ = d
e.walk()
e.eat()
e.sleep()
e.roar()
e.climb()

function Human(this: any, name = 'Human') {
    this.name = name
    this.speak = function() {
        console.log(this.name + ' speaking')
    }
    this.think = function() {
        console.log(this.name + ' thinking')
    }
}
const f = new (Human as any)()
f.__proto__ = e
f.walk()
f.eat()
f.sleep()
f.roar()
f.climb()
f.speak()
f.think()


//--- Task 05
// Используя метод Apply реализовать свой собственный метод bind


// just a plug
export default () => {};