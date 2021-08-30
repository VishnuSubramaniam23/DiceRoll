var target=30;
var p1=0;
var p2=0;
var count=1;
function roll() {
    if(count%2== 1) {
        var player1 = (Math.floor(Math.random()*10)%6)+1;
    document.getElementById("box3").value = player1
    p1 += player1;
    document.getElementById("box1").value = p1;
    if (p1>=target){
        document.getElementById("out").innerHTML="Player 1 Wins" 
        var mybut = document.getElementById("rol");
        mybut.remove(); 
        var mybox = document.getElementById("box3");
        mybox.remove(); 
        
    }
    else{count = 2}
    }
    else {
        var player2 = (Math.floor(Math.random()*10)%6)+1;
    document.getElementById("box3").value = player2
    p2 += player2;
    document.getElementById("box2").value = p2;
    if (p2>=target){
        document.getElementById("out").innerHTML="Player 2 Wins"
        var mybut = document.getElementById("rol");
        mybut.remove(); 
        var mybox = document.getElementById("box3");
        mybox.remove();; 
    }
    else{count = 1}
    }
   
}
