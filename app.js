const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
const myExecutor = (resolve, reject) => {
  if(inventory.sunglasses > 0){
    resolve('Sunglasses order processed.')
  }else{

  reject('That item is sold out.')
}}

const orderSunglasses = () => {
 return new Promise(myExecutor)}
 const orderPromise = orderSunglasses();
 console.log(orderPromise)
//
console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:


const usingSTO = () => {
  console.log('Value')
}
setTimeout(usingSTO, 10000);





// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");
//
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:

const handleSuccess = (resolved) => {
  console.log(resolved)
}
const handleFailure = (failure) => {
  console.log(failure)
}

checkInventory(order).then(handleSuccess, handleFailure)
