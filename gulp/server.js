/*
 * Live-reload BrowserSync
 */

var bs = require("browser-sync").create();

module.exports = function (gulp, plugins, params) {
	var url = params.global.urlWebsite+":"+params.global.port;
	var port = params.global.port;
	var files = params.global.allInputAssets;
	var isOpenAutomatically = params.global.isOpenAutomatically;
    return function () {
		bs.init({
			proxy: url,
			port: port,
			open: isOpenAutomatically,
			files: files
		});
    };
};