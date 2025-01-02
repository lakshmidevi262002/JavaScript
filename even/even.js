document.getElementById("btn").addEventListener("click",funct1)
function funct1(){
    const a=document.getElementById("ip1").value
    var b=document.getElementById("op")
   // a%2===0 ? b.innerHTML="even number":b.innerHTML="odd number"
    document.getElementById("ip1").value=""
    if(a%2===0){
        b.innerHTML="even number"
    }
    else{
        b.innerHTML="odd number"
    }


}
