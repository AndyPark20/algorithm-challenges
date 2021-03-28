//OUTPUT return integers how many apples(first) and oranges(second) fell in Sams house.
//INPUT
// first array (s and t)--> the distance of sams house (whatever falls in between counts)
// second array (a and b) --> the position of which apple and orange tree is located
// third array (m and n) -->how many apples and oranges have fallen
// fourth array (m) --> the distance at which the apples have fallen
// fifth array (n) --> the distance at which oranges have fallen


// s, t, a, b, apples, oranges
function fruit (s,t,a,b,apples,oranges){
    //create a variable for the new distances for apples and oranges array and assign an empty array.
    //create a variable for the finalResult and assign an empty object
    //create a variable for the finalArray and assign an empty Array
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
    let finalApple=0;
    let finalOrange=0;

    for (let i=0;i<apples.length;i++){
      appleDistance.push(apples[i]+ a);
    }

    for (let x=0;x<oranges.length;x++){
      orangeDistance.push(oranges[x]+b);
    }

    for (let i=0;i<appleDistance.length;i++){
      if(appleDistance[i]>=s && appleDistance[i]<=t){
        treeObject['apple']++;
      }
    }

    for (let i=0;i<orangeDistance.length;i++){
      if(orangeDistance[i]>=s && orangeDistance[i]<=t){
        treeObject['orange']++
      }
    }

    finalApple = treeObject.apple;
    finalOrange= treeObject.orange;

    console.log(finalApple + '\n' +finalOrange)

}

const start =7;
const end =11;
const localApple=5;
const localOrange=15;
const numberFruitFall =[3,2];
const appleFall =[-2,2,1];
const orangeFall =[5,-6];
console.log(fruit(start,end,localApple,localOrange, appleFall, orangeFall))
