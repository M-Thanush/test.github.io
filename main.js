$(document).ready(function() {
	var _originalSize = $(window).width() + $(window).height()
	$(window).resize(function() {
		if ($(window).width() + $(window).height() != _originalSize) {
			console.log("keyboard active");
			$(".footer").removeClass("fixed");
		} else {
			console.log("keyboard closed");
			$(".footer").addClass("fixed");
		}
	});
});
