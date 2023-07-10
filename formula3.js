//(a**2-b**2)+(a**2-b**2)

function rightSide(n1,n2){
    let res1=(n1*n1)-(n2*n2);
    return res1;
  }
  
  let result=rightSide(3,4)
  
  console.log(result)
  
  function leftSide(n1,n2){
    let res2=(n1*n1)-(n2*n2);
    return res2;
  }
  
  let result1=leftSide(8,9)
  
  let final=result+result1;
  
  console.log(final);
  