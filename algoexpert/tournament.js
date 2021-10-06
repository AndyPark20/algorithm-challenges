

function tournamentWinner(competitions, results) {

    let scoreRecord ={};
    let roundWinner ='';
    let x =0;
    for (let i=0;i<competitions.length;i++){
      if(results[x]===0){
       roundWinner= competitions[i][results[x]+1]
       x++;
      }else {
        roundWinner = competitions[i][results[x]-1];
        x++
      }
      if(!scoreRecord[roundWinner]){
        scoreRecord[roundWinner] =1;
      }else{
        scoreRecord[roundWinner]++
      }
    }

    finalWinner=Object.keys(scoreRecord).reduce((a,b)=>scoreRecord[a]> scoreRecord[b] ?a : b);

    return finalWinner;

}

let compete=[["HTML","C++"], ["C++","Python"], ["Python", "HTML"]]
let score =[0,0,1]
console.log(tournamentWinner(compete,score))
