

function tournamentWinner(competitions, results) {
  //facts
    //array 1 for competitiors --> [home, away];
    //array 2 has the competition results for each game
    // 0--> away team won
    // 1---> home team won

  //create a variable that will record each team score
  // create a variable that will increment to loop competitions and results array and start at 0
  //at that index use for loop to loop thru the array at index.
    // If the value at index of results is 0, then add index + 1, and use this index to determine the name of the away team in competitions array
    // if the value at index of results is 1, then index -1, and use this index to determine the name of the home team

    let scoreRecord ={};
    let winner ='';
    let x =0;
    for (let i=0;i<competitions.length;i++){
      if(results[x]===0){
       winner= competitions[i][results[x]+1]
       x++;
      }else {
        winner = competitions[i][results[x]-1];
        x++
      }
      if(!scoreRecord[winner]){
        scoreRecord[winner] =1;
      }else{
        scoreRecord[winner]++
      }
    }

    let finalWinner =Object.keys(scoreRecord).reduce((a,b)=>scoreRecord[a]> scoreRecord[b] ?a : b);

    return finalWinner;

}

let compete=[["HTML","C++"], ["C++","Python"], ["Python", "HTML"]]
let score =[0,0,1]
console.log(tournamentWinner(compete,score))
