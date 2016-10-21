
$(function() {
	// console.log('init');
	var autoloadTimer;
	var gallery = $('.gallery');
	var marker = $('.gallery-scroll-marker').get(0);
	galleryLoadMore();

	$('#gallery-load-more').click(function() {
		galleryLoadMore();
	});

	$('#gallery-autoload').click(function() {
		if (this.checked) {
			$('#gallery-load-more').addClass('hide')
			// enable autoload
			autoloadTimer = window.setInterval(function(){
				var rect = marker.getBoundingClientRect();
				if (rect.top < window.innerHeight) {
					galleryLoadMore();
				}
			}, 1000);
		} else {
			$('#gallery-load-more').removeClass('hide')
			// disable autoload
			window.clearInterval(autoloadTimer);
		}
	});

	function galleryLoadMore() {
		var xhr = $.ajax({
			dataType: "json",
  			url: "data/items.json",
  			// data: data,
  			// success: success
		})
		.done(function(data) {
			$.each(data, function(i, item) {
				gallery.append('<li class="gallery-item">'
					+ '<img class="gallery-item-photo" src="' + item.image + '">'
					+ '<span class="gallery-item-rating ui-rating'+ (item.rating ? ' ui-rating-'+item.rating : '') +'"></span>' 
					+ '<div class="gallery-item-title">' + item.title + '</div>' 
					+ '<div class="gallery-item-description">' + item.paragraph + '</div>' 
					+ '</li>');
			})
		})
		.fail(function(data) {
			console.log('AJAX failed');
		})
	}
});