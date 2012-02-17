$(document).ready(function ($) {

	// Initializing INVITE FRIENDS popup
	$('.inviteFriendsButton').fancybox({

		scrolling: 'no',
		padding: 0,
		//openEffect : 'elastic',
		openSpeed: 150,

		//beforeLoad: function() { 
		//	alert("invite friends");
		//},
		//closeEffect : 'elastic',
		closeSpeed: 150,
		minHeight: 0,
		wrapCSS: 'skalkaModal',
		helpers: {
			overlay: {
				css: {
					'background-color': '#eee'
				},
				opacity: 0.5
			}
		},
		afterLoad: function () {
			// alert("inviteFriends.afterLoad");
			// $("div#mutual").jfmfs({ max_selected: 15, max_selected_message: "{0} of {1} selected" });
			// $("div#facebookFriendPicker").jfmfs({ max_selected: 15, max_selected_message: "{0} of {1} selected" });
			$("div#facebookFriendPicker").jfmfs({ exclude_friends: [context.targetFacebookId] });

			var showOnlyMutual = function (bOnlyMutual) {
				$("div#facebookFriendPicker").data("jfmfs").showOnlyMutual(bOnlyMutual);
			};

			$("#inviteFriends_mutual").click(function () { showOnlyMutual(true); });
			$("#inviteFriends_all").click(function () { showOnlyMutual(false); });
			// showOnlyMutual(true);
		}
	});

	// Initializing SELECT FRIEND popup
	$('.changeFriend').fancybox({
		scrolling: 'no',
		modal: true,
		padding: 0,
		//openEffect : 'elastic',
		openSpeed: 150,
		//closeEffect : 'elastic',
		closeSpeed: 150,
		minHeight: 0,
		wrapCSS: 'skalkaModalRound',
		helpers: {
			overlay: {
				css: {
					'background-color': '#000'
				},
				opacity: 0.3
			}
		}
	});
});