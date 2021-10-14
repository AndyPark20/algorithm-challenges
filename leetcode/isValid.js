function isValid(s){
  //create a variable to store string that is converted into an array
    //loop thru the array
      //if the index is even and equals to the opening characters and if the index of odd is matching characters
        //return true
      // else return false;
  let hashMapObj={
    '{':'}',
    '[':']',
    '(':')'
  };

  let stack =[];
  for (let i=0;i<s.length;i++){
    if(hashMapObj.hasOwnProperty(s[i])){
      stack.push(s[i]);
    }
  }
}

let s =['[',']','{','{']
