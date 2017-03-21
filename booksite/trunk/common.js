jQuery(document).ready(function(){
	jQuery(window).scroll(function(e) {
		var offset = jQuery(this).scrollTop();
		if (offset > 0) {
			jQuery('.available-books').hide();
			jQuery(".search-panel").css('top', 0);
		} else {
			jQuery('.available-books').show();
			jQuery(".search-panel").css('top', 'inherit');
		}	  
	});
});