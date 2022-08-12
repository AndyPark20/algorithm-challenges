// function containsDuplicate(nums) {

// /****SOLUTION #1 ****/
// //   let emptyObject = {};
// //   for (let i = 0; i < nums.length; i++) {
// //     if (!emptyObject[nums[i]]) {
// //       emptyObject[nums[i]] = 0;
// //     }
// //     emptyObject[nums[i]]++;
// //   }

// //  for(keys in emptyObject){
// //    if(emptyObject[keys] >1){
// //      return true;
// //    }
// //  }
// //  return false;

// /****###END OF SOLUTION1 ###****/

// /****SOLUTION #2 ****/
//   const filterValue = nums.filter((value, index, array)=>{
//     if(value === array[index+1]){
//       return true;
//     }
//   })
//         return false;

// }

// let arr = [1,2,2,3,4];

// console.log(containsDuplicate(arr));

function makeAdder(x){
  return  function(y){
    return x+y
  }
}


const add5=makeAdder(5);
console.log(add5(10))
