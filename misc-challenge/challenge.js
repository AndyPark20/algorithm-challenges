// Anagrammy Collector
// provided an array of lowercase strings, return the array of similiar anagrams together

function anagrammyCollector(arr) {
  let someArray = {};
  let masterArray = [];
  for (let i = 0; i < arr.length; i++) {
    const propValue = arr[i].split('').sort().join('');
    someArray[arr[i]] =propValue;
  }

  for (const keys in someArray){
    if(someArray.hasOwnProperty(someArray[keys])){
      console.log(someArray[keys])
    }else{
      console.log('else', someArray[keys])
    }
  }
// console.log(masterArray)

}




  let array = ["eat", "tea", "tan", "ate", "nat", "bat"];
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

//  let someArray={};
// let checkWord = ''
// for (let i = 0; i < arr.length; i++) {
//   someArray[arr[i].split('').sort().join('')] = arr[i];
// }

// return Object.keys(someArray).length;
