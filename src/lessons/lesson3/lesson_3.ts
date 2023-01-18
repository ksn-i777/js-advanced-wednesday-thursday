import axios from 'axios';

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

const commonInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/posts',	
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})

const API = {
    getPost: (id: number) => {
        return commonInstance.get(`${id}`)
    },
    getAllPosts: () => {
        return commonInstance.get(``)
    },
    createPost: () => {
        return commonInstance.post(``, {title: 'foo', body: 'bar', userId: 1})
    },
    updatePost: (id: number) => {
        return commonInstance.put(`${id}`, {id: 1, title: 'foo', body: 'bar', userId: 1})
    },
    deletePost: (id: number) => {
        return commonInstance.delete(`${id}`)
    },
}

//API.getPost(1).then(response => JSON.stringify(response.data)).then(json => console.log(json))
//API.getAllPosts().then(response => JSON.stringify(response.data)).then(json => console.log(json))
//API.createPost().then(response => JSON.stringify(response.data)).then(json => console.log(json))
//API.updatePost(1).then(response => JSON.stringify(response.data)).then(json => console.log(json))
//API.deletePost(1).then(response => JSON.stringify(response.data)).then(json => console.log(json))


// just a plug
export default ()=>{};