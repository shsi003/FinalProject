
document.addEventListener("DOMContentLoaded", () => {
//slideshow js
let imageno = 1;

function currentSlide(n) {
	displayimg(imageno = n);
}

function displayimg(n){
	let i;
	const image = document.getElementsByClassName("image");
	const dots = document.getElementsByClassName("dot");

	if(n > image.length){
		imageno = 1;
	}

	if(n < 1){
		imageno = image.length;
	}

	for(i=0; i < image.length; i++){
		image[i].style.display = "none";
	}

	for(i=0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace(" active", "");
	}

	image[imageno - 1].style.display ="block";
	dots[imageno - 1].className += " active";

	
 }
});
