function num1(n1) {
    let a = n1 * n1;
    return a;
  }
  
  let result = num1(3);
  
  function num2(n2) {
    let b = n2 * n2;
    return b;
  }
  let result1 = num2(4);
  
  function num12(n3, n4) {
    let c = 2*(n3*n4);
    return c;
  }
  let result2 = num12(6, 7);
  
  let finalResult = result + result1 + result2;
  
  console.log(`the final result is ${finalResult}`);