module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
					    dist: {
					        src: [
					            'app/**/*.js' 
					        ],
					        dest: 'dist/built.js'
					    }
                },

        

		uglify: { 
		      
				        minjs1: {
				                src: ['dist/built.js'],
				                dest: 'dist/built.min.js'
				                },
				        minjs2: {
				            src: [''],
				            dest: ''
				                }
		         
		      }


    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
     grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat']);
    grunt.registerTask('minify', ['uglify']);



};







