
function makeMultiply(num){
 console.log(num);
  return function multi(x){
     return num * x;
  }

}
const m = makeMultiply(5);

console.log(m(2));
