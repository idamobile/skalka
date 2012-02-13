//var $j = jQuery.noConflict();

$(document).ready(function($) {
	
});

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