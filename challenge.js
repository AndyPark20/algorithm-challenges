// Anagrammy Collector
// provided an array of lowercase strings, return the array of similiar anagrams together

function anagrammyCollector(arr) {
  //loop thru the array
  //create a variable and assign an empty array
  // loop and check if the length and the letters are the same, push those words into another array and into the final array
  // if no words matches together, then push that into the array and into the final array

  let finalArray=[];
  let shuffledArray=[];
  for (let i=0; i<arr.length;i++){
    shuffledArray.push(arr[i].split('').reverse().join(''))
  }
  console.log(shuffledArray)


  console.log(arr);
}

let input = ["eat", "tea", "tan", "ate", "nat", "bat"]
anagrammyCollector(input)

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
