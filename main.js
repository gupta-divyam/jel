var player1="";
var player2="";
function dod()
{
    player1= document.getElementById("ppp1").value
    player2= document.getElementById("ppp2").value
    if(player1 == "" || player2 == ""){
window.alert("Type your name")
    }
    else{
         localStorage.setItem("player1id", player1)
         localStorage.setItem("player2id", player2)
     window.location="game_page.html"
    }
}