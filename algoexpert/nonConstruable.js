

let test ={
  andy:2,
  jarod:4,
  tim:6
}

function biggest(obj){
  Object.keys(obj).sort((a,b)=> obj[a]>obj[b] ?a :b)
}

console.log(biggest(test))
