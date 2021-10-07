

let test ={
  andy:6,
  jarod:4,
  tim:-1
}

function biggest(obj){
  Object.keys(obj).reduce((a,b)=> {debugger obj[a]>obj[b] ?a :b})
}

console.log(biggest(test))
