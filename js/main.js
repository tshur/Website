function main() {
	$('.block').each( function(index) {
		$(this).delay(200*index + 20).slideDown(200);
	});
	$('.footer').delay(1500).fadeIn(1000);
}

$(document).ready(main);