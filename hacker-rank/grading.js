//OUTPUT: grades after rounding the initial grades with the condition
//Input:array containing integers of students grades
// conditions to round:
  //the difference between the grade and the next multiple of 5 is less than 3, then round to the next multiple of 5 (ex: 54 -->55)
  //If the score is less than 40, keep it as it is as the grade is a failing grade

function studentGrade(grade){
  //Create a Variable called roundUp and assign an empty array;
  // Loop thru the grade array
  //If the difference between Math.round() of the number and the number itself is less than 5 AND the number itself is greater than 40, add 5 from Math.round() number
  //If the difference between Math.round()of the number and the number itself is more than 5 AND the number itself is greater than 40 then just Math.round() the number
  // If the number is less than 40, return that number;

  const roundUpFinal = [];

  for(let i =0;i<grade.length;i++){
    const roundBottom = (Math.round(grade[i]/10)*10);
    const difference= (roundBottom-grade[i])
    const roundLow =5-Math.abs(difference);
    const roundUp = Math.abs(difference)
    if(difference<0 && roundLow<3 && grade[i] >=38){
      roundUpFinal.push(roundBottom+5)
    }else if(difference >0 && roundUp<3 && grade[i]>=38){
      roundUpFinal.push(roundBottom)
    }else if(grade[i]<38 || roundLow>=3 || roundUp>=3){
      roundUpFinal.push(grade[i])
    }
  }
  return roundUpFinal;
}

console.log(studentGrade([73,67,38,33]));
