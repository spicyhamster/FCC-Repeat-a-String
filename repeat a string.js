//Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    var newStr = "";
    if(num > 0){
      for(i=0;i<num;i++){
        newStr += str;
      }
    }
  return newStr;
}

repeatStringNumTimes("abc", 3); //should return "abcabcabc"
