/******************************************************************************/
// DEFAULT FANCYBOX CONFIGURATION
/******************************************************************************/
var fancyConf = {
	fitToView: true,
	scrolling: 'no',
	padding: 0,
	//openEffect : 'elastic',
	openSpeed: 0,
	//closeEffect : 'elastic',
	closeSpeed: 150,
	minHeight: 0,
	title: '',
	wrapCSS: 'skalkaModalRound skalkaModal',
	helpers: {
		overlay: {
			css: {
				'background-color': '#eee'
			},
			opacity: 0.5
		}
	},
	beforeShow: function() {
		$("body").css({
			'overflow': 'hidden'
		});
	},
	afterClose: function() {
		$("body").css({
			"overflow": "visible"
		});
	}
}; 


/******************************************************************************/
// GLOBAL SCRIPT INITIALIZATIONS
/******************************************************************************/

$(document).ready(function($) {
	// Load the facebook SDK asynchronously
	(function(d) {
		var js, id = 'facebook-jssdk';
		if (d.getElementById(id)) {
			return;
		}
		js = d.createElement('script');
		js.id = id;
		js.async = true;
		js.src = "//connect.facebook.net/en_US/all.js";
		d.getElementsByTagName('head')[0].appendChild(js);
	}(document))
	//listNameChangeHandler();
	// Initializing SHOW PRODUCT popup
	$('.openProductDetails').fancybox($.extend({}, fancyConf, {
		wrapCSS: 'skalkaModalRound',
		beforeLoad: function() {
			//$('#productDetails .container').load('/products/details/1?listId=1');
		},
	}));
	initProductPopups();
	window.fbAsyncInit = function() {
		friendCompleterSetup();
		friendCompleterAddToInput("input#friend_finder", function(control, selectedItem, selectedObj) {
			// alert("Friend Selected (1): " + selectedObj.label + ", ID=" + selectedObj.id);
			context.fbFriendSelected = selectedObj.id;
		});
	};
	
	// Sidebar repositioning on window scroll
	sidebar = $(".feedSidebar");
	start = 52;

	$(window).scroll(function () {
		windowTop = $(document).scrollTop();
		if (windowTop >= start) {
			//sidebar.css('top', windowTop);
			sidebar.addClass('fixed');
		} else {
			sidebar.removeClass('fixed');
		}
	});

	
	$("#occasionSelect").change(function() {
		var str = "";
		$("#occasionSelect option:selected").each(function() {
			str += $(this).text() + " ";
		});
		context.occasion = str;
	}).change(); /* attach a submit handler to the form */
	$("#productUrl").submit(function(event) {
		ajaxProductParce(event);
	});
	$('#productForm').submit(function(event) {
		ajaxAddProduct(event);
	});
	// ADDING HOVER EVENTS TO MAIN MENU ITEMS
	//$('.select').hover(function(){
	//	$(this).toggleClass('over');
	//});
	$('.select').hover(function() {
		$(this).toggleClass('over');
		$(this).find('.dropDownMenu').fadeToggle(150, 'swing');
	});
});


function initProductPopups() {
	$('.productInFeed').click(function(event) {
		event.preventDefault();
		$('#productDetails .container').load('/products/details/' + $(this).attr("id") + '?listId=' + context.listId + '&clickedFromFeed=true', function() {
			$('.addToListButton').click(function(event) {
				event.preventDefault();
				$.get("/lists/addProduct", {
					listId: context.listId,
					productId: $(this).attr("id")
				});
				$('.addToListButton').hide();
			});
			$('a[href="#productDetails"]').click();
		});
	});
}


function removeList(ListId) {
	//$.post(url)
	$("#headerListId_" + ListId).remove();
}


function submitFriendForm() {
	if (context.fbFriendSelected != null) {
		$.form('/', {
			targetFbId: context.fbFriendSelected,
			occasion: context.occasion
		}, 'GET').submit();
	} else {
		alert("You sould select a friend using a picker.");
	}
	context.fbFriendSelected = null;
}


function setListnersOnIcons() {
	$('.product_icon').click(function(event) {
		event.preventDefault();
		$('#productDetails .container').load('/products/details/' + $(this).attr("id") + '?listId=' + context.listId + '&clickedFromFeed=false', function() {
			$('.addToListButton').click(function(event) {
				event.preventDefault();
				$.get("/lists/addProduct", {
					listId: context.listId,
					productId: $(this).attr("id")
				});
				$('.addToListButton').show();
			});
			$('a[href="#productDetails"]').click();
		});
	});
}


function reloadBox() {
	var url = "/lists/renderProductList?listId=" + context.listId;
	reloadLeftDiv(url, function(jqNewDiv) {
		initLeftPanelDragDrop(jqNewDiv);
	});
}


function ajaxAddProduct(event) {
	event.preventDefault();
	form = $('#productForm');
	url = form.attr('action');
	inputs = $('#productForm input, textarea');
	values = {};
	inputs.each(function() {
		values[this.name] = $(this).val();
	});
	// Add product to the database
	$.post(url, values, function(data) {
		if (data == 'true')
		//alert('Product Added!');
		window.location.reload();
		else alert('Something gone wrong. It happens.');
	});
}


function ajaxProductParce(event) { /* stop form from submitting normally */
	event.preventDefault(); /* get some values from elements on the page: */
	form = $('#productUrl');
	term = form.find('input[name="url"]').val();
	url = form.attr('action');
	progrs = $('.giftSubmit .label');
	prodInfo = $('.productInfo');
	prodInfo.hide('', $.fancybox.update());
	progrs.addClass('progress'); /* Send the data using post and put the results in a div */
	$.post(url, {
		url: term
	}, function(data) {
		if (!data.error) {
			prodForm = $("#productForm");
			prodName = prodForm.find('input[name="descr"]');
			prodPrice = prodForm.find('input[name="price"]');
			prodImage = $("#productForm_imageUrl");
			prodUrl = prodForm.find('input[name="productUrl"]');
			prodAddToList = prodForm.find('input[name="addToCurrentList"]');
			prodAddToList.val(context.addProductToList);
			prodUrl.val($("#productUrl #url").val());
			if (data.name) {
				prodName.val(data.name);
			}
			var imgList = $('#productInfo_images ul');
			imgList.empty();
			if (data.imageUrls) {
				buttons = $('.imagesContainer .buttons');
				if (buttons) {
					buttons.remove();
				}
				images = data.imageUrls;
				$.each(images, function(key, value) {
					imgList.append('<li><img src="' + value + '"/></li>');
				});
				$("#productForm_imageUrl").val(images[0]);
				initGalley();
			}
			if (data.price) {
				prodPrice.val(data.price);
			}
			progrs.removeClass('progress');
			prodInfo.show(200, $.fancybox.update());
		} else {
			alert('This is hard nut to crack!');
		}
	}, "json");
}


function initGalley() {
	// Initializing IMAGE SLIDER inside add product popup
	$('.images').easySlider({
		controlsBefore: '<div class="buttons">',
		controlsAfter: '</div>',
		continuous: true,
		speed: 150,
		onChange: function(indSelected) {
			$("#productForm_imageUrl").val(images[indSelected]);
		}
	});
}


var GridLayout = function() {
	return {
		setup: function() {
			if (Boolean(window.chrome)) {
				$(window).load(function() {
					// Google's browser
					// alert("LOAD");
					GridLayout.allPins()
				});
			}
			else {
				// Normal browsers
				$(document).ready(function() {
					// alert("RDY");
					GridLayout.allPins()
				});
			}
			$(window).resize(function() {
				// alert("Resize");
				GridLayout.allPins()
			});
			$(function() {
				//Like.gridListeners();
				//Follow.listeners();
				//Comment.gridComment();
				//RepinDialog.setup();
				//RepinDialog.grid();
				//Zoom.setup()
			})
		},
		pinsContainer: ".grid-layout",
		pinArray: [],
		orderedPins: [],
		mappedPins: {},
		nextPin: function(a) {
			a = this.orderedPins.indexOf(a) + 1;
			if (a >= this.orderedPins.length) return 0;
			return this.orderedPins[a]
		},
		previousPin: function(a) {
			a = this.orderedPins.indexOf(a) - 1;
			if (a >= this.orderedPins.length) return 0;
			return this.orderedPins[a]
		},
		columnCount: 2,
		columns: 0,
		columnWidthInner: 294,
		columnMargin: 28,
		columnPadding: 14,
		columnContainerWidth: 0,
		sidebar: 338,
		paddingRight: 28,
		allPins: function() {
			//var sidebar = $(".sidebar").width();
			var sidebar = this.sidebar + this.paddingRight;
			var a = document.documentElement.clientWidth - sidebar;
			this.columnWidthOuter = this.columnWidthInner + this.columnMargin + this.columnPadding;
			this.columns = Math.max(this.columnCount, parseInt(a / this.columnWidthOuter));
			a = this.columnWidthOuter * this.columns - this.columnMargin;
			//document.getElementById("profile") && this.columns--;
			document.getElementById("grid-wrapper").style.width = a + "px";
			//$(".LiquidContainer").css("width", a + "px");
			for (a = 0; a < this.columns; a++) this.pinArray[a] = 0;
			a = $(this.pinsContainer + " .item");
			document.getElementById("SortableButtons") ? this.showPins() : this.flowPins(a, true)
		},
		newPins: function() {
			this.flowPins($(this.pinsContainer + ":last .pin"))
		},
		flowPins: function(a, c) {
			if (c) {
				this.mappedPins = {};
				this.orderedPins = []
			}
			for (i = 0; i < a.length; i++) {
				c = a[i];
				var d = $(c).attr("data-id");
				if (this.mappedPins[d]) $(c).remove();
				else {
					var f = jQuery.inArray(Math.min.apply(Math, this.pinArray), this.pinArray),
						g = this.pinArray[f];
					c.style.top = g + "px";
					c.style.left = f * this.columnWidthOuter + "px";
					this.pinArray[f] = g + c.offsetHeight + this.columnMargin;
					this.mappedPins[d] = this.orderedPins.length;
					this.orderedPins.push(d)
				}
			}
			document.getElementById("items-container").style.height = Math.max.apply(Math, this.pinArray) + "px";
			this.showPins()
		},
		showPins: function() {
			$.browser.msie && parseInt($.browser.version) == 7 || $(this.pinsContainer).animate({
				opacity: "1"
			}, 300)
		}
	}
}();


function initProfileEditor(selSubmitButton, urlSubmitAction) {
	//var selSubmit = "#btnSubmit";
	console.log(selSubmitButton);
	var setSelected = {};
	$(document).ready(function() {
		setSelected = {};
		var fnEnableSubmit = function() {
			var count = 0;
			for (var prop in setSelected) {
				count++;
			}
			if (count >= 0) $(selSubmitButton).removeAttr("disabled");
			else $(selSubmitButton).attr("disabled", true);
		}
		// count the items that are currently selected.
		var selectedItems = $("li.item.sel");
		selectedItems.each(function(ind, elt) {
			setSelected[elt.id] = true;
		});
		fnEnableSubmit();
		$("li.item").click(function() {
			var elt = $(this);
			elt.toggleClass("sel");
			if (elt.hasClass("sel")) setSelected[this.id] = true;
			else delete setSelected[this.id];
			fnEnableSubmit();
		})
	})
	$(selSubmitButton).click(function() {
		var arg = "";
		for (var prop in setSelected) {
			if (arg != "") arg += "&";
			arg += ("catIds=" + prop);
		}
		// window.location.href = "/friends/addCategories?" + arg;
		window.location.href = urlSubmitAction + arg;
	});
}


function listNameChangeHandler() {
	$('.eventName').click(function() {
		context.boxReloading = true;
	});
	$('.eventName').editable("rename", {
		submitdata: {
			listId: context.listId
		},
		callback: function(value, settings) {
			$("#headerListId_" + context.listId + " a").html(value);
			context.boxReloading = false;
			//alert("ffff");
		}
	});
}


function reloadLeftDiv(url, fnReInitLeftPanel) {
	if (context.boxReloading == false) {
		context.boxReloading = true;
		var fetchDiv = $("div#dragDropTmp");
		if (fetchDiv.length > 0) fetchDiv.empty();
		else {
			fetchDiv = $("<div id='dragDropTmp' style='display:none;'></div>")
			$("body").append(fetchDiv);
		}
		fetchDiv.load(url, null, function(responseText, textStatus, XMLHttpRequest) {
			// alert("Some content fetched.");
			$("#giftListDropTarget").fadeOut(0, function() {
				$(this).replaceWith($("#giftListDropTargetUpdated"));
				$("#giftListDropTargetUpdated").attr("id", "giftListDropTarget");
				var jqNewDiv = $('#giftListDropTarget');
				jqNewDiv.fadeIn(0);
				fnReInitLeftPanel(jqNewDiv);
			});
		});
		//listNameChangeHandler();
		context.boxReloading = false;
	}
}


function addProductToList(idProduct) {
	var url = "/lists/addProduct?listId=" + context.listId + "&productId=" + idProduct;
	reloadLeftDiv(url, function(jqNewDiv) {
		initLeftPanelDragDrop(jqNewDiv);
	});
}


function removeProductFromList(idProduct) {
	var url = "/lists/removeProductFromList?listId=" + context.listId + "&productId=" + idProduct;
	reloadLeftDiv(url, function(jqNewDiv) {
		initLeftPanelDragDrop(jqNewDiv);
	});
}


function userAction(idProduct, action) {
	var url = "/lists/addUserAction?listId=" + context.listId + "&productId=" + idProduct + "&userAction=" + action;
	$.get(url, function(data) {
		$("#votingPanel").html(data);
	});
}


function initLeftPanelDragDrop(jqTarget) {
	// Droppable
	jqTarget.droppable({
		drop: function(event, ui) {
			// alert( "dropped." );
			var eltBeingDropped = ui.draggable[0];
			if (eltBeingDropped.tagName != "DIV") return;
			addProductToList(eltBeingDropped.id);
			ui.helper.hide();
		}
	});
	// Draggable
	jqTarget.find("li.item.product_icon").draggable({
		helper: "clone",
		cursorAt: {
			left: 25,
			top: 25
		},
		revert: true,
		start: function(event, ui) {
			ui.helper.css('z-index', 9001);
		}
	});
}


function initItemsDragDrop(selDrag, selDrop) {
	$(document).ready(function() {
		$(selDrag).draggable({
			// see http://stackoverflow.com/a/5848800/126995 for overriding original position..
			helper: function() {
				var id = this.id;
				return $("<div class='dragContainer'><div class='inner' style='background-image: url(/products/imagelist?id="+ id +");'>&nbsp;</div></div>");
			},
			cursorAt: {
				left: 25,
				top: 25
			},
			revert: true
		}); // draggable
		$("div#grid-wrapper").droppable({
			drop: function(event, ui) {
				// alert( "dropped." );
				var eltBeingDropped = ui.draggable[0];
				if (eltBeingDropped.tagName != "LI") return;
				removeProductFromList(eltBeingDropped.id);
				ui.helper.hide();
			}
		}); // droppable
		initLeftPanelDragDrop($(selDrop));
	}); // doc.ready
} 


// function initItemsDragDrop
function initPageless() {
	$(document).ready(function($) {
		var optionz = {
			url: "/lists/listPage",
			params: {
				listId: context.listId
			},
			totalPages: context.productPagesCount,
			loaderMsg: "Loading, please wait..",
			loaderHtml: "<div style='display:none;'></div>",
			distance: 700,
			complete: function() {
				// alert("pageless complete");
				GridLayout.allPins();
				initProductPopups();
			}
		}
		if (context.nextPageUrl) optionz.url = context.nextPageUrl;
		if (context.nextPageParams) optionz.params = context.nextPageParams;
		$("div#items-container").pageless(optionz);
	})
}


window.onload = function() {
	if ((typeof(showFriendSelectionDialog) !== 'undefined') && showFriendSelectionDialog) {
		$('.changeFriend').fancybox($.extend({}, fancyConf, { /* config overrides */
			wrapCSS: 'skalkaModalRound'
		})).trigger('click');
	}
};


function getMutualFriendsForSidebar() {

	try {
		FB.init({
			appId: '270568069679176',
			xfbml: true,
			cookie: true
		});
	} catch (ex1) {
		try {
			FB.init({
				appId: '270568069679176',
				xfbml: true,
				cookie: true
			});
		} catch (ex2) {}
	}
	
	FB.api({
		method: 'friends.getMutualFriends', 
		target_uid: context.targetFacebookId, 
		access_token: context.access_token}, 
		function(result) {
			$('#number_of_common_friends').text(result.length+' friends in common');
			//TODO: show images of 3-5 common friends
			//result[i] - is a Facebook ID of a friend
			//console.log(result);
			
			var graphUrl = 'http://graph.facebook.com/';
			var facesContainer = $('.friends .suggestions');
			facesContainer.html('');
			result = $.randomize(result);
			$(result).each(function(i){
				if(i == 4) return false;
				//var rand = Math.floor(Math.random() * result.length);
				var requestURL = graphUrl+result[i];
				//console.log("Requesting: "+requestURL);
				$.getJSON(requestURL, function(user){
					//console.log(user.id);
					var result = '<li><img src="' + graphUrl + user.id + '/picture" title="' + user.name + '"/></li>';
					facesContainer.append(result);
				});
			});
		});
}

(function($) {
	$.randomize = function(arr) {
		for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
		return arr;
	};
})(jQuery);
