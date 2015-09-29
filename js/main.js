
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}


$(function() {
	
	$(['img/appstore-hover.png','img/appstore-active.png').preload();
	
	
});