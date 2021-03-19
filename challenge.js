// Anagrammy Collector
// provided an array of lowercase strings, return the array of similiar anagrams together

function anagrammyCollector(arr) {
  let someArray={};
  for (let i=0;i<arr.length;i++){
    someArray[arr[i]] = arr[i].split('').sort().join('')
  }
  console.log(someArray)
}

let array = ["eat", "tea", "tan", "ate", "nat", "bat"];
anagrammyCollector(array)

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
