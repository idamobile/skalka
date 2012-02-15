/************************************************************************
 * @name:  friendcompleter
 * @author: (c) Rafi Jacoby
 * @version: 0.2
 * @depends: Facebook JSDK, jQuery UI
 ************************************************************************/

function convertFriendListToCompletable(){
	if (window.fbFriendList && !(window.fbFriendList[0].label)) {
		// We have a friendlist, but it's missing the 'label' field that autocomplete likes.
		$.each(window.fbFriendList, function(idx, item) {
			window.fbFriendList[idx].label = item.name;
		});
		// Sort it so list makes sense in autocomplete results
		window.fbFriendList.sort(function(a, b) {
			var compA = a.name.toUpperCase();
			var compB = b.name.toUpperCase();
			return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
		});
	}
}

function populateFriendList() {
	if (!window.fbFriendList) {
		// alert("PFL");
		FB.api("/me/friends?access_token=" + access_token + "&fields=id,name,picture", function (response) {
			window.fbFriendList = response.data;
			convertFriendListToCompletable();
		});
	}
}

var objAutocompleteOptions = null, fnAutocompleteRender = null;

function autocompleteSource(request, response, filter) {
	var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
	var suggestions = [];
	$.each(fbFriendList, function (idx, item) {
		friendName = item.name || item;
		if (matcher.test(friendName)) {
			if (null == filter || filter( item ) ) {
				suggestions.push(item);
			}
		}
	});
	response(suggestions);
}

function friendCompleterSetup()
{
	// Look for an existing global 'fbFriendList', either from a previous
	// run of the function, or set into the page at generation time.
	if (!(window.fbFriendList)) {
		populateFriendList();
	} else {
		// Make sure the pre-existing friend list is autocomplete-friendly
		convertFriendListToCompletable();
	}

	// Make sure we can put our hidden ID somewhere
	if ($('input#fbFriendId').length == 0) {
		$('#fb-root').append("<input id='fbFriendId' name='fbFriendId' type='hidden' value=''/>");
	}

	objAutocompleteOptions =
	{
		/* source: function (request, response) {
			// alert("SFC-SRC");
			var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
			var suggestions = [];
			$.each(fbFriendList, function (idx, item) {
				friendName = item.name || item;
				if (matcher.test(friendName)) {
					suggestions.push(item);
				}
			});
			response(suggestions);
		}, */
		source: function (request, response){
			autocompleteSource(request, response, null);
		},
		select: function (event, ui) {
			var selectedObj = ui.item;
			// alert("Friend Selected: " + selectedObj.label);
			$('input#fbFriendId').val(selectedObj.id);
			$(this).val(selectedObj.label);
			$("#invite_control").show();
			return false;
		},
		appendTo: "input#friend_finder"
	}

	fnAutocompleteRender = function (ul, item) {
		// My: works OK, with picture, less optimal code
		var li = $("<li></li>");
		li.data("item.autocomplete", item);
		var a = $( "<a></a>" );
		var img = $("<img src=\"" + item.picture + "\" />");
		a.text(item.label);
		a.prepend(img);
		li.append(a)
		ul.append(li);
		return li;
	};
}

function friendCompleterAddToInput(inputDivId, fnSelectedFunc) {
	// Add the custom source and select functions to the autocompleter.
	// $(inputDivId).autocomplete(objAutocompleteOptions);

	// Shallow copy: http://stackoverflow.com/a/122704/126995
	var newObject = jQuery.extend({}, objAutocompleteOptions);
	newObject.select = function (event, ui) {
		var selectedObj = ui.item;
		return fnSelectedFunc( $(this), ui, selectedObj );
	}

	$(inputDivId).autocomplete(newObject);

	// Achtung! overriding internal method that's not part of the public API.
	// The code may easily break in the future version of JQuery and/or JQuery UI.
	var widget = $(inputDivId).data("autocomplete");
	widget._renderItem = fnAutocompleteRender;
}

function friendCompleterFilter(inputDivId, fnFilterFunc) {
	var widget = $(inputDivId).data("autocomplete");
	widget.source = function (request, response) {
		autocompleteSource(request, response, fnFilterFunc);
	};
}