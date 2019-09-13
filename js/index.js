const flip = document.getElementById('flip');
const change = document.getElementById('change');
const first = document.getElementById('first');
const second = document.getElementById('second');
const image = document.getElementById('image');


// change flex-order on click
flip.addEventListener('click',(e) => {
	first.classList.toggle("order-2");
	second.classList.toggle("order-1");

	setTimeout(function(){
		first.classList.remove("animate");
		second.classList.remove("animate");
	},400);

	window.requestAnimationFrame(function() {
    first.classList.add('animate');
    second.classList.add('animate');
  });
});

// change image on click
let count = 0;
change.addEventListener('click',(e) => {
	count++;
	if(count == 1) image.src = 'images/computer2b.jpg';
	else {
		count = 0;
		image.src = 'images/computer2.jpg';
	}
})