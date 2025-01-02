var randomNumber=Math.floor(Math.random()*6)+1;
var  randomImage="./images/dice"+randomNumber + ".png"
var a=document.querySelectorAll("img")[0]
a.setAttribute("src",randomImage)

var randomNumber2=Math.floor(Math.random()*6)+1;
var  randomImage2="./images/dice"+randomNumber2 + ".png"
var b=document.querySelectorAll("img")[1]
b.setAttribute("src",randomImage2)

var res2 = document.getElementById("greet")
if(randomNumber>randomNumber2){
    res2.innerHTML ="player1 won"
}
else if(randomNumber2>randomNumber){
    res2.innerHTML="player2 won"
}
else{
    res2.innerHTML="tie"
}

function myfunct(){
    window.location.reload()
}