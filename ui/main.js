console.log('Loaded!');
var element = document.getElementById("maintext");
element.innerHTML = "Newvalue";
//to move the image 
var img = document.getElementById("guru");
var marginLeft= 0;
function moveRight(){
    marginLeft = marginLeft+1;
    img.style.marginLeft = marginLeft+'px';
}
img.onclick = function()
{
    var interval = setinterval(moveRight,50);
}; 


