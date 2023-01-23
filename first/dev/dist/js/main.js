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
const headerMenu = document.querySelector('.header-menu')

burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('burgerActive');
	headerMenu.classList.toggle('headerMenuActive')
})
