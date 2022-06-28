
//Loop thru the array
//assign the values at index into a variable
//if the next value at index is the same as the value stored in the variable
    //remove the value at index
//return the new array


var deleteDuplicates = function(head){
  let previousValue = null;

  for(let i=0;i<head.length;i++){
      let previousValue = head[i];
    if(previousValue === head[i]){
      head.splice(head[i],1);
    };
  }
      return head;
}


console.log(deleteDuplicates([1,1,2]));
