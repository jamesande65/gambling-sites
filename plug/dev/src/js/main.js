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