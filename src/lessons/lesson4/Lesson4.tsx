import React from 'react'
import './lesson_4';

const Lesson4 = () => {

    //--- Task 05
    // Создайте литерал объекта handlePromise со следующими свойствами:
    // promise, resolve, reject, onSuccess, onError
    // Проинициализируйте первые три свойства null,
    // а последние два функциями, которые принимают один параметр и выводят
    // в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
    // вторая - `Promise is rejected with error: ${paramName}`
    // Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
    // Первый обработчик, создает промис, заполняет первые три свойства,
    // описаного выше объекта: свойство promise получает новый созданный промис,
    // свойства resolve и reject получают ссылки на соответствующие функции
    // resolve и reject. Следующие два обработчика запускают методы resolve и reject.

    let handlePromise = {
        promise: null,
        resolve: null,
        reject: null,
        onSuccess: (paramName: any) => console.log(`Promise is resolved with data: ${paramName}`),
        onError: (paramName: any) => console.log(`Promise is rejected with error: ${paramName}`)
    }

    function createPromise() {
        
    }
    function resolvePromise() {
        handlePromise.onSuccess(handlePromise.resolve)
    }
    function rejectPromise() {
        handlePromise.onError(handlePromise.resolve)
    }

    return (
        <div>
            <button onClick={() => {}} id='btn-create-promise'>Create Promise</button>
            <button onClick={() => {}} id='btn-resolve-promise'>Resolve Promise</button>
            <button onClick={() => {}} id='btn-reject-promise'>Reject Promise</button>
        </div>
    );
}

export default Lesson4;