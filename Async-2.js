var fn1 = () => {
console.log('fn1')
return Promise.resolve(2)
}

var fn2 = () => new Promise(resolve => {
console.log('fn2')
setTimeout(() => resolve(2), 1000)
})

async function promiseReduce(asyncFunctions, reduce, initialValue) {

while (asyncFunctions) {
try {

return await Promise.resolve(asyncFunctions).then (reduce());
} catch(err) {
  console.log('shit')
}


}
};
