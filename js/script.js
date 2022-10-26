let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu');
let links = Array.from(menu.children);

function addClass() {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
}

burger.addEventListener('click', addClass);

function removeClass() {
	burger.classList.remove('active');
	menu.classList.remove('active');
}

links.forEach((el) => {
	el.addEventListener('click', removeClass);

});

