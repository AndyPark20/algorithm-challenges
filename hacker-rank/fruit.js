//OUTPUT return integers how many apples(first) and oranges(second) fell in Sams house.
//INPUT
// first array (s and t)--> the distance of sams house (whatever falls in between counts)
// second array (a and b) --> the position of which apple and orange tree is located
// third array (m and n) -->how many apples and oranges have fallen
// fourth array (m) --> the distance at which the apples have fallen
// fifth array (n) --> the distance at which oranges have fallen



function fruit (house,treePosition,totalFruitFallen,appleFallPosition,orangeFallPosition){
    //create a variable for the new distances for apples and oranges array and assign an empty array.
    //create a variable for the finalResult and assign an empty object
    //Loop thru the distance in the apples array and add it to the origin position on the apple tree
    //Loop thru the distance in the oranges array and add it to the origin position on the orange tree
    //push the new distance number in the array for apples and oranges

    //loop thru the positioned array for both apples and oranges
    //If value at index is greater or equal to 7 and less than or equal to 11
      //add 1 to the object
    //else
      // do nothing

    const appleDistance=[];
    const orangeDistance=[];
    const treeObject ={apple:0,orange:0};

    for (let i=0;i<appleFallPosition.length;i++){
      appleDistance.push(appleFallPosition[i]+ fruitFallenPosition[0]);
    }

    for (let x=0;x<orangeFallPosition.length;x++){
      orangeDistance.push(orangeFallPosition[x]+fruitFallenPosition[1]);
    }

    for (let i=0;i<appleDistance.length; i++){
      if(appleDistance[i]>=7 && appleDistance[i]<=11){
        treeObject['apple']++;
      }
    }

    for (let i=0;i<orangeDistance.length;i++){
      if(orangeDistance[i]>=7 && orangeDistance[i]<=11){
        treeObject['orange']++;
      }
    }

    return treeObject
}

const house =[7,11];
const fruitFallenPosition =[5,15];
const numberFruitFall =[3,2];
const appleFall =[-2,2,1];
const orangeFall =[5,-6];
console.log(fruit(house, fruitFallenPosition,numberFruitFall,appleFall,orangeFall))
