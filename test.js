var changeThumb = null;
var stopped = false;
jQuery('body').on('mouseenter', '.featured-image', function(e){

	var $this = jQuery(this);
	stopped = false;
	if( $this.data('thumbs') != undefined ){
		var dataThumbs = $this.data('thumbs');
		var thumbs = dataThumbs.split(',');
		var nbThumbs = thumbs.length;
		var i = 1;
		changeThumb = null;
		clearTimeout(changeThumb);
		changeThumb = function() {
			if( stopped == false ){
				$this.find('img').attr('srcset', thumbs[i]);
				if (i <= nbThumbs) {
					if( i == nbThumbs ){
						i = 0;
					}
					setTimeout(changeThumb, 700);
					i++;
				}
			}
		};
		changeThumb();
	}
}).on('mouseleave', '.featured-image', function(e){
	stopped = true;
	changeThumb = null;
	var highestTimeoutId = setTimeout(";");
	for (var i = 0 ; i < highestTimeoutId ; i++) {
		clearTimeout(i);
	}
	var $blockImg = jQuery(this).find('img');
	var defaultThumb = $blockImg.attr('src');
	$blockImg.attr('srcset', defaultThumb);
});