//UNIT CONVERSION

var a = prompt('enter the value');

let b= prompt('enter the unit of the value','mm or cm or dm or m');

let c= prompt('enter the unit to be converted');

a=+a;

function mmtocm(n1){
  if(b==='mm')
  {
     if(c==='cm')
     {
       let cm=n1/10;
       return cm;
     }
  }
  
  if(b==='mm')
  {
    if(c==='dm')
    {
      let dm=n1/100;
      return dm;
    }
  }
  if(b==='mm'){
    if(c==='m'){
      let m=n1/1000;
      return m;
    }
  }
  if(b==='cm'){
    if(c==='mm'){
      let mm=n1*10;
      return mm;
    }
  }
  if(b==='cm'){
    if(c==='dm'){
      let dm=n1/10;
      return dm;
    }
  }
  if(b==='cm'){
    if(c==='m'){
      let m=n1/100;
      return m;
    }
  }
  if(b==='dm'){
    if(c==='m'){
      let m=n1/10;
      return m
    }
  }
  if(b==='dm'){
    if(c==='cm'){
      let cm=n1*10;
      return cm
    }
  }
  if(b==='dm'){
    if(c==='mm'){
      let mm=n1*100;
      return mm
    }
  }
  if(b==='m'){
    if(c==='mm'){
      let mm=n1*1000;
      return mm;
    }
  }
  if(b==='m'){
    if(c==='cm'){
      let cm=n1*100;
      return cm;
    }
  }
  if(b==='m'){
    if(c==='dm'){
      let dm=n1*10;
      return dm;
    }
  }
}

let result1 = mmtocm(a);

console.log(`the covertion is ${result1}`);