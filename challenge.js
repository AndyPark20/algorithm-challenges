// Anagrammy Collector
// provided an array of lowercase strings, return the array of similiar anagrams together

function anagrammyCollector(arr) {
  let someArray={};
  let checkWord=''
  for (let i=0;i<arr.length;i++){
    someArray[arr[i].split('').sort().join('')] = arr[i];
  }

  console.log(someArray)
    return Object.keys(someArray).length;

}

let array = ["cat", "atc", "silent", "many","miss","tac"];
console.log(anagrammyCollector(array));

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