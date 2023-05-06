const burgerBtn = document.querySelector('.burger');
const headerMenu = document.querySelector('.header-menu');
const burgerBlock = document.querySelector('.burgerBlock');
const body = document.querySelector('body');


burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('burgerActive');
	headerMenu.classList.toggle('headerMenuActive');
	burgerBlock.classList.toggle('burgerDisabled');
	body.classList.toggle('blockScroll');
});


//lang
const lang = document.querySelector('#lang');
const langLis = document.querySelectorAll('#lang li');
const langBtn = document.querySelector('.dropbtn');

langBtn.addEventListener('click', () => {
	lang.classList.toggle('show');
});

langLis.forEach(element => {
	element.addEventListener('click', (e) => {
		langBtn.innerHTML = e.target.closest('a').innerHTML;
	})
});