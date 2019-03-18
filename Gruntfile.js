module.exports = function (grunt) {
  grunt.initConfig({
    sprite: {
      all: {
          src: './images/*.png',
          dest: './images/all.png',
          destCss: 'dist/sprites.css'                                            
      }
          
    }
      
  });

    grunt.loadNpmTasks('grunt-spritesmith');

    grunt.registerTask('default', ['sprite']);

};
