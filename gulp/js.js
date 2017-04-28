/*
 * JS assets (vendor and private ones)
 */
module.exports = function (gulp, plugins, params) {
	var streams = plugins.mergeStream();
	var nameOutputJS = params.global.nameOutputJs;
	var map = {};
	map[nameOutputJS] = plugins._.union(params.jsAssets.built);
    return function () {
    	for (var file in map) {
    		streams.add(gulp.src(map[file])
				.pipe(plugins.concat({
					path: file,
					newLine: '\r\n'
				}))
				.on('error', console.log)
				.pipe(gulp.dest(params.global.jsOutput))
			);
    	}
		return streams.isEmpty() ? null : streams;
    };
};
