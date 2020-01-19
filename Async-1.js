var fn1 = () => {
console.log('fn1')
return Promise.resolve(1)
}

var fn2 = () => new Promise(resolve => {
console.log('fn2')
setTimeout(() => resolve(2), 1000)
})


async function promiseReduce(asyncFunctions, reduce, initialValue) {

      return await Promise.resolve().then(reduce());

}
