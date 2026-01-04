console.log("A");

setTimeout(() => {
    console.log("E")
}, 10)

let promise1 = new Promise((resolve, reject) => {
    console.log("D");
    
    resolve("C")
}).then((data) => {
    console.log(data);
})
console.log("B");


// Output: A D B C E