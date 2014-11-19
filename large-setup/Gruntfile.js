module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {   
				files: {
					'public/css/style.css': 'source/sass/style.scss',
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'cssmin']
			
			},
			js: {
				files: 'source/**/*.js',
				tasks: ['requirejs']
			}
		},
  		cssmin: {
		  minify: {
		    expand: true,
		    cwd: 'public/css',
		    src: ['*.css', '!*.min.css'],
		    dest: 'public/css',
		    ext: '.min.css'
		  }
		},
		requirejs: {
          production: {
            options: {
              baseUrl: "./source/js",
              mainConfigFile: "source/js/main.js",
              name: 'main',
              out: "public/js/smart.js",
              optimize: 'uglify2',
              // optimize: 'none',
              paths: {
                  requireLib: '../../node_modules/grunt-contrib-requirejs/node_modules/requirejs/require'
              },
              include: ["requireLib"],
              generateSourceMaps: true,
              preserveLicenseComments: false
            }
          },
        }

	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.registerTask('default',['watch']);
	grunt.registerTask('once',['sass','cssmin','requirejs']);
}
