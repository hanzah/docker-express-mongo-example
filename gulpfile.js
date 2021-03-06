var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('serve', function(){
	var options = {
		script: 'app/app.js',
		delayTime: 1,
		legacyWatch: true,
		watch: ['*.js', 'app/*.js']
	}

	return nodemon(options).on('restart', function(enc){
				console.log('Restarting...');
			});
});