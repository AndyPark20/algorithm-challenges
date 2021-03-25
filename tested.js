// function anagrammyCollector(arr) {
//   let sortedObject = {};
//   let masterArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     const propValue = arr[i].split('').sort().join('');
//     if (!sortedObject[propValue]) {
//       sortedObject[propValue] = [arr[i]]
//     } else {
//       sortedObject[propValue].push(arr[i])
//     }
//   }
//   for (const keys in sortedObject) {
//     masterArray.push(sortedObject[keys])
//   }
//   return masterArray
// }
