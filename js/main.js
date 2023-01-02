// for slider
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	spaceBetween: 0,
	// speed: 0,
	speed: 500,
	centeredSlides: true,
	effect: 'fade',
	loop: true,
	autoplay: {
		delay: 3000,
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
