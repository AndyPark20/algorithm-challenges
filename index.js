

/*Coding Challenge

Easy

Codewriting

1000

Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index.
In other words, if there are more than 1 duplicated numbers,
return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.
*/


function firstDuplicate(a) {
  for (let i = 0; i < a.length; i++) {
    for (let z = 0; z < a.length; z++) {
      if (a[i] === a[z] && i > z) {
        return a[i]
      }
    }
  }
  return -1
}
