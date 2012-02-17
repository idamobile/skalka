//var $j = jQuery.noConflict();

$(document).ready(function ($) {

	// Load the facebook SDK asynchronously
	(function (d) {
		var js, id = 'facebook-jssdk';
		if (d.getElementById(id)) { return; }
		js = d.createElement('script');
		js.id = id;
		js.async = true;
		js.src = "//connect.facebook.net/en_US/all.js";
		d.getElementsByTagName('head')[0].appendChild(js);
	} (document))

	// Initializing ADD YOUR PRODUCT popup
	$('.submitIdea').fancybox({
		fitToView: false,
		scrolling: 'no',
		padding: 0,
		//openEffect : 'elastic',
		openSpeed: 150,
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
		}
	});

	// Initializing SHOW PRODUCT popup
	$('.openProductDetails').fancybox({
		fitToView: false,
		scrolling: 'no',
		padding: 0,
		//openEffect : 'elastic',
		openSpeed: 150,

		beforeLoad: function () {
			//$('#productDetails .container').load('/products/details/1?listId=1');
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
		}
	});

	//Open product dialog in feed 
	$('.productInFeed').click(function (event) {
		event.preventDefault();
		$('#productDetails .container').load('/products/details/' + $(this).attr("id") + '?listId='+context.listId+'&clickedFromFeed=true', function () {
			$('.addToListButton').click(function (event) {
				event.preventDefault();
				$.get("/lists/addProduct", { listId: context.listId, productId: $(this).attr("id") });
				$('.addToListButton').hide();
			});
			$('a[href="#productDetails"]').click();
		});
	});


	if ((typeof (showFriendSelectionDialog) !== 'undefined') && showFriendSelectionDialog) {
		$('a[href="#selectFriend"]').click();
	}

	window.fbAsyncInit = function () {
		friendCompleterSetup();
		friendCompleterAddToInput("input#friend_finder", function (control, selectedItem, selectedObj) {
			// alert("Friend Selected (1): " + selectedObj.label + ", ID=" + selectedObj.id);
			$.form('/', { targetFbId: selectedObj.id }, 'GET').submit();
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

	/* attach a submit handler to the form */
	$("#productUrl").submit(function (event) {
	 	event.preventDefault();
		ajaxProductParce();
	});

	$('#productForm').submit(function (event) {
	 	event.preventDefault();
		ajaxAddProduct();
	});
}); 

function setListnersOnIcons(){
	$('.product_icon').click(function (event){
		event.preventDefault();
		$('#productDetails .container').load('/products/details/'+$(this).attr("id")+'?listId='+context.listId+'&clickedFromFeed=false',function() {
			$('.addToListButton').click(function (event){
				event.preventDefault();
				$.get("/lists/addProduct", { listId: context.listId, productId: $(this).attr("id") } );
				$('.addToListButton').show();
			});
		  $('a[href="#productDetails"]').click();
		});
	});
}


function ajaxAddProduct(){
	
	 form = $('#productForm');
	 url = form.attr( 'action' );
	 inputs = $('#productForm input, textarea');
	
	 values = {};
	 inputs.each(function() {
	  values[this.name] = $(this).val();
	 });
	
	 // Add product to the database
	 $.post( url, values, function( data ) {
	  if(data == 'true')
	   //alert('Product Added!');
       window.location.reload();
	  else
	   alert('Product was not added!');
	 });
}

function setSelectedProductImageIndex( indSelected ) {
	var allImages = $("#productInfo_images ul li img");
	var img = allImages.eq(indSelected);
	var src = img[0].src;
	// alert( "easy slider.onChange: index=" + indSelected.toString() + ", src=" + src );
	$( "#productForm_imageUrl" ).val( src );
}

function ajaxProductParce(event){

	
	/* get some values from elements on the page: */
	form = $('#productUrl');
	term = form.find( 'input[name="url"]' ).val();
	url = form.attr( 'action' );
	progrs = $('.giftSubmit .label');
	prodInfo = $('.productInfo');
	prodInfo.hide('', $.fancybox.update());
	progrs.addClass('progress');
	
	/* Send the data using post and put the results in a div */
	$.post(url, { url: term }, function (data) {

		if (!data.error) {
			prodForm = $("#productForm");
			prodName = prodForm.find('input[name="descr"]');
			prodPrice = prodForm.find('input[name="price"]');
			prodImage = $("#productForm_imageUrl");

			if (data.name) { prodName.val(data.name); }
			var imgList = $('#productInfo_images ul');
			imgList.empty();
			if (data.imageUrls) {
				buttons = $('.imagesContainer .buttons');
				if (buttons) {
					buttons.remove();
				}
				images = data.imageUrls;
				$.each(images, function (key, value) {
					imgList.append('<li><img src="' + value + '"/></li>');
				});
				setSelectedProductImageIndex( 0 );
				initGalley();
			}
			if (data.price) { prodPrice.val(data.price); }

			progrs.removeClass('progress');
			prodInfo.show(200, $.fancybox.update());

		} else {
			alert('Product Parcing returned Error!');
		}
	}, "json");
}

function initGalley(){
	// Initializing IMAGE SLIDER inside add product popup
	$('.images').easySlider({
		controlsBefore: '<div class="buttons">',
		controlsAfter: '</div>',
		continuous: true,
		speed: 150,
		onChange: function (indSelected) {
			// alert( "easy slider.onChange - " + indSelected.toString() );
			setSelectedProductImageIndex( indSelected );
		}
	});
}

var GridLayout = function () {
	return {
		setup: function ()
		{
			if (Boolean(window.chrome)) {
				$(window).load(function () {
					// Google's browser
					// alert("LOAD");
					GridLayout.allPins()
				});
			}
			else {
				// Normal browsers
				$(document).ready(function () {
					// alert("RDY");
					GridLayout.allPins()
				});
			}

			$(window).resize(function () {
				// alert("Resize");
				GridLayout.allPins()
			});
			$(function () {
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
		nextPin: function (a) {
			a = this.orderedPins.indexOf(a) + 1;
			if (a >= this.orderedPins.length) return 0;
			return this.orderedPins[a]
		},
		previousPin: function (a) {
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
		allPins: function () {
			var sidebar = $(".sidebar").width();
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
		newPins: function () {
			this.flowPins($(this.pinsContainer + ":last .pin"))
		},
		flowPins: function (a, c) {
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
		showPins: function () {
			$.browser.msie && parseInt($.browser.version) == 7 || $(this.pinsContainer).animate({
				opacity: "1"
			}, 300)
		}
	}
} ();

function initProfileEditorSpec(submitSelector, actionUrl) {

	if($(submitSelector).length <= 0 ) {
		return;
	}
	
	var setSelected = {};

	$(document).ready( function() {
		setSelected = {};

		var fnEnableSubmit = function () {
			var count = 0;
			for( var prop in setSelected )
				count++;
			if( count >= 5 )
				 $( submitSelector ).removeAttr( "disabled" );
			else
				 $( submitSelector ).attr( "disabled", true );
		}

		// count the items that are currently selected.
		var selectedItems = $( "li.item.sel" );
		selectedItems.each(function (e) {
			setSelected[ e.id ] = true;
		});
		fnEnableSubmit();

		$( "li.item" ).click( function () {
			var elt = $( this );
			elt.toggleClass( "sel" );
			if( elt.hasClass( "sel" ) )
				setSelected[ this.id ] = true;
			else
				delete setSelected[ this.id ];
			fnEnableSubmit();
		})
	})

	$(submitSelector).click(function() {
		var arg = "";
		for( var prop in setSelected )
		{
			if( arg != "" )
				arg += "&";
			arg += ( "catIds=" + prop );
		}
		window.location.href = actionUrl + arg;
	});

}

function initProfileEditor()
{
	initProfileEditorSpec("input#btnSubmit", "/friends/addCategories?");
	initProfileEditorSpec("input#btnSubmitProductCategories", "/products/addCategories?");
}

function reloadLeftDiv(url, fnReInitLeftPanel) {
	var fetchDiv = $("div#dragDropTmp");
	if (fetchDiv.length > 0)
		fetchDiv.empty();
	else {
		fetchDiv = $("<div id='dragDropTmp' style='display:none;'></div>")
		$("body").append(fetchDiv);
	}
	fetchDiv.load(url, null, function (responseText, textStatus, XMLHttpRequest) {
		// alert("Some content fetched.");
		$("#giftListDropTarget").fadeOut(null, function () {
			$(this).replaceWith($("#giftListDropTargetUpdated"));
			$("#giftListDropTargetUpdated").attr("id", "giftListDropTarget");
			var jqNewDiv = $('#giftListDropTarget');
			jqNewDiv.fadeIn(null);
			fnReInitLeftPanel(jqNewDiv);
		});
	});
}

function addProductToList(idProduct) {
	var url = "/lists/addProduct?listId=" + context.listId + "&productId=" + idProduct;
	reloadLeftDiv(url, function (jqNewDiv) {
		initLeftPanelDragDrop(jqNewDiv);
	});
}

function removeProductFromList(idProduct) {
	var url = "/lists/removeProductFromList?listId=" + context.listId + "&productId=" + idProduct;
	reloadLeftDiv(url, function (jqNewDiv) {
		initLeftPanelDragDrop(jqNewDiv);
	});
}

function userAction(idProduct,action) {
	var url = "/lists/addUserAction?listId=" + context.listId + "&productId=" + idProduct + "&userAction=" + action;
	$.get(url, function (data) {
		$("#votingPanel").html(data);
	});
}

function initLeftPanelDragDrop(jqTarget) {
	// Droppable
	jqTarget.droppable
	({
		drop: function (event, ui) {
			// alert( "dropped." );
			var eltBeingDropped = ui.draggable[0];
			if( eltBeingDropped.tagName != "DIV" )
				return;
			addProductToList(eltBeingDropped.id);
			ui.helper.hide();
		}
	});

	// Draggable
	jqTarget.find("li.item.product_icon").draggable
	({
		helper: "clone",
		cursorAt: { left: 25, top: 25 },
		revert: true,
		start: function (event, ui) {
			ui.helper.css( 'z-index', 9001 );
		}
	});
}

function initItemsDragDrop(selDrag, selDrop) {

	$(document).ready

	(function () {

		$(selDrag).draggable
		({
			// see http://stackoverflow.com/a/5848800/126995 for overriding original position..
			helper: function () {
				var id = this.id;
				return $("<img src='/products/imagelist?id=" + id + "'/>");
			},
			cursorAt: { left: 25, top: 25 },
			revert: true
		}); // draggable

		$("div#grid-wrapper").droppable
		({
			drop: function (event, ui) {
				// alert( "dropped." );
				var eltBeingDropped = ui.draggable[0];
				if (eltBeingDropped.tagName != "LI")
					return;
				removeProductFromList(eltBeingDropped.id);
				ui.helper.hide();
			}
		}); // droppable

		initLeftPanelDragDrop($(selDrop));
	});  // doc.ready
} // function initItemsDragDrop

function initPageless() {
	$(document).ready(function ($) {
		var optionz = {
			// url: "/lists/listPage",
			url: context.nextPageUrl,
			// params: { listId: context.listId },
			params: context.nextPageParams,
			complete: function () {
				alert("pageless complete");
				GridLayout.allPins();
			}
		}

		if (context.nextPageUrl)
			optionz.url = context.nextPageUrl;
		if (context.nextPageParams)
			optionz.params = context.nextPageParams;

		$("div#items-container").pageless(optionz);
	})
}