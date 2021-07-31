
document.getElementById("button1").addEventListener("click", function(){
 document.getElementById("box").style.height= document.getElementById("box").clientHeight +50 + "px"
 document.getElementById("box").style.width = document.getElementById("box").clientWidth +50 + "px"
 });

document.getElementById("button2").addEventListener("click", function(){
 document.getElementById("box").style.height= document.getElementById("box").clientHeight -50 + "px"
 document.getElementById("box").style.width = document.getElementById("box").clientWidth -50 + "px"
}); 

document.getElementById("button3").addEventListener("click", function(){
 document.getElementById("box").style.backgroundColor = "blue"
});

document.getElementById("button4").addEventListener("click", function(){
 document.getElementById("box").style.opacity = "0.5";
});

document.getElementById("button5").addEventListener("click", function(){
document.getElementById("box").style.height = "150px"
document.getElementById("box").style.width= "150px"
document.getElementById("box").style.backgroundColor = "orange"
document.getElementById("box").style.opacity = "100";
});