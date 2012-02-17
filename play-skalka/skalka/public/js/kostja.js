
$(document).ready(function($) {

	// Initializing INVITE FRIENDS popup
	$('.inviteFriends').fancybox({
	
		scrolling: 'no',
		padding: 0,
		//openEffect : 'elastic',
		openSpeed  : 150,

 		//beforeLoad: function() { 
		//	alert("invite friends");
		//},
		//closeEffect : 'elastic',
		closeSpeed  : 150,
		minHeight: 0,
		wrapCSS: 'skalkaModal',
		helpers : {
			overlay : {
				css : {
					'background-color' : '#eee'
				},
				opacity: 0.5
			}
		}
		
	});
	
});