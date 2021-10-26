$(document).ready(function(){

	//---- navigation script ----//
	 $(".hamburger").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(".mobile-nav").removeClass("nav-open");
			$('html').removeClass('scroll-disabled');
			
		}else{
			$(this).addClass("active");
			$(".mobile-nav").addClass("nav-open");
			$('html').addClass('scroll-disabled')
		}
	 });
     $(".mobile-nav ul li").click(function(){
        
			$(this).removeClass("active");
			$(".mobile-nav").removeClass("nav-open");
			$('html').removeClass('scroll-disabled');
		
     })
	
});

var mybutton = document.getElementById("topButton");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    console.log("hi")
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Dark and light toggle

const themeSwitch = document.querySelector('.btn-moon');
   
themeSwitch.addEventListener('click', () => {
    console.log("hi");
  document.body.classList.toggle('dark-theme');
});
