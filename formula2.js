//2ab+(4/ab)+1

function mathMul(n1,n2){
    let x = 2*n1*n2;
    return x;
  }
  
  let res1=mathMul(3,6);
  
  function mathDiv(n1,n2){
    let y=4/(n1*n2);
    return y;
  }
  
  let res2=mathDiv(4,8)
  
  let z=1;
  
  let result= res1+res2+z;
  
  console.log(`the final result is ${result}`)
