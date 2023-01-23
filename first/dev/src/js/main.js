// $(document).ready(function(){
// 	//calls functions
// });

// $(window).on('load', function () {
// 	//calls functions
// });

// $(window).on('resize', function () {
// 	//calls functions
// });

// $(window).load(function() {
// 	//calls functions
// });

// $(window).scroll(function() {
// 	//calls functions
// });

//functions
// console.log('ok');
const burgerBtn = document.querySelector('.burger');
const headerMenu = document.querySelector('.header-menu');
const burgerBlock = document.querySelector('.burgerBlock');
const accBtn = document.querySelector('.accordeonBtn');
const accContent = document.querySelector('.table-of-contents__list');
const moreImg = document.querySelector('.moreImg')
const body = document.querySelector('body');


burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('burgerActive');
	headerMenu.classList.toggle('headerMenuActive');
	burgerBlock.classList.toggle('burgerDisabled');
	body.classList.toggle('blockScroll');
});
accBtn.addEventListener('click', () => {
	accContent.classList.toggle('table-of-contents-list-active');
	moreImg.classList.toggle('moreImgActive');
	
})
