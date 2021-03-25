// Anagrammy Collector
// provided an array of lowercase strings, return the array of similiar anagrams together

// function anagrammyCollector(arr) {
//   let sortedObject = {};
//   let masterArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     const propValue = arr[i].split('').sort().join('');
//     if (!sortedObject[propValue]) {
//       sortedObject[propValue] = [arr[i]]
//     } else {
//       sortedObject[propValue].push(arr[i])
//     }
//   }
//   for (const keys in sortedObject) {
//     masterArray.push(sortedObject[keys])
//   }
//   return masterArray
// }




// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],

//   [
//     ["ate", "eat", "tea"],
//     ["nat", "tan"],
//     ["bat"]
//   ]

// Output: 3

// ["cat", "atc", "silent", "many"]
// [["cat", "atc"], ["many"], ["silent"]]
// Output 3

function anagrammyCollector(arr){
  let someArray = {};
  let checkWord = ''
  for (let i = 0; i < arr.length; i++) {
    someArray[arr[i].split('').sort().join('')] = arr[i];
  }
  return Object.keys(someArray).length;
}

let array = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(anagrammyCollector(array));
