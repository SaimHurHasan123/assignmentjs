function Forms() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var weight = document.getElementById("weight").value;
  //perform operations
  
  var result = operations(age, weight,name);
  //display
  
  display( result);
}
function operations(a, w,name) {
    
  var r = " ";
  
  if ((a >= 5 && a <= 7) && (w >= 15 && w <= 20)) {
    r = 'Hello'+" "+name+" "+'!!! Your weight is perfect.';
    
  } else {
    if (a < 5 && w < 15) {
        r = 'Hello'+" "+name+" "+'!!! Your weight is less than recommended value of'+" "+w+" " +'KG'+" "+'at an age of'+" "+a+'.';
    } else {
        r = 'Hello'+" "+name+" "+'!!! Your weight is greater than recommended value of'+" "+w+" " +'KG'+" "+'at an age of'+" "+a+'.';
    }
  }

  if ((a >= 8 && a <= 10) && (w >= 21 && w <= 25)) {

r = 'Hello'+" "+name+" "+'!!! Your weight is perfect.';
  } else {
    if (a < 8 && w < 21) {
      r = 'Hello'+" "+name+" "+'!!! Your weight is less than recommended value of'+" "+w+" " +'KG'+" "+'at an age of'+" "+a+'.';
    } else {
        r = 'Hello'+" "+name+" "+'!!! Your weight is greater than recommended value of'+" "+w+" " +'KG'+" "+'at an age of'+" "+a+'.';
    }
  }
  if ((a >= 11 && a <= 15) && (w >= 26 && w <= 30)) {
    r = 'Hello'+" "+name+" "+'!!! Your weight is perfect.';
    
  } else {
    if (a < 11 && w < 26) {
        r = 'Hello'+" "+name+" "+'!!! Your weight is less than recommended value of'+" "+w+" " +'KG'+" "+'at an age of'+" "+a+'.';
    } else {
        r = 'Hello'+" "+name+" "+' !!! Your weight is greater than recommended value of'+" "+w+" " +'KG'+" "+'at an age of'+" "+a+'.';
    }
  }
  if ((a >= 16 && a <= 20) && (w >= 31 && w <= 40)) {
    r ='Hello'+" "+name+" "+' !!! Your weight is perfect.';
    
  } else {
    if (a < 16 && w < 31) {
        r = 'Hello'+" "+name+" "+'!!! Your weight is less than recommended value of'+" "+w+" " +'KG'+" "+'at an age of'+" "+a+'.';
    } else {
        r = 'Hello'+" "+name+" "+'!!! Your weight is greater than recommended value of'+" "+w+" " +'KG'+" "+'at an age of'+" "+a+'.';
    }
  }
  return r;
}
function display( r1) {

    document.getElementById('result').innerHTML=r1;
   
    
}
