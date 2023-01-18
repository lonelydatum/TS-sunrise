(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

(0, _commonJsCommonJs.b_728x90)();

},{"../../_common/js/common.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _proline = require("./proline");

var _helpersHelpersJs = require("./helpers/helpers.js");

var banner = document.getElementById('banner');
var bannerSize = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power4.out"
});

var read = {
	frame1: 2.6,
	frame2: 3,
	frame3: 3
};

var w = bannerSize.w;
var h = bannerSize.h;

function fader(el, time) {
	var tl = new TimelineMax();
	tl.from(el, { duration: .3, opacity: 0 }, "+=.2");
	tl.to(el, { duration: .2, opacity: 0 }, "+=" + time);
	return tl;
}

function init() {
	var tl = new TimelineMax({ onComplete: function onComplete() {
			if (document.getElementById("legalBtn")) {
				TweenLite.set("#legalBtn", { display: "block" });
			}
		} });
	tl.set(".frame1", { opacity: 1 });

	return tl;
}

function sliderSlant() {
	var tl = new TimelineMax();
	tl.add("t1");
	tl.from(".t1a", { duration: .20, x: "-=100", y: "+=30", opacity: 0, ease: Power4.easeOut }, "t1");
	tl.from(".t1b", { duration: .20, x: "+=100", y: "-=30", opacity: 0, ease: Power4.easeOut }, "t1+=.39");
	return tl;
}

function sliderVertical() {
	var tl = new TimelineMax();
	tl.add("t1");
	tl.from(".t1a", { duration: .20, y: "-=30", opacity: 0 }, "t1");
	tl.from(".t1b", { duration: .20, y: "+=30", opacity: 0 }, "t1+=.2");
	return tl;
}

function standard() {
	var duration = arguments.length <= 0 || arguments[0] === undefined ? 6 : arguments[0];

	var tl = init();

	// return
	tl.add("cloud", .8);
	tl.to(".cloud.right.a", { duration: duration * 1, x: 0 }, "cloud");
	tl.to(".cloud.right.b", { duration: duration * 1, x: 0 }, "cloud");
	tl.to(".cloud.right.c", { duration: duration * 1, x: 0 }, "cloud");

	tl.to(".cloud.left.a", { duration: duration * 1, x: 0 }, "cloud");
	tl.to(".cloud.left.b", { duration: duration * 1, x: 0 }, "cloud");

	tl.add("start", 1.2);
	tl.to(".dark", { duration: duration * 1, opacity: 0 }, "start");
	// tl.from(".light", {duration:duration*1, opacity:0}, "start")
	tl.to(".lantern", { duration: duration * 1.2, y: 0 }, "start");
	tl.to(".logo", { duration: duration * 1, y: 0 }, "start");

	return tl;
}

function b_970x250() {
	b_728x90();
}

function b_160x600() {
	standard();
}

function b_300x250() {
	standard();
}

function b_300x600() {
	standard();
}

function b_1000x700() {
	standard();
}

function b_970x70() {

	standard();
}

function b_320x50() {
	standard(sliderVertical);
}

function b_728x90(text1) {
	standard(7);
}

exports.init = init;
exports.b_160x600 = b_160x600;
exports.b_300x250 = b_300x250;
exports.b_300x600 = b_300x600;
exports.b_320x50 = b_320x50;
exports.b_728x90 = b_728x90;
exports.b_970x250 = b_970x250;
exports.b_1000x700 = b_1000x700;
exports.b_970x70 = b_970x70;
exports.origin = _helpersHelpersJs.origin;
exports.standard = standard;
exports.read = read;

},{"./helpers/helpers.js":3,"./proline":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function origin(el, x, y) {
	TweenLite.set(el, { transformOrigin: x + "px " + y + "px", x: -x / 2 + "px", y: -y / 2 + "px", scale: .5 });
}

exports.origin = origin;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {
    TweenLite.set("#olg", { opacity: 1 });
    var tl = new TimelineMax();

    tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
    tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

    // tl.timeScale(2)

    return tl;
}

exports.olg = olg;

},{}]},{},[1])


//# sourceMappingURL=main.js.map
