
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
  //Create a function that will take a string as an argument and return array via split method
  //loop thru the array and create a hashmap object for the arguments and assign key value pair
    //loop thru the hashmap object
    //if the other hashmap object has the key && hashmapObjA value - hashMapObjB value is equal to zero
    // Or if the value subtracted flipped is greater than 0
        // return true;
        //else false;

  const ransomNoteObj = {};
  const magazinObj = {};
  let count = 1;

  //Array for storing current Status
  let currentStatus = [];

  //if ransomNote length is greater than magazine length
  // return false
  if (ransomNote.length > magazine.length) {
    return false;
  }
  //else use the split() method to assign strings from ransomNote and Magazine into an array

  //for ransomNote
  const ransomNoteArray = ransomNote.split('');
  // for magazine
  const magazineArray = magazine.split('');

  //iterate each ransomNoteArray and magazineArray
  // if values at index is the same as other values at different index
  //add the value at index as key and count++ as the value pair

  // for ransomNote
  ransomNoteArray.forEach((values, index) => {
    if (ransomNoteObj[values] === undefined) {
      ransomNoteObj[values] = count;
    } else {
      ransomNoteObj[values]++;
    }
  });

  magazineArray.forEach((values, index) => {
    if (magazinObj[values] === undefined) {
      magazinObj[values] = count;
    } else {
      magazinObj[values]++;
    }
  });

  //loop thru ransomNote Obj
  //if value is found at magazineObj && if the values equal to 0 or if value is greater than 0 when object subtraction is flipped
  //push true to current status empty array
  //else
  //push false to current status empty array
  for (let keys in ransomNoteObj) {
    if ((magazinObj[keys]) && ((ransomNoteObj[keys] - magazinObj[keys] === 0) ||
      (magazinObj[keys] - ransomNoteObj[keys] >= 0))) {
      currentStatus.push(true)
    } else {
      currentStatus.push(false)
    }
  }

  //loop thru currentstatus and if false in included return false
      //else return true
  if (currentStatus.includes(false)) {
    return false;
  } else {
    return true;
  }

};

console.log(canConstruct("aabb", "aaabbbbbbb"))
