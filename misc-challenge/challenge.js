// Anagrammy Collector
// provided an array of lowercase strings, return the array of similiar anagrams together

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
//   [
//     ["ate", "eat", "tea"],
//     ["nat", "tan"],
//     ["bat"]
//   ]
// Output: 3

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// ["cat", "atc", "silent", "many"]
// [["cat", "atc"], ["many"], ["silent"]]
// Output 3

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




//   [
//     ["ate", "eat", "tea"],
//     ["nat", "tan"],
//     ["bat"]
//   ]

// Output: 3
// ["cat", "atc", "silent", "many"]
// [["cat", "atc"], ["many"], ["silent"]]
// Output 3

function anagrammyCollector(arr) {
  //Create a variable dictionary and assign an empty object
  // Create a variable masterArray and assign an empty array
  //loop thru the array and re-sort the elements at index by using split, sort and join method
  //check to see if the sorted element is in the dictionary,
  // if it is in there, then push the element at index into the object.
  // if not in there, enclose the element at index in [] and assign it to the object.
  //Loop thru the dictionary object and push the keys into masterArray;
  // Return masterArray;

  let dictionary = {};
  let masterArray = [];
  for (let i = 0; i < arr.length; i++) {
    const sortString = arr[i].split('').sort().join('')
    if (!dictionary[sortString]) {
      dictionary[sortString] = [arr[i]]
    } else {
      dictionary[sortString].push(arr[i])
    }
  }
  console.log(dictionary)
  for (const keys in dictionary) {
    masterArray.push(dictionary[keys]);
  }
  // return masterArray
}

let array = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(anagrammyCollector(array));
