
var pic = document.getElementById('myPhoto');

var imageList= ['pep.jpg','idk.jpg', 'horo.jpg'];

var index = 0;

function slideshow (){
  pic.setAttribute('src', imageList[index]);
  if (index == imageList.length -1){
    index = 0;
  }
  else{
    index++;
  }
}
setInterval(slideshow,2000);


var hotbod = document.querySelector("body");

function doStuff() {
    hotbod.className += " animate";
}

window.onload = function() {
    doStuff();
};


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
