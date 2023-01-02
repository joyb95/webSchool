// for slider
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 1000,
	centeredSlides: true,
	effect: 'fade',
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	keyboard: {
        enabled: true,
	},
});