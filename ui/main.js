console.log('Loaded!');
var element = document.getElementById("maintext");
element.innerHTML = "GURU'S HTML APP";
//to move the image 
var img = document.getElementById("guru");
var marginLeft= 0;
function moveRight(){
    marginLeft = marginLeft+1;
    img.style.marginLeft = marginLeft+'px';
}
img.onclick = function()
{
    var interval = setInterval(moveRight,50);
}; 



