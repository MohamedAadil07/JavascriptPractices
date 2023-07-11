//UNIT CONVERSION

let a = prompt("enter the value");

let b = prompt("enter the unit of the value");

let c = prompt("enter the conversion unit");

function mm_Others(n1) {
  if (b === "mm" && c === "cm") {
    let res1 = n1 / 10;
    return res1;
  } else if (b === "mm" && c === "dm") {
    let res1 = n1 / 100;
    return res1;
  } else if (b === "mm" && c === "m") {
    let res1 = n1 / 1000;
    return res1;
  }
}

let result1 = mm_Others(a);
console.log(`the converted value is ${result1}`);

function cm_Others(n1) {
  if (b === "cm" && c === "mm") {
    let res2 = n1 * 10;
    return res2;
  } else if (b === "cm" && c === "dm") {
    let res2 = n1 / 10;
    return res2;
  } else if (b === "cm" && c === "m") {
    let res2 = n1 / 100;
    return res2;
  }
}

let result2 = cm_Others(a);
console.log(`the converted value is ${result2}`);

function dm_Others(n1) {
  if (b === "dm" && c === "mm") {
    let res3 = n1 * 100;
    return res3;
  } else if (b === "dm" && c === "cm") {
    let res3 = n1 * 10;
    return res3;
  } else if (b === "dm" && c === "m") {
    let res3 = n1 / 10;
    return res3;
  }
}

let result3 = dm_Others(a);
console.log(`the converted value is ${result3}`);

function m_Others(n1) {
  if (b === "m" && c === "mm") {
    let res4 = n1 * 1000;
    return res4;
  } else if (b === "m" && c === "cm") {
    let res4 = n1 * 100;
    return res4;
  } else if (b === "m" && c === "dm") {
    let res4 = n1 * 10;
    return res4;
  }
}

let result4 = m_Others(a);
console.log(`the converted value is ${result4}`);
