// Anagrammy Collector
// provided an array of lowercase strings, return the array of similiar anagrams together

function anagrammyCollector(arr) {
  let sortArray=[];
  let sameWord="";
  let sameArray=[];
  for (let i =0; i<arr.length; i++){
    sortArray.push(arr[i].split('').sort().join(''))
  }
  for (let x=0; x<sortArray.length;x++){
    sameWord+=sortArray[x]
    if(sameWord === sortArray[x]){
      sameArray.push([sortArray[x]])
    }else{
      sameArray.push([sortArray[x]])
    }
  }
  console.log(sortArray)
  console.log(sameArray)
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
