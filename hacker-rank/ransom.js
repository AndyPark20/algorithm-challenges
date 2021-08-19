
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



var canConstruct = function (ransomNote, magazine) {
//assign strings from ransomNote and magazine into an object
const ransomeNoteObj = {};
const magazinObj ={};
let i=0;
//if there are more than one same key, increment i++
ransomNote.forEach((values)=>{
  ransomeNoteObj[values] = i++;
})
console.log(Object.values(ransomeNoteObj)
};

console.log(canConstruct('aa'))
