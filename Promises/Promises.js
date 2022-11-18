//Promise
const p = (time, name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(time+''+name), time)
    })
}
p(100, 'opa').then(e => console.log(e))

//Promise.race
const p = (time, name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(time+''+name), time)
    })
}

const os = [
    p(100, 'opa'),
    p(200, 'opa2')
]

Promise.race(os).then(e => console.log(e))

//Promise.all
const p = (time, name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(time+''+name), time)
    })
}

const os = [
    p(100, 'opa'),
    p(200, 'opa2')
]

Promise.all(os).then((e) => console.log(e))