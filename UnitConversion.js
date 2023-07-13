
let entered_value=prompt('Enter the value');

let input_unit=prompt('Enter the unit of the value');

let output_unit=prompt('Enter the unit to be converted');

function convert_mm_to_others(entered_value){
  let result ;
   if(output_unit==='cm'){
     result=entered_value/10;
   }
   else if(output_unit==='dm'){
     result=entered_value/100;
   }
   else if(output_unit==='m'){
     result=entered_value/1000;
   }
   return result;
}

function convert_cm_to_others(entered_value){
  let result;
  if(output_unit==='mm'){
    result=entered_value*10;
  }
  else if(output_unit==='dm'){
    result=entered_value/10;
  }
  else if(output_unit==='m'){
    result=entered_value/100;
  }
  return result;
}

function convert_dm_to_others(entered_value){
  let result;
  if(output_unit==='mm'){
    result=entered_value*100;
  }
  else if(output_unit==='cm'){
    result=entered_value*10;
  }
  else if(output_unit==='m'){
    result=entered_value/10;
  }
  return result;
}

function convert_m_to_others(entered_value){
  let result;
  if(output_unit==='mm'){
    result=entered_value*1000;
  }
  else if(output_unit==='cm'){
    result=entered_value*100;
  }
  else if(output_unit==='dm'){
    result=entered_value*10;
  }
  return result;
}

if(input_unit==='mm'){
  console.log(convert_mm_to_others(entered_value));
}
else if(input_unit==='cm') {
  console.log(convert_cm_to_others(entered_value));
}
else if (input_unit==='dm'){
  console.log(convert_dm_to_others(entered_value));
}
else if (input_unit==='m'){
  console.log(convert_m_to_others(entered_value));
}
else{
  console.log('Wrong Unit!');
}
