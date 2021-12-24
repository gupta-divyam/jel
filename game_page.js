player1name="";
player2name="";
player1sc=0;
player2sc=0;
getanswer=0;
function gamestart(){
   player1name= localStorage.getItem("player1id")
   player2name= localStorage.getItem("player2id")
   document.getElementById("lol2").innerHTML= player2name+" :"+ player2sc
   document.getElementById("lol1").innerHTML= player1name+" :"+ player1sc
   document.getElementById("que").innerHTML= "<b>" + "OUESTION TURN - " + player1name + "</b>"
   document.getElementById("anss").innerHTML= "<b>" + "ANSWER TURN - " + player2name + "</b>"
}
function send(){
   question1no= document.getElementById("q1").value
   question2no= document.getElementById("q2").value
   getanswer= question1no * question2no
   console.log(getanswer)

   questionturn="<h4>" + question1no + " X " + question2no + "</h4>"
   inputbox= "<br>" + "Answer : " + "<input type='number' id='happy_ans'>"
   hhhcheck= "<br><br>" + "<button onClick='check()' class='btn btn-success'> Check</button>"
   document.getElementById("output").innerHTML= questionturn + inputbox + hhhcheck
}
queturn = "player1";
ansturn = "player2";
function check(){
   valuehappy=document.getElementById("happy_ans").value
   if(getanswer == valuehappy ){
if(ansturn == "player1"){
player1sc++
document.getElementById("lol1").innerHTML = player1name + " :" + player1sc
      } 
      else {
         player2sc++
         document.getElementById("lol2").innerHTML = player2name + " :" + player2sc

}
   }
   if (queturn == "player1") {
      queturn = "player2"
      document.getElementById("que").innerHTML = "Question Turn - " + player2name
   }
   else {
      queturn = "player1"
      document.getElementById("que").innerHTML = "Question Turn - " + player1name
   }
   if (ansturn == "player1") {
      ansturn= "player2"
      document.getElementById("anss").innerHTML = "Answer Turn - " + player2name
   }
   else {
      ansturn = "player1"
      document.getElementById("anss").innerHTML = "Answer Turn - " + player1name
   }  
   document.getElementById("output").innerHTML=""
   document.getElementById("q1").value=""
   document.getElementById("q2").value=""
} 
