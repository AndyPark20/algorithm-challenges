
// Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.


// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true


// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.


function canConstruct(ransomNote, magazine) {
//create empty objects for both ransomNote and magazine
const ransomNoteObj = {};
const magazinObj ={};
let count=1;

// use the split() method to assign strings from ransomNote and Magazine into an array
//for ransomNote
const ransomNoteArray = ransomNote.split('');
// for magazine
// const magazineArray = magazine.split('');

//iterate each ransomNoteArray and magazineArray
  // if values at index is the same as other values at different index
    //add the value at index as key and count++ as the value pair

// for ransomNote
ransomNoteArray.forEach((values,index)=>{
  if(ransomNoteArray.indexOf(values) !== index){
    ransomNoteObj[values] = count++;
    debugger;
  }
})
return ransomNoteObj;
};

console.log(canConstruct('aabbb'))
