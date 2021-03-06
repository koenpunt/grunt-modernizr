/*global define*/

define(["Modernizr"], function (M) {
	var tests = {
		"canvastext" : M.canvastext,
		"csstransforms3d": M.csstransforms3d,
		"flexbox": M["flexbox"],
		"cssgradients": M.cssgradients,
		"opacity": M.opacity,
		"indexedDB": M.indexedDB,
		"backgroundsize": M.backgroundsize,
		"borderimage": M.borderimage,
		"borderradius": M.borderradius,
		"boxshadow": M.boxshadow,
		"cssanimations": M.cssanimations,
		"csscolumns": M.csscolumns,
		"cssreflections": M.cssreflections,
		"csstransitions": M.csstransitions,
		"testallprops": M.testallprops,
		"flexbox-legacy": M["flexbox-legacy"],
		"prefixed": M.prefixed,
		"csstransforms": M.csstransforms,
		"mq": M.mq,
		"hashchange": M.hashchange,
		"draganddrop": M.draganddrop,
		"generatedcontent": M.generatedcontent,
		"svg": M.svg,
		"inlinesvg": M.inlinesvg,
		"smil": M.smil,
		"svgclippaths": M.svgclippaths,
		"input": M.input,
		"inputtypes": M.inputtypes,
		"touch": M.touch,
		"fontface": M.fontface,
		"testbundle": M.testbundle,
		"respond": M.respond,
		"websockets": M.websockets,
		"applicationcache": M.applicationcache,
		"audio": M.audio,
		"canvas": M.canvas,
		"geolocation": M.geolocation,
		"history": M.history,
		"hsla": M.hsla,
		"indexeddb": M.indexeddb,
		"localstorage": M.localstorage,
		"multiplebgs": M.multiplebgs,
		"postmessage": M.postmessage,
		"scriptdefer": M.scriptdefer,
		"sessionstorage": M.sessionstorage,
		"textshadow": M["textshadow"],
		"rgba": M.rgba,
		"video": M.video,
		"webgl": M.webgl,
		"websqldatabase": M.websqldatabase,
		"webworkers": M.webworkers
	};

	var community = {
		"contextmenu": M.contextmenu,
		"emoji": M["emoji"],
		"json": M.json
	};

	return M;
});
