
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

  const hashMapObjectRansomNote =convertStringToHashMap(ransomNote);
  const hashMapObjectMagazine =convertStringToHashMap(magazine);

  //Auxillary function to convert a string into Array and creating hashMap Objects
  function convertStringToHashMap(string){
    let hashMapObject ={};
    let count =1;
    const convertedArray =string.split('');
    //loop thru the converted Array and assign the values as key, and increment
    //count if there are more than one identical key and set it as a value
    convertedArray.forEach(values=>{
      if(!hashMapObject[values]){
        hashMapObject[values] = count;
      }else{
        hashMapObject[values]++;
      }
    })
    return hashMapObject
  }

  if(ransomNote.length >magazine.length){
    return false;
  }

  //Loop thru one of the hashmaps and check if the other object has the same key
 let currentStatus =false;
  for (let keys in hashMapObjectRansomNote){
    if((hashMapObjectMagazine[keys]) && (hashMapObjectRansomNote[keys]- hashMapObjectMagazine[keys] ===0 ||
      hashMapObjectMagazine[keys] - hashMapObjectRansomNote[keys] >=0)){
        currentStatus =true;
      }else{
        return false;
      }
  }
  return currentStatus;
console.log(hashMapObjectRansomNote);
console.log(hashMapObjectMagazine)
};

console.log(canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi"))
