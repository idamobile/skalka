$(document).ready(function ($) {

	// Initializing INVITE FRIENDS popup
	$('.inviteFriendsButton').fancybox({

		scrolling: 'no',
		padding: 0,
		//openEffect : 'elastic',
		openSpeed: 150,

		beforeLoad: function() { 
			$.get("/lists/"+context.listId+"/collaborators", function (data) {
				$("#participantsList").html(data);
			});
		},
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
				try {
					FB.init({ appId: '270568069679176', xfbml: true, cookie: true });
				}catch (ex1) {
					try {
						FB.init({ appId: '270568069679176', xfbml: true, cookie: true });
					}catch (ex2) {
						
					}
				}

				FB.ui({
					method: 'send',					
					api_key: '270568069679176',					
					name: 'Skalka',
					link: window.location.href,
					display: 'popup',					
					to: arrFBIDs
				},
					function (response) {
						if(response == null){
						}else{
							var url = "";
							if(arrFBIDs.length==0){
								url = "/lists/"+context.listId+"/collaborators";
							}else{
								for (i=0;i<arrFBIDs.length;i++) {
									if (i==0){
										var url = "/lists/"+context.listId+"/collaborators/add?userIds=" + arrFBIDs[i];
									}else{
								    	url = url + "&userIds=" + arrFBIDs[i];
									}
								}
							}
							$.get(url, function (data) {
								$("#participantsList").html(data);
							});
						}
					}); 

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