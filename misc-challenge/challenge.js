// Anagrammy Collector
// provided an array of lowercase strings, return the array of similiar anagrams together


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

function anagrammyCollector(arr) {
  let someArray = {};
  let checkWord = ''
  for (let i = 0; i < arr.length; i++) {
    someArray[arr[i].split('').sort().join('')] = arr[i];
  }
  return Object.keys(someArray).length;
}

let array = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(anagrammyCollector(array));
