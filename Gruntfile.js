module.exports = function(grunt) {
  grunt.initConfig({  
    
    express: {
      options: {
      	script: 'server.js'
      },
      mock: {},
      proxy: {
        options: {
        	args: ['--proxy']	
        }
      }
    },

    watch: {
      mock: {
        files:  [ '*.js' ],
        tasks:  [ 'express:mock' ],
        options: {
          spawn: false
        }
      },
      proxy: {
        files:  [ '*.js' ],
        tasks:  [ 'express:proxy' ],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('mock', [ 'express:mock', 'watch:mock' ]);
  grunt.registerTask('proxy', [ 'express:proxy', 'watch:proxy' ]);
};