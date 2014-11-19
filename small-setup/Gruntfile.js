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
				tasks: ['concat:dev']
			}
		},
		concat: {			
		    app: {
		      src: [
		      'source/js/modernizr-custom.js',
		      'node_modules/jquery/dist/jquery.js',
		      'source/js/plugins/jquery.smallProjectPlugin.js',
		      'source/js/main.js'
		      ],
		      dest: 'public/js/script.js',
		    },
		   	dev: {
		      src: [
		      'source/js/modernizr-custom.js',
		      'node_modules/jquery/dist/jquery.js',
		      'source/js/plugins/jquery.smallProjectPlugin.js',
		      'source/js/main.js'
		      ],
		      dest: 'public/js/script.min.js',
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
		uglify: {
			options: {
		      sourceMap: 'true'
		    },
		  dist: {
		    files: {
		      'public/js/script.min.js': ['<%= concat.app.dest %>']
		    }
		  }
		},
		modernizr: {

		    dist: {
		        
		        "devFile" : "node_modules/grunt-modernizr/lib/modernizr-dev.js",

		        "outputFile" : "source/js/modernizr-custom.js",

		        // Based on default settings on http://modernizr.com/download/
		        "extra" : {
		            "shiv" : true,
		            "printshiv" : false,
		            "load" : true,
		            "mq" : false,
		            "cssclasses" : true
		        },

		        // Based on default settings on http://modernizr.com/download/
		        "extensibility" : {
		            "addtest" : false,
		            "prefixed" : true,
		            "teststyles" : false,
		            "testprops" : true,
		            "testallprops" : true,
		            "hasevents" : false,
		            "prefixes" : false,
		            "domprefixes" : true
		        },

		        "uglify" : true,

		    }

		}


	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-modernizr');
	grunt.registerTask('default',['watch']);
	grunt.registerTask('once',['sass','cssmin','modernizr','concat','uglify']);
}
