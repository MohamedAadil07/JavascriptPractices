//a3*b3*c2  -  a3+b2*c2

let a=prompt('enter the First value');

let b=prompt('enter the Second value');

let c=prompt('enter the Third value');

function a_b_c(a,b,c){
  return (a**3*b**3*c**2)-(a**3+b**2*c**2);
}
console.log(a_b_c(a,b,c));