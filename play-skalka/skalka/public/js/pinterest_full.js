(function(a, c) {
	function d(f) {
		return !a(f).parents().andSelf().filter(function() {
			return a.curCSS(this, "visibility") === "hidden" || a.expr.filters.hidden(this)
		}).length
	}
	a.ui = a.ui || {};
	if (!a.ui.version) {
		a.extend(a.ui, {
			version: "1.8.11",
			keyCode: {
				ALT: 18,
				BACKSPACE: 8,
				CAPS_LOCK: 20,
				COMMA: 188,
				COMMAND: 91,
				COMMAND_LEFT: 91,
				COMMAND_RIGHT: 93,
				CONTROL: 17,
				DELETE: 46,
				DOWN: 40,
				END: 35,
				ENTER: 13,
				ESCAPE: 27,
				HOME: 36,
				INSERT: 45,
				LEFT: 37,
				MENU: 93,
				NUMPAD_ADD: 107,
				NUMPAD_DECIMAL: 110,
				NUMPAD_DIVIDE: 111,
				NUMPAD_ENTER: 108,
				NUMPAD_MULTIPLY: 106,
				NUMPAD_SUBTRACT: 109,
				PAGE_DOWN: 34,
				PAGE_UP: 33,
				PERIOD: 190,
				RIGHT: 39,
				SHIFT: 16,
				SPACE: 32,
				TAB: 9,
				UP: 38,
				WINDOWS: 91
			}
		});
		a.fn.extend({
			_focus: a.fn.focus,
			focus: function(f, g) {
				return typeof f === "number" ? this.each(function() {
					var b = this;
					setTimeout(function() {
						a(b).focus();
						g && g.call(b)
					}, f)
				}) : this._focus.apply(this, arguments)
			},
			scrollParent: function() {
				var f;
				f = a.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
					return /(relative|absolute|fixed)/.test(a.curCSS(this, "position", 1)) && /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
				}).eq(0) : this.parents().filter(function() {
					return /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
				}).eq(0);
				return /fixed/.test(this.css("position")) || !f.length ? a(document) : f
			},
			zIndex: function(f) {
				if (f !== c) return this.css("zIndex", f);
				if (this.length) {
					f = a(this[0]);
					for (var g; f.length && f[0] !== document;) {
						g = f.css("position");
						if (g === "absolute" || g === "relative" || g === "fixed") {
							g = parseInt(f.css("zIndex"), 10);
							if (!isNaN(g) && g !== 0) return g
						}
						f = f.parent()
					}
				}
				return 0
			},
			disableSelection: function() {
				return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(f) {
					f.preventDefault()
				})
			},
			enableSelection: function() {
				return this.unbind(".ui-disableSelection")
			}
		});
		a.each(["Width", "Height"], function(f, g) {
			function b(l, o, q, j) {
				a.each(e, function() {
					o -= parseFloat(a.curCSS(l, "padding" + this, true)) || 0;
					if (q) o -= parseFloat(a.curCSS(l, "border" + this + "Width", true)) || 0;
					if (j) o -= parseFloat(a.curCSS(l, "margin" + this, true)) || 0
				});
				return o
			}
			var e = g === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
				h = g.toLowerCase(),
				k = {
					innerWidth: a.fn.innerWidth,
					innerHeight: a.fn.innerHeight,
					outerWidth: a.fn.outerWidth,
					outerHeight: a.fn.outerHeight
				};
			a.fn["inner" + g] = function(l) {
				if (l === c) return k["inner" + g].call(this);
				return this.each(function() {
					a(this).css(h, b(this, l) + "px")
				})
			};
			a.fn["outer" + g] = function(l, o) {
				if (typeof l !== "number") return k["outer" + g].call(this, l);
				return this.each(function() {
					a(this).css(h, b(this, l, true, o) + "px")
				})
			}
		});
		a.extend(a.expr[":"], {
			data: function(f, g, b) {
				return !!a.data(f, b[3])
			},
			focusable: function(f) {
				var g = f.nodeName.toLowerCase(),
					b = a.attr(f, "tabindex");
				if ("area" === g) {
					g = f.parentNode;
					b = g.name;
					if (!f.href || !b || g.nodeName.toLowerCase() !== "map") return false;
					f = a("img[usemap=#" + b + "]")[0];
					return !!f && d(f)
				}
				return (/input|select|textarea|button|object/.test(g) ? !f.disabled : "a" == g ? f.href || !isNaN(b) : !isNaN(b)) && d(f)
			},
			tabbable: function(f) {
				var g = a.attr(f, "tabindex");
				return (isNaN(g) || g >= 0) && a(f).is(":focusable")
			}
		});
		a(function() {
			var f = document.body,
				g = f.appendChild(g = document.createElement("div"));
			a.extend(g.style, {
				minHeight: "100px",
				height: "auto",
				padding: 0,
				borderWidth: 0
			});
			a.support.minHeight = g.offsetHeight === 100;
			a.support.selectstart = "onselectstart" in g;
			f.removeChild(g).style.display = "none"
		});
		a.extend(a.ui, {
			plugin: {
				add: function(f, g, b) {
					f = a.ui[f].prototype;
					for (var e in b) {
						f.plugins[e] = f.plugins[e] || [];
						f.plugins[e].push([g, b[e]])
					}
				},
				call: function(f, g, b) {
					if ((g = f.plugins[g]) && f.element[0].parentNode) for (var e = 0; e < g.length; e++) f.options[g[e][0]] && g[e][1].apply(f.element, b)
				}
			},
			contains: function(f, g) {
				return document.compareDocumentPosition ? f.compareDocumentPosition(g) & 16 : f !== g && f.contains(g)
			},
			hasScroll: function(f, g) {
				if (a(f).css("overflow") === "hidden") return false;
				g = g && g === "left" ? "scrollLeft" : "scrollTop";
				var b = false;
				if (f[g] > 0) return true;
				f[g] = 1;
				b = f[g] > 0;
				f[g] = 0;
				return b
			},
			isOverAxis: function(f, g, b) {
				return f > g && f < g + b
			},
			isOver: function(f, g, b, e, h, k) {
				return a.ui.isOverAxis(f, b, h) && a.ui.isOverAxis(g, e, k)
			}
		})
	}
})(jQuery);

(function(a, c) {
	if (a.cleanData) {
		var d = a.cleanData;
		a.cleanData = function(g) {
			for (var b = 0, e;
			(e = g[b]) != null; b++) a(e).triggerHandler("remove");
			d(g)
		}
	} else {
		var f = a.fn.remove;
		a.fn.remove = function(g, b) {
			return this.each(function() {
				if (!b) if (!g || a.filter(g, [this]).length) a("*", this).add([this]).each(function() {
					a(this).triggerHandler("remove")
				});
				return f.call(a(this), g, b)
			})
		}
	}
	a.widget = function(g, b, e) {
		var h = g.split(".")[0],
			k;
		g = g.split(".")[1];
		k = h + "-" + g;
		if (!e) {
			e = b;
			b = a.Widget
		}
		a.expr[":"][k] = function(l) {
			return !!a.data(l, g)
		};
		a[h] = a[h] || {};
		a[h][g] = function(l, o) {
			arguments.length && this._createWidget(l, o)
		};
		b = new b;
		b.options = a.extend(true, {}, b.options);
		a[h][g].prototype = a.extend(true, b, {
			namespace: h,
			widgetName: g,
			widgetEventPrefix: a[h][g].prototype.widgetEventPrefix || g,
			widgetBaseClass: k
		}, e);
		a.widget.bridge(g, a[h][g])
	};
	a.widget.bridge = function(g, b) {
		a.fn[g] = function(e) {
			var h = typeof e === "string",
				k = Array.prototype.slice.call(arguments, 1),
				l = this;
			e = !h && k.length ? a.extend.apply(null, [true, e].concat(k)) : e;
			if (h && e.charAt(0) === "_") return l;
			h ? this.each(function() {
				var o = a.data(this, g),
					q = o && a.isFunction(o[e]) ? o[e].apply(o, k) : o;
				if (q !== o && q !== c) {
					l = q;
					return false
				}
			}) : this.each(function() {
				var o = a.data(this, g);
				o ? o.option(e || {})._init() : a.data(this, g, new b(e, this))
			});
			return l
		}
	};
	a.Widget = function(g, b) {
		arguments.length && this._createWidget(g, b)
	};
	a.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		options: {
			disabled: false
		},
		_createWidget: function(g, b) {
			a.data(b, this.widgetName, this);
			this.element = a(b);
			this.options = a.extend(true, {}, this.options, this._getCreateOptions(), g);
			var e = this;
			this.element.bind("remove." + this.widgetName, function() {
				e.destroy()
			});
			this._create();
			this._trigger("create");
			this._init()
		},
		_getCreateOptions: function() {
			return a.metadata && a.metadata.get(this.element[0])[this.widgetName]
		},
		_create: function() {},
		_init: function() {},
		destroy: function() {
			this.element.unbind("." + this.widgetName).removeData(this.widgetName);
			this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
		},
		widget: function() {
			return this.element
		},
		option: function(g, b) {
			var e = g;
			if (arguments.length === 0) return a.extend({}, this.options);
			if (typeof g === "string") {
				if (b === c) return this.options[g];
				e = {};
				e[g] = b
			}
			this._setOptions(e);
			return this
		},
		_setOptions: function(g) {
			var b = this;
			a.each(g, function(e, h) {
				b._setOption(e, h)
			});
			return this
		},
		_setOption: function(g, b) {
			this.options[g] = b;
			if (g === "disabled") this.widget()[b ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", b);
			return this
		},
		enable: function() {
			return this._setOption("disabled", false)
		},
		disable: function() {
			return this._setOption("disabled", true)
		},
		_trigger: function(g, b, e) {
			var h = this.options[g];
			b = a.Event(b);
			b.type = (g === this.widgetEventPrefix ? g : this.widgetEventPrefix + g).toLowerCase();
			e = e || {};
			if (b.originalEvent) {
				g = a.event.props.length;
				for (var k; g;) {
					k = a.event.props[--g];
					b[k] = b.originalEvent[k]
				}
			}
			this.element.trigger(b, e);
			return !(a.isFunction(h) && h.call(this.element[0], b, e) === false || b.isDefaultPrevented())
		}
	}
})(jQuery);

(function(a) {
	a.widget("ui.mouse", {
		options: {
			cancel: ":input,option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function() {
			var c = this;
			this.element.bind("mousedown." + this.widgetName, function(d) {
				return c._mouseDown(d)
			}).bind("click." + this.widgetName, function(d) {
				if (true === a.data(d.target, c.widgetName + ".preventClickEvent")) {
					a.removeData(d.target, c.widgetName + ".preventClickEvent");
					d.stopImmediatePropagation();
					return false
				}
			});
			this.started = false
		},
		_mouseDestroy: function() {
			this.element.unbind("." + this.widgetName)
		},
		_mouseDown: function(c) {
			c.originalEvent = c.originalEvent || {};
			if (!c.originalEvent.mouseHandled) {
				this._mouseStarted && this._mouseUp(c);
				this._mouseDownEvent = c;
				var d = this,
					f = c.which == 1,
					g = typeof this.options.cancel == "string" ? a(c.target).parents().add(c.target).filter(this.options.cancel).length : false;
				if (!f || g || !this._mouseCapture(c)) return true;
				this.mouseDelayMet = !this.options.delay;
				if (!this.mouseDelayMet) this._mouseDelayTimer = setTimeout(function() {
					d.mouseDelayMet = true
				}, this.options.delay);
				if (this._mouseDistanceMet(c) && this._mouseDelayMet(c)) {
					this._mouseStarted = this._mouseStart(c) !== false;
					if (!this._mouseStarted) {
						c.preventDefault();
						return true
					}
				}
				true === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent");
				this._mouseMoveDelegate = function(b) {
					return d._mouseMove(b)
				};
				this._mouseUpDelegate = function(b) {
					return d._mouseUp(b)
				};
				a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
				c.preventDefault();
				return c.originalEvent.mouseHandled = true
			}
		},
		_mouseMove: function(c) {
			if (a.browser.msie && !(document.documentMode >= 9) && !c.button) return this._mouseUp(c);
			if (this._mouseStarted) {
				this._mouseDrag(c);
				return c.preventDefault()
			}
			if (this._mouseDistanceMet(c) && this._mouseDelayMet(c))(this._mouseStarted = this._mouseStart(this._mouseDownEvent, c) !== false) ? this._mouseDrag(c) : this._mouseUp(c);
			return !this._mouseStarted
		},
		_mouseUp: function(c) {
			a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
			if (this._mouseStarted) {
				this._mouseStarted = false;
				c.target == this._mouseDownEvent.target && a.data(c.target, this.widgetName + ".preventClickEvent", true);
				this._mouseStop(c)
			}
			return false
		},
		_mouseDistanceMet: function(c) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - c.pageX), Math.abs(this._mouseDownEvent.pageY - c.pageY)) >= this.options.distance
		},
		_mouseDelayMet: function() {
			return this.mouseDelayMet
		},
		_mouseStart: function() {},
		_mouseDrag: function() {},
		_mouseStop: function() {},
		_mouseCapture: function() {
			return true
		}
	})
})(jQuery);

(function(a) {
	a.ui = a.ui || {};
	var c = /left|center|right/,
		d = /top|center|bottom/,
		f = a.fn.position,
		g = a.fn.offset;
	a.fn.position = function(b) {
		if (!b || !b.of) return f.apply(this, arguments);
		b = a.extend({}, b);
		var e = a(b.of),
			h = e[0],
			k = (b.collision || "flip").split(" "),
			l = b.offset ? b.offset.split(" ") : [0, 0],
			o, q, j;
		if (h.nodeType === 9) {
			o = e.width();
			q = e.height();
			j = {
				top: 0,
				left: 0
			}
		} else if (h.setTimeout) {
			o = e.width();
			q = e.height();
			j = {
				top: e.scrollTop(),
				left: e.scrollLeft()
			}
		} else if (h.preventDefault) {
			b.at = "left top";
			o = q = 0;
			j = {
				top: b.of.pageY,
				left: b.of.pageX
			}
		} else {
			o = e.outerWidth();
			q = e.outerHeight();
			j = e.offset()
		}
		a.each(["my", "at"], function() {
			var m = (b[this] || "").split(" ");
			if (m.length === 1) m = c.test(m[0]) ? m.concat(["center"]) : d.test(m[0]) ? ["center"].concat(m) : ["center", "center"];
			m[0] = c.test(m[0]) ? m[0] : "center";
			m[1] = d.test(m[1]) ? m[1] : "center";
			b[this] = m
		});
		if (k.length === 1) k[1] = k[0];
		l[0] = parseInt(l[0], 10) || 0;
		if (l.length === 1) l[1] = l[0];
		l[1] = parseInt(l[1], 10) || 0;
		if (b.at[0] === "right") j.left += o;
		else if (b.at[0] === "center") j.left += o / 2;
		if (b.at[1] === "bottom") j.top += q;
		else if (b.at[1] === "center") j.top += q / 2;
		j.left += l[0];
		j.top += l[1];
		return this.each(function() {
			var m = a(this),
				p = m.outerWidth(),
				s = m.outerHeight(),
				n = parseInt(a.curCSS(this, "marginLeft", true)) || 0,
				r = parseInt(a.curCSS(this, "marginTop", true)) || 0,
				u = p + n + (parseInt(a.curCSS(this, "marginRight", true)) || 0),
				v = s + r + (parseInt(a.curCSS(this, "marginBottom", true)) || 0),
				w = a.extend({}, j),
				y;
			if (b.my[0] === "right") w.left -= p;
			else if (b.my[0] === "center") w.left -= p / 2;
			if (b.my[1] === "bottom") w.top -= s;
			else if (b.my[1] === "center") w.top -= s / 2;
			w.left = Math.round(w.left);
			w.top = Math.round(w.top);
			y = {
				left: w.left - n,
				top: w.top - r
			};
			a.each(["left", "top"], function(C, B) {
				a.ui.position[k[C]] && a.ui.position[k[C]][B](w, {
					targetWidth: o,
					targetHeight: q,
					elemWidth: p,
					elemHeight: s,
					collisionPosition: y,
					collisionWidth: u,
					collisionHeight: v,
					offset: l,
					my: b.my,
					at: b.at
				})
			});
			a.fn.bgiframe && m.bgiframe();
			m.offset(a.extend(w, {
				using: b.using
			}))
		})
	};
	a.ui.position = {
		fit: {
			left: function(b, e) {
				var h = a(window);
				h = e.collisionPosition.left + e.collisionWidth - h.width() - h.scrollLeft();
				b.left = h > 0 ? b.left - h : Math.max(b.left - e.collisionPosition.left, b.left)
			},
			top: function(b, e) {
				var h = a(window);
				h = e.collisionPosition.top + e.collisionHeight - h.height() - h.scrollTop();
				b.top = h > 0 ? b.top - h : Math.max(b.top - e.collisionPosition.top, b.top)
			}
		},
		flip: {
			left: function(b, e) {
				if (e.at[0] !== "center") {
					var h = a(window);
					h = e.collisionPosition.left + e.collisionWidth - h.width() - h.scrollLeft();
					var k = e.my[0] === "left" ? -e.elemWidth : e.my[0] === "right" ? e.elemWidth : 0,
						l = e.at[0] === "left" ? e.targetWidth : -e.targetWidth,
						o = -2 * e.offset[0];
					b.left += e.collisionPosition.left < 0 ? k + l + o : h > 0 ? k + l + o : 0
				}
			},
			top: function(b, e) {
				if (e.at[1] !== "center") {
					var h = a(window);
					h = e.collisionPosition.top + e.collisionHeight - h.height() - h.scrollTop();
					var k = e.my[1] === "top" ? -e.elemHeight : e.my[1] === "bottom" ? e.elemHeight : 0,
						l = e.at[1] === "top" ? e.targetHeight : -e.targetHeight,
						o = -2 * e.offset[1];
					b.top += e.collisionPosition.top < 0 ? k + l + o : h > 0 ? k + l + o : 0
				}
			}
		}
	};
	if (!a.offset.setOffset) {
		a.offset.setOffset = function(b, e) {
			if (/static/.test(a.curCSS(b, "position"))) b.style.position = "relative";
			var h = a(b),
				k = h.offset(),
				l = parseInt(a.curCSS(b, "top", true), 10) || 0,
				o = parseInt(a.curCSS(b, "left", true), 10) || 0;
			k = {
				top: e.top - k.top + l,
				left: e.left - k.left + o
			};
			"using" in e ? e.using.call(b, k) : h.css(k)
		};
		a.fn.offset = function(b) {
			var e = this[0];
			if (!e || !e.ownerDocument) return null;
			if (b) return this.each(function() {
				a.offset.setOffset(this, b)
			});
			return g.call(this)
		}
	}
})(jQuery);

(function(a) {
	a.widget("ui.draggable", a.ui.mouse, {
		widgetEventPrefix: "drag",
		options: {
			addClasses: true,
			appendTo: "parent",
			axis: false,
			connectToSortable: false,
			containment: false,
			cursor: "auto",
			cursorAt: false,
			grid: false,
			handle: false,
			helper: "original",
			iframeFix: false,
			opacity: false,
			refreshPositions: false,
			revert: false,
			revertDuration: 500,
			scope: "default",
			scroll: true,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			snap: false,
			snapMode: "both",
			snapTolerance: 20,
			stack: false,
			zIndex: false
		},
		_create: function() {
			if (this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position"))) this.element[0].style.position = "relative";
			this.options.addClasses && this.element.addClass("ui-draggable");
			this.options.disabled && this.element.addClass("ui-draggable-disabled");
			this._mouseInit()
		},
		destroy: function() {
			if (this.element.data("draggable")) {
				this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
				this._mouseDestroy();
				return this
			}
		},
		_mouseCapture: function(c) {
			var d = this.options;
			if (this.helper || d.disabled || a(c.target).is(".ui-resizable-handle")) return false;
			this.handle = this._getHandle(c);
			if (!this.handle) return false;
			return true
		},
		_mouseStart: function(c) {
			var d = this.options;
			this.helper = this._createHelper(c);
			this._cacheHelperProportions();
			if (a.ui.ddmanager) a.ui.ddmanager.current = this;
			this._cacheMargins();
			this.cssPosition = this.helper.css("position");
			this.scrollParent = this.helper.scrollParent();
			this.offset = this.positionAbs = this.element.offset();
			this.offset = {
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			};
			a.extend(this.offset, {
				click: {
					left: c.pageX - this.offset.left,
					top: c.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			});
			this.originalPosition = this.position = this._generatePosition(c);
			this.originalPageX = c.pageX;
			this.originalPageY = c.pageY;
			d.cursorAt && this._adjustOffsetFromHelper(d.cursorAt);
			d.containment && this._setContainment();
			if (this._trigger("start", c) === false) {
				this._clear();
				return false
			}
			this._cacheHelperProportions();
			a.ui.ddmanager && !d.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, c);
			this.helper.addClass("ui-draggable-dragging");
			this._mouseDrag(c, true);
			return true
		},
		_mouseDrag: function(c, d) {
			this.position = this._generatePosition(c);
			this.positionAbs = this._convertPositionTo("absolute");
			if (!d) {
				d = this._uiHash();
				if (this._trigger("drag", c, d) === false) {
					this._mouseUp({});
					return false
				}
				this.position = d.position
			}
			if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
			if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
			a.ui.ddmanager && a.ui.ddmanager.drag(this, c);
			return false
		},
		_mouseStop: function(c) {
			var d = false;
			if (a.ui.ddmanager && !this.options.dropBehaviour) d = a.ui.ddmanager.drop(this, c);
			if (this.dropped) {
				d = this.dropped;
				this.dropped = false
			}
			if ((!this.element[0] || !this.element[0].parentNode) && this.options.helper == "original") return false;
			if (this.options.revert == "invalid" && !d || this.options.revert == "valid" && d || this.options.revert === true || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d)) {
				var f = this;
				a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
					f._trigger("stop", c) !== false && f._clear()
				})
			} else this._trigger("stop", c) !== false && this._clear();
			return false
		},
		cancel: function() {
			this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear();
			return this
		},
		_getHandle: function(c) {
			var d = !this.options.handle || !a(this.options.handle, this.element).length ? true : false;
			a(this.options.handle, this.element).find("*").andSelf().each(function() {
				if (this == c.target) d = true
			});
			return d
		},
		_createHelper: function(c) {
			var d = this.options;
			c = a.isFunction(d.helper) ? a(d.helper.apply(this.element[0], [c])) : d.helper == "clone" ? this.element.clone() : this.element;
			c.parents("body").length || c.appendTo(d.appendTo == "parent" ? this.element[0].parentNode : d.appendTo);
			c[0] != this.element[0] && !/(fixed|absolute)/.test(c.css("position")) && c.css("position", "absolute");
			return c
		},
		_adjustOffsetFromHelper: function(c) {
			if (typeof c == "string") c = c.split(" ");
			if (a.isArray(c)) c = {
				left: +c[0],
				top: +c[1] || 0
			};
			if ("left" in c) this.offset.click.left = c.left + this.margins.left;
			if ("right" in c) this.offset.click.left = this.helperProportions.width - c.right + this.margins.left;
			if ("top" in c) this.offset.click.top = c.top + this.margins.top;
			if ("bottom" in c) this.offset.click.top = this.helperProportions.height - c.bottom + this.margins.top
		},
		_getParentOffset: function() {
			this.offsetParent = this.helper.offsetParent();
			var c = this.offsetParent.offset();
			if (this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) {
				c.left += this.scrollParent.scrollLeft();
				c.top += this.scrollParent.scrollTop()
			}
			if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie) c = {
				top: 0,
				left: 0
			};
			return {
				top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if (this.cssPosition == "relative") {
				var c = this.element.position();
				return {
					top: c.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: c.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			} else return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: parseInt(this.element.css("marginLeft"), 10) || 0,
				top: parseInt(this.element.css("marginTop"), 10) || 0,
				right: parseInt(this.element.css("marginRight"), 10) || 0,
				bottom: parseInt(this.element.css("marginBottom"), 10) || 0
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var c = this.options;
			if (c.containment == "parent") c.containment = this.helper[0].parentNode;
			if (c.containment == "document" || c.containment == "window") this.containment = [(c.containment == "document" ? 0 : a(window).scrollLeft()) - this.offset.relative.left - this.offset.parent.left, (c.containment == "document" ? 0 : a(window).scrollTop()) - this.offset.relative.top - this.offset.parent.top, (c.containment == "document" ? 0 : a(window).scrollLeft()) + a(c.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (c.containment == "document" ? 0 : a(window).scrollTop()) + (a(c.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
			if (!/^(document|window|parent)$/.test(c.containment) && c.containment.constructor != Array) {
				var d = a(c.containment)[0];
				if (d) {
					c = a(c.containment).offset();
					var f = a(d).css("overflow") != "hidden";
					this.containment = [c.left + (parseInt(a(d).css("borderLeftWidth"), 10) || 0) + (parseInt(a(d).css("paddingLeft"), 10) || 0), c.top + (parseInt(a(d).css("borderTopWidth"), 10) || 0) + (parseInt(a(d).css("paddingTop"), 10) || 0), c.left + (f ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(a(d).css("borderLeftWidth"), 10) || 0) - (parseInt(a(d).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, c.top + (f ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(a(d).css("borderTopWidth"), 10) || 0) - (parseInt(a(d).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom]
				}
			} else if (c.containment.constructor == Array) this.containment = c.containment
		},
		_convertPositionTo: function(c, d) {
			if (!d) d = this.position;
			c = c == "absolute" ? 1 : -1;
			var f = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
				g = /(html|body)/i.test(f[0].tagName);
			return {
				top: d.top + this.offset.relative.top * c + this.offset.parent.top * c - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g ? 0 : f.scrollTop()) * c),
				left: d.left + this.offset.relative.left * c + this.offset.parent.left * c - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : f.scrollLeft()) * c)
			}
		},
		_generatePosition: function(c) {
			var d = this.options,
				f = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
				g = /(html|body)/i.test(f[0].tagName),
				b = c.pageX,
				e = c.pageY;
			if (this.originalPosition) {
				if (this.containment) {
					if (c.pageX - this.offset.click.left < this.containment[0]) b = this.containment[0] + this.offset.click.left;
					if (c.pageY - this.offset.click.top < this.containment[1]) e = this.containment[1] + this.offset.click.top;
					if (c.pageX - this.offset.click.left > this.containment[2]) b = this.containment[2] + this.offset.click.left;
					if (c.pageY - this.offset.click.top > this.containment[3]) e = this.containment[3] + this.offset.click.top
				}
				if (d.grid) {
					e = this.originalPageY + Math.round((e - this.originalPageY) / d.grid[1]) * d.grid[1];
					e = this.containment ? !(e - this.offset.click.top < this.containment[1] || e - this.offset.click.top > this.containment[3]) ? e : !(e - this.offset.click.top < this.containment[1]) ? e - d.grid[1] : e + d.grid[1] : e;
					b = this.originalPageX + Math.round((b - this.originalPageX) / d.grid[0]) * d.grid[0];
					b = this.containment ? !(b - this.offset.click.left < this.containment[0] || b - this.offset.click.left > this.containment[2]) ? b : !(b - this.offset.click.left < this.containment[0]) ? b - d.grid[0] : b + d.grid[0] : b
				}
			}
			return {
				top: e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g ? 0 : f.scrollTop()),
				left: b - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : f.scrollLeft())
			}
		},
		_clear: function() {
			this.helper.removeClass("ui-draggable-dragging");
			this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove();
			this.helper = null;
			this.cancelHelperRemoval = false
		},
		_trigger: function(c, d, f) {
			f = f || this._uiHash();
			a.ui.plugin.call(this, c, [d, f]);
			if (c == "drag") this.positionAbs = this._convertPositionTo("absolute");
			return a.Widget.prototype._trigger.call(this, c, d, f)
		},
		plugins: {},
		_uiHash: function() {
			return {
				helper: this.helper,
				position: this.position,
				originalPosition: this.originalPosition,
				offset: this.positionAbs
			}
		}
	});
	a.extend(a.ui.draggable, {
		version: "1.8.11"
	});
	a.ui.plugin.add("draggable", "connectToSortable", {
		start: function(c, d) {
			var f = a(this).data("draggable"),
				g = f.options,
				b = a.extend({}, d, {
					item: f.element
				});
			f.sortables = [];
			a(g.connectToSortable).each(function() {
				var e = a.data(this, "sortable");
				if (e && !e.options.disabled) {
					f.sortables.push({
						instance: e,
						shouldRevert: e.options.revert
					});
					e.refreshPositions();
					e._trigger("activate", c, b)
				}
			})
		},
		stop: function(c, d) {
			var f = a(this).data("draggable"),
				g = a.extend({}, d, {
					item: f.element
				});
			a.each(f.sortables, function() {
				if (this.instance.isOver) {
					this.instance.isOver = 0;
					f.cancelHelperRemoval = true;
					this.instance.cancelHelperRemoval = false;
					if (this.shouldRevert) this.instance.options.revert = true;
					this.instance._mouseStop(c);
					this.instance.options.helper = this.instance.options._helper;
					f.options.helper == "original" && this.instance.currentItem.css({
						top: "auto",
						left: "auto"
					})
				} else {
					this.instance.cancelHelperRemoval = false;
					this.instance._trigger("deactivate", c, g)
				}
			})
		},
		drag: function(c, d) {
			var f = a(this).data("draggable"),
				g = this;
			a.each(f.sortables, function() {
				this.instance.positionAbs = f.positionAbs;
				this.instance.helperProportions = f.helperProportions;
				this.instance.offset.click = f.offset.click;
				if (this.instance._intersectsWith(this.instance.containerCache)) {
					if (!this.instance.isOver) {
						this.instance.isOver = 1;
						this.instance.currentItem = a(g).clone().appendTo(this.instance.element).data("sortable-item", true);
						this.instance.options._helper = this.instance.options.helper;
						this.instance.options.helper = function() {
							return d.helper[0]
						};
						c.target = this.instance.currentItem[0];
						this.instance._mouseCapture(c, true);
						this.instance._mouseStart(c, true, true);
						this.instance.offset.click.top = f.offset.click.top;
						this.instance.offset.click.left = f.offset.click.left;
						this.instance.offset.parent.left -= f.offset.parent.left - this.instance.offset.parent.left;
						this.instance.offset.parent.top -= f.offset.parent.top - this.instance.offset.parent.top;
						f._trigger("toSortable", c);
						f.dropped = this.instance.element;
						f.currentItem = f.element;
						this.instance.fromOutside = f
					}
					this.instance.currentItem && this.instance._mouseDrag(c)
				} else if (this.instance.isOver) {
					this.instance.isOver = 0;
					this.instance.cancelHelperRemoval = true;
					this.instance.options.revert = false;
					this.instance._trigger("out", c, this.instance._uiHash(this.instance));
					this.instance._mouseStop(c, true);
					this.instance.options.helper = this.instance.options._helper;
					this.instance.currentItem.remove();
					this.instance.placeholder && this.instance.placeholder.remove();
					f._trigger("fromSortable", c);
					f.dropped = false
				}
			})
		}
	});
	a.ui.plugin.add("draggable", "cursor", {
		start: function() {
			var c = a("body"),
				d = a(this).data("draggable").options;
			if (c.css("cursor")) d._cursor = c.css("cursor");
			c.css("cursor", d.cursor)
		},
		stop: function() {
			var c = a(this).data("draggable").options;
			c._cursor && a("body").css("cursor", c._cursor)
		}
	});
	a.ui.plugin.add("draggable", "iframeFix", {
		start: function() {
			var c = a(this).data("draggable").options;
			a(c.iframeFix === true ? "iframe" : c.iframeFix).each(function() {
				a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
					width: this.offsetWidth + "px",
					height: this.offsetHeight + "px",
					position: "absolute",
					opacity: "0.001",
					zIndex: 1E3
				}).css(a(this).offset()).appendTo("body")
			})
		},
		stop: function() {
			a("div.ui-draggable-iframeFix").each(function() {
				this.parentNode.removeChild(this)
			})
		}
	});
	a.ui.plugin.add("draggable", "opacity", {
		start: function(c, d) {
			c = a(d.helper);
			d = a(this).data("draggable").options;
			if (c.css("opacity")) d._opacity = c.css("opacity");
			c.css("opacity", d.opacity)
		},
		stop: function(c, d) {
			c = a(this).data("draggable").options;
			c._opacity && a(d.helper).css("opacity", c._opacity)
		}
	});
	a.ui.plugin.add("draggable", "scroll", {
		start: function() {
			var c = a(this).data("draggable");
			if (c.scrollParent[0] != document && c.scrollParent[0].tagName != "HTML") c.overflowOffset = c.scrollParent.offset()
		},
		drag: function(c) {
			var d = a(this).data("draggable"),
				f = d.options,
				g = false;
			if (d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML") {
				if (!f.axis || f.axis != "x") if (d.overflowOffset.top + d.scrollParent[0].offsetHeight - c.pageY < f.scrollSensitivity) d.scrollParent[0].scrollTop = g = d.scrollParent[0].scrollTop + f.scrollSpeed;
				else if (c.pageY - d.overflowOffset.top < f.scrollSensitivity) d.scrollParent[0].scrollTop = g = d.scrollParent[0].scrollTop - f.scrollSpeed;
				if (!f.axis || f.axis != "y") if (d.overflowOffset.left + d.scrollParent[0].offsetWidth - c.pageX < f.scrollSensitivity) d.scrollParent[0].scrollLeft = g = d.scrollParent[0].scrollLeft + f.scrollSpeed;
				else if (c.pageX - d.overflowOffset.left < f.scrollSensitivity) d.scrollParent[0].scrollLeft = g = d.scrollParent[0].scrollLeft - f.scrollSpeed
			} else {
				if (!f.axis || f.axis != "x") if (c.pageY - a(document).scrollTop() < f.scrollSensitivity) g = a(document).scrollTop(a(document).scrollTop() - f.scrollSpeed);
				else if (a(window).height() - (c.pageY - a(document).scrollTop()) < f.scrollSensitivity) g = a(document).scrollTop(a(document).scrollTop() + f.scrollSpeed);
				if (!f.axis || f.axis != "y") if (c.pageX - a(document).scrollLeft() < f.scrollSensitivity) g = a(document).scrollLeft(a(document).scrollLeft() - f.scrollSpeed);
				else if (a(window).width() - (c.pageX - a(document).scrollLeft()) < f.scrollSensitivity) g = a(document).scrollLeft(a(document).scrollLeft() + f.scrollSpeed)
			}
			g !== false && a.ui.ddmanager && !f.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, c)
		}
	});
	a.ui.plugin.add("draggable", "snap", {
		start: function() {
			var c = a(this).data("draggable"),
				d = c.options;
			c.snapElements = [];
			a(d.snap.constructor != String ? d.snap.items || ":data(draggable)" : d.snap).each(function() {
				var f = a(this),
					g = f.offset();
				this != c.element[0] && c.snapElements.push({
					item: this,
					width: f.outerWidth(),
					height: f.outerHeight(),
					top: g.top,
					left: g.left
				})
			})
		},
		drag: function(c, d) {
			for (var f = a(this).data("draggable"), g = f.options, b = g.snapTolerance, e = d.offset.left, h = e + f.helperProportions.width, k = d.offset.top, l = k + f.helperProportions.height, o = f.snapElements.length - 1; o >= 0; o--) {
				var q = f.snapElements[o].left,
					j = q + f.snapElements[o].width,
					m = f.snapElements[o].top,
					p = m + f.snapElements[o].height;
				if (q - b < e && e < j + b && m - b < k && k < p + b || q - b < e && e < j + b && m - b < l && l < p + b || q - b < h && h < j + b && m - b < k && k < p + b || q - b < h && h < j + b && m - b < l && l < p + b) {
					if (g.snapMode != "inner") {
						var s = Math.abs(m - l) <= b,
							n = Math.abs(p - k) <= b,
							r = Math.abs(q - h) <= b,
							u = Math.abs(j - e) <= b;
						if (s) d.position.top = f._convertPositionTo("relative", {
							top: m - f.helperProportions.height,
							left: 0
						}).top - f.margins.top;
						if (n) d.position.top = f._convertPositionTo("relative", {
							top: p,
							left: 0
						}).top - f.margins.top;
						if (r) d.position.left = f._convertPositionTo("relative", {
							top: 0,
							left: q - f.helperProportions.width
						}).left - f.margins.left;
						if (u) d.position.left = f._convertPositionTo("relative", {
							top: 0,
							left: j
						}).left - f.margins.left
					}
					var v = s || n || r || u;
					if (g.snapMode != "outer") {
						s = Math.abs(m - k) <= b;
						n = Math.abs(p - l) <= b;
						r = Math.abs(q - e) <= b;
						u = Math.abs(j - h) <= b;
						if (s) d.position.top = f._convertPositionTo("relative", {
							top: m,
							left: 0
						}).top - f.margins.top;
						if (n) d.position.top = f._convertPositionTo("relative", {
							top: p - f.helperProportions.height,
							left: 0
						}).top - f.margins.top;
						if (r) d.position.left = f._convertPositionTo("relative", {
							top: 0,
							left: q
						}).left - f.margins.left;
						if (u) d.position.left = f._convertPositionTo("relative", {
							top: 0,
							left: j - f.helperProportions.width
						}).left - f.margins.left
					}
					if (!f.snapElements[o].snapping && (s || n || r || u || v)) f.options.snap.snap && f.options.snap.snap.call(f.element, c, a.extend(f._uiHash(), {
						snapItem: f.snapElements[o].item
					}));
					f.snapElements[o].snapping = s || n || r || u || v
				} else {
					f.snapElements[o].snapping && f.options.snap.release && f.options.snap.release.call(f.element, c, a.extend(f._uiHash(), {
						snapItem: f.snapElements[o].item
					}));
					f.snapElements[o].snapping = false
				}
			}
		}
	});
	a.ui.plugin.add("draggable", "stack", {
		start: function() {
			var c = a(this).data("draggable").options;
			c = a.makeArray(a(c.stack)).sort(function(f, g) {
				return (parseInt(a(f).css("zIndex"), 10) || 0) - (parseInt(a(g).css("zIndex"), 10) || 0)
			});
			if (c.length) {
				var d = parseInt(c[0].style.zIndex) || 0;
				a(c).each(function(f) {
					this.style.zIndex = d + f
				});
				this[0].style.zIndex = d + c.length
			}
		}
	});
	a.ui.plugin.add("draggable", "zIndex", {
		start: function(c, d) {
			c = a(d.helper);
			d = a(this).data("draggable").options;
			if (c.css("zIndex")) d._zIndex = c.css("zIndex");
			c.css("zIndex", d.zIndex)
		},
		stop: function(c, d) {
			c = a(this).data("draggable").options;
			c._zIndex && a(d.helper).css("zIndex", c._zIndex)
		}
	})
})(jQuery);
(function(a) {
	a.widget("ui.droppable", {
		widgetEventPrefix: "drop",
		options: {
			accept: "*",
			activeClass: false,
			addClasses: true,
			greedy: false,
			hoverClass: false,
			scope: "default",
			tolerance: "intersect"
		},
		_create: function() {
			var c = this.options,
				d = c.accept;
			this.isover = 0;
			this.isout = 1;
			this.accept = a.isFunction(d) ? d : function(f) {
				return f.is(d)
			};
			this.proportions = {
				width: this.element[0].offsetWidth,
				height: this.element[0].offsetHeight
			};
			a.ui.ddmanager.droppables[c.scope] = a.ui.ddmanager.droppables[c.scope] || [];
			a.ui.ddmanager.droppables[c.scope].push(this);
			c.addClasses && this.element.addClass("ui-droppable")
		},
		destroy: function() {
			for (var c = a.ui.ddmanager.droppables[this.options.scope], d = 0; d < c.length; d++) c[d] == this && c.splice(d, 1);
			this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");
			return this
		},
		_setOption: function(c, d) {
			if (c == "accept") this.accept = a.isFunction(d) ? d : function(f) {
				return f.is(d)
			};
			a.Widget.prototype._setOption.apply(this, arguments)
		},
		_activate: function(c) {
			var d = a.ui.ddmanager.current;
			this.options.activeClass && this.element.addClass(this.options.activeClass);
			d && this._trigger("activate", c, this.ui(d))
		},
		_deactivate: function(c) {
			var d = a.ui.ddmanager.current;
			this.options.activeClass && this.element.removeClass(this.options.activeClass);
			d && this._trigger("deactivate", c, this.ui(d))
		},
		_over: function(c) {
			var d = a.ui.ddmanager.current;
			if (!(!d || (d.currentItem || d.element)[0] == this.element[0])) if (this.accept.call(this.element[0], d.currentItem || d.element)) {
				this.options.hoverClass && this.element.addClass(this.options.hoverClass);
				this._trigger("over", c, this.ui(d))
			}
		},
		_out: function(c) {
			var d = a.ui.ddmanager.current;
			if (!(!d || (d.currentItem || d.element)[0] == this.element[0])) if (this.accept.call(this.element[0], d.currentItem || d.element)) {
				this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
				this._trigger("out", c, this.ui(d))
			}
		},
		_drop: function(c, d) {
			var f = d || a.ui.ddmanager.current;
			if (!f || (f.currentItem || f.element)[0] == this.element[0]) return false;
			var g = false;
			this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
				var b = a.data(this, "droppable");
				if (b.options.greedy && !b.options.disabled && b.options.scope == f.options.scope && b.accept.call(b.element[0], f.currentItem || f.element) && a.ui.intersect(f, a.extend(b, {
					offset: b.element.offset()
				}), b.options.tolerance)) {
					g = true;
					return false
				}
			});
			if (g) return false;
			if (this.accept.call(this.element[0], f.currentItem || f.element)) {
				this.options.activeClass && this.element.removeClass(this.options.activeClass);
				this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
				this._trigger("drop", c, this.ui(f));
				return this.element
			}
			return false
		},
		ui: function(c) {
			return {
				draggable: c.currentItem || c.element,
				helper: c.helper,
				position: c.position,
				offset: c.positionAbs
			}
		}
	});
	a.extend(a.ui.droppable, {
		version: "1.8.11"
	});
	a.ui.intersect = function(c, d, f) {
		if (!d.offset) return false;
		var g = (c.positionAbs || c.position.absolute).left,
			b = g + c.helperProportions.width,
			e = (c.positionAbs || c.position.absolute).top,
			h = e + c.helperProportions.height,
			k = d.offset.left,
			l = k + d.proportions.width,
			o = d.offset.top,
			q = o + d.proportions.height;
		switch (f) {
		case "fit":
			return k <= g && b <= l && o <= e && h <= q;
		case "intersect":
			return k < g + c.helperProportions.width / 2 && b - c.helperProportions.width / 2 < l && o < e + c.helperProportions.height / 2 && h - c.helperProportions.height / 2 < q;
		case "pointer":
			return a.ui.isOver((c.positionAbs || c.position.absolute).top + (c.clickOffset || c.offset.click).top, (c.positionAbs || c.position.absolute).left + (c.clickOffset || c.offset.click).left, o, k, d.proportions.height, d.proportions.width);
		case "touch":
			return (e >= o && e <= q || h >= o && h <= q || e < o && h > q) && (g >= k && g <= l || b >= k && b <= l || g < k && b > l);
		default:
			return false
		}
	};
	a.ui.ddmanager = {
		current: null,
		droppables: {
			"default": []
		},
		prepareOffsets: function(c, d) {
			var f = a.ui.ddmanager.droppables[c.options.scope] || [],
				g = d ? d.type : null,
				b = (c.currentItem || c.element).find(":data(droppable)").andSelf(),
				e = 0;
			a: for (; e < f.length; e++) if (!(f[e].options.disabled || c && !f[e].accept.call(f[e].element[0], c.currentItem || c.element))) {
				for (var h = 0; h < b.length; h++) if (b[h] == f[e].element[0]) {
					f[e].proportions.height = 0;
					continue a
				}
				f[e].visible = f[e].element.css("display") != "none";
				if (f[e].visible) {
					g == "mousedown" && f[e]._activate.call(f[e], d);
					f[e].offset = f[e].element.offset();
					f[e].proportions = {
						width: f[e].element[0].offsetWidth,
						height: f[e].element[0].offsetHeight
					}
				}
			}
		},
		drop: function(c, d) {
			var f = false;
			a.each(a.ui.ddmanager.droppables[c.options.scope] || [], function() {
				if (this.options) {
					if (!this.options.disabled && this.visible && a.ui.intersect(c, this, this.options.tolerance)) f = f || this._drop.call(this, d);
					if (!this.options.disabled && this.visible && this.accept.call(this.element[0], c.currentItem || c.element)) {
						this.isout = 1;
						this.isover = 0;
						this._deactivate.call(this, d)
					}
				}
			});
			return f
		},
		drag: function(c, d) {
			c.options.refreshPositions && a.ui.ddmanager.prepareOffsets(c, d);
			a.each(a.ui.ddmanager.droppables[c.options.scope] || [], function() {
				if (!(this.options.disabled || this.greedyChild || !this.visible)) {
					var f = a.ui.intersect(c, this, this.options.tolerance);
					if (f = !f && this.isover == 1 ? "isout" : f && this.isover == 0 ? "isover" : null) {
						var g;
						if (this.options.greedy) {
							var b = this.element.parents(":data(droppable):eq(0)");
							if (b.length) {
								g = a.data(b[0], "droppable");
								g.greedyChild = f == "isover" ? 1 : 0
							}
						}
						if (g && f == "isover") {
							g.isover = 0;
							g.isout = 1;
							g._out.call(g, d)
						}
						this[f] = 1;
						this[f == "isout" ? "isover" : "isout"] = 0;
						this[f == "isover" ? "_over" : "_out"].call(this, d);
						if (g && f == "isout") {
							g.isout = 0;
							g.isover = 1;
							g._over.call(g, d)
						}
					}
				}
			})
		}
	}
})(jQuery);
(function(a) {
	a.widget("ui.resizable", a.ui.mouse, {
		widgetEventPrefix: "resize",
		options: {
			alsoResize: false,
			animate: false,
			animateDuration: "slow",
			animateEasing: "swing",
			aspectRatio: false,
			autoHide: false,
			containment: false,
			ghost: false,
			grid: false,
			handles: "e,s,se",
			helper: false,
			maxHeight: null,
			maxWidth: null,
			minHeight: 10,
			minWidth: 10,
			zIndex: 1E3
		},
		_create: function() {
			var f = this,
				g = this.options;
			this.element.addClass("ui-resizable");
			a.extend(this, {
				_aspectRatio: !! g.aspectRatio,
				aspectRatio: g.aspectRatio,
				originalElement: this.element,
				_proportionallyResizeElements: [],
				_helper: g.helper || g.ghost || g.animate ? g.helper || "ui-resizable-helper" : null
			});
			if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
				/relative/.test(this.element.css("position")) && a.browser.opera && this.element.css({
					position: "relative",
					top: "auto",
					left: "auto"
				});
				this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
					position: this.element.css("position"),
					width: this.element.outerWidth(),
					height: this.element.outerHeight(),
					top: this.element.css("top"),
					left: this.element.css("left")
				}));
				this.element = this.element.parent().data("resizable", this.element.data("resizable"));
				this.elementIsWrapper = true;
				this.element.css({
					marginLeft: this.originalElement.css("marginLeft"),
					marginTop: this.originalElement.css("marginTop"),
					marginRight: this.originalElement.css("marginRight"),
					marginBottom: this.originalElement.css("marginBottom")
				});
				this.originalElement.css({
					marginLeft: 0,
					marginTop: 0,
					marginRight: 0,
					marginBottom: 0
				});
				this.originalResizeStyle = this.originalElement.css("resize");
				this.originalElement.css("resize", "none");
				this._proportionallyResizeElements.push(this.originalElement.css({
					position: "static",
					zoom: 1,
					display: "block"
				}));
				this.originalElement.css({
					margin: this.originalElement.css("margin")
				});
				this._proportionallyResize()
			}
			this.handles = g.handles || (!a(".ui-resizable-handle", this.element).length ? "e,s,se" : {
				n: ".ui-resizable-n",
				e: ".ui-resizable-e",
				s: ".ui-resizable-s",
				w: ".ui-resizable-w",
				se: ".ui-resizable-se",
				sw: ".ui-resizable-sw",
				ne: ".ui-resizable-ne",
				nw: ".ui-resizable-nw"
			});
			if (this.handles.constructor == String) {
				if (this.handles == "all") this.handles = "n,e,s,w,se,sw,ne,nw";
				var b = this.handles.split(",");
				this.handles = {};
				for (var e = 0; e < b.length; e++) {
					var h = a.trim(b[e]),
						k = a('<div class="ui-resizable-handle ' + ("ui-resizable-" + h) + '"></div>');
					/sw|se|ne|nw/.test(h) && k.css({
						zIndex: ++g.zIndex
					});
					"se" == h && k.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
					this.handles[h] = ".ui-resizable-" + h;
					this.element.append(k)
				}
			}
			this._renderAxis = function(l) {
				l = l || this.element;
				for (var o in this.handles) {
					if (this.handles[o].constructor == String) this.handles[o] = a(this.handles[o], this.element).show();
					if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
						var q = a(this.handles[o], this.element),
							j = 0;
						j = /sw|ne|nw|se|n|s/.test(o) ? q.outerHeight() : q.outerWidth();
						q = ["padding", /ne|nw|n/.test(o) ? "Top" : /se|sw|s/.test(o) ? "Bottom" : /^e$/.test(o) ? "Right" : "Left"].join("");
						l.css(q, j);
						this._proportionallyResize()
					}
					a(this.handles[o])
				}
			};
			this._renderAxis(this.element);
			this._handles = a(".ui-resizable-handle", this.element).disableSelection();
			this._handles.mouseover(function() {
				if (!f.resizing) {
					if (this.className) var l = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
					f.axis = l && l[1] ? l[1] : "se"
				}
			});
			if (g.autoHide) {
				this._handles.hide();
				a(this.element).addClass("ui-resizable-autohide").hover(function() {
					a(this).removeClass("ui-resizable-autohide");
					f._handles.show()
				}, function() {
					if (!f.resizing) {
						a(this).addClass("ui-resizable-autohide");
						f._handles.hide()
					}
				})
			}
			this._mouseInit()
		},
		destroy: function() {
			this._mouseDestroy();
			var f = function(b) {
				a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
			};
			if (this.elementIsWrapper) {
				f(this.element);
				var g = this.element;
				g.after(this.originalElement.css({
					position: g.css("position"),
					width: g.outerWidth(),
					height: g.outerHeight(),
					top: g.css("top"),
					left: g.css("left")
				})).remove()
			}
			this.originalElement.css("resize", this.originalResizeStyle);
			f(this.originalElement);
			return this
		},
		_mouseCapture: function(f) {
			var g = false;
			for (var b in this.handles) if (a(this.handles[b])[0] == f.target) g = true;
			return !this.options.disabled && g
		},
		_mouseStart: function(f) {
			var g = this.options,
				b = this.element.position(),
				e = this.element;
			this.resizing = true;
			this.documentScroll = {
				top: a(document).scrollTop(),
				left: a(document).scrollLeft()
			};
			if (e.is(".ui-draggable") || /absolute/.test(e.css("position"))) e.css({
				position: "absolute",
				top: b.top,
				left: b.left
			});
			a.browser.opera && /relative/.test(e.css("position")) && e.css({
				position: "relative",
				top: "auto",
				left: "auto"
			});
			this._renderProxy();
			b = c(this.helper.css("left"));
			var h = c(this.helper.css("top"));
			if (g.containment) {
				b += a(g.containment).scrollLeft() || 0;
				h += a(g.containment).scrollTop() || 0
			}
			this.offset = this.helper.offset();
			this.position = {
				left: b,
				top: h
			};
			this.size = this._helper ? {
				width: e.outerWidth(),
				height: e.outerHeight()
			} : {
				width: e.width(),
				height: e.height()
			};
			this.originalSize = this._helper ? {
				width: e.outerWidth(),
				height: e.outerHeight()
			} : {
				width: e.width(),
				height: e.height()
			};
			this.originalPosition = {
				left: b,
				top: h
			};
			this.sizeDiff = {
				width: e.outerWidth() - e.width(),
				height: e.outerHeight() - e.height()
			};
			this.originalMousePosition = {
				left: f.pageX,
				top: f.pageY
			};
			this.aspectRatio = typeof g.aspectRatio == "number" ? g.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
			g = a(".ui-resizable-" + this.axis).css("cursor");
			a("body").css("cursor", g == "auto" ? this.axis + "-resize" : g);
			e.addClass("ui-resizable-resizing");
			this._propagate("start", f);
			return true
		},
		_mouseDrag: function(f) {
			var g = this.helper,
				b = this.originalMousePosition,
				e = this._change[this.axis];
			if (!e) return false;
			b = e.apply(this, [f, f.pageX - b.left || 0, f.pageY - b.top || 0]);
			if (this._aspectRatio || f.shiftKey) b = this._updateRatio(b, f);
			b = this._respectSize(b, f);
			this._propagate("resize", f);
			g.css({
				top: this.position.top + "px",
				left: this.position.left + "px",
				width: this.size.width + "px",
				height: this.size.height + "px"
			});
			!this._helper && this._proportionallyResizeElements.length && this._proportionallyResize();
			this._updateCache(b);
			this._trigger("resize", f, this.ui());
			return false
		},
		_mouseStop: function(f) {
			this.resizing = false;
			var g = this.options,
				b = this;
			if (this._helper) {
				var e = this._proportionallyResizeElements,
					h = e.length && /textarea/i.test(e[0].nodeName);
				e = h && a.ui.hasScroll(e[0], "left") ? 0 : b.sizeDiff.height;
				h = h ? 0 : b.sizeDiff.width;
				h = {
					width: b.helper.width() - h,
					height: b.helper.height() - e
				};
				e = parseInt(b.element.css("left"), 10) + (b.position.left - b.originalPosition.left) || null;
				var k = parseInt(b.element.css("top"), 10) + (b.position.top - b.originalPosition.top) || null;
				g.animate || this.element.css(a.extend(h, {
					top: k,
					left: e
				}));
				b.helper.height(b.size.height);
				b.helper.width(b.size.width);
				this._helper && !g.animate && this._proportionallyResize()
			}
			a("body").css("cursor", "auto");
			this.element.removeClass("ui-resizable-resizing");
			this._propagate("stop", f);
			this._helper && this.helper.remove();
			return false
		},
		_updateCache: function(f) {
			this.offset = this.helper.offset();
			if (d(f.left)) this.position.left = f.left;
			if (d(f.top)) this.position.top = f.top;
			if (d(f.height)) this.size.height = f.height;
			if (d(f.width)) this.size.width = f.width
		},
		_updateRatio: function(f) {
			var g = this.position,
				b = this.size,
				e = this.axis;
			if (f.height) f.width = b.height * this.aspectRatio;
			else if (f.width) f.height = b.width / this.aspectRatio;
			if (e == "sw") {
				f.left = g.left + (b.width - f.width);
				f.top = null
			}
			if (e == "nw") {
				f.top = g.top + (b.height - f.height);
				f.left = g.left + (b.width - f.width)
			}
			return f
		},
		_respectSize: function(f) {
			var g = this.options,
				b = this.axis,
				e = d(f.width) && g.maxWidth && g.maxWidth < f.width,
				h = d(f.height) && g.maxHeight && g.maxHeight < f.height,
				k = d(f.width) && g.minWidth && g.minWidth > f.width,
				l = d(f.height) && g.minHeight && g.minHeight > f.height;
			if (k) f.width = g.minWidth;
			if (l) f.height = g.minHeight;
			if (e) f.width = g.maxWidth;
			if (h) f.height = g.maxHeight;
			var o = this.originalPosition.left + this.originalSize.width,
				q = this.position.top + this.size.height,
				j = /sw|nw|w/.test(b);
			b = /nw|ne|n/.test(b);
			if (k && j) f.left = o - g.minWidth;
			if (e && j) f.left = o - g.maxWidth;
			if (l && b) f.top = q - g.minHeight;
			if (h && b) f.top = q - g.maxHeight;
			if ((g = !f.width && !f.height) && !f.left && f.top) f.top = null;
			else if (g && !f.top && f.left) f.left = null;
			return f
		},
		_proportionallyResize: function() {
			if (this._proportionallyResizeElements.length) for (var f = this.helper || this.element, g = 0; g < this._proportionallyResizeElements.length; g++) {
				var b = this._proportionallyResizeElements[g];
				if (!this.borderDif) {
					var e = [b.css("borderTopWidth"), b.css("borderRightWidth"), b.css("borderBottomWidth"), b.css("borderLeftWidth")],
						h = [b.css("paddingTop"), b.css("paddingRight"), b.css("paddingBottom"), b.css("paddingLeft")];
					this.borderDif = a.map(e, function(k, l) {
						k = parseInt(k, 10) || 0;
						l = parseInt(h[l], 10) || 0;
						return k + l
					})
				}
				a.browser.msie && (a(f).is(":hidden") || a(f).parents(":hidden").length) || b.css({
					height: f.height() - this.borderDif[0] - this.borderDif[2] || 0,
					width: f.width() - this.borderDif[1] - this.borderDif[3] || 0
				})
			}
		},
		_renderProxy: function() {
			var f = this.options;
			this.elementOffset = this.element.offset();
			if (this._helper) {
				this.helper = this.helper || a('<div style="overflow:hidden;"></div>');
				var g = a.browser.msie && a.browser.version < 7,
					b = g ? 1 : 0;
				g = g ? 2 : -1;
				this.helper.addClass(this._helper).css({
					width: this.element.outerWidth() + g,
					height: this.element.outerHeight() + g,
					position: "absolute",
					left: this.elementOffset.left - b + "px",
					top: this.elementOffset.top - b + "px",
					zIndex: ++f.zIndex
				});
				this.helper.appendTo("body").disableSelection()
			} else this.helper = this.element
		},
		_change: {
			e: function(f, g) {
				return {
					width: this.originalSize.width + g
				}
			},
			w: function(f, g) {
				return {
					left: this.originalPosition.left + g,
					width: this.originalSize.width - g
				}
			},
			n: function(f, g, b) {
				return {
					top: this.originalPosition.top + b,
					height: this.originalSize.height - b
				}
			},
			s: function(f, g, b) {
				return {
					height: this.originalSize.height + b
				}
			},
			se: function(f, g, b) {
				return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [f, g, b]))
			},
			sw: function(f, g, b) {
				return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [f, g, b]))
			},
			ne: function(f, g, b) {
				return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [f, g, b]))
			},
			nw: function(f, g, b) {
				return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [f, g, b]))
			}
		},
		_propagate: function(f, g) {
			a.ui.plugin.call(this, f, [g, this.ui()]);
			f != "resize" && this._trigger(f, g, this.ui())
		},
		plugins: {},
		ui: function() {
			return {
				originalElement: this.originalElement,
				element: this.element,
				helper: this.helper,
				position: this.position,
				size: this.size,
				originalSize: this.originalSize,
				originalPosition: this.originalPosition
			}
		}
	});
	a.extend(a.ui.resizable, {
		version: "1.8.11"
	});
	a.ui.plugin.add("resizable", "alsoResize", {
		start: function() {
			var f = a(this).data("resizable").options,
				g = function(b) {
					a(b).each(function() {
						var e = a(this);
						e.data("resizable-alsoresize", {
							width: parseInt(e.width(), 10),
							height: parseInt(e.height(), 10),
							left: parseInt(e.css("left"), 10),
							top: parseInt(e.css("top"), 10),
							position: e.css("position")
						})
					})
				};
			if (typeof f.alsoResize == "object" && !f.alsoResize.parentNode) if (f.alsoResize.length) {
				f.alsoResize = f.alsoResize[0];
				g(f.alsoResize)
			} else a.each(f.alsoResize, function(b) {
				g(b)
			});
			else g(f.alsoResize)
		},
		resize: function(f, g) {
			var b = a(this).data("resizable");
			f = b.options;
			var e = b.originalSize,
				h = b.originalPosition,
				k = {
					height: b.size.height - e.height || 0,
					width: b.size.width - e.width || 0,
					top: b.position.top - h.top || 0,
					left: b.position.left - h.left || 0
				},
				l = function(o, q) {
					a(o).each(function() {
						var j = a(this),
							m = a(this).data("resizable-alsoresize"),
							p = {},
							s = q && q.length ? q : j.parents(g.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
						a.each(s, function(n, r) {
							if ((n = (m[r] || 0) + (k[r] || 0)) && n >= 0) p[r] = n || null
						});
						if (a.browser.opera && /relative/.test(j.css("position"))) {
							b._revertToRelativePosition = true;
							j.css({
								position: "absolute",
								top: "auto",
								left: "auto"
							})
						}
						j.css(p)
					})
				};
			typeof f.alsoResize == "object" && !f.alsoResize.nodeType ? a.each(f.alsoResize, function(o, q) {
				l(o, q)
			}) : l(f.alsoResize)
		},
		stop: function() {
			var f = a(this).data("resizable"),
				g = f.options,
				b = function(e) {
					a(e).each(function() {
						var h = a(this);
						h.css({
							position: h.data("resizable-alsoresize").position
						})
					})
				};
			if (f._revertToRelativePosition) {
				f._revertToRelativePosition = false;
				typeof g.alsoResize == "object" && !g.alsoResize.nodeType ? a.each(g.alsoResize, function(e) {
					b(e)
				}) : b(g.alsoResize)
			}
			a(this).removeData("resizable-alsoresize")
		}
	});
	a.ui.plugin.add("resizable", "animate", {
		stop: function(f) {
			var g = a(this).data("resizable"),
				b = g.options,
				e = g._proportionallyResizeElements,
				h = e.length && /textarea/i.test(e[0].nodeName),
				k = h && a.ui.hasScroll(e[0], "left") ? 0 : g.sizeDiff.height;
			h = {
				width: g.size.width - (h ? 0 : g.sizeDiff.width),
				height: g.size.height - k
			};
			k = parseInt(g.element.css("left"), 10) + (g.position.left - g.originalPosition.left) || null;
			var l = parseInt(g.element.css("top"), 10) + (g.position.top - g.originalPosition.top) || null;
			g.element.animate(a.extend(h, l && k ? {
				top: l,
				left: k
			} : {}), {
				duration: b.animateDuration,
				easing: b.animateEasing,
				step: function() {
					var o = {
						width: parseInt(g.element.css("width"), 10),
						height: parseInt(g.element.css("height"), 10),
						top: parseInt(g.element.css("top"), 10),
						left: parseInt(g.element.css("left"), 10)
					};
					e && e.length && a(e[0]).css({
						width: o.width,
						height: o.height
					});
					g._updateCache(o);
					g._propagate("resize", f)
				}
			})
		}
	});
	a.ui.plugin.add("resizable", "containment", {
		start: function() {
			var f = a(this).data("resizable"),
				g = f.element,
				b = f.options.containment;
			if (g = b instanceof a ? b.get(0) : /parent/.test(b) ? g.parent().get(0) : b) {
				f.containerElement = a(g);
				if (/document/.test(b) || b == document) {
					f.containerOffset = {
						left: 0,
						top: 0
					};
					f.containerPosition = {
						left: 0,
						top: 0
					};
					f.parentData = {
						element: a(document),
						left: 0,
						top: 0,
						width: a(document).width(),
						height: a(document).height() || document.body.parentNode.scrollHeight
					}
				} else {
					var e = a(g),
						h = [];
					a(["Top", "Right", "Left", "Bottom"]).each(function(o, q) {
						h[o] = c(e.css("padding" + q))
					});
					f.containerOffset = e.offset();
					f.containerPosition = e.position();
					f.containerSize = {
						height: e.innerHeight() - h[3],
						width: e.innerWidth() - h[1]
					};
					b = f.containerOffset;
					var k = f.containerSize.height,
						l = f.containerSize.width;
					l = a.ui.hasScroll(g, "left") ? g.scrollWidth : l;
					k = a.ui.hasScroll(g) ? g.scrollHeight : k;
					f.parentData = {
						element: g,
						left: b.left,
						top: b.top,
						width: l,
						height: k
					}
				}
			}
		},
		resize: function(f) {
			var g = a(this).data("resizable"),
				b = g.options,
				e = g.containerOffset,
				h = g.position;
			f = g._aspectRatio || f.shiftKey;
			var k = {
				top: 0,
				left: 0
			},
				l = g.containerElement;
			if (l[0] != document && /static/.test(l.css("position"))) k = e;
			if (h.left < (g._helper ? e.left : 0)) {
				g.size.width += g._helper ? g.position.left - e.left : g.position.left - k.left;
				if (f) g.size.height = g.size.width / b.aspectRatio;
				g.position.left = b.helper ? e.left : 0
			}
			if (h.top < (g._helper ? e.top : 0)) {
				g.size.height += g._helper ? g.position.top - e.top : g.position.top;
				if (f) g.size.width = g.size.height * b.aspectRatio;
				g.position.top = g._helper ? e.top : 0
			}
			g.offset.left = g.parentData.left + g.position.left;
			g.offset.top = g.parentData.top + g.position.top;
			b = Math.abs((g._helper ? g.offset.left - k.left : g.offset.left - k.left) + g.sizeDiff.width);
			e = Math.abs((g._helper ? g.offset.top - k.top : g.offset.top - e.top) + g.sizeDiff.height);
			h = g.containerElement.get(0) == g.element.parent().get(0);
			k = /relative|absolute/.test(g.containerElement.css("position"));
			if (h && k) b -= g.parentData.left;
			if (b + g.size.width >= g.parentData.width) {
				g.size.width = g.parentData.width - b;
				if (f) g.size.height = g.size.width / g.aspectRatio
			}
			if (e + g.size.height >= g.parentData.height) {
				g.size.height = g.parentData.height - e;
				if (f) g.size.width = g.size.height * g.aspectRatio
			}
		},
		stop: function() {
			var f = a(this).data("resizable"),
				g = f.options,
				b = f.containerOffset,
				e = f.containerPosition,
				h = f.containerElement,
				k = a(f.helper),
				l = k.offset(),
				o = k.outerWidth() - f.sizeDiff.width;
			k = k.outerHeight() - f.sizeDiff.height;
			f._helper && !g.animate && /relative/.test(h.css("position")) && a(this).css({
				left: l.left - e.left - b.left,
				width: o,
				height: k
			});
			f._helper && !g.animate && /static/.test(h.css("position")) && a(this).css({
				left: l.left - e.left - b.left,
				width: o,
				height: k
			})
		}
	});
	a.ui.plugin.add("resizable", "ghost", {
		start: function() {
			var f = a(this).data("resizable"),
				g = f.options,
				b = f.size;
			f.ghost = f.originalElement.clone();
			f.ghost.css({
				opacity: 0.25,
				display: "block",
				position: "relative",
				height: b.height,
				width: b.width,
				margin: 0,
				left: 0,
				top: 0
			}).addClass("ui-resizable-ghost").addClass(typeof g.ghost == "string" ? g.ghost : "");
			f.ghost.appendTo(f.helper)
		},
		resize: function() {
			var f = a(this).data("resizable");
			f.ghost && f.ghost.css({
				position: "relative",
				height: f.size.height,
				width: f.size.width
			})
		},
		stop: function() {
			var f = a(this).data("resizable");
			f.ghost && f.helper && f.helper.get(0).removeChild(f.ghost.get(0))
		}
	});
	a.ui.plugin.add("resizable", "grid", {
		resize: function() {
			var f = a(this).data("resizable"),
				g = f.options,
				b = f.size,
				e = f.originalSize,
				h = f.originalPosition,
				k = f.axis;
			g.grid = typeof g.grid == "number" ? [g.grid, g.grid] : g.grid;
			var l = Math.round((b.width - e.width) / (g.grid[0] || 1)) * (g.grid[0] || 1);
			g = Math.round((b.height - e.height) / (g.grid[1] || 1)) * (g.grid[1] || 1);
			if (/^(se|s|e)$/.test(k)) {
				f.size.width = e.width + l;
				f.size.height = e.height + g
			} else if (/^(ne)$/.test(k)) {
				f.size.width = e.width + l;
				f.size.height = e.height + g;
				f.position.top = h.top - g
			} else {
				if (/^(sw)$/.test(k)) {
					f.size.width = e.width + l;
					f.size.height = e.height + g
				} else {
					f.size.width = e.width + l;
					f.size.height = e.height + g;
					f.position.top = h.top - g
				}
				f.position.left = h.left - l
			}
		}
	});
	var c = function(f) {
		return parseInt(f, 10) || 0
	},
		d = function(f) {
			return !isNaN(parseInt(f, 10))
		}
})(jQuery);

(function(a) {
	a.widget("ui.selectable", a.ui.mouse, {
		options: {
			appendTo: "body",
			autoRefresh: true,
			distance: 0,
			filter: "*",
			tolerance: "touch"
		},
		_create: function() {
			var c = this;
			this.element.addClass("ui-selectable");
			this.dragged = false;
			var d;
			this.refresh = function() {
				d = a(c.options.filter, c.element[0]);
				d.each(function() {
					var f = a(this),
						g = f.offset();
					a.data(this, "selectable-item", {
						element: this,
						$element: f,
						left: g.left,
						top: g.top,
						right: g.left + f.outerWidth(),
						bottom: g.top + f.outerHeight(),
						startselected: false,
						selected: f.hasClass("ui-selected"),
						selecting: f.hasClass("ui-selecting"),
						unselecting: f.hasClass("ui-unselecting")
					})
				})
			};
			this.refresh();
			this.selectees = d.addClass("ui-selectee");
			this._mouseInit();
			this.helper = a("<div class='ui-selectable-helper'></div>")
		},
		destroy: function() {
			this.selectees.removeClass("ui-selectee").removeData("selectable-item");
			this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");
			this._mouseDestroy();
			return this
		},
		_mouseStart: function(c) {
			var d = this;
			this.opos = [c.pageX, c.pageY];
			if (!this.options.disabled) {
				var f = this.options;
				this.selectees = a(f.filter, this.element[0]);
				this._trigger("start", c);
				a(f.appendTo).append(this.helper);
				this.helper.css({
					left: c.clientX,
					top: c.clientY,
					width: 0,
					height: 0
				});
				f.autoRefresh && this.refresh();
				this.selectees.filter(".ui-selected").each(function() {
					var g = a.data(this, "selectable-item");
					g.startselected = true;
					if (!c.metaKey) {
						g.$element.removeClass("ui-selected");
						g.selected = false;
						g.$element.addClass("ui-unselecting");
						g.unselecting = true;
						d._trigger("unselecting", c, {
							unselecting: g.element
						})
					}
				});
				a(c.target).parents().andSelf().each(function() {
					var g = a.data(this, "selectable-item");
					if (g) {
						var b = !c.metaKey || !g.$element.hasClass("ui-selected");
						g.$element.removeClass(b ? "ui-unselecting" : "ui-selected").addClass(b ? "ui-selecting" : "ui-unselecting");
						g.unselecting = !b;
						g.selecting = b;
						(g.selected = b) ? d._trigger("selecting", c, {
							selecting: g.element
						}) : d._trigger("unselecting", c, {
							unselecting: g.element
						});
						return false
					}
				})
			}
		},
		_mouseDrag: function(c) {
			var d = this;
			this.dragged = true;
			if (!this.options.disabled) {
				var f = this.options,
					g = this.opos[0],
					b = this.opos[1],
					e = c.pageX,
					h = c.pageY;
				if (g > e) {
					var k = e;
					e = g;
					g = k
				}
				if (b > h) {
					k = h;
					h = b;
					b = k
				}
				this.helper.css({
					left: g,
					top: b,
					width: e - g,
					height: h - b
				});
				this.selectees.each(function() {
					var l = a.data(this, "selectable-item");
					if (!(!l || l.element == d.element[0])) {
						var o = false;
						if (f.tolerance == "touch") o = !(l.left > e || l.right < g || l.top > h || l.bottom < b);
						else if (f.tolerance == "fit") o = l.left > g && l.right < e && l.top > b && l.bottom < h;
						if (o) {
							if (l.selected) {
								l.$element.removeClass("ui-selected");
								l.selected = false
							}
							if (l.unselecting) {
								l.$element.removeClass("ui-unselecting");
								l.unselecting = false
							}
							if (!l.selecting) {
								l.$element.addClass("ui-selecting");
								l.selecting = true;
								d._trigger("selecting", c, {
									selecting: l.element
								})
							}
						} else {
							if (l.selecting) if (c.metaKey && l.startselected) {
								l.$element.removeClass("ui-selecting");
								l.selecting = false;
								l.$element.addClass("ui-selected");
								l.selected = true
							} else {
								l.$element.removeClass("ui-selecting");
								l.selecting = false;
								if (l.startselected) {
									l.$element.addClass("ui-unselecting");
									l.unselecting = true
								}
								d._trigger("unselecting", c, {
									unselecting: l.element
								})
							}
							if (l.selected) if (!c.metaKey && !l.startselected) {
								l.$element.removeClass("ui-selected");
								l.selected = false;
								l.$element.addClass("ui-unselecting");
								l.unselecting = true;
								d._trigger("unselecting", c, {
									unselecting: l.element
								})
							}
						}
					}
				});
				return false
			}
		},
		_mouseStop: function(c) {
			var d = this;
			this.dragged = false;
			a(".ui-unselecting", this.element[0]).each(function() {
				var f = a.data(this, "selectable-item");
				f.$element.removeClass("ui-unselecting");
				f.unselecting = false;
				f.startselected = false;
				d._trigger("unselected", c, {
					unselected: f.element
				})
			});
			a(".ui-selecting", this.element[0]).each(function() {
				var f = a.data(this, "selectable-item");
				f.$element.removeClass("ui-selecting").addClass("ui-selected");
				f.selecting = false;
				f.selected = true;
				f.startselected = true;
				d._trigger("selected", c, {
					selected: f.element
				})
			});
			this._trigger("stop", c);
			this.helper.remove();
			return false
		}
	});
	a.extend(a.ui.selectable, {
		version: "1.8.11"
	})
})(jQuery);
(function(a) {
	a.widget("ui.sortable", a.ui.mouse, {
		widgetEventPrefix: "sort",
		options: {
			appendTo: "parent",
			axis: false,
			connectWith: false,
			containment: false,
			cursor: "auto",
			cursorAt: false,
			dropOnEmpty: true,
			forcePlaceholderSize: false,
			forceHelperSize: false,
			grid: false,
			handle: false,
			helper: "original",
			items: "> *",
			opacity: false,
			placeholder: false,
			revert: false,
			scroll: true,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			scope: "default",
			tolerance: "intersect",
			zIndex: 1E3
		},
		_create: function() {
			this.containerCache = {};
			this.element.addClass("ui-sortable");
			this.refresh();
			this.floating = this.items.length ? /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : false;
			this.offset = this.element.offset();
			this._mouseInit()
		},
		destroy: function() {
			this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");
			this._mouseDestroy();
			for (var c = this.items.length - 1; c >= 0; c--) this.items[c].item.removeData("sortable-item");
			return this
		},
		_setOption: function(c, d) {
			if (c === "disabled") {
				this.options[c] = d;
				this.widget()[d ? "addClass" : "removeClass"]("ui-sortable-disabled")
			} else a.Widget.prototype._setOption.apply(this, arguments)
		},
		_mouseCapture: function(c, d) {
			if (this.reverting) return false;
			if (this.options.disabled || this.options.type == "static") return false;
			this._refreshItems(c);
			var f = null,
				g = this;
			a(c.target).parents().each(function() {
				if (a.data(this, "sortable-item") == g) {
					f = a(this);
					return false
				}
			});
			if (a.data(c.target, "sortable-item") == g) f = a(c.target);
			if (!f) return false;
			if (this.options.handle && !d) {
				var b = false;
				a(this.options.handle, f).find("*").andSelf().each(function() {
					if (this == c.target) b = true
				});
				if (!b) return false
			}
			this.currentItem = f;
			this._removeCurrentsFromItems();
			return true
		},
		_mouseStart: function(c, d, f) {
			d = this.options;
			var g = this;
			this.currentContainer = this;
			this.refreshPositions();
			this.helper = this._createHelper(c);
			this._cacheHelperProportions();
			this._cacheMargins();
			this.scrollParent = this.helper.scrollParent();
			this.offset = this.currentItem.offset();
			this.offset = {
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			};
			this.helper.css("position", "absolute");
			this.cssPosition = this.helper.css("position");
			a.extend(this.offset, {
				click: {
					left: c.pageX - this.offset.left,
					top: c.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			});
			this.originalPosition = this._generatePosition(c);
			this.originalPageX = c.pageX;
			this.originalPageY = c.pageY;
			d.cursorAt && this._adjustOffsetFromHelper(d.cursorAt);
			this.domPosition = {
				prev: this.currentItem.prev()[0],
				parent: this.currentItem.parent()[0]
			};
			this.helper[0] != this.currentItem[0] && this.currentItem.hide();
			this._createPlaceholder();
			d.containment && this._setContainment();
			if (d.cursor) {
				if (a("body").css("cursor")) this._storedCursor = a("body").css("cursor");
				a("body").css("cursor", d.cursor)
			}
			if (d.opacity) {
				if (this.helper.css("opacity")) this._storedOpacity = this.helper.css("opacity");
				this.helper.css("opacity", d.opacity)
			}
			if (d.zIndex) {
				if (this.helper.css("zIndex")) this._storedZIndex = this.helper.css("zIndex");
				this.helper.css("zIndex", d.zIndex)
			}
			if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") this.overflowOffset = this.scrollParent.offset();
			this._trigger("start", c, this._uiHash());
			this._preserveHelperProportions || this._cacheHelperProportions();
			if (!f) for (f = this.containers.length - 1; f >= 0; f--) this.containers[f]._trigger("activate", c, g._uiHash(this));
			if (a.ui.ddmanager) a.ui.ddmanager.current = this;
			a.ui.ddmanager && !d.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, c);
			this.dragging = true;
			this.helper.addClass("ui-sortable-helper");
			this._mouseDrag(c);
			return true
		},
		_mouseDrag: function(c) {
			this.position = this._generatePosition(c);
			this.positionAbs = this._convertPositionTo("absolute");
			if (!this.lastPositionAbs) this.lastPositionAbs = this.positionAbs;
			if (this.options.scroll) {
				var d = this.options,
					f = false;
				if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") {
					if (this.overflowOffset.top + this.scrollParent[0].offsetHeight - c.pageY < d.scrollSensitivity) this.scrollParent[0].scrollTop = f = this.scrollParent[0].scrollTop + d.scrollSpeed;
					else if (c.pageY - this.overflowOffset.top < d.scrollSensitivity) this.scrollParent[0].scrollTop = f = this.scrollParent[0].scrollTop - d.scrollSpeed;
					if (this.overflowOffset.left + this.scrollParent[0].offsetWidth - c.pageX < d.scrollSensitivity) this.scrollParent[0].scrollLeft = f = this.scrollParent[0].scrollLeft + d.scrollSpeed;
					else if (c.pageX - this.overflowOffset.left < d.scrollSensitivity) this.scrollParent[0].scrollLeft = f = this.scrollParent[0].scrollLeft - d.scrollSpeed
				} else {
					if (c.pageY - a(document).scrollTop() < d.scrollSensitivity) f = a(document).scrollTop(a(document).scrollTop() - d.scrollSpeed);
					else if (a(window).height() - (c.pageY - a(document).scrollTop()) < d.scrollSensitivity) f = a(document).scrollTop(a(document).scrollTop() + d.scrollSpeed);
					if (c.pageX - a(document).scrollLeft() < d.scrollSensitivity) f = a(document).scrollLeft(a(document).scrollLeft() - d.scrollSpeed);
					else if (a(window).width() - (c.pageX - a(document).scrollLeft()) < d.scrollSensitivity) f = a(document).scrollLeft(a(document).scrollLeft() + d.scrollSpeed)
				}
				f !== false && a.ui.ddmanager && !d.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, c)
			}
			this.positionAbs = this._convertPositionTo("absolute");
			if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
			if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
			for (d = this.items.length - 1; d >= 0; d--) {
				f = this.items[d];
				var g = f.item[0],
					b = this._intersectsWithPointer(f);
				if (b) if (g != this.currentItem[0] && this.placeholder[b == 1 ? "next" : "prev"]()[0] != g && !a.ui.contains(this.placeholder[0], g) && (this.options.type == "semi-dynamic" ? !a.ui.contains(this.element[0], g) : true)) {
					this.direction = b == 1 ? "down" : "up";
					if (this.options.tolerance == "pointer" || this._intersectsWithSides(f)) this._rearrange(c, f);
					else break;
					this._trigger("change", c, this._uiHash());
					break
				}
			}
			this._contactContainers(c);
			a.ui.ddmanager && a.ui.ddmanager.drag(this, c);
			this._trigger("sort", c, this._uiHash());
			this.lastPositionAbs = this.positionAbs;
			return false
		},
		_mouseStop: function(c, d) {
			if (c) {
				a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, c);
				if (this.options.revert) {
					var f = this;
					d = f.placeholder.offset();
					f.reverting = true;
					a(this.helper).animate({
						left: d.left - this.offset.parent.left - f.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
						top: d.top - this.offset.parent.top - f.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
					}, parseInt(this.options.revert, 10) || 500, function() {
						f._clear(c)
					})
				} else this._clear(c, d);
				return false
			}
		},
		cancel: function() {
			var c = this;
			if (this.dragging) {
				this._mouseUp({
					target: null
				});
				this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
				for (var d = this.containers.length - 1; d >= 0; d--) {
					this.containers[d]._trigger("deactivate", null, c._uiHash(this));
					if (this.containers[d].containerCache.over) {
						this.containers[d]._trigger("out", null, c._uiHash(this));
						this.containers[d].containerCache.over = 0
					}
				}
			}
			if (this.placeholder) {
				this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
				this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove();
				a.extend(this, {
					helper: null,
					dragging: false,
					reverting: false,
					_noFinalSort: null
				});
				this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)
			}
			return this
		},
		serialize: function(c) {
			var d = this._getItemsAsjQuery(c && c.connected),
				f = [];
			c = c || {};
			a(d).each(function() {
				var g = (a(c.item || this).attr(c.attribute || "id") || "").match(c.expression || /(.+)[-=_](.+)/);
				if (g) f.push((c.key || g[1] + "[]") + "=" + (c.key && c.expression ? g[1] : g[2]))
			});
			!f.length && c.key && f.push(c.key + "=");
			return f.join("&")
		},
		toArray: function(c) {
			var d = this._getItemsAsjQuery(c && c.connected),
				f = [];
			c = c || {};
			d.each(function() {
				f.push(a(c.item || this).attr(c.attribute || "id") || "")
			});
			return f
		},
		_intersectsWith: function(c) {
			var d = this.positionAbs.left,
				f = d + this.helperProportions.width,
				g = this.positionAbs.top,
				b = g + this.helperProportions.height,
				e = c.left,
				h = e + c.width,
				k = c.top,
				l = k + c.height,
				o = this.offset.click.top,
				q = this.offset.click.left;
			o = g + o > k && g + o < l && d + q > e && d + q < h;
			return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > c[this.floating ? "width" : "height"] ? o : e < d + this.helperProportions.width / 2 && f - this.helperProportions.width / 2 < h && k < g + this.helperProportions.height / 2 && b - this.helperProportions.height / 2 < l
		},
		_intersectsWithPointer: function(c) {
			var d = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, c.top, c.height);
			c = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, c.left, c.width);
			d = d && c;
			c = this._getDragVerticalDirection();
			var f = this._getDragHorizontalDirection();
			if (!d) return false;
			return this.floating ? f && f == "right" || c == "down" ? 2 : 1 : c && (c == "down" ? 2 : 1)
		},
		_intersectsWithSides: function(c) {
			var d = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, c.top + c.height / 2, c.height);
			c = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, c.left + c.width / 2, c.width);
			var f = this._getDragVerticalDirection(),
				g = this._getDragHorizontalDirection();
			return this.floating && g ? g == "right" && c || g == "left" && !c : f && (f == "down" && d || f == "up" && !d)
		},
		_getDragVerticalDirection: function() {
			var c = this.positionAbs.top - this.lastPositionAbs.top;
			return c != 0 && (c > 0 ? "down" : "up")
		},
		_getDragHorizontalDirection: function() {
			var c = this.positionAbs.left - this.lastPositionAbs.left;
			return c != 0 && (c > 0 ? "right" : "left")
		},
		refresh: function(c) {
			this._refreshItems(c);
			this.refreshPositions();
			return this
		},
		_connectWith: function() {
			var c = this.options;
			return c.connectWith.constructor == String ? [c.connectWith] : c.connectWith
		},
		_getItemsAsjQuery: function(c) {
			var d = [],
				f = [],
				g = this._connectWith();
			if (g && c) for (c = g.length - 1; c >= 0; c--) for (var b = a(g[c]), e = b.length - 1; e >= 0; e--) {
				var h = a.data(b[e], "sortable");
				if (h && h != this && !h.options.disabled) f.push([a.isFunction(h.options.items) ? h.options.items.call(h.element) : a(h.options.items, h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), h])
			}
			f.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
				options: this.options,
				item: this.currentItem
			}) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
			for (c = f.length - 1; c >= 0; c--) f[c][0].each(function() {
				d.push(this)
			});
			return a(d)
		},
		_removeCurrentsFromItems: function() {
			for (var c = this.currentItem.find(":data(sortable-item)"), d = 0; d < this.items.length; d++) for (var f = 0; f < c.length; f++) c[f] == this.items[d].item[0] && this.items.splice(d, 1)
		},
		_refreshItems: function(c) {
			this.items = [];
			this.containers = [this];
			var d = this.items,
				f = [
					[a.isFunction(this.options.items) ? this.options.items.call(this.element[0], c, {
						item: this.currentItem
					}) : a(this.options.items, this.element), this]
				],
				g = this._connectWith();
			if (g) for (var b = g.length - 1; b >= 0; b--) for (var e = a(g[b]), h = e.length - 1; h >= 0; h--) {
				var k = a.data(e[h], "sortable");
				if (k && k != this && !k.options.disabled) {
					f.push([a.isFunction(k.options.items) ? k.options.items.call(k.element[0], c, {
						item: this.currentItem
					}) : a(k.options.items, k.element), k]);
					this.containers.push(k)
				}
			}
			for (b = f.length - 1; b >= 0; b--) {
				c = f[b][1];
				g = f[b][0];
				h = 0;
				for (e = g.length; h < e; h++) {
					k = a(g[h]);
					k.data("sortable-item", c);
					d.push({
						item: k,
						instance: c,
						width: 0,
						height: 0,
						left: 0,
						top: 0
					})
				}
			}
		},
		refreshPositions: function(c) {
			if (this.offsetParent && this.helper) this.offset.parent = this._getParentOffset();
			for (var d = this.items.length - 1; d >= 0; d--) {
				var f = this.items[d],
					g = this.options.toleranceElement ? a(this.options.toleranceElement, f.item) : f.item;
				if (!c) {
					f.width = g.outerWidth();
					f.height = g.outerHeight()
				}
				g = g.offset();
				f.left = g.left;
				f.top = g.top
			}
			if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
			else for (d = this.containers.length - 1; d >= 0; d--) {
				g = this.containers[d].element.offset();
				this.containers[d].containerCache.left = g.left;
				this.containers[d].containerCache.top = g.top;
				this.containers[d].containerCache.width = this.containers[d].element.outerWidth();
				this.containers[d].containerCache.height = this.containers[d].element.outerHeight()
			}
			return this
		},
		_createPlaceholder: function(c) {
			var d = c || this,
				f = d.options;
			if (!f.placeholder || f.placeholder.constructor == String) {
				var g = f.placeholder;
				f.placeholder = {
					element: function() {
						var b = a(document.createElement(d.currentItem[0].nodeName)).addClass(g || d.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
						if (!g) b.style.visibility = "hidden";
						return b
					},
					update: function(b, e) {
						if (!(g && !f.forcePlaceholderSize)) {
							e.height() || e.height(d.currentItem.innerHeight() - parseInt(d.currentItem.css("paddingTop") || 0, 10) - parseInt(d.currentItem.css("paddingBottom") || 0, 10));
							e.width() || e.width(d.currentItem.innerWidth() - parseInt(d.currentItem.css("paddingLeft") || 0, 10) - parseInt(d.currentItem.css("paddingRight") || 0, 10))
						}
					}
				}
			}
			d.placeholder = a(f.placeholder.element.call(d.element, d.currentItem));
			d.currentItem.after(d.placeholder);
			f.placeholder.update(d, d.placeholder)
		},
		_contactContainers: function(c) {
			for (var d = null, f = null, g = this.containers.length - 1; g >= 0; g--) if (!a.ui.contains(this.currentItem[0], this.containers[g].element[0])) if (this._intersectsWith(this.containers[g].containerCache)) {
				if (!(d && a.ui.contains(this.containers[g].element[0], d.element[0]))) {
					d = this.containers[g];
					f = g
				}
			} else if (this.containers[g].containerCache.over) {
				this.containers[g]._trigger("out", c, this._uiHash(this));
				this.containers[g].containerCache.over = 0
			}
			if (d) if (this.containers.length === 1) {
				this.containers[f]._trigger("over", c, this._uiHash(this));
				this.containers[f].containerCache.over = 1
			} else if (this.currentContainer != this.containers[f]) {
				d = 1E4;
				g = null;
				for (var b = this.positionAbs[this.containers[f].floating ? "left" : "top"], e = this.items.length - 1; e >= 0; e--) if (a.ui.contains(this.containers[f].element[0], this.items[e].item[0])) {
					var h = this.items[e][this.containers[f].floating ? "left" : "top"];
					if (Math.abs(h - b) < d) {
						d = Math.abs(h - b);
						g = this.items[e]
					}
				}
				if (g || this.options.dropOnEmpty) {
					this.currentContainer = this.containers[f];
					g ? this._rearrange(c, g, null, true) : this._rearrange(c, null, this.containers[f].element, true);
					this._trigger("change", c, this._uiHash());
					this.containers[f]._trigger("change", c, this._uiHash(this));
					this.options.placeholder.update(this.currentContainer, this.placeholder);
					this.containers[f]._trigger("over", c, this._uiHash(this));
					this.containers[f].containerCache.over = 1
				}
			}
		},
		_createHelper: function(c) {
			var d = this.options;
			c = a.isFunction(d.helper) ? a(d.helper.apply(this.element[0], [c, this.currentItem])) : d.helper == "clone" ? this.currentItem.clone() : this.currentItem;
			c.parents("body").length || a(d.appendTo != "parent" ? d.appendTo : this.currentItem[0].parentNode)[0].appendChild(c[0]);
			if (c[0] == this.currentItem[0]) this._storedCSS = {
				width: this.currentItem[0].style.width,
				height: this.currentItem[0].style.height,
				position: this.currentItem.css("position"),
				top: this.currentItem.css("top"),
				left: this.currentItem.css("left")
			};
			if (c[0].style.width == "" || d.forceHelperSize) c.width(this.currentItem.width());
			if (c[0].style.height == "" || d.forceHelperSize) c.height(this.currentItem.height());
			return c
		},
		_adjustOffsetFromHelper: function(c) {
			if (typeof c == "string") c = c.split(" ");
			if (a.isArray(c)) c = {
				left: +c[0],
				top: +c[1] || 0
			};
			if ("left" in c) this.offset.click.left = c.left + this.margins.left;
			if ("right" in c) this.offset.click.left = this.helperProportions.width - c.right + this.margins.left;
			if ("top" in c) this.offset.click.top = c.top + this.margins.top;
			if ("bottom" in c) this.offset.click.top = this.helperProportions.height - c.bottom + this.margins.top
		},
		_getParentOffset: function() {
			this.offsetParent = this.helper.offsetParent();
			var c = this.offsetParent.offset();
			if (this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) {
				c.left += this.scrollParent.scrollLeft();
				c.top += this.scrollParent.scrollTop()
			}
			if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie) c = {
				top: 0,
				left: 0
			};
			return {
				top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if (this.cssPosition == "relative") {
				var c = this.currentItem.position();
				return {
					top: c.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: c.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			} else return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
				top: parseInt(this.currentItem.css("marginTop"), 10) || 0
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var c = this.options;
			if (c.containment == "parent") c.containment = this.helper[0].parentNode;
			if (c.containment == "document" || c.containment == "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a(c.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (a(c.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
			if (!/^(document|window|parent)$/.test(c.containment)) {
				var d = a(c.containment)[0];
				c = a(c.containment).offset();
				var f = a(d).css("overflow") != "hidden";
				this.containment = [c.left + (parseInt(a(d).css("borderLeftWidth"), 10) || 0) + (parseInt(a(d).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(a(d).css("borderTopWidth"), 10) || 0) + (parseInt(a(d).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (f ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(a(d).css("borderLeftWidth"), 10) || 0) - (parseInt(a(d).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (f ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(a(d).css("borderTopWidth"), 10) || 0) - (parseInt(a(d).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
			}
		},
		_convertPositionTo: function(c, d) {
			if (!d) d = this.position;
			c = c == "absolute" ? 1 : -1;
			var f = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
				g = /(html|body)/i.test(f[0].tagName);
			return {
				top: d.top + this.offset.relative.top * c + this.offset.parent.top * c - (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g ? 0 : f.scrollTop()) * c),
				left: d.left + this.offset.relative.left * c + this.offset.parent.left * c - (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : f.scrollLeft()) * c)
			}
		},
		_generatePosition: function(c) {
			var d = this.options,
				f = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
				g = /(html|body)/i.test(f[0].tagName);
			if (this.cssPosition == "relative" && !(this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0])) this.offset.relative = this._getRelativeOffset();
			var b = c.pageX,
				e = c.pageY;
			if (this.originalPosition) {
				if (this.containment) {
					if (c.pageX - this.offset.click.left < this.containment[0]) b = this.containment[0] + this.offset.click.left;
					if (c.pageY - this.offset.click.top < this.containment[1]) e = this.containment[1] + this.offset.click.top;
					if (c.pageX - this.offset.click.left > this.containment[2]) b = this.containment[2] + this.offset.click.left;
					if (c.pageY - this.offset.click.top > this.containment[3]) e = this.containment[3] + this.offset.click.top
				}
				if (d.grid) {
					e = this.originalPageY + Math.round((e - this.originalPageY) / d.grid[1]) * d.grid[1];
					e = this.containment ? !(e - this.offset.click.top < this.containment[1] || e - this.offset.click.top > this.containment[3]) ? e : !(e - this.offset.click.top < this.containment[1]) ? e - d.grid[1] : e + d.grid[1] : e;
					b = this.originalPageX + Math.round((b - this.originalPageX) / d.grid[0]) * d.grid[0];
					b = this.containment ? !(b - this.offset.click.left < this.containment[0] || b - this.offset.click.left > this.containment[2]) ? b : !(b - this.offset.click.left < this.containment[0]) ? b - d.grid[0] : b + d.grid[0] : b
				}
			}
			return {
				top: e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g ? 0 : f.scrollTop()),
				left: b - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : f.scrollLeft())
			}
		},
		_rearrange: function(c, d, f, g) {
			f ? f[0].appendChild(this.placeholder[0]) : d.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? d.item[0] : d.item[0].nextSibling);
			this.counter = this.counter ? ++this.counter : 1;
			var b = this,
				e = this.counter;
			window.setTimeout(function() {
				e == b.counter && b.refreshPositions(!g)
			}, 0)
		},
		_clear: function(c, d) {
			this.reverting = false;
			var f = [];
			!this._noFinalSort && this.currentItem[0].parentNode && this.placeholder.before(this.currentItem);
			this._noFinalSort = null;
			if (this.helper[0] == this.currentItem[0]) {
				for (var g in this._storedCSS) if (this._storedCSS[g] == "auto" || this._storedCSS[g] == "static") this._storedCSS[g] = "";
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
			} else this.currentItem.show();
			this.fromOutside && !d && f.push(function(b) {
				this._trigger("receive", b, this._uiHash(this.fromOutside))
			});
			if ((this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !d) f.push(function(b) {
				this._trigger("update", b, this._uiHash())
			});
			if (!a.ui.contains(this.element[0], this.currentItem[0])) {
				d || f.push(function(b) {
					this._trigger("remove", b, this._uiHash())
				});
				for (g = this.containers.length - 1; g >= 0; g--) if (a.ui.contains(this.containers[g].element[0], this.currentItem[0]) && !d) {
					f.push(function(b) {
						return function(e) {
							b._trigger("receive", e, this._uiHash(this))
						}
					}.call(this, this.containers[g]));
					f.push(function(b) {
						return function(e) {
							b._trigger("update", e, this._uiHash(this))
						}
					}.call(this, this.containers[g]))
				}
			}
			for (g = this.containers.length - 1; g >= 0; g--) {
				d || f.push(function(b) {
					return function(e) {
						b._trigger("deactivate", e, this._uiHash(this))
					}
				}.call(this, this.containers[g]));
				if (this.containers[g].containerCache.over) {
					f.push(function(b) {
						return function(e) {
							b._trigger("out", e, this._uiHash(this))
						}
					}.call(this, this.containers[g]));
					this.containers[g].containerCache.over = 0
				}
			}
			this._storedCursor && a("body").css("cursor", this._storedCursor);
			this._storedOpacity && this.helper.css("opacity", this._storedOpacity);
			if (this._storedZIndex) this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex);
			this.dragging = false;
			if (this.cancelHelperRemoval) {
				if (!d) {
					this._trigger("beforeStop", c, this._uiHash());
					for (g = 0; g < f.length; g++) f[g].call(this, c);
					this._trigger("stop", c, this._uiHash())
				}
				return false
			}
			d || this._trigger("beforeStop", c, this._uiHash());
			this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
			this.helper[0] != this.currentItem[0] && this.helper.remove();
			this.helper = null;
			if (!d) {
				for (g = 0; g < f.length; g++) f[g].call(this, c);
				this._trigger("stop", c, this._uiHash())
			}
			this.fromOutside = false;
			return true
		},
		_trigger: function() {
			a.Widget.prototype._trigger.apply(this, arguments) === false && this.cancel()
		},
		_uiHash: function(c) {
			var d = c || this;
			return {
				helper: d.helper,
				placeholder: d.placeholder || a([]),
				position: d.position,
				originalPosition: d.originalPosition,
				offset: d.positionAbs,
				item: d.currentItem,
				sender: c ? c.element : null
			}
		}
	});
	a.extend(a.ui.sortable, {
		version: "1.8.11"
	})
})(jQuery);

(function(a) {
	a.widget("ui.accordion", {
		options: {
			active: 0,
			animated: "slide",
			autoHeight: true,
			clearStyle: false,
			collapsible: false,
			event: "click",
			fillSpace: false,
			header: "> li > :first-child,> :not(li):even",
			icons: {
				header: "ui-icon-triangle-1-e",
				headerSelected: "ui-icon-triangle-1-s"
			},
			navigation: false,
			navigationFilter: function() {
				return this.href.toLowerCase() === location.href.toLowerCase()
			}
		},
		_create: function() {
			var c = this,
				d = c.options;
			c.running = 0;
			c.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
			c.headers = c.element.find(d.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function() {
				d.disabled || a(this).addClass("ui-state-hover")
			}).bind("mouseleave.accordion", function() {
				d.disabled || a(this).removeClass("ui-state-hover")
			}).bind("focus.accordion", function() {
				d.disabled || a(this).addClass("ui-state-focus")
			}).bind("blur.accordion", function() {
				d.disabled || a(this).removeClass("ui-state-focus")
			});
			c.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
			if (d.navigation) {
				var f = c.element.find("a").filter(d.navigationFilter).eq(0);
				if (f.length) {
					var g = f.closest(".ui-accordion-header");
					c.active = g.length ? g : f.closest(".ui-accordion-content").prev()
				}
			}
			c.active = c._findActive(c.active || d.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");
			c.active.next().addClass("ui-accordion-content-active");
			c._createIcons();
			c.resize();
			c.element.attr("role", "tablist");
			c.headers.attr("role", "tab").bind("keydown.accordion", function(b) {
				return c._keydown(b)
			}).next().attr("role", "tabpanel");
			c.headers.not(c.active || "").attr({
				"aria-expanded": "false",
				"aria-selected": "false",
				tabIndex: -1
			}).next().hide();
			c.active.length ? c.active.attr({
				"aria-expanded": "true",
				"aria-selected": "true",
				tabIndex: 0
			}) : c.headers.eq(0).attr("tabIndex", 0);
			a.browser.safari || c.headers.find("a").attr("tabIndex", -1);
			d.event && c.headers.bind(d.event.split(" ").join(".accordion ") + ".accordion", function(b) {
				c._clickHandler.call(c, b, this);
				b.preventDefault()
			})
		},
		_createIcons: function() {
			var c = this.options;
			if (c.icons) {
				a("<span></span>").addClass("ui-icon " + c.icons.header).prependTo(this.headers);
				this.active.children(".ui-icon").toggleClass(c.icons.header).toggleClass(c.icons.headerSelected);
				this.element.addClass("ui-accordion-icons")
			}
		},
		_destroyIcons: function() {
			this.headers.children(".ui-icon").remove();
			this.element.removeClass("ui-accordion-icons")
		},
		destroy: function() {
			var c = this.options;
			this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
			this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
			this.headers.find("a").removeAttr("tabIndex");
			this._destroyIcons();
			var d = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
			if (c.autoHeight || c.fillHeight) d.css("height", "");
			return a.Widget.prototype.destroy.call(this)
		},
		_setOption: function(c, d) {
			a.Widget.prototype._setOption.apply(this, arguments);
			c == "active" && this.activate(d);
			if (c == "icons") {
				this._destroyIcons();
				d && this._createIcons()
			}
			if (c == "disabled") this.headers.add(this.headers.next())[d ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
		},
		_keydown: function(c) {
			if (!(this.options.disabled || c.altKey || c.ctrlKey)) {
				var d = a.ui.keyCode,
					f = this.headers.length,
					g = this.headers.index(c.target),
					b = false;
				switch (c.keyCode) {
				case d.RIGHT:
				case d.DOWN:
					b = this.headers[(g + 1) % f];
					break;
				case d.LEFT:
				case d.UP:
					b = this.headers[(g - 1 + f) % f];
					break;
				case d.SPACE:
				case d.ENTER:
					this._clickHandler({
						target: c.target
					}, c.target);
					c.preventDefault()
				}
				if (b) {
					a(c.target).attr("tabIndex", -1);
					a(b).attr("tabIndex", 0);
					b.focus();
					return false
				}
				return true
			}
		},
		resize: function() {
			var c = this.options,
				d;
			if (c.fillSpace) {
				if (a.browser.msie) {
					var f = this.element.parent().css("overflow");
					this.element.parent().css("overflow", "hidden")
				}
				d = this.element.parent().height();
				a.browser.msie && this.element.parent().css("overflow", f);
				this.headers.each(function() {
					d -= a(this).outerHeight(true)
				});
				this.headers.next().each(function() {
					a(this).height(Math.max(0, d - a(this).innerHeight() + a(this).height()))
				}).css("overflow", "auto")
			} else if (c.autoHeight) {
				d = 0;
				this.headers.next().each(function() {
					d = Math.max(d, a(this).height("").height())
				}).height(d)
			}
			return this
		},
		activate: function(c) {
			this.options.active = c;
			c = this._findActive(c)[0];
			this._clickHandler({
				target: c
			}, c);
			return this
		},
		_findActive: function(c) {
			return c ? typeof c === "number" ? this.headers.filter(":eq(" + c + ")") : this.headers.not(this.headers.not(c)) : c === false ? a([]) : this.headers.filter(":eq(0)")
		},
		_clickHandler: function(c, d) {
			var f = this.options;
			if (!f.disabled) if (c.target) {
				c = a(c.currentTarget || d);
				d = c[0] === this.active[0];
				f.active = f.collapsible && d ? false : this.headers.index(c);
				if (!(this.running || !f.collapsible && d)) {
					var g = this.active;
					k = c.next();
					e = this.active.next();
					h = {
						options: f,
						newHeader: d && f.collapsible ? a([]) : c,
						oldHeader: this.active,
						newContent: d && f.collapsible ? a([]) : k,
						oldContent: e
					};
					var b = this.headers.index(this.active[0]) > this.headers.index(c[0]);
					this.active = d ? a([]) : c;
					this._toggle(k, e, h, d, b);
					g.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(f.icons.headerSelected).addClass(f.icons.header);
					if (!d) {
						c.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(f.icons.header).addClass(f.icons.headerSelected);
						c.next().addClass("ui-accordion-content-active")
					}
				}
			} else if (f.collapsible) {
				this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(f.icons.headerSelected).addClass(f.icons.header);
				this.active.next().addClass("ui-accordion-content-active");
				var e = this.active.next(),
					h = {
						options: f,
						newHeader: a([]),
						oldHeader: f.active,
						newContent: a([]),
						oldContent: e
					},
					k = this.active = a([]);
				this._toggle(k, e, h)
			}
		},
		_toggle: function(c, d, f, g, b) {
			var e = this,
				h = e.options;
			e.toShow = c;
			e.toHide = d;
			e.data = f;
			var k = function() {
				if (e) return e._completed.apply(e, arguments)
			};
			e._trigger("changestart", null, e.data);
			e.running = d.size() === 0 ? c.size() : d.size();
			if (h.animated) {
				f = {};
				f = h.collapsible && g ? {
					toShow: a([]),
					toHide: d,
					complete: k,
					down: b,
					autoHeight: h.autoHeight || h.fillSpace
				} : {
					toShow: c,
					toHide: d,
					complete: k,
					down: b,
					autoHeight: h.autoHeight || h.fillSpace
				};
				if (!h.proxied) h.proxied = h.animated;
				if (!h.proxiedDuration) h.proxiedDuration = h.duration;
				h.animated = a.isFunction(h.proxied) ? h.proxied(f) : h.proxied;
				h.duration = a.isFunction(h.proxiedDuration) ? h.proxiedDuration(f) : h.proxiedDuration;
				g = a.ui.accordion.animations;
				var l = h.duration,
					o = h.animated;
				if (o && !g[o] && !a.easing[o]) o = "slide";
				g[o] || (g[o] = function(q) {
					this.slide(q, {
						easing: o,
						duration: l || 700
					})
				});
				g[o](f)
			} else {
				if (h.collapsible && g) c.toggle();
				else {
					d.hide();
					c.show()
				}
				k(true)
			}
			d.prev().attr({
				"aria-expanded": "false",
				"aria-selected": "false",
				tabIndex: -1
			}).blur();
			c.prev().attr({
				"aria-expanded": "true",
				"aria-selected": "true",
				tabIndex: 0
			}).focus()
		},
		_completed: function(c) {
			this.running = c ? 0 : --this.running;
			if (!this.running) {
				this.options.clearStyle && this.toShow.add(this.toHide).css({
					height: "",
					overflow: ""
				});
				this.toHide.removeClass("ui-accordion-content-active");
				if (this.toHide.length) this.toHide.parent()[0].className = this.toHide.parent()[0].className;
				this._trigger("change", null, this.data)
			}
		}
	});
	a.extend(a.ui.accordion, {
		version: "1.8.11",
		animations: {
			slide: function(c, d) {
				c = a.extend({
					easing: "swing",
					duration: 300
				}, c, d);
				if (c.toHide.size()) if (c.toShow.size()) {
					var f = c.toShow.css("overflow"),
						g = 0,
						b = {},
						e = {},
						h;
					d = c.toShow;
					h = d[0].style.width;
					d.width(parseInt(d.parent().width(), 10) - parseInt(d.css("paddingLeft"), 10) - parseInt(d.css("paddingRight"), 10) - (parseInt(d.css("borderLeftWidth"), 10) || 0) - (parseInt(d.css("borderRightWidth"), 10) || 0));
					a.each(["height", "paddingTop", "paddingBottom"], function(k, l) {
						e[l] = "hide";
						k = ("" + a.css(c.toShow[0], l)).match(/^([\d+-.]+)(.*)$/);
						b[l] = {
							value: k[1],
							unit: k[2] || "px"
						}
					});
					c.toShow.css({
						height: 0,
						overflow: "hidden"
					}).show();
					c.toHide.filter(":hidden").each(c.complete).end().filter(":visible").animate(e, {
						step: function(k, l) {
							if (l.prop == "height") g = l.end - l.start === 0 ? 0 : (l.now - l.start) / (l.end - l.start);
							c.toShow[0].style[l.prop] = g * b[l.prop].value + b[l.prop].unit
						},
						duration: c.duration,
						easing: c.easing,
						complete: function() {
							c.autoHeight || c.toShow.css("height", "");
							c.toShow.css({
								width: h,
								overflow: f
							});
							c.complete()
						}
					})
				} else c.toHide.animate({
					height: "hide",
					paddingTop: "hide",
					paddingBottom: "hide"
				}, c);
				else c.toShow.animate({
					height: "show",
					paddingTop: "show",
					paddingBottom: "show"
				}, c)
			},
			bounceslide: function(c) {
				this.slide(c, {
					easing: c.down ? "easeOutBounce" : "swing",
					duration: c.down ? 1E3 : 200
				})
			}
		}
	})
})(jQuery);

(function(a) {
	var c = 0;
	a.widget("ui.autocomplete", {
		options: {
			appendTo: "body",
			autoFocus: false,
			delay: 300,
			minLength: 1,
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			source: null
		},
		pending: 0,
		_create: function() {
			var d = this,
				f = this.element[0].ownerDocument,
				g;
			this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
				role: "textbox",
				"aria-autocomplete": "list",
				"aria-haspopup": "true"
			}).bind("keydown.autocomplete", function(b) {
				if (!(d.options.disabled || d.element.attr("readonly"))) {
					g = false;
					var e = a.ui.keyCode;
					switch (b.keyCode) {
					case e.PAGE_UP:
						d._move("previousPage", b);
						break;
					case e.PAGE_DOWN:
						d._move("nextPage", b);
						break;
					case e.UP:
						d._move("previous", b);
						b.preventDefault();
						break;
					case e.DOWN:
						d._move("next", b);
						b.preventDefault();
						break;
					case e.ENTER:
					case e.NUMPAD_ENTER:
						if (d.menu.active) {
							g = true;
							b.preventDefault()
						}
					case e.TAB:
						if (!d.menu.active) return;
						d.menu.select(b);
						break;
					case e.ESCAPE:
						d.element.val(d.term);
						d.close(b);
						break;
					default:
						clearTimeout(d.searching);
						d.searching = setTimeout(function() {
							if (d.term != d.element.val()) {
								d.selectedItem = null;
								d.search(null, b)
							}
						}, d.options.delay);
						break
					}
				}
			}).bind("keypress.autocomplete", function(b) {
				if (g) {
					g = false;
					b.preventDefault()
				}
			}).bind("focus.autocomplete", function() {
				if (!d.options.disabled) {
					d.selectedItem = null;
					d.previous = d.element.val()
				}
			}).bind("blur.autocomplete", function(b) {
				if (!d.options.disabled) {
					clearTimeout(d.searching);
					d.closing = setTimeout(function() {
						d.close(b);
						d._change(b)
					}, 150)
				}
			});
			this._initSource();
			this.response = function() {
				return d._response.apply(d, arguments)
			};
			this.menu = a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo || "body", f)[0]).mousedown(function(b) {
				var e = d.menu.element[0];
				a(b.target).closest(".ui-menu-item").length || setTimeout(function() {
					a(document).one("mousedown", function(h) {
						h.target !== d.element[0] && h.target !== e && !a.ui.contains(e, h.target) && d.close()
					})
				}, 1);
				setTimeout(function() {
					clearTimeout(d.closing)
				}, 13)
			}).menu({
				focus: function(b, e) {
					e = e.item.data("item.autocomplete");
					false !== d._trigger("focus", b, {
						item: e
					}) && /^key/.test(b.originalEvent.type) && d.element.val(e.value)
				},
				selected: function(b, e) {
					var h = e.item.data("item.autocomplete"),
						k = d.previous;
					if (d.element[0] !== f.activeElement) {
						d.element.focus();
						d.previous = k;
						setTimeout(function() {
							d.previous = k;
							d.selectedItem = h
						}, 1)
					}
					false !== d._trigger("select", b, {
						item: h
					}) && d.element.val(h.value);
					d.term = d.element.val();
					d.close(b);
					d.selectedItem = h
				},
				blur: function() {
					d.menu.element.is(":visible") && d.element.val() !== d.term && d.element.val(d.term)
				}
			}).zIndex(this.element.zIndex() + 1).css({
				top: 0,
				left: 0
			}).hide().data("menu");
			a.fn.bgiframe && this.menu.element.bgiframe()
		},
		destroy: function() {
			this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
			this.menu.element.remove();
			a.Widget.prototype.destroy.call(this)
		},
		_setOption: function(d, f) {
			a.Widget.prototype._setOption.apply(this, arguments);
			d === "source" && this._initSource();
			if (d === "appendTo") this.menu.element.appendTo(a(f || "body", this.element[0].ownerDocument)[0]);
			d === "disabled" && f && this.xhr && this.xhr.abort()
		},
		_initSource: function() {
			var d = this,
				f, g;
			if (a.isArray(this.options.source)) {
				f = this.options.source;
				this.source = function(b, e) {
					e(a.ui.autocomplete.filter(f, b.term))
				}
			} else if (typeof this.options.source === "string") {
				g = this.options.source;
				this.source = function(b, e) {
					d.xhr && d.xhr.abort();
					d.xhr = a.ajax({
						url: g,
						data: b,
						dataType: "json",
						autocompleteRequest: ++c,
						success: function(h) {
							this.autocompleteRequest === c && e(h)
						},
						error: function() {
							this.autocompleteRequest === c && e([])
						}
					})
				}
			} else this.source = this.options.source
		},
		search: function(d, f) {
			d = d != null ? d : this.element.val();
			this.term = this.element.val();
			if (d.length < this.options.minLength) return this.close(f);
			clearTimeout(this.closing);
			if (this._trigger("search", f) !== false) return this._search(d)
		},
		_search: function(d) {
			this.pending++;
			this.element.addClass("ui-autocomplete-loading");
			this.source({
				term: d
			}, this.response)
		},
		_response: function(d) {
			if (!this.options.disabled && d && d.length) {
				d = this._normalize(d);
				this._suggest(d);
				this._trigger("open")
			} else this.close();
			this.pending--;
			this.pending || this.element.removeClass("ui-autocomplete-loading")
		},
		close: function(d) {
			clearTimeout(this.closing);
			if (this.menu.element.is(":visible")) {
				this.menu.element.hide();
				this.menu.deactivate();
				this._trigger("close", d)
			}
		},
		_change: function(d) {
			this.previous !== this.element.val() && this._trigger("change", d, {
				item: this.selectedItem
			})
		},
		_normalize: function(d) {
			if (d.length && d[0].label && d[0].value) return d;
			return a.map(d, function(f) {
				if (typeof f === "string") return {
					label: f,
					value: f
				};
				return a.extend({
					label: f.label || f.value,
					value: f.value || f.label
				}, f)
			})
		},
		_suggest: function(d) {
			var f = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
			this._renderMenu(f, d);
			this.menu.deactivate();
			this.menu.refresh();
			f.show();
			this._resizeMenu();
			f.position(a.extend({
				of: this.element
			}, this.options.position));
			this.options.autoFocus && this.menu.next(new a.Event("mouseover"))
		},
		_resizeMenu: function() {
			var d = this.menu.element;
			d.outerWidth(Math.max(d.width("").outerWidth(), this.element.outerWidth()))
		},
		_renderMenu: function(d, f) {
			var g = this;
			a.each(f, function(b, e) {
				g._renderItem(d, e)
			})
		},
		_renderItem: function(d, f) {
			return a("<li></li>").data("item.autocomplete", f).append(a("<a></a>").text(f.label)).appendTo(d)
		},
		_move: function(d, f) {
			if (this.menu.element.is(":visible")) if (this.menu.first() && /^previous/.test(d) || this.menu.last() && /^next/.test(d)) {
				this.element.val(this.term);
				this.menu.deactivate()
			} else this.menu[d](f);
			else this.search(null, f)
		},
		widget: function() {
			return this.menu.element
		}
	});
	a.extend(a.ui.autocomplete, {
		escapeRegex: function(d) {
			return d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
		},
		filter: function(d, f) {
			var g = new RegExp(a.ui.autocomplete.escapeRegex(f), "i");
			return a.grep(d, function(b) {
				return g.test(b.label || b.value || b)
			})
		}
	})
})(jQuery);

(function(a) {
	a.widget("ui.menu", {
		_create: function() {
			var c = this;
			this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
				role: "listbox",
				"aria-activedescendant": "ui-active-menuitem"
			}).click(function(d) {
				if (a(d.target).closest(".ui-menu-item a").length) {
					d.preventDefault();
					c.select(d)
				}
			});
			this.refresh()
		},
		refresh: function() {
			var c = this;
			this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem").children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function(d) {
				c.activate(d, a(this).parent())
			}).mouseleave(function() {
				c.deactivate()
			})
		},
		activate: function(c, d) {
			this.deactivate();
			if (this.hasScroll()) {
				var f = d.offset().top - this.element.offset().top,
					g = this.element.attr("scrollTop"),
					b = this.element.height();
				if (f < 0) this.element.attr("scrollTop", g + f);
				else f >= b && this.element.attr("scrollTop", g + f - b + d.height())
			}
			this.active = d.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end();
			this._trigger("focus", c, {
				item: d
			})
		},
		deactivate: function() {
			if (this.active) {
				this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
				this._trigger("blur");
				this.active = null
			}
		},
		next: function(c) {
			this.move("next", ".ui-menu-item:first", c)
		},
		previous: function(c) {
			this.move("prev", ".ui-menu-item:last", c)
		},
		first: function() {
			return this.active && !this.active.prevAll(".ui-menu-item").length
		},
		last: function() {
			return this.active && !this.active.nextAll(".ui-menu-item").length
		},
		move: function(c, d, f) {
			if (this.active) {
				c = this.active[c + "All"](".ui-menu-item").eq(0);
				c.length ? this.activate(f, c) : this.activate(f, this.element.children(d))
			} else this.activate(f, this.element.children(d))
		},
		nextPage: function(c) {
			if (this.hasScroll()) if (!this.active || this.last()) this.activate(c, this.element.children(".ui-menu-item:first"));
			else {
				var d = this.active.offset().top,
					f = this.element.height(),
					g = this.element.children(".ui-menu-item").filter(function() {
						var b = a(this).offset().top - d - f + a(this).height();
						return b < 10 && b > -10
					});
				g.length || (g = this.element.children(".ui-menu-item:last"));
				this.activate(c, g)
			} else this.activate(c, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
		},
		previousPage: function(c) {
			if (this.hasScroll()) if (!this.active || this.first()) this.activate(c, this.element.children(".ui-menu-item:last"));
			else {
				var d = this.active.offset().top,
					f = this.element.height();
				result = this.element.children(".ui-menu-item").filter(function() {
					var g = a(this).offset().top - d + f - a(this).height();
					return g < 10 && g > -10
				});
				result.length || (result = this.element.children(".ui-menu-item:first"));
				this.activate(c, result)
			} else this.activate(c, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
		},
		hasScroll: function() {
			return this.element.height() < this.element.attr("scrollHeight")
		},
		select: function(c) {
			this._trigger("selected", c, {
				item: this.active
			})
		}
	})
})(jQuery);
(function(a) {
	var c, d = function(g) {
		a(":ui-button", g.target.form).each(function() {
			var b = a(this).data("button");
			setTimeout(function() {
				b.refresh()
			}, 1)
		})
	},
		f = function(g) {
			var b = g.name,
				e = g.form,
				h = a([]);
			if (b) h = e ? a(e).find("[name='" + b + "']") : a("[name='" + b + "']", g.ownerDocument).filter(function() {
				return !this.form
			});
			return h
		};
	a.widget("ui.button", {
		options: {
			disabled: null,
			text: true,
			label: null,
			icons: {
				primary: null,
				secondary: null
			}
		},
		_create: function() {
			this.element.closest("form").unbind("reset.button").bind("reset.button", d);
			if (typeof this.options.disabled !== "boolean") this.options.disabled = this.element.attr("disabled");
			this._determineButtonType();
			this.hasTitle = !! this.buttonElement.attr("title");
			var g = this,
				b = this.options,
				e = this.type === "checkbox" || this.type === "radio",
				h = "ui-state-hover" + (!e ? " ui-state-active" : "");
			if (b.label === null) b.label = this.buttonElement.html();
			if (this.element.is(":disabled")) b.disabled = true;
			this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role", "button").bind("mouseenter.button", function() {
				if (!b.disabled) {
					a(this).addClass("ui-state-hover");
					this === c && a(this).addClass("ui-state-active")
				}
			}).bind("mouseleave.button", function() {
				b.disabled || a(this).removeClass(h)
			}).bind("focus.button", function() {
				a(this).addClass("ui-state-focus")
			}).bind("blur.button", function() {
				a(this).removeClass("ui-state-focus")
			});
			e && this.element.bind("change.button", function() {
				g.refresh()
			});
			if (this.type === "checkbox") this.buttonElement.bind("click.button", function() {
				if (b.disabled) return false;
				a(this).toggleClass("ui-state-active");
				g.buttonElement.attr("aria-pressed", g.element[0].checked)
			});
			else if (this.type === "radio") this.buttonElement.bind("click.button", function() {
				if (b.disabled) return false;
				a(this).addClass("ui-state-active");
				g.buttonElement.attr("aria-pressed", true);
				var k = g.element[0];
				f(k).not(k).map(function() {
					return a(this).button("widget")[0]
				}).removeClass("ui-state-active").attr("aria-pressed", false)
			});
			else {
				this.buttonElement.bind("mousedown.button", function() {
					if (b.disabled) return false;
					a(this).addClass("ui-state-active");
					c = this;
					a(document).one("mouseup", function() {
						c = null
					})
				}).bind("mouseup.button", function() {
					if (b.disabled) return false;
					a(this).removeClass("ui-state-active")
				}).bind("keydown.button", function(k) {
					if (b.disabled) return false;
					if (k.keyCode == a.ui.keyCode.SPACE || k.keyCode == a.ui.keyCode.ENTER) a(this).addClass("ui-state-active")
				}).bind("keyup.button", function() {
					a(this).removeClass("ui-state-active")
				});
				this.buttonElement.is("a") && this.buttonElement.keyup(function(k) {
					k.keyCode === a.ui.keyCode.SPACE && a(this).click()
				})
			}
			this._setOption("disabled", b.disabled)
		},
		_determineButtonType: function() {
			this.type = this.element.is(":checkbox") ? "checkbox" : this.element.is(":radio") ? "radio" : this.element.is("input") ? "input" : "button";
			if (this.type === "checkbox" || this.type === "radio") {
				var g = this.element.parents().filter(":last"),
					b = "label[for=" + this.element.attr("id") + "]";
				this.buttonElement = g.find(b);
				if (!this.buttonElement.length) {
					g = g.length ? g.siblings() : this.element.siblings();
					this.buttonElement = g.filter(b);
					if (!this.buttonElement.length) this.buttonElement = g.find(b)
				}
				this.element.addClass("ui-helper-hidden-accessible");
				(g = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active");
				this.buttonElement.attr("aria-pressed", g)
			} else this.buttonElement = this.element
		},
		widget: function() {
			return this.buttonElement
		},
		destroy: function() {
			this.element.removeClass("ui-helper-hidden-accessible");
			this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
			this.hasTitle || this.buttonElement.removeAttr("title");
			a.Widget.prototype.destroy.call(this)
		},
		_setOption: function(g, b) {
			a.Widget.prototype._setOption.apply(this, arguments);
			if (g === "disabled") b ? this.element.attr("disabled", true) : this.element.removeAttr("disabled");
			this._resetButton()
		},
		refresh: function() {
			var g = this.element.is(":disabled");
			g !== this.options.disabled && this._setOption("disabled", g);
			if (this.type === "radio") f(this.element[0]).each(function() {
				a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed", true) : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", false)
			});
			else if (this.type === "checkbox") this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", true) : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", false)
		},
		_resetButton: function() {
			if (this.type === "input") this.options.label && this.element.val(this.options.label);
			else {
				var g = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
					b = a("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(g.empty()).text(),
					e = this.options.icons,
					h = e.primary && e.secondary,
					k = [];
				if (e.primary || e.secondary) {
					if (this.options.text) k.push("ui-button-text-icon" + (h ? "s" : e.primary ? "-primary" : "-secondary"));
					e.primary && g.prepend("<span class='ui-button-icon-primary ui-icon " + e.primary + "'></span>");
					e.secondary && g.append("<span class='ui-button-icon-secondary ui-icon " + e.secondary + "'></span>");
					if (!this.options.text) {
						k.push(h ? "ui-button-icons-only" : "ui-button-icon-only");
						this.hasTitle || g.attr("title", b)
					}
				} else k.push("ui-button-text-only");
				g.addClass(k.join(" "))
			}
		}
	});
	a.widget("ui.buttonset", {
		options: {
			items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
		},
		_create: function() {
			this.element.addClass("ui-buttonset")
		},
		_init: function() {
			this.refresh()
		},
		_setOption: function(g, b) {
			g === "disabled" && this.buttons.button("option", g, b);
			a.Widget.prototype._setOption.apply(this, arguments)
		},
		refresh: function() {
			this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
				return a(this).button("widget")[0]
			}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end()
		},
		destroy: function() {
			this.element.removeClass("ui-buttonset");
			this.buttons.map(function() {
				return a(this).button("widget")[0]
			}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
			a.Widget.prototype.destroy.call(this)
		}
	})
})(jQuery);
(function(a, c) {
	var d = {
		buttons: true,
		height: true,
		maxHeight: true,
		maxWidth: true,
		minHeight: true,
		minWidth: true,
		width: true
	},
		f = {
			maxHeight: true,
			maxWidth: true,
			minHeight: true,
			minWidth: true
		};
	a.widget("ui.dialog", {
		options: {
			autoOpen: true,
			buttons: {},
			closeOnEscape: true,
			closeText: "close",
			dialogClass: "",
			draggable: true,
			hide: null,
			height: "auto",
			maxHeight: false,
			maxWidth: false,
			minHeight: 150,
			minWidth: 150,
			modal: false,
			position: {
				my: "center",
				at: "center",
				collision: "fit",
				using: function(g) {
					var b = a(this).css(g).offset().top;
					b < 0 && a(this).css("top", g.top - b)
				}
			},
			resizable: true,
			show: null,
			stack: true,
			title: "",
			width: 300,
			zIndex: 1E3
		},
		_create: function() {
			this.originalTitle = this.element.attr("title");
			if (typeof this.originalTitle !== "string") this.originalTitle = "";
			this.options.title = this.options.title || this.originalTitle;
			var g = this,
				b = g.options,
				e = b.title || "&#160;",
				h = a.ui.dialog.getTitleId(g.element),
				k = (g.uiDialog = a("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + b.dialogClass).css({
					zIndex: b.zIndex
				}).attr("tabIndex", -1).css("outline", 0).keydown(function(q) {
					if (b.closeOnEscape && q.keyCode && q.keyCode === a.ui.keyCode.ESCAPE) {
						g.close(q);
						q.preventDefault()
					}
				}).attr({
					role: "dialog",
					"aria-labelledby": h
				}).mousedown(function(q) {
					g.moveToTop(false, q)
				});
			g.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(k);
			var l = (g.uiDialogTitlebar = a("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(k),
				o = a('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function() {
					o.addClass("ui-state-hover")
				}, function() {
					o.removeClass("ui-state-hover")
				}).focus(function() {
					o.addClass("ui-state-focus")
				}).blur(function() {
					o.removeClass("ui-state-focus")
				}).click(function(q) {
					g.close(q);
					return false
				}).appendTo(l);
			(g.uiDialogTitlebarCloseText = a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(b.closeText).appendTo(o);
			a("<span></span>").addClass("ui-dialog-title").attr("id", h).html(e).prependTo(l);
			if (a.isFunction(b.beforeclose) && !a.isFunction(b.beforeClose)) b.beforeClose = b.beforeclose;
			l.find("*").add(l).disableSelection();
			b.draggable && a.fn.draggable && g._makeDraggable();
			b.resizable && a.fn.resizable && g._makeResizable();
			g._createButtons(b.buttons);
			g._isOpen = false;
			a.fn.bgiframe && k.bgiframe()
		},
		_init: function() {
			this.options.autoOpen && this.open()
		},
		destroy: function() {
			var g = this;
			g.overlay && g.overlay.destroy();
			g.uiDialog.hide();
			g.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
			g.uiDialog.remove();
			g.originalTitle && g.element.attr("title", g.originalTitle);
			return g
		},
		widget: function() {
			return this.uiDialog
		},
		close: function(g) {
			var b = this,
				e, h;
			if (false !== b._trigger("beforeClose", g)) {
				b.overlay && b.overlay.destroy();
				b.uiDialog.unbind("keypress.ui-dialog");
				b._isOpen = false;
				if (b.options.hide) b.uiDialog.hide(b.options.hide, function() {
					b._trigger("close", g)
				});
				else {
					b.uiDialog.hide();
					b._trigger("close", g)
				}
				a.ui.dialog.overlay.resize();
				if (b.options.modal) {
					e = 0;
					a(".ui-dialog").each(function() {
						if (this !== b.uiDialog[0]) {
							h = a(this).css("z-index");
							isNaN(h) || (e = Math.max(e, h))
						}
					});
					a.ui.dialog.maxZ = e
				}
				return b
			}
		},
		isOpen: function() {
			return this._isOpen
		},
		moveToTop: function(g, b) {
			var e = this,
				h = e.options;
			if (h.modal && !g || !h.stack && !h.modal) return e._trigger("focus", b);
			if (h.zIndex > a.ui.dialog.maxZ) a.ui.dialog.maxZ = h.zIndex;
			if (e.overlay) {
				a.ui.dialog.maxZ += 1;
				e.overlay.$el.css("z-index", a.ui.dialog.overlay.maxZ = a.ui.dialog.maxZ)
			}
			g = {
				scrollTop: e.element.attr("scrollTop"),
				scrollLeft: e.element.attr("scrollLeft")
			};
			a.ui.dialog.maxZ += 1;
			e.uiDialog.css("z-index", a.ui.dialog.maxZ);
			e.element.attr(g);
			e._trigger("focus", b);
			return e
		},
		open: function() {
			if (!this._isOpen) {
				var g = this,
					b = g.options,
					e = g.uiDialog;
				g.overlay = b.modal ? new a.ui.dialog.overlay(g) : null;
				g._size();
				g._position(b.position);
				e.show(b.show);
				g.moveToTop(true);
				b.modal && e.bind("keypress.ui-dialog", function(h) {
					if (h.keyCode === a.ui.keyCode.TAB) {
						var k = a(":tabbable", this),
							l = k.filter(":first");
						k = k.filter(":last");
						if (h.target === k[0] && !h.shiftKey) {
							l.focus(1);
							return false
						} else if (h.target === l[0] && h.shiftKey) {
							k.focus(1);
							return false
						}
					}
				});
				a(g.element.find(":tabbable").get().concat(e.find(".ui-dialog-buttonpane :tabbable").get().concat(e.get()))).eq(0).focus();
				g._isOpen = true;
				g._trigger("open");
				return g
			}
		},
		_createButtons: function(g) {
			var b = this,
				e = false,
				h = a("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
				k = a("<div></div>").addClass("ui-dialog-buttonset").appendTo(h);
			b.uiDialog.find(".ui-dialog-buttonpane").remove();
			typeof g === "object" && g !== null && a.each(g, function() {
				return !(e = true)
			});
			if (e) {
				a.each(g, function(l, o) {
					o = a.isFunction(o) ? {
						click: o,
						text: l
					} : o;
					l = a('<button type="button"></button>').attr(o, true).unbind("click").click(function() {
						o.click.apply(b.element[0], arguments)
					}).appendTo(k);
					a.fn.button && l.button()
				});
				h.appendTo(b.uiDialog)
			}
		},
		_makeDraggable: function() {
			function g(l) {
				return {
					position: l.position,
					offset: l.offset
				}
			}
			var b = this,
				e = b.options,
				h = a(document),
				k;
			b.uiDialog.draggable({
				cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
				handle: ".ui-dialog-titlebar",
				containment: "document",
				start: function(l, o) {
					k = e.height === "auto" ? "auto" : a(this).height();
					a(this).height(a(this).height()).addClass("ui-dialog-dragging");
					b._trigger("dragStart", l, g(o))
				},
				drag: function(l, o) {
					b._trigger("drag", l, g(o))
				},
				stop: function(l, o) {
					e.position = [o.position.left - h.scrollLeft(), o.position.top - h.scrollTop()];
					a(this).removeClass("ui-dialog-dragging").height(k);
					b._trigger("dragStop", l, g(o));
					a.ui.dialog.overlay.resize()
				}
			})
		},
		_makeResizable: function(g) {
			function b(l) {
				return {
					originalPosition: l.originalPosition,
					originalSize: l.originalSize,
					position: l.position,
					size: l.size
				}
			}
			g = g === c ? this.options.resizable : g;
			var e = this,
				h = e.options,
				k = e.uiDialog.css("position");
			g = typeof g === "string" ? g : "n,e,s,w,se,sw,ne,nw";
			e.uiDialog.resizable({
				cancel: ".ui-dialog-content",
				containment: "document",
				alsoResize: e.element,
				maxWidth: h.maxWidth,
				maxHeight: h.maxHeight,
				minWidth: h.minWidth,
				minHeight: e._minHeight(),
				handles: g,
				start: function(l, o) {
					a(this).addClass("ui-dialog-resizing");
					e._trigger("resizeStart", l, b(o))
				},
				resize: function(l, o) {
					e._trigger("resize", l, b(o))
				},
				stop: function(l, o) {
					a(this).removeClass("ui-dialog-resizing");
					h.height = a(this).height();
					h.width = a(this).width();
					e._trigger("resizeStop", l, b(o));
					a.ui.dialog.overlay.resize()
				}
			}).css("position", k).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
		},
		_minHeight: function() {
			var g = this.options;
			return g.height === "auto" ? g.minHeight : Math.min(g.minHeight, g.height)
		},
		_position: function(g) {
			var b = [],
				e = [0, 0],
				h;
			if (g) {
				if (typeof g === "string" || typeof g === "object" && "0" in g) {
					b = g.split ? g.split(" ") : [g[0], g[1]];
					if (b.length === 1) b[1] = b[0];
					a.each(["left", "top"], function(k, l) {
						if (+b[k] === b[k]) {
							e[k] = b[k];
							b[k] = l
						}
					});
					g = {
						my: b.join(" "),
						at: b.join(" "),
						offset: e.join(" ")
					}
				}
				g = a.extend({}, a.ui.dialog.prototype.options.position, g)
			} else g = a.ui.dialog.prototype.options.position;
			(h = this.uiDialog.is(":visible")) || this.uiDialog.show();
			this.uiDialog.css({
				top: 0,
				left: 0
			}).position(a.extend({
				of: window
			}, g));
			h || this.uiDialog.hide()
		},
		_setOptions: function(g) {
			var b = this,
				e = {},
				h = false;
			a.each(g, function(k, l) {
				b._setOption(k, l);
				if (k in d) h = true;
				if (k in f) e[k] = l
			});
			h && this._size();
			this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", e)
		},
		_setOption: function(g, b) {
			var e = this,
				h = e.uiDialog;
			switch (g) {
			case "beforeclose":
				g = "beforeClose";
				break;
			case "buttons":
				e._createButtons(b);
				break;
			case "closeText":
				e.uiDialogTitlebarCloseText.text("" + b);
				break;
			case "dialogClass":
				h.removeClass(e.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + b);
				break;
			case "disabled":
				b ? h.addClass("ui-dialog-disabled") : h.removeClass("ui-dialog-disabled");
				break;
			case "draggable":
				var k = h.is(":data(draggable)");
				k && !b && h.draggable("destroy");
				!k && b && e._makeDraggable();
				break;
			case "position":
				e._position(b);
				break;
			case "resizable":
				(k = h.is(":data(resizable)")) && !b && h.resizable("destroy");
				k && typeof b === "string" && h.resizable("option", "handles", b);
				!k && b !== false && e._makeResizable(b);
				break;
			case "title":
				a(".ui-dialog-title", e.uiDialogTitlebar).html("" + (b || "&#160;"));
				break
			}
			a.Widget.prototype._setOption.apply(e, arguments)
		},
		_size: function() {
			var g = this.options,
				b, e, h = this.uiDialog.is(":visible");
			this.element.show().css({
				width: "auto",
				minHeight: 0,
				height: 0
			});
			if (g.minWidth > g.width) g.width = g.minWidth;
			b = this.uiDialog.css({
				height: "auto",
				width: g.width
			}).height();
			e = Math.max(0, g.minHeight - b);
			if (g.height === "auto") if (a.support.minHeight) this.element.css({
				minHeight: e,
				height: "auto"
			});
			else {
				this.uiDialog.show();
				g = this.element.css("height", "auto").height();
				h || this.uiDialog.hide();
				this.element.height(Math.max(g, e))
			} else this.element.height(Math.max(g.height - b, 0));
			this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
		}
	});
	a.extend(a.ui.dialog, {
		version: "1.8.11",
		uuid: 0,
		maxZ: 0,
		getTitleId: function(g) {
			g = g.attr("id");
			if (!g) {
				this.uuid += 1;
				g = this.uuid
			}
			return "ui-dialog-title-" + g
		},
		overlay: function(g) {
			this.$el = a.ui.dialog.overlay.create(g)
		}
	});
	a.extend(a.ui.dialog.overlay, {
		instances: [],
		oldInstances: [],
		maxZ: 0,
		events: a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(g) {
			return g + ".dialog-overlay"
		}).join(" "),
		create: function(g) {
			if (this.instances.length === 0) {
				setTimeout(function() {
					a.ui.dialog.overlay.instances.length && a(document).bind(a.ui.dialog.overlay.events, function(e) {
						if (a(e.target).zIndex() < a.ui.dialog.overlay.maxZ) return false
					})
				}, 1);
				a(document).bind("keydown.dialog-overlay", function(e) {
					if (g.options.closeOnEscape && e.keyCode && e.keyCode === a.ui.keyCode.ESCAPE) {
						g.close(e);
						e.preventDefault()
					}
				});
				a(window).bind("resize.dialog-overlay", a.ui.dialog.overlay.resize)
			}
			var b = (this.oldInstances.pop() || a("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
				width: this.width(),
				height: this.height()
			});
			a.fn.bgiframe && b.bgiframe();
			this.instances.push(b);
			return b
		},
		destroy: function(g) {
			var b = a.inArray(g, this.instances);
			b != -1 && this.oldInstances.push(this.instances.splice(b, 1)[0]);
			this.instances.length === 0 && a([document, window]).unbind(".dialog-overlay");
			g.remove();
			var e = 0;
			a.each(this.instances, function() {
				e = Math.max(e, this.css("z-index"))
			});
			this.maxZ = e
		},
		height: function() {
			var g, b;
			if (a.browser.msie && a.browser.version < 7) {
				g = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
				b = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight);
				return g < b ? a(window).height() + "px" : g + "px"
			} else return a(document).height() + "px"
		},
		width: function() {
			var g, b;
			if (a.browser.msie && a.browser.version < 7) {
				g = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
				b = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
				return g < b ? a(window).width() + "px" : g + "px"
			} else return a(document).width() + "px"
		},
		resize: function() {
			var g = a([]);
			a.each(a.ui.dialog.overlay.instances, function() {
				g = g.add(this)
			});
			g.css({
				width: 0,
				height: 0
			}).css({
				width: a.ui.dialog.overlay.width(),
				height: a.ui.dialog.overlay.height()
			})
		}
	});
	a.extend(a.ui.dialog.overlay.prototype, {
		destroy: function() {
			a.ui.dialog.overlay.destroy(this.$el)
		}
	})
})(jQuery);
(function(a) {
	a.widget("ui.slider", a.ui.mouse, {
		widgetEventPrefix: "slide",
		options: {
			animate: false,
			distance: 0,
			max: 100,
			min: 0,
			orientation: "horizontal",
			range: false,
			step: 1,
			value: 0,
			values: null
		},
		_create: function() {
			var c = this,
				d = this.options;
			this._mouseSliding = this._keySliding = false;
			this._animateOff = true;
			this._handleIndex = null;
			this._detectOrientation();
			this._mouseInit();
			this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
			d.disabled && this.element.addClass("ui-slider-disabled ui-disabled");
			this.range = a([]);
			if (d.range) {
				if (d.range === true) {
					this.range = a("<div></div>");
					if (!d.values) d.values = [this._valueMin(), this._valueMin()];
					if (d.values.length && d.values.length !== 2) d.values = [d.values[0], d.values[0]]
				} else this.range = a("<div></div>");
				this.range.appendTo(this.element).addClass("ui-slider-range");
				if (d.range === "min" || d.range === "max") this.range.addClass("ui-slider-range-" + d.range);
				this.range.addClass("ui-widget-header")
			}
			a(".ui-slider-handle", this.element).length === 0 && a("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
			if (d.values && d.values.length) for (; a(".ui-slider-handle", this.element).length < d.values.length;) a("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
			this.handles = a(".ui-slider-handle", this.element).addClass("ui-state-default ui-corner-all");
			this.handle = this.handles.eq(0);
			this.handles.add(this.range).filter("a").click(function(f) {
				f.preventDefault()
			}).hover(function() {
				d.disabled || a(this).addClass("ui-state-hover")
			}, function() {
				a(this).removeClass("ui-state-hover")
			}).focus(function() {
				if (d.disabled) a(this).blur();
				else {
					a(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
					a(this).addClass("ui-state-focus")
				}
			}).blur(function() {
				a(this).removeClass("ui-state-focus")
			});
			this.handles.each(function(f) {
				a(this).data("index.ui-slider-handle", f)
			});
			this.handles.keydown(function(f) {
				var g = true,
					b = a(this).data("index.ui-slider-handle"),
					e, h, k;
				if (!c.options.disabled) {
					switch (f.keyCode) {
					case a.ui.keyCode.HOME:
					case a.ui.keyCode.END:
					case a.ui.keyCode.PAGE_UP:
					case a.ui.keyCode.PAGE_DOWN:
					case a.ui.keyCode.UP:
					case a.ui.keyCode.RIGHT:
					case a.ui.keyCode.DOWN:
					case a.ui.keyCode.LEFT:
						g = false;
						if (!c._keySliding) {
							c._keySliding = true;
							a(this).addClass("ui-state-active");
							e = c._start(f, b);
							if (e === false) return
						}
						break
					}
					k = c.options.step;
					e = c.options.values && c.options.values.length ? (h = c.values(b)) : (h = c.value());
					switch (f.keyCode) {
					case a.ui.keyCode.HOME:
						h = c._valueMin();
						break;
					case a.ui.keyCode.END:
						h = c._valueMax();
						break;
					case a.ui.keyCode.PAGE_UP:
						h = c._trimAlignValue(e + (c._valueMax() - c._valueMin()) / 5);
						break;
					case a.ui.keyCode.PAGE_DOWN:
						h = c._trimAlignValue(e - (c._valueMax() - c._valueMin()) / 5);
						break;
					case a.ui.keyCode.UP:
					case a.ui.keyCode.RIGHT:
						if (e === c._valueMax()) return;
						h = c._trimAlignValue(e + k);
						break;
					case a.ui.keyCode.DOWN:
					case a.ui.keyCode.LEFT:
						if (e === c._valueMin()) return;
						h = c._trimAlignValue(e - k);
						break
					}
					c._slide(f, b, h);
					return g
				}
			}).keyup(function(f) {
				var g = a(this).data("index.ui-slider-handle");
				if (c._keySliding) {
					c._keySliding = false;
					c._stop(f, g);
					c._change(f, g);
					a(this).removeClass("ui-state-active")
				}
			});
			this._refreshValue();
			this._animateOff = false
		},
		destroy: function() {
			this.handles.remove();
			this.range.remove();
			this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
			this._mouseDestroy();
			return this
		},
		_mouseCapture: function(c) {
			var d = this.options,
				f, g, b, e, h;
			if (d.disabled) return false;
			this.elementSize = {
				width: this.element.outerWidth(),
				height: this.element.outerHeight()
			};
			this.elementOffset = this.element.offset();
			f = this._normValueFromMouse({
				x: c.pageX,
				y: c.pageY
			});
			g = this._valueMax() - this._valueMin() + 1;
			e = this;
			this.handles.each(function(k) {
				var l = Math.abs(f - e.values(k));
				if (g > l) {
					g = l;
					b = a(this);
					h = k
				}
			});
			if (d.range === true && this.values(1) === d.min) {
				h += 1;
				b = a(this.handles[h])
			}
			if (this._start(c, h) === false) return false;
			this._mouseSliding = true;
			e._handleIndex = h;
			b.addClass("ui-state-active").focus();
			d = b.offset();
			this._clickOffset = !a(c.target).parents().andSelf().is(".ui-slider-handle") ? {
				left: 0,
				top: 0
			} : {
				left: c.pageX - d.left - b.width() / 2,
				top: c.pageY - d.top - b.height() / 2 - (parseInt(b.css("borderTopWidth"), 10) || 0) - (parseInt(b.css("borderBottomWidth"), 10) || 0) + (parseInt(b.css("marginTop"), 10) || 0)
			};
			this.handles.hasClass("ui-state-hover") || this._slide(c, h, f);
			return this._animateOff = true
		},
		_mouseStart: function() {
			return true
		},
		_mouseDrag: function(c) {
			var d = this._normValueFromMouse({
				x: c.pageX,
				y: c.pageY
			});
			this._slide(c, this._handleIndex, d);
			return false
		},
		_mouseStop: function(c) {
			this.handles.removeClass("ui-state-active");
			this._mouseSliding = false;
			this._stop(c, this._handleIndex);
			this._change(c, this._handleIndex);
			this._clickOffset = this._handleIndex = null;
			return this._animateOff = false
		},
		_detectOrientation: function() {
			this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
		},
		_normValueFromMouse: function(c) {
			var d;
			if (this.orientation === "horizontal") {
				d = this.elementSize.width;
				c = c.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
			} else {
				d = this.elementSize.height;
				c = c.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)
			}
			d = c / d;
			if (d > 1) d = 1;
			if (d < 0) d = 0;
			if (this.orientation === "vertical") d = 1 - d;
			c = this._valueMax() - this._valueMin();
			return this._trimAlignValue(this._valueMin() + d * c)
		},
		_start: function(c, d) {
			var f = {
				handle: this.handles[d],
				value: this.value()
			};
			if (this.options.values && this.options.values.length) {
				f.value = this.values(d);
				f.values = this.values()
			}
			return this._trigger("start", c, f)
		},
		_slide: function(c, d, f) {
			var g;
			if (this.options.values && this.options.values.length) {
				g = this.values(d ? 0 : 1);
				if (this.options.values.length === 2 && this.options.range === true && (d === 0 && f > g || d === 1 && f < g)) f = g;
				if (f !== this.values(d)) {
					g = this.values();
					g[d] = f;
					c = this._trigger("slide", c, {
						handle: this.handles[d],
						value: f,
						values: g
					});
					this.values(d ? 0 : 1);
					c !== false && this.values(d, f, true)
				}
			} else if (f !== this.value()) {
				c = this._trigger("slide", c, {
					handle: this.handles[d],
					value: f
				});
				c !== false && this.value(f)
			}
		},
		_stop: function(c, d) {
			var f = {
				handle: this.handles[d],
				value: this.value()
			};
			if (this.options.values && this.options.values.length) {
				f.value = this.values(d);
				f.values = this.values()
			}
			this._trigger("stop", c, f)
		},
		_change: function(c, d) {
			if (!this._keySliding && !this._mouseSliding) {
				var f = {
					handle: this.handles[d],
					value: this.value()
				};
				if (this.options.values && this.options.values.length) {
					f.value = this.values(d);
					f.values = this.values()
				}
				this._trigger("change", c, f)
			}
		},
		value: function(c) {
			if (arguments.length) {
				this.options.value = this._trimAlignValue(c);
				this._refreshValue();
				this._change(null, 0)
			}
			return this._value()
		},
		values: function(c, d) {
			var f, g, b;
			if (arguments.length > 1) {
				this.options.values[c] = this._trimAlignValue(d);
				this._refreshValue();
				this._change(null, c)
			}
			if (arguments.length) if (a.isArray(arguments[0])) {
				f = this.options.values;
				g = arguments[0];
				for (b = 0; b < f.length; b += 1) {
					f[b] = this._trimAlignValue(g[b]);
					this._change(null, b)
				}
				this._refreshValue()
			} else return this.options.values && this.options.values.length ? this._values(c) : this.value();
			else return this._values()
		},
		_setOption: function(c, d) {
			var f, g = 0;
			if (a.isArray(this.options.values)) g = this.options.values.length;
			a.Widget.prototype._setOption.apply(this, arguments);
			switch (c) {
			case "disabled":
				if (d) {
					this.handles.filter(".ui-state-focus").blur();
					this.handles.removeClass("ui-state-hover");
					this.handles.attr("disabled", "disabled");
					this.element.addClass("ui-disabled")
				} else {
					this.handles.removeAttr("disabled");
					this.element.removeClass("ui-disabled")
				}
				break;
			case "orientation":
				this._detectOrientation();
				this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
				this._refreshValue();
				break;
			case "value":
				this._animateOff = true;
				this._refreshValue();
				this._change(null, 0);
				this._animateOff = false;
				break;
			case "values":
				this._animateOff = true;
				this._refreshValue();
				for (f = 0; f < g; f += 1) this._change(null, f);
				this._animateOff = false;
				break
			}
		},
		_value: function() {
			return this._trimAlignValue(this.options.value)
		},
		_values: function(c) {
			var d, f;
			if (arguments.length) {
				d = this.options.values[c];
				return this._trimAlignValue(d)
			} else {
				d = this.options.values.slice();
				for (f = 0; f < d.length; f += 1) d[f] = this._trimAlignValue(d[f]);
				return d
			}
		},
		_trimAlignValue: function(c) {
			if (c <= this._valueMin()) return this._valueMin();
			if (c >= this._valueMax()) return this._valueMax();
			var d = this.options.step > 0 ? this.options.step : 1,
				f = (c - this._valueMin()) % d;
			alignValue = c - f;
			if (Math.abs(f) * 2 >= d) alignValue += f > 0 ? d : -d;
			return parseFloat(alignValue.toFixed(5))
		},
		_valueMin: function() {
			return this.options.min
		},
		_valueMax: function() {
			return this.options.max
		},
		_refreshValue: function() {
			var c = this.options.range,
				d = this.options,
				f = this,
				g = !this._animateOff ? d.animate : false,
				b, e = {},
				h, k, l, o;
			if (this.options.values && this.options.values.length) this.handles.each(function(q) {
				b = (f.values(q) - f._valueMin()) / (f._valueMax() - f._valueMin()) * 100;
				e[f.orientation === "horizontal" ? "left" : "bottom"] = b + "%";
				a(this).stop(1, 1)[g ? "animate" : "css"](e, d.animate);
				if (f.options.range === true) if (f.orientation === "horizontal") {
					if (q === 0) f.range.stop(1, 1)[g ? "animate" : "css"]({
						left: b + "%"
					}, d.animate);
					if (q === 1) f.range[g ? "animate" : "css"]({
						width: b - h + "%"
					}, {
						queue: false,
						duration: d.animate
					})
				} else {
					if (q === 0) f.range.stop(1, 1)[g ? "animate" : "css"]({
						bottom: b + "%"
					}, d.animate);
					if (q === 1) f.range[g ? "animate" : "css"]({
						height: b - h + "%"
					}, {
						queue: false,
						duration: d.animate
					})
				}
				h = b
			});
			else {
				k = this.value();
				l = this._valueMin();
				o = this._valueMax();
				b = o !== l ? (k - l) / (o - l) * 100 : 0;
				e[f.orientation === "horizontal" ? "left" : "bottom"] = b + "%";
				this.handle.stop(1, 1)[g ? "animate" : "css"](e, d.animate);
				if (c === "min" && this.orientation === "horizontal") this.range.stop(1, 1)[g ? "animate" : "css"]({
					width: b + "%"
				}, d.animate);
				if (c === "max" && this.orientation === "horizontal") this.range[g ? "animate" : "css"]({
					width: 100 - b + "%"
				}, {
					queue: false,
					duration: d.animate
				});
				if (c === "min" && this.orientation === "vertical") this.range.stop(1, 1)[g ? "animate" : "css"]({
					height: b + "%"
				}, d.animate);
				if (c === "max" && this.orientation === "vertical") this.range[g ? "animate" : "css"]({
					height: 100 - b + "%"
				}, {
					queue: false,
					duration: d.animate
				})
			}
		}
	});
	a.extend(a.ui.slider, {
		version: "1.8.11"
	})
})(jQuery);
(function(a, c) {
	function d() {
		return ++g
	}
	function f() {
		return ++b
	}
	var g = 0,
		b = 0;
	a.widget("ui.tabs", {
		options: {
			add: null,
			ajaxOptions: null,
			cache: false,
			cookie: null,
			collapsible: false,
			disable: null,
			disabled: [],
			enable: null,
			event: "click",
			fx: null,
			idPrefix: "ui-tabs-",
			load: null,
			panelTemplate: "<div></div>",
			remove: null,
			select: null,
			show: null,
			spinner: "<em>Loading&#8230;</em>",
			tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
		},
		_create: function() {
			this._tabify(true)
		},
		_setOption: function(e, h) {
			if (e == "selected") this.options.collapsible && h == this.options.selected || this.select(h);
			else {
				this.options[e] = h;
				this._tabify()
			}
		},
		_tabId: function(e) {
			return e.title && e.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + d()
		},
		_sanitizeSelector: function(e) {
			return e.replace(/:/g, "\\:")
		},
		_cookie: function() {
			var e = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + f());
			return a.cookie.apply(null, [e].concat(a.makeArray(arguments)))
		},
		_ui: function(e, h) {
			return {
				tab: e,
				panel: h,
				index: this.anchors.index(e)
			}
		},
		_cleanup: function() {
			this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function() {
				var e = a(this);
				e.html(e.data("label.tabs")).removeData("label.tabs")
			})
		},
		_tabify: function(e) {
			function h(u, v) {
				u.css("display", "");
				!a.support.opacity && v.opacity && u[0].style.removeAttribute("filter")
			}
			var k = this,
				l = this.options,
				o = /^#.+/;
			this.list = this.element.find("ol,ul").eq(0);
			this.lis = a(" > li:has(a[href])", this.list);
			this.anchors = this.lis.map(function() {
				return a("a", this)[0]
			});
			this.panels = a([]);
			this.anchors.each(function(u, v) {
				var w = a(v).attr("href"),
					y = w.split("#")[0],
					C;
				if (y && (y === location.toString().split("#")[0] || (C = a("base")[0]) && y === C.href)) {
					w = v.hash;
					v.href = w
				}
				if (o.test(w)) k.panels = k.panels.add(k.element.find(k._sanitizeSelector(w)));
				else if (w && w !== "#") {
					a.data(v, "href.tabs", w);
					a.data(v, "load.tabs", w.replace(/#.*$/, ""));
					w = k._tabId(v);
					v.href = "#" + w;
					v = k.element.find("#" + w);
					if (!v.length) {
						v = a(l.panelTemplate).attr("id", w).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(k.panels[u - 1] || k.list);
						v.data("destroy.tabs", true)
					}
					k.panels = k.panels.add(v)
				} else l.disabled.push(u)
			});
			if (e) {
				this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
				this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
				this.lis.addClass("ui-state-default ui-corner-top");
				this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");
				if (l.selected === c) {
					location.hash && this.anchors.each(function(u, v) {
						if (v.hash == location.hash) {
							l.selected = u;
							return false
						}
					});
					if (typeof l.selected !== "number" && l.cookie) l.selected = parseInt(k._cookie(), 10);
					if (typeof l.selected !== "number" && this.lis.filter(".ui-tabs-selected").length) l.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"));
					l.selected = l.selected || (this.lis.length ? 0 : -1)
				} else if (l.selected === null) l.selected = -1;
				l.selected = l.selected >= 0 && this.anchors[l.selected] || l.selected < 0 ? l.selected : 0;
				l.disabled = a.unique(l.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"), function(u) {
					return k.lis.index(u)
				}))).sort();
				a.inArray(l.selected, l.disabled) != -1 && l.disabled.splice(a.inArray(l.selected, l.disabled), 1);
				this.panels.addClass("ui-tabs-hide");
				this.lis.removeClass("ui-tabs-selected ui-state-active");
				if (l.selected >= 0 && this.anchors.length) {
					k.element.find(k._sanitizeSelector(k.anchors[l.selected].hash)).removeClass("ui-tabs-hide");
					this.lis.eq(l.selected).addClass("ui-tabs-selected ui-state-active");
					k.element.queue("tabs", function() {
						k._trigger("show", null, k._ui(k.anchors[l.selected], k.element.find(k._sanitizeSelector(k.anchors[l.selected].hash))[0]))
					});
					this.load(l.selected)
				}
				a(window).bind("unload", function() {
					k.lis.add(k.anchors).unbind(".tabs");
					k.lis = k.anchors = k.panels = null
				})
			} else l.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"));
			this.element[l.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible");
			l.cookie && this._cookie(l.selected, l.cookie);
			e = 0;
			for (var q; q = this.lis[e]; e++) a(q)[a.inArray(e, l.disabled) != -1 && !a(q).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled");
			l.cache === false && this.anchors.removeData("cache.tabs");
			this.lis.add(this.anchors).unbind(".tabs");
			if (l.event !== "mouseover") {
				var j = function(u, v) {
					v.is(":not(.ui-state-disabled)") && v.addClass("ui-state-" + u)
				},
					m = function(u, v) {
						v.removeClass("ui-state-" + u)
					};
				this.lis.bind("mouseover.tabs", function() {
					j("hover", a(this))
				});
				this.lis.bind("mouseout.tabs", function() {
					m("hover", a(this))
				});
				this.anchors.bind("focus.tabs", function() {
					j("focus", a(this).closest("li"))
				});
				this.anchors.bind("blur.tabs", function() {
					m("focus", a(this).closest("li"))
				})
			}
			var p, s;
			if (l.fx) if (a.isArray(l.fx)) {
				p = l.fx[0];
				s = l.fx[1]
			} else p = s = l.fx;
			var n = s ?
			function(u, v) {
				a(u).closest("li").addClass("ui-tabs-selected ui-state-active");
				v.hide().removeClass("ui-tabs-hide").animate(s, s.duration || "normal", function() {
					h(v, s);
					k._trigger("show", null, k._ui(u, v[0]))
				})
			} : function(u, v) {
				a(u).closest("li").addClass("ui-tabs-selected ui-state-active");
				v.removeClass("ui-tabs-hide");
				k._trigger("show", null, k._ui(u, v[0]))
			},
				r = p ?
				function(u, v) {
					v.animate(p, p.duration || "normal", function() {
						k.lis.removeClass("ui-tabs-selected ui-state-active");
						v.addClass("ui-tabs-hide");
						h(v, p);
						k.element.dequeue("tabs")
					})
				} : function(u, v) {
					k.lis.removeClass("ui-tabs-selected ui-state-active");
					v.addClass("ui-tabs-hide");
					k.element.dequeue("tabs")
				};
			this.anchors.bind(l.event + ".tabs", function() {
				var u = this,
					v = a(u).closest("li"),
					w = k.panels.filter(":not(.ui-tabs-hide)"),
					y = k.element.find(k._sanitizeSelector(u.hash));
				if (v.hasClass("ui-tabs-selected") && !l.collapsible || v.hasClass("ui-state-disabled") || v.hasClass("ui-state-processing") || k.panels.filter(":animated").length || k._trigger("select", null, k._ui(this, y[0])) === false) {
					this.blur();
					return false
				}
				l.selected = k.anchors.index(this);
				k.abort();
				if (l.collapsible) if (v.hasClass("ui-tabs-selected")) {
					l.selected = -1;
					l.cookie && k._cookie(l.selected, l.cookie);
					k.element.queue("tabs", function() {
						r(u, w)
					}).dequeue("tabs");
					this.blur();
					return false
				} else if (!w.length) {
					l.cookie && k._cookie(l.selected, l.cookie);
					k.element.queue("tabs", function() {
						n(u, y)
					});
					k.load(k.anchors.index(this));
					this.blur();
					return false
				}
				l.cookie && k._cookie(l.selected, l.cookie);
				if (y.length) {
					w.length && k.element.queue("tabs", function() {
						r(u, w)
					});
					k.element.queue("tabs", function() {
						n(u, y)
					});
					k.load(k.anchors.index(this))
				} else throw "jQuery UI Tabs: Mismatching fragment identifier.";
				a.browser.msie && this.blur()
			});
			this.anchors.bind("click.tabs", function() {
				return false
			})
		},
		_getIndex: function(e) {
			if (typeof e == "string") e = this.anchors.index(this.anchors.filter("[href$=" + e + "]"));
			return e
		},
		destroy: function() {
			var e = this.options;
			this.abort();
			this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");
			this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
			this.anchors.each(function() {
				var h = a.data(this, "href.tabs");
				if (h) this.href = h;
				var k = a(this).unbind(".tabs");
				a.each(["href", "load", "cache"], function(l, o) {
					k.removeData(o + ".tabs")
				})
			});
			this.lis.unbind(".tabs").add(this.panels).each(function() {
				a.data(this, "destroy.tabs") ? a(this).remove() : a(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")
			});
			e.cookie && this._cookie(null, e.cookie);
			return this
		},
		add: function(e, h, k) {
			if (k === c) k = this.anchors.length;
			var l = this,
				o = this.options;
			h = a(o.tabTemplate.replace(/#\{href\}/g, e).replace(/#\{label\}/g, h));
			e = !e.indexOf("#") ? e.replace("#", "") : this._tabId(a("a", h)[0]);
			h.addClass("ui-state-default ui-corner-top").data("destroy.tabs", true);
			var q = l.element.find("#" + e);
			q.length || (q = a(o.panelTemplate).attr("id", e).data("destroy.tabs", true));
			q.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");
			if (k >= this.lis.length) {
				h.appendTo(this.list);
				q.appendTo(this.list[0].parentNode)
			} else {
				h.insertBefore(this.lis[k]);
				q.insertBefore(this.panels[k])
			}
			o.disabled = a.map(o.disabled, function(j) {
				return j >= k ? ++j : j
			});
			this._tabify();
			if (this.anchors.length == 1) {
				o.selected = 0;
				h.addClass("ui-tabs-selected ui-state-active");
				q.removeClass("ui-tabs-hide");
				this.element.queue("tabs", function() {
					l._trigger("show", null, l._ui(l.anchors[0], l.panels[0]))
				});
				this.load(0)
			}
			this._trigger("add", null, this._ui(this.anchors[k], this.panels[k]));
			return this
		},
		remove: function(e) {
			e = this._getIndex(e);
			var h = this.options,
				k = this.lis.eq(e).remove(),
				l = this.panels.eq(e).remove();
			if (k.hasClass("ui-tabs-selected") && this.anchors.length > 1) this.select(e + (e + 1 < this.anchors.length ? 1 : -1));
			h.disabled = a.map(a.grep(h.disabled, function(o) {
				return o != e
			}), function(o) {
				return o >= e ? --o : o
			});
			this._tabify();
			this._trigger("remove", null, this._ui(k.find("a")[0], l[0]));
			return this
		},
		enable: function(e) {
			e = this._getIndex(e);
			var h = this.options;
			if (a.inArray(e, h.disabled) != -1) {
				this.lis.eq(e).removeClass("ui-state-disabled");
				h.disabled = a.grep(h.disabled, function(k) {
					return k != e
				});
				this._trigger("enable", null, this._ui(this.anchors[e], this.panels[e]));
				return this
			}
		},
		disable: function(e) {
			e = this._getIndex(e);
			var h = this.options;
			if (e != h.selected) {
				this.lis.eq(e).addClass("ui-state-disabled");
				h.disabled.push(e);
				h.disabled.sort();
				this._trigger("disable", null, this._ui(this.anchors[e], this.panels[e]))
			}
			return this
		},
		select: function(e) {
			e = this._getIndex(e);
			if (e == -1) if (this.options.collapsible && this.options.selected != -1) e = this.options.selected;
			else return this;
			this.anchors.eq(e).trigger(this.options.event + ".tabs");
			return this
		},
		load: function(e) {
			e = this._getIndex(e);
			var h = this,
				k = this.options,
				l = this.anchors.eq(e)[0],
				o = a.data(l, "load.tabs");
			this.abort();
			if (!o || this.element.queue("tabs").length !== 0 && a.data(l, "cache.tabs")) this.element.dequeue("tabs");
			else {
				this.lis.eq(e).addClass("ui-state-processing");
				if (k.spinner) {
					var q = a("span", l);
					q.data("label.tabs", q.html()).html(k.spinner)
				}
				this.xhr = a.ajax(a.extend({}, k.ajaxOptions, {
					url: o,
					success: function(j, m) {
						h.element.find(h._sanitizeSelector(l.hash)).html(j);
						h._cleanup();
						k.cache && a.data(l, "cache.tabs", true);
						h._trigger("load", null, h._ui(h.anchors[e], h.panels[e]));
						try {
							k.ajaxOptions.success(j, m)
						} catch (p) {}
					},
					error: function(j, m) {
						h._cleanup();
						h._trigger("load", null, h._ui(h.anchors[e], h.panels[e]));
						try {
							k.ajaxOptions.error(j, m, e, l)
						} catch (p) {}
					}
				}));
				h.element.dequeue("tabs");
				return this
			}
		},
		abort: function() {
			this.element.queue([]);
			this.panels.stop(false, true);
			this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2));
			if (this.xhr) {
				this.xhr.abort();
				delete this.xhr
			}
			this._cleanup();
			return this
		},
		url: function(e, h) {
			this.anchors.eq(e).removeData("cache.tabs").data("load.tabs", h);
			return this
		},
		length: function() {
			return this.anchors.length
		}
	});
	a.extend(a.ui.tabs, {
		version: "1.8.11"
	});
	a.extend(a.ui.tabs.prototype, {
		rotation: null,
		rotate: function(e, h) {
			var k = this,
				l = this.options,
				o = k._rotate || (k._rotate = function(q) {
					clearTimeout(k.rotation);
					k.rotation = setTimeout(function() {
						var j = l.selected;
						k.select(++j < k.anchors.length ? j : 0)
					}, e);
					q && q.stopPropagation()
				});
			h = k._unrotate || (k._unrotate = !h ?
			function(q) {
				q.clientX && k.rotate(null)
			} : function() {
				t = l.selected;
				o()
			});
			if (e) {
				this.element.bind("tabsshow", o);
				this.anchors.bind(l.event + ".tabs", h);
				o()
			} else {
				clearTimeout(k.rotation);
				this.element.unbind("tabsshow", o);
				this.anchors.unbind(l.event + ".tabs", h);
				delete this._rotate;
				delete this._unrotate
			}
			return this
		}
	})
})(jQuery);

(function(a, c) {
	function d() {
		this.debug = false;
		this._curInst = null;
		this._keyEvent = false;
		this._disabledInputs = [];
		this._inDialog = this._datepickerShowing = false;
		this._mainDivId = "ui-datepicker-div";
		this._inlineClass = "ui-datepicker-inline";
		this._appendClass = "ui-datepicker-append";
		this._triggerClass = "ui-datepicker-trigger";
		this._dialogClass = "ui-datepicker-dialog";
		this._disableClass = "ui-datepicker-disabled";
		this._unselectableClass = "ui-datepicker-unselectable";
		this._currentClass = "ui-datepicker-current-day";
		this._dayOverClass = "ui-datepicker-days-cell-over";
		this.regional = [];
		this.regional[""] = {
			closeText: "Done",
			prevText: "Prev",
			nextText: "Next",
			currentText: "Today",
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			weekHeader: "Wk",
			dateFormat: "mm/dd/yy",
			firstDay: 0,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ""
		};
		this._defaults = {
			showOn: "focus",
			showAnim: "fadeIn",
			showOptions: {},
			defaultDate: null,
			appendText: "",
			buttonText: "...",
			buttonImage: "",
			buttonImageOnly: false,
			hideIfNoPrevNext: false,
			navigationAsDateFormat: false,
			gotoCurrent: false,
			changeMonth: false,
			changeYear: false,
			yearRange: "c-10:c+10",
			showOtherMonths: false,
			selectOtherMonths: false,
			showWeek: false,
			calculateWeek: this.iso8601Week,
			shortYearCutoff: "+10",
			minDate: null,
			maxDate: null,
			duration: "fast",
			beforeShowDay: null,
			beforeShow: null,
			onSelect: null,
			onChangeMonthYear: null,
			onClose: null,
			numberOfMonths: 1,
			showCurrentAtPos: 0,
			stepMonths: 1,
			stepBigMonths: 12,
			altField: "",
			altFormat: "",
			constrainInput: true,
			showButtonPanel: false,
			autoSize: false
		};
		a.extend(this._defaults, this.regional[""]);
		this.dpDiv = a('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')
	}
	function f(b, e) {
		a.extend(b, e);
		for (var h in e) if (e[h] == null || e[h] == c) b[h] = e[h];
		return b
	}
	a.extend(a.ui, {
		datepicker: {
			version: "1.8.11"
		}
	});
	var g = (new Date).getTime();
	a.extend(d.prototype, {
		markerClassName: "hasDatepicker",
		log: function() {
			this.debug && console.log.apply("", arguments)
		},
		_widgetDatepicker: function() {
			return this.dpDiv
		},
		setDefaults: function(b) {
			f(this._defaults, b || {});
			return this
		},
		_attachDatepicker: function(b, e) {
			var h = null;
			for (var k in this._defaults) {
				var l = b.getAttribute("date:" + k);
				if (l) {
					h = h || {};
					try {
						h[k] = eval(l)
					} catch (o) {
						h[k] = l
					}
				}
			}
			k = b.nodeName.toLowerCase();
			l = k == "div" || k == "span";
			if (!b.id) {
				this.uuid += 1;
				b.id = "dp" + this.uuid
			}
			var q = this._newInst(a(b), l);
			q.settings = a.extend({}, e || {}, h || {});
			if (k == "input") this._connectDatepicker(b, q);
			else l && this._inlineDatepicker(b, q)
		},
		_newInst: function(b, e) {
			return {
				id: b[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
				input: b,
				selectedDay: 0,
				selectedMonth: 0,
				selectedYear: 0,
				drawMonth: 0,
				drawYear: 0,
				inline: e,
				dpDiv: !e ? this.dpDiv : a('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')
			}
		},
		_connectDatepicker: function(b, e) {
			var h = a(b);
			e.append = a([]);
			e.trigger = a([]);
			if (!h.hasClass(this.markerClassName)) {
				this._attachments(h, e);
				h.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(k, l, o) {
					e.settings[l] = o
				}).bind("getData.datepicker", function(k, l) {
					return this._get(e, l)
				});
				this._autoSize(e);
				a.data(b, "datepicker", e)
			}
		},
		_attachments: function(b, e) {
			var h = this._get(e, "appendText"),
				k = this._get(e, "isRTL");
			e.append && e.append.remove();
			if (h) {
				e.append = a('<span class="' + this._appendClass + '">' + h + "</span>");
				b[k ? "before" : "after"](e.append)
			}
			b.unbind("focus", this._showDatepicker);
			e.trigger && e.trigger.remove();
			h = this._get(e, "showOn");
			if (h == "focus" || h == "both") b.focus(this._showDatepicker);
			if (h == "button" || h == "both") {
				h = this._get(e, "buttonText");
				var l = this._get(e, "buttonImage");
				e.trigger = a(this._get(e, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
					src: l,
					alt: h,
					title: h
				}) : a('<button type="button"></button>').addClass(this._triggerClass).html(l == "" ? h : a("<img/>").attr({
					src: l,
					alt: h,
					title: h
				})));
				b[k ? "before" : "after"](e.trigger);
				e.trigger.click(function() {
					a.datepicker._datepickerShowing && a.datepicker._lastInput == b[0] ? a.datepicker._hideDatepicker() : a.datepicker._showDatepicker(b[0]);
					return false
				})
			}
		},
		_autoSize: function(b) {
			if (this._get(b, "autoSize") && !b.inline) {
				var e = new Date(2009, 11, 20),
					h = this._get(b, "dateFormat");
				if (h.match(/[DM]/)) {
					var k = function(l) {
						for (var o = 0, q = 0, j = 0; j < l.length; j++) if (l[j].length > o) {
							o = l[j].length;
							q = j
						}
						return q
					};
					e.setMonth(k(this._get(b, h.match(/MM/) ? "monthNames" : "monthNamesShort")));
					e.setDate(k(this._get(b, h.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - e.getDay())
				}
				b.input.attr("size", this._formatDate(b, e).length)
			}
		},
		_inlineDatepicker: function(b, e) {
			var h = a(b);
			if (!h.hasClass(this.markerClassName)) {
				h.addClass(this.markerClassName).append(e.dpDiv).bind("setData.datepicker", function(k, l, o) {
					e.settings[l] = o
				}).bind("getData.datepicker", function(k, l) {
					return this._get(e, l)
				});
				a.data(b, "datepicker", e);
				this._setDate(e, this._getDefaultDate(e), true);
				this._updateDatepicker(e);
				this._updateAlternate(e);
				e.dpDiv.show()
			}
		},
		_dialogDatepicker: function(b, e, h, k, l) {
			b = this._dialogInst;
			if (!b) {
				this.uuid += 1;
				this._dialogInput = a('<input type="text" id="' + ("dp" + this.uuid) + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
				this._dialogInput.keydown(this._doKeyDown);
				a("body").append(this._dialogInput);
				b = this._dialogInst = this._newInst(this._dialogInput, false);
				b.settings = {};
				a.data(this._dialogInput[0], "datepicker", b)
			}
			f(b.settings, k || {});
			e = e && e.constructor == Date ? this._formatDate(b, e) : e;
			this._dialogInput.val(e);
			this._pos = l ? l.length ? l : [l.pageX, l.pageY] : null;
			if (!this._pos) this._pos = [document.documentElement.clientWidth / 2 - 100 + (document.documentElement.scrollLeft || document.body.scrollLeft), document.documentElement.clientHeight / 2 - 150 + (document.documentElement.scrollTop || document.body.scrollTop)];
			this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px");
			b.settings.onSelect = h;
			this._inDialog = true;
			this.dpDiv.addClass(this._dialogClass);
			this._showDatepicker(this._dialogInput[0]);
			a.blockUI && a.blockUI(this.dpDiv);
			a.data(this._dialogInput[0], "datepicker", b);
			return this
		},
		_destroyDatepicker: function(b) {
			var e = a(b),
				h = a.data(b, "datepicker");
			if (e.hasClass(this.markerClassName)) {
				var k = b.nodeName.toLowerCase();
				a.removeData(b, "datepicker");
				if (k == "input") {
					h.append.remove();
					h.trigger.remove();
					e.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)
				} else if (k == "div" || k == "span") e.removeClass(this.markerClassName).empty()
			}
		},
		_enableDatepicker: function(b) {
			var e = a(b),
				h = a.data(b, "datepicker");
			if (e.hasClass(this.markerClassName)) {
				var k = b.nodeName.toLowerCase();
				if (k == "input") {
					b.disabled = false;
					h.trigger.filter("button").each(function() {
						this.disabled = false
					}).end().filter("img").css({
						opacity: "1.0",
						cursor: ""
					})
				} else if (k == "div" || k == "span") e.children("." + this._inlineClass).children().removeClass("ui-state-disabled");
				this._disabledInputs = a.map(this._disabledInputs, function(l) {
					return l == b ? null : l
				})
			}
		},
		_disableDatepicker: function(b) {
			var e = a(b),
				h = a.data(b, "datepicker");
			if (e.hasClass(this.markerClassName)) {
				var k = b.nodeName.toLowerCase();
				if (k == "input") {
					b.disabled = true;
					h.trigger.filter("button").each(function() {
						this.disabled = true
					}).end().filter("img").css({
						opacity: "0.5",
						cursor: "default"
					})
				} else if (k == "div" || k == "span") e.children("." + this._inlineClass).children().addClass("ui-state-disabled");
				this._disabledInputs = a.map(this._disabledInputs, function(l) {
					return l == b ? null : l
				});
				this._disabledInputs[this._disabledInputs.length] = b
			}
		},
		_isDisabledDatepicker: function(b) {
			if (!b) return false;
			for (var e = 0; e < this._disabledInputs.length; e++) if (this._disabledInputs[e] == b) return true;
			return false
		},
		_getInst: function(b) {
			try {
				return a.data(b, "datepicker")
			} catch (e) {
				throw "Missing instance data for this datepicker";
			}
		},
		_optionDatepicker: function(b, e, h) {
			var k = this._getInst(b);
			if (arguments.length == 2 && typeof e == "string") return e == "defaults" ? a.extend({}, a.datepicker._defaults) : k ? e == "all" ? a.extend({}, k.settings) : this._get(k, e) : null;
			var l = e || {};
			if (typeof e == "string") {
				l = {};
				l[e] = h
			}
			if (k) {
				this._curInst == k && this._hideDatepicker();
				var o = this._getDateDatepicker(b, true),
					q = this._getMinMaxDate(k, "min"),
					j = this._getMinMaxDate(k, "max");
				f(k.settings, l);
				if (q !== null && l.dateFormat !== c && l.minDate === c) k.settings.minDate = this._formatDate(k, q);
				if (j !== null && l.dateFormat !== c && l.maxDate === c) k.settings.maxDate = this._formatDate(k, j);
				this._attachments(a(b), k);
				this._autoSize(k);
				this._setDateDatepicker(b, o);
				this._updateDatepicker(k)
			}
		},
		_changeDatepicker: function(b, e, h) {
			this._optionDatepicker(b, e, h)
		},
		_refreshDatepicker: function(b) {
			(b = this._getInst(b)) && this._updateDatepicker(b)
		},
		_setDateDatepicker: function(b, e) {
			if (b = this._getInst(b)) {
				this._setDate(b, e);
				this._updateDatepicker(b);
				this._updateAlternate(b)
			}
		},
		_getDateDatepicker: function(b, e) {
			(b = this._getInst(b)) && !b.inline && this._setDateFromField(b, e);
			return b ? this._getDate(b) : null
		},
		_doKeyDown: function(b) {
			var e = a.datepicker._getInst(b.target),
				h = true,
				k = e.dpDiv.is(".ui-datepicker-rtl");
			e._keyEvent = true;
			if (a.datepicker._datepickerShowing) switch (b.keyCode) {
			case 9:
				a.datepicker._hideDatepicker();
				h = false;
				break;
			case 13:
				h = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", e.dpDiv);
				h[0] ? a.datepicker._selectDay(b.target, e.selectedMonth, e.selectedYear, h[0]) : a.datepicker._hideDatepicker();
				return false;
			case 27:
				a.datepicker._hideDatepicker();
				break;
			case 33:
				a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(e, "stepBigMonths") : -a.datepicker._get(e, "stepMonths"), "M");
				break;
			case 34:
				a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(e, "stepBigMonths") : +a.datepicker._get(e, "stepMonths"), "M");
				break;
			case 35:
				if (b.ctrlKey || b.metaKey) a.datepicker._clearDate(b.target);
				h = b.ctrlKey || b.metaKey;
				break;
			case 36:
				if (b.ctrlKey || b.metaKey) a.datepicker._gotoToday(b.target);
				h = b.ctrlKey || b.metaKey;
				break;
			case 37:
				if (b.ctrlKey || b.metaKey) a.datepicker._adjustDate(b.target, k ? +1 : -1, "D");
				h = b.ctrlKey || b.metaKey;
				if (b.originalEvent.altKey) a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(e, "stepBigMonths") : -a.datepicker._get(e, "stepMonths"), "M");
				break;
			case 38:
				if (b.ctrlKey || b.metaKey) a.datepicker._adjustDate(b.target, -7, "D");
				h = b.ctrlKey || b.metaKey;
				break;
			case 39:
				if (b.ctrlKey || b.metaKey) a.datepicker._adjustDate(b.target, k ? -1 : +1, "D");
				h = b.ctrlKey || b.metaKey;
				if (b.originalEvent.altKey) a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(e, "stepBigMonths") : +a.datepicker._get(e, "stepMonths"), "M");
				break;
			case 40:
				if (b.ctrlKey || b.metaKey) a.datepicker._adjustDate(b.target, +7, "D");
				h = b.ctrlKey || b.metaKey;
				break;
			default:
				h = false
			} else if (b.keyCode == 36 && b.ctrlKey) a.datepicker._showDatepicker(this);
			else h = false;
			if (h) {
				b.preventDefault();
				b.stopPropagation()
			}
		},
		_doKeyPress: function(b) {
			var e = a.datepicker._getInst(b.target);
			if (a.datepicker._get(e, "constrainInput")) {
				e = a.datepicker._possibleChars(a.datepicker._get(e, "dateFormat"));
				var h = String.fromCharCode(b.charCode == c ? b.keyCode : b.charCode);
				return b.ctrlKey || b.metaKey || h < " " || !e || e.indexOf(h) > -1
			}
		},
		_doKeyUp: function(b) {
			b = a.datepicker._getInst(b.target);
			if (b.input.val() != b.lastVal) try {
				if (a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), b.input ? b.input.val() : null, a.datepicker._getFormatConfig(b))) {
					a.datepicker._setDateFromField(b);
					a.datepicker._updateAlternate(b);
					a.datepicker._updateDatepicker(b)
				}
			} catch (e) {
				a.datepicker.log(e)
			}
			return true
		},
		_showDatepicker: function(b) {
			b = b.target || b;
			if (b.nodeName.toLowerCase() != "input") b = a("input", b.parentNode)[0];
			if (!(a.datepicker._isDisabledDatepicker(b) || a.datepicker._lastInput == b)) {
				var e = a.datepicker._getInst(b);
				a.datepicker._curInst && a.datepicker._curInst != e && a.datepicker._curInst.dpDiv.stop(true, true);
				var h = a.datepicker._get(e, "beforeShow");
				f(e.settings, h ? h.apply(b, [b, e]) : {});
				e.lastVal = null;
				a.datepicker._lastInput = b;
				a.datepicker._setDateFromField(e);
				if (a.datepicker._inDialog) b.value = "";
				if (!a.datepicker._pos) {
					a.datepicker._pos = a.datepicker._findPos(b);
					a.datepicker._pos[1] += b.offsetHeight
				}
				var k = false;
				a(b).parents().each(function() {
					k |= a(this).css("position") == "fixed";
					return !k
				});
				if (k && a.browser.opera) {
					a.datepicker._pos[0] -= document.documentElement.scrollLeft;
					a.datepicker._pos[1] -= document.documentElement.scrollTop
				}
				h = {
					left: a.datepicker._pos[0],
					top: a.datepicker._pos[1]
				};
				a.datepicker._pos = null;
				e.dpDiv.empty();
				e.dpDiv.css({
					position: "absolute",
					display: "block",
					top: "-1000px"
				});
				a.datepicker._updateDatepicker(e);
				h = a.datepicker._checkOffset(e, h, k);
				e.dpDiv.css({
					position: a.datepicker._inDialog && a.blockUI ? "static" : k ? "fixed" : "absolute",
					display: "none",
					left: h.left + "px",
					top: h.top + "px"
				});
				if (!e.inline) {
					h = a.datepicker._get(e, "showAnim");
					var l = a.datepicker._get(e, "duration"),
						o = function() {
							a.datepicker._datepickerShowing = true;
							var q = e.dpDiv.find("iframe.ui-datepicker-cover");
							if (q.length) {
								var j = a.datepicker._getBorders(e.dpDiv);
								q.css({
									left: -j[0],
									top: -j[1],
									width: e.dpDiv.outerWidth(),
									height: e.dpDiv.outerHeight()
								})
							}
						};
					e.dpDiv.zIndex(a(b).zIndex() + 1);
					a.effects && a.effects[h] ? e.dpDiv.show(h, a.datepicker._get(e, "showOptions"), l, o) : e.dpDiv[h || "show"](h ? l : null, o);
					if (!h || !l) o();
					e.input.is(":visible") && !e.input.is(":disabled") && e.input.focus();
					a.datepicker._curInst = e
				}
			}
		},
		_updateDatepicker: function(b) {
			var e = this,
				h = a.datepicker._getBorders(b.dpDiv);
			b.dpDiv.empty().append(this._generateHTML(b));
			var k = b.dpDiv.find("iframe.ui-datepicker-cover");
			k.length && k.css({
				left: -h[0],
				top: -h[1],
				width: b.dpDiv.outerWidth(),
				height: b.dpDiv.outerHeight()
			});
			b.dpDiv.find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout", function() {
				a(this).removeClass("ui-state-hover");
				this.className.indexOf("ui-datepicker-prev") != -1 && a(this).removeClass("ui-datepicker-prev-hover");
				this.className.indexOf("ui-datepicker-next") != -1 && a(this).removeClass("ui-datepicker-next-hover")
			}).bind("mouseover", function() {
				if (!e._isDisabledDatepicker(b.inline ? b.dpDiv.parent()[0] : b.input[0])) {
					a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
					a(this).addClass("ui-state-hover");
					this.className.indexOf("ui-datepicker-prev") != -1 && a(this).addClass("ui-datepicker-prev-hover");
					this.className.indexOf("ui-datepicker-next") != -1 && a(this).addClass("ui-datepicker-next-hover")
				}
			}).end().find("." + this._dayOverClass + " a").trigger("mouseover").end();
			h = this._getNumberOfMonths(b);
			k = h[1];
			k > 1 ? b.dpDiv.addClass("ui-datepicker-multi-" + k).css("width", 17 * k + "em") : b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
			b.dpDiv[(h[0] != 1 || h[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
			b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
			b == a.datepicker._curInst && a.datepicker._datepickerShowing && b.input && b.input.is(":visible") && !b.input.is(":disabled") && b.input[0] != document.activeElement && b.input.focus();
			if (b.yearshtml) {
				var l = b.yearshtml;
				setTimeout(function() {
					l === b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml);
					l = b.yearshtml = null
				}, 0)
			}
		},
		_getBorders: function(b) {
			var e = function(h) {
				return {
					thin: 1,
					medium: 2,
					thick: 3
				}[h] || h
			};
			return [parseFloat(e(b.css("border-left-width"))), parseFloat(e(b.css("border-top-width")))]
		},
		_checkOffset: function(b, e, h) {
			var k = b.dpDiv.outerWidth(),
				l = b.dpDiv.outerHeight(),
				o = b.input ? b.input.outerWidth() : 0,
				q = b.input ? b.input.outerHeight() : 0,
				j = document.documentElement.clientWidth + a(document).scrollLeft(),
				m = document.documentElement.clientHeight + a(document).scrollTop();
			e.left -= this._get(b, "isRTL") ? k - o : 0;
			e.left -= h && e.left == b.input.offset().left ? a(document).scrollLeft() : 0;
			e.top -= h && e.top == b.input.offset().top + q ? a(document).scrollTop() : 0;
			e.left -= Math.min(e.left, e.left + k > j && j > k ? Math.abs(e.left + k - j) : 0);
			e.top -= Math.min(e.top, e.top + l > m && m > l ? Math.abs(l + q) : 0);
			return e
		},
		_findPos: function(b) {
			for (var e = this._get(this._getInst(b), "isRTL"); b && (b.type == "hidden" || b.nodeType != 1 || a.expr.filters.hidden(b));) b = b[e ? "previousSibling" : "nextSibling"];
			b = a(b).offset();
			return [b.left, b.top]
		},
		_hideDatepicker: function(b) {
			var e = this._curInst;
			if (!(!e || b && e != a.data(b, "datepicker"))) if (this._datepickerShowing) {
				b = this._get(e, "showAnim");
				var h = this._get(e, "duration"),
					k = function() {
						a.datepicker._tidyDialog(e);
						this._curInst = null
					};
				a.effects && a.effects[b] ? e.dpDiv.hide(b, a.datepicker._get(e, "showOptions"), h, k) : e.dpDiv[b == "slideDown" ? "slideUp" : b == "fadeIn" ? "fadeOut" : "hide"](b ? h : null, k);
				b || k();
				if (b = this._get(e, "onClose")) b.apply(e.input ? e.input[0] : null, [e.input ? e.input.val() : "", e]);
				this._datepickerShowing = false;
				this._lastInput = null;
				if (this._inDialog) {
					this._dialogInput.css({
						position: "absolute",
						left: "0",
						top: "-100px"
					});
					if (a.blockUI) {
						a.unblockUI();
						a("body").append(this.dpDiv)
					}
				}
				this._inDialog = false
			}
		},
		_tidyDialog: function(b) {
			b.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
		},
		_checkExternalClick: function(b) {
			if (a.datepicker._curInst) {
				b = a(b.target);
				b[0].id != a.datepicker._mainDivId && b.parents("#" + a.datepicker._mainDivId).length == 0 && !b.hasClass(a.datepicker.markerClassName) && !b.hasClass(a.datepicker._triggerClass) && a.datepicker._datepickerShowing && !(a.datepicker._inDialog && a.blockUI) && a.datepicker._hideDatepicker()
			}
		},
		_adjustDate: function(b, e, h) {
			b = a(b);
			var k = this._getInst(b[0]);
			if (!this._isDisabledDatepicker(b[0])) {
				this._adjustInstDate(k, e + (h == "M" ? this._get(k, "showCurrentAtPos") : 0), h);
				this._updateDatepicker(k)
			}
		},
		_gotoToday: function(b) {
			b = a(b);
			var e = this._getInst(b[0]);
			if (this._get(e, "gotoCurrent") && e.currentDay) {
				e.selectedDay = e.currentDay;
				e.drawMonth = e.selectedMonth = e.currentMonth;
				e.drawYear = e.selectedYear = e.currentYear
			} else {
				var h = new Date;
				e.selectedDay = h.getDate();
				e.drawMonth = e.selectedMonth = h.getMonth();
				e.drawYear = e.selectedYear = h.getFullYear()
			}
			this._notifyChange(e);
			this._adjustDate(b)
		},
		_selectMonthYear: function(b, e, h) {
			b = a(b);
			var k = this._getInst(b[0]);
			k._selectingMonthYear = false;
			k["selected" + (h == "M" ? "Month" : "Year")] = k["draw" + (h == "M" ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10);
			this._notifyChange(k);
			this._adjustDate(b)
		},
		_clickMonthYear: function(b) {
			var e = this._getInst(a(b)[0]);
			e.input && e._selectingMonthYear && setTimeout(function() {
				e.input.focus()
			}, 0);
			e._selectingMonthYear = !e._selectingMonthYear
		},
		_selectDay: function(b, e, h, k) {
			var l = a(b);
			if (!(a(k).hasClass(this._unselectableClass) || this._isDisabledDatepicker(l[0]))) {
				l = this._getInst(l[0]);
				l.selectedDay = l.currentDay = a("a", k).html();
				l.selectedMonth = l.currentMonth = e;
				l.selectedYear = l.currentYear = h;
				this._selectDate(b, this._formatDate(l, l.currentDay, l.currentMonth, l.currentYear))
			}
		},
		_clearDate: function(b) {
			b = a(b);
			this._getInst(b[0]);
			this._selectDate(b, "")
		},
		_selectDate: function(b, e) {
			b = this._getInst(a(b)[0]);
			e = e != null ? e : this._formatDate(b);
			b.input && b.input.val(e);
			this._updateAlternate(b);
			var h = this._get(b, "onSelect");
			if (h) h.apply(b.input ? b.input[0] : null, [e, b]);
			else b.input && b.input.trigger("change");
			if (b.inline) this._updateDatepicker(b);
			else {
				this._hideDatepicker();
				this._lastInput = b.input[0];
				typeof b.input[0] != "object" && b.input.focus();
				this._lastInput = null
			}
		},
		_updateAlternate: function(b) {
			var e = this._get(b, "altField");
			if (e) {
				var h = this._get(b, "altFormat") || this._get(b, "dateFormat"),
					k = this._getDate(b),
					l = this.formatDate(h, k, this._getFormatConfig(b));
				a(e).each(function() {
					a(this).val(l)
				})
			}
		},
		noWeekends: function(b) {
			b = b.getDay();
			return [b > 0 && b < 6, ""]
		},
		iso8601Week: function(b) {
			b = new Date(b.getTime());
			b.setDate(b.getDate() + 4 - (b.getDay() || 7));
			var e = b.getTime();
			b.setMonth(0);
			b.setDate(1);
			return Math.floor(Math.round((e - b) / 864E5) / 7) + 1
		},
		parseDate: function(b, e, h) {
			if (b == null || e == null) throw "Invalid arguments";
			e = typeof e == "object" ? e.toString() : e + "";
			if (e == "") return null;
			var k = (h ? h.shortYearCutoff : null) || this._defaults.shortYearCutoff;
			k = typeof k != "string" ? k : (new Date).getFullYear() % 100 + parseInt(k, 10);
			for (var l = (h ? h.dayNamesShort : null) || this._defaults.dayNamesShort, o = (h ? h.dayNames : null) || this._defaults.dayNames, q = (h ? h.monthNamesShort : null) || this._defaults.monthNamesShort, j = (h ? h.monthNames : null) || this._defaults.monthNames, m = h = -1, p = -1, s = -1, n = false, r = function(A) {
				(A = C + 1 < b.length && b.charAt(C + 1) == A) && C++;
				return A
			}, u = function(A) {
				var x = r(A);
				A = new RegExp("^\\d{1," + (A == "@" ? 14 : A == "!" ? 20 : A == "y" && x ? 4 : A == "o" ? 3 : 2) + "}");
				A = e.substring(y).match(A);
				if (!A) throw "Missing number at position " + y;
				y += A[0].length;
				return parseInt(A[0], 10)
			}, v = function(A, x, M) {
				A = r(A) ? M : x;
				for (x = 0; x < A.length; x++) if (e.substr(y, A[x].length).toLowerCase() == A[x].toLowerCase()) {
					y += A[x].length;
					return x + 1
				}
				throw "Unknown name at position " + y;
			}, w = function() {
				if (e.charAt(y) != b.charAt(C)) throw "Unexpected literal at position " + y;
				y++
			}, y = 0, C = 0; C < b.length; C++) if (n) if (b.charAt(C) == "'" && !r("'")) n = false;
			else w();
			else switch (b.charAt(C)) {
			case "d":
				p = u("d");
				break;
			case "D":
				v("D", l, o);
				break;
			case "o":
				s = u("o");
				break;
			case "m":
				m = u("m");
				break;
			case "M":
				m = v("M", q, j);
				break;
			case "y":
				h = u("y");
				break;
			case "@":
				var B = new Date(u("@"));
				h = B.getFullYear();
				m = B.getMonth() + 1;
				p = B.getDate();
				break;
			case "!":
				B = new Date((u("!") - this._ticksTo1970) / 1E4);
				h = B.getFullYear();
				m = B.getMonth() + 1;
				p = B.getDate();
				break;
			case "'":
				if (r("'")) w();
				else n = true;
				break;
			default:
				w()
			}
			if (h == -1) h = (new Date).getFullYear();
			else if (h < 100) h += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (h <= k ? 0 : -100);
			if (s > -1) {
				m = 1;
				p = s;
				do {
					k = this._getDaysInMonth(h, m - 1);
					if (p <= k) break;
					m++;
					p -= k
				} while (1)
			}
			B = this._daylightSavingAdjust(new Date(h, m - 1, p));
			if (B.getFullYear() != h || B.getMonth() + 1 != m || B.getDate() != p) throw "Invalid date";
			return B
		},
		ATOM: "yy-mm-dd",
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y",
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd",
		_ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1E7,
		formatDate: function(b, e, h) {
			if (!e) return "";
			var k = (h ? h.dayNamesShort : null) || this._defaults.dayNamesShort,
				l = (h ? h.dayNames : null) || this._defaults.dayNames,
				o = (h ? h.monthNamesShort : null) || this._defaults.monthNamesShort;
			h = (h ? h.monthNames : null) || this._defaults.monthNames;
			var q = function(r) {
				(r = n + 1 < b.length && b.charAt(n + 1) == r) && n++;
				return r
			},
				j = function(r, u, v) {
					u = "" + u;
					if (q(r)) for (; u.length < v;) u = "0" + u;
					return u
				},
				m = function(r, u, v, w) {
					return q(r) ? w[u] : v[u]
				},
				p = "",
				s = false;
			if (e) for (var n = 0; n < b.length; n++) if (s) if (b.charAt(n) == "'" && !q("'")) s = false;
			else p += b.charAt(n);
			else switch (b.charAt(n)) {
			case "d":
				p += j("d", e.getDate(), 2);
				break;
			case "D":
				p += m("D", e.getDay(), k, l);
				break;
			case "o":
				p += j("o", (e.getTime() - (new Date(e.getFullYear(), 0, 0)).getTime()) / 864E5, 3);
				break;
			case "m":
				p += j("m", e.getMonth() + 1, 2);
				break;
			case "M":
				p += m("M", e.getMonth(), o, h);
				break;
			case "y":
				p += q("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
				break;
			case "@":
				p += e.getTime();
				break;
			case "!":
				p += e.getTime() * 1E4 + this._ticksTo1970;
				break;
			case "'":
				if (q("'")) p += "'";
				else s = true;
				break;
			default:
				p += b.charAt(n)
			}
			return p
		},
		_possibleChars: function(b) {
			for (var e = "", h = false, k = function(o) {
				(o = l + 1 < b.length && b.charAt(l + 1) == o) && l++;
				return o
			}, l = 0; l < b.length; l++) if (h) if (b.charAt(l) == "'" && !k("'")) h = false;
			else e += b.charAt(l);
			else switch (b.charAt(l)) {
			case "d":
			case "m":
			case "y":
			case "@":
				e += "0123456789";
				break;
			case "D":
			case "M":
				return null;
			case "'":
				if (k("'")) e += "'";
				else h = true;
				break;
			default:
				e += b.charAt(l)
			}
			return e
		},
		_get: function(b, e) {
			return b.settings[e] !== c ? b.settings[e] : this._defaults[e]
		},
		_setDateFromField: function(b, e) {
			if (b.input.val() != b.lastVal) {
				var h = this._get(b, "dateFormat"),
					k = b.lastVal = b.input ? b.input.val() : null,
					l, o;
				l = o = this._getDefaultDate(b);
				var q = this._getFormatConfig(b);
				try {
					l = this.parseDate(h, k, q) || o
				} catch (j) {
					this.log(j);
					k = e ? "" : k
				}
				b.selectedDay = l.getDate();
				b.drawMonth = b.selectedMonth = l.getMonth();
				b.drawYear = b.selectedYear = l.getFullYear();
				b.currentDay = k ? l.getDate() : 0;
				b.currentMonth = k ? l.getMonth() : 0;
				b.currentYear = k ? l.getFullYear() : 0;
				this._adjustInstDate(b)
			}
		},
		_getDefaultDate: function(b) {
			return this._restrictMinMax(b, this._determineDate(b, this._get(b, "defaultDate"), new Date))
		},
		_determineDate: function(b, e, h) {
			var k = function(o) {
				var q = new Date;
				q.setDate(q.getDate() + o);
				return q
			},
				l = function(o) {
					try {
						return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), o, a.datepicker._getFormatConfig(b))
					} catch (q) {}
					var j = (o.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date,
						m = j.getFullYear(),
						p = j.getMonth();
					j = j.getDate();
					for (var s = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, n = s.exec(o); n;) {
						switch (n[2] || "d") {
						case "d":
						case "D":
							j += parseInt(n[1], 10);
							break;
						case "w":
						case "W":
							j += parseInt(n[1], 10) * 7;
							break;
						case "m":
						case "M":
							p += parseInt(n[1], 10);
							j = Math.min(j, a.datepicker._getDaysInMonth(m, p));
							break;
						case "y":
						case "Y":
							m += parseInt(n[1], 10);
							j = Math.min(j, a.datepicker._getDaysInMonth(m, p));
							break
						}
						n = s.exec(o)
					}
					return new Date(m, p, j)
				};
			if (e = (e = e == null || e === "" ? h : typeof e == "string" ? l(e) : typeof e == "number" ? isNaN(e) ? h : k(e) : new Date(e.getTime())) && e.toString() == "Invalid Date" ? h : e) {
				e.setHours(0);
				e.setMinutes(0);
				e.setSeconds(0);
				e.setMilliseconds(0)
			}
			return this._daylightSavingAdjust(e)
		},
		_daylightSavingAdjust: function(b) {
			if (!b) return null;
			b.setHours(b.getHours() > 12 ? b.getHours() + 2 : 0);
			return b
		},
		_setDate: function(b, e, h) {
			var k = !e,
				l = b.selectedMonth,
				o = b.selectedYear;
			e = this._restrictMinMax(b, this._determineDate(b, e, new Date));
			b.selectedDay = b.currentDay = e.getDate();
			b.drawMonth = b.selectedMonth = b.currentMonth = e.getMonth();
			b.drawYear = b.selectedYear = b.currentYear = e.getFullYear();
			if ((l != b.selectedMonth || o != b.selectedYear) && !h) this._notifyChange(b);
			this._adjustInstDate(b);
			if (b.input) b.input.val(k ? "" : this._formatDate(b))
		},
		_getDate: function(b) {
			return !b.currentYear || b.input && b.input.val() == "" ? null : this._daylightSavingAdjust(new Date(b.currentYear, b.currentMonth, b.currentDay))
		},
		_generateHTML: function(b) {
			var e = new Date;
			e = this._daylightSavingAdjust(new Date(e.getFullYear(), e.getMonth(), e.getDate()));
			var h = this._get(b, "isRTL"),
				k = this._get(b, "showButtonPanel"),
				l = this._get(b, "hideIfNoPrevNext"),
				o = this._get(b, "navigationAsDateFormat"),
				q = this._getNumberOfMonths(b),
				j = this._get(b, "showCurrentAtPos"),
				m = this._get(b, "stepMonths"),
				p = q[0] != 1 || q[1] != 1,
				s = this._daylightSavingAdjust(!b.currentDay ? new Date(9999, 9, 9) : new Date(b.currentYear, b.currentMonth, b.currentDay)),
				n = this._getMinMaxDate(b, "min"),
				r = this._getMinMaxDate(b, "max");
			j = b.drawMonth - j;
			var u = b.drawYear;
			if (j < 0) {
				j += 12;
				u--
			}
			if (r) {
				var v = this._daylightSavingAdjust(new Date(r.getFullYear(), r.getMonth() - q[0] * q[1] + 1, r.getDate()));
				for (v = n && v < n ? n : v; this._daylightSavingAdjust(new Date(u, j, 1)) > v;) {
					j--;
					if (j < 0) {
						j = 11;
						u--
					}
				}
			}
			b.drawMonth = j;
			b.drawYear = u;
			v = this._get(b, "prevText");
			v = !o ? v : this.formatDate(v, this._daylightSavingAdjust(new Date(u, j - m, 1)), this._getFormatConfig(b));
			v = this._canAdjustMonth(b, -1, u, j) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + g + ".datepicker._adjustDate('#" + b.id + "', -" + m + ", 'M');\" title=\"" + v + '"><span class="ui-icon ui-icon-circle-triangle-' + (h ? "e" : "w") + '">' + v + "</span></a>" : l ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + v + '"><span class="ui-icon ui-icon-circle-triangle-' + (h ? "e" : "w") + '">' + v + "</span></a>";
			var w = this._get(b, "nextText");
			w = !o ? w : this.formatDate(w, this._daylightSavingAdjust(new Date(u, j + m, 1)), this._getFormatConfig(b));
			l = this._canAdjustMonth(b, +1, u, j) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + g + ".datepicker._adjustDate('#" + b.id + "', +" + m + ", 'M');\" title=\"" + w + '"><span class="ui-icon ui-icon-circle-triangle-' + (h ? "w" : "e") + '">' + w + "</span></a>" : l ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + w + '"><span class="ui-icon ui-icon-circle-triangle-' + (h ? "w" : "e") + '">' + w + "</span></a>";
			m = this._get(b, "currentText");
			w = this._get(b, "gotoCurrent") && b.currentDay ? s : e;
			m = !o ? m : this.formatDate(m, w, this._getFormatConfig(b));
			o = !b.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + g + '.datepicker._hideDatepicker();">' + this._get(b, "closeText") + "</button>" : "";
			k = k ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (h ? o : "") + (this._isInRange(b, w) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + g + ".datepicker._gotoToday('#" + b.id + "');\">" + m + "</button>" : "") + (h ? "" : o) + "</div>" : "";
			o = parseInt(this._get(b, "firstDay"), 10);
			o = isNaN(o) ? 0 : o;
			m = this._get(b, "showWeek");
			w = this._get(b, "dayNames");
			this._get(b, "dayNamesShort");
			var y = this._get(b, "dayNamesMin"),
				C = this._get(b, "monthNames"),
				B = this._get(b, "monthNamesShort"),
				A = this._get(b, "beforeShowDay"),
				x = this._get(b, "showOtherMonths"),
				M = this._get(b, "selectOtherMonths");
			this._get(b, "calculateWeek");
			for (var L = this._getDefaultDate(b), P = "", N = 0; N < q[0]; N++) {
				for (var R = "", F = 0; F < q[1]; F++) {
					var T = this._daylightSavingAdjust(new Date(u, j, b.selectedDay)),
						G = " ui-corner-all",
						K = "";
					if (p) {
						K += '<div class="ui-datepicker-group';
						if (q[1] > 1) switch (F) {
						case 0:
							K += " ui-datepicker-group-first";
							G = " ui-corner-" + (h ? "right" : "left");
							break;
						case q[1] - 1:
							K += " ui-datepicker-group-last";
							G = " ui-corner-" + (h ? "left" : "right");
							break;
						default:
							K += " ui-datepicker-group-middle";
							G = "";
							break
						}
						K += '">'
					}
					K += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + G + '">' + (/all|left/.test(G) && N == 0 ? h ? l : v : "") + (/all|right/.test(G) && N == 0 ? h ? v : l : "") + this._generateMonthYearHeader(b, j, u, n, r, N > 0 || F > 0, C, B) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
					var O = m ? '<th class="ui-datepicker-week-col">' + this._get(b, "weekHeader") + "</th>" : "";
					for (G = 0; G < 7; G++) {
						var E = (G + o) % 7;
						O += "<th" + ((G + o + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + w[E] + '">' + y[E] + "</span></th>"
					}
					K += O + "</tr></thead><tbody>";
					O = this._getDaysInMonth(u, j);
					if (u == b.selectedYear && j == b.selectedMonth) b.selectedDay = Math.min(b.selectedDay, O);
					G = (this._getFirstDayOfMonth(u, j) - o + 7) % 7;
					O = p ? 6 : Math.ceil((G + O) / 7);
					E = this._daylightSavingAdjust(new Date(u, j, 1 - G));
					for (var z = 0; z < O; z++) {
						K += "<tr>";
						var D = !m ? "" : '<td class="ui-datepicker-week-col">' + this._get(b, "calculateWeek")(E) + "</td>";
						for (G = 0; G < 7; G++) {
							var H = A ? A.apply(b.input ? b.input[0] : null, [E]) : [true, ""],
								I = E.getMonth() != j,
								J = I && !M || !H[0] || n && E < n || r && E > r;
							D += '<td class="' + ((G + o + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (I ? " ui-datepicker-other-month" : "") + (E.getTime() == T.getTime() && j == b.selectedMonth && b._keyEvent || L.getTime() == E.getTime() && L.getTime() == T.getTime() ? " " + this._dayOverClass : "") + (J ? " " + this._unselectableClass + " ui-state-disabled" : "") + (I && !x ? "" : " " + H[1] + (E.getTime() == s.getTime() ? " " + this._currentClass : "") + (E.getTime() == e.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!I || x) && H[2] ? ' title="' + H[2] + '"' : "") + (J ? "" : ' onclick="DP_jQuery_' + g + ".datepicker._selectDay('#" + b.id + "'," + E.getMonth() + "," + E.getFullYear() + ', this);return false;"') + ">" + (I && !x ? "&#xa0;" : J ? '<span class="ui-state-default">' + E.getDate() + "</span>" : '<a class="ui-state-default' + (E.getTime() == e.getTime() ? " ui-state-highlight" : "") + (E.getTime() == s.getTime() ? " ui-state-active" : "") + (I ? " ui-priority-secondary" : "") + '" href="#">' + E.getDate() + "</a>") + "</td>";
							E.setDate(E.getDate() + 1);
							E = this._daylightSavingAdjust(E)
						}
						K += D + "</tr>"
					}
					j++;
					if (j > 11) {
						j = 0;
						u++
					}
					K += "</tbody></table>" + (p ? "</div>" + (q[0] > 0 && F == q[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : "");
					R += K
				}
				P += R
			}
			P += k + (a.browser.msie && parseInt(a.browser.version, 10) < 7 && !b.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : "");
			b._keyEvent = false;
			return P
		},
		_generateMonthYearHeader: function(b, e, h, k, l, o, q, j) {
			var m = this._get(b, "changeMonth"),
				p = this._get(b, "changeYear"),
				s = this._get(b, "showMonthAfterYear"),
				n = '<div class="ui-datepicker-title">',
				r = "";
			if (o || !m) r += '<span class="ui-datepicker-month">' + q[e] + "</span>";
			else {
				q = k && k.getFullYear() == h;
				var u = l && l.getFullYear() == h;
				r += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + g + ".datepicker._selectMonthYear('#" + b.id + "', this, 'M');\" onclick=\"DP_jQuery_" + g + ".datepicker._clickMonthYear('#" + b.id + "');\">";
				for (var v = 0; v < 12; v++) if ((!q || v >= k.getMonth()) && (!u || v <= l.getMonth())) r += '<option value="' + v + '"' + (v == e ? ' selected="selected"' : "") + ">" + j[v] + "</option>";
				r += "</select>"
			}
			s || (n += r + (o || !(m && p) ? "&#xa0;" : ""));
			b.yearshtml = "";
			if (o || !p) n += '<span class="ui-datepicker-year">' + h + "</span>";
			else {
				j = this._get(b, "yearRange").split(":");
				var w = (new Date).getFullYear();
				q = function(y) {
					y = y.match(/c[+-].*/) ? h + parseInt(y.substring(1), 10) : y.match(/[+-].*/) ? w + parseInt(y, 10) : parseInt(y, 10);
					return isNaN(y) ? w : y
				};
				e = q(j[0]);
				j = Math.max(e, q(j[1] || ""));
				e = k ? Math.max(e, k.getFullYear()) : e;
				j = l ? Math.min(j, l.getFullYear()) : j;
				for (b.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + g + ".datepicker._selectMonthYear('#" + b.id + "', this, 'Y');\" onclick=\"DP_jQuery_" + g + ".datepicker._clickMonthYear('#" + b.id + "');\">"; e <= j; e++) b.yearshtml += '<option value="' + e + '"' + (e == h ? ' selected="selected"' : "") + ">" + e + "</option>";
				b.yearshtml += "</select>";
				if (a.browser.mozilla) n += '<select class="ui-datepicker-year"><option value="' + h + '" selected="selected">' + h + "</option></select>";
				else {
					n += b.yearshtml;
					b.yearshtml = null
				}
			}
			n += this._get(b, "yearSuffix");
			if (s) n += (o || !(m && p) ? "&#xa0;" : "") + r;
			n += "</div>";
			return n
		},
		_adjustInstDate: function(b, e, h) {
			var k = b.drawYear + (h == "Y" ? e : 0),
				l = b.drawMonth + (h == "M" ? e : 0);
			e = Math.min(b.selectedDay, this._getDaysInMonth(k, l)) + (h == "D" ? e : 0);
			k = this._restrictMinMax(b, this._daylightSavingAdjust(new Date(k, l, e)));
			b.selectedDay = k.getDate();
			b.drawMonth = b.selectedMonth = k.getMonth();
			b.drawYear = b.selectedYear = k.getFullYear();
			if (h == "M" || h == "Y") this._notifyChange(b)
		},
		_restrictMinMax: function(b, e) {
			var h = this._getMinMaxDate(b, "min");
			b = this._getMinMaxDate(b, "max");
			e = h && e < h ? h : e;
			return b && e > b ? b : e
		},
		_notifyChange: function(b) {
			var e = this._get(b, "onChangeMonthYear");
			if (e) e.apply(b.input ? b.input[0] : null, [b.selectedYear, b.selectedMonth + 1, b])
		},
		_getNumberOfMonths: function(b) {
			b = this._get(b, "numberOfMonths");
			return b == null ? [1, 1] : typeof b == "number" ? [1, b] : b
		},
		_getMinMaxDate: function(b, e) {
			return this._determineDate(b, this._get(b, e + "Date"), null)
		},
		_getDaysInMonth: function(b, e) {
			return 32 - this._daylightSavingAdjust(new Date(b, e, 32)).getDate()
		},
		_getFirstDayOfMonth: function(b, e) {
			return (new Date(b, e, 1)).getDay()
		},
		_canAdjustMonth: function(b, e, h, k) {
			var l = this._getNumberOfMonths(b);
			h = this._daylightSavingAdjust(new Date(h, k + (e < 0 ? e : l[0] * l[1]), 1));
			e < 0 && h.setDate(this._getDaysInMonth(h.getFullYear(), h.getMonth()));
			return this._isInRange(b, h)
		},
		_isInRange: function(b, e) {
			var h = this._getMinMaxDate(b, "min");
			b = this._getMinMaxDate(b, "max");
			return (!h || e.getTime() >= h.getTime()) && (!b || e.getTime() <= b.getTime())
		},
		_getFormatConfig: function(b) {
			var e = this._get(b, "shortYearCutoff");
			e = typeof e != "string" ? e : (new Date).getFullYear() % 100 + parseInt(e, 10);
			return {
				shortYearCutoff: e,
				dayNamesShort: this._get(b, "dayNamesShort"),
				dayNames: this._get(b, "dayNames"),
				monthNamesShort: this._get(b, "monthNamesShort"),
				monthNames: this._get(b, "monthNames")
			}
		},
		_formatDate: function(b, e, h, k) {
			if (!e) {
				b.currentDay = b.selectedDay;
				b.currentMonth = b.selectedMonth;
				b.currentYear = b.selectedYear
			}
			e = e ? typeof e == "object" ? e : this._daylightSavingAdjust(new Date(k, h, e)) : this._daylightSavingAdjust(new Date(b.currentYear, b.currentMonth, b.currentDay));
			return this.formatDate(this._get(b, "dateFormat"), e, this._getFormatConfig(b))
		}
	});
	a.fn.datepicker = function(b) {
		if (!this.length) return this;
		if (!a.datepicker.initialized) {
			a(document).mousedown(a.datepicker._checkExternalClick).find("body").append(a.datepicker.dpDiv);
			a.datepicker.initialized = true
		}
		var e = Array.prototype.slice.call(arguments, 1);
		if (typeof b == "string" && (b == "isDisabled" || b == "getDate" || b == "widget")) return a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(e));
		if (b == "option" && arguments.length == 2 && typeof arguments[1] == "string") return a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(e));
		return this.each(function() {
			typeof b == "string" ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(e)) : a.datepicker._attachDatepicker(this, b)
		})
	};
	a.datepicker = new d;
	a.datepicker.initialized = false;
	a.datepicker.uuid = (new Date).getTime();
	a.datepicker.version = "1.8.11";
	window["DP_jQuery_" + g] = a
})(jQuery);
(function(a, c) {
	a.widget("ui.progressbar", {
		options: {
			value: 0,
			max: 100
		},
		min: 0,
		_create: function() {
			this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
				role: "progressbar",
				"aria-valuemin": this.min,
				"aria-valuemax": this.options.max,
				"aria-valuenow": this._value()
			});
			this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
			this.oldValue = this._value();
			this._refreshValue()
		},
		destroy: function() {
			this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
			this.valueDiv.remove();
			a.Widget.prototype.destroy.apply(this, arguments)
		},
		value: function(d) {
			if (d === c) return this._value();
			this._setOption("value", d);
			return this
		},
		_setOption: function(d, f) {
			if (d === "value") {
				this.options.value = f;
				this._refreshValue();
				this._value() === this.options.max && this._trigger("complete")
			}
			a.Widget.prototype._setOption.apply(this, arguments)
		},
		_value: function() {
			var d = this.options.value;
			if (typeof d !== "number") d = 0;
			return Math.min(this.options.max, Math.max(this.min, d))
		},
		_percentage: function() {
			return 100 * this._value() / this.options.max
		},
		_refreshValue: function() {
			var d = this.value(),
				f = this._percentage();
			if (this.oldValue !== d) {
				this.oldValue = d;
				this._trigger("change")
			}
			this.valueDiv.toggleClass("ui-corner-right", d === this.options.max).width(f.toFixed(0) + "%");
			this.element.attr("aria-valuenow", d)
		}
	});
	a.extend(a.ui.progressbar, {
		version: "1.8.11"
	})
})(jQuery);
jQuery.effects ||
function(a, c) {
	function d(j) {
		var m;
		if (j && j.constructor == Array && j.length == 3) return j;
		if (m = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(j)) return [parseInt(m[1], 10), parseInt(m[2], 10), parseInt(m[3], 10)];
		if (m = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(j)) return [parseFloat(m[1]) * 2.55, parseFloat(m[2]) * 2.55, parseFloat(m[3]) * 2.55];
		if (m = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(j)) return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
		if (m = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(j)) return [parseInt(m[1] + m[1], 16), parseInt(m[2] + m[2], 16), parseInt(m[3] + m[3], 16)];
		if (/rgba\(0, 0, 0, 0\)/.exec(j)) return l.transparent;
		return l[a.trim(j).toLowerCase()]
	}
	function f(j, m) {
		var p;
		do {
			p = a.curCSS(j, m);
			if (p != "" && p != "transparent" || a.nodeName(j, "body")) break;
			m = "backgroundColor"
		} while (j = j.parentNode);
		return d(p)
	}
	function g() {
		var j = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
			m = {},
			p, s;
		if (j && j.length && j[0] && j[j[0]]) for (var n = j.length; n--;) {
			p = j[n];
			if (typeof j[p] == "string") {
				s = p.replace(/\-(\w)/g, function(r, u) {
					return u.toUpperCase()
				});
				m[s] = j[p]
			}
		} else for (p in j) if (typeof j[p] === "string") m[p] = j[p];
		return m
	}
	function b(j) {
		var m, p;
		for (m in j) {
			p = j[m];
			if (p == null || a.isFunction(p) || m in q || /scrollbar/.test(m) || !/color/i.test(m) && isNaN(parseFloat(p))) delete j[m]
		}
		return j
	}
	function e(j, m) {
		var p = {
			_: 0
		},
			s;
		for (s in m) if (j[s] != m[s]) p[s] = m[s];
		return p
	}
	function h(j, m, p, s) {
		if (typeof j == "object") {
			s = m;
			p = null;
			m = j;
			j = m.effect
		}
		if (a.isFunction(m)) {
			s = m;
			p = null;
			m = {}
		}
		if (typeof m == "number" || a.fx.speeds[m]) {
			s = p;
			p = m;
			m = {}
		}
		if (a.isFunction(p)) {
			s = p;
			p = null
		}
		m = m || {};
		p = p || m.duration;
		p = a.fx.off ? 0 : typeof p == "number" ? p : p in a.fx.speeds ? a.fx.speeds[p] : a.fx.speeds._default;
		s = s || m.complete;
		return [j, m, p, s]
	}
	function k(j) {
		if (!j || typeof j === "number" || a.fx.speeds[j]) return true;
		if (typeof j === "string" && !a.effects[j]) return true;
		return false
	}
	a.effects = {};
	a.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function(j, m) {
		a.fx.step[m] = function(p) {
			if (!p.colorInit) {
				p.start = f(p.elem, m);
				p.end = d(p.end);
				p.colorInit = true
			}
			p.elem.style[m] = "rgb(" + Math.max(Math.min(parseInt(p.pos * (p.end[0] - p.start[0]) + p.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(p.pos * (p.end[1] - p.start[1]) + p.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(p.pos * (p.end[2] - p.start[2]) + p.start[2], 10), 255), 0) + ")"
		}
	});
	var l = {
		aqua: [0, 255, 255],
		azure: [240, 255, 255],
		beige: [245, 245, 220],
		black: [0, 0, 0],
		blue: [0, 0, 255],
		brown: [165, 42, 42],
		cyan: [0, 255, 255],
		darkblue: [0, 0, 139],
		darkcyan: [0, 139, 139],
		darkgrey: [169, 169, 169],
		darkgreen: [0, 100, 0],
		darkkhaki: [189, 183, 107],
		darkmagenta: [139, 0, 139],
		darkolivegreen: [85, 107, 47],
		darkorange: [255, 140, 0],
		darkorchid: [153, 50, 204],
		darkred: [139, 0, 0],
		darksalmon: [233, 150, 122],
		darkviolet: [148, 0, 211],
		fuchsia: [255, 0, 255],
		gold: [255, 215, 0],
		green: [0, 128, 0],
		indigo: [75, 0, 130],
		khaki: [240, 230, 140],
		lightblue: [173, 216, 230],
		lightcyan: [224, 255, 255],
		lightgreen: [144, 238, 144],
		lightgrey: [211, 211, 211],
		lightpink: [255, 182, 193],
		lightyellow: [255, 255, 224],
		lime: [0, 255, 0],
		magenta: [255, 0, 255],
		maroon: [128, 0, 0],
		navy: [0, 0, 128],
		olive: [128, 128, 0],
		orange: [255, 165, 0],
		pink: [255, 192, 203],
		purple: [128, 0, 128],
		violet: [128, 0, 128],
		red: [255, 0, 0],
		silver: [192, 192, 192],
		white: [255, 255, 255],
		yellow: [255, 255, 0],
		transparent: [255, 255, 255]
	},
		o = ["add", "remove", "toggle"],
		q = {
			border: 1,
			borderBottom: 1,
			borderColor: 1,
			borderLeft: 1,
			borderRight: 1,
			borderTop: 1,
			borderWidth: 1,
			margin: 1,
			padding: 1
		};
	a.effects.animateClass = function(j, m, p, s) {
		if (a.isFunction(p)) {
			s = p;
			p = null
		}
		return this.queue("fx", function() {
			var n = a(this),
				r = n.attr("style") || " ",
				u = b(g.call(this)),
				v, w = n.attr("className");
			a.each(o, function(y, C) {
				j[C] && n[C + "Class"](j[C])
			});
			v = b(g.call(this));
			n.attr("className", w);
			n.animate(e(u, v), m, p, function() {
				a.each(o, function(y, C) {
					j[C] && n[C + "Class"](j[C])
				});
				if (typeof n.attr("style") == "object") {
					n.attr("style").cssText = "";
					n.attr("style").cssText = r
				} else n.attr("style", r);
				s && s.apply(this, arguments)
			});
			u = a.queue(this);
			v = u.splice(u.length - 1, 1)[0];
			u.splice(1, 0, v);
			a.dequeue(this)
		})
	};
	a.fn.extend({
		_addClass: a.fn.addClass,
		addClass: function(j, m, p, s) {
			return m ? a.effects.animateClass.apply(this, [{
				add: j
			},
			m, p, s]) : this._addClass(j)
		},
		_removeClass: a.fn.removeClass,
		removeClass: function(j, m, p, s) {
			return m ? a.effects.animateClass.apply(this, [{
				remove: j
			},
			m, p, s]) : this._removeClass(j)
		},
		_toggleClass: a.fn.toggleClass,
		toggleClass: function(j, m, p, s, n) {
			return typeof m == "boolean" || m === c ? p ? a.effects.animateClass.apply(this, [m ? {
				add: j
			} : {
				remove: j
			},
			p, s, n]) : this._toggleClass(j, m) : a.effects.animateClass.apply(this, [{
				toggle: j
			},
			m, p, s])
		},
		switchClass: function(j, m, p, s, n) {
			return a.effects.animateClass.apply(this, [{
				add: m,
				remove: j
			},
			p, s, n])
		}
	});
	a.extend(a.effects, {
		version: "1.8.11",
		save: function(j, m) {
			for (var p = 0; p < m.length; p++) m[p] !== null && j.data("ec.storage." + m[p], j[0].style[m[p]])
		},
		restore: function(j, m) {
			for (var p = 0; p < m.length; p++) m[p] !== null && j.css(m[p], j.data("ec.storage." + m[p]))
		},
		setMode: function(j, m) {
			if (m == "toggle") m = j.is(":hidden") ? "show" : "hide";
			return m
		},
		getBaseline: function(j, m) {
			var p;
			switch (j[0]) {
			case "top":
				p = 0;
				break;
			case "middle":
				p = 0.5;
				break;
			case "bottom":
				p = 1;
				break;
			default:
				p = j[0] / m.height
			}
			switch (j[1]) {
			case "left":
				j = 0;
				break;
			case "center":
				j = 0.5;
				break;
			case "right":
				j = 1;
				break;
			default:
				j = j[1] / m.width
			}
			return {
				x: j,
				y: p
			}
		},
		createWrapper: function(j) {
			if (j.parent().is(".ui-effects-wrapper")) return j.parent();
			var m = {
				width: j.outerWidth(true),
				height: j.outerHeight(true),
				"float": j.css("float")
			},
				p = a("<div></div>").addClass("ui-effects-wrapper").css({
					fontSize: "100%",
					background: "transparent",
					border: "none",
					margin: 0,
					padding: 0
				});
			j.wrap(p);
			p = j.parent();
			if (j.css("position") == "static") {
				p.css({
					position: "relative"
				});
				j.css({
					position: "relative"
				})
			} else {
				a.extend(m, {
					position: j.css("position"),
					zIndex: j.css("z-index")
				});
				a.each(["top", "left", "bottom", "right"], function(s, n) {
					m[n] = j.css(n);
					if (isNaN(parseInt(m[n], 10))) m[n] = "auto"
				});
				j.css({
					position: "relative",
					top: 0,
					left: 0,
					right: "auto",
					bottom: "auto"
				})
			}
			return p.css(m).show()
		},
		removeWrapper: function(j) {
			if (j.parent().is(".ui-effects-wrapper")) return j.parent().replaceWith(j);
			return j
		},
		setTransition: function(j, m, p, s) {
			s = s || {};
			a.each(m, function(n, r) {
				unit = j.cssUnit(r);
				if (unit[0] > 0) s[r] = unit[0] * p + unit[1]
			});
			return s
		}
	});
	a.fn.extend({
		effect: function(j) {
			var m = h.apply(this, arguments),
				p = {
					options: m[1],
					duration: m[2],
					callback: m[3]
				};
			m = p.options.mode;
			var s = a.effects[j];
			if (a.fx.off || !s) return m ? this[m](p.duration, p.callback) : this.each(function() {
				p.callback && p.callback.call(this)
			});
			return s.call(this, p)
		},
		_show: a.fn.show,
		show: function(j) {
			if (k(j)) return this._show.apply(this, arguments);
			else {
				var m = h.apply(this, arguments);
				m[1].mode = "show";
				return this.effect.apply(this, m)
			}
		},
		_hide: a.fn.hide,
		hide: function(j) {
			if (k(j)) return this._hide.apply(this, arguments);
			else {
				var m = h.apply(this, arguments);
				m[1].mode = "hide";
				return this.effect.apply(this, m)
			}
		},
		__toggle: a.fn.toggle,
		toggle: function(j) {
			if (k(j) || typeof j === "boolean" || a.isFunction(j)) return this.__toggle.apply(this, arguments);
			else {
				var m = h.apply(this, arguments);
				m[1].mode = "toggle";
				return this.effect.apply(this, m)
			}
		},
		cssUnit: function(j) {
			var m = this.css(j),
				p = [];
			a.each(["em", "px", "%", "pt"], function(s, n) {
				if (m.indexOf(n) > 0) p = [parseFloat(m), n]
			});
			return p
		}
	});
	a.easing.jswing = a.easing.swing;
	a.extend(a.easing, {
		def: "easeOutQuad",
		swing: function(j, m, p, s, n) {
			return a.easing[a.easing.def](j, m, p, s, n)
		},
		easeInQuad: function(j, m, p, s, n) {
			return s * (m /= n) * m + p
		},
		easeOutQuad: function(j, m, p, s, n) {
			return -s * (m /= n) * (m - 2) + p
		},
		easeInOutQuad: function(j, m, p, s, n) {
			if ((m /= n / 2) < 1) return s / 2 * m * m + p;
			return -s / 2 * (--m * (m - 2) - 1) + p
		},
		easeInCubic: function(j, m, p, s, n) {
			return s * (m /= n) * m * m + p
		},
		easeOutCubic: function(j, m, p, s, n) {
			return s * ((m = m / n - 1) * m * m + 1) + p
		},
		easeInOutCubic: function(j, m, p, s, n) {
			if ((m /= n / 2) < 1) return s / 2 * m * m * m + p;
			return s / 2 * ((m -= 2) * m * m + 2) + p
		},
		easeInQuart: function(j, m, p, s, n) {
			return s * (m /= n) * m * m * m + p
		},
		easeOutQuart: function(j, m, p, s, n) {
			return -s * ((m = m / n - 1) * m * m * m - 1) + p
		},
		easeInOutQuart: function(j, m, p, s, n) {
			if ((m /= n / 2) < 1) return s / 2 * m * m * m * m + p;
			return -s / 2 * ((m -= 2) * m * m * m - 2) + p
		},
		easeInQuint: function(j, m, p, s, n) {
			return s * (m /= n) * m * m * m * m + p
		},
		easeOutQuint: function(j, m, p, s, n) {
			return s * ((m = m / n - 1) * m * m * m * m + 1) + p
		},
		easeInOutQuint: function(j, m, p, s, n) {
			if ((m /= n / 2) < 1) return s / 2 * m * m * m * m * m + p;
			return s / 2 * ((m -= 2) * m * m * m * m + 2) + p
		},
		easeInSine: function(j, m, p, s, n) {
			return -s * Math.cos(m / n * (Math.PI / 2)) + s + p
		},
		easeOutSine: function(j, m, p, s, n) {
			return s * Math.sin(m / n * (Math.PI / 2)) + p
		},
		easeInOutSine: function(j, m, p, s, n) {
			return -s / 2 * (Math.cos(Math.PI * m / n) - 1) + p
		},
		easeInExpo: function(j, m, p, s, n) {
			return m == 0 ? p : s * Math.pow(2, 10 * (m / n - 1)) + p
		},
		easeOutExpo: function(j, m, p, s, n) {
			return m == n ? p + s : s * (-Math.pow(2, -10 * m / n) + 1) + p
		},
		easeInOutExpo: function(j, m, p, s, n) {
			if (m == 0) return p;
			if (m == n) return p + s;
			if ((m /= n / 2) < 1) return s / 2 * Math.pow(2, 10 * (m - 1)) + p;
			return s / 2 * (-Math.pow(2, -10 * --m) + 2) + p
		},
		easeInCirc: function(j, m, p, s, n) {
			return -s * (Math.sqrt(1 - (m /= n) * m) - 1) + p
		},
		easeOutCirc: function(j, m, p, s, n) {
			return s * Math.sqrt(1 - (m = m / n - 1) * m) + p
		},
		easeInOutCirc: function(j, m, p, s, n) {
			if ((m /= n / 2) < 1) return -s / 2 * (Math.sqrt(1 - m * m) - 1) + p;
			return s / 2 * (Math.sqrt(1 - (m -= 2) * m) + 1) + p
		},
		easeInElastic: function(j, m, p, s, n) {
			var r = 0,
				u = s;
			if (m == 0) return p;
			if ((m /= n) == 1) return p + s;
			r || (r = n * 0.3);
			if (u < Math.abs(s)) {
				u = s;
				j = r / 4
			} else j = r / (2 * Math.PI) * Math.asin(s / u);
			return -(u * Math.pow(2, 10 * (m -= 1)) * Math.sin((m * n - j) * 2 * Math.PI / r)) + p
		},
		easeOutElastic: function(j, m, p, s, n) {
			var r = 0,
				u = s;
			if (m == 0) return p;
			if ((m /= n) == 1) return p + s;
			r || (r = n * 0.3);
			if (u < Math.abs(s)) {
				u = s;
				j = r / 4
			} else j = r / (2 * Math.PI) * Math.asin(s / u);
			return u * Math.pow(2, -10 * m) * Math.sin((m * n - j) * 2 * Math.PI / r) + s + p
		},
		easeInOutElastic: function(j, m, p, s, n) {
			var r = 0,
				u = s;
			if (m == 0) return p;
			if ((m /= n / 2) == 2) return p + s;
			r || (r = n * 0.3 * 1.5);
			if (u < Math.abs(s)) {
				u = s;
				j = r / 4
			} else j = r / (2 * Math.PI) * Math.asin(s / u);
			if (m < 1) return -0.5 * u * Math.pow(2, 10 * (m -= 1)) * Math.sin((m * n - j) * 2 * Math.PI / r) + p;
			return u * Math.pow(2, -10 * (m -= 1)) * Math.sin((m * n - j) * 2 * Math.PI / r) * 0.5 + s + p
		},
		easeInBack: function(j, m, p, s, n, r) {
			if (r == c) r = 1.70158;
			return s * (m /= n) * m * ((r + 1) * m - r) + p
		},
		easeOutBack: function(j, m, p, s, n, r) {
			if (r == c) r = 1.70158;
			return s * ((m = m / n - 1) * m * ((r + 1) * m + r) + 1) + p
		},
		easeInOutBack: function(j, m, p, s, n, r) {
			if (r == c) r = 1.70158;
			if ((m /= n / 2) < 1) return s / 2 * m * m * (((r *= 1.525) + 1) * m - r) + p;
			return s / 2 * ((m -= 2) * m * (((r *= 1.525) + 1) * m + r) + 2) + p
		},
		easeInBounce: function(j, m, p, s, n) {
			return s - a.easing.easeOutBounce(j, n - m, 0, s, n) + p
		},
		easeOutBounce: function(j, m, p, s, n) {
			return (m /= n) < 1 / 2.75 ? s * 7.5625 * m * m + p : m < 2 / 2.75 ? s * (7.5625 * (m -= 1.5 / 2.75) * m + 0.75) + p : m < 2.5 / 2.75 ? s * (7.5625 * (m -= 2.25 / 2.75) * m + 0.9375) + p : s * (7.5625 * (m -= 2.625 / 2.75) * m + 0.984375) + p
		},
		easeInOutBounce: function(j, m, p, s, n) {
			if (m < n / 2) return a.easing.easeInBounce(j, m * 2, 0, s, n) * 0.5 + p;
			return a.easing.easeOutBounce(j, m * 2 - n, 0, s, n) * 0.5 + s * 0.5 + p
		}
	})
}(jQuery);

(function(a) {
	a.effects.blind = function(c) {
		return this.queue(function() {
			var d = a(this),
				f = ["position", "top", "bottom", "left", "right"],
				g = a.effects.setMode(d, c.options.mode || "hide"),
				b = c.options.direction || "vertical";
			a.effects.save(d, f);
			d.show();
			var e = a.effects.createWrapper(d).css({
				overflow: "hidden"
			}),
				h = b == "vertical" ? "height" : "width";
			b = b == "vertical" ? e.height() : e.width();
			g == "show" && e.css(h, 0);
			var k = {};
			k[h] = g == "show" ? b : 0;
			e.animate(k, c.duration, c.options.easing, function() {
				g == "hide" && d.hide();
				a.effects.restore(d, f);
				a.effects.removeWrapper(d);
				c.callback && c.callback.apply(d[0], arguments);
				d.dequeue()
			})
		})
	}
})(jQuery);
(function(a) {
	a.effects.bounce = function(c) {
		return this.queue(function() {
			var d = a(this),
				f = ["position", "top", "bottom", "left", "right"],
				g = a.effects.setMode(d, c.options.mode || "effect"),
				b = c.options.direction || "up",
				e = c.options.distance || 20,
				h = c.options.times || 5,
				k = c.duration || 250;
			/show|hide/.test(g) && f.push("opacity");
			a.effects.save(d, f);
			d.show();
			a.effects.createWrapper(d);
			var l = b == "up" || b == "down" ? "top" : "left";
			b = b == "up" || b == "left" ? "pos" : "neg";
			e = c.options.distance || (l == "top" ? d.outerHeight({
				margin: true
			}) / 3 : d.outerWidth({
				margin: true
			}) / 3);
			if (g == "show") d.css("opacity", 0).css(l, b == "pos" ? -e : e);
			if (g == "hide") e /= h * 2;
			g != "hide" && h--;
			if (g == "show") {
				var o = {
					opacity: 1
				};
				o[l] = (b == "pos" ? "+=" : "-=") + e;
				d.animate(o, k / 2, c.options.easing);
				e /= 2;
				h--
			}
			for (o = 0; o < h; o++) {
				var q = {},
					j = {};
				q[l] = (b == "pos" ? "-=" : "+=") + e;
				j[l] = (b == "pos" ? "+=" : "-=") + e;
				d.animate(q, k / 2, c.options.easing).animate(j, k / 2, c.options.easing);
				e = g == "hide" ? e * 2 : e / 2
			}
			if (g == "hide") {
				o = {
					opacity: 0
				};
				o[l] = (b == "pos" ? "-=" : "+=") + e;
				d.animate(o, k / 2, c.options.easing, function() {
					d.hide();
					a.effects.restore(d, f);
					a.effects.removeWrapper(d);
					c.callback && c.callback.apply(this, arguments)
				})
			} else {
				q = {};
				j = {};
				q[l] = (b == "pos" ? "-=" : "+=") + e;
				j[l] = (b == "pos" ? "+=" : "-=") + e;
				d.animate(q, k / 2, c.options.easing).animate(j, k / 2, c.options.easing, function() {
					a.effects.restore(d, f);
					a.effects.removeWrapper(d);
					c.callback && c.callback.apply(this, arguments)
				})
			}
			d.queue("fx", function() {
				d.dequeue()
			});
			d.dequeue()
		})
	}
})(jQuery);
(function(a) {
	a.effects.clip = function(c) {
		return this.queue(function() {
			var d = a(this),
				f = ["position", "top", "bottom", "left", "right", "height", "width"],
				g = a.effects.setMode(d, c.options.mode || "hide"),
				b = c.options.direction || "vertical";
			a.effects.save(d, f);
			d.show();
			var e = a.effects.createWrapper(d).css({
				overflow: "hidden"
			});
			e = d[0].tagName == "IMG" ? e : d;
			var h = {
				size: b == "vertical" ? "height" : "width",
				position: b == "vertical" ? "top" : "left"
			};
			b = b == "vertical" ? e.height() : e.width();
			if (g == "show") {
				e.css(h.size, 0);
				e.css(h.position, b / 2)
			}
			var k = {};
			k[h.size] = g == "show" ? b : 0;
			k[h.position] = g == "show" ? 0 : b / 2;
			e.animate(k, {
				queue: false,
				duration: c.duration,
				easing: c.options.easing,
				complete: function() {
					g == "hide" && d.hide();
					a.effects.restore(d, f);
					a.effects.removeWrapper(d);
					c.callback && c.callback.apply(d[0], arguments);
					d.dequeue()
				}
			})
		})
	}
})(jQuery);
(function(a) {
	a.effects.drop = function(c) {
		return this.queue(function() {
			var d = a(this),
				f = ["position", "top", "bottom", "left", "right", "opacity"],
				g = a.effects.setMode(d, c.options.mode || "hide"),
				b = c.options.direction || "left";
			a.effects.save(d, f);
			d.show();
			a.effects.createWrapper(d);
			var e = b == "up" || b == "down" ? "top" : "left";
			b = b == "up" || b == "left" ? "pos" : "neg";
			var h = c.options.distance || (e == "top" ? d.outerHeight({
				margin: true
			}) / 2 : d.outerWidth({
				margin: true
			}) / 2);
			if (g == "show") d.css("opacity", 0).css(e, b == "pos" ? -h : h);
			var k = {
				opacity: g == "show" ? 1 : 0
			};
			k[e] = (g == "show" ? b == "pos" ? "+=" : "-=" : b == "pos" ? "-=" : "+=") + h;
			d.animate(k, {
				queue: false,
				duration: c.duration,
				easing: c.options.easing,
				complete: function() {
					g == "hide" && d.hide();
					a.effects.restore(d, f);
					a.effects.removeWrapper(d);
					c.callback && c.callback.apply(this, arguments);
					d.dequeue()
				}
			})
		})
	}
})(jQuery);
(function(a) {
	a.effects.explode = function(c) {
		return this.queue(function() {
			var d = c.options.pieces ? Math.round(Math.sqrt(c.options.pieces)) : 3,
				f = c.options.pieces ? Math.round(Math.sqrt(c.options.pieces)) : 3;
			c.options.mode = c.options.mode == "toggle" ? a(this).is(":visible") ? "hide" : "show" : c.options.mode;
			var g = a(this).show().css("visibility", "hidden"),
				b = g.offset();
			b.top -= parseInt(g.css("marginTop"), 10) || 0;
			b.left -= parseInt(g.css("marginLeft"), 10) || 0;
			for (var e = g.outerWidth(true), h = g.outerHeight(true), k = 0; k < d; k++) for (var l = 0; l < f; l++) g.clone().appendTo("body").wrap("<div></div>").css({
				position: "absolute",
				visibility: "visible",
				left: -l * (e / f),
				top: -k * (h / d)
			}).parent().addClass("ui-effects-explode").css({
				position: "absolute",
				overflow: "hidden",
				width: e / f,
				height: h / d,
				left: b.left + l * (e / f) + (c.options.mode == "show" ? (l - Math.floor(f / 2)) * (e / f) : 0),
				top: b.top + k * (h / d) + (c.options.mode == "show" ? (k - Math.floor(d / 2)) * (h / d) : 0),
				opacity: c.options.mode == "show" ? 0 : 1
			}).animate({
				left: b.left + l * (e / f) + (c.options.mode == "show" ? 0 : (l - Math.floor(f / 2)) * (e / f)),
				top: b.top + k * (h / d) + (c.options.mode == "show" ? 0 : (k - Math.floor(d / 2)) * (h / d)),
				opacity: c.options.mode == "show" ? 1 : 0
			}, c.duration || 500);
			setTimeout(function() {
				c.options.mode == "show" ? g.css({
					visibility: "visible"
				}) : g.css({
					visibility: "visible"
				}).hide();
				c.callback && c.callback.apply(g[0]);
				g.dequeue();
				a("div.ui-effects-explode").remove()
			}, c.duration || 500)
		})
	}
})(jQuery);
(function(a) {
	a.effects.fade = function(c) {
		return this.queue(function() {
			var d = a(this),
				f = a.effects.setMode(d, c.options.mode || "hide");
			d.animate({
				opacity: f
			}, {
				queue: false,
				duration: c.duration,
				easing: c.options.easing,
				complete: function() {
					c.callback && c.callback.apply(this, arguments);
					d.dequeue()
				}
			})
		})
	}
})(jQuery);
(function(a) {
	a.effects.fold = function(c) {
		return this.queue(function() {
			var d = a(this),
				f = ["position", "top", "bottom", "left", "right"],
				g = a.effects.setMode(d, c.options.mode || "hide"),
				b = c.options.size || 15,
				e = !! c.options.horizFirst,
				h = c.duration ? c.duration / 2 : a.fx.speeds._default / 2;
			a.effects.save(d, f);
			d.show();
			var k = a.effects.createWrapper(d).css({
				overflow: "hidden"
			}),
				l = g == "show" != e,
				o = l ? ["width", "height"] : ["height", "width"];
			l = l ? [k.width(), k.height()] : [k.height(), k.width()];
			var q = /([0-9]+)%/.exec(b);
			if (q) b = parseInt(q[1], 10) / 100 * l[g == "hide" ? 0 : 1];
			if (g == "show") k.css(e ? {
				height: 0,
				width: b
			} : {
				height: b,
				width: 0
			});
			e = {};
			q = {};
			e[o[0]] = g == "show" ? l[0] : b;
			q[o[1]] = g == "show" ? l[1] : 0;
			k.animate(e, h, c.options.easing).animate(q, h, c.options.easing, function() {
				g == "hide" && d.hide();
				a.effects.restore(d, f);
				a.effects.removeWrapper(d);
				c.callback && c.callback.apply(d[0], arguments);
				d.dequeue()
			})
		})
	}
})(jQuery);
(function(a) {
	a.effects.highlight = function(c) {
		return this.queue(function() {
			var d = a(this),
				f = ["backgroundImage", "backgroundColor", "opacity"],
				g = a.effects.setMode(d, c.options.mode || "show"),
				b = {
					backgroundColor: d.css("backgroundColor")
				};
			if (g == "hide") b.opacity = 0;
			a.effects.save(d, f);
			d.show().css({
				backgroundImage: "none",
				backgroundColor: c.options.color || "#ffff99"
			}).animate(b, {
				queue: false,
				duration: c.duration,
				easing: c.options.easing,
				complete: function() {
					g == "hide" && d.hide();
					a.effects.restore(d, f);
					g == "show" && !a.support.opacity && this.style.removeAttribute("filter");
					c.callback && c.callback.apply(this, arguments);
					d.dequeue()
				}
			})
		})
	}
})(jQuery);
(function(a) {
	a.effects.pulsate = function(c) {
		return this.queue(function() {
			var d = a(this),
				f = a.effects.setMode(d, c.options.mode || "show");
			times = (c.options.times || 5) * 2 - 1;
			duration = c.duration ? c.duration / 2 : a.fx.speeds._default / 2;
			isVisible = d.is(":visible");
			animateTo = 0;
			if (!isVisible) {
				d.css("opacity", 0).show();
				animateTo = 1
			}
			if (f == "hide" && isVisible || f == "show" && !isVisible) times--;
			for (f = 0; f < times; f++) {
				d.animate({
					opacity: animateTo
				}, duration, c.options.easing);
				animateTo = (animateTo + 1) % 2
			}
			d.animate({
				opacity: animateTo
			}, duration, c.options.easing, function() {
				animateTo == 0 && d.hide();
				c.callback && c.callback.apply(this, arguments)
			});
			d.queue("fx", function() {
				d.dequeue()
			}).dequeue()
		})
	}
})(jQuery);
(function(a) {
	a.effects.puff = function(c) {
		return this.queue(function() {
			var d = a(this),
				f = a.effects.setMode(d, c.options.mode || "hide"),
				g = parseInt(c.options.percent, 10) || 150,
				b = g / 100,
				e = {
					height: d.height(),
					width: d.width()
				};
			a.extend(c.options, {
				fade: true,
				mode: f,
				percent: f == "hide" ? g : 100,
				from: f == "hide" ? e : {
					height: e.height * b,
					width: e.width * b
				}
			});
			d.effect("scale", c.options, c.duration, c.callback);
			d.dequeue()
		})
	};
	a.effects.scale = function(c) {
		return this.queue(function() {
			var d = a(this),
				f = a.extend(true, {}, c.options),
				g = a.effects.setMode(d, c.options.mode || "effect"),
				b = parseInt(c.options.percent, 10) || (parseInt(c.options.percent, 10) == 0 ? 0 : g == "hide" ? 0 : 100),
				e = c.options.direction || "both",
				h = c.options.origin;
			if (g != "effect") {
				f.origin = h || ["middle", "center"];
				f.restore = true
			}
			h = {
				height: d.height(),
				width: d.width()
			};
			d.from = c.options.from || (g == "show" ? {
				height: 0,
				width: 0
			} : h);
			b = {
				y: e != "horizontal" ? b / 100 : 1,
				x: e != "vertical" ? b / 100 : 1
			};
			d.to = {
				height: h.height * b.y,
				width: h.width * b.x
			};
			if (c.options.fade) {
				if (g == "show") {
					d.from.opacity = 0;
					d.to.opacity = 1
				}
				if (g == "hide") {
					d.from.opacity = 1;
					d.to.opacity = 0
				}
			}
			f.from = d.from;
			f.to = d.to;
			f.mode = g;
			d.effect("size", f, c.duration, c.callback);
			d.dequeue()
		})
	};
	a.effects.size = function(c) {
		return this.queue(function() {
			var d = a(this),
				f = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
				g = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
				b = ["width", "height", "overflow"],
				e = ["fontSize"],
				h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
				k = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
				l = a.effects.setMode(d, c.options.mode || "effect"),
				o = c.options.restore || false,
				q = c.options.scale || "both",
				j = c.options.origin,
				m = {
					height: d.height(),
					width: d.width()
				};
			d.from = c.options.from || m;
			d.to = c.options.to || m;
			if (j) {
				j = a.effects.getBaseline(j, m);
				d.from.top = (m.height - d.from.height) * j.y;
				d.from.left = (m.width - d.from.width) * j.x;
				d.to.top = (m.height - d.to.height) * j.y;
				d.to.left = (m.width - d.to.width) * j.x
			}
			var p = {
				from: {
					y: d.from.height / m.height,
					x: d.from.width / m.width
				},
				to: {
					y: d.to.height / m.height,
					x: d.to.width / m.width
				}
			};
			if (q == "box" || q == "both") {
				if (p.from.y != p.to.y) {
					f = f.concat(h);
					d.from = a.effects.setTransition(d, h, p.from.y, d.from);
					d.to = a.effects.setTransition(d, h, p.to.y, d.to)
				}
				if (p.from.x != p.to.x) {
					f = f.concat(k);
					d.from = a.effects.setTransition(d, k, p.from.x, d.from);
					d.to = a.effects.setTransition(d, k, p.to.x, d.to)
				}
			}
			if (q == "content" || q == "both") if (p.from.y != p.to.y) {
				f = f.concat(e);
				d.from = a.effects.setTransition(d, e, p.from.y, d.from);
				d.to = a.effects.setTransition(d, e, p.to.y, d.to)
			}
			a.effects.save(d, o ? f : g);
			d.show();
			a.effects.createWrapper(d);
			d.css("overflow", "hidden").css(d.from);
			if (q == "content" || q == "both") {
				h = h.concat(["marginTop", "marginBottom"]).concat(e);
				k = k.concat(["marginLeft", "marginRight"]);
				b = f.concat(h).concat(k);
				d.find("*[width]").each(function() {
					child = a(this);
					o && a.effects.save(child, b);
					var s = {
						height: child.height(),
						width: child.width()
					};
					child.from = {
						height: s.height * p.from.y,
						width: s.width * p.from.x
					};
					child.to = {
						height: s.height * p.to.y,
						width: s.width * p.to.x
					};
					if (p.from.y != p.to.y) {
						child.from = a.effects.setTransition(child, h, p.from.y, child.from);
						child.to = a.effects.setTransition(child, h, p.to.y, child.to)
					}
					if (p.from.x != p.to.x) {
						child.from = a.effects.setTransition(child, k, p.from.x, child.from);
						child.to = a.effects.setTransition(child, k, p.to.x, child.to)
					}
					child.css(child.from);
					child.animate(child.to, c.duration, c.options.easing, function() {
						o && a.effects.restore(child, b)
					})
				})
			}
			d.animate(d.to, {
				queue: false,
				duration: c.duration,
				easing: c.options.easing,
				complete: function() {
					d.to.opacity === 0 && d.css("opacity", d.from.opacity);
					l == "hide" && d.hide();
					a.effects.restore(d, o ? f : g);
					a.effects.removeWrapper(d);
					c.callback && c.callback.apply(this, arguments);
					d.dequeue()
				}
			})
		})
	}
})(jQuery);
(function(a) {
	a.effects.shake = function(c) {
		return this.queue(function() {
			var d = a(this),
				f = ["position", "top", "bottom", "left", "right"];
			a.effects.setMode(d, c.options.mode || "effect");
			var g = c.options.direction || "left",
				b = c.options.distance || 20,
				e = c.options.times || 3,
				h = c.duration || c.options.duration || 140;
			a.effects.save(d, f);
			d.show();
			a.effects.createWrapper(d);
			var k = g == "up" || g == "down" ? "top" : "left",
				l = g == "up" || g == "left" ? "pos" : "neg";
			g = {};
			var o = {},
				q = {};
			g[k] = (l == "pos" ? "-=" : "+=") + b;
			o[k] = (l == "pos" ? "+=" : "-=") + b * 2;
			q[k] = (l == "pos" ? "-=" : "+=") + b * 2;
			d.animate(g, h, c.options.easing);
			for (b = 1; b < e; b++) d.animate(o, h, c.options.easing).animate(q, h, c.options.easing);
			d.animate(o, h, c.options.easing).animate(g, h / 2, c.options.easing, function() {
				a.effects.restore(d, f);
				a.effects.removeWrapper(d);
				c.callback && c.callback.apply(this, arguments)
			});
			d.queue("fx", function() {
				d.dequeue()
			});
			d.dequeue()
		})
	}
})(jQuery);
(function(a) {
	a.effects.slide = function(c) {
		return this.queue(function() {
			var d = a(this),
				f = ["position", "top", "bottom", "left", "right"],
				g = a.effects.setMode(d, c.options.mode || "show"),
				b = c.options.direction || "left";
			a.effects.save(d, f);
			d.show();
			a.effects.createWrapper(d).css({
				overflow: "hidden"
			});
			var e = b == "up" || b == "down" ? "top" : "left";
			b = b == "up" || b == "left" ? "pos" : "neg";
			var h = c.options.distance || (e == "top" ? d.outerHeight({
				margin: true
			}) : d.outerWidth({
				margin: true
			}));
			if (g == "show") d.css(e, b == "pos" ? isNaN(h) ? "-" + h : -h : h);
			var k = {};
			k[e] = (g == "show" ? b == "pos" ? "+=" : "-=" : b == "pos" ? "-=" : "+=") + h;
			d.animate(k, {
				queue: false,
				duration: c.duration,
				easing: c.options.easing,
				complete: function() {
					g == "hide" && d.hide();
					a.effects.restore(d, f);
					a.effects.removeWrapper(d);
					c.callback && c.callback.apply(this, arguments);
					d.dequeue()
				}
			})
		})
	}
})(jQuery);
(function(a) {
	a.effects.transfer = function(c) {
		return this.queue(function() {
			var d = a(this),
				f = a(c.options.to),
				g = f.offset();
			f = {
				top: g.top,
				left: g.left,
				height: f.innerHeight(),
				width: f.innerWidth()
			};
			g = d.offset();
			var b = a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(c.options.className).css({
				top: g.top,
				left: g.left,
				height: d.innerHeight(),
				width: d.innerWidth(),
				position: "absolute"
			}).animate(f, c.duration, c.options.easing, function() {
				b.remove();
				c.callback && c.callback.apply(d[0], arguments);
				d.dequeue()
			})
		})
	}
})(jQuery);
(function(a) {
	function c() {
		if (a.fn.ajaxSubmit.debug) {
			var d = "[jquery.form] " + Array.prototype.join.call(arguments, "");
			if (window.console && window.console.log) window.console.log(d);
			else window.opera && window.opera.postError && window.opera.postError(d)
		}
	}
	a.fn.ajaxSubmit = function(d) {
		function f(m) {
			function p(z) {
				return z.contentWindow ? z.contentWindow.document : z.contentDocument ? z.contentDocument : z.document
			}
			function s() {
				function z() {
					try {
						var Q = p(A).readyState;
						c("state = " + Q);
						Q.toLowerCase() == "uninitialized" && setTimeout(z, 50)
					} catch (S) {
						c("Server abort: ", S, " (", S.name, ")");
						n(N);
						L && clearTimeout(L);
						L = undefined
					}
				}
				var D = e.attr("target"),
					H = e.attr("action");
				r.setAttribute("target", C);
				g || r.setAttribute("method", "POST");
				H != w.url && r.setAttribute("action", w.url);
				if (!w.skipEncodingOverride && (!g || /post/i.test(g))) e.attr({
					encoding: "multipart/form-data",
					enctype: "multipart/form-data"
				});
				if (w.timeout) L = setTimeout(function() {
					M = true;
					n(P)
				}, w.timeout);
				var I = [];
				try {
					if (w.extraData) for (var J in w.extraData) I.push(a('<input type="hidden" name="' + J + '" />').attr("value", w.extraData[J]).appendTo(r)[0]);
					if (!w.iframeTarget) {
						B.appendTo("body");
						A.attachEvent ? A.attachEvent("onload", n) : A.addEventListener("load", n, false)
					}
					setTimeout(z, 15);
					r.submit()
				} finally {
					r.setAttribute("action", H);
					D ? r.setAttribute("target", D) : e.removeAttr("target");
					a(I).remove()
				}
			}
			function n(z) {
				if (!(x.aborted || G)) {
					try {
						F = p(A)
					} catch (D) {
						c("cannot access response document: ", D);
						z = N
					}
					if (z === P && x) x.abort("timeout");
					else if (z == N && x) x.abort("server abort");
					else {
						if (!F || F.location.href == w.iframeSrc) if (!M) return;
						A.detachEvent ? A.detachEvent("onload", n) : A.removeEventListener("load", n, false);
						z = "success";
						var H;
						try {
							if (M) throw "timeout";
							var I = w.dataType == "xml" || F.XMLDocument || a.isXMLDoc(F);
							c("isXml=" + I);
							if (!I && window.opera && (F.body == null || F.body.innerHTML == "")) if (--T) {
								c("requeing onLoad callback, DOM not available");
								setTimeout(n, 250);
								return
							}
							var J = F.body ? F.body : F.documentElement;
							x.responseText = J ? J.innerHTML : null;
							x.responseXML = F.XMLDocument ? F.XMLDocument : F;
							if (I) w.dataType = "xml";
							x.getResponseHeader = function(Y) {
								return {
									"content-type": w.dataType
								}[Y]
							};
							if (J) {
								x.status = Number(J.getAttribute("status")) || x.status;
								x.statusText = J.getAttribute("statusText") || x.statusText
							}
							var Q = (w.dataType || "").toLowerCase(),
								S = /(json|script|text)/.test(Q);
							if (S || w.textarea) {
								var U = F.getElementsByTagName("textarea")[0];
								if (U) {
									x.responseText = U.value;
									x.status = Number(U.getAttribute("status")) || x.status;
									x.statusText = U.getAttribute("statusText") || x.statusText
								} else if (S) {
									var V = F.getElementsByTagName("pre")[0],
										W = F.getElementsByTagName("body")[0];
									if (V) x.responseText = V.textContent ? V.textContent : V.innerText;
									else if (W) x.responseText = W.textContent ? W.textContent : W.innerText
								}
							} else if (Q == "xml" && !x.responseXML && x.responseText != null) x.responseXML = K(x.responseText);
							try {
								R = E(x, Q, w)
							} catch (Z) {
								z = "parsererror";
								x.error = H = Z || z
							}
						} catch (X) {
							c("error caught: ", X);
							z = "error";
							x.error = H = X || z
						}
						if (x.aborted) {
							c("upload aborted");
							z = null
						}
						if (x.status) z = x.status >= 200 && x.status < 300 || x.status === 304 ? "success" : "error";
						if (z === "success") {
							w.success && w.success.call(w.context, R, "success", x);
							y && a.event.trigger("ajaxSuccess", [x, w])
						} else if (z) {
							if (H == undefined) H = x.statusText;
							w.error && w.error.call(w.context, x, z, H);
							y && a.event.trigger("ajaxError", [x, w, H])
						}
						y && a.event.trigger("ajaxComplete", [x, w]);
						y && !--a.active && a.event.trigger("ajaxStop");
						w.complete && w.complete.call(w.context, x, z);
						G = true;
						w.timeout && clearTimeout(L);
						setTimeout(function() {
							w.iframeTarget || B.remove();
							x.responseXML = null
						}, 100)
					}
				}
			}
			var r = e[0],
				u, v, w, y, C, B, A, x, M, L;
			u = !! a.fn.prop;
			if (m) if (u) for (v = 0; v < m.length; v++) {
				u = a(r[m[v].name]);
				u.prop("disabled", false)
			} else for (v = 0; v < m.length; v++) {
				u = a(r[m[v].name]);
				u.removeAttr("disabled")
			}
			if (a(":input[name=submit],:input[id=submit]", r).length) alert('Error: Form elements must not have name or id of "submit".');
			else {
				w = a.extend(true, {}, a.ajaxSettings, d);
				w.context = w.context || w;
				C = "jqFormIO" + (new Date).getTime();
				if (w.iframeTarget) {
					B = a(w.iframeTarget);
					u = B.attr("name");
					if (u == null) B.attr("name", C);
					else C = u
				} else {
					B = a('<iframe name="' + C + '" src="' + w.iframeSrc + '" />');
					B.css({
						position: "absolute",
						top: "-1000px",
						left: "-1000px"
					})
				}
				A = B[0];
				x = {
					aborted: 0,
					responseText: null,
					responseXML: null,
					status: 0,
					statusText: "n/a",
					getAllResponseHeaders: function() {},
					getResponseHeader: function() {},
					setRequestHeader: function() {},
					abort: function(z) {
						var D = z === "timeout" ? "timeout" : "aborted";
						c("aborting upload... " + D);
						this.aborted = 1;
						B.attr("src", w.iframeSrc);
						x.error = D;
						w.error && w.error.call(w.context, x, D, z);
						y && a.event.trigger("ajaxError", [x, w, D]);
						w.complete && w.complete.call(w.context, x, D)
					}
				};
				(y = w.global) && !a.active++ && a.event.trigger("ajaxStart");
				y && a.event.trigger("ajaxSend", [x, w]);
				if (w.beforeSend && w.beforeSend.call(w.context, x, w) === false) w.global && a.active--;
				else if (!x.aborted) {
					if (m = r.clk) if ((u = m.name) && !m.disabled) {
						w.extraData = w.extraData || {};
						w.extraData[u] = m.value;
						if (m.type == "image") {
							w.extraData[u + ".x"] = r.clk_x;
							w.extraData[u + ".y"] = r.clk_y
						}
					}
					var P = 1,
						N = 2;
					w.forceSync ? s() : setTimeout(s, 10);
					var R, F, T = 50,
						G, K = a.parseXML ||
						function(z, D) {
							if (window.ActiveXObject) {
								D = new ActiveXObject("Microsoft.XMLDOM");
								D.async = "false";
								D.loadXML(z)
							} else D = (new DOMParser).parseFromString(z, "text/xml");
							return D && D.documentElement && D.documentElement.nodeName != "parsererror" ? D : null
						},
						O = a.parseJSON ||
						function(z) {
							return window.eval("(" + z + ")")
						},
						E = function(z, D, H) {
							var I = z.getResponseHeader("content-type") || "",
								J = D === "xml" || !D && I.indexOf("xml") >= 0;
							z = J ? z.responseXML : z.responseText;
							J && z.documentElement.nodeName === "parsererror" && a.error && a.error("parsererror");
							if (H && H.dataFilter) z = H.dataFilter(z, D);
							if (typeof z === "string") if (D === "json" || !D && I.indexOf("json") >= 0) z = O(z);
							else if (D === "script" || !D && I.indexOf("javascript") >= 0) a.globalEval(z);
							return z
						}
				}
			}
		}
		if (!this.length) {
			c("ajaxSubmit: skipping submit process - no element selected");
			return this
		}
		var g, b, e = this;
		if (typeof d == "function") d = {
			success: d
		};
		g = this.attr("method");
		b = this.attr("action");
		if (b = (b = typeof b === "string" ? a.trim(b) : "") || window.location.href || "") b = (b.match(/^([^#]+)/) || [])[1];
		d = a.extend(true, {
			url: b,
			success: a.ajaxSettings.success,
			type: g || "GET",
			iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
		}, d);
		b = {};
		this.trigger("form-pre-serialize", [this, d, b]);
		if (b.veto) {
			c("ajaxSubmit: submit vetoed via form-pre-serialize trigger");
			return this
		}
		if (d.beforeSerialize && d.beforeSerialize(this, d) === false) {
			c("ajaxSubmit: submit aborted via beforeSerialize callback");
			return this
		}
		var h, k, l = this.formToArray(d.semantic);
		if (d.data) {
			d.extraData = d.data;
			for (h in d.data) if (a.isArray(d.data[h])) for (var o in d.data[h]) l.push({
				name: h,
				value: d.data[h][o]
			});
			else {
				k = d.data[h];
				k = a.isFunction(k) ? k() : k;
				l.push({
					name: h,
					value: k
				})
			}
		}
		if (d.beforeSubmit && d.beforeSubmit(l, this, d) === false) {
			c("ajaxSubmit: submit aborted via beforeSubmit callback");
			return this
		}
		this.trigger("form-submit-validate", [l, this, d, b]);
		if (b.veto) {
			c("ajaxSubmit: submit vetoed via form-submit-validate trigger");
			return this
		}
		h = a.param(l);
		if (d.type.toUpperCase() == "GET") {
			d.url += (d.url.indexOf("?") >= 0 ? "&" : "?") + h;
			d.data = null
		} else d.data = h;
		var q = [];
		d.resetForm && q.push(function() {
			e.resetForm()
		});
		d.clearForm && q.push(function() {
			e.clearForm()
		});
		if (!d.dataType && d.target) {
			var j = d.success ||
			function() {};
			q.push(function(m) {
				var p = d.replaceTarget ? "replaceWith" : "html";
				a(d.target)[p](m).each(j, arguments)
			})
		} else d.success && q.push(d.success);
		d.success = function(m, p, s) {
			for (var n = d.context || d, r = 0, u = q.length; r < u; r++) q[r].apply(n, [m, p, s || e, e])
		};
		h = a("input:file", this).length > 0;
		o = e.attr("enctype") == "multipart/form-data" || e.attr("encoding") == "multipart/form-data";
		if (d.iframe !== false && (h || d.iframe || o)) d.closeKeepAlive ? a.get(d.closeKeepAlive, function() {
			f(l)
		}) : f(l);
		else {
			if (a.browser.msie && g == "get" && typeof d.type === "undefined") {
				h = e[0].getAttribute("method");
				if (typeof h === "string") d.type = h
			}
			a.ajax(d)
		}
		this.trigger("form-submit-notify", [this, d]);
		return this
	};
	a.fn.ajaxForm = function(d) {
		if (this.length === 0) {
			var f = {
				s: this.selector,
				c: this.context
			};
			if (!a.isReady && f.s) {
				c("DOM not ready, queuing ajaxForm");
				a(function() {
					a(f.s, f.c).ajaxForm(d)
				});
				return this
			}
			c("terminating; zero elements found by selector" + (a.isReady ? "" : " (DOM not ready)"));
			return this
		}
		return this.ajaxFormUnbind().bind("submit.form-plugin", function(g) {
			if (!g.isDefaultPrevented()) {
				g.preventDefault();
				a(this).ajaxSubmit(d)
			}
		}).bind("click.form-plugin", function(g) {
			var b = g.target,
				e = a(b);
			if (!e.is(":submit,input:image")) {
				b = e.closest(":submit");
				if (b.length == 0) return;
				b = b[0]
			}
			var h = this;
			h.clk = b;
			if (b.type == "image") if (g.offsetX != undefined) {
				h.clk_x = g.offsetX;
				h.clk_y = g.offsetY
			} else if (typeof a.fn.offset == "function") {
				e = e.offset();
				h.clk_x = g.pageX - e.left;
				h.clk_y = g.pageY - e.top
			} else {
				h.clk_x = g.pageX - b.offsetLeft;
				h.clk_y = g.pageY - b.offsetTop
			}
			setTimeout(function() {
				h.clk = h.clk_x = h.clk_y = null
			}, 100)
		})
	};
	a.fn.ajaxFormUnbind = function() {
		return this.unbind("submit.form-plugin click.form-plugin")
	};
	a.fn.formToArray = function(d) {
		var f = [];
		if (this.length === 0) return f;
		var g = this[0],
			b = d ? g.getElementsByTagName("*") : g.elements;
		if (!b) return f;
		var e, h, k, l, o, q;
		e = 0;
		for (o = b.length; e < o; e++) {
			h = b[e];
			if (k = h.name) if (d && g.clk && h.type == "image") {
				if (!h.disabled && g.clk == h) {
					f.push({
						name: k,
						value: a(h).val()
					});
					f.push({
						name: k + ".x",
						value: g.clk_x
					}, {
						name: k + ".y",
						value: g.clk_y
					})
				}
			} else if ((l = a.fieldValue(h, true)) && l.constructor == Array) {
				h = 0;
				for (q = l.length; h < q; h++) f.push({
					name: k,
					value: l[h]
				})
			} else l !== null && typeof l != "undefined" && f.push({
				name: k,
				value: l
			})
		}
		if (!d && g.clk) {
			d = a(g.clk);
			b = d[0];
			if ((k = b.name) && !b.disabled && b.type == "image") {
				f.push({
					name: k,
					value: d.val()
				});
				f.push({
					name: k + ".x",
					value: g.clk_x
				}, {
					name: k + ".y",
					value: g.clk_y
				})
			}
		}
		return f
	};
	a.fn.formSerialize = function(d) {
		return a.param(this.formToArray(d))
	};
	a.fn.fieldSerialize = function(d) {
		var f = [];
		this.each(function() {
			var g = this.name;
			if (g) {
				var b = a.fieldValue(this, d);
				if (b && b.constructor == Array) for (var e = 0, h = b.length; e < h; e++) f.push({
					name: g,
					value: b[e]
				});
				else b !== null && typeof b != "undefined" && f.push({
					name: this.name,
					value: b
				})
			}
		});
		return a.param(f)
	};
	a.fn.fieldValue = function(d) {
		for (var f = [], g = 0, b = this.length; g < b; g++) {
			var e = a.fieldValue(this[g], d);
			e === null || typeof e == "undefined" || e.constructor == Array && !e.length || (e.constructor == Array ? a.merge(f, e) : f.push(e))
		}
		return f
	};
	a.fieldValue = function(d, f) {
		var g = d.name,
			b = d.type,
			e = d.tagName.toLowerCase();
		if (f === undefined) f = true;
		if (f && (!g || d.disabled || b == "reset" || b == "button" || (b == "checkbox" || b == "radio") && !d.checked || (b == "submit" || b == "image") && d.form && d.form.clk != d || e == "select" && d.selectedIndex == -1)) return null;
		if (e == "select") {
			e = d.selectedIndex;
			if (e < 0) return null;
			f = [];
			d = d.options;
			g = (b = b == "select-one") ? e + 1 : d.length;
			for (e = b ? e : 0; e < g; e++) {
				var h = d[e];
				if (h.selected) {
					var k = h.value;
					k || (k = h.attributes && h.attributes.value && !h.attributes.value.specified ? h.text : h.value);
					if (b) return k;
					f.push(k)
				}
			}
			return f
		}
		return a(d).val()
	};
	a.fn.clearForm = function() {
		return this.each(function() {
			a("input,select,textarea", this).clearFields()
		})
	};
	a.fn.clearFields = a.fn.clearInputs = function() {
		var d = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
		return this.each(function() {
			var f = this.type,
				g = this.tagName.toLowerCase();
			if (d.test(f) || g == "textarea") this.value = "";
			else if (f == "checkbox" || f == "radio") this.checked = false;
			else if (g == "select") this.selectedIndex = -1
		})
	};
	a.fn.resetForm = function() {
		return this.each(function() {
			if (typeof this.reset == "function" || typeof this.reset == "object" && !this.reset.nodeType) this.reset()
		})
	};
	a.fn.enable = function(d) {
		if (d === undefined) d = true;
		return this.each(function() {
			this.disabled = !d
		})
	};
	a.fn.selected = function(d) {
		if (d === undefined) d = true;
		return this.each(function() {
			var f = this.type;
			if (f == "checkbox" || f == "radio") this.checked = d;
			else if (this.tagName.toLowerCase() == "option") {
				f = a(this).parent("select");
				d && f[0] && f[0].type == "select-one" && f.find("option").selected(false);
				this.selected = d
			}
		})
	};
	a.fn.ajaxSubmit.debug = false
})(jQuery);
eval(function(a, c, d, f, g, b) {
	g = function(e) {
		return (e < c ? "" : g(parseInt(e / c))) + ((e %= c) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
	};
	if (!"".replace(/^/, String)) {
		for (; d--;) b[g(d)] = f[d] || g(d);
		f = [function(e) {
			return b[e]
		}];
		g = function() {
			return "\\w+"
		};
		d = 1
	}
	for (; d--;) if (f[d]) a = a.replace(new RegExp("\\b" + g(d) + "\\b", "g"), f[d]);
	return a
}("(9($){$.1s.A=9(o){z 4.14(9(){2H r(4,o)})};8 q={W:F,23:1,1G:1,u:7,15:3,16:7,1H:'2I',24:'2J',1i:0,B:7,1j:7,1I:7,25:7,26:7,27:7,28:7,29:7,2a:7,2b:7,1J:'<N></N>',1K:'<N></N>',2c:'2d',2e:'2d',1L:7,1M:7};$.A=9(e,o){4.5=$.17({},q,o||{});4.Q=F;4.D=7;4.H=7;4.t=7;4.R=7;4.S=7;4.O=!4.5.W?'1N':'2f';4.E=!4.5.W?'2g':'2h';8 a='',1d=e.J.1d(' ');1k(8 i=0;i<1d.K;i++){6(1d[i].2i('A-2j')!=-1){$(e).1t(1d[i]);8 a=1d[i];1l}}6(e.2k=='2K'||e.2k=='2L'){4.t=$(e);4.D=4.t.18();6(4.D.1m('A-H')){6(!4.D.18().1m('A-D'))4.D=4.D.B('<N></N>');4.D=4.D.18()}X 6(!4.D.1m('A-D'))4.D=4.t.B('<N></N>').18()}X{4.D=$(e);4.t=$(e).2M('>2l,>2m,N>2l,N>2m')}6(a!=''&&4.D.18()[0].J.2i('A-2j')==-1)4.D.B('<N 2N=\" '+a+'\"></N>');4.H=4.t.18();6(!4.H.K||!4.H.1m('A-H'))4.H=4.t.B('<N></N>').18();4.S=$('.A-11',4.D);6(4.S.u()==0&&4.5.1K!=7)4.S=4.H.1u(4.5.1K).11();4.S.V(4.J('A-11'));4.R=$('.A-19',4.D);6(4.R.u()==0&&4.5.1J!=7)4.R=4.H.1u(4.5.1J).11();4.R.V(4.J('A-19'));4.H.V(4.J('A-H'));4.t.V(4.J('A-t'));4.D.V(4.J('A-D'));8 b=4.5.16!=7?1n.1O(4.1o()/4.5.16):7;8 c=4.t.2O('1v');8 d=4;6(c.u()>0){8 f=0,i=4.5.1G;c.14(9(){d.1P(4,i++);f+=d.T(4,b)});4.t.y(4.O,f+'U');6(!o||o.u===L)4.5.u=c.u()}4.D.y('1w','1x');4.R.y('1w','1x');4.S.y('1w','1x');4.2n=9(){d.19()};4.2o=9(){d.11()};4.1Q=9(){d.2p()};6(4.5.1j!=7)4.5.1j(4,'2q');6($.2r.2s){4.1e(F,F);$(2t).1y('2P',9(){d.1z()})}X 4.1z()};8 r=$.A;r.1s=r.2Q={A:'0.2.3'};r.1s.17=r.17=$.17;r.1s.17({1z:9(){4.C=7;4.G=7;4.Y=7;4.12=7;4.1a=F;4.1f=7;4.P=7;4.Z=F;6(4.Q)z;4.t.y(4.E,4.1A(4.5.1G)+'U');8 p=4.1A(4.5.23);4.Y=4.12=7;4.1p(p,F);$(2t).1R('2u',4.1Q).1y('2u',4.1Q)},2v:9(){4.t.2w();4.t.y(4.E,'2R');4.t.y(4.O,'2S');6(4.5.1j!=7)4.5.1j(4,'2v');4.1z()},2p:9(){6(4.P!=7&&4.Z)4.t.y(4.E,r.I(4.t.y(4.E))+4.P);4.P=7;4.Z=F;6(4.5.1I!=7)4.5.1I(4);6(4.5.16!=7){8 a=4;8 b=1n.1O(4.1o()/4.5.16),O=0,E=0;$('1v',4.t).14(9(i){O+=a.T(4,b);6(i+1<a.C)E=O});4.t.y(4.O,O+'U');4.t.y(4.E,-E+'U')}4.15(4.C,F)},2T:9(){4.Q=1g;4.1e()},2U:9(){4.Q=F;4.1e()},u:9(s){6(s!=L){4.5.u=s;6(!4.Q)4.1e()}z 4.5.u},2V:9(i,a){6(a==L||!a)a=i;6(4.5.u!==7&&a>4.5.u)a=4.5.u;1k(8 j=i;j<=a;j++){8 e=4.M(j);6(!e.K||e.1m('A-1b-1B'))z F}z 1g},M:9(i){z $('.A-1b-'+i,4.t)},2x:9(i,s){8 e=4.M(i),1S=0,2x=0;6(e.K==0){8 c,e=4.1C(i),j=r.I(i);1q(c=4.M(--j)){6(j<=0||c.K){j<=0?4.t.2y(e):c.1T(e);1l}}}X 1S=4.T(e);e.1t(4.J('A-1b-1B'));1U s=='2W'?e.2X(s):e.2w().2Y(s);8 a=4.5.16!=7?1n.1O(4.1o()/4.5.16):7;8 b=4.T(e,a)-1S;6(i>0&&i<4.C)4.t.y(4.E,r.I(4.t.y(4.E))-b+'U');4.t.y(4.O,r.I(4.t.y(4.O))+b+'U');z e},1V:9(i){8 e=4.M(i);6(!e.K||(i>=4.C&&i<=4.G))z;8 d=4.T(e);6(i<4.C)4.t.y(4.E,r.I(4.t.y(4.E))+d+'U');e.1V();4.t.y(4.O,r.I(4.t.y(4.O))-d+'U')},19:9(){4.1D();6(4.P!=7&&!4.Z)4.1W(F);X 4.15(((4.5.B=='1X'||4.5.B=='G')&&4.5.u!=7&&4.G==4.5.u)?1:4.C+4.5.15)},11:9(){4.1D();6(4.P!=7&&4.Z)4.1W(1g);X 4.15(((4.5.B=='1X'||4.5.B=='C')&&4.5.u!=7&&4.C==1)?4.5.u:4.C-4.5.15)},1W:9(b){6(4.Q||4.1a||!4.P)z;8 a=r.I(4.t.y(4.E));!b?a-=4.P:a+=4.P;4.Z=!b;4.Y=4.C;4.12=4.G;4.1p(a)},15:9(i,a){6(4.Q||4.1a)z;4.1p(4.1A(i),a)},1A:9(i){6(4.Q||4.1a)z;i=r.I(i);6(4.5.B!='1c')i=i<1?1:(4.5.u&&i>4.5.u?4.5.u:i);8 a=4.C>i;8 b=r.I(4.t.y(4.E));8 f=4.5.B!='1c'&&4.C<=1?1:4.C;8 c=a?4.M(f):4.M(4.G);8 j=a?f:f-1;8 e=7,l=0,p=F,d=0;1q(a?--j>=i:++j<i){e=4.M(j);p=!e.K;6(e.K==0){e=4.1C(j).V(4.J('A-1b-1B'));c[a?'1u':'1T'](e)}c=e;d=4.T(e);6(p)l+=d;6(4.C!=7&&(4.5.B=='1c'||(j>=1&&(4.5.u==7||j<=4.5.u))))b=a?b+d:b-d}8 g=4.1o();8 h=[];8 k=0,j=i,v=0;8 c=4.M(i-1);1q(++k){e=4.M(j);p=!e.K;6(e.K==0){e=4.1C(j).V(4.J('A-1b-1B'));c.K==0?4.t.2y(e):c[a?'1u':'1T'](e)}c=e;8 d=4.T(e);6(d==0){2Z('30: 31 1N/2f 32 1k 33. 34 35 36 37 38 39. 3a...');z 0}6(4.5.B!='1c'&&4.5.u!==7&&j>4.5.u)h.3b(e);X 6(p)l+=d;v+=d;6(v>=g)1l;j++}1k(8 x=0;x<h.K;x++)h[x].1V();6(l>0){4.t.y(4.O,4.T(4.t)+l+'U');6(a){b-=l;4.t.y(4.E,r.I(4.t.y(4.E))-l+'U')}}8 n=i+k-1;6(4.5.B!='1c'&&4.5.u&&n>4.5.u)n=4.5.u;6(j>n){k=0,j=n,v=0;1q(++k){8 e=4.M(j--);6(!e.K)1l;v+=4.T(e);6(v>=g)1l}}8 o=n-k+1;6(4.5.B!='1c'&&o<1)o=1;6(4.Z&&a){b+=4.P;4.Z=F}4.P=7;6(4.5.B!='1c'&&n==4.5.u&&(n-k+1)>=1){8 m=r.10(4.M(n),!4.5.W?'1r':'1Y');6((v-m)>g)4.P=v-g-m}1q(i--\>o)b+=4.T(4.M(i));4.Y=4.C;4.12=4.G;4.C=o;4.G=n;z b},1p:9(p,a){6(4.Q||4.1a)z;4.1a=1g;8 b=4;8 c=9(){b.1a=F;6(p==0)b.t.y(b.E,0);6(b.5.B=='1X'||b.5.B=='G'||b.5.u==7||b.G<b.5.u)b.2z();b.1e();b.1Z('2A')};4.1Z('3c');6(!4.5.1H||a==F){4.t.y(4.E,p+'U');c()}X{8 o=!4.5.W?{'2g':p}:{'2h':p};4.t.1p(o,4.5.1H,4.5.24,c)}},2z:9(s){6(s!=L)4.5.1i=s;6(4.5.1i==0)z 4.1D();6(4.1f!=7)z;8 a=4;4.1f=3d(9(){a.19()},4.5.1i*3e)},1D:9(){6(4.1f==7)z;3f(4.1f);4.1f=7},1e:9(n,p){6(n==L||n==7){8 n=!4.Q&&4.5.u!==0&&((4.5.B&&4.5.B!='C')||4.5.u==7||4.G<4.5.u);6(!4.Q&&(!4.5.B||4.5.B=='C')&&4.5.u!=7&&4.G>=4.5.u)n=4.P!=7&&!4.Z}6(p==L||p==7){8 p=!4.Q&&4.5.u!==0&&((4.5.B&&4.5.B!='G')||4.C>1);6(!4.Q&&(!4.5.B||4.5.B=='G')&&4.5.u!=7&&4.C==1)p=4.P!=7&&4.Z}8 a=4;4.R[n?'1y':'1R'](4.5.2c,4.2n)[n?'1t':'V'](4.J('A-19-1E')).20('1E',n?F:1g);4.S[p?'1y':'1R'](4.5.2e,4.2o)[p?'1t':'V'](4.J('A-11-1E')).20('1E',p?F:1g);6(4.R.K>0&&(4.R[0].1h==L||4.R[0].1h!=n)&&4.5.1L!=7){4.R.14(9(){a.5.1L(a,4,n)});4.R[0].1h=n}6(4.S.K>0&&(4.S[0].1h==L||4.S[0].1h!=p)&&4.5.1M!=7){4.S.14(9(){a.5.1M(a,4,p)});4.S[0].1h=p}},1Z:9(a){8 b=4.Y==7?'2q':(4.Y<4.C?'19':'11');4.13('25',a,b);6(4.Y!==4.C){4.13('26',a,b,4.C);4.13('27',a,b,4.Y)}6(4.12!==4.G){4.13('28',a,b,4.G);4.13('29',a,b,4.12)}4.13('2a',a,b,4.C,4.G,4.Y,4.12);4.13('2b',a,b,4.Y,4.12,4.C,4.G)},13:9(a,b,c,d,e,f,g){6(4.5[a]==L||(1U 4.5[a]!='2B'&&b!='2A'))z;8 h=1U 4.5[a]=='2B'?4.5[a][b]:4.5[a];6(!$.3g(h))z;8 j=4;6(d===L)h(j,c,b);X 6(e===L)4.M(d).14(9(){h(j,4,d,c,b)});X{1k(8 i=d;i<=e;i++)6(i!==7&&!(i>=f&&i<=g))4.M(i).14(9(){h(j,4,i,c,b)})}},1C:9(i){z 4.1P('<1v></1v>',i)},1P:9(e,i){8 a=$(e).V(4.J('A-1b')).V(4.J('A-1b-'+i));a.20('3h',i);z a},J:9(c){z c+' '+c+(!4.5.W?'-3i':'-W')},T:9(e,d){8 a=e.2C!=L?e[0]:e;8 b=!4.5.W?a.1F+r.10(a,'2D')+r.10(a,'1r'):a.2E+r.10(a,'2F')+r.10(a,'1Y');6(d==L||b==d)z b;8 w=!4.5.W?d-r.10(a,'2D')-r.10(a,'1r'):d-r.10(a,'2F')-r.10(a,'1Y');$(a).y(4.O,w+'U');z 4.T(a)},1o:9(){z!4.5.W?4.H[0].1F-r.I(4.H.y('3j'))-r.I(4.H.y('3k')):4.H[0].2E-r.I(4.H.y('3l'))-r.I(4.H.y('3m'))},3n:9(i,s){6(s==L)s=4.5.u;z 1n.3o((((i-1)/s)-1n.3p((i-1)/s))*s)+1}});r.17({3q:9(d){z $.17(q,d||{})},10:9(e,p){6(!e)z 0;8 a=e.2C!=L?e[0]:e;6(p=='1r'&&$.2r.2s){8 b={'1w':'1x','3r':'3s','1N':'1i'},21,22;$.2G(a,b,9(){21=a.1F});b['1r']=0;$.2G(a,b,9(){22=a.1F});z 22-21}z r.I($.y(a,p))},I:9(v){v=3t(v);z 3u(v)?0:v}})})(3v);", 62, 218, "||||this|options|if|null|var|function||||||||||||||||||||list|size||||css|return|jcarousel|wrap|first|container|lt|false|last|clip|intval|className|length|undefined|get|div|wh|tail|locked|buttonNext|buttonPrev|dimension|px|addClass|vertical|else|prevFirst|inTail|margin|prev|prevLast|callback|each|scroll|visible|extend|parent|next|animating|item|circular|split|buttons|timer|true|jcarouselstate|auto|initCallback|for|break|hasClass|Math|clipping|animate|while|marginRight|fn|removeClass|before|li|display|block|bind|setup|pos|placeholder|create|stopAuto|disabled|offsetWidth|offset|animation|reloadCallback|buttonNextHTML|buttonPrevHTML|buttonNextCallback|buttonPrevCallback|width|ceil|format|funcResize|unbind|old|after|typeof|remove|scrollTail|both|marginBottom|notify|attr|oWidth|oWidth2|start|easing|itemLoadCallback|itemFirstInCallback|itemFirstOutCallback|itemLastInCallback|itemLastOutCallback|itemVisibleInCallback|itemVisibleOutCallback|buttonNextEvent|click|buttonPrevEvent|height|left|top|indexOf|skin|nodeName|ul|ol|funcNext|funcPrev|reload|init|browser|safari|window|resize|reset|empty|add|prepend|startAuto|onAfterAnimation|object|jquery|marginLeft|offsetHeight|marginTop|swap|new|normal|swing|UL|OL|find|class|children|load|prototype|0px|10px|lock|unlock|has|string|html|append|alert|jCarousel|No|set|items|This|will|cause|an|infinite|loop|Aborting|push|onBeforeAnimation|setTimeout|1000|clearTimeout|isFunction|jcarouselindex|horizontal|borderLeftWidth|borderRightWidth|borderTopWidth|borderBottomWidth|index|round|floor|defaults|float|none|parseInt|isNaN|jQuery".split("|"), 0, {}));
(function(a) {
	a.alerts = {
		verticalOffset: -75,
		horizontalOffset: 0,
		repositionOnResize: true,
		overlayOpacity: 0.01,
		overlayColor: "#FFF",
		draggable: true,
		okButton: "&nbsp;Delete&nbsp;",
		cancelButton: "&nbsp;Cancel&nbsp;",
		dialogClass: null,
		alert: function(c, d, f) {
			if (d == null) d = "Alert";
			a.alerts._show(d, c, null, "alert", function(g) {
				f && f(g)
			})
		},
		confirm: function(c, d, f) {
			if (d == null) d = "Confirm";
			a.alerts._show(d, c, null, "confirm", function(g) {
				f && f(g)
			})
		},
		prompt: function(c, d, f, g) {
			if (f == null) f = "Prompt";
			a.alerts._show(f, c, d, "prompt", function(b) {
				g && g(b)
			})
		},
		_show: function(c, d, f, g, b) {
			a.alerts._hide();
			a.alerts._overlay("show");
			a("BODY").append('<div id="popup_container"><h1 id="popup_title"></h1><div id="popup_content"><div id="popup_message"></div></div></div>');
			a.alerts.dialogClass && a("#popup_container").addClass(a.alerts.dialogClass);
			var e = a.browser.msie && parseInt(a.browser.version) <= 6 ? "absolute" : "fixed";
			a("#popup_container").css({
				position: e,
				zIndex: 99999,
				padding: 0,
				margin: 0
			});
			a("#popup_title").text(c);
			a("#popup_content").addClass(g);
			a("#popup_message").text(d);
			a("#popup_message").html(a("#popup_message").text().replace(/\n/g, "<br />"));
			a("#popup_container").css({
				minWidth: a("#popup_container").outerWidth(),
				maxWidth: a("#popup_container").outerWidth()
			});
			a.alerts._reposition();
			a.alerts._maintainPosition(true);
			switch (g) {
			case "alert":
				a("#popup_message").after('<div id="popup_panel"><input type="button" value="' + a.alerts.okButton + '" id="popup_ok" /></div>');
				a("#popup_ok").click(function() {
					a.alerts._hide();
					b(true)
				});
				a("#popup_ok").focus().keypress(function(k) {
					if (k.keyCode == 13 || k.keyCode == 27) a("#popup_ok").trigger("click")
				});
				break;
			case "confirm":
				a("#popup_message").after('<div id="popup_panel"><input type="button" value="' + a.alerts.okButton + '" id="popup_ok" /> <input type="button" value="' + a.alerts.cancelButton + '" id="popup_cancel" /></div>');
				a("#popup_ok").click(function() {
					a.alerts._hide();
					b && b(true)
				});
				a("#popup_cancel").click(function() {
					a.alerts._hide();
					b && b(false)
				});
				a("#popup_ok").focus();
				a("#popup_ok, #popup_cancel").keypress(function(k) {
					k.keyCode == 13 && a("#popup_ok").trigger("click");
					k.keyCode == 27 && a("#popup_cancel").trigger("click")
				});
				break;
			case "prompt":
				a("#popup_message").append('<br /><input type="text" size="30" id="popup_prompt" />').after('<div id="popup_panel"><input type="button" value="' + a.alerts.okButton + '" id="popup_ok" /> <input type="button" value="' + a.alerts.cancelButton + '" id="popup_cancel" /></div>');
				a("#popup_prompt").width(a("#popup_message").width());
				a("#popup_ok").click(function() {
					var k = a("#popup_prompt").val();
					a.alerts._hide();
					b && b(k)
				});
				a("#popup_cancel").click(function() {
					a.alerts._hide();
					b && b(null)
				});
				a("#popup_prompt, #popup_ok, #popup_cancel").keypress(function(k) {
					k.keyCode == 13 && a("#popup_ok").trigger("click");
					k.keyCode == 27 && a("#popup_cancel").trigger("click")
				});
				f && a("#popup_prompt").val(f);
				a("#popup_prompt").focus().select();
				break
			}
			if (a.alerts.draggable) try {
				a("#popup_container").draggable({
					handle: a("#popup_title")
				});
				a("#popup_title").css({
					cursor: "move"
				})
			} catch (h) {}
		},
		_hide: function() {
			a("#popup_container").remove();
			a.alerts._overlay("hide");
			a.alerts._maintainPosition(false)
		},
		_overlay: function(c) {
			switch (c) {
			case "show":
				a.alerts._overlay("hide");
				a("BODY").append('<div id="popup_overlay"></div>');
				a("#popup_overlay").css({
					position: "absolute",
					zIndex: 99998,
					top: "0px",
					left: "0px",
					width: "100%",
					height: a(document).height(),
					background: a.alerts.overlayColor,
					opacity: a.alerts.overlayOpacity
				});
				break;
			case "hide":
				a("#popup_overlay").remove();
				break
			}
		},
		_reposition: function() {
			var c = a(window).height() / 2 - a("#popup_container").outerHeight() / 2 + a.alerts.verticalOffset,
				d = a(window).width() / 2 - a("#popup_container").outerWidth() / 2 + a.alerts.horizontalOffset;
			if (c < 0) c = 0;
			if (d < 0) d = 0;
			if (a.browser.msie && parseInt(a.browser.version) <= 6) c += a(window).scrollTop();
			a("#popup_container").css({
				top: c + "px",
				left: d + "px"
			});
			a("#popup_overlay").height(a(document).height())
		},
		_maintainPosition: function(c) {
			if (a.alerts.repositionOnResize) switch (c) {
			case true:
				a(window).bind("resize", a.alerts._reposition);
				break;
			case false:
				a(window).unbind("resize", a.alerts._reposition);
				break
			}
		}
	};
	jAlert = function(c, d, f) {
		a.alerts.alert(c, d, f)
	};
	jConfirm = function(c, d, f) {
		a.alerts.confirm(c, d, f)
	};
	jPrompt = function(c, d, f, g) {
		a.alerts.prompt(c, d, f, g)
	}
})(jQuery);
(function(a) {
	a.fn.tipsy = function(c) {
		c = a.extend({}, a.fn.tipsy.defaults, c);
		return this.each(function() {
			var d = a.fn.tipsy.elementOptions(this, c);
			a(this).hover(function() {
				a.data(this, "cancel.tipsy", true);
				var f = a.data(this, "active.tipsy");
				if (!f) {
					f = a('<div class="tipsy"><div class="tipsy-inner"/></div>');
					f.css({
						position: "absolute",
						zIndex: 1E5
					});
					a.data(this, "active.tipsy", f)
				}
				if (a(this).attr("title") || typeof a(this).attr("original-title") != "string") a(this).attr("original-title", a(this).attr("title") || "").removeAttr("title");
				var g;
				if (typeof d.title == "string") g = a(this).attr(d.title == "title" ? "original-title" : d.title);
				else if (typeof d.title == "function") g = d.title.call(this);
				f.find(".tipsy-inner")[d.html ? "html" : "text"](g || d.fallback);
				g = a.extend({}, a(this).offset(), {
					width: this.offsetWidth,
					height: this.offsetHeight
				});
				f.get(0).className = "tipsy";
				f.remove().css({
					top: 0,
					left: 0,
					visibility: "hidden",
					display: "block"
				}).appendTo(document.body);
				var b = f[0].offsetWidth,
					e = f[0].offsetHeight;
				switch ((typeof d.gravity == "function" ? d.gravity.call(this) : d.gravity).charAt(0)) {
				case "n":
					f.css({
						top: g.top + g.height,
						left: g.left + g.width / 2 - b / 2
					}).addClass("tipsy-north");
					break;
				case "s":
					f.css({
						top: g.top - e,
						left: g.left + g.width / 2 - b / 2
					}).addClass("tipsy-south");
					break;
				case "e":
					f.css({
						top: g.top + g.height / 2 - e / 2,
						left: g.left - b
					}).addClass("tipsy-east");
					break;
				case "w":
					f.css({
						top: g.top + g.height / 2 - e / 2,
						left: g.left + g.width
					}).addClass("tipsy-west");
					break
				}
				d.fade ? f.css({
					opacity: 0,
					display: "block",
					visibility: "visible"
				}).animate({
					opacity: 0.8
				}) : f.css({
					visibility: "visible"
				})
			}, function() {
				a.data(this, "cancel.tipsy", false);
				var f = this;
				setTimeout(function() {
					if (!a.data(this, "cancel.tipsy")) {
						var g = a.data(f, "active.tipsy");
						d.fade ? g.stop().fadeOut(function() {
							a(this).remove()
						}) : g.remove()
					}
				}, 100)
			})
		})
	};
	a.fn.tipsy.elementOptions = function(c, d) {
		return a.metadata ? a.extend({}, d, a(c).metadata()) : d
	};
	a.fn.tipsy.defaults = {
		fade: false,
		fallback: "",
		gravity: "n",
		html: false,
		title: "title"
	};
	a.fn.tipsy.autoNS = function() {
		return a(this).offset().top > a(document).scrollTop() + a(window).height() / 2 ? "s" : "n"
	};
	a.fn.tipsy.autoWE = function() {
		return a(this).offset().left > a(document).scrollLeft() + a(window).width() / 2 ? "e" : "w"
	}
})(jQuery);
new(function(a) {
	var c = a.separator || "&",
		d = a.spaces === false ? false : true,
		f = (a.prefix === false ? false : true) ? a.hash === true ? "#" : "?" : "",
		g = a.numbers === false ? false : true;
	jQuery.query = new(function() {
		var b = function(l, o) {
			return l != undefined && l !== null && (o ? l.constructor == o : true)
		},
			e = function(l) {
				for (var o = /\[([^[]*)\]/g, q = /^([^[]+)(\[.*\])?$/.exec(l), j = q[1], m = []; l = o.exec(q[2]);) m.push(l[1]);
				return [j, m]
			},
			h = function(l, o, q) {
				var j = o.shift();
				if (typeof l != "object") l = null;
				if (j === "") {
					l || (l = []);
					if (b(l, Array)) l.push(o.length == 0 ? q : h(null, o.slice(0), q));
					else if (b(l, Object)) {
						for (j = 0; l[j++] != null;);
						l[--j] = o.length == 0 ? q : h(l[j], o.slice(0), q)
					} else {
						l = [];
						l.push(o.length == 0 ? q : h(null, o.slice(0), q))
					}
				} else if (j && j.match(/^\s*[0-9]+\s*$/)) {
					var m = parseInt(j, 10);
					l || (l = []);
					l[m] = o.length == 0 ? q : h(l[m], o.slice(0), q)
				} else if (j) {
					m = j.replace(/^\s*|\s*$/g, "");
					l || (l = {});
					if (b(l, Array)) {
						var p = {};
						for (j = 0; j < l.length; ++j) p[j] = l[j];
						l = p
					}
					l[m] = o.length == 0 ? q : h(l[m], o.slice(0), q)
				} else return q;
				return l
			},
			k = function(l) {
				var o = this;
				o.keys = {};
				l.queryObject ? jQuery.each(l.get(), function(q, j) {
					o.SET(q, j)
				}) : jQuery.each(arguments, function() {
					var q = "" + this;
					q = q.replace(/^[?#]/, "");
					q = q.replace(/[;&]$/, "");
					if (d) q = q.replace(/[+]/g, " ");
					jQuery.each(q.split(/[&;]/), function() {
						var j = decodeURIComponent(this.split("=")[0] || ""),
							m = decodeURIComponent(this.split("=")[1] || "");
						if (j) {
							if (g) if (/^[+-]?[0-9]+\.[0-9]*$/.test(m)) m = parseFloat(m);
							else if (/^[+-]?[0-9]+$/.test(m)) m = parseInt(m, 10);
							m = !m && m !== 0 ? true : m;
							if (m !== false && m !== true && typeof m != "number") m = m;
							o.SET(j, m)
						}
					})
				});
				return o
			};
		k.prototype = {
			queryObject: true,
			has: function(l, o) {
				l = this.get(l);
				return b(l, o)
			},
			GET: function(l) {
				if (!b(l)) return this.keys;
				var o = e(l);
				l = o[1];
				for (o = this.keys[o[0]]; o != null && l.length != 0;) o = o[l.shift()];
				return typeof o == "number" ? o : o || ""
			},
			get: function(l) {
				l = this.GET(l);
				if (b(l, Object)) return jQuery.extend(true, {}, l);
				else if (b(l, Array)) return l.slice(0);
				return l
			},
			SET: function(l, o) {
				o = !b(o) ? null : o;
				l = e(l);
				var q = l[0];
				this.keys[q] = h(this.keys[q], l[1].slice(0), o);
				return this
			},
			set: function(l, o) {
				return this.copy().SET(l, o)
			},
			REMOVE: function(l) {
				return this.SET(l, null).COMPACT()
			},
			remove: function(l) {
				return this.copy().REMOVE(l)
			},
			EMPTY: function() {
				var l = this;
				jQuery.each(l.keys, function(o) {
					delete l.keys[o]
				});
				return l
			},
			load: function(l) {
				var o = l.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1"),
					q = l.replace(/^.*?[?](.+?)(?:#.+)?$/, "$1");
				return new k(l.length == q.length ? "" : q, l.length == o.length ? "" : o)
			},
			empty: function() {
				return this.copy().EMPTY()
			},
			copy: function() {
				return new k(this)
			},
			COMPACT: function() {
				function l(o) {
					var q = typeof o == "object" ? b(o, Array) ? [] : {} : o;
					if (typeof o == "object") {
						function j(m, p, s) {
							if (b(m, Array)) m.push(s);
							else m[p] = s
						}
						jQuery.each(o, function(m, p) {
							if (!b(p)) return true;
							j(q, m, l(p))
						})
					}
					return q
				}
				this.keys = l(this.keys);
				return this
			},
			compact: function() {
				return this.copy().COMPACT()
			},
			toString: function() {
				var l = [],
					o = [],
					q = function(p) {
						p += "";
						if (d) p = p.replace(/ /g, "+");
						return encodeURIComponent(p)
					},
					j = function(p, s, n) {
						if (!(!b(n) || n === false)) {
							s = [q(s)];
							if (n !== true) {
								s.push("=");
								s.push(q(n))
							}
							p.push(s.join(""))
						}
					},
					m = function(p, s) {
						var n = function(r) {
							return !s || s == "" ? "" + r : [s, "[", r, "]"].join("")
						};
						jQuery.each(p, function(r, u) {
							typeof u == "object" ? m(u, n(r)) : j(o, n(r), u)
						})
					};
				m(this.keys);
				o.length > 0 && l.push(f);
				l.push(o.join(c));
				return l.join("")
			}
		};
		return new k(location.search, location.hash)
	})
})(jQuery.query || {});
(function(a) {
	function c() {
		var e = d(this);
		isNaN(e.datetime) || a(this).text(f(e.datetime));
		return this
	}
	function d(e) {
		e = a(e);
		if (!e.data("timeago")) {
			e.data("timeago", {
				datetime: b.datetime(e)
			});
			var h = a.trim(e.text());
			h.length > 0 && e.attr("title", h)
		}
		return e.data("timeago")
	}
	function f(e) {
		return b.inWords(g(e))
	}
	function g(e) {
		return (new Date).getTime() - e.getTime()
	}
	a.timeago = function(e) {
		return e instanceof Date ? f(e) : typeof e == "string" ? f(a.timeago.parse(e)) : f(a.timeago.datetime(e))
	};
	var b = a.timeago;
	a.extend(a.timeago, {
		settings: {
			refreshMillis: 6E4,
			allowFuture: false,
			strings: {
				prefixAgo: null,
				prefixFromNow: null,
				suffixAgo: "ago",
				suffixFromNow: "from now",
				seconds: "less than a minute",
				minute: "about a minute",
				minutes: "%d minutes",
				hour: "about an hour",
				hours: "about %d hours",
				day: "a day",
				days: "%d days",
				month: "about a month",
				months: "%d months",
				year: "about a year",
				years: "%d years",
				numbers: []
			}
		},
		inWords: function(e) {
			function h(s, n) {
				return (a.isFunction(s) ? s(n) : s).replace(/%d/i, k.numbers && k.numbers[n] || n)
			}
			var k = this.settings.strings,
				l = k.prefixAgo,
				o = k.suffixAgo;
			if (this.settings.allowFuture) {
				if (e < 0) {
					l = k.prefixFromNow;
					o = k.suffixFromNow
				}
				e = Math.abs(e)
			}
			e = e / 1E3;
			var q = e / 60,
				j = q / 60,
				m = j / 24,
				p = m / 365;
			e = e < 45 && h(k.seconds, Math.round(e)) || e < 90 && h(k.minute, 1) || q < 45 && h(k.minutes, Math.round(q)) || q < 90 && h(k.hour, 1) || j < 24 && h(k.hours, Math.round(j)) || j < 48 && h(k.day, 1) || m < 30 && h(k.days, Math.floor(m)) || m < 60 && h(k.month, 1) || m < 365 && h(k.months, Math.floor(m / 30)) || p < 2 && h(k.year, 1) || h(k.years, Math.floor(p));
			return a.trim([l, e, o].join(" "))
		},
		parse: function(e) {
			e = a.trim(e);
			e = e.replace(/-/, "/").replace(/-/, "/");
			e = e.replace(/T/, " ").replace(/Z/, " UTC");
			e = e.replace(/([\+-]\d\d)\:?(\d\d)/, " $1$2");
			e = e.replace(/(\.\d+)/, "");
			return new Date(e)
		},
		datetime: function(e) {
			e = a(e).get(0).tagName.toLowerCase() == "time" ? a(e).attr("datetime") : a(e).attr("title");
			return b.parse(e)
		}
	});
	a.fn.timeago = function() {
		var e = this;
		e.each(c);
		var h = b.settings;
		h.refreshMillis > 0 && setInterval(function() {
			e.each(c)
		}, h.refreshMillis);
		return e
	};
	document.createElement("abbr");
	document.createElement("time")
})(jQuery);

(function(a) {
	a.pageless = function(c) {
		a.isFunction(c) ? c.call() : a.pageless.init(c)
	};
	a.pageless.settings = {
		currentPage: 1,
		pagination: ".pagination",
		url: location.href,
		params: {},
		distance: 100,
		loaderImage: "",
		marker: null,
		scrape: function(c) {
			return c
		}
	};
	a.pageless.loaderHtml = function() {
		return a.pageless.settings.loaderHtml || '<div id="pageless-loader" style="display:none;text-align:center;width:100%;"></div>'
	};
	a.pageless.init = function(c) {
		if (!a.pageless.settings.inited) {
			a.pageless.settings.inited = true;
			c && a.extend(a.pageless.settings, c);
			a.pageless.settings.pagination && a(a.pageless.settings.pagination).remove();
			a.pageless.startListener()
		}
	};
	a.pageless.isLoading = false;
	a.fn.pageless = function(c) {
		a.pageless.init(c);
		a.pageless.el = a(this);
		if (c.loader && a(this).find(c.loader).length) a.pageless.loader = a(this).find(c.loader);
		else {
			a.pageless.loader = a(a.pageless.loaderHtml());
			a(this).append(a.pageless.loader);
			c.loaderHtml || a("#pageless-loader .msg").html(c.loaderMsg)
		}
	};
	a.pageless.loading = function(c) {
		if (c === true) {
			a.pageless.isLoading = true;
			a.pageless.loader && a.pageless.loader.fadeIn("normal")
		} else {
			a.pageless.isLoading = false;
			a.pageless.loader && a.pageless.loader.fadeOut("normal")
		}
	};
	a.pageless.stopListener = function() {
		a(window).unbind(".pageless");
		a("#" + a.pageless.settings.loader).hide()
	};
	a.pageless.startListener = function() {
		a(window).bind("scroll.pageless", a.pageless.scroll);
		a("#" + a.pageless.settings.loader).show()
	};
	a.pageless.scroll = function() {
		if (a.pageless.settings.totalPages <= a.pageless.settings.currentPage) {
			a.pageless.stopListener();
			a.pageless.settings.afterStopListener && a.pageless.settings.afterStopListener.call()
		} else {
			var c = a(document).height() - a(window).scrollTop() - a(window).height();
			if (!a.pageless.isLoading && c < a.pageless.settings.distance) {
				a.pageless.loading(true);
				a.pageless.settings.currentPage++;
				a.extend(a.pageless.settings.params, {
					page: a.pageless.settings.currentPage
				});
				a.pageless.settings.marker && a.extend(a.pageless.settings.params, {
					marker: a.pageless.settings.marker
				});
				c = a.pageless.settings.url;
				c = c.split("#")[0];
				a.ajax({
					url: c,
					type: "GET",
					dataType: "html",
					data: a.pageless.settings.params,
					success: function(d) {
						d = a.pageless.settings.scrape(d);
						a.pageless.loader ? a.pageless.loader.before(d) : a.pageless.el.append(d);
						a.pageless.loading(false);
						a.pageless.settings.complete && a.pageless.settings.complete.call()
					}
				})
			}
		}
	}
})(jQuery);

var new_pins = {
	html: "",
	number: 0,
	old_title: ""
},
	followers_json = null,
	cache = {},
	lastXhr, media_url = "http://assets.pinterest.com/";
$("html").ajaxSend(function(a, c, d) {
	function f(g) {
		var b = null;
		if (document.cookie && document.cookie != "") for (var e = document.cookie.split(";"), h = 0; h < e.length; h++) {
			var k = jQuery.trim(e[h]);
			if (k.substring(0, g.length + 1) == g + "=") {
				b = decodeURIComponent(k.substring(g.length + 1));
				break
			}
		}
		return b
	}
	/^http:.*/.test(d.url) || /^https:.*/.test(d.url) || c.setRequestHeader("X-CSRFToken", f("csrftoken"))
});

function setCookie(a, c, d) {
	if (d) {
		var f = new Date;
		f.setTime(f.getTime() + d * 24 * 60 * 60 * 1E3);
		d = "; expires=" + f.toGMTString()
	} else d = "";
	document.cookie = a + "=" + c + d + "; path=/"
}

function getCookie(a) {
	a = a + "=";
	for (var c = document.cookie.split(";"), d = 0; d < c.length; d++) {
		for (var f = c[d]; f.charAt(0) == " ";) f = f.substring(1, f.length);
		if (f.indexOf(a) == 0) return f.substring(a.length, f.length)
	}
	return null
}

function deleteCookie(a) {
	setCookie(a, "", -1)
}
$.extend({
	getUrlVars: function() {
		for (var a = [], c, d = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), f = 0; f < d.length; f++) {
			c = d[f].split("=");
			a.push(c[0]);
			a[c[0]] = c[1]
		}
		return a
	},
	getUrlVar: function(a) {
		return $.getUrlVars()[a]
	}
});

(function(a) {
	a.fn.extend({
		defaultValue: function(c, d) {
			a(this).focus(function() {
				a(this).val() == c && a(this).val("")
			}).blur(function() {
				if (a(this).val() == "") {
					a(this).val(c);
					d && a(this).addClass(d)
				}
			})
		}
	})
})(jQuery);

if (!Array.indexOf) Array.prototype.indexOf = function(a) {
	for (var c = 0; c < this.length; c++) if (this[c] == a) return c;
	return -1
};

function is_video(a) {
	return /^http:\/\/img\.youtube\.com\/vi\/[a-zA-Z0-9\-_]+\/0\.jpg$/.test(a)
}
function getHTML(a) {
	var c = $(a).wrap("<div />").parent().html();
	$(a).unwrap();
	return c
}
var ScrollToTop = ScrollToTop || {
	id: "ScrollToTop",
	control: $("#" + this.id),
	setup: function() {
		var a = "<a id='" + ScrollToTop.id + "' href='#' class='Button WhiteButton Offscreen Indicator'><strong>Scroll to Top</strong><span></span></a>";
		$("body").append(a);
		var c = $(window).height() / 2;
		$(window).scroll(function() {
			(window.innerWidth ? window.pageYOffset : document.documentElement.scrollTop) >= c ? $("#ScrollToTop").removeClass("Offscreen") : $("#ScrollToTop").addClass("Offscreen")
		});
		$("#ScrollToTop").click(function() {
			$("html, body").animate({
				scrollTop: "0px"
			}, 400);
			return false
		})
	}
},
	Modal = Modal || {
		setup: function() {
			$(document).keydown(function(a) {
				if (a.keyCode == 27) {
					var c = $(".ModalContainer:visible").attr("id");
					if (c) Modal.close(c);
					else $("#zoomScroll").length && window.History.back();
					a.preventDefault()
				}
			})
		},
		show: function(a) {
			var c = $("#" + a);
			a = $(".modal:first", c);
			$("body").addClass("noscroll");
			c.show();
			var d = a.outerHeight();
			a.css("margin-bottom", "-" + d / 2 + "px");
			setTimeout(function() {
				c.addClass("visible");
				c.css("-webkit-transform", "none")
			}, 1);
			return false
		},
		close: function(a) {
			var c = $("#" + a);
			$("#zoomScroll").length === 0 && $("body").removeClass("noscroll");
			c.removeClass("visible");
			setTimeout(function() {
				c.hide();
				c.css("-webkit-transform", "translateZ(0)")
			}, 251);
			return false
		}
	};
$(document).ready(function() {
	ScrollToTop.setup();
	Modal.setup();
	$(".tipsyHover").tipsy({
		gravity: "n",
		delayIn: 0.1,
		delayOut: 0.1,
		opacity: 0.7,
		live: true,
		html: true
	});
	$("#query").focus(function() {
		cache && $(this).catcomplete("search", $(this).val())
	});
	$.widget("custom.catcomplete", $.ui.autocomplete, {
		_renderMenu: function(c, d) {
			var f = this,
				g = "";
			$.each(d, function(b, e) {
				if (e.category != g) {
					c.append("<li class='ui-autocomplete-category'>" + e.category + "</li>");
					g = e.category
				}
				f._renderItem(c, e)
			});
			d = {
				link: "/search/?q=" + this.term
			};
			$("<li></li>").data("item.autocomplete", d).append("<a href='/search/?q=" + this.term + "' class='ui-corner-all' tabindex='-1' style='font-weight:bold; min-height:0 !important;'>Search for " + this.term + "</a>").appendTo(c)
		}
	});
	var a = $("#query").catcomplete({
		source: function(c, d) {
			Tagging.getFriends(c, function(f) {
				var g = f;
				if (myboards) {
					g = tagmate.filter_options(myboards, c.term);
					g = f.concat(g)
				}
				for (f = 0; f < g.length; f++) g[f].value = g[f].label;
				d(g)
			})
		},
		minLength: 1,
		delay: 0,
		appendTo: "#SearchAutocompleteHolder",
		select: function(c, d) {
			document.location.href = d.item.link
		}
	});
	if (typeof a.data("catcomplete") != "undefined") a.data("catcomplete")._renderItem = function(c, d) {
		var f = "<a href='" + d.link + "'><img src='" + d.image + "' class='AutocompletePhoto' alt='Photo of " + d.label + "' width='38px' height='38px'/><span class='AutocompleteName'>" + d.label + "</span></a>";
		return $("<li></li>").data("item.autocomplete", d).append(f).appendTo(c)
	};
	$("#query").defaultValue("Search", "default_value");
	$("#Search #query_button").click(function() {
		$("#Search form").submit();
		return false
	})
});
Twitter = new(function() {
	var a = this;
	this.startTwitterConnect = function() {
		a._twitterWindow = window.open("/twitter/connect/", "Pinterest", "location=0,status=0,width=800,height=400");
		a._twitterInterval = window.setInterval(a.completeTwitterConnect, 1E3)
	};
	this.completeTwitterConnect = function() {
		if (a._twitterWindow.closed) {
			window.clearInterval(a._twitterInterval);
			window.location.reload()
		}
	}
});
Facebook = new(function() {
	var a = this;
	this.startFacebookConnect = function(c, d, f, g) {
		f = f == undefined ? true : f;
		var b = "/facebook/connect/",
			e = "?";
		if (c) {
			b += e + "scope=" + c;
			e = "&"
		}
		if (d) {
			b += e + "enable_timeline=1";
			e = "&"
		}
		if (g) b += e + "ref_page=" + g;
		a._facebookWindow = window.open(b, "Pinterest", "location=0,status=0,width=800,height=400");
		if (f) a._facebookInterval = window.setInterval(this.completeFacebookConnect, 1E3)
	};
	this.completeFacebookConnect = function() {
		if (a._facebookWindow.closed) {
			window.clearInterval(a._facebookInterval);
			window.location.reload()
		}
	}
});
(function(a) {
	function c(f) {
		return typeof f == "object" ? f : {
			top: f,
			left: f
		}
	}
	var d = a.scrollTo = function(f, g, b) {
		a(window).scrollTo(f, g, b)
	};
	d.defaults = {
		axis: "xy",
		duration: parseFloat(a.fn.jquery) >= 1.3 ? 0 : 1
	};
	d.window = function() {
		return a(window)._scrollable()
	};
	a.fn._scrollable = function() {
		return this.map(function() {
			var f = this;
			if (!(!f.nodeName || a.inArray(f.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) != -1)) return f;
			f = (f.contentWindow || f).document || f.ownerDocument || f;
			return a.browser.safari || f.compatMode == "BackCompat" ? f.body : f.documentElement
		})
	};
	a.fn.scrollTo = function(f, g, b) {
		if (typeof g == "object") {
			b = g;
			g = 0
		}
		if (typeof b == "function") b = {
			onAfter: b
		};
		if (f == "max") f = 9E9;
		b = a.extend({}, d.defaults, b);
		g = g || b.speed || b.duration;
		b.queue = b.queue && b.axis.length > 1;
		if (b.queue) g /= 2;
		b.offset = c(b.offset);
		b.over = c(b.over);
		return this._scrollable().each(function() {
			function e(m) {
				k.animate(q, g, b.easing, m &&
				function() {
					m.call(this, f, b)
				})
			}
			var h = this,
				k = a(h),
				l = f,
				o, q = {},
				j = k.is("html,body");
			switch (typeof l) {
			case "number":
			case "string":
				if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(l)) {
					l = c(l);
					break
				}
				l = a(l, this);
			case "object":
				if (l.is || l.style) o = (l = a(l)).offset()
			}
			a.each(b.axis.split(""), function(m, p) {
				var s = p == "x" ? "Left" : "Top",
					n = s.toLowerCase(),
					r = "scroll" + s,
					u = h[r],
					v = d.max(h, p);
				if (o) {
					q[r] = o[n] + (j ? 0 : u - k.offset()[n]);
					if (b.margin) {
						q[r] -= parseInt(l.css("margin" + s)) || 0;
						q[r] -= parseInt(l.css("border" + s + "Width")) || 0
					}
					q[r] += b.offset[n] || 0;
					if (b.over[n]) q[r] += l[p == "x" ? "width" : "height"]() * b.over[n]
				} else {
					p = l[n];
					q[r] = p.slice && p.slice(-1) == "%" ? parseFloat(p) / 100 * v : p
				}
				if (/^\d+$/.test(q[r])) q[r] = q[r] <= 0 ? 0 : Math.min(q[r], v);
				if (!m && b.queue) {
					u != q[r] && e(b.onAfterFirst);
					delete q[r]
				}
			});
			e(b.onAfter)
		}).end()
	};
	d.max = function(f, g) {
		var b = g == "x" ? "Width" : "Height";
		g = "scroll" + b;
		if (!a(f).is("html,body")) return f[g] - a(f)[b.toLowerCase()]();
		b = "client" + b;
		var e = f.ownerDocument.documentElement;
		f = f.ownerDocument.body;
		return Math.max(e[g], f[g]) - Math.min(e[b], f[b])
	}
})(jQuery);
(function() {
	jQuery.each({
		getSelection: function() {
			var a = this.jquery ? this[0] : this;
			return ("selectionStart" in a &&
			function() {
				var c = a.selectionEnd - a.selectionStart;
				return {
					start: a.selectionStart,
					end: a.selectionEnd,
					length: c,
					text: a.value.substr(a.selectionStart, c)
				}
			} || document.selection &&
			function() {
				a.focus();
				var c = document.selection.createRange();
				if (c == null) return {
					start: 0,
					end: a.value.length,
					length: 0
				};
				var d = a.createTextRange(),
					f = d.duplicate();
				d.moveToBookmark(c.getBookmark());
				f.setEndPoint("EndToStart", d);
				var g = f.text.length,
					b = g;
				for (d = 0; d < g; d++) f.text.charCodeAt(d) == 13 && b--;
				g = f = c.text.length;
				for (d = 0; d < f; d++) c.text.charCodeAt(d) == 13 && g--;
				return {
					start: b,
					end: b + g,
					length: g,
					text: c.text
				}
			} ||
			function() {
				return {
					start: 0,
					end: a.value.length,
					length: 0
				}
			})()
		},
		setSelection: function(a, c) {
			var d = this.jquery ? this[0] : this,
				f = a || 0,
				g = c || 0;
			return ("selectionStart" in d &&
			function() {
				d.focus();
				d.selectionStart = f;
				d.selectionEnd = g;
				return this
			} || document.selection &&
			function() {
				d.focus();
				var b = d.createTextRange(),
					e = f;
				for (i = 0; i < e; i++) if (d.value[i].search(/[\r\n]/) != -1) f -= 0.5;
				e = g;
				for (i = 0; i < e; i++) if (d.value[i].search(/[\r\n]/) != -1) g -= 0.5;
				b.moveEnd("textedit", -1);
				b.moveStart("character", f);
				b.moveEnd("character", g - f);
				b.select();
				return this
			} ||
			function() {
				return this
			})()
		},
		replaceSelection: function(a) {
			var c = this.jquery ? this[0] : this,
				d = a || "";
			return ("selectionStart" in c &&
			function() {
				c.value = c.value.substr(0, c.selectionStart) + d + c.value.substr(c.selectionEnd, c.value.length);
				return this
			} || document.selection &&
			function() {
				c.focus();
				document.selection.createRange().text = d;
				return this
			} ||
			function() {
				c.value += d;
				return this
			})()
		}
	}, function(a) {
		jQuery.fn[a] = this
	})
})();
var tagmate = tagmate || {
	USER_TAG_EXPR: "@\\w+(?: \\w*)?",
	HASH_TAG_EXPR: "#\\w+",
	USD_TAG_EXPR: "\\$(?:(?:\\d{1,3}(?:\\,\\d{3})+)|(?:\\d+))(?:\\.\\d{2})?",
	GBP_TAG_EXPR: "\\\u00a3(?:(?:\\d{1,3}(?:\\,\\d{3})+)|(?:\\d+))(?:\\.\\d{2})?",
	filter_options: function(a, c) {
		for (var d = [], f = 0; f < a.length; f++) {
			var g = a[f].label.toLowerCase(),
				b = c.toLowerCase();
			b.length <= g.length && g.indexOf(b) == 0 && d.push(a[f])
		}
		return d
	},
	sort_options: function(a) {
		return a.sort(function(c, d) {
			c = c.label.toLowerCase();
			d = d.label.toLowerCase();
			if (c > d) return 1;
			else if (c < d) return -1;
			return 0
		})
	}
};
(function(a) {
	function c(b, e, h) {
		b = b.substring(h || 0).search(e);
		return b >= 0 ? b + (h || 0) : b
	}
	function d(b) {
		return b.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
	}
	function f(b, e, h) {
		var k = {};
		for (tok in e) if (h && h[tok]) {
			var l = {},
				o = {};
			for (key in h[tok]) {
				var q = h[tok][key].value,
					j = h[tok][key].label,
					m = d(tok + j),
					p = ["(?:^(", ")$|^(", ")\\W|\\W(", ")\\W|\\W(", ")$)"].join(m),
					s = 0;
				for (p = new RegExp(p, "gm");
				(s = c(b.val(), p, s)) > -1;) {
					var n = o[s] ? o[s] : null;
					if (!n || l[n].length < j.length) o[s] = q;
					l[q] = j;
					s += j.length + 1
				}
			}
			for (s in o) k[tok + o[s]] = tok
		} else {
			l = null;
			for (p = new RegExp("(" + e[tok] + ")", "gm"); l = p.exec(b.val());) k[l[1]] = tok
		}
		b = [];
		for (m in k) b.push(m);
		return b
	}
	var g = {
		"@": tagmate.USER_TAG_EXPR,
		"#": tagmate.HASH_TAG_EXPR,
		$: tagmate.USD_TAG_EXPR,
		"\u00a3": tagmate.GBP_TAG_EXPR
	};
	a.fn.extend({
		getTags: function(b, e) {
			var h = a(this);
			b = b || h.data("_tagmate_tagchars");
			e = e || h.data("_tagmate_sources");
			return f(h, b, e)
		},
		tagmate: function(b) {
			function e(j, m, p) {
				for (m = new RegExp("[" + m + "]"); p >= 0 && !m.test(j[p]); p--);
				return p
			}
			function h(j) {
				var m = j.val(),
					p = j.getSelection(),
					s = -1;
				j = null;
				for (tok in q.tagchars) {
					var n = e(m, tok, p.start);
					if (n > s) {
						s = n;
						j = tok
					}
				}
				m = m.substring(s + 1, p.start);
				if ((new RegExp("^" + q.tagchars[j])).exec(j + m)) return j + m;
				return null
			}
			function k(j, m, p) {
				var s = j.val(),
					n = j.getSelection();
				n = e(s, m[0], n.start);
				var r = s.substr(0, n);
				s = s.substr(n + m.length);
				j.val(r + m[0] + p + s);
				s = n + p.length + 1;
				j.setSelection(s, s);
				q.replace_tag && q.replace_tag(m, p)
			}
			function l(j, m) {
				m = tagmate.sort_options(m);
				for (var p = 0; p < m.length; p++) {
					var s = m[p].label,
						n = m[p].image;
					p == 0 && j.html("");
					var r = "<span>" + s + "</span>";
					if (n) r = "<img src='" + n + "' alt='" + s + "'/>" + r;
					s = q.menu_option_class;
					if (p == 0) s += " " + q.menu_option_active_class;
					j.append("<div class='" + s + "'>" + r + "</div>")
				}
			}
			function o(j, m) {
				var p = m == "down" ? ":first-child" : ":last-child",
					s = m == "down" ? "next" : "prev";
				m = j.children("." + q.menu_option_active_class);
				if (m.length == 0) m = j.children(p);
				else {
					m.removeClass(q.menu_option_active_class);
					m = m[s]().length > 0 ? m[s]() : m
				}
				m.addClass(q.menu_option_active_class);
				s = j.children();
				var n = Math.floor(a(j).height() / a(s[0]).height()) - 1;
				if (a(j).height() % a(s[0]).height() > 0) n -= 1;
				for (p = 0; p < s.length && a(s[p]).html() != a(m).html(); p++);
				p > n && p - n >= 0 && p - n < s.length && j.scrollTo(s[p - n])
			}
			var q = {
				tagchars: g,
				sources: null,
				capture_tag: null,
				replace_tag: null,
				menu: null,
				menu_class: "tagmate-menu",
				menu_option_class: "tagmate-menu-option",
				menu_option_active_class: "tagmate-menu-option-active"
			};
			return this.each(function() {
				function j() {
					n.hide();
					var u = h(m);
					if (u) {
						var v = u[0],
							w = u.substr(1),
							y = m.getSelection(),
							C = e(m.val(), v, y.start);
						y.start - C <= u.length &&
						function(B) {
							if (typeof q.sources[v] === "object") B(tagmate.filter_options(q.sources[v], w));
							else typeof q.sources[v] === "function" ? q.sources[v]({
								term: w
							}, B) : B()
						}(function(B) {
							if (B && B.length > 0) {
								l(n, B);
								n.css("top", m.outerHeight() - 1 + "px");
								n.show();
								for (var A = m.data("_tagmate_sources"), x = 0; x < B.length; x++) {
									for (var M = false, L = 0; !M && L < A[v].length; L++) M = A[v][L].value == B[x].value;
									M || A[v].push(B[x])
								}
							}
							u && q.capture_tag && q.capture_tag(u)
						})
					}
				}
				b && a.extend(q, b);
				var m = a(this);
				m.data("_tagmate_tagchars", q.tagchars);
				var p = {};
				for (var s in q.sources) p[s] = [];
				m.data("_tagmate_sources", p);
				var n = q.menu;
				if (!n) {
					n = a("<div class='" + q.menu_class + "'></div>");
					m.after(n)
				}
				m.offset();
				n.css("position", "absolute");
				n.hide();
				var r = false;
				a(m).unbind(".tagmate").bind("focus.tagmate", function() {
					j()
				}).bind("blur.tagmate", function() {
					setTimeout(function() {
						n.hide()
					}, 300)
				}).bind("click.tagmate", function() {
					j()
				}).bind("keydown.tagmate", function(u) {
					if (n.is(":visible")) if (u.keyCode == 40) {
						o(n, "down");
						r = true;
						return false
					} else if (u.keyCode == 38) {
						o(n, "up");
						r = true;
						return false
					} else if (u.keyCode == 13) {
						u = n.children("." + q.menu_option_active_class).text();
						var v = h(m);
						if (v && u) {
							k(m, v, u);
							n.hide();
							r = true;
							return false
						}
					} else if (u.keyCode == 27) {
						n.hide();
						r = true;
						return false
					}
				}).bind("keyup.tagmate", function() {
					if (r) {
						r = false;
						return true
					}
					j()
				});
				a("." + q.menu_class + " ." + q.menu_option_class).die("click.tagmate").live("click.tagmate", function() {
					var u = a(this).text(),
						v = h(m);
					k(m, v, u);
					m.keyup()
				})
			})
		}
	})
})(jQuery);
(function(a) {
	function c(g) {
		var b;
		if (g && g.constructor == Array && g.length == 3) return g;
		if (b = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(g)) return [parseInt(b[1]), parseInt(b[2]), parseInt(b[3])];
		if (b = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(g)) return [parseFloat(b[1]) * 2.55, parseFloat(b[2]) * 2.55, parseFloat(b[3]) * 2.55];
		if (b = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(g)) return [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)];
		if (b = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(g)) return [parseInt(b[1] + b[1], 16), parseInt(b[2] + b[2], 16), parseInt(b[3] + b[3], 16)];
		return f[a.trim(g).toLowerCase()]
	}
	function d(g, b) {
		var e;
		do {
			e = a.curCSS(g, b);
			if (e != "" && e != "transparent" || a.nodeName(g, "body")) break;
			b = "backgroundColor"
		} while (g = g.parentNode);
		return c(e)
	}
	a.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "color", "outlineColor"], function(g, b) {
		a.fx.step[b] = function(e) {
			if (e.state == 0) {
				e.start = d(e.elem, b);
				e.end = c(e.end)
			}
			e.elem.style[b] = "rgb(" + [Math.max(Math.min(parseInt(e.pos * (e.end[0] - e.start[0]) + e.start[0]), 255), 0), Math.max(Math.min(parseInt(e.pos * (e.end[1] - e.start[1]) + e.start[1]), 255), 0), Math.max(Math.min(parseInt(e.pos * (e.end[2] - e.start[2]) + e.start[2]), 255), 0)].join(",") + ")"
		}
	});
	var f = {
		aqua: [0, 255, 255],
		azure: [240, 255, 255],
		beige: [245, 245, 220],
		black: [0, 0, 0],
		blue: [0, 0, 255],
		brown: [165, 42, 42],
		cyan: [0, 255, 255],
		darkblue: [0, 0, 139],
		darkcyan: [0, 139, 139],
		darkgrey: [169, 169, 169],
		darkgreen: [0, 100, 0],
		darkkhaki: [189, 183, 107],
		darkmagenta: [139, 0, 139],
		darkolivegreen: [85, 107, 47],
		darkorange: [255, 140, 0],
		darkorchid: [153, 50, 204],
		darkred: [139, 0, 0],
		darksalmon: [233, 150, 122],
		darkviolet: [148, 0, 211],
		fuchsia: [255, 0, 255],
		gold: [255, 215, 0],
		green: [0, 128, 0],
		indigo: [75, 0, 130],
		khaki: [240, 230, 140],
		lightblue: [173, 216, 230],
		lightcyan: [224, 255, 255],
		lightgreen: [144, 238, 144],
		lightgrey: [211, 211, 211],
		lightpink: [255, 182, 193],
		lightyellow: [255, 255, 224],
		lime: [0, 255, 0],
		magenta: [255, 0, 255],
		maroon: [128, 0, 0],
		navy: [0, 0, 128],
		olive: [128, 128, 0],
		orange: [255, 165, 0],
		pink: [255, 192, 203],
		purple: [128, 0, 128],
		violet: [128, 0, 128],
		red: [255, 0, 0],
		silver: [192, 192, 192],
		white: [255, 255, 255],
		yellow: [255, 255, 0]
	}
})(jQuery);
jQuery.cookie = function(a, c, d) {
	if (arguments.length > 1 && String(c) !== "[object Object]") {
		d = jQuery.extend({}, d);
		if (c === null || c === undefined) d.expires = -1;
		if (typeof d.expires === "number") {
			var f = d.expires,
				g = d.expires = new Date;
			g.setDate(g.getDate() + f)
		}
		c = String(c);
		return document.cookie = [encodeURIComponent(a), "=", d.raw ? c : encodeURIComponent(c), d.expires ? "; expires=" + d.expires.toUTCString() : "", d.path ? "; path=" + d.path : "", d.domain ? "; domain=" + d.domain : "", d.secure ? "; secure" : ""].join("")
	}
	d = c || {};
	g = d.raw ?
	function(b) {
		return b
	} : decodeURIComponent;
	return (f = (new RegExp("(?:^|; )" + encodeURIComponent(a) + "=([^;]*)")).exec(document.cookie)) ? g(f[1]) : null
};
if (!window.JSON) window.JSON = {};
(function() {
	function a(o) {
		return o < 10 ? "0" + o : o
	}
	function c(o) {
		b.lastIndex = 0;
		return b.test(o) ? '"' + o.replace(b, function(q) {
			var j = k[q];
			return typeof j === "string" ? j : "\\u" + ("0000" + q.charCodeAt(0).toString(16)).slice(-4)
		}) + '"' : '"' + o + '"'
	}
	function d(o, q) {
		var j, m, p = e,
			s, n = q[o];
		if (n && typeof n === "object" && typeof n.toJSON === "function") n = n.toJSON(o);
		if (typeof l === "function") n = l.call(q, o, n);
		switch (typeof n) {
		case "string":
			return c(n);
		case "number":
			return isFinite(n) ? String(n) : "null";
		case "boolean":
		case "null":
			return String(n);
		case "object":
			if (!n) return "null";
			e += h;
			s = [];
			if (Object.prototype.toString.apply(n) === "[object Array]") {
				m = n.length;
				for (o = 0; o < m; o += 1) s[o] = d(o, n) || "null";
				q = s.length === 0 ? "[]" : e ? "[\n" + e + s.join(",\n" + e) + "\n" + p + "]" : "[" + s.join(",") + "]";
				e = p;
				return q
			}
			if (l && typeof l === "object") {
				m = l.length;
				for (o = 0; o < m; o += 1) {
					j = l[o];
					if (typeof j === "string") if (q = d(j, n)) s.push(c(j) + (e ? ": " : ":") + q)
				}
			} else for (j in n) if (Object.hasOwnProperty.call(n, j)) if (q = d(j, n)) s.push(c(j) + (e ? ": " : ":") + q);
			q = s.length === 0 ? "{}" : e ? "{\n" + e + s.join(",\n" + e) + "\n" + p + "}" : "{" + s.join(",") + "}";
			e = p;
			return q
		}
	}
	if (typeof Date.prototype.toJSON !== "function") {
		Date.prototype.toJSON = function() {
			return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z" : null
		};
		String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
			return this.valueOf()
		}
	}
	var f = window.JSON,
		g = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		b = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		e, h, k = {
			"\u0008": "\\b",
			"\t": "\\t",
			"\n": "\\n",
			"\u000c": "\\f",
			"\r": "\\r",
			'"': '\\"',
			"\\": "\\\\"
		},
		l;
	if (typeof f.stringify !== "function") f.stringify = function(o, q, j) {
		var m;
		h = e = "";
		if (typeof j === "number") for (m = 0; m < j; m += 1) h += " ";
		else if (typeof j === "string") h = j;
		if ((l = q) && typeof q !== "function" && (typeof q !== "object" || typeof q.length !== "number")) throw new Error("JSON.stringify");
		return d("", {
			"": o
		})
	};
	if (typeof f.parse !== "function") f.parse = function(o, q) {
		function j(m, p) {
			var s, n, r = m[p];
			if (r && typeof r === "object") for (s in r) if (Object.hasOwnProperty.call(r, s)) {
				n = j(r, s);
				if (n !== undefined) r[s] = n;
				else delete r[s]
			}
			return q.call(m, p, r)
		}
		o = String(o);
		g.lastIndex = 0;
		if (g.test(o)) o = o.replace(g, function(m) {
			return "\\u" + ("0000" + m.charCodeAt(0).toString(16)).slice(-4)
		});
		if (/^[\],:{}\s]*$/.test(o.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
			o = eval("(" + o + ")");
			return typeof q === "function" ? j({
				"": o
			}, "") : o
		}
		throw new SyntaxError("JSON.parse");
	}
})(); /*
 New BSD License <http://creativecommons.org/licenses/BSD/>
*/
(function(a, c) {
	var d = a.History = a.History || {},
		f = a.jQuery;
	if (typeof d.Adapter !== "undefined") throw new Error("History.js Adapter has already been loaded...");
	d.Adapter = {
		bind: function(g, b, e) {
			f(g).bind(b, e)
		},
		trigger: function(g, b, e) {
			f(g).trigger(b, e)
		},
		extractEventData: function(g, b, e) {
			return b && b.originalEvent && b.originalEvent[g] || e && e[g] || c
		},
		onDomLoad: function(g) {
			f(g)
		}
	};
	typeof d.init !== "undefined" && d.init()
})(window); /*
 New BSD License <http://creativecommons.org/licenses/BSD/>
*/
(function(a) {
	var c = a.document,
		d = a.setTimeout || d,
		f = a.clearTimeout || f,
		g = a.setInterval || g,
		b = a.History = a.History || {};
	if (typeof b.initHtml4 !== "undefined") throw new Error("History.js HTML4 Support has already been loaded...");
	b.initHtml4 = function() {
		if (typeof b.initHtml4.initialized !== "undefined") return false;
		else b.initHtml4.initialized = true;
		b.enabled = true;
		b.savedHashes = [];
		b.isLastHash = function(e) {
			var h = b.getHashByIndex();
			return e === h
		};
		b.saveHash = function(e) {
			if (b.isLastHash(e)) return false;
			b.savedHashes.push(e);
			return true
		};
		b.getHashByIndex = function(e) {
			var h = null;
			return h = typeof e === "undefined" ? b.savedHashes[b.savedHashes.length - 1] : e < 0 ? b.savedHashes[b.savedHashes.length + e] : b.savedHashes[e]
		};
		b.discardedHashes = {};
		b.discardedStates = {};
		b.discardState = function(e, h, k) {
			var l = b.getHashByState(e);
			b.discardedStates[l] = {
				discardedState: e,
				backState: k,
				forwardState: h
			};
			return true
		};
		b.discardHash = function(e, h, k) {
			b.discardedHashes[e] = {
				discardedHash: e,
				backState: k,
				forwardState: h
			};
			return true
		};
		b.discardedState = function(e) {
			e = b.getHashByState(e);
			return b.discardedStates[e] || false
		};
		b.discardedHash = function(e) {
			return b.discardedHashes[e] || false
		};
		b.recycleState = function(e) {
			var h = b.getHashByState(e);
			b.discardedState(e) && delete b.discardedStates[h];
			return true
		};
		if (b.emulated.hashChange) {
			b.hashChangeInit = function() {
				b.checkerFunction = null;
				var e = "",
					h, k, l;
				if (b.isInternetExplorer()) {
					h = c.createElement("iframe");
					h.setAttribute("id", "historyjs-iframe");
					h.style.display = "none";
					c.body.appendChild(h);
					h.contentWindow.document.open();
					h.contentWindow.document.close();
					k = "";
					l = false;
					b.checkerFunction = function() {
						if (l) return false;
						l = true;
						var o = b.getHash() || "",
							q = b.unescapeHash(h.contentWindow.document.location.hash) || "";
						if (o !== e) {
							e = o;
							if (q !== o) {
								k = o;
								h.contentWindow.document.open();
								h.contentWindow.document.close();
								h.contentWindow.document.location.hash = b.escapeHash(o)
							}
							b.Adapter.trigger(a, "hashchange")
						} else if (q !== k) {
							k = q;
							b.setHash(q, false)
						}
						l = false;
						return true
					}
				} else b.checkerFunction = function() {
					var o = b.getHash();
					if (o !== e) {
						e = o;
						b.Adapter.trigger(a, "hashchange")
					}
					return true
				};
				b.intervalList.push(g(b.checkerFunction, b.options.hashChangeInterval));
				return true
			};
			b.Adapter.onDomLoad(b.hashChangeInit)
		}
		if (b.emulated.pushState) {
			b.onHashChange = function(e) {
				var h = b.getHashByUrl(e && e.newURL || c.location.href);
				e = null;
				if (b.isLastHash(h)) {
					b.busy(false);
					return false
				}
				b.doubleCheckComplete();
				b.saveHash(h);
				if (h && b.isTraditionalAnchor(h)) {
					b.Adapter.trigger(a, "anchorchange");
					b.busy(false);
					return false
				}
				e = b.extractState(b.getFullUrl(h || c.location.href, false), true);
				if (b.isLastSavedState(e)) {
					b.busy(false);
					return false
				}
				b.getHashByState(e);
				if (h = b.discardedState(e)) {
					b.getHashByIndex(-2) === b.getHashByState(h.forwardState) ? b.back(false) : b.forward(false);
					return false
				}
				b.pushState(e.data, e.title, e.url, false);
				return true
			};
			b.Adapter.bind(a, "hashchange", b.onHashChange);
			b.pushState = function(e, h, k, l) {
				if (b.getHashByUrl(k)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
				if (l !== false && b.busy()) {
					b.pushQueue({
						scope: b,
						callback: b.pushState,
						args: arguments,
						queue: l
					});
					return false
				}
				b.busy(true);
				var o = b.createStateObject(e, h, k),
					q = b.getHashByState(o),
					j = b.getState(false);
				j = b.getHashByState(j);
				var m = b.getHash();
				b.storeState(o);
				b.expectedStateId = o.id;
				b.recycleState(o);
				b.setTitle(o);
				if (q === j) {
					b.busy(false);
					return false
				}
				if (q !== m && q !== b.getShortUrl(c.location.href)) {
					b.setHash(q, false);
					return false
				}
				b.saveState(o);
				b.Adapter.trigger(a, "statechange");
				b.busy(false);
				return true
			};
			b.replaceState = function(e, h, k, l) {
				if (b.getHashByUrl(k)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
				if (l !== false && b.busy()) {
					b.pushQueue({
						scope: b,
						callback: b.replaceState,
						args: arguments,
						queue: l
					});
					return false
				}
				b.busy(true);
				var o = b.createStateObject(e, h, k),
					q = b.getState(false),
					j = b.getStateByIndex(-2);
				b.discardState(q, o, j);
				b.pushState(o.data, o.title, o.url, false);
				return true
			}
		}
		b.emulated.pushState && b.getHash() && !b.emulated.hashChange && b.Adapter.onDomLoad(function() {
			b.Adapter.trigger(a, "hashchange")
		})
	};
	typeof b.init !== "undefined" && b.init()
})(window); /*
 New BSD License <http://creativecommons.org/licenses/BSD/>
 Public Domain
 Public Domain
*/

(function(a, c) {
	var d = a.console || c,
		f = a.document,
		g = a.navigator,
		b = a.sessionStorage || false,
		e = a.setTimeout,
		h = a.clearTimeout,
		k = a.setInterval,
		l = a.clearInterval,
		o = a.JSON,
		q = a.alert,
		j = a.History = a.History || {},
		m = a.history;
	o.stringify = o.stringify || o.encode;
	o.parse = o.parse || o.decode;
	if (typeof j.init !== "undefined") throw new Error("History.js Core has already been loaded...");
	j.init = function() {
		if (typeof j.Adapter === "undefined") return false;
		typeof j.initCore !== "undefined" && j.initCore();
		typeof j.initHtml4 !== "undefined" && j.initHtml4();
		return true
	};
	j.initCore = function() {
		if (typeof j.initCore.initialized !== "undefined") return false;
		else j.initCore.initialized = true;
		j.options = j.options || {};
		j.options.hashChangeInterval = j.options.hashChangeInterval || 100;
		j.options.safariPollInterval = j.options.safariPollInterval || 500;
		j.options.doubleCheckInterval = j.options.doubleCheckInterval || 500;
		j.options.storeInterval = j.options.storeInterval || 1E3;
		j.options.busyDelay = j.options.busyDelay || 250;
		j.options.debug = j.options.debug || false;
		j.options.initialTitle = j.options.initialTitle || f.title;
		j.intervalList = [];
		j.clearAllIntervals = function() {
			var n, r = j.intervalList;
			if (typeof r !== "undefined" && r !== null) {
				for (n = 0; n < r.length; n++) l(r[n]);
				j.intervalList = null
			}
		};
		j.debug = function() {
			j.options.debug && j.log.apply(j, arguments)
		};
		j.log = function() {
			var n = !(typeof d === "undefined" || typeof d.log === "undefined" || typeof d.log.apply === "undefined"),
				r = f.getElementById("log"),
				u, v, w, y;
			if (n) {
				v = Array.prototype.slice.call(arguments);
				u = v.shift();
				typeof d.debug !== "undefined" ? d.debug.apply(d, [u, v]) : d.log.apply(d, [u, v])
			} else u = "\n" + arguments[0] + "\n";
			v = 1;
			for (w = arguments.length; v < w; ++v) {
				y = arguments[v];
				if (typeof y === "object" && typeof o !== "undefined") try {
					y = o.stringify(y)
				} catch (C) {}
				u += "\n" + y + "\n"
			}
			if (r) {
				r.value += u + "\n-----\n";
				r.scrollTop = r.scrollHeight - r.clientHeight
			} else n || q(u);
			return true
		};
		j.getInternetExplorerMajorVersion = function() {
			return j.getInternetExplorerMajorVersion.cached = typeof j.getInternetExplorerMajorVersion.cached !== "undefined" ? j.getInternetExplorerMajorVersion.cached : function() {
				for (var n = 3, r = f.createElement("div"), u = r.getElementsByTagName("i");
				(r.innerHTML = "<!--[if gt IE " + ++n + "]><i></i><![endif]--\>") && u[0];);
				return n > 4 ? n : false
			}()
		};
		j.isInternetExplorer = function() {
			return j.isInternetExplorer.cached = typeof j.isInternetExplorer.cached !== "undefined" ? j.isInternetExplorer.cached : Boolean(j.getInternetExplorerMajorVersion())
		};
		j.emulated = {
			pushState: !Boolean(a.history && a.history.pushState && a.history.replaceState && !(/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(g.userAgent) || /AppleWebKit\/5([0-2]|3[0-2])/i.test(g.userAgent))),
			hashChange: Boolean(!("onhashchange" in a || "onhashchange" in f) || j.isInternetExplorer() && j.getInternetExplorerMajorVersion() < 8)
		};
		j.enabled = !j.emulated.pushState;
		j.bugs = {
			setHash: Boolean(!j.emulated.pushState && g.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(g.userAgent)),
			safariPoll: Boolean(!j.emulated.pushState && g.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(g.userAgent)),
			ieDoubleCheck: Boolean(j.isInternetExplorer() && j.getInternetExplorerMajorVersion() < 8),
			hashEscape: Boolean(j.isInternetExplorer() && j.getInternetExplorerMajorVersion() < 7)
		};
		j.isEmptyObject = function(n) {
			for (var r in n) return false;
			return true
		};
		j.cloneObject = function(n) {
			if (n) {
				n = o.stringify(n);
				n = o.parse(n)
			} else n = {};
			return n
		};
		j.getRootUrl = function() {
			var n = f.location.protocol + "//" + (f.location.hostname || f.location.host);
			if (f.location.port) n += ":" + f.location.port;
			n += "/";
			return n
		};
		j.getBaseHref = function() {
			var n = f.getElementsByTagName("base"),
				r = null;
			r = "";
			if (n.length === 1) {
				r = n[0];
				r = r.href.replace(/[^\/]+$/, "")
			}
			if (r = r.replace(/\/+$/, "")) r += "/";
			return r
		};
		j.getBaseUrl = function() {
			return j.getBaseHref() || j.getBasePageUrl() || j.getRootUrl()
		};
		j.getPageUrl = function() {
			return ((j.getState(false, false) || {}).url || f.location.href).replace(/\/+$/, "").replace(/[^\/]+$/, function(n) {
				return /\./.test(n) ? n : n + "/"
			})
		};
		j.getBasePageUrl = function() {
			return f.location.href.replace(/[#\?].*/, "").replace(/[^\/]+$/, function(n) {
				return /[^\/]$/.test(n) ? "" : n
			}).replace(/\/+$/, "") + "/"
		};
		j.getFullUrl = function(n, r) {
			var u = n,
				v = n.substring(0, 1);
			r = typeof r === "undefined" ? true : r;
			/[a-z]+\:\/\//.test(n) || (u = v === "/" ? j.getRootUrl() + n.replace(/^\/+/, "") : v === "#" ? j.getPageUrl().replace(/#.*/, "") + n : v === "?" ? j.getPageUrl().replace(/[\?#].*/, "") + n : r ? j.getBaseUrl() + n.replace(/^(\.\/)+/, "") : j.getBasePageUrl() + n.replace(/^(\.\/)+/, ""));
			return u.replace(/\#$/, "")
		};
		j.getShortUrl = function(n) {
			n = n;
			var r = j.getBaseUrl(),
				u = j.getRootUrl();
			if (j.emulated.pushState) n = n.replace(r, "");
			n = n.replace(u, "/");
			if (j.isTraditionalAnchor(n)) n = "./" + n;
			return n = n.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
		};
		j.store = {};
		j.idToState = j.idToState || {};
		j.stateToId = j.stateToId || {};
		j.urlToId = j.urlToId || {};
		j.storedStates = j.storedStates || [];
		j.savedStates = j.savedStates || [];
		j.normalizeStore = function() {
			j.store.idToState = j.store.idToState || {};
			j.store.urlToId = j.store.urlToId || {};
			j.store.stateToId = j.store.stateToId || {}
		};
		j.getState = function(n, r) {
			if (typeof n === "undefined") n = true;
			if (typeof r === "undefined") r = true;
			var u = j.getLastSavedState();
			if (!u && r) u = j.createStateObject();
			if (n) {
				u = j.cloneObject(u);
				u.url = u.cleanUrl || u.url
			}
			return u
		};
		j.getIdByState = function(n) {
			var r = j.extractId(n.url),
				u;
			if (!r) {
				u = j.getStateString(n);
				if (typeof j.stateToId[u] !== "undefined") r = j.stateToId[u];
				else if (typeof j.store.stateToId[u] !== "undefined") r = j.store.stateToId[u];
				else {
					for (;;) {
						r = (new Date).getTime() + String(Math.random()).replace(/\D/g, "");
						if (typeof j.idToState[r] === "undefined" && typeof j.store.idToState[r] === "undefined") break
					}
					j.stateToId[u] = r;
					j.idToState[r] = n
				}
			}
			return r
		};
		j.normalizeState = function(n) {
			var r;
			if (!n || typeof n !== "object") n = {};
			if (typeof n.normalized !== "undefined") return n;
			if (!n.data || typeof n.data !== "object") n.data = {};
			r = {};
			r.normalized = true;
			r.title = n.title || "";
			r.url = j.getFullUrl(j.unescapeString(n.url || f.location.href));
			r.hash = j.getShortUrl(r.url);
			r.data = j.cloneObject(n.data);
			r.id = j.getIdByState(r);
			r.cleanUrl = r.url.replace(/\??\&_suid.*/, "");
			r.url = r.cleanUrl;
			n = !j.isEmptyObject(r.data);
			if (r.title || n) {
				r.hash = j.getShortUrl(r.url).replace(/\??\&_suid.*/, "");
				/\?/.test(r.hash) || (r.hash += "?");
				r.hash += "&_suid=" + r.id
			}
			r.hashedUrl = j.getFullUrl(r.hash);
			if ((j.emulated.pushState || j.bugs.safariPoll) && j.hasUrlDuplicate(r)) r.url = r.hashedUrl;
			return r
		};
		j.createStateObject = function(n, r, u) {
			n = {
				data: n,
				title: r,
				url: u
			};
			return n = j.normalizeState(n)
		};
		j.getStateById = function(n) {
			n = String(n);
			return j.idToState[n] || j.store.idToState[n] || c
		};
		j.getStateString = function(n) {
			n = {
				data: j.normalizeState(n).data,
				title: n.title,
				url: n.url
			};
			return o.stringify(n)
		};
		j.getStateId = function(n) {
			return j.normalizeState(n).id
		};
		j.getHashByState = function(n) {
			return j.normalizeState(n).hash
		};
		j.extractId = function(n) {
			return ((n = /(.*)\&_suid=([0-9]+)$/.exec(n)) ? String(n[2] || "") : "") || false
		};
		j.isTraditionalAnchor = function(n) {
			return !/[\/\?\.]/.test(n)
		};
		j.extractState = function(n, r) {
			var u = null,
				v, w;
			r = r || false;
			if (v = j.extractId(n)) u = j.getStateById(v);
			if (!u) {
				w = j.getFullUrl(n);
				if (v = j.getIdByUrl(w) || false) u = j.getStateById(v);
				if (!u && r && !j.isTraditionalAnchor(n)) u = j.createStateObject(null, null, w)
			}
			return u
		};
		j.getIdByUrl = function(n) {
			return j.urlToId[n] || j.store.urlToId[n] || c
		};
		j.getLastSavedState = function() {
			return j.savedStates[j.savedStates.length - 1] || c
		};
		j.getLastStoredState = function() {
			return j.storedStates[j.storedStates.length - 1] || c
		};
		j.hasUrlDuplicate = function(n) {
			var r = false;
			return r = (r = j.extractState(n.url)) && r.id !== n.id
		};
		j.storeState = function(n) {
			j.urlToId[n.url] = n.id;
			j.storedStates.push(j.cloneObject(n));
			return n
		};
		j.isLastSavedState = function(n) {
			var r = false;
			if (j.savedStates.length) {
				n = n.id;
				r = j.getLastSavedState();
				r = r.id;
				r = n === r
			}
			return r
		};
		j.saveState = function(n) {
			if (j.isLastSavedState(n)) return false;
			j.savedStates.push(j.cloneObject(n));
			return true
		};
		j.getStateByIndex = function(n) {
			var r = null;
			return r = typeof n === "undefined" ? j.savedStates[j.savedStates.length - 1] : n < 0 ? j.savedStates[j.savedStates.length + n] : j.savedStates[n]
		};
		j.getHash = function() {
			return j.unescapeHash(f.location.hash)
		};
		j.unescapeString = function(n) {
			n = n;
			for (var r;;) {
				r = a.unescape(n);
				if (r === n) break;
				n = r
			}
			return n
		};
		j.unescapeHash = function(n) {
			n = j.normalizeHash(n);
			return n = j.unescapeString(n)
		};
		j.normalizeHash = function(n) {
			return n.replace(/[^#]*#/, "").replace(/#.*/, "")
		};
		j.setHash = function(n, r) {
			var u, v;
			if (r !== false && j.busy()) {
				j.pushQueue({
					scope: j,
					callback: j.setHash,
					args: arguments,
					queue: r
				});
				return false
			}
			u = j.escapeHash(n);
			j.busy(true);
			if ((v = j.extractState(n, true)) && !j.emulated.pushState) j.pushState(v.data, v.title, v.url, false);
			else if (f.location.hash !== u) if (j.bugs.setHash) {
				v = j.getPageUrl();
				j.pushState(null, null, v + "#" + u, false)
			} else f.location.hash = u;
			return j
		};
		j.escapeHash = function(n) {
			n = j.normalizeHash(n);
			n = a.escape(n);
			j.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?"));
			return n
		};
		j.getHashByUrl = function(n) {
			n = String(n).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
			return n = j.unescapeHash(n)
		};
		j.setTitle = function(n) {
			var r = n.title,
				u;
			if (!r) if ((u = j.getStateByIndex(0)) && u.url === n.url) r = u.title || j.options.initialTitle;
			try {
				f.getElementsByTagName("title")[0].innerHTML = r.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
			} catch (v) {}
			f.title = r;
			return j
		};
		j.queues = [];
		j.busy = function(n) {
			if (typeof n !== "undefined") j.busy.flag = n;
			else if (typeof j.busy.flag === "undefined") j.busy.flag = false;
			if (!j.busy.flag) {
				h(j.busy.timeout);
				var r = function() {
					var u, v;
					if (!j.busy.flag) for (u = j.queues.length - 1; u >= 0; --u) {
						v = j.queues[u];
						if (v.length !== 0) {
							v = v.shift();
							j.fireQueueItem(v);
							j.busy.timeout = e(r, j.options.busyDelay)
						}
					}
				};
				j.busy.timeout = e(r, j.options.busyDelay)
			}
			return j.busy.flag
		};
		j.busy.flag = false;
		j.fireQueueItem = function(n) {
			return n.callback.apply(n.scope || j, n.args || [])
		};
		j.pushQueue = function(n) {
			j.queues[n.queue || 0] = j.queues[n.queue || 0] || [];
			j.queues[n.queue || 0].push(n);
			return j
		};
		j.queue = function(n, r) {
			if (typeof n === "function") n = {
				callback: n
			};
			if (typeof r !== "undefined") n.queue = r;
			j.busy() ? j.pushQueue(n) : j.fireQueueItem(n);
			return j
		};
		j.clearQueue = function() {
			j.busy.flag = false;
			j.queues = [];
			return j
		};
		j.stateChanged = false;
		j.doubleChecker = false;
		j.doubleCheckComplete = function() {
			j.stateChanged = true;
			j.doubleCheckClear();
			return j
		};
		j.doubleCheckClear = function() {
			if (j.doubleChecker) {
				h(j.doubleChecker);
				j.doubleChecker = false
			}
			return j
		};
		j.doubleCheck = function(n) {
			j.stateChanged = false;
			j.doubleCheckClear();
			if (j.bugs.ieDoubleCheck) j.doubleChecker = e(function() {
				j.doubleCheckClear();
				j.stateChanged || n();
				return true
			}, j.options.doubleCheckInterval);
			return j
		};
		j.safariStatePoll = function() {
			var n = j.extractState(f.location.href);
			if (!j.isLastSavedState(n)) {
				n || j.createStateObject();
				j.Adapter.trigger(a, "popstate");
				return j
			}
		};
		j.back = function(n) {
			if (n !== false && j.busy()) {
				j.pushQueue({
					scope: j,
					callback: j.back,
					args: arguments,
					queue: n
				});
				return false
			}
			j.busy(true);
			j.doubleCheck(function() {
				j.back(false)
			});
			m.go(-1);
			return true
		};
		j.forward = function(n) {
			if (n !== false && j.busy()) {
				j.pushQueue({
					scope: j,
					callback: j.forward,
					args: arguments,
					queue: n
				});
				return false
			}
			j.busy(true);
			j.doubleCheck(function() {
				j.forward(false)
			});
			m.go(1);
			return true
		};
		j.go = function(n, r) {
			var u;
			if (n > 0) for (u = 1; u <= n; ++u) j.forward(r);
			else if (n < 0) for (u = -1; u >= n; --u) j.back(r);
			else throw new Error("History.go: History.go requires a positive or negative integer passed.");
			return j
		};
		if (j.emulated.pushState) {
			var p = function() {};
			j.pushState = j.pushState || p;
			j.replaceState = j.replaceState || p
		} else {
			j.onPopState = function(n, r) {
				var u = false;
				u = false;
				j.doubleCheckComplete();
				if (u = j.getHash()) {
					if (n = j.extractState(u || f.location.href, true)) j.replaceState(n.data, n.title, n.url, false);
					else {
						j.Adapter.trigger(a, "anchorchange");
						j.busy(false)
					}
					return j.expectedStateId = false
				}(u = (u = j.Adapter.extractEventData("state", n, r) || false) ? j.getStateById(u) : j.expectedStateId ? j.getStateById(j.expectedStateId) : j.extractState(f.location.href)) || (u = j.createStateObject(null, null, f.location.href));
				j.expectedStateId = false;
				if (j.isLastSavedState(u)) {
					j.busy(false);
					return false
				}
				j.storeState(u);
				j.saveState(u);
				j.setTitle(u);
				j.Adapter.trigger(a, "statechange");
				j.busy(false);
				return true
			};
			j.Adapter.bind(a, "popstate", j.onPopState);
			j.pushState = function(n, r, u, v) {
				if (j.getHashByUrl(u) && j.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
				if (v !== false && j.busy()) {
					j.pushQueue({
						scope: j,
						callback: j.pushState,
						args: arguments,
						queue: v
					});
					return false
				}
				j.busy(true);
				var w = j.createStateObject(n, r, u);
				if (j.isLastSavedState(w)) j.busy(false);
				else {
					j.storeState(w);
					j.expectedStateId = w.id;
					m.pushState(w.id, w.title, w.url);
					j.Adapter.trigger(a, "popstate")
				}
				return true
			};
			j.replaceState = function(n, r, u, v) {
				if (j.getHashByUrl(u) && j.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
				if (v !== false && j.busy()) {
					j.pushQueue({
						scope: j,
						callback: j.replaceState,
						args: arguments,
						queue: v
					});
					return false
				}
				j.busy(true);
				var w = j.createStateObject(n, r, u);
				if (j.isLastSavedState(w)) j.busy(false);
				else {
					j.storeState(w);
					j.expectedStateId = w.id;
					m.replaceState(w.id, w.title, w.url);
					j.Adapter.trigger(a, "popstate")
				}
				return true
			}
		}
		if (b) try {
			j.store = o.parse(b.getItem("History.store")) || {}
		} catch (s) {
			j.store = {}
		} else j.store = {};
		j.normalizeStore();
		j.Adapter.bind(a, "beforeunload", j.clearAllIntervals);
		j.Adapter.bind(a, "unload", j.clearAllIntervals);
		j.saveState(j.storeState(j.extractState(f.location.href, true)));
		if (b) {
			j.onUnload = function() {
				var n, r;
				try {
					n = o.parse(b.getItem("History.store")) || {}
				} catch (u) {
					n = {}
				}
				n.idToState = n.idToState || {};
				n.urlToId = n.urlToId || {};
				n.stateToId = n.stateToId || {};
				for (r in j.idToState) if (j.idToState.hasOwnProperty(r)) n.idToState[r] = j.idToState[r];
				for (r in j.urlToId) if (j.urlToId.hasOwnProperty(r)) n.urlToId[r] = j.urlToId[r];
				for (r in j.stateToId) if (j.stateToId.hasOwnProperty(r)) n.stateToId[r] = j.stateToId[r];
				j.store = n;
				j.normalizeStore();
				b.setItem("History.store", o.stringify(n))
			};
			j.intervalList.push(k(j.onUnload, j.options.storeInterval));
			j.Adapter.bind(a, "beforeunload", j.onUnload);
			j.Adapter.bind(a, "unload", j.onUnload)
		}
		if (!j.emulated.pushState) {
			j.bugs.safariPoll && j.intervalList.push(k(j.safariStatePoll, j.options.safariPollInterval));
			if (g.vendor === "Apple Computer, Inc." || (g.appCodeName || "") === "Mozilla") {
				j.Adapter.bind(a, "hashchange", function() {
					j.Adapter.trigger(a, "popstate")
				});
				j.getHash() && j.Adapter.onDomLoad(function() {
					j.Adapter.trigger(a, "hashchange")
				})
			}
		}
	};
	j.init()
})(window);


var BoardLayout = function() {
	return {
		setup: function() {
			$(document).ready(function() {
				BoardLayout.allPins()
			});
			$(window).resize(function() {
				BoardLayout.allPins()
			});
			$(function() {
				Like.gridListeners();
				Follow.listeners();
				Comment.gridComment();
				RepinDialog.setup();
				RepinDialog.grid();
				Zoom.setup()
			})
		},
		pinsContainer: ".BoardLayout",
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
		columnCount: 4,
		columns: 0,
		columnWidthInner: 192,
		columnMargin: 15,
		columnPadding: 30,
		columnContainerWidth: 0,
		allPins: function() {
			var a = document.documentElement.clientWidth;
			this.columnWidthOuter = this.columnWidthInner + this.columnMargin + this.columnPadding;
			this.columns = Math.max(this.columnCount, parseInt(a / this.columnWidthOuter));
			a = this.columnWidthOuter * this.columns - this.columnMargin;
			document.getElementById("profile") && this.columns--;
			document.getElementById("wrapper").style.width = a + "px";
			$(".LiquidContainer").css("width", a + "px");
			for (a = 0; a < this.columns; a++) this.pinArray[a] = 0;
			a = $(this.pinsContainer + " .pin");
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
			document.getElementById("ColumnContainer").style.height = Math.max.apply(Math, this.pinArray) + "px";
			this.showPins()
		},
		showPins: function() {
			$.browser.msie && parseInt($.browser.version) == 7 || $(this.pinsContainer).animate({
				opacity: "1"
			}, 300)
		}
	}
}();

var BoardPicker = function() {
	return {
		setup: function(a, c, d) {
			a = $(a);
			var f = $(".BoardListOverlay", a.parent()),
				g = $(".BoardList", a),
				b = $(".CurrentBoard", a),
				e = $("ul", g);
			a.click(function() {
				g.show();
				f.show()
			});
			f.click(function() {
				g.hide();
				f.hide()
			});
			$("li", e).live("click", function() {
				b.text($(this).text());
				f.hide();
				g.hide();
				c && c($(this).attr("data"));
				return false
			});
			a = $(".CreateBoard", g);
			var h = $("input", a),
				k = $(".Button", a);
			$("strong", k);
			var l = $(".CreateBoardStatus", a);
			h.defaultValue("Create New Board");
			k.click(function() {
				if (k.attr("disabled") == "disabled") return false;
				if (h.val() == "Create New Board") {
					l.html("Enter a board name").css("color", "red").show();
					return false
				}
				l.html("").hide();
				k.addClass("disabled").attr("disabled", "disabled");
				$.post("/board/create/", {
					name: h.val(),
					pass_category: true
				}, function(o) {
					if (o && o.status == "success") {
						e.append("<li data='" + o.id + "'><span>" + o.name + "</span></li>");
						g.hide();
						b.text(o.name);
						h.val("").blur();
						k.removeClass("disabled").removeAttr("disabled");
						d && d(o.id)
					} else {
						l.html(o.message).css("color", "red").show();
						k.removeClass("disabled").removeAttr("disabled")
					}
				}, "json");
				return false
			})
		}
	}
}();
var AddDialog = function() {
	return {
		setup: function(a) {
			var c = "#" + a,
				d = $(c);
			BoardPicker.setup(c + " .BoardPicker", function(f) {
				$(c + " #id_board").val(f)
			}, function(f) {
				$(c + " #id_board").val(f)
			});
			AddDialog.shareCheckboxes(a);
			Tagging.initTextarea(c + " .DescriptionTextarea");
			Tagging.priceTag(c + " .DescriptionTextarea", c + " .ImagePicker");
			$(".Buttons .RedButton", d).click(function() {
				trackGAEvent("pin", "clicked", "add_dialogue");
				button = $(this);
				label = $(this).children("strong");
				if (label.html() == "Pinning...") return false;
				if ($(".DescriptionTextarea", d).val() === "" || $(".DescriptionTextarea", d).val() === "Describe your pin...") {
					$(".mainerror", d).html("Please describe your pin").slideDown(300);
					return false
				} else $(".mainerror", d).slideUp(300, function() {
					$(this).html("")
				});
				button.addClass("disabled");
				label.html("Pinning...");
				$("#id_details", d).val($(".DescriptionTextarea", d).val());
				Tagging.loadTags(c + " .DescriptionTextarea", c + " #peeps_holder", c + " #id_tags", c + " #currency_holder");
				$("form", d).ajaxSubmit({
					type: "POST",
					dataType: "json",
					iframe: true,
					url: "/pin/create/",
					success: function(f) {
						if (f.status == "success") {
							trackGAEvent("pin", "success", "add_dialogue");
							window.location = f.url
						} else {
							$(".mainerror", d).html(f.message).slideDown(300);
							AddDialog.reset(a)
						}
					}
				});
				return false
			})
		},
		reset: function(a) {
			a === "CreateBoard" && CreateBoardDialog.reset();
			a === "ScrapePin" && ScrapePinDialog.reset();
			a === "UploadPin" && UploadPinDialog.reset();
			AddDialog._resets[a] && AddDialog._resets[a]()
		},
		close: function(a, c) {
			$("#" + a).addClass("super");
			Modal.show(c)
		},
		childClose: function(a, c) {
			var d = this,
				f = $("#" + c);
			$(".ModalContainer", f);
			d.reset(c);
			$("#" + a).removeClass("super");
			Modal.close(a);
			Modal.close(c)
		},
		pinBottom: function(a) {
			var c = $("#" + a);
			$(".PinBottom", c).slideDown(300, function() {
				var d = $(".modal:first", c);
				d.css("margin-bottom", "-" + d.outerHeight() / 2 + "px")
			})
		},
		shareCheckboxes: function(a) {
			function c(g) {
				var b = $("#" + a + " .publish_to_" + g),
					e = $("#" + a + " #id_publish_to_" + g);
				b.change(function() {
					if (b.is(":checked")) {
						e.attr("checked", "checked");
						b.parent().addClass("active")
					} else {
						e.removeAttr("checked");
						b.parent().removeClass("active")
					}
				});
				var h = b.is(":checked");
				return function() {
					if (h) {
						b.parent().addClass("active");
						b.attr("checked", "checked")
					} else {
						b.parent().removeClass("active");
						b.removeAttr("checked")
					}
				}
			}
			var d = c("facebook"),
				f = c("twitter");
			AddDialog._resets = AddDialog._resets || {};
			AddDialog._resets[a] = function() {
				d();
				f()
			}
		}
	}
}();
var Home = function() {
	return {
		setup: function() {
			$(window).scroll(function() {
				window.pageYOffset >= 44 ? $("#CategoriesBar, .Nag").addClass("fixed") : $("#CategoriesBar, .Nag").removeClass("fixed")
			});
			$("#home_request_invite_button").click(function() {
				var a = $(this);
				if ($("#home_request_invite").val() == "Your Email Address" || $("#home_request_invite").val() == "") $(".signup span").html("Please enter an email").css("color", "red");
				else {
					a.addClass("pressed").attr("disabled", "disabled");
					$.post("/", {
						email: $("#home_request_invite").val()
					}, function(c) {
						if (c.status == "success") {
							$(".signup span").html("Thanks. You're on the list!").css("color", "green");
							$("#home_request_invite").val("")
						} else {
							$(".signup span").html(c.message).css("color", "red");
							this_button.removeAttr("disabled").removeClass("pressed")
						}
					}, "json")
				}
				return false
			});
			$(".remove_activity_rec").live("click", function() {
				$this_element = $(this);
				$.get("/remove_follow_recommend/?rec_id=" + $(this).attr("data-remove_id"), function(a) {
					if (a && a.status == "success") {
						window.activity_feed.update_ui_followed_succeeded($this_element);
						a = $(this).parent().siblings(".hidden")[0];
						$(a).removeClass("hidden")
					} else alert(a.message)
				})
			});
			$(".remove_activity_invite").live("click", function() {
				var a = $(this);
				$.get("/remove_invite/?rec_id=" + $(this).attr("data-remove_id"), function(c) {
					if (c.status == "success") {
						window.activity_feed.update_ui_invited_user(a);
						c = $(this).parent().siblings(".hidden")[0];
						$(c).removeClass("hidden")
					} else alert(c.message)
				})
			});
			$("#follow_all_link").live("click", function() {
				$.get("/follow_all_recommends/", function(a) {
					a && a.status == "success" ? window.activity_feed.update_ui_followed_all_recommened() : alert(a.message)
				})
			});
			$("#invite_all_link").live("click", function() {
				$.get("/invite_all/", function(a) {
					a && a.status == "success" ? window.activity_feed.update_ui_invited_all_users() : alert(a.message)
				})
			})
		},
		activityFeedSupport: function() {
			this.init = function() {
				this.invite_all_link = $("#invite_all_link");
				this.follow_all_link = $("#follow_all_link")
			};
			this.update_ui_invited_user = function(a) {
				this.fade_row(a);
				if (this.invite_all_link && this.invite_all_link.length) if (this.invite_all_link.attr("data-total_count")) {
					a = this.invite_all_link.attr("data-total_count");
					if (a == "1") this.hide_invites();
					else {
						this.invite_all_link.attr("data-total_count", a - 1);
						this.invite_all_link.html("Invite all (" + (a - 1) + ")")
					}
				}
			};
			this.update_ui_followed_succeeded = function(a) {
				this.fade_row(a);
				if (this.follow_all_link && this.follow_all_link.length) if (this.follow_all_link.attr("data-total_count")) {
					a = this.follow_all_link.attr("data-total_count");
					if (a == "1") this.hide_recommends();
					else {
						this.follow_all_link.attr("data-total_count", a - 1);
						this.follow_all_link.html("Follow all (" + (a - 1) + ")")
					}
				}
			};
			this.update_ui_invited_all_users = function() {
				this.hide_invites()
			};
			this.update_ui_followed_all_recommened = function() {
				this.hide_recommends()
			};
			this.fade_row = function(a) {
				a.parents(".story:first").fadeOut()
			};
			this.hide_invites = function() {
				this.invite_all_link.parents("#invite_friends:first").fadeOut()
			};
			this.hide_recommends = function() {
				this.follow_all_link.parents("#recommended_friends:first").fadeOut()
			}
		}
	}
}();
var GetNewPins = function() {
	return {
		timeout: null,
		timeoutLength: 8192,
		timeoutLengthMax: 524288,
		marker: 0,
		indicator: "#NewIndicator",
		newPins: {
			html: "",
			number: 0,
			old_title: $("title").html()
		},
		setTimeout: function() {
			var a = this;
			a.timeout = setTimeout("GetNewPins.checkForPins()", a.timeoutLength)
		},
		resetTimeout: function() {
			window.clearTimeout(this.timeout);
			this.setTimeout()
		},
		trigerOnScroll: function() {
			var a = this;
			a.setTimeout();
			$(window).bind("scroll", function() {
				a.timeoutLength = 8192;
				a.resetTimeout()
			})
		},
		checkForPins: function() {
			var a = this;
			$.get("/new/", {
				marker: a.marker
			}, function(c) {
				if (c.number > 0) {
					var d = a.indicator;
					a.marker = c.marker;
					a.newPins.html += c.html;
					a.newPins.number += c.number;
					c = a.newPins.number === 1 ? a.newPins.number + " new pin" : a.newPins.number + " new pins";
					$("title").html("(" + a.newPins.number + ") " + a.newPins.old_title);
					$(d).html("<strong>" + c + "</strong><span></span>");
					$(d).hasClass("Offscreen") && $(d).removeClass("Offscreen");
					if (a.timeoutLength < a.timeoutLengthMax) a.timeoutLength *= 2;
					a.setTimeout()
				}
			})
		},
		showNewPins: function() {
			var a = this,
				c = a.indicator;
			$(".feed").length > 0 ? $(".feed").after(a.newPins.html) : $("#ColumnContainer").prepend(a.newPins.html);
			BoardLayout.allPins();
			$(c).addClass("Offscreen");
			$(c).html("<strong>&nbsp;</strong><span></span>");
			$("title").html(a.newPins.old_title);
			a.newPins = {
				html: "",
				number: 0,
				old_title: $("title").html()
			};
			a.resetTimeout();
			$("html, body").animate({
				scrollTop: "0px"
			}, 400);
			return false
		}
	}
}();
var BoardSort = BoardSort || {
	StartButton: "#slk_sort_boards",
	SaveButton: "#SortSave",
	FollowButtons: ".followBoard .button",
	Container: ".sortable",
	Objects: ".pinBoard",
	Helper: "#SortableHelper",
	showControls: function() {
		$(this.Helper).slideDown();
		$(this.FollowButtons).hide();
		$(this.StartButton).hide();
		$(this.Objects).addClass("inMotion")
	},
	hideControls: function() {
		$(this.Helper).slideUp();
		$(this.FollowButtons).show();
		$(this.StartButton).show();
		$(this.Objects).removeClass("inMotion")
	},
	start: function() {
		this.showControls();
		$(this.Container).sortable();
		return false
	},
	save: function() {
		trackGAEvent("rearrange_board_save", "clicked");
		this.hideControls();
		$(this.Container).sortable("destroy");
		$(this.Objects).removeClass("inMotion");
		var a = [];
		$(this.Objects).each(function() {
			a.push(this.id.replace("board", ""))
		});
		$.post($(this.SaveButton).attr("href"), {
			order_array: a.toString()
		}, function(c) {
			if (c.status == "success") {
				trackGAEvent("rearrange_board_save", "success");
				console.log("Sorting saved.");
				$("#SortStatus").html("Saved!").css("color", "green").stop().css("opacity", "1").animate({
					opacity: "0"
				}, 5E3)
			} else {
				console.log("Sorting failed.");
				$("#SortStatus").html("Saved Failed &mdash; <a href='#' onclick='boardSort.save(); return false' style='font-weight: 300;'>Try Again</a>?").css("color", "#221919").css("opacity", "1")
			}
		});
		return false
	},
	cancel: function() {
		this.hideControls();
		window.location.reload();
		return false
	}
};
var SendMessage = SendMessage || {
	setup: function() {
		var a = $("#SendMessage form"),
			c = $("#SendMessage textarea"),
			d = $("#SendMessage a"),
			f = c.val(),
			g = c.height() * 3;
		c.live("focus", function() {
			d.show();
			if (c.val().match(/^Write/)) {
				c.val("");
				c.css("height", g)
			}
		});
		c.live("blur", function() {
			c.val() === "" && c.val(f)
		});
		d.live("click", function() {
			trackGAEvent("send_message", "clicked");
			var b = c.val().trim();
			if (b === "" || b.match(/^Write/)) {
				alert("Please enter a message first!");
				return false
			} else {
				d.html("<strong>Sending</strong><span></span>").addClass("disabled");
				c.val("")
			}
			$.post(a.attr("action"), {
				message: b
			}, function(e) {
				if (e.status === "success") {
					trackGAEvent("send_message", "success");
					d.html("<strong>Send</strong><span></span>").removeClass("disabled");
					c.val(f);
					$("#ProfileSidebar .activity").prepend(e.html);
					BoardLayout.allPins()
				} else alert(e.message)
			});
			return false
		})
	}
};
var Follow = function() {
	return {
		listeners: function() {
			var a = this;
			$(".followbutton").live("click", function() {
				trackGAEvent("follow_board", "clicked");
				a.followBoard($(this));
				return false
			});
			$(".unfollowbutton").live("click", function() {
				trackGAEvent("unfollow_board", "clicked");
				a.unfollowBoard($(this));
				return false
			});
			$(".followuserbutton").live("click", function() {
				trackGAEvent("follow_user", "clicked");
				a.followUser($(this));
				return false
			});
			$(".unfollowuserbutton").live("click", function() {
				trackGAEvent("unfollow_user", "clicked");
				a.unfollowUser($(this));
				return false
			})
		},
		followBoard: function(a) {
			var c = $("strong", a);
			c.text("Unfollow");
			a.removeClass("followbutton").addClass("disabled clickable unfollowbutton").attr("disabled", "disabled");
			$.ajax({
				url: a.attr("href"),
				type: "POST",
				dataType: "json",
				error: function() {
					c.text("Follow");
					a.removeClass("disabled clickable unfollowbutton").addClass("followbutton").attr("disabled", "")
				},
				success: function() {
					trackGAEvent("follow_board", "success");
					a.attr("disabled", "")
				}
			})
		},
		unfollowBoard: function(a) {
			var c = $("strong", a);
			c.text("Follow");
			a.removeClass("disabled clickable unfollowbutton").addClass("followbutton").attr("disabled", "disabled");
			$.ajax({
				url: a.attr("href"),
				type: "POST",
				dataType: "json",
				data: {
					unfollow: 1
				},
				error: function() {
					c.text("Unfollow");
					a.removeClass("followbutton").addClass("disabled clickable unfollowbutton").attr("disabled", "")
				},
				success: function() {
					trackGAEvent("unfollow_board", "success");
					a.attr("disabled", "")
				}
			})
		},
		followUser: function(a) {
			var c = $("strong", a),
				d = $("#profile").length != 0 ? "Unfollow All" : "Unfollow";
			c.text(d);
			a.removeClass("followuserbutton").addClass("disabled unfollowuserbutton").attr("disabled", "disabled");
			c = $(".followbutton");
			$(".strong", c).text("Unfollow");
			c.removeClass("followbutton").addClass("disabled clickable unfollowbutton");
			$.ajax({
				url: a.attr("href"),
				type: "POST",
				dataType: "json",
				error: function() {},
				success: function() {
					trackGAEvent("follow_user", "success");
					a.attr("disabled", "").addClass("clickable")
				}
			})
		},
		unfollowUser: function(a) {
			var c = $("strong", a),
				d = $("#profile").length != 0 ? "Follow All" : "Follow";
			c.text(d);
			a.removeClass("disabled clickable unfollowuserbutton").addClass("followuserbutton").attr("disabled", "disabled");
			c = $(".unfollowbutton");
			$("strong", c).text("Follow");
			c.removeClass("disabled clickable unfollowbutton").addClass("followbutton");
			$.ajax({
				url: a.attr("href"),
				type: "POST",
				dataType: "json",
				data: {
					unfollow: 1
				},
				error: function() {},
				success: function() {
					trackGAEvent("unfollow_user", "success");
					a.attr("disabled", "")
				}
			})
		},
		followUserHomeActivity: function(a) {
			$.ajax({
				url: a.attr("href"),
				type: "POST",
				dataType: "json",
				data: {
					is_home: true
				},
				error: function() {},
				success: function() {
					trackGAEvent("follow_user_home_activity", "success");
					window.activity_feed.update_ui_followed_succeeded(a)
				}
			})
		}
	}
}();
var Comment = function() {
	return {
		defaultText: "Add a comment...",
		clearDefaultText: function(a) {
			var c = this;
			a.live("focus", function() {
				$(this).val() === c.defaultText && $(this).val("")
			});
			a.live("blur", function() {
				$(this).val() === "" && $(this).val(c.defaultText)
			})
		},
		gridShowButton: function(a) {
			a.show();
			BoardLayout.allPins()
		},
		gridComment: function() {
			var a = this,
				c = $(".write textarea");
			a.clearDefaultText(c);
			$("#ColumnContainer").on("focus", ".write .GridComment", function() {
				var d = $(this).parent().find(".Button");
				a.gridShowButton(d);
				Tagging.initTextarea($(this))
			});
			$("#ColumnContainer").on("click", ".actions .comment", function() {
				trackGAEvent("comment_button", "clicked");
				var d = $(this),
					f = d.parents(".pin").find(".write"),
					g = f.find(".Button");
				if (d.hasClass("disabled")) {
					f.slideUp("fast", function() {
						f.find("textarea").blur();
						BoardLayout.allPins()
					});
					d.removeClass("disabled clickable")
				} else {
					g.css("visibility", "hidden");
					f.slideDown("fast", function() {
						g.css("visibility", "visible");
						f.find("textarea").focus()
					});
					d.addClass("disabled clickable")
				}
				$(this).parents(".pin");
				return false
			});
			$("#ColumnContainer").on("click", ".write .Button", function() {
				trackGAEvent("comment_submit", "clicked", "grid");
				var d = $(this),
					f = d.parent(),
					g = d.parents("form"),
					b = d.parents(".pin"),
					e = $(".CommentsCount", b),
					h = $(".stats", b),
					k = $("textarea", b),
					l = k.val(),
					o = $("div.comments", b),
					q = $(".all", b),
					j = h.html() === "" ? true : false,
					m = String.fromCharCode(160);
				if (l != a.defaultText && l != "") {
					Tagging.loadTags($(".GridComment", f), $(".pin_comment_replies", f));
					if (!d.hasClass("disabled")) {
						d.addClass("disabled");
						$.ajax({
							url: g.attr("action"),
							type: "POST",
							dataType: "json",
							data: {
								text: l,
								replies: $(".pin_comment_replies", f).val(),
								home: "1"
							},
							error: function(p) {
								alert(p.message)
							},
							success: function(p) {
								trackGAEvent("comment_submit", "success", "grid");
								p = $(p.html).hide();
								if (q.length != 0) {
									var s = q.find("span"),
										n = s.text();
									n = parseInt(n, 10);
									n++;
									q.before(p);
									s.text(n);
									e.text(n + " comments" + m + m)
								} else if (o.length === 0) {
									b.find(".attribution").after("<div class='comments colormuted'></div>");
									b.find(".comments").html(p);
									h.append("<span class='CommentsCount'>1 comment" + m + m + "</span>");
									j && BoardLayout.allPins()
								} else {
									b.find("div.comments .comment:last").after(p);
									s = parseInt(e.html());
									e.html((s + 1).toString() + " comments" + m + m)
								}
								k.remove();
								g.prepend("<textarea>" + a.defaultText + "</textarea>");
								p.slideDown("fast", function() {
									BoardLayout.allPins()
								})
							},
							complete: function() {
								d.removeClass("disabled")
							}
						})
					}
				}
				return false
			})
		},
		closeupComment: function() {
			var a = this,
				c = $("#CloseupComment"),
				d = $("#PostComment");
			a.clearDefaultText(c);
			c.focus(function() {
				$("#PinAddCommentControls").slideDown(250)
			});
			c.bind("keyup", function() {
				var f = $("#CloseupComment").val();
				f != Comment.defaultText && f != "" ? d.removeClass("disabled") : d.addClass("disabled")
			});
			Tagging.initTextarea("#CloseupComment");
			d.click(function() {
				trackGAEvent("comment_submit", "clicked", "closeup");
				Tagging.loadTags("#CloseupComment", "#pin_comment_replies");
				var f = $(this);
				f.find("strong");
				var g = $("#pin_comment_replies").val(),
					b = c.val();
				if (b != Comment.defaultText && b != "") {
					$.trim(b);
					if (!f.hasClass("disabled")) {
						f.addClass("disabled");
						$.ajax({
							url: $("#post_comment_url").val(),
							type: "POST",
							dataType: "json",
							data: {
								text: b,
								replies: g
							},
							error: function(e) {
								alert(e.message)
							},
							success: function(e) {
								trackGAEvent("comment_submit", "success", "closeup");
								Tagging.initTextarea("#CloseupComment");
								c.val("");
								$("#pin_comment_replies").val("");
								e = $(e.html).css({
									"background-color": "#fbffcc"
								});
								$(".PinComments").append(e);
								e.removeClass("hidden").animate({
									backgroundColor: "#f2f0f0",
									display: "block"
								}, 1200)
							}
						})
					}
				}
				return false
			})
		},
		zoomComment: function() {
			var a = this,
				c = $("#zoom"),
				d = $("#CloseupComment", c),
				f = $("#PostComment", c);
			a.clearDefaultText(d);
			d.focus(function() {
				$("#PinAddCommentControls", c).slideDown(250)
			});
			d.bind("keyup", function() {
				var g = d.val();
				g != Comment.defaultText && g != "" ? f.removeClass("disabled") : f.addClass("disabled")
			});
			Tagging.initTextarea("#CloseupComment");
			f.click(function() {
				trackGAEvent("comment_submit", "clicked", "zoom");
				Tagging.loadTags("#CloseupComment", "#pin_comment_replies");
				var g = $(this);
				g.find("strong");
				var b = $("#pin_comment_replies", c).val(),
					e = d.val();
				if (e != Comment.defaultText && e != "") {
					$.trim(e);
					if (!g.hasClass("disabled")) {
						g.addClass("disabled");
						$.ajax({
							url: $("#post_comment_url", c).val(),
							type: "POST",
							dataType: "json",
							data: {
								text: e,
								replies: b
							},
							error: function(h) {
								alert(h.message)
							},
							success: function(h) {
								trackGAEvent("comment_submit", "success", "zoom");
								Tagging.initTextarea("#CloseupComment");
								d.val(a.defaultText);
								$("#pin_comment_replies", c).val("");
								h = $(h.html).css({
									"background-color": "#fbffcc"
								});
								$(".PinComments", c).append(h);
								h.removeClass("hidden").animate({
									backgroundColor: "#ffffff",
									display: "block"
								}, 220)
							}
						})
					}
				}
				return false
			})
		}
	}
}();
var Zoom = function() {
	return {
		HTMLloading: "<div id='loading'><img src='" + media_url + "images/rotating_pin.png' alt='Loading Animation' /></div>",
		HTMLshow: "<div id='zoomScroll' class='visible loading'><div id='zoom' class='pin'></div></div>",
		HTMLzoom: "<div id='zoomScroll'><div id='zoom' class='pin'></div></div>",
		setup: function() {
			if (window.location.hash == "#_=_") window.location.hash = "";
			var a = this,
				c = $.browser.version.split(".");
			isWebkit = $.browser.webkit && !navigator.userAgent.match(/iPad/i) && (!$.browser.safari || $.browser.safari && c[0] >= 534);
			(isFireFox = $.browser.mozilla) && $("body").addClass("extraScroll");
			if (isWebkit || isFireFox) {
				$(window).bind("statechange", function() {
					var d = window.History.getState().url.match(/^.+\/pin\/(\d+)\/$/);
					if (d) if (isWebkit) a.zoom(d[1]);
					else isFireFox && a.show(d[1]);
					else a.close()
				});
				if (isWebkit) {
					zoomTimer = 220;
					c = '<style type="text/css">#zoomScroll,#zoomScroll.visible #zoom,#zoomScroll.visible .PinImage img,#zoom .PriceContainer,#zoom .PriceContainer *,#zoom .convo .ImgLink,#zoom .convo .ImgLink img,#zoom .comments .comment,#zoom #loading img{-moz-transition: all ' + zoomTimer / 1E3 + "s ease-out; -webkit-transition: all " + zoomTimer / 1E3 + "s ease-out;}</style>";
					$("head").append(c);
					$("#ColumnContainer").on("mousedown", ".PinImage", function() {
						$(this).parents(".pin").addClass("spring")
					});
					$("#ColumnContainer").on("mouseout", ".spring", function() {
						$(this).removeClass("spring")
					})
				}
				$("#ColumnContainer").on("click", ".PinImage", function(d) {
					if (d.cntrlKey || d.metaKey) return true;
					d = $(this).parents(".pin").attr("data-id");
					trackGAEvent("zoom_pin", "clicked", "grid_closeup");
					window.History.pushState(null, null, "/pin/" + d + "/");
					return false
				})
			}
		},
		zoom: function(a) {
			var c = this;
			$("body").addClass("noscroll").append(c.HTMLzoom);
			var d = $("#zoomScroll"),
				f = $("#zoom");
			setTimeout(function() {
				d.addClass("visible");
				var e = $(window).width() / 2;
				f.css("left", e + "px");
				b.filmDimensions[1] != 0 && b.elem.css({
					width: b.filmDimensions[0] + "px",
					height: b.filmDimensions[1] + "px"
				});
				if (g.isVideo) {
					$(".PinImage", f).css("background-color", "black");
					b.elem.css({
						opacity: "0"
					})
				}
				setTimeout(function() {
					zoomFinished = true;
					d.addClass("loading");
					g.isVideo ? g.elem.find(".video").show() : b.elem.attr("src", b.src)
				}, zoomTimer)
			}, 1);
			var g = {};
			g.id = a;
			g.elem = $('div[data-id="' + g.id + '"]');
			g.elem.addClass("zoomed");
			g.elem.find(".video").hide();
			g.HTMLimage = getHTML(g.elem.find(".PinImage"));
			g.offset = g.elem.offset();
			g.isVideo = g.elem.find(".video").length;
			g.elem.removeClass("spring");
			var b = {};
			b.src = g.elem.find(".PinImageImg").attr("src").replace("_b.jpg", "_f.jpg");
			b.preload = new Image;
			b.preload.src = b.src;
			f.html(g.HTMLimage).css({
				top: g.offset.top - $(window).scrollTop() + "px",
				left: g.offset.left + "px"
			}).append(c.HTMLloading).find(".PinImage").attr("href", "javascript:void[0]").wrap("<div id='PinImageHolder'></div>");
			b.elem = $(".PinImageImg", f);
			b.origin = $(".zoomed .PinImageImg");
			b.thumbDimensions = g.isVideo ? ["192", "144"] : [b.origin.width(), b.origin.height()];
			b.filmDimensions = g.isVideo ? ["600", "450"] : [g.elem.attr("data-width"), g.elem.attr("data-height")];
			b.elem.css({
				width: b.thumbDimensions[0] + "px",
				height: b.thumbDimensions[1] + "px"
			});
			c.ajax(g.id);
			c.closeListeners(g.id)
		},
		show: function(a) {
			var c = this;
			$("body").addClass("noscroll").append(c.HTMLshow);
			$("#zoomScroll");
			var d = $("#zoom"),
				f = {};
			f.id = a;
			f.elem = $('div[data-id="' + f.id + '"]');
			f.elem.addClass("zoomed");
			f.HTMLimage = getHTML(f.elem.find(".PinImage"));
			f.isVideo = f.elem.find(".video").length;
			d.html(f.HTMLimage).append(c.HTMLloading).find(".PinImage").attr("href", "javascript:void[0]").wrap("<div id='PinImageHolder'></div>");
			a = $(window).width() / 2;
			d.css("left", (isFireFox ? a - 7 : a) + "px");
			a = {};
			a.elem = $(".PinImageImg", d);
			a.src = f.elem.find(".PinImageImg").attr("src").replace("_b.jpg", "_f.jpg");
			a.filmDimensions = f.isVideo ? ["600", "450"] : [f.elem.attr("data-width"), f.elem.attr("data-height")];
			f.isVideo && d.find(".video").remove();
			a.elem.attr("src", a.src).css({
				width: a.filmDimensions[0] + "px",
				height: a.filmDimensions[1] + "px"
			});
			c.ajax(f.id);
			c.closeListeners(f.id)
		},
		ajax: function(a) {
			var c = this,
				d = $("#zoom");
			$.ajax({
				url: "/pin/" + a + "/",
				dataType: "json",
				error: function(f) {
					var g = "Could not fetch pin :-/";
					if (navigator.onLine) {
						if (f.status === 404) g = "This pin has been deleted."
					} else g = "No Internet Connection :-/";
					d.append("<div id='error'><p class='colormuted'></p></div>").removeClass("loaded");
					$("#error p").html(g)
				},
				success: function(f) {
					if (isWebkit) typeof zoomFinished != "undefined" ? c.renderSuccess(f) : d.one("webkitTransitionEnd", function() {
						c.renderSuccess(f)
					});
					else isFireFox && c.renderSuccess(f)
				},
				timeout: 2E4
			})
		},
		renderSuccess: function(a) {
			var c = $("#zoomScroll"),
				d = $("#zoom");
			d.prepend(a.header);
			$("#PinImageHolder").append(a.buttons);
			d.append(a.footer);
			c.addClass("loaded");
			c.removeClass("loading")
		},
		closeListeners: function() {
			$("#zoomScroll").click(function(a) {
				$(a.target).is("#zoomScroll, #SocialShare ul, #SocialShare li") && window.History.back()
			})
		},
		close: function() {
			trackGAEvent("zoom_pin", "closed", "grid_closeup");
			$("#zoomScroll").remove();
			$("body").removeClass("noscroll");
			$(".zoomed").removeClass("zoomed");
			delete zoomFinished;
			return false
		}
	}
}();
var Like = function() {
	return {
		ajaxLike: function(a, c, d, f) {
			$.ajax({
				url: "/pin/" + a + "/like/",
				type: "POST",
				dataType: "json",
				data: f,
				error: function(g) {
					c(g)
				},
				success: function(g) {
					d(g)
				},
				timeout: 2E4
			})
		},
		ajaxUnlike: function(a, c, d, f) {
			$.ajax({
				url: "/pin/" + a + "/like/",
				type: "POST",
				dataType: "json",
				data: f,
				error: function(g) {
					c(g)
				},
				success: function(g) {
					d(g)
				},
				timeout: 2E4
			})
		},
		gridListeners: function() {
			var a = this;
			$("#ColumnContainer").on("click", ".likebutton", function() {
				trackGAEvent("like", "clicked", "grid");
				a.gridLike($(this));
				return false
			});
			$("#ColumnContainer").on("click", ".unlikebutton", function() {
				trackGAEvent("unlike", "clicked", "grid");
				a.gridUnlike($(this));
				return false
			})
		},
		gridLike: function(a) {
			a.removeClass("likebutton").addClass("disabled unlikebutton").children("strong").html("Unlike");
			var c = a.parents(".pin"),
				d = c.children(".stats"),
				f = d.find(".LikesCount"),
				g = d.html() === "" ? true : false,
				b = String.fromCharCode(160);
			if (f.length === 0) {
				d.append("<span class='LikesCount'>1 like" + b + b + "</span>");
				g && BoardLayout.allPins()
			} else {
				d = parseInt(f.html());
				f.html((d + 1).toString() + " likes" + b + b)
			}
			this.ajaxLike(c.attr("data-id"), function() {}, function(e) {
				if (e.status == "success") {
					trackGAEvent("like", "success");
					a.addClass("clickable")
				} else {
					e = 0;
					if (f.length > 0) e = parseInt(f.html());
					if (e > 2) f.html((e - 1).toString() + " likes" + b + b);
					else {
						f.remove();
						BoardLayout.allPins()
					}
					a.removeClass("disabled unlikebutton").addClass("likebutton")
				}
			})
		},
		gridUnlike: function(a) {
			a.removeClass("disabled clickable unlikebutton").addClass("likebutton").children("strong").html("<em></em> Like");
			a = a.parents(".pin");
			var c = a.children(".stats").find(".LikesCount"),
				d = parseInt(c.html()),
				f = String.fromCharCode(160);
			if (d === 1) {
				c.remove();
				BoardLayout.allPins()
			} else c.html((d - 1).toString() + " likes" + f + f);
			this.ajaxUnlike(a.attr("data-id"), function() {}, function() {
				trackGAEvent("unlike", "success")
			}, {
				unlike: 1
			})
		},
		zoomListeners: function() {
			var a = this;
			$("#PinImageHolder").on("click", ".ZoomLikeButton", function() {
				trackGAEvent("like", "clicked", "zoom");
				a.zoomLike($(this));
				return false
			});
			$("#PinImageHolder").on("click", ".ZoomUnlikeButton", function() {
				a.zoomUnlike($(this));
				return false
			})
		},
		zoomLike: function(a) {
			a.removeClass("ZoomLikeButton").addClass("ZoomUnlikeButton disabled clickable").children("strong").html("Unlike").children("em").remove();
			this.gridLike($(".zoomed .likebutton"))
		},
		zoomUnlike: function(a) {
			a.removeClass("ZoomUnlikeButton disabled clickable ").addClass("ZoomLikeButton").children("strong").html("Like").prepend("<em></em>");
			this.gridUnlike($(".zoomed .unlikebutton"))
		},
		closeupListeners: function() {
			var a = this;
			$("#PinActionButtons").on("click", ".like_pin", function() {
				trackGAEvent("like", "clicked", "closeup");
				a.closeupLike($(this));
				return false
			});
			$("#PinActionButtons").on("click", ".unlike_pin", function() {
				trackGAEvent("unlike", "clicked", "closeup");
				a.closeupUnlike($(this));
				return false
			})
		},
		closeupLike: function(a) {
			var c = this,
				d = $("#PinLikes");
			a.removeClass("like_pin").addClass("disabled clickable unlike_pin").children("strong").html("Unlike");
			d.removeClass("hidden");
			a = a.attr("data-id");
			c.ajaxLike(a, function() {
				c.closeupUnlike()
			}, function(f) {
				trackGAEvent("like", "success");
				d.append(f.html)
			})
		},
		closeupUnlike: function(a) {
			var c = this,
				d = $("#PinLikes");
			a.removeClass("disabled clickable unlike_pin").addClass("like_pin").children("strong").html("<em></em>Like");
			$("a", d).length === 1 && d.addClass("hidden");
			a = a.attr("data-id");
			c.ajaxUnlike(a, function() {
				c.closeupLike()
			}, function(f) {
				console.log(f);
				trackGAEvent("unlike", "success");
				$("#PinLikes a[href='/" + f.username + "/']").fadeOut("fast").remove()
			}, {
				unlike: 1
			})
		}
	}
}();
var Closeup = function() {
	return {
		setup: function() {
			$("#PinReport").live("click", function() {
				trackGAEvent("pinreport", "clicked", "closeup");
				Modal.show("ReportModal");
				return false
			});
			$("#ReportModal .Button").click(function() {
				trackGAEvent("report_modal", "clicked", "closeup");
				$.post("flag/", {
					reason: $("#ReportModal input[name=reason]:checked").siblings("label").text(),
					explanation: $("#ReportModal textarea").val()
				}, function(a) {
					$("#ReportModal .SubmitButton").addClass("disabled").text("Reporting...");
					if (a.status == "success") {
						trackGAEvent("report_modal", "success", "closeup");
						$("#ReportModal .modal").addClass("PostSuccess");
						$("#ReportModal .modal form").hide();
						$(".PostSuccess").append('<p class="ReportSuccess">Thanks for reporting this pin! Our team will review the pin and delete it if it violates the <a href="/about/terms/">Pinterest Terms of Use</a>.</p>');
						setTimeout('Modal.close("ReportModal"); Closeup.resetReportModal(); $("#ReportModal .SubmitButton").addClass("disabled").html("<strong>Send Email</strong><span></span>"); ', 5E3);
						$("#PinReport").remove()
					} else alert(a.message)
				}, "json");
				return false
			});
			$("#EmailModal form").submit(function() {
				trackGAEvent("email_modal", "submit", "closeup");
				var a = $("#MessageRecipientName").val(),
					c = $("#MessageRecipientEmail").val(),
					d = $("#MessageBody").val();
				if (!a) {
					$("#MessageRecipientName").parent().find(".error").html("Please enter recipient name.");
					return false
				}
				if (!c) {
					$("#MessageRecipientEmail").parent().find(".error").html("Please enter recipient email.");
					return false
				}
				$("#EmailModal .SubmitButton").addClass("disabled").text("Sending...");
				$.ajax({
					type: "POST",
					url: $(this).attr("action"),
					data: {
						name: a,
						email: c,
						message: d
					},
					complete: function(f) {
						f = $.parseJSON(f.responseText);
						if (f.status == "success") {
							trackGAEvent("email_modal", "success", "closeup");
							$("#EmailModal .SubmitButton").text("Sent!");
							setTimeout("Modal.close('EmailModal'); Closeup.resetEmailModal(); $('#EmailModal .SubmitButton').addClass('disabled').html('<strong>Send Email</strong><span></span>');", 500)
						} else {
							$("#EmailModal .SubmitButton").removeClass("disabled").html("<strong>Send Email</strong><span></span>");
							f.message == "Invalid email address" && $("#MessageRecipientEmail").parent().after($("#EmailModal .error"));
							$("#EmailModal .error").html(f.message)
						}
					}
				});
				return false
			});
			$("#SocialShare #PinEmbed").click(function() {
				trackGAEvent("pin_embed", "clicked", "closeup");
				var a = $("#PinImageHolder img");
				if ($("#PinImageHolder iframe").length) a = $("#PinImageHolder iframe");
				var c = a.width();
				a = a.height();
				max_closeup_image_width = c;
				max_closeup_image_height = a;
				$("#EmbedImageWidth").val(c);
				$("#EmbedImageHeight").val(a);
				$("#EmbedHTMLCode").val(embed_code_html_1 + c + "' height ='" + a + embed_code_html_2);
				Modal.show("EmbedModal");
				return false
			});
			$("#EmbedImageWidth").keyup(function() {
				$(this).val() > max_closeup_image_width && $("#EmbedImageWidth").val(max_closeup_image_width);
				var a = parseInt($("#EmbedImageWidth").val() * max_closeup_image_height / max_closeup_image_width);
				$("#EmbedImageHeight").val(a);
				$("#EmbedHTMLCode").val(embed_code_html_1 + $("#EmbedImageWidth").val() + "' height ='" + $("#EmbedImageHeight").val() + embed_code_html_2);
				return false
			});
			$("#EmbedImageHeight").keyup(function() {
				$(this).val() > max_closeup_image_height && $("#EmbedImageHeight").val(max_closeup_image_height);
				var a = parseInt(Math.ceil($("#EmbedImageHeight").val() * max_closeup_image_width / max_closeup_image_height));
				$("#EmbedImageWidth").val(a);
				$("#EmbedHTMLCode").val(embed_code_html_1 + $("#EmbedImageWidth").val() + "' height ='" + $("#EmbedImageHeight").val() + embed_code_html_2);
				return false
			});
			$(".DeleteComment").live("click", function() {
				trackGAEvent("delete_comment", "clicked", "closeup");
				var a = $(this);
				if (a.attr("ban")) if (!confirm("Are you sure you want to ban " + a.attr("username") + "?")) return false;
				var c = a.parents(".comment");
				c.slideUp("slow");
				$.ajax({
					url: a.attr("href"),
					type: "POST",
					dataType: "json",
					data: {
						comment: a.attr("data")
					},
					error: function(d) {
						c.show();
						d.message.length > 0 && alert(d.message)
					},
					success: function() {
						trackGAEvent("delete_comment", "success", "closeup");
						c.remove()
					}
				});
				return false
			})
		},
		resetReportModal: function() {
			$("#ReportModal .PostSuccess").removeClass("PostSuccess");
			$("#ReportModal .ReportSuccess").remove();
			$('#ReportModal .option input[type="radio"]').attr("checked", false);
			$("#ReportModal select option:first-child").attr("selected", "selected");
			$("#ReportModal .Button").addClass("disabled");
			$("#ReportPin").val("").blur();
			$("#ReportModal form").show()
		},
		resetEmailModal: function() {
			$("#MessageRecipientEmail").val("").blur();
			$("#MessageRecipientName").val("").blur();
			$("#MessageBody").val("").blur();
			$("#EmailModal .error").html("")
		}
	}
}();
var InviteForm = function() {
	return {
		setup: function() {
			var a = $("#SendInvites"),
				c = $("#EmailAddresses .email");
			a.click(function() {
				trackGAEvent("invite_form", "clicked");
				c.each(function() {
					var d = $(this),
						f = $("textarea[name=message]"),
						g = d.parent("li").children(".helper");
					!d.val() == "" && $.post("/invite/new/", {
						name: "somebody",
						message: f.val(),
						email: d.val()
					}, function(b) {
						if (b.status == "success") {
							trackGAEvent("invite_form", "success");
							d.removeClass("error");
							g.html("Invite Sent!").css("color", "green").slideDown();
							d.val("").keyup();
							f.val("").keyup()
						} else {
							d.addClass("error");
							g.html(b.message).css("color", "red").slideDown()
						}
					}, "json")
				});
				return false
			})
		}
	}
}();
var FancyForm = function() {
	return {
		inputs: $(".Form input, .Form textarea"),
		button: ".SubmitButton",
		setup: function() {
			var a = this;
			a.inputs.each(function() {
				var c = $(this);
				a.checkVal(c)
			});
			a.inputs.live("keyup blur", function() {
				var c = $(this);
				a.checkVal(c);
				var d = c.parents("ul"),
					f = c.parents(".Form").find(a.button);
				c.parents("li").hasClass("NoCheck") || a.checkDisabled(d, f)
			});
			$(a.button).live("click", function() {
				var c = $(this).attr("data-form");
				if ($(this).hasClass("disabled")) return false;
				else $("#" + c + " form").submit()
			})
		},
		checkVal: function(a) {
			a.val().length > 0 ? a.parent("li").addClass("val") : a.parent("li").removeClass("val")
		},
		checkDisabled: function(a, c) {
			a.children("li:not(.optional)").length <= a.children("li.val").length ? c.removeClass("disabled") : c.addClass("disabled")
		}
	}
}();
var Tagging = function() {
	return {
		friends: null,
		getFriends: function(a, c) {
			var d = a.term;
			(function(f) {
				Tagging.friends ? f() : $.get("/x2ns4tdf0cd7cc9b/_getfriends/", function(g) {
					Tagging.friends = [];
					$.each(g, function(b, e) {
						Tagging.friends.push({
							label: e.name,
							value: e.username,
							image: e.image,
							link: "/" + e.username + "/",
							category: "People"
						})
					});
					f()
				})
			})(function() {
				var f = Tagging.friends;
				if (d) f = tagmate.filter_options(f, d);
				c(f)
			})
		},
		initInput: function(a, c, d) {
			a = $(a);
			var f = $("<div class='CollabAutocompleteHolder'></div>");
			a.after(f);
			a.autocomplete({
				source: Tagging.getFriends,
				minLength: 1,
				delay: 5,
				appendTo: f,
				change: function(g, b) {
					c && c(b.item)
				},
				select: function(g, b) {
					c && c(b.item);
					return false
				},
				position: {
					my: "left top",
					at: "left bottom",
					offset: "0 -1"
				}
			}).keydown(function(g) {
				g.which == 13 && d && d()
			});
			a.data("autocomplete")._renderItem = function(g, b) {
				return $("<li></li>").data("item.autocomplete", b).append("<a href='" + b.link + "'><img src='" + b.image + "' class='AutocompletePhoto' alt='Photo of " + b.label + "' width='38px' height='38px'/><span class='AutocompleteName'>" + b.label + "</span></a>").appendTo(g)
			}
		},
		initTextarea: function(a) {
			a = $(a);
			var c = {};
			c["@"] = tagmate.USER_TAG_EXPR;
			c["#"] = tagmate.HASH_TAG_EXPR;
			c.$ = tagmate.USD_TAG_EXPR;
			c["\u00a3"] = tagmate.GBP_TAG_EXPR;
			a.tagmate({
				tagchars: c,
				sources: {
					"@": Tagging.getFriends
				}
			})
		},
		loadTags: function(a, c, d, f) {
			a = $(a).getTags();
			for (var g = [], b = [], e = null, h = 0; h < a.length; h++) {
				a[h][0] == "@" && g.push(a[h].substr(1));
				a[h][0] == "#" && b.push(a[h].substr(1));
				if (a[h][0] == "$" || a[h][0] == "\u00a3") e = a[h]
			}
			$(c).val(g.join(","));
			$(d).val(b.join(","));
			$(f).val(e)
		},
		priceTag: function(a, c) {
			function d() {
				var f = $(".price", c);
				if (f.length <= 0) {
					f = $("<div class='price'></div>");
					c.prepend(f)
				}
				var g = a.getTags({
					$: tagmate.USD_TAG_EXPR,
					"\u00a3": tagmate.GBP_TAG_EXPR
				});
				if (g && g.length > 0) {
					f.text(g[g.length - 1]);
					f.addClass("visible")
				} else {
					f.removeClass("visible");
					f.text("")
				}
			}
			a = $(a);
			c = $(c);
			a.unbind(".priceTag").bind("keyup.priceTag", d).bind("focus.priceTag", d).bind("change.priceTag", d);
			d()
		}
	}
}();
var RepinDialog = RepinDialog || {
	setup: function() {
		var a = $("#Repin"),
			c = $("form", a),
			d = $(".Buttons .Button", a),
			f = $("strong", d),
			g = $(".DescriptionTextarea", a),
			b = $(".mainerror", a);
		BoardPicker.setup("#Repin .BoardPicker", function(e) {
			$("#repin_board", a).val(e)
		}, function(e) {
			$("#repin_board", a).val(e)
		});
		AddDialog.shareCheckboxes("Repin");
		d.click(function() {
			if (g.val() == "" || g.val() == "Describe your pin.") {
				b.html("Please enter a description.").slideDown();
				return false
			}
			$("#Repin #repin_details").val(g.val());
			Tagging.loadTags(g, "#Repin #repin_comment_replies", "#Repin #repin_tags", "#Repin #repin_currency_holder");
			c.submit();
			return false
		});
		c.submit(function() {
			trackGAEvent("repin_submit", "clicked", "dialogue");
			if (d.hasClass("disabled")) return false;
			d.addClass("disabled");
			f.html("Pinning...");
			$.ajax({
				type: "POST",
				url: $(this).attr("action"),
				dataType: "json",
				data: $(this).serialize(),
				success: function(e) {
					if (e.status == "success") {
						trackGAEvent("repin_submit", "success", "dialogue");
						var h = $(".PostSuccess", a);
						$(".BoardLink", h).attr("href", e.board_url).text(e.board_name);
						$(".PinLink", h).attr("href", e.repin_url);
						h.show();
						setTimeout(function() {
							a.addClass("super")
						}, 1);
						setTimeout(function() {
							RepinDialog.reset()
						}, 2500);
						$("#CloseupRight").length > 0 && $("#PinRepins").append('<a href="' + e.repin_user_url + '" class="CommenterImage" title="Repinned by <a href=\'#\'>' + e.repin_user_name + "</a> to <a href='#'>" + e.board_name + '</a>"><img src="' + e.repin_user_image + '" alt="Thumbnail of" /></a>')
					} else {
						d.removeClass("disabled");
						f.html("Pin It")
					}
				},
				error: function() {
					d.removeAttr("disabled").html("Pin It")
				}
			});
			return false
		})
	},
	grid: function() {
		$(".repin_link").live("click", function() {
			trackGAEvent("repin_button", "clicked", "board_layout");
			pinID = $(this).parents(".pin").attr("data-id");
			RepinDialog.show(pinID);
			return false
		})
	},
	show: function(a) {
		var c = $("#Repin");
		$.getJSON("/pin/" + a + "/repindata/", {}, function(d) {
			$(".DescriptionTextarea", c).val(d.details).parent("li").addClass("val");
			var f = '<img src="' + d.imgurl + '" />';
			if (d.video) f = '<img src="' + media_url + 'images/VideoIndicator.png" alt="Video Icon" class="video" />' + f;
			d.buyable && $(".ImagePicker .price", c).html("$" + d.buyable);
			$(".Images", c).html(f);
			$("#repin_pin_id", c).val(a);
			$("#repin_tags", c).val(d.tags.join(","));
			$("#repin_comment_replies", c).val(d.reply_usernames.join(","));
			$("form", c).attr("action", "/pin/" + a + "/repin/");
			Tagging.initTextarea("#Repin .DescriptionTextarea");
			Tagging.priceTag("#Repin .DescriptionTextarea", "#Repin .Images");
			Modal.show("Repin")
		})
	},
	reset: function() {
		var a = $("#Repin");
		Modal.close("Repin");
		a.removeClass("visible").removeClass("super");
		$(".PostSuccess", a).hide();
		$("form", a).attr("action", "");
		$(".DescriptionTextarea", a).val("");
		$(".ImagePicker .Images", a).html("");
		$(".price", a).removeClass("visible").html("");
		$(".mainerror", a).html("");
		$(".Buttons .RedButton", a).removeClass("disabled");
		$(".Buttons .RedButton strong", a).html("Pin It");
		$("#repin_pin_id", a).val("")
	}
};
var ScrapePinDialog = ScrapePinDialog || {
	id: "ScrapePin",
	setup: function() {
		var a = this;
		AddDialog.setup(a.id);
		a.initScraperInput()
	},
	initScraperInput: function() {
		function a(k) {
			return /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(k)
		}
		function c(k) {
			var l = true;
			if (k.indexOf("http") != 0) k = "http://" + k;
			if (k == "") l = false;
			if (k == "http://") l = false;
			if (k.length < 2) l = false;
			if (k.indexOf(".") == -1) l = false;
			a(k) || (l = false);
			return l
		}
		function d() {
			var k = $("#" + ScrapePinDialog.id),
				l = $("#ScrapePinInput").val();
			if (h != l) {
				h = l;
				if (c(l)) {
					if (l.indexOf("http") != 0) l = "http://" + l;
					$(".load", k).show();
					$(".ImagePicker .Images ul", k).empty();
					l = escape(l);
					setTimeout(f, 5E3);
					images_count = 0;
					imagesArray = [];
					msg = "";
					$.getJSON("/pin/create/find_images/", {
						url: l
					}, function(o) {
						if (o.status === "success") {
							images_count = o.images.length;
							for (var q = 0; q < o.images.length; q++) {
								urlImage = new Image;
								urlImage.src = o.images[q];
								msg += "<br/>Loading " + urlImage.src;
								urlImage.onload = function() {
									images_count -= 1;
									images_count == 0 && g()
								};
								imagesArray.push(urlImage)
							}
							o.title.length > 80 ? $("#id_title").val(o.title.substring(0, 79)) : $("#id_title").val(o.title);
							$(".load", k).hide();
							$("#id_link").val($("#scrape_url").val());
							$("#PinSourceURL").html("Source: " + l).removeClass("hidden");
							AddDialog.pinBottom("ScrapePin");
							$(".Arrows", k).addClass("holla").show();
							$("#ScrapeButton").removeClass("disabled")
						} else {
							$(".load", k).hide();
							$("#ScrapeButton").removeClass("disabled");
							alert("We couldn't find any images: " + o.message)
						}
					})
				} else alert("Not a valid URL!")
			}
		}
		function f() {
			if (images_count > 0) {
				images_count = -1;
				g()
			}
		}
		function g() {
			strHtml = "";
			imgFound = false;
			for (var k = foundCtr = 0; k < imagesArray.length; k++) {
				img = imagesArray[k];
				if (img.width >= 150 && img.height >= 50) {
					imgFound = true;
					foundCtr++;
					strHtml += "<li>" + (is_video(img.src) ? media_url + "images/VideoIndicator.png' alt='Video Icon' class='video' />" : "") + "<img src='" + img.src + "' width='156px' alt='' /></li>"
				}
			}
			if (strHtml != "") {
				$("#ScrapePin .ImagePicker .Images ul").html(strHtml);
				b(foundCtr)
			} else alert("No Large Images Found.")
		}
		function b() {
			var k = function(o, q) {
				im = $(q).find("img")[0];
				if ($(im).hasClass("video")) im = $(q).find("img")[1];
				src = $(im).attr("src");
				$("#id_img_url").val(src);
				$("#id_link").val($("#ScrapePinInput").val())
			},
				l = $("#ScrapePin .ImagePicker .Images").jcarousel({
					buttonNextHTML: null,
					buttonPrevHTML: null,
					initCallback: function(o) {
						$("#ScrapePin .imagePickerNext").click(function() {
							o.next();
							return false
						});
						$("#ScrapePin .imagePickerPrevious").click(function() {
							o.prev();
							return false
						})
					},
					animation: "fast",
					itemVisibleInCallback: {
						onAfterAnimation: k
					},
					scroll: 1
				});
			k(l, $("#ScrapePin .ImagePicker").find("li")[0], 1, "next")
		}
		function e() {
			var k = $("#ScrapeButton");
			if (c($("#ScrapePinInput").val())) {
				k.addClass("disabled");
				d()
			} else {
				alert("Please enter a valid website URL");
				k.removeClass("disabled")
			}
		}
		var h = "";
		$("#ScrapePinInput").bind("keydown", function(k) {
			k.keyCode === 13 && e()
		});
		$("#ScrapeButton").click(function() {
			e();
			return false
		})
	},
	reset: function() {
		var a = $("#" + this.id);
		$("#ScrapePinInput", a).val("");
		$(".PinBottom", a).hide();
		$(".modal", a).css("margin-bottom", "0");
		$(".Buttons .Button", a).removeClass("disabled");
		$(".Buttons .Button strong", a).html("Pin It");
		ScrapePinDialog.initScraperInput()
	}
};
var PeoplePages = PeoplePages || {
	setup: function() {
		$("#MorePeople").live("click", function() {
			var a = $(this),
				c = a.attr("href");
			a.html('<strong><img src="' + media_url + 'images/ajaxload2.gif" alt="Loader" /></strong><span></span>');
			$.get(c, function(d) {
				if (d.status == "success") {
					$("#PeopleList").append(d.html);
					if (d.page != undefined) {
						d = $.query.load(c).set("page", d.page);
						a.html("<strong>More</strong><span></span>").attr("href", d)
					} else a.remove()
				} else alert(d.message)
			}, "json");
			return false
		})
	}
};
var Nag = Nag || {
	setup: function(a) {
		var c = $(".Nag").outerHeight();
		$("#" + a + " .NagSpacer").css("height", c + "px");
		if ($(".CloseupLeft").length > 0) {
			a = parseInt($(".CloseupLeft").css("top"), 10) + c;
			$(".CloseupLeft").css("top", a + "px")
		}
	},
	hide: function(a) {
		a = $("#" + a);
		var c = $(".Nag", a).outerHeight();
		$(".Sheet", a).css("top", "-" + c + "px").css("bottom", c + "px");
		setTimeout("$('.UndoSheet').css('top','0px').css('bottom','0px')", 1100)
	}
};
var CategorizeBoard = function() {
	return {
		setup: function(a) {
			Nag.setup(a);
			$("#" + a + " select").bind("change", function() {
				$("#" + a + " option:selected").attr("value") != "" && setTimeout("CategorizeBoard.hideSheets()", 100)
			})
		},
		hideSheets: function() {
			Nag.hide("CategoryCallout");
			CategorizeBoard.addCategory()
		},
		addCategory: function() {
			var a = $("#CategorySelect option:selected"),
				c = a.text();
			a = a.attr("value");
			$("#CategoryCallout .UndoSheet").show().find("p span").text(c);
			$.post(boardEndpoint, {
				category: a
			}, function(d) {
				data = $.parseJSON(d);
				if (!data.status == "success") {
					$("#CategoryCallout .error").html(data.message).show();
					CategorizeBoard.undoCategory()
				}
			});
			return false
		},
		undoCategory: function() {
			$("#CategoryCallout .Nag").outerHeight();
			$(".UndoSheet").css("top", "-100px").css("bottom", "100px");
			$("#CategorySelect option:first").attr("selected", "selected");
			$.post(boardEndpoint, {
				undo: "1"
			}, function() {});
			setTimeout("CategorizeBoard.newHeights()", 750)
		},
		newHeights: function() {
			$("#CategoryCallout .Sheet1").css("top", "auto").css("bottom", "auto !important");
			$("#CategoryCallout .Sheet2").css("top", "0px").css("bottom", "-3px");
			$("#CategoryCallout .Sheet3").css("top", "0px").css("bottom", "-5px")
		}
	}
}();
var UploadPinDialog = UploadPinDialog || {
	id: "UploadPin",
	setup: function() {
		var a = this,
			c = $("#" + a.id);
		AddDialog.setup(a.id);
		$("input[type=file]", c).change(function() {
			trackGAEvent("upload_file", "submitted");
			AddDialog.pinBottom(a.id);
			$(".ImagePicker ul", c).html("<li><img src='{{ MEDIA_URL }}images/load2.gif' class='load' alt='Loading Indicator' /></li>");
			$(".ImagePicker .load", c).show();
			$("form", c).ajaxSubmit({
				type: "POST",
				dataType: "json",
				iframe: true,
				url: "/pin/preview/",
				success: function(d) {
					if (d.status === "success") {
						trackGAEvent("upload_file", "success");
						$(".load", c).hide();
						$(".ImagePicker ul", c).html("<li><img src='" + d.image_url + "' /></li>")
					} else alert(d.message)
				}
			});
			return false
		})
	},
	reset: function() {
		var a = $("#" + this.id);
		$("input[type=file]", a).val("");
		$(".PinBottom", a).hide();
		$(".modal", a).css("margin-bottom", "0");
		$(".Buttons .Button", a).removeClass("disabled");
		$(".Buttons .Button strong", a).html("Pin It")
	}
};
var CreateBoardDialog = function() {
	return {
		setup: function() {
			function a() {
				if (!g) {
					g = true;
					Tagging.initInput("#CreateBoard #collaborator_name", function(b) {
						f = b
					}, function() {
						$("#CreateBoard #submit_collaborator").click()
					})
				}
			}
			function c() {
				var b = [];
				$("#CurrentCollaborators .Collaborator", d).each(function() {
					b.push($(this).attr("username"))
				});
				return b
			}
			var d = $("#CreateBoard"),
				f = null,
				g = false;
			a();
			$("#collaborator_name").defaultValue("Name or Email Address");
			$("#submit_collaborator", d).click(function() {
				trackGAEvent("submit_board_collaborator", "clicked", "create_board_dialogue");
				if (f) {
					var b = '<li username="' + f.value + '" class="Collaborator"><a href="http://pinterest.com/' + f.value + '"><img class="collaborator_image" src="' + f.image + '" alt="Collaborator Photo"></a><a class="collaborator_name" href="http://pinterest.com/' + f.value + '">' + f.label + '</a><a href="#" class="delete_collaborator" value="' + f.value + '">Remove</a></li>';
					$("#CurrentCollaborators", d).prepend(b);
					$("#collaborator_name", d).val("");
					f = null
				}
			});
			$(".delete_collaborator", d).live("click", function() {
				trackGAEvent("delete_collaborator", "clicked", "create_board_dialogue");
				$(this).parent().remove();
				return false
			});
			$("input[name='change_BoardCollaborators']", d).change(function() {
				switch ($(this).val()) {
				case "me":
					$("#add_collaborators", d).hide();
					break;
				case "multiple":
					$("#add_collaborators", d).show();
					a();
					break;
				default:
					$("#add_collaborators", d).hide();
					break
				}
			});
			BoardPicker.setup("#CreateBoard .BoardPicker", function(b) {
				$("#id_category", d).val(b)
			});
			$("#BoardName", d).keyup(function() {
				$(".board_name.error", d).html() !== "" && $(".board_name.error", d).html("")
			});
			$(".Submit .Button", d).click(function() {
				trackGAEvent("create_board", "clicked", "create_board_dialogue");
				if ($("#BoardName", d).val() == "Board Name" || $("#BoardName", d).val() == "") {
					$(".board_name.error", d).html("Please enter a board name").show();
					return false
				}
				if (!$("#id_category", d).val()) {
					$(".board_category.error", d).html("Please select a category").show();
					return false
				}
				var b = $(".Submit .Button", d),
					e = b.children("strong");
				b.attr("disabled", "disabled").addClass("disabled");
				e.html("Creating &hellip;");
				$.post("/board/create/", {
					name: $("#BoardName", d).val(),
					category: $("#id_category", d).val(),
					collaborator: $("input[name='change_BoardCollaborators']:checked", d).val(),
					"collaborators[]": c()
				}, function(h) {
					if (h.status == "success") {
						trackGAEvent("create_board", "success", "create_board_dialogue");
						d.hide();
						$("#BoardName", d).val("Board Name");
						$(".CreateBoardStatus", d).html("").hide();
						$("#id_category", d).val("");
						$(".CurrentCategory", d).text("Select a Category");
						window.location = h.url
					} else {
						$(".CreateBoardStatus", d).html(h.message).show();
						b.removeAttr("disabled").removeClass("pressed").html("Create")
					}
				}, "json");
				return false
			})
		},
		reset: function() {
			$("#BoardName").val("");
			$("input[value='me']").attr("checked", true);
			$("#CurrentCollaborators").empty()
		}
	}
}();
var Login = function() {
	return {
		setup: function() {
			var a = $(".AuthForm"),
				c = $(".non_inputs", a),
				d = $("#id_password", a),
				f = function(g) {
					if (g.keyCode === 13) {
						a.submit();
						$(".Button", a).addClass("disabled");
						d.unbind("keydown")
					}
				};
			d.bind("focus", function() {
				d.bind("keydown", function(g) {
					f(g)
				})
			});
			$("#resetPassword").click(function() {
				$("#id_password").parent().fadeOut(500, function() {
					c.css("margin-top", 0)
				});
				c.animate({
					marginTop: "-50px"
				});
				c.parents("form").attr("action", "/password/reset/");
				$(".Button strong", c).text("Reset");
				$("#resetPassword").fadeOut(500);
				$("#backToLogin").fadeIn(500);
				return false
			});
			$("#backToLogin").click(function() {
				$("#id_password").parent().fadeIn(500, function() {
					c.css("margin-top", 0)
				});
				c.css({
					"margin-top": "-50px"
				}).animate({
					marginTop: "0px"
				});
				c.parents("form").attr("action", "/login/");
				$(".Button strong", c).text("Login");
				$("#resetPassword").fadeIn(500);
				$("#backToLogin").fadeOut(500);
				return false
			})
		}
	}
}();
var EditPin = function() {
	return {
		setup: function() {
			Tagging.initTextarea("#description_pin_edit");
			Tagging.priceTag("#description_pin_edit", "#PinEditPreview");
			$("#PinEdit").submit(function() {
				Tagging.loadTags("#description_pin_edit", "#id_pin_replies", "#pin_tags", "#id_buyable")
			});
			$("#description_pin_edit").keyup(function() {
				$("#postDescription").html($(this).val())
			})
		},
		deletePin: function() {
			var a = $("#DeletePin .SubmitButton");
			a.addClass("disabled");
			$("strong", a).text("Deleting...");
			$.post("/pin/" + pinID + "/delete/", {}, function(c) {
				if (c.status == "success") {
					trackGAEvent("delete_pin", "success");
					window.location = c.url
				} else alert(c.message)
			}, "json")
		}
	}
}();
var EditBoard = function() {
	return {
		setup: function() {
			var a = this;
			$("#BoardEdit #collaborator_name").defaultValue("Enter a name");
			$(".pinability input[name='change_BoardCollaborators']").change(function() {
				var c = $("#BoardEdit").find("#add_collaborators");
				switch ($(this).val()) {
				case "me":
					c.hide();
					$("#id_public").attr("checked", false);
					break;
				case "multiple":
					c.show();
					$("#id_public").attr("checked", false);
					a.init_ac();
					break;
				default:
					c.hide();
					$("#id_public").attr("checked", true);
					break
				}
			});
			BoardPicker.setup("#BoardEdit .BoardPicker", function(c) {
				$("#BoardEdit #id_category").val(c)
			});
			$("#BoardEdit #submit_collaborator").click(function() {
				trackGAEvent("submit_collaborator", "clicked", "edit_board_dialogue");
				if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test($("#BoardEdit #collaborator_name").val())) {
					$("#InviteCollaborator").show();
					$("#InviteCollaborator #invite_email").val($("#BoardEdit #collaborator_name").val());
					invite_email = $("#BoardEdit #collaborator_name").val();
					$("#invite_email, #invite_message").blur();
					$("#BoardEdit #collaborator_name").val("Enter a name")
				} else {
					$("#BoardEdit #add_collaborators").children("input").serialize();
					$.post(board_collaborator, $("#BoardEdit #add_collaborators").children("input").serialize(), function(c) {
						if (c.status == "success") {
							trackGAEvent("submit_collaborator", "success", "edit_board_dialogue");
							$("#BoardEdit #collaborator_username").val("");
							$("#BoardEdit #collaborator_name").val("");
							c = '<li><a href="' + c.profile_url + '"><img class="collaborator_image" src="' + c.avatar_url + '" alt="Collaborator Photo" /></a><a class="collaborator_name" href="' + c.profile_url + '">' + c.full_name + '</a><a href="#" class="delete_collaborator" value="' + c.username + '">Remove</a></li>';
							$("#BoardEdit #add_collaborators ul").prepend(c)
						} else alert(c.message)
					})
				}
				return false
			});
			$("#BoardEdit .delete_collaborator").live("click", function() {
				trackGAEvent("delete_colaborator", "clicked", "edit_board_dialogue");
				var c = $(this);
				$.post(board_collaborator, {
					collaborator_username: c.attr("value"),
					remove: true
				}, function(d) {
					if (d.status == "success") {
						trackGAEvent("delete_collaborator", "success", "edit_board_dialogue");
						c.parent().remove()
					} else alert("something went wrong. Could not remove you as collaborator. Try Again")
				});
				return false
			});
			$("#invite_submit").submit(function() {
				trackGAEvent("invite_board", "submit", "edit_board_dialogue");
				$.post("/invite/new/", {
					name: "somebody",
					email: $("#invite_email").val(),
					message: $("#invite_message").val(),
					board_user: board_username,
					board_name: board_slug
				}, function(c) {
					data = $.parseJSON(c);
					if (data.status == "success") {
						trackGAEvent("invite_board", "success", "edit_board_dialogue");
						$("#invite_name").val("");
						$("#invite_email").val("");
						$("#invite_response").html("Invite sent successfully to " + invite_email + ".").show().delay(2E3).fadeOut(500)
					} else $("#invite_response").html(data.message)
				});
				return false
			});
			$("#invite_submit").submit(function() {
				var c = 'Hi!\n\nI wanted to invite you to Pinterest so you can help contribute to my pinboard, "' + board_body_name + '". Pinterest is a place to catalog things you love. You can create pinboards on anything, from fashion, to gadgets, to art.\n\nEnjoy!';
				$("#InviteCollaborator").fadeOut(250);
				$("#InviteCollaborator #invite_email").val("");
				$("#InviteCollaborator #invite_message").val(c);
				$("#InviteCollaborator #invite_response").val("")
			})
		},
		init_ac: function() {
			if (!ac_init) {
				ac_init = true;
				Tagging.initInput("#BoardEdit #collaborator_name", function(a) {
					$("#BoardEdit #collaborator_username").val(a.value);
					$("#BoardEdit #collaborator_name").val(a.label)
				}, function() {
					$("#BoardEdit #submit_collaborator").click()
				})
			}
		},
		deleteBoard: function() {
			trackGAEvent("delete_board", "clicked", "edit_board_dialogue");
			var a = $("#DeleteBoard .SubmitButton");
			a.addClass("disabled");
			$("strong", a).text("Deleting...");
			$.ajax({
				type: "DELETE",
				dataType: "json",
				url: board_settings,
				success: function(c) {
					trackGAEvent("delete_board", "success", "edit_board_dialogue");
					if (c.status == "done") window.location = "/";
					else alert("Board delete failed - please refresh and try again. We are very sorry :-/")
				},
				error: function() {
					alert("Board delete failed - please refresh and try again. We are very sorry :-/")
				}
			})
		}
	}
}();

(function(a) {
	a.fn.extend({
		switcher: function(c) {
			a.extend({}, c);
			return this.each(function(d) {
				function f() {
					h.checkbox.bind("change.switch", e);
					h.switcher.live("click.switch", b)
				}
				function g() {
					return a('<div class="switch"><div class="shadow"></div><div class="border"><div class="knob"><div class="circle"><div class="inner circle"></div></div><div class="labels"><label class="on">On</label><label class="off">Off</label></div></div></div></div>')
				}
				function b() {
					console.log("Click");
					h.checkbox.attr("checked") !== "checked" ? h.checkbox.prop("checked", true) : h.checkbox.prop("checked", false);
					e()
				}
				function e() {
					h.x = h.switcher.find(".knob").offset().left;
					var k = a(".shadow", h.switcher);
					if (h.x < h.startX + 31) {
						a(".knob", h.switcher).css("margin-left", "62%");
						k.addClass("on")
					} else {
						a(".knob", h.switcher).css("margin-left", "0%");
						k.removeClass("on")
					}
					console.log("")
				}
				var h = {
					checkbox: a(),
					switcher: a(),
					clicked: false,
					moved: false,
					startX: 0,
					x: 0
				};
				h.switcher = g(d);
				h.checkbox = a(this);
				if (!(a.browser.msie && a.browser.version < 9)) {
					h.checkbox.hide();
					h.checkbox.after(h.switcher);
					h.startX = h.switcher.find(".knob").offset().left;
					f();
					if (h.checkbox.is(":checked")) {
						e();
						a(".shadow", h.switcher).addClass("on")
					}
				}
			})
		}
	})
})(jQuery);


