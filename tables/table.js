document.getElementById("btn").addEventListener("click",myfunct)
function myfunct(){
    var a=document.getElementById("ip1").value
    var b=document.getElementById("op")
    for(let j=2; j<=a; j++){
    for(let i=1; i<=10; i++ ){
        b.innerHTML+=j+"*"+ i +"="+j*i+"<br>"
    }
}
     document.getElementById("ip1").value=""
   
}