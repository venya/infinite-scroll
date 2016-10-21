$(function() {
	console.log('init');
	var autoloadTimer;

	$('#gallery-load-more').click(function() {
		galleryLoadMore();
	});

	$('#gallery-autoload').click(function() {
		if (this.checked) {
			$('#gallery-load-more').addClass('hide')
			console.log('enable autoload');
			autoloadTimer = window.setInterval(function(){
				// console.log('tick.');
				galleryLoadMore();
			}, 2000);
		} else {
			$('#gallery-load-more').removeClass('hide')
			console.log('disable autoload');
			window.clearInterval(autoloadTimer);
		}
	});

	function galleryLoadMore() {
		console.log('Load more...');
	}
});