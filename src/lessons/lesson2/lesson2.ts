import {log} from 'util';

console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


//+++ Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
/*function sum(a:number) {
    return function(b:number) {
        return a + b
    }
}
console.log(sum(3)(6))*/

//+++ Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3
/*function makeCounter() {
    let count = 0
    return () => {
        return ++count
    }
}
const counter = makeCounter()
console.log('counter-log1-expect-1: ' + counter())
console.log('counter-log2-expect-2: ' + counter())
const counter2 = makeCounter()
console.log('counter2-log1-expect-1: ' + counter2())
console.log('counter-log3-expect-3: ' + counter())*/

//+++ Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
/*function makeCounter2(num:number) {
    let count = num
    return {
        inc: () => ++count,
        dec: () => --count,
        res: () => count = 0,
        set: () => count = num
    }
}
const counter3 = makeCounter2(5)
console.log(counter3.inc())
console.log(counter3.dec())
console.log(counter3.res())
console.log(counter3.set())*/

//--- Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10
/*function superSum(col:number) {
    if (col === 0) {return 0}
    if (col === 1) {return (a:number) => a}
}
console.log(superSum(0))
// @ts-ignore
console.log(superSum(1)(5))*/

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

//+++ Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
/*function cycleSumTo(num: number) {
    let sum = 0
    for (let i=1; i<=num; i++) {
        sum += i
    }
    return sum
}
console.log('expect 1: ' + cycleSumTo(1))
console.log('expect 3: ' + cycleSumTo(2))
console.log('expect 6: ' + cycleSumTo(3))
console.log('expect 10: ' + cycleSumTo(4))
console.log('expect 5050: ' + cycleSumTo(100))*/

// @ts-ignore
/*function recursionSumTo(num: number) {
    return (num === 1) ? num : num + recursionSumTo(num-1)
}
console.log('expect 1: ' + recursionSumTo(1))
console.log('expect 3: ' + recursionSumTo(2))
console.log('expect 6: ' + recursionSumTo(3))
console.log('expect 10: ' + recursionSumTo(4))
console.log('expect 5050: ' + recursionSumTo(100))*/

/*function progressionSumTo(num: number) {
    return (1 + num)/2 * num
}
console.log('expect 1: ' + progressionSumTo(1))
console.log('expect 3: ' + progressionSumTo(2))
console.log('expect 6: ' + progressionSumTo(3))
console.log('expect 10: ' + progressionSumTo(4))
console.log('expect 5050: ' + progressionSumTo(100))*/

// @ts-ignore
/*function factorial(n:number) {
    return n === 1 ? 1 : n * factorial(n-1)
}
console.log('expect 1: ' + factorial(1))
console.log('expect 2: ' + factorial(2))
console.log('expect 6: ' + factorial(3))
console.log('expect 24: ' + factorial(4))
console.log('expect 120: ' + factorial(5))*/

/*function fib(n:number) {
    let arr = []
    let num = 0
    for (let i=0; i<n; i++) {
        if (i===0 || i===1) {arr.push(1)}
        else {
            num = arr[arr.length-1]+arr[arr.length-2]
            arr.push(num)
        }
    }
    return arr[n-1]
}
console.log('expect 1 ->' + fib(1))
console.log('expect 1 ->' + fib(2))
console.log('expect 2 ->' + fib(3))
console.log('expect 13 ->' + fib(7))
console.log('expect 5527939700884757 ->' + fib(77))*/

/*let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};*/

/*function printList(list:any) {
    let obj = list
    while (obj) {
        console.log(obj.value)
        obj = obj.next
    }
}
printList(list)*/

/*function printList2(list:any) {
    let obj = list
    if (obj.next) {
        console.log(obj.value)
        printList2(obj.next)
    } else {
        console.log(obj.value)
    }
}
printList2(list)*/

/*function printList3(list:any) {
    let obj = list
    let arr = []
    while (obj) {
        arr.push(obj.value)
        obj = obj.next
    }
    arr.reverse().map(el=>console.log(el))
}
printList3(list)*/

/*function printList4(list:any) {
    let obj = list
    let arr = []
    if (obj.next) {
        arr.push(obj.value)
        printList4(obj.next)
    } else {
        arr.push(obj.value)
    }
    console.log(arr[0])
}
printList4(list)*/

//+++ Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
/*let arr:any = []
function flatArray(initArr:any) {
    for (let i=0; i<initArr.length; i++) {
        Number.isInteger(initArr[i]) ? arr.push(initArr[i]) : flatArray(initArr[i])
    }
}
flatArray([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]])
console.log(arr)*/

// just a plug
export default () => {};