'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.name %> -v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n'
		+ '* <%= pkg.homepage %>\n'
		+ '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> */\n',
		jshint: {

		},
		clean: {
			src: ['build']
		},
		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: true
			},
			dist: {
				src: ['src/predicate.model.js', 'src/predicate.viewmodel.js'],
				dest: 'build/<%= pkg.name %>.js'
			}
		},
		uglify: {
			options: {
				banner: '<%= banner %>'
			},
			build: {
				src: '<%= concat.dist.dest %>',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.registerTask('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default tasks(s).
	grunt.registerTask('default', ['clean', 'concat', 'uglify']);

}