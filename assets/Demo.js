let a=10
function outer(e,f){
let b=20
e=2
f=5
console.log((b+e)*(b-f))
 function inner(){
    let c=30
    console.log(a,b,c)
 }
 inner()
}
outer()