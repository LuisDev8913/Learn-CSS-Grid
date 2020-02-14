 window.onload = function() {
   var dropdown = document.querySelector(".dropdown");
   var button = document.querySelector(".close-icon").addEventListener("click", function(){ 
   	if(dropdown.style.display === "none"){
   		dropdown.style.display = "grid";
   	}else{
   		dropdown.style.display ="none";
   		button.innerHTML = "close";
   	}
   }
 )
   $('.single-item').slick({
   	dots: true,
   	arrows: false,
   	autoplay: true,
   	autoplaySpeed: 4000
   });
};