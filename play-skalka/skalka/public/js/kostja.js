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

			var selFacebookFriendPicker = "div#facebookFriendPicker";
			$(selFacebookFriendPicker).jfmfs({ exclude_friends: [context.targetFacebookId] });

			var showOnlyMutual = function (bOnlyMutual) {
				$("div#facebookFriendPicker").data("jfmfs").showOnlyMutual(bOnlyMutual);
			};

			$("#inviteFriends_mutual").click(function () { showOnlyMutual(true); });
			$("#inviteFriends_all").click(function () { showOnlyMutual(false); });

			var selInviteButton = "input#facebookFriendsInvite";
			$(selInviteButton).attr('disabled', true);

			$(selFacebookFriendPicker).bind("jfmfs.selection.changed", function () {
				// alert("jfmfs.selection.changed");
				var arrFBIDs = $(selFacebookFriendPicker).data("jfmfs").getSelectedIds();
				if (arrFBIDs.length > 0)
					$(selInviteButton).attr('disabled', false);
				else
					$(selInviteButton).attr('disabled', true);
			});

			$(selInviteButton).click(function () {
				var arrFBIDs = $(selFacebookFriendPicker).data("jfmfs").getSelectedIds();
				// alert(arrFBIDs.join(", "));

				// assume we are already logged in
				// FB.init({ appId: '270568069679176', xfbml: true, cookie: true });
				// FB._apiKey = "270568069679176";
				// FB._authResponse = { accessToken: context.access_token };

				/* FB.ui({
					method: 'send',
					// access_token: context.access_token,
					api_key: '270568069679176',
					// app_id: '270568069679176',
					name: 'Skalka',
					link: 'http://project.idamob.ru:9000/lists/45',
					display: 'popup',
					// to: 'sergey.roiz'
					to: arrFBIDs
				},
					function (response) {
						alert(response);
					}); */

			});
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